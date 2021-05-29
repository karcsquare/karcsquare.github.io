var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
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
        "yaw": 2.126056286030595,
        "pitch": 0.2492666839180977,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 2.2945640148867135,
          "pitch": 0.382996128364816,
          "rotation": 0,
          "target": "5-reception"
        },
        {
          "yaw": 1.219427300465096,
          "pitch": 0.1853943997693932,
          "rotation": 0,
          "target": "2-middle-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-container",
      "name": "Container",
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
        "yaw": 3.082741716117072,
        "pitch": 0.16938039517165038,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 1.0330019949263232,
          "pitch": 0.2749985559360244,
          "rotation": 0,
          "target": "5-reception"
        },
        {
          "yaw": 2.6745724443141254,
          "pitch": 0.4022855900241211,
          "rotation": 0,
          "target": "2-middle-corner"
        },
        {
          "yaw": -2.2913352881607896,
          "pitch": 0.3904568861405906,
          "rotation": 0,
          "target": "4-right-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-middle-corner",
      "name": "middle corner",
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
        "yaw": 0.9523435869750028,
        "pitch": 0.2730114701729942,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 1.839169599842288,
          "pitch": 0.39547550162095746,
          "rotation": 0,
          "target": "1-container"
        },
        {
          "yaw": 0.35004945655125397,
          "pitch": 0.2446864590960356,
          "rotation": 0,
          "target": "3-left-corner"
        },
        {
          "yaw": -2.822417563273259,
          "pitch": 0.2030132488785572,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-left-corner",
      "name": "left corner",
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
        "yaw": 1.4118540253626044,
        "pitch": 0.3140650884530256,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 2.176897196115527,
          "pitch": 0.252871919207573,
          "rotation": 0,
          "target": "2-middle-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-right-corner",
      "name": "right corner",
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
        "yaw": 1.524108244159252,
        "pitch": 0.2829877554477882,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": 1.1591030796144874,
          "pitch": 0.40420981031387093,
          "rotation": 0,
          "target": "1-container"
        },
        {
          "yaw": 1.6130057934348923,
          "pitch": 0.12540276568941344,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-reception",
      "name": "reception",
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
        "yaw": 1.1000155809368337,
        "pitch": 0.25899402155291007,
        "fov": 1.2856555038782131
      },
      "linkHotspots": [
        {
          "yaw": -0.16803355537505382,
          "pitch": 0.3435008741778329,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 1.7611572644162852,
          "pitch": 0.2678276168355982,
          "rotation": 0,
          "target": "1-container"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
