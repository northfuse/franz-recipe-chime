module.exports = (Franz) => {
  function getMessages() {
    const unreadBadges = document.querySelectorAll('.UnreadBadge');

    let totalUnreadCount = 0;
    for (let i = 0; i < unreadBadges.length; i++) {
      let unreadBadge = unreadBadges[i];
      let unreadCount = parseInt(unreadBadge.firstChild.data);
      totalUnreadCount += unreadCount;
    }
    Franz.setBadge(totalUnreadCount);
  }

  Franz.loop(getMessages);
}
