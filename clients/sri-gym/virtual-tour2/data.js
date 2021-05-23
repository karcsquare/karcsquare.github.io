var APP_DATA = {
  "scenes": [
    {
      "id": "0-cardio-area",
      "name": "Cardio Area",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1875359793529583,
          "pitch": 0.3651625106382834,
          "rotation": 0,
          "target": "2-zumba-area"
        },
        {
          "yaw": -1.1332374067295277,
          "pitch": 0.25204356971381614,
          "rotation": 0,
          "target": "1-lift-area"
        },
        {
          "yaw": -0.3598945855560949,
          "pitch": 0.16118748210104528,
          "rotation": 0,
          "target": "3-reception-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lift-area",
      "name": "Lift Area",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.008642979100448756,
          "pitch": 0.2677472856150267,
          "rotation": 0,
          "target": "2-zumba-area"
        },
        {
          "yaw": 0.6978018640350623,
          "pitch": 0.20745561050185835,
          "rotation": 0,
          "target": "0-cardio-area"
        },
        {
          "yaw": -1.354231128984841,
          "pitch": 0.16726035757178792,
          "rotation": 0,
          "target": "3-reception-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zumba-area",
      "name": "Zumba Area",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9457448360376937,
          "pitch": 0.4010368470786716,
          "rotation": 0,
          "target": "0-cardio-area"
        },
        {
          "yaw": 0.7534888728707063,
          "pitch": 0.26292192194064157,
          "rotation": 0,
          "target": "1-lift-area"
        },
        {
          "yaw": 1.9729742846241756,
          "pitch": 0.1561393962832991,
          "rotation": 0,
          "target": "3-reception-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-reception-area",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8346627719751485,
          "pitch": 0.2122490680247573,
          "rotation": 0,
          "target": "2-zumba-area"
        },
        {
          "yaw": 1.6585337832204683,
          "pitch": 0.19225549400739617,
          "rotation": 0,
          "target": "1-lift-area"
        },
        {
          "yaw": 1.058418173553349,
          "pitch": 0.13345291913353385,
          "rotation": 0,
          "target": "0-cardio-area"
        },
        {
          "yaw": 3.043406774154068,
          "pitch": 0.2881780371035205,
          "rotation": 0,
          "target": "4-center-hall-area-"
        },
        {
          "yaw": 2.8653828947237177,
          "pitch": 0.1369679786236926,
          "rotation": 0,
          "target": "5-corner-hall-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-center-hall-area-",
      "name": "Center hall Area ",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.116569413145508,
          "pitch": 0.2503283146255626,
          "rotation": 0,
          "target": "3-reception-area"
        },
        {
          "yaw": -1.875567644623466,
          "pitch": 0.1755607292902006,
          "rotation": 0,
          "target": "1-lift-area"
        },
        {
          "yaw": -0.21447208592401346,
          "pitch": 0.24446240025472044,
          "rotation": 0,
          "target": "5-corner-hall-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corner-hall-area",
      "name": "Corner Hall Area",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7586708980846577,
          "pitch": 0.23424596243748397,
          "rotation": 0,
          "target": "4-center-hall-area-"
        },
        {
          "yaw": -0.6849340595838935,
          "pitch": 0.10849790821518823,
          "rotation": 0,
          "target": "3-reception-area"
        },
        {
          "yaw": 1.0881535449666533,
          "pitch": 0.18143025706929983,
          "rotation": 0,
          "target": "6-heavy-work-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-heavy-work-area",
      "name": "Heavy Work Area",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.048813918581437576,
          "pitch": 0.23090781554490292,
          "rotation": 0,
          "target": "5-corner-hall-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SRI GYM",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
