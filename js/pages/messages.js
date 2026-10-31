/* Page Messages (#messages) : la Taverne (chat général, épinglée) + messages privés */
pages.messages = {
  hidden: true,
  icon: 'mail',
  title: 'Messages',

  render() {
    const isTaverne = state.conv === GUILD_CHANNEL.id;
    const conv = isTaverne ? null : conversations.find(c => c.id === state.conv);
    if (isTaverne) GUILD_CHANNEL.unread = 0;
    if (conv) conv.unread = 0;
    const open = isTaverne || conv;
    return `
      <div class="dm ${open ? 'has-conv' : ''}">
        ${this.list(conv, isTaverne)}
        ${isTaverne ? this.taverne() : conv ? this.thread(conv) : '<section class="panel dm-thread dm-empty ash">Choisis la Taverne ou un membre pour discuter.</section>'}
      </div>`;
  },

  list(active, isTaverne) {
    const others = members.filter(m => m !== me && !conversations.some(c => c.with === m.id));
    const last = guildChat[guildChat.length - 1];
    return `
      <aside class="panel dm-list">
        <button class="dm-item dm-channel ${isTaverne ? 'on' : ''}" onclick="openConversation('${GUILD_CHANNEL.id}')">
          <span class="chan-ico">#</span>
          <div><b>${GUILD_CHANNEL.name}</b><span>${last ? `${M(last.from).name} : ${escHtml(last.text)}` : GUILD_CHANNEL.topic}</span></div>
          ${GUILD_CHANNEL.unread ? `<em>${GUILD_CHANNEL.unread}</em>` : ''}
        </button>
        <div class="dm-sep">Messages privés</div>
        <ul>${conversations.map(c => {
          const m = M(c.with), lastMsg = c.msgs[c.msgs.length - 1];
          return `<li><button class="dm-item ${c === active ? 'on' : ''}" onclick="openConversation('${c.id}')">
            ${av(m)}
            <div><b>${m.name}</b><span>${lastMsg ? (lastMsg.from === me.id ? 'Toi : ' : '') + escHtml(lastMsg.text) : 'Nouvelle conversation'}</span></div>
            ${c.unread ? `<em>${c.unread}</em>` : ''}
          </button></li>`;
        }).join('')}</ul>
        <label class="dm-new">Écrire à un membre
          <select class="input" onchange="if(this.value) messageMember(this.value)">
            <option value="">Choisir…</option>
            ${others.map(m => `<option value="${m.id}">${m.name}</option>`).join('')}
          </select>
        </label>
      </aside>`;
  },

  // Chat général : chaque message affiche son auteur, regroupés par auteur consécutif
  taverne() {
    return `
      <section class="panel dm-thread">
        <header class="dm-head">
          <button class="iconbtn dm-back" onclick="state.conv=null;render()" aria-label="Retour">${ico('x', 16)}</button>
          <span class="chan-ico lg">#</span>
          <div><b>${GUILD_CHANNEL.name}</b><div class="ash xsmall">${GUILD_CHANNEL.topic}, ${members.length} membres</div></div>
        </header>
        <div class="dm-msgs chat" id="dmMsgs">${guildChat.map((x, i) => {
          const m = M(x.from), grouped = i > 0 && guildChat[i - 1].from === x.from;
          return `
            <div class="chat-line ${grouped ? 'grouped' : ''} ${x.from === me.id ? 'mine' : ''}">
              ${grouped ? '<span class="chat-gap"></span>' : `<a href="#profil/${m.id}">${av(m, 'sm')}</a>`}
              <div>
                ${grouped ? '' : `<div class="chat-meta"><a href="#profil/${m.id}"><b>${m.name}</b></a>${isStaff(m) ? `<span class="tag">${m.role}</span>` : ''}<time>${x.at}</time></div>`}
                <p>${escHtml(x.text)}</p>
              </div>
            </div>`;
        }).join('')}</div>
        <form class="dm-form" onsubmit="event.preventDefault();sendMessage()">
          <input class="input" id="msgInput" placeholder="Écrire dans # ${GUILD_CHANNEL.name}…" autocomplete="off">
          <button class="btn" aria-label="Envoyer">${ico('send', 18)}</button>
        </form>
      </section>`;
  },

  thread(c) {
    const m = M(c.with);
    return `
      <section class="panel dm-thread">
        <header class="dm-head">
          <button class="iconbtn dm-back" onclick="state.conv=null;render()" aria-label="Retour">${ico('x', 16)}</button>
          ${av(m)}
          <div><a href="#profil/${m.id}"><b>${m.name}</b></a><div class="ash xsmall">${m.role}, ${m.cls} ${m.lvl}</div></div>
          <a class="btn ghost sm" href="#profil/${m.id}">Voir le profil</a>
        </header>
        <div class="dm-msgs" id="dmMsgs">
          ${c.msgs.length ? c.msgs.map(x => `
            <div class="bubble ${x.from === me.id ? 'me' : ''}">
              <p>${escHtml(x.text)}</p><time>${x.at}</time>
            </div>`).join('') : `<p class="ash dm-hint">Début de ta conversation avec ${m.name}.</p>`}
        </div>
        <form class="dm-form" onsubmit="event.preventDefault();sendMessage()">
          <input class="input" id="msgInput" placeholder="Écrire à ${m.name}…" autocomplete="off">
          <button class="btn" aria-label="Envoyer">${ico('send', 18)}</button>
        </form>
      </section>`;
  },

  // Toujours afficher le dernier message
  after() {
    const box = document.getElementById('dmMsgs');
    if (box) box.scrollTop = box.scrollHeight;
  },
};
