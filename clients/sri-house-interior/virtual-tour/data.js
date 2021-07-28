var APP_DATA = {
  "scenes": [
    {
      "id": "0-bed-room-2",
      "name": "Bed Room-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2235753900673938,
        "pitch": -0.11689060861897538,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": -2.848184236237186,
          "pitch": 0.5471957241879561,
          "rotation": 0,
          "target": "2-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bed-room--1",
      "name": "Bed Room -1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.102653374310564,
        "pitch": -0.07853102041614157,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 3.1229317466337667,
          "pitch": 0.442864175570417,
          "rotation": 0,
          "target": "2-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8539806729544797,
        "pitch": -0.004696220276066754,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 0.177686373396849,
          "pitch": 0.20771932030784157,
          "rotation": 0,
          "target": "1-bed-room--1"
        },
        {
          "yaw": 1.3394349914006902,
          "pitch": 0.12031323099560431,
          "rotation": 0,
          "target": "0-bed-room-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SRI Project",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
