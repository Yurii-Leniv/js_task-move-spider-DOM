'use strict';

const spider = document.querySelector('.spider');
const area = document.querySelector('.wall');

area.addEventListener('click', (e) => {
  const ob = area.getBoundingClientRect();
  const clickY = e.clientY - ob.top - area.clientTop - spider.clientHeight / 2;
  const clickX = e.clientX - ob.left - area.clientLeft - spider.clientWidth / 2;

  const maxY = ob.bottom - ob.top - area.clientTop * 2 - spider.clientHeight;
  const maxX = ob.right - ob.left - area.clientLeft * 2 - spider.clientWidth;

  const top1 = Math.max(0, Math.min(clickY, maxY));
  const left1 = Math.max(0, Math.min(clickX, maxX));

  spider.style.top = top1 + 'px';
  spider.style.left = left1 + 'px';
});
