nextParticle = document.all.logo.nextParticle;

nextParticle.width = window.innerWidth;
nextParticle.width = window.innerHeight;

window.onclick = function () {
  document.all.logo.nextParticle.stop();
};
document.all.logo.nextParticle.on("stopped", function () {
  document.all.logo.nextParticle.start();
});
