var drag = {
  node: null,
  options: {}
};
function getMousePosition(ev) {
  if (!ev.clientX) ev = event.touches[0] || event.changedTouches[0];
  return {
    x: ev.clientX || 0,
    y: ev.clientY || 0,
  };
};
function moveElement(ev) {
  var el = drag.node;
  var p = getMousePosition(ev);
  el.style.top = p.y +'px';
  el.style.left = p.x +'px';
  drag.mousemove=this;
};
function startDrag(e) {
  drag.node = e.target;
  drag.options = drag.node.getAttribute( 'data-drag-options');
  drag.node.classList.add("is-dragging");
  document.getElementById('app').addEventListener('mousemove',moveElement, true);
  document.getElementById('app').addEventListener('mouseup', dropElement, true);
};
function dropElement(ev) {
  var el = drag.node;
  el.classList.remove("is-dragging");
  document.getElementById('app').removeEventListener('mousemove', moveElement, true);
  document.getElementById('app').removeEventListener('mouseup', dropElement, true);
};


Vue.directive('drag', {
  bind: function ( el, binding, vnode) {
    el.setAttribute( 'data-drag-options', JSON.stringify(binding['modifiers']) );
    el.addEventListener('mousedown', startDrag, true);
  },
  unbind: function(el, binding, vnode) {
    el.removeEventListener('mousedown', startDrag, true);
  }
})