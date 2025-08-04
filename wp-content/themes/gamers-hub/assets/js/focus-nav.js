( function( window, document ) {
  function gamers_hub_keepFocusInMenu() {
    document.addEventListener( 'keydown', function( e ) {
      const gamers_hub_nav = document.querySelector( '.sidenav' );
      if ( ! gamers_hub_nav || ! gamers_hub_nav.classList.contains( 'open' ) ) {
        return;
      }
      const elements = [...gamers_hub_nav.querySelectorAll( 'input, a, button' )],
        gamers_hub_lastEl = elements[ elements.length - 1 ],
        gamers_hub_firstEl = elements[0],
        gamers_hub_activeEl = document.activeElement,
        tabKey = e.keyCode === 9,
        shiftKey = e.shiftKey;
      if ( ! shiftKey && tabKey && gamers_hub_lastEl === gamers_hub_activeEl ) {
        e.preventDefault();
        gamers_hub_firstEl.focus();
      }
      if ( shiftKey && tabKey && gamers_hub_firstEl === gamers_hub_activeEl ) {
        e.preventDefault();
        gamers_hub_lastEl.focus();
      }
    } );
  }
  gamers_hub_keepFocusInMenu();
} )( window, document );