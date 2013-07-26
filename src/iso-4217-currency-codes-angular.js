'use strict';

angular.module('iso-4217-currency-codes', [])
  .factory('ISO4217', function() {
    var holder = {};

    holder.codeToCurrency = {
      'AED' : {
        'name': 'UAE Dirham',
        'countries': ['AE']
      },
      'AFN' : {
        'name': 'Afghani',
        'countries': ['AF']
      },
      'ALL' : {
        'name': 'Lek',
        'countries': ['AL']
      },
      'AMD' : {
        'name': 'Armenian Dram',
        'countries': ['AM']
      },
      'ANG' : {
        'name': 'Netherlands Antillean Guilder',
        'countries': ['CW', 'SX']
      },
      'AOA' : {
        'name': 'Kwanza',
        'countries': ['AO']
      },
      'ARS' : {
        'name': 'Argentine Peso',
        'countries': ['AR']
      },
      'AUD' : {
        'name': 'Australian Dollar',
        'countries': ['AU', 'CX', 'CC', 'HM', 'KI', 'NR', 'NF', 'TV']
      },
      'AWG' : {
        'name': 'Aruban Florin',
        'countries': ['AW']
      },
      'AZN' : {
        'name': 'Azerbaijanian Manat',
        'countries': ['AZ']
      },
      'BAM' : {
        'name': 'Convertible Mark',
        'countries': ['BA']
      },
      'BBD' : {
        'name': 'Barbados Dollar',
        'countries': ['BB']
      },
      'BDT' : {
        'name': 'Taka',
        'countries': ['BD']
      },
      'BGN' : {
        'name': 'Bulgarian Lev',
        'countries': ['BG']
      },
      'BHD' : {
        'name': 'Bahraini Dinar',
        'countries': ['BH']
      },
      'BIF' : {
        'name': 'Burundi Franc',
        'countries': ['BI']
      },
      'BMD' : {
        'name': 'Bermudian Dollar',
        'countries': ['BM']
      },
      'BND' : {
        'name': 'Brunei Dollar',
        'countries': ['BN']
      },
      'BOB' : {
        'name': 'Boliviano',
        'countries': ['BO']
      },
      'BRL' : {
        'name': 'Brazilian Real',
        'countries': ['BR']
      },
      'BSD' : {
        'name': 'Bahamian Dollar',
        'countries': ['BS']
      },
      'BTN' : {
        'name': 'Ngultrum',
        'countries': ['BT']
      },
      'BWP' : {
        'name': 'Pula',
        'countries': ['BW']
      },
      'BYR' : {
        'name': 'Belarussian Ruble',
        'countries': ['BY']
      },
      'BZD' : {
        'name': 'Belize Dollar',
        'countries': ['BZ']
      },
      'CAD' : {
        'name': 'Canadian Dollar',
        'countries': ['CA']
      },
      'CDF' : {
        'name': 'Congolese Franc',
        'countries': ['CD']
      },
      'CHF' : {
        'name': 'Swiss Franc',
        'countries': ['LI', 'CH']
      },
      'CLP' : {
        'name': 'Chilean Peso',
        'countries': ['CL']
      },
      'CNY' : {
        'name': 'Yuan Renminbi',
        'countries': ['CN']
      },
      'COP' : {
        'name': 'Colombian Peso',
        'countries': ['CO']
      },
      'CRC' : {
        'name': 'Costa Rican Colon',
        'countries': ['CR']
      },
      'CUC' : {
        'name': 'Peso Convertible',
        'countries': ['CU']
      },
      'CUP' : {
        'name': 'Cuban Peso',
        'countries': ['CU']
      },
      'CVE' : {
        'name': 'Cape Verde Escudo',
        'countries': ['CV']
      },
      'CZK' : {
        'name': 'Czech Koruna',
        'countries': ['CZ']
      },
      'DJF' : {
        'name': 'Djibouti Franc',
        'countries': ['DJ']
      },
      'DKK' : {
        'name': 'Danish Krone',
        'countries': ['DK', 'FO', 'GL']
      },
      'DOP' : {
        'name': 'Dominican Peso',
        'countries': ['DO']
      },
      'DZD' : {
        'name': 'Algerian Dinar',
        'countries': ['DZ']
      },
      'EGP' : {
        'name': 'Egyptian Pound',
        'countries': ['EG']
      },
      'ERN' : {
        'name': 'Nakfa',
        'countries': ['ER']
      },
      'ETB' : {
        'name': 'Ethiopian Birr',
        'countries': ['ET']
      },
      'EUR' : {
        'name': 'Euro',
        'countries': ['AX', 'AD', 'AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'GF', 'TF', 'DE', 'GR', 'GP', 'IE', 'IT', 'LU', 'MT', 'MQ', 'YT', 'MC', 'ME', 'NL', 'PT', 'RE', 'BL', 'MF', 'PM', 'SM', 'SK', 'SI', 'ES', 'VA']
      },
      'FJD' : {
        'name': 'Fiji Dollar',
        'countries': ['FJ']
      },
      'FKP' : {
        'name': 'Falkland Islands Pound',
        'countries': ['FK']
      },
      'GBP' : {
        'name': 'Pound Sterling',
        'countries': [ 'GG', 'IM', 'JE', 'GB']
      },
      'GEL' : {
        'name': 'Lari',
        'countries': ['GE']
      },
      'GHS' : {
        'name': 'Ghana Cedi',
        'countries': ['GH']
      },
      'GIP' : {
        'name': 'Gibraltar Pound',
        'countries': ['GI']
      },
      'GMD' : {
        'name': 'Dalasi',
        'countries': ['GM']
      },
      'GNF' : {
        'name': 'Guinea Franc',
        'countries': ['GN']
      },
      'GTQ' : {
        'name': 'Quetzal',
        'countries': ['GT']
      },
      'GYD' : {
        'name': 'Guyana Dollar',
        'countries': ['GY']
      },
      'HKD' : {
        'name': 'Hong Kong Dollar',
        'countries': ['HK']
      },
      'HNL' : {
        'name': 'Lempira',
        'countries': ['HN']
      },
      'HRK' : {
        'name': 'Croatian Kuna',
        'countries': ['HR']
      },
      'HTG' : {
        'name': 'Gourde',
        'countries': ['HT']
      },
      'HUF' : {
        'name': 'Forint',
        'countries': ['HU']
      },
      'IDR' : {
        'name': 'Rupiah',
        'countries': ['ID']
      },
      'ILS' : {
        'name': 'New Israeli Sheqel',
        'countries': ['IL']
      },
      'INR' : {
        'name': 'Indian Rupee',
        'countries': ['BT', 'IN']
      },
      'IQD' : {
        'name': 'Iraqi Dinar',
        'countries': ['IQ']
      },
      'IRR' : {
        'name': 'Iranian Rial',
        'countries': ['IR']
      },
      'ISK' : {
        'name': 'Iceland Krona',
        'countries': ['IS']
      },
      'JMD' : {
        'name': 'Jamaican Dollar',
        'countries': ['JM']
      },
      'JOD' : {
        'name': 'Jordanian Dinar',
        'countries': ['JO']
      },
      'JPY' : {
        'name': 'Yen',
        'countries': ['JP']
      },
      'KES' : {
        'name': 'Kenyan Shilling',
        'countries': ['KE']
      },
      'KGS' : {
        'name': 'Som',
        'countries': ['KG']
      },
      'KHR' : {
        'name': 'Riel',
        'countries': ['KH']
      },
      'KMF' : {
        'name': 'Comoro Franc',
        'countries': ['KM']
      },
      'KPW' : {
        'name': 'North Korean Won',
        'countries': ['KP']
      },
      'KRW' : {
        'name': 'Won',
        'countries': ['KR']
      },
      'KWD' : {
        'name': 'Kuwaiti Dinar',
        'countries': ['KW']
      },
      'KYD' : {
        'name': 'Cayman Islands Dollar',
        'countries': ['KY']
      },
      'KZT' : {
        'name': 'Tenge',
        'countries': ['KZ']
      },
      'LAK' : {
        'name': 'Kip',
        'countries': ['LA']
      },
      'LBP' : {
        'name': 'Lebanese Pound',
        'countries': ['LB']
      },
      'LKR' : {
        'name': 'Sri Lanka Rupee',
        'countries': ['LK']
      },
      'LRD' : {
        'name': 'Liberian Dollar',
        'countries': ['LR']
      },
      'LSL' : {
        'name': 'Loti',
        'countries': ['LS']
      },
      'LTL' : {
        'name': 'Lithuanian Litas',
        'countries': ['LT']
      },
      'LVL' : {
        'name': 'Latvian Lats',
        'countries': ['LV']
      },
      'LYD' : {
        'name': 'Libyan Dinar',
        'countries': ['LY']
      },
      'MAD' : {
        'name': 'Moroccan Dirham',
        'countries': ['MA', 'EH']
      },
      'MDL' : {
        'name': 'Moldovan Leu',
        'countries': ['MD']
      },
      'MGA' : {
        'name': 'Malagasy Ariary',
        'countries': ['MG']
      },
      'MKD' : {
        'name': 'Denar',
        'countries': ['MK']
      },
      'MMK' : {
        'name': 'Kyat',
        'countries': ['MM']
      },
      'MNT' : {
        'name': 'Tugrik',
        'countries': ['MN']
      },
      'MOP' : {
        'name': 'Pataca',
        'countries': ['MO']
      },
      'MRO' : {
        'name': 'Ouguiya',
        'countries': ['MR']
      },
      'MUR' : {
        'name': 'Mauritius Rupee',
        'countries': ['MU']
      },
      'MVR' : {
        'name': 'Rufiyaa',
        'countries': ['MV']
      },
      'MWK' : {
        'name': 'Kwacha',
        'countries': ['MW']
      },
      'MXN' : {
        'name': 'Mexican Peso',
        'countries': ['MX']
      },
      'MYR' : {
        'name': 'Malaysian Ringgit',
        'countries': ['MY']
      },
      'MZN' : {
        'name': 'Mozambique Metical',
        'countries': ['MZ']
      },
      'NAD' : {
        'name': 'Namibia Dollar',
        'countries': ['NA']
      },
      'NGN' : {
        'name': 'Naira',
        'countries': ['NG']
      },
      'NIO' : {
        'name': 'Cordoba Oro',
        'countries': ['NI']
      },
      'NOK' : {
        'name': 'Norwegian Krone',
        'countries': ['BV', 'NO', 'SJ']
      },
      'NPR' : {
        'name': 'Nepalese Rupee',
        'countries': ['NP']
      },
      'NZD' : {
        'name': 'New Zealand Dollar',
        'countries': ['CK', 'NZ', 'NU', 'PN', 'TK']
      },
      'OMR' : {
        'name': 'Rial Omani',
        'countries': ['OM']
      },
      'PAB' : {
        'name': 'Balboa',
        'countries': ['PA']
      },
      'PEN' : {
        'name': 'Nuevo Sol',
        'countries': ['PE']
      },
      'PGK' : {
        'name': 'Kina',
        'countries': ['PG']
      },
      'PHP' : {
        'name': 'Philippine Peso',
        'countries': ['PH']
      },
      'PKR' : {
        'name': 'Pakistan Rupee',
        'countries': ['PK']
      },
      'PLN' : {
        'name': 'Zloty',
        'countries': ['PL']
      },
      'PYG' : {
        'name': 'Guarani',
        'countries': ['PY']
      },
      'QAR' : {
        'name': 'Qatari Rial',
        'countries': ['QA']
      },
      'RON' : {
        'name': 'New Romanian Leu',
        'countries': ['RO']
      },
      'RSD' : {
        'name': 'Serbian Dinar',
        'countries': ['RS']
      },
      'RUB' : {
        'name': 'Russian Ruble',
        'countries': ['RU']
      },
      'RWF' : {
        'name': 'Rwanda Franc',
        'countries': ['RW']
      },
      'SAR' : {
        'name': 'Saudi Riyal',
        'countries': ['SA']
      },
      'SBD' : {
        'name': 'Solomon Islands Dollar',
        'countries': ['SB']
      },
      'SCR' : {
        'name': 'Seychelles Rupee',
        'countries': ['SC']
      },
      'SDG' : {
        'name': 'Sudanese Pound',
        'countries': ['SD']
      },
      'SEK' : {
        'name': 'Swedish Krona',
        'countries': ['SE']
      },
      'SGD' : {
        'name': 'Singapore Dollar',
        'countries': ['SG']
      },
      'SHP' : {
        'name': 'Saint Helena Pound',
        'countries': ['SH']
      },
      'SLL' : {
        'name': 'Leone',
        'countries': ['SL']
      },
      'SOS' : {
        'name': 'Somali Shilling',
        'countries': ['SO']
      },
      'SRD' : {
        'name': 'Surinam Dollar',
        'countries': ['SR']
      },
      'SSP' : {
        'name': 'South Sudanese Pound',
        'countries': ['SS']
      },
      'STD' : {
        'name': 'Dobra',
        'countries': ['ST']
      },
      'SVC' : {
        'name': 'El Salvador Colon',
        'countries': ['SV']
      },
      'SYP' : {
        'name': 'Syrian Pound',
        'countries': ['SY']
      },
      'SZL' : {
        'name': 'Lilangeni',
        'countries': ['SZ']
      },
      'THB' : {
        'name': 'Baht',
        'countries': ['TH']
      },
      'TJS' : {
        'name': 'Somoni',
        'countries': ['TJ']
      },
      'TMT' : {
        'name': 'Turkmenistan New Manat',
        'countries': ['TM']
      },
      'TND' : {
        'name': 'Tunisian Dinar',
        'countries': ['TN']
      },
      'TOP' : {
        'name': 'Pa\'anga',
        'countries': ['TO']
      },
      'TRY' : {
        'name': 'Turkish Lira',
        'countries': ['TR']
      },
      'TTD' : {
        'name': 'Trinidad and Tobago Dollar',
        'countries': ['TT']
      },
      'TWD' : {
        'name': 'New Taiwan Dollar',
        'countries': ['TW']
      },
      'TZS' : {
        'name': 'Tanzanian Shilling',
        'countries': ['TZ']
      },
      'UAH' : {
        'name': 'Hryvnia',
        'countries': ['UA']
      },
      'UGX' : {
        'name': 'Uganda Shilling',
        'countries': ['UG']
      },
      'USD' : {
        'name': 'US Dollar',
        'countries': ['AS', 'BQ', 'IO', 'EC', 'SV', 'GU', 'HT', 'MH', 'FM', 'MP', 'PW', 'PA', 'PR', 'TL', 'TC', 'US', 'UM', 'VG', 'VI']
      },
      'UYU' : {
        'name': 'Peso Uruguayo',
        'countries': ['UY']
      },
      'UZS' : {
        'name': 'Uzbekistan Sum',
        'countries': ['UZ']
      },
      'VEF' : {
        'name': 'Bolivar',
        'countries': ['VE']
      },
      'VND' : {
        'name': 'Dong',
        'countries': ['VN']
      },
      'VUV' : {
        'name': 'Vatu',
        'countries': ['VU']
      },
      'WST' : {
        'name': 'Tala',
        'countries': ['WS']
      },
      'XAF' : {
        'name': 'CFA Franc BEAC',
        'countries': ['CM', 'CF', 'TD', 'CG', 'GQ', 'GA']
      },
      'XCD' : {
        'name': 'East Caribbean Dollar',
        'countries': ['AI', 'AG', 'DM', 'GD', 'MS', 'KN', 'LC', 'VC']
      },
      'XOF' : {
        'name': 'CFA Franc BCEAO',
        'countries': ['BJ', 'BF', 'CI', 'GW', 'ML', 'NE', 'SN', 'TG']
      },
      'XPF' : {
        'name': 'CFP Franc',
        'countries': ['PF', 'NC', 'WF']
      },
      'YER' : {
        'name': 'Yemeni Rial',
        'countries': ['YE']
      },
      'ZAR' : {
        'name': 'Rand',
        'countries': ['LS', 'NA', 'ZA']
      },
      'ZMW' : {
        'name': 'Zambian Kwacha',
        'countries': ['ZM']
      },
      'ZWL' : {
        'name': 'Zimbabwe Dollar',
        'countries': ['ZW']
      }
    };

    holder.isCurrencyCode = function (input) {
      return angular.isDefined(this.codeToCurrency[input]);
    };

    holder.getCurrencyInfo = function(currencyCode) {
      return this.codeToCurrency[currencyCode];
    };

    return holder;
  })
  .filter('isoCurrency', ['ISO4217', function(ISO4217){
    return function (input) {
      var info = ISO4217.getCurrencyInfo(input);
      return angular.isUndefined(info) ? input : info.name;
    };
  }])
  .directive('currencyCode', ['ISO4217', function(ISO4217) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if(ISO4217.isCurrencyCode(viewValue)) {
            ctrl.$setValidity('currencycode', true);
            return viewValue;
          } else {
            ctrl.$setValidity('currencycode', false);
            return undefined;
          }
        });
      }
    };
  }]);
