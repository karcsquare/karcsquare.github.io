var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
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
        "yaw": 1.7928983899235575,
        "pitch": 0.05273373922753777,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 3.019459653042822,
          "pitch": 0.2921034598608294,
          "rotation": 0,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry",
      "name": "Entry",
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
        "yaw": 0.5683597047249904,
        "pitch": 0.19506497300221248,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 0.5434953130421931,
          "pitch": 0.30194599038402004,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "renovation Purpose",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
