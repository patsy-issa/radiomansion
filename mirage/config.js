export default function() {
  this.logging = false;
  this.get('/episodes');
  this.get('/podcasts');
  this.get('/episodes/:id');
  this.get('/podcasts/:id');
}
