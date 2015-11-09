showRight.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuRight, 'cbp-spmenu-open' );
  disableOther( 'showRight' );
};