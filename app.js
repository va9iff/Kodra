main = document.querySelector("#main");
var active = null;

//
//
//
//
//
//
//
//
//
//
document.querySelector("#adder").onclick = (e) => {
  active.addblob(new Add());
};

document.querySelector("#CollectorBlob").onclick = (e) => {
  active.addblob(new CollectorBlob("CollectorBlob"));
};

document.querySelector("#rmver").onclick = (e) => {
  active.rmvthisblob();
};

document.querySelector("#run").onclick = (e) => {
  TheMainBlob.resolve();
};

document.querySelector("#btnNumBlob").onclick = (e) => {
  active.addblob(new Num("Then" + e.pageX));
};
document.querySelector("#Log").onclick = (e) => {
  active.addblob(new LogBlob("Log"));
};

TheMainBlob = new MainBlob("main");
active = TheMainBlob;
active.makeactiveblob();
main.appendChild(active.widget);
