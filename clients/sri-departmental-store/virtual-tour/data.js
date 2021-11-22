var APP_DATA = {
  "scenes": [
    {
      "id": "0-cardio-section",
      "name": "Cardio Section",
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
        "yaw": 0.12904422321853204,
        "pitch": 0.24005917119103515,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": -2.642634774839486,
          "pitch": 0.3643200524179857,
          "rotation": 0,
          "target": "5-jumba-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cycling-area",
      "name": "Cycling Area",
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
        "yaw": 2.4018228791858487,
        "pitch": 0.08209805261035541,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 1.6993769140782078,
          "pitch": 0.2892002034481731,
          "rotation": 0,
          "target": "2-dumble-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dumble-area",
      "name": "Dumble Area",
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
        "yaw": 1.5547934362320177,
        "pitch": 0.10220609424566263,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 0.7516305678373616,
          "pitch": 0.26067388482756826,
          "rotation": 0,
          "target": "3-corner-area"
        },
        {
          "yaw": -2.126419020275817,
          "pitch": 0.3008638041084559,
          "rotation": 0,
          "target": "1-cycling-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corner-area",
      "name": "Corner Area",
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
        "yaw": 2.0071473099839636,
        "pitch": 0.11842781964553595,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 1.08930676928464,
          "pitch": 0.22711448813522495,
          "rotation": 0,
          "target": "4-reception-area"
        },
        {
          "yaw": 2.9391098057773366,
          "pitch": 0.309024523384263,
          "rotation": 0,
          "target": "2-dumble-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-reception-area",
      "name": "Reception Area",
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
        "yaw": 0.934368938499258,
        "pitch": 0.12333924024147613,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": -1.008946838514273,
          "pitch": 0.31409338125977015,
          "rotation": 0,
          "target": "5-jumba-area"
        },
        {
          "yaw": 1.6102570039094175,
          "pitch": 0.2249291488971661,
          "rotation": 0,
          "target": "3-corner-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-jumba-area",
      "name": "Jumba Area",
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
        "yaw": 2.6576338308124576,
        "pitch": 0.12810501751235215,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": -1.835107626663273,
          "pitch": 0.33410837237586044,
          "rotation": 0,
          "target": "0-cardio-section"
        },
        {
          "yaw": 1.3975759202143507,
          "pitch": 0.25996475543715114,
          "rotation": 0,
          "target": "4-reception-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "GYM INTERIOR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
