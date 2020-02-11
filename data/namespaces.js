const Namespace = require("../utils/classess/namespace");
const Room = require("../utils/classess/rooms");

const namespaces = [];

const ns1 = new Namespace({
  img:
    "http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png",
  name: "javascript",
  endpoint: "/javascript",
  id: 0
});
const ns2 = new Namespace({
  img:
    "https://engineering.fb.com/wp-content/uploads/2016/05/2000px-Python-logo-notext.svg_.png",
  name: "python",
  endpoint: "/python",
  id: 1
});
const ns3 = new Namespace({
  img:
    "https://pbs.twimg.com/profile_images/954020529391902720/jW4dnFtA_400x400.jpg",
  name: "java",
  endpoint: "/java",
  id: 2
});

ns1.addRoom(
  new Room({
    roomid: 0,
    privateRoom: false,
    history: [],
    name: "why javascript",
    ns: "javascript"
  })
);
ns1.addRoom(
  new Room({
    roomid: 1,
    privateRoom: false,
    history: [],
    name: "articles",
    ns: "javascript"
  })
);
ns1.addRoom(
  new Room({
    roomid: 2,
    privateRoom: false,
    history: [],
    name: "problems",
    ns: "javascript"
  })
);

ns2.addRoom(
  new Room({
    roomid: 0,
    privateRoom: false,
    history: [],
    name: "why python",
    ns: "pyhton"
  })
);
ns2.addRoom(
  new Room({
    roomid: 1,
    privateRoom: false,
    history: [],
    name: "articles",
    ns: "pyhton"
  })
);
ns2.addRoom(
  new Room({
    roomid: 2,
    privateRoom: false,
    history: [],
    name: "other",
    ns: "python"
  })
);

ns3.addRoom(
  new Room({
    roomid: 0,
    privateRoom: false,
    history: [],
    name: "why java",
    ns: "java"
  })
);
ns3.addRoom(
  new Room({
    roomid: 1,
    privateRoom: false,
    history: [],
    name: "articles",
    ns: "pyhton"
  })
);
ns3.addRoom(
  new Room({
    roomid: 2,
    privateRoom: false,
    history: [],
    name: "others",
    ns: "java"
  })
);
{
  /* <a href="http://pluspng.com/logo-javascript-png-5664.html" title="Image from pluspng.com"><img src="" alt="Logo Javascript PNG"></a> */
}

namespaces.push(ns1, ns2, ns3);

module.exports = namespaces;
