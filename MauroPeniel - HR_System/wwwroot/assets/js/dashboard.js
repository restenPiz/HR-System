(function ($) {
  'use strict';
  $(function () {
    var dashData1 = [
      [0,26.068193382661477],
      [1,25.88709150935915],
      [2,28.928221477526932],
      [3,24.830795658318337],
      [4,24.85092974219436],
      [5,22.774591414051095],
      [6,22.747896818655654],
      [7,18.048114046063965],
      [8,17.59073050876624],
      [9,21.537818914461322],
      [10,22.146436551824877],
      [11,20.300838613022865],
      [12,16.735032698267464],
      [13,12.413872176047448],
      [14,13.519219684546744],
      [15,17.25809280186558],
      [16,12.862483806544592],
      [17,8.80788649085728],
      [18,5.658660000939715],
      [19,8.99589358930801],
      [20,5.269093761151957],
      [21,8.912177863786797],
      [22,8.54011774798965],
      [23,9.117679467731724],
      [24,13.699940679394622],
      [25,11.627299181374358],
      [26,6.838737088173566],
      [27,6.160480751363494],
      [28,5.5198301136747006],
      [29,4.613458911330751],
      [30,3.383144691141741],
      [31,5.784322300404977],
      [32,3.162177027129866],
      [33,0.4181156533246826],
      [34,4.421765491030399],
      [35,0.8094224158158259],
      [36,9.413220194935048],
      [37,8.496612114320378],
      [38,12.738123867101411],
      [39,16.992766477187104],
      [40,21.26988175109983],
      [41,17.235980511632608],
      [42,20.443384061578378],
      [43,16.44487173159613],
      [44,15.007678605580637],
      [45,19.988715632633586],
      [46,21.321036609595225],
      [47,17.824308266337006],
      [48,16.4065339731343],
      [49,19.39209608662649],
      [50,15.239194559890223],
      [51,13.389321128669074],
      [52,12.09037154870833],
      [53,8.20591186418305],
      [54,12.313286201963933],
      [55,11.933214675329545],
      [56,15.633264981180222],
      [57,13.587849610586343],
      [58,9.376742478047557],
      [59,4.441641823689398],
      [60,4.162445655270751],
      [61,8.581262486880055],
      [62,5.441817659292306],
      [63,4.446750282572058],
      [64,4.276872245140725],
      [65,0.6300340509632116],
      [66,9.343436375658632],
      [67,6.515393292394883],
      [68,2.2640316516849293],
      [69,6.6366447744180395],
      [70,6.572503829436759],
      [71,9.798163928174066],
      [72,14.718403191204246],
      [73,13.254699260872222],
      [74,10.89349088805535],
      [75,7.6253467930040895],
      [76,3.3193074854674904],
      [77,7.08673703515133],
      [78,3.4528219176441137],
      [79,0.7645929463547789]
    ];
    
    var dashData2 = [
      [0,27.23664159018842],
      [1,29.950034069379143],
      [2,29.644830736016026],
      [3,25.769612795319304],
      [4,25.9672980159902],
      [5,29.306231062193945],
      [6,31.147632883383046],
      [7,27.909654447655207],
      [8,28.426864707429758],
      [9,25.465005080095395],
      [10,23.200993777812627],
      [11,18.298423899495088],
      [12,14.064190975238525],
      [13,12.756500849206802],
      [14,11.009698256259721],
      [15,13.777021847639084],
      [16,9.764516822388899],
      [17,12.692252142103655],
      [18,10.993546294133743],
      [19,12.76637263741139],
      [20,13.843200048454541],
      [21,12.99710730408541],
      [22,13.822031388180491],
      [23,10.292515338153533],
      [24,5.810285403597657],
      [25,7.660875205768917],
      [26,8.80933653938396],
      [27,5.686812232232839],
      [28,5.63261704703088],
      [29,6.316648245814662],
      [30,4.292790984709081],
      [31,3.697685557314916],
      [32,5.455501325916567],
      [33,6.531394786185377],
      [34,8.182002901837398],
      [35,10.97985605046474],
      [36,7.670515545499569],
      [37,9.735460695108053],
      [38,10.953255620842702],
      [39,9.507118597321119],
      [40,5.406694867279592],
      [41,4.93085440378951],
      [42,0.7194264766862029],
      [43,2.3619348017672],
      [44,5.584661939154044],
      [45,10.081512479626763],
      [46,10.688764814852894],
      [47,8.312501373210273],
      [48,8.453461343329785],
      [49,8.544757446852685],
      [50,5.845487925639054],
      [51,1.5807150114153075],
      [52,0.563335804242973],
      [53,4.894286843146261],
      [54,9.856287534207203],
      [55,4.896396641974256],
      [56,1.2942099540425414],
      [57,5.809421858534812],
      [58,1.733415110300613],
      [59,5.460384956746324],
      [60,5.990998309935479],
      [61,7.594177171313888],
      [62,10.660329512374963],
      [63,5.973124255808589],
      [64,3.3313399294306265],
      [65,2.9044866902167623],
      [66,6.997197180694009],
      [67,3.523117772813361],
      [68,0.2391695609805211],
      [69,7.542664698417907],
      [70,9.803040324502735],
      [71,13.065087817954282],
      [72,13.995144609672131],
      [73,9.572683988371006],
      [74,6.262408675238298],
      [75,6.343448236306536],
      [76,6.594421915015488],
      [77,2.2274478023982844],
      [78,2.917574438953957],
      [79,6.405517005560797]
    ];
    
    var dashData3 = [
      [0,6.128957947555989],
      [1,10.84817222898398],
      [2,10.082875592706364],
      [3,8.379792694345753],
      [4,9.547667054986002],
      [5,4.773069367954017],
      [6,3.0454348426761015],
      [7,3.185480541480409],
      [8,4.450143911018419],
      [9,8.546949979037999],
      [10,6.050127209461188],
      [11,4.410453949908726],
      [12,2.8471832046168135],
      [13,3.2079540734030276],
      [14,0.9162857987827975],
      [15,4.6063565674411855],
      [16,3.8108543994622526],
      [17,0.07206516983173028],
      [18,2.0235838597966103],
      [19,3.11038525002839],
      [20,7.661023220500137],
      [21,4.392807043336401],
      [22,2.095095656433122],
      [23,3.6570708335265856],
      [24,2.4750755395505095],
      [25,7.365775338287607],
      [26,3.160729824900333],
      [27,5.540806251220914],
      [28,0.6666892513129863],
      [29,0.45739329594884204],
      [30,3.0811785305861257],
      [31,2.6892574426453804],
      [32,9.518442007203902],
      [33,12.031943999285872],
      [34,16.195611227357478],
      [35,20.843438986023465],
      [36,23.379026518714024],
      [37,21.460750940722328],
      [38,18.40015951232427],
      [39,20.358446800608565],
      [40,19.603101971624245],
      [41,17.573732753993674],
      [42,18.335981070943816],
      [43,18.91414918074011],
      [44,21.429677122613647],
      [45,22.632616262811762],
      [46,25.94041622331629],
      [47,28.28824125745345],
      [48,24.435585052120953],
      [49,19.597224874784906],
      [50,16.697366660087496],
      [51,17.2746170933131],
      [52,19.375521763009953],
      [53,18.566968104092673],
      [54,16.44690797028392],
      [55,20.442159904725813],
      [56,18.092434838530224],
      [57,19.09142302964581],
      [58,20.00188167403888],
      [59,24.672205627775327],
      [60,21.740520957489338],
      [61,26.026676694036176],
      [62,21.822075708233086],
      [63,18.695019208154772],
      [64,15.29250743609338],
      [65,10.428562033214584],
      [66,11.55987585035231],
      [67,14.896344657234035],
      [68,10.307653031970014],
      [69,7.82306217533851],
      [70,10.238887296153184],
      [71,8.8820687254494],
      [72,10.100845630385322],
      [73,9.217362717192456],
      [74,7.896629068410565],
      [75,5.618935926339423],
      [76,1.5131215135592138],
      [77,0.2784413238662804],
      [78,0.7433401750417863],
      [79,5.451097931401492]
    ];
    
    var dashData4 = [
      [0,6.324329988896064],
      [1,4.5545479994319145],
      [2,6.100415206277958],
      [3,7.432637151690175],
      [4,5.60263986254995],
      [5,4.832425480686457],
      [6,0.9075445440427758],
      [7,3.1482139596880163],
      [8,3.5885516133784767],
      [9,8.182754904215557],
      [10,6.837879179399149],
      [11,7.716258659531048],
      [12,9.75364233299447],
      [13,7.201169154192655],
      [14,9.630620744220206],
      [15,11.538477281715668],
      [16,13.035970513058636],
      [17,9.503486957660966],
      [18,13.105314699985755],
      [19,15.573652620996299],
      [20,18.36838092867314],
      [21,19.350295101555055],
      [22,22.69794643352061],
      [23,23.35219679846173],
      [24,20.91736598898101],
      [25,22.911176901130386],
      [26,21.090864789052763],
      [27,20.48061479748539],
      [28,21.426374503640886],
      [29,20.891864381778447],
      [30,16.957950831314058],
      [31,21.859429734865678],
      [32,24.445685183180625],
      [33,21.60020575061327],
      [34,24.182176166954967],
      [35,21.86974880152203],
      [36,19.539183274840212],
      [37,21.515732665615417],
      [38,20.24304044649329],
      [39,21.42144524531482],
      [40,17.43905530887784],
      [41,21.32170798934231],
      [42,23.496165105754205],
      [43,20.329972299235536],
      [44,17.810139981879978],
      [45,13.81114512021962],
      [46,12.997268524103216],
      [47,10.799564050000965],
      [48,12.512143426754726],
      [49,14.43450958489095],
      [50,16.307532107912],
      [51,17.805531426224746],
      [52,20.335760159301408],
      [53,17.283957375094232],
      [54,14.358038015713984],
      [55,12.244453474656833],
      [56,14.851550722124355],
      [57,12.376637218044237],
      [58,10.410990876698504],
      [59,14.213384593585047],
      [60,14.086784566997245],
      [61,14.958720914431318],
      [62,17.654154385117913],
      [63,17.90512378115347],
      [64,15.51065801821678],
      [65,13.614902552930381],
      [66,15.012164925379324],
      [67,12.526591306146639],
      [68,12.41629841447126],
      [69,13.14610812485586],
      [70,11.99821556340692],
      [71,7.673455706892817],
      [72,9.020477318416384],
      [73,4.883009317288051],
      [74,8.216160091544365],
      [75,12.972532341711904],
      [76,14.900762708964251],
      [77,16.071024828496675],
      [78,16.80733921452504],
      [79,21.50456189793593]
    ];
    
    var dashData5 = [
      [0,0],
      [1,0],
      [2,0],
      [3,0],
      [4,0],
      [5,0],
      [6,0],
      [7,0],
      [8,0],
      [9,0],
      [10,0],
      [11,0],
      [12,0],
      [13,0],
      [14,0],
      [15,0],
      [16,0],
      [17,0],
      [18,0],
      [19,0],
      [20,0],
      [21,0],
      [22,0],
      [23,0],
      [24,0],
      [25,0],
      [26,0],
      [27,0],
      [28,0],
      [29,0],
      [30,0],
      [31,0],
      [32,0],
      [33,0],
      [34,0],
      [35,0],
      [36,0],
      [37,0],
      [38,0],
      [39,0],
      [40,10],
      [41,0],
      [42,0],
      [43,0],
      [44,45],
      [45,0],
      [46,0],
      [47,37],
      [48,0],
      [49,39],
      [50,0],
      [51,0],
      [52,0],
      [53,5],
      [54,0],
      [55,31],
      [56,0],
      [57,43],
      [58,0],
      [59,0],
      [60,30],
      [61,0],
      [62,0],
      [63,0],
      [64,0],
      [65,0],
      [66,0],
      [67,0],
      [68,0],
      [69,0]
    ];
    $.plot('#flotChart1', [{
      data: dashData1,
      color: '#6f42c1'
    }], {
    series: {
      shadowSize: 0,
      lines: {
        show: true,
        lineWidth: 2,
        fill: true,
        fillColor: { colors: [ { opacity: 0 }, { opacity: 1 } ] }
      }
    },
    grid: {
      borderWidth: 0,
      labelMargin: 0
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100
    },
    xaxis: { show: false }
  });

  $.plot('#flotChart2', [{
      data: dashData2,
      color: '#007bff'
    }], {
    series: {
      shadowSize: 0,
      lines: {
        show: true,
        lineWidth: 2,
        fill: true,
        fillColor: { colors: [ { opacity: 0 }, { opacity: 1 } ] }
      }
    },
    grid: {
      borderWidth: 0,
      labelMargin: 0
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100
    },
    xaxis: { show: false }
  });

  $.plot('#flotChart3', [{
      data: dashData3,
      color: '#f10075'
    }], {
    series: {
      shadowSize: 0,
      lines: {
        show: true,
        lineWidth: 2,
        fill: true,
        fillColor: { colors: [ { opacity: 0 }, { opacity: 1 } ] }
      }
    },
    grid: {
      borderWidth: 0,
      labelMargin: 0
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100
    },
    xaxis: { show: false }
  });

  $.plot('#flotChart4', [{
      data: dashData4,
      color: '#00cccc'
    }], {
    series: {
      shadowSize: 0,
      lines: {
        show: true,
        lineWidth: 2,
        fill: true,
        fillColor: { colors: [ { opacity: 0 }, { opacity: 1 } ] }
      }
    },
    grid: {
      borderWidth: 0,
      labelMargin: 0
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100
    },
    xaxis: { show: false }
  });

  $.plot('#flotChart5', [{
      data: dashData2,
      color: '#00cccc',
    },{
      data: dashData3,
      color: '#007bff'
    },{
      data: dashData4,
      color: '#f10075'
    }], {
    series: {
      shadowSize: 0,
      lines: {
        show: true,
        lineWidth: 2,
        fill: false,
        fillColor: { colors: [ { opacity: 0 }, { opacity: 1 } ] }
      }
    },
    grid: {
      borderWidth: 0,
      labelMargin: 20
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100
    },
    xaxis: {
      show: true,
      color: 'rgba(0,0,0,.16)',
      ticks: [
      ]
    }
  });

  $.plot('#flotChart6', [{
      data: dashData2,
      color: '#6f42c1'
    },{
      data: dashData3,
      color: '#007bff'
    },{
      data: dashData4,
      color: '#00cccc'
    }], {
    series: {
      shadowSize: 0,
      stack: true,
      bars: {
        show: true,
        lineWidth: 0,
        fill: 0.85
        //fillColor: { colors: [ { opacity: 0 }, { opacity: 1 } ] }
      }
    },
    grid: {
      borderWidth: 0,
      labelMargin: 20
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100
    },
    xaxis: {
      show: true,
      color: 'rgba(0,0,0,.16)',
      ticks: [
      ]
    }
  });
    $('#vmap').vectorMap({
      map: 'world_mill_en',
      panOnDrag: true,
      focusOn: {
        x: 0.5,
        y: 0.5,
        scale: 1,
        animate: true
      },
      series: {
        regions: [{
          scale: ['#60acf8', '#5b47fb'],
          normalizeFunction: 'polynomial',
          values: {
            "AF": 16.63,
            "AL": 11.58,
            "DZ": 158.97,
            "AO": 85.81,
            "AG": 1.1,
            "AR": 351.02,
            "AM": 8.83,
            "AU": 1219.72,
            "AT": 366.26,
            "AZ": 52.17,
            "BS": 7.54,
            "BH": 21.73,
            "BD": 105.4,
            "BB": 3.96,
            "BY": 52.89,
            "BE": 461.33,
            "BZ": 1.43,
            "BJ": 6.49,
            "BT": 1.4,
            "BO": 19.18,
            "BA": 16.2,
            "BW": 12.5,
            "BR": 2023.53,
            "BN": 11.96,
            "BG": 44.84,
            "BF": 8.67,
            "BI": 1.47,
            "KH": 11.36,
            "CM": 21.88,
            "CA": 1563.66,
            "CV": 1.57,
            "CF": 2.11,
            "TD": 7.59,
            "CL": 199.18,
            "CN": 5745.13,
            "CO": 283.11,
            "KM": 0.56,
            "CD": 12.6,
            "CG": 11.88,
            "CR": 35.02,
            "CI": 22.38,
            "HR": 59.92,
            "CY": 22.75,
            "CZ": 195.23,
            "DK": 304.56,
            "DJ": 1.14,
            "DM": 0.38,
            "DO": 50.87,
            "EC": 61.49,
            "EG": 216.83,
            "SV": 21.8,
            "GQ": 14.55,
            "ER": 2.25,
            "EE": 19.22,
            "ET": 30.94,
            "FJ": 3.15,
            "FI": 231.98,
            "FR": 2555.44,
            "GA": 12.56,
            "GM": 1.04,
            "GE": 11.23,
            "DE": 3305.9,
            "GH": 18.06,
            "GR": 305.01,
            "GD": 0.65,
            "GT": 40.77,
            "GN": 4.34,
            "GW": 0.83,
            "GY": 2.2,
            "HT": 6.5,
            "HN": 15.34,
            "HK": 226.49,
            "HU": 132.28,
            "IS": 12.77,
            "IN": 1430.02,
            "ID": 695.06,
            "IR": 337.9,
            "IQ": 84.14,
            "IE": 204.14,
            "IL": 201.25,
            "IT": 2036.69,
            "JM": 13.74,
            "JP": 5390.9,
            "JO": 27.13,
            "KZ": 129.76,
            "KE": 32.42,
            "KI": 0.15,
            "KR": 986.26,
            "KW": 117.32,
            "KG": 4.44,
            "LA": 6.34,
            "LV": 23.39,
            "LB": 39.15,
            "LS": 1.8,
            "LR": 0.98,
            "LY": 77.91,
            "LT": 35.73,
            "LU": 52.43,
            "MK": 9.58,
            "MG": 8.33,
            "MW": 5.04,
            "MY": 218.95,
            "MV": 1.43,
            "ML": 9.08,
            "MT": 7.8,
            "MR": 3.49,
            "MU": 9.43,
            "MX": 1004.04,
            "MD": 5.36,
            "MN": 5.81,
            "ME": 3.88,
            "MA": 91.7,
            "MZ": 10.21,
            "MM": 35.65,
            "NA": 11.45,
            "NP": 15.11,
            "NL": 770.31,
            "NZ": 138,
            "NI": 6.38,
            "NE": 5.6,
            "NG": 206.66,
            "NO": 413.51,
            "OM": 53.78,
            "PK": 174.79,
            "PA": 27.2,
            "PG": 8.81,
            "PY": 17.17,
            "PE": 153.55,
            "PH": 189.06,
            "PL": 438.88,
            "PT": 223.7,
            "QA": 126.52,
            "RO": 158.39,
            "RU": 1476.91,
            "RW": 5.69,
            "WS": 0.55,
            "ST": 0.19,
            "SA": 434.44,
            "SN": 12.66,
            "RS": 38.92,
            "SC": 0.92,
            "SL": 1.9,
            "SG": 217.38,
            "SK": 86.26,
            "SI": 46.44,
            "SB": 0.67,
            "ZA": 354.41,
            "ES": 1374.78,
            "LK": 48.24,
            "KN": 0.56,
            "LC": 1,
            "VC": 0.58,
            "SD": 65.93,
            "SR": 3.3,
            "SZ": 3.17,
            "SE": 444.59,
            "CH": 522.44,
            "SY": 59.63,
            "TW": 426.98,
            "TJ": 5.58,
            "TZ": 22.43,
            "TH": 312.61,
            "TL": 0.62,
            "TG": 3.07,
            "TO": 0.3,
            "TT": 21.2,
            "TN": 43.86,
            "TR": 729.05,
            "TM": 0,
            "UG": 17.12,
            "UA": 136.56,
            "AE": 239.65,
            "GB": 2258.57,
            "US": 14624.18,
            "UY": 40.71,
            "UZ": 37.72,
            "VU": 0.72,
            "VE": 285.21,
            "VN": 101.99,
            "YE": 30.02,
            "ZM": 15.69,
            "ZW": 5.57
          }
        }]
      }
    });
  });
})(jQuery);