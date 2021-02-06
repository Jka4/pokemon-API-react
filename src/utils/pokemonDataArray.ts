import { Pokes } from 'types/index';

const POKEMON: Pokes[] = [
  {
    id: 1,
    name: 'bulbasaur',
    weight: 69,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    chain: [
      {
        species_name: 'bulbasaur',
      },
      {
        species_name: 'ivysaur',
      },
      {
        species_name: 'venusaur',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAt0lEQVQoU2NkIAEwElALkv8PU0OZYttzlaJ+gu0+V5cafFlQc2EdAwPDXwYGBrANIAJm+n/9C7ubLzJ8T6/jeSr69UrZx96pyqYMuy/cRnYG3F1ui7q3OiqpeJ04845h45ft/wMfrzFcP5PhIqriBgZGhgaGfwxTJpjbfP+45ggrJy/DB9bLDKfn+TFsvfwe3YNw052mTJH3/vmJfdW55y9OLp38mZTQQAlZfEGHEsYgXYTCGcVkADR2QgwDcKAqAAAAAElFTkSuQmCC',
    order: 1,
    base_experience: 64,
  },
  {
    id: 2,
    name: 'ivysaur',
    weight: 130,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    chain: [
      {
        species_name: 'bulbasaur',
      },
      {
        species_name: 'ivysaur',
      },
      {
        species_name: 'venusaur',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB0UlEQVQ4T2NkIBMw4tK3KjSUWVRbm9GxoeEPNjVYNf5vaGBibGj4B9UAUvMfXTOyRsaG/Q3MQpdPMuflbf+5KiHGQ/w/s7L9woVTGRgYGENXhTKtDlv9F2YARON/BkYGRoSp/xlKuH/0ST1mevNW8Mz122nW61fNxrSxgYGJoYHhn0ODp4yynkTG42/f70lc+5Gc81vCSuLeL4ZH997tszm/wTumwU9myVX2+wyrIbYyNjQ0MDU0NPzTjTJVUnNQvMnEys1y6uIrhofMv/+VvGVn+v/j+9v7viKcooI8XDdPvtQ80Lj5RuiqUGaYH2EBIOy7dPo6YTkZu49fv/1Zv30rAwP7F5ZgVf4TImK/62b6L9nHwMAAsRE95PL3bDjDKCZkLPH5B8Oyuzf+M374zMgnIXf2cFisCbJasMbQVauYV4eF/U1eNMP3Kw/npm+vXjEo/GX8dICfg02QmYX97+37//jfffLfOmH6VphasEaYPxMmdfueePNS6sbmRScYzr96lTt/Zvg7XnY++ZCEmWz9/T8bCgs/QF35HxGP//8zMjAyYkQ0WjTAEwNKygHZfICBgenA1asQA1atAqUextCwMMbVq1eD2HCDcaZVQmkfAMPGumbTRg1oAAAAAElFTkSuQmCC',
    order: 2,
    base_experience: 142,
  },
  {
    id: 3,
    name: 'venusaur',
    weight: 1000,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    chain: [
      {
        species_name: 'bulbasaur',
      },
      {
        species_name: 'ivysaur',
      },
      {
        species_name: 'venusaur',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACqElEQVQ4T02SbUhTYRTHz/Pcvd/ZHBLbdLacOlM0DcrICEqiF0wiajdGBDNrRUlRoRGUXRAMrCiIoEzQJFPv+iB9sD4UQUH04izfFtqcr0tzzuZac+3l3rjTrc6X58/zP7/z4Zw/gn+FOIbBiKKi//0lJGM0EpTVmvDQisO/HK97qi2ZpEQry62rHXkAesk286bc1y2dg2cA/JzRSKAVmAcS0OiVC5dkiKx3gyOCS7+4AlNioaZvu1aUJHUNRUP7S+tu2eIwigvbwX0NqvyCalIiA6EUgUPZCylzApD7c0CAwrAkkf/51tdzfGt71+MYwwEgBMC16QqrsjE+W1RWkt1LiHpetTdtSFeqvabKEwI2EEgad3u+jnV9aNjj+tgaA2kaME0DC5dLttR6vc8N00jRpv71Y5dYqRoQ/QwVB3VRHUqRdpPCt3dV0+eY9N1DFEWHYss59uyoOUVBNttGBLAQnOAKlAIUkYsh5M+E31NOmEmeZAs1apyq0oCzf87MnGQexUDz0/J1/lHpTXF2eZlKPcCReBZssxloLqjmsvqHoF9BgEERRL4IXgrOLxS/ozsHl89x4+rmnfqMN3nKZOGCwBNxTIwRqaSBXUNK4Y5/HmvdXjztC0QhXU2Ax2OCKrpjGWypf7IjK8e0UayEzyICXs6MwwEWII3FcN8xDEmryLA+TUsYEMZip2tvy6maFzGwpuNhk3e1ovK9fbjbG/ILWUD5yONzT41PWvPycyJFh6nrIvdiaP3A6DWNPLnVZDJ9j4HMvWb1ogzWKioqPlEAUT2Awgng49N02miU6yqP3BaFI77z5Ycu8v00TeN45BKZ5DgOIcSfF8BisQgbGxvDcZNhGMJut3M0TbMxkG+2Wq2Yoih2JbPxgfwAxHActgNwNEK8H6u/6/QV+M7sZ00AAAAASUVORK5CYII=',
    order: 3,
    base_experience: 236,
  },
  {
    id: 4,
    name: 'charmander',
    weight: 85,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    chain: [
      {
        species_name: 'charmander',
      },
      {
        species_name: 'charmeleon',
      },
      {
        species_name: 'charizard',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABZklEQVQ4T2NkIBMwkqmPAavG/6tCmUEGMoat/sfAwPAfm+EEbfzPwMAI0soIJhEAq8Yvk9x7v7x7xiPRcDkDZuP//wyMyJrhGv83NDAxNjT8m9TWJporfv7Vg9diDIoVR2QYGC4+fVwowynb/+Q7xGKIzXCN+xscWBwbDvzZmGTipy7EuvHDQ4HvP/++Xiyh9uC0ouEbXbZwhnxkW+EaGxgYmBoYGP5NZWDQ1C1xm2FjKGx3asO1einti3NY+LhW3yz6Zu/IwPAHZiuKH///b2BiZGz492pL0mpRXZmQp9PWrXvxnevp5x9sNx1nHZkKCm3GsNV/UZza0NDA1ADyY240nyXLm0v/OX/c4vnM5vqS7d9Ex969BSDFWP0ID+hVq5grFxxUbt829db82krbxOb2wyA5mMEwdTjj8f///4yMjIz//zcwMDUyNIA0ghIDHGBPOdCoWbUqlDkM6if01EMw5eBKywD2qpEPT79KegAAAABJRU5ErkJggg==',
    order: 5,
    base_experience: 62,
  },
  {
    id: 5,
    name: 'charmeleon',
    weight: 190,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    chain: [
      {
        species_name: 'charmander',
      },
      {
        species_name: 'charmeleon',
      },
      {
        species_name: 'charizard',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB1klEQVQ4T2NkIBMwYtP338GBZbWo6P+w1av/4jIXq0aY4v8NDEyMDQz/sGnGqvGJh6Hz339c7rdZOOa4bNt7a1VoKHPo6tX/GBkY/sMMgWsEOY/xwIE/d/QZApWdi9Y9+vr1b+/MmUqTGBgeMfxnYGRgZPj//4wxK6PJ2d8gzQiNoaHMjKtX/73iYxf38y3z5M+M/+44HDtoDLWB8X8ggyhDtdQ/RpNnb1A0NjQ0MDU0NID8I7YhO3yOxpuv9vdWbvHzYmA4+L+Ct4Ph/Y9Ahn+/axlnM6yCawT5ARSCp6rLfX9dvd0slOsnxXX7vuj9jKlPhQssQnVDTs1iOP9PhyH3jTwjA8MjcKCBdK9atYo5LCzs7/T2zgbRH5+VNWwkXX9cuCDO+FKI4aWMyCLtW6UinJ/V14ktvjl3vwMDi+MBhj8Yfjynrr3itYNkuMKPX89Y33FJ3RThesMy/1aoK8OVA2fSjFlNZqEGDsiA/wyrVjFvPHBgwetp8/Yo5mc4/P32Mcht2Xw1hq8ML/83MLAwNjD8wYgOkEADAwNTAwMkwqfOn2/AwMn5Mzsi4vp/aIgjJwSsCWC/gwOL44EDYNNhAYeeerBpBDv7f0MD0+qrVxlxpVcASvTBkBqjXswAAAAASUVORK5CYII=',
    order: 6,
    base_experience: 142,
  },
  {
    id: 6,
    name: 'charizard',
    weight: 905,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    chain: [
      {
        species_name: 'charmander',
      },
      {
        species_name: 'charmeleon',
      },
      {
        species_name: 'charizard',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACuElEQVQ4T2NkQAKrQhmYQ7UZ/jM2MPyDCYPE3gsaMwm+V/oXtnr1X5g4I4jxn4GBcXVoKBNI4iEDvyBbAGPenw0fumQZGL4jG8zAwABS/x8kxgjSxAjlPK1ksL73xMRA3/VOxf8XP55fOqu9gk/2q+SbFy/faAu93yoxieEKTDPYRhCYG2s9SZSPK1fgxeMes7iH8n++c6vfjXgTfSTR8/JePicGH9ZnDFash/012s9s2t/gwALWuNLH3GvfL8mtM3+wM7QJvjgVfORg0HNP0/Q/r+7cnPLXcu4GHa9/BrzcnPVPlm4MXLAngKGhgQmsMdvOY4mh8M9oJYH7F/a/VRLR5P28iefJi6tPBI2nNn9iZfgppfj3HSfflYon+xTD+G9rGq14/Ayssc9COizCT38lM8OPb7duPH8oI86i+ePfv+8zHyr++fCVo9vt/9vCn78/ZM3/JJjhyfqjtPLYsdNgjUfiGDyFpF02vX/98/e7a28/S2kIc2vKv+D+8OMPw91nv+Z/eyDzmYuHPf74u49lCgxci8OOH/8O1ngiV8Hiw1fpSS+vMvBKRYjftfZT9/71+OWfr3tOs9y8y8nAzPFtpwqngPuFG78rvfed7DiTZszKCAohx4YDf1q8/a0UHzxxsutQjxUx11D79uf/L4YjF5leHLrD+O2PELOCADPDoRe/EoMXHF4AD9X7CQocigse/HiQL5ElxCs49Y2JyT8FZUGmN2ceMbDcuMJw463Q129ygl0udTubUFLOqtBQZlCqWZsa5qLOKbD7+pWTk7Uixe88vv3dgv/m/0BGQZ5/FgsseBkYGv41NDQwNTQ0/IMkgP//GRkYGf8zbN7MNenu3ZB3W7fuadi9+xlIanlBboKMjlbS5c8fErIKK++haoTYD0+HIM6ZmWmsxoLv/zGGIRI2croFAEY8L5CKVwv2AAAAAElFTkSuQmCC',
    order: 7,
    base_experience: 240,
  },
  {
    id: 7,
    name: 'squirtle',
    weight: 90,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    chain: [
      {
        species_name: 'squirtle',
      },
      {
        species_name: 'wartortle',
      },
      {
        species_name: 'blastoise',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABLUlEQVQ4T2NkIBMwkqmPAavGVatWMYMMvHbt2v+GhoZ/2AwnaGNDQwMTNs0oGv///8/IyMj4f+qpy8Wfv331efj4Zcb0WP+bDf//MzUwMqLYDNcIMzmUgUHIaO/RJ0J8/JxnDh+cMrsoO7dh/36WBkfHP8hOhmsMXbWKeXVY2N/UZZvqhL6/b+R9ce/3ZRGVd5fv3PW41t1wASYP04xhI0PlOrVr1qfWywj/1tpynPXzSU6NG7+EhPdMD/etQtaMqXHqK55zSose6op8EFp1X5Vh2+MvDL8Y/5etLsrpxqvRZ/4aVZE3T9sNb2zbuMkgKuXWyf01j5csOIzTqWC3///PyMDI+B893mChjTVwkAVBCUD02jVGx4YGUEiCvINhGKEEgFUTyBJCGnEmZQBN+JYPuScdOQAAAABJRU5ErkJggg==',
    order: 10,
    base_experience: 63,
  },
  {
    id: 8,
    name: 'wartortle',
    weight: 225,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
    chain: [
      {
        species_name: 'squirtle',
      },
      {
        species_name: 'wartortle',
      },
      {
        species_name: 'blastoise',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACBElEQVQ4T2NkIBMw4tO3atUq5rCwsL/Y1GDV2PD/P9PV1QyMq8MYsWoCGQTW+P//f0ZGRsb/x65+FHr56FFDoKduHkj84Nm3DS9fPrse5qW78vbt2+yqqqo/YbaDNTY0NDA1NDT8O3p0p9jTdxLXDt9m2KYvx/3D2lYxdf/unV5ZMV7b0Z0Ldep/RgYGxv8JDAwchosvn2IV19HlY/7LwP73+u5QN123m8/+pzL9+8OrKsPah2Ij2Nb9/1kaHBn/1HTvWsQlYxn749lphpu3np5Xk+ZJTUt3P/r247tvBmoyQnCvQUyA2Ng4+WjL12//qjl/3GDg+f/g70duT2ZOXs5/jnYi/798+fP269tH5oGejg9AgYfi1MSK9ZFCvx9bx9hfS+ETkGI9evTJnwe/dFm9UtMZOf9+Y7h5eoduUFDEFVA0waMjbeYZ1lnpJr8r5jwwdBM9cU6G4wTD+a8JDE+/sv9VU2D//Zv5R06gldbc/yDbGBn/wTU2NPxnaWhg/JPdeqTt36/flSpPHQu/Gp61e/+LP/Dh4eX+69bVblq16j9zGDRukRIAxJ92vjWKn1kE+c6vL74I8n1g8pzQ98x/9x+Ylf6GgaGBiYGh4R88ASDiCKIZxJ85M401LW3mH1DCQA5AjOiACYASw9WrWoyrV4PTKKNDw37mAw0Of2EGwtQBAHn34I4TCJ1YAAAAAElFTkSuQmCC',
    order: 11,
    base_experience: 142,
  },
  {
    id: 9,
    name: 'blastoise',
    weight: 855,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    chain: [
      {
        species_name: 'squirtle',
      },
      {
        species_name: 'wartortle',
      },
      {
        species_name: 'blastoise',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACRElEQVQ4T2NkQAKrVq1iXg3jr2ZgWL067C+yPDKbEZcESPz////MjY2OjPYMBxgcGxhAhvyHqYdrXLVqFdvDl3+tNt1i//+BXeiX7Lf737dNS7yAbHBDQwNTQ0PDP5AYI8h5YWFhfzfPZBC5+Xvpk3NfVNm5WP4xsPx8885H9fOmLc2RN42dGL6lTmSYDLIRphlsY3d3Cfez1wKxt7+IRH0U0rF1lmX9e/vFR+ZsN0GGf+9vMjy+d4VBzdBlbfnC3cl7ZnV+/P//PyNY4/r1/QJLN76+euQtt1SqIQ+Djyn7v4cPLjGe+eH418/ZloGL6e2fB/fvcdy+da2wvLx8QkPDfhZGsG5GRpCn+RgY2LyWNCo0mOmrqp987vJv80cnJiUR7r/yvw4xb5qec9WpdL15aZz7VwYGqI0gv8JCbO80k8Wqmj4xW557/nz+mZX175P9/7gZ3rGcWtU6beNNhuyGBgeWhoYDf6Ch2sDEwNDwj0FkrpSr85NjtW5n5PlFVBjuPGFi2P3e+Y+AiBjL3cMLtq5eOsUXagHEj6GhocyrV6/+G5XQYLDt5b/zNuyPGQI1djy/+tr3fx9XhKQtLwvj4T2rpjCcmpILjR6IRpg/40ItpWVUnTt2Xv70/uzmK50MDHaiIcVa5yWEeBn+vbngOa2/ckdaWhrrrFmzfiOnHLg/kSN9xeodKdwcTAaXzx6bVNXQcAtmCUqS+/+fgZGxsYGR4epViPjq1ShpFSkGwKGJF4DizN6egcHBweEvNNrA6gFYDvnSgLAPrAAAAABJRU5ErkJggg==',
    order: 12,
    base_experience: 239,
  },
  {
    id: 10,
    name: 'caterpie',
    weight: 29,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
    chain: [
      {
        species_name: 'caterpie',
      },
      {
        species_name: 'metapod',
      },
      {
        species_name: 'butterfree',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABRklEQVQ4T2NkIBMwkqmPAUPjfwYGxsaGBsZ6kIkNDf8ZGRj+YzMcRSNIE7pCbGIgg+AaYQr2JzgI/OJgY1OY8eufGsOBz4wMDD+xaUZobGhgYmxo+Lct10FG6Dvj+h8q//QuybP050XurfgPlUN2MsKpDQxMDA0M/xgmRfPla1y7JywiIfzzGu+71phVSgwMDB8bGhqYGhoa/sE0I/sRxAYHRM/a6N3//7K7nPrx6G6KqHYfNyP7dRuPrv2rVoUyh4Wt/oviRxDn//4GFkbHhj8nNpXWyapLNHYeOnpXikFgmxKbaE9YfOcjZFtRQ/X/f0ZGRsb/SmkM/NPciyZd+fTJ/d63z2XTslcuQrYNw0awrVDNIPZMhjTWdIZZv///Z2BkZESNT6wpB+Sk+npQpDb8a/jfwNTAiAgUbIGDK4EQTjmkpFsA09d/D1vE4ccAAAAASUVORK5CYII=',
    order: 14,
    base_experience: 39,
  },
  {
    id: 11,
    name: 'metapod',
    weight: 99,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
    chain: [
      {
        species_name: 'caterpie',
      },
      {
        species_name: 'metapod',
      },
      {
        species_name: 'butterfree',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABGUlEQVQ4T2NkIBMwkqmPAZdGxlX/Q5nCGFf/Y2Bg+I/NcGwaQWLIitH5YHPQNcIVde32qHn05v68KZE3nzH8Z2BkYES1GUVjw34HlgbHA39q1/qkSGgJzL6670PEtOwtK9NmprHOSp/1G9nJcI0NDQ1MDQ0N/zIrogTF7V9d5mHTkf7y7N+Fhk2TPBlWM7xAtxVDo1+KubiCo+C1/z+4hH69Z/r54fsTw5W1J66npRmzzpp1Fm4rVqcGlTlXykjLtv3+/ofh8cO3K16+eVN4evXpFwwNDEwMDQygkMYdOIE57hl//jPZMvxnfPTt+ZuevetPvUV2LjHRAQsTlGjBmQAaGhyYQTqePfvMOGvW2T/oCYHqSY5gEgYAUTx2D62bz5MAAAAASUVORK5CYII=',
    order: 15,
    base_experience: 72,
  },
  {
    id: 12,
    name: 'butterfree',
    weight: 320,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
    chain: [
      {
        species_name: 'caterpie',
      },
      {
        species_name: 'metapod',
      },
      {
        species_name: 'butterfree',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACCklEQVQ4T2NkIBMwIuljbGhoYK63r2dgcGD4y8jI+J+BgQEk/3///v8sr1+v/h8WFvYXph6mEawA2fKGhv9MDQ2M//7//88INQTFbSANME3sOVmNWZmZWd+1dETmMDIyWuloODBduXHgwIWzTxNXrF7xraOjeCXMIEYHhwaWAwca/jAwMDicOH5nv4CAAMPnL58Prdq4JKW7pZbj2LGrcTIySiUnjh37GxbhrMjAwPC4oaGBiTE0NJR59erVILcbb99+6jQHO+svOQVF9ptXrs6qm77y0YSGwpYfH98xvHn37mFEhKs+AwPDR5ArwU79//8/A8gf06euOhgeEWp39fK1n4+2HGL/9ouHQUCI6Y9KsDfL+pWz25taSqv279/P4ujo+AccOA0NDSwNDQ1/HB2T/NrbKzeyMLL/X7fj5B/u88cZNZWkWR6o6t0synS1Y2BgeMXA0MDEwNDwDx4d////Z2JkZPzX3jl7lZmhTej6/ccZbj16zOBkavr33K6VTqu2LTzU0LCfpaHBERQe4BAFg////zMzMjL+ndi9YI2eg2ew46z5W4tFJawM1NQFV6+b77Rp06z9SAGJ0AgKqYaGhn+xfrEmup6eEWUakg0JR57YfL58jnXtqv4t6PGMnHJAtmKNbGypEkUjNKCY7O3tmRwdHP6Grl7NpH3tGigpgv2FDDA0EpvmAYJw1pJQJzIyAAAAAElFTkSuQmCC',
    order: 16,
    base_experience: 178,
  },
  {
    id: 13,
    name: 'weedle',
    weight: 32,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png',
    chain: [
      {
        species_name: 'weedle',
      },
      {
        species_name: 'kakuna',
      },
      {
        species_name: 'beedrill',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABIElEQVQ4T2NkIBMwkqmPAavG////M65evZopLCzsLy6DMTSCNDEyMv4Hafj//z8TIyPjP2yaUTQ2NDQwNTQ0/Nt69YvE34cXFPy8bE4gG4RsAIpGmA0PD02dLsryM+PG3qIso1qG6f9XhTIzhq1GcTZcI8w2BoYsnpM1j26ZGL2XPHHpy27rhotuUGfDvQDio9i4KjSUOWz16r8LbY1TVPR+zL739Gq66ORX+56tX/ExKS/vNbKzUTTud3BgcTxw4M+SOB0fWc5/m++8vjafxahS/D2PeFJBQcFLhKvQbIS64D8DgwPLYv8PbT8Yvzpc23C7tZ+BYSOyJgynQkMN5ApwdMAAtpDFlXIYV4WGMjEwrAbrDVvNgJEQqJvkiEm/ADj0gA9me+naAAAAAElFTkSuQmCC',
    order: 17,
    base_experience: 39,
  },
  {
    id: 14,
    name: 'kakuna',
    weight: 100,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png',
    chain: [
      {
        species_name: 'weedle',
      },
      {
        species_name: 'kakuna',
      },
      {
        species_name: 'beedrill',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABL0lEQVQ4T2NkIBMwkqmPAavG//8bmBgYtBgZVocxMIYx/GNgYPiPbgGGxv///zMyMjKiKwSpQxFD0QiyiZGx4d/nh0u0/v/42Pv6duspZZ9nTQwMDH8ZGMCug2tG07iKmZEx7O+dvbnrlbWlAk7tnMnw9OkDh6AqhoP7GxhYHBsY/sCcjKJx1SoG5rAwhr87pqjM5Wa5k/Tum/yfe48e2hVOYDgOk8Oqcf/+BhZHx4Y/h5eHzxTn+5f25OHqP4cOKxo3LL9/aVUoA3PYarCTwQDFxv0NDiyODQf+rOi3CDJX/bf2ypUzF3wr/hmCFP5nYGBkxOlHhCTTph6J5Tduv59fNvPnDnTbMGxEcgU89P7/Z2BkZCQiHmGa//9vYGxsbGBoaAAnAAxA3SRHTPoFALejdw9sKZPXAAAAAElFTkSuQmCC',
    order: 18,
    base_experience: 72,
  },
  {
    id: 15,
    name: 'beedrill',
    weight: 295,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
    chain: [
      {
        species_name: 'weedle',
      },
      {
        species_name: 'kakuna',
      },
      {
        species_name: 'beedrill',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB80lEQVQ4T2NkwAH+///PyMDIwMDIwPgfmxJGHPpA4mANDQ3/merrQUYwMDAyMv6FqcfQuH//fhZHR8c/0xsWiWU2xH1gYGD4RYqNDLvW7bNnYuRKcQm0iH39/HXd//+Mv8SkRDpAXmBkZPwPt/H///9MjIyM/948+1Dx5+9PRQlZ8fRbFx7c+PThO7e+pZoM438mhrvXbhmoG6lf/L/qPzNYY0NDA1NDQ8O//+//C9x8dv+BiLgk/60bl7qlFFQPfnn9Zou4hOhvTk4u1vPnL9vaOpoc+f8fqhHkb2hg8K1dsfuwiyWv3o/ba/5f2X5s4VfHRj8zQ0MhRgbGfeLSws4gi8DOhTMYIcG+Yt05fXOWhev/vvqk+PbGXoZ3mrV/uFVNWGTEBDYraSj6wbwE0ggP+pdP33a9fPreubpuwlE/D53c/z9P/hT9/Z2F2zCFWVxcZq6+iUYKXCOMsXvjoUw+fuGSr+9+LnEq77o/P5JD3tzwd8OpfUvfdE/mSr7K8O0uAwPDVVh4wEO1p3qOfElrykMGBgZ+BgYJ9f8PRW/fP6WwbMu8HVV523+fR/cSRgKIDU2TW7zn7Mf/73w/MzI2gPz9f39DA4tjQ/1fBqTkhxyPoIgFG4ycUlaFMjCHrWaAJzWcSQ4aWBCXgZInmkEwjQC9Oty4bu/FVgAAAABJRU5ErkJggg==',
    order: 19,
    base_experience: 178,
  },
  {
    id: 16,
    name: 'pidgey',
    weight: 18,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
    chain: [
      {
        species_name: 'pidgey',
      },
      {
        species_name: 'pidgeotto',
      },
      {
        species_name: 'pidgeot',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABLElEQVQ4T2NkIBMw4tEHkvuPSx5D4////8FijIyM//+DKByaUTSCNIE0oNmC1Wa4Rpim+/f3c9xauWTFb/a/X3wKF8SsCg1lBhkUtnr1X2QD4Rr3NziwODYc+HPC3TBWKsZl0baHr7/OrVmgeZqB4TE2f8I1NjQwMDU0MPxLY2CQK9+Vd+Lx5W+Sry68uHn28bsGK0ORO/79m85gtbGhoYGpoaHhHwODOPfz81kPH194Jfzi/kcGURV+hiOLL64r3X0kGDmwUAOnoYGJsaHh34be8HQJwX8zfvz+9+sPK0+rS9LCJqht8IBC0QizVSerWbNU8Gvvr7s3jqeu2NCMrgkcXZgeB8UjIkr+/29gYmRsAEURSjThSDn/Gf+DzIR4CmvqwZfk8KZisjUCADvGfA+i/L9bAAAAAElFTkSuQmCC',
    order: 21,
    base_experience: 50,
  },
  {
    id: 17,
    name: 'pidgeotto',
    weight: 300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
    chain: [
      {
        species_name: 'pidgey',
      },
      {
        species_name: 'pidgeotto',
      },
      {
        species_name: 'pidgeot',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACfElEQVQ4T2P8z8DAyMjA8J+BgYGhoaGBqaGh4R+IDQP//69iZmQM+7t3TpS8kLDYR8PACR+gehgYjvWFcu76pP0TpGlVaChz2OrVf0Ea9+9vYHF0bPhzfl22q4gUX8ue49fdEws3fPj//z/IMgaGo3NDLRkZfmdaJW+IA/GvhoayHbl373/62bO/GRgYFC5tyb8pJM57fLnPKe/Sl7u+wjXunRrgpijHsfPhg9/bHXPXBjEwMPyAOXVzV/h6B2/NgI9ffv1++ei9s3Ho9MP/V4Uyg21c0+rorq4qtIWHk43l2p0fhwVW3OyVl2Y5K7PuEve17flX5FVEWd5//P709fPPjoa+k27//9/ABNbYEKot5OqhfFxAmE2N98t/Bu4L/xmOnbu/7IGW8NukXLvcnz//MHz6+uPKulUX7Yv6d74DBSLjqlWhzGFhq/+ubHVxl5Fl2s7+UIvxu5AQw67j+x9Z6AmzG9kpiPPxczO8/fTrrJx5uxkDA8O////BMcHA+B8Svv+3THYr4WAS7ubgFWFg+veDgZfnL8OP318YOIUlr37+/KvAMnj6HrAmRob/YKeCQ4mRERyXoX4MKt1lBQfkDVWkLx26+WvhxB3pfTtuLwCrQ4pzRpimjRs3SrE//Z/AeuHlK/WUB1N/fjNmu3z62p+A0jp5BgaGZ6tWhbKFha3+BQttuMaG/fM5dG5wpLHf+W70XSJpJtun9mpp9pfeL69M6PFZwVC6KpSBOWw1AzhhgACGU0GC6xkYBFTbPS5IyPDL337w/aBl7SYHDKci0iTYvyC//ts2KZdd8OMrpd+ff0pdNpE6mR027Qty+oXbiCYIMgAcUPgAALEEFxwQl0CkAAAAAElFTkSuQmCC',
    order: 22,
    base_experience: 122,
  },
  {
    id: 18,
    name: 'pidgeot',
    weight: 395,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
    chain: [
      {
        species_name: 'pidgey',
      },
      {
        species_name: 'pidgeotto',
      },
      {
        species_name: 'pidgeot',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACIElEQVQ4T2NkQAL/V4UyM4at/gsS+h8aysywevU/RgaG/8hqYGxGGOP///+MjIyMEEX/t7EzMHr9BDEbGBiYGhgY/qFrBmv8/7+BiZGx4d/9DanuwpLCXR8vPBG4efzeGpcFx6oZGBh+YNOMovHi1Lit4gJSXjvXHPvrrsXMfP/S8/2Wm284g8xmYGAAqYU7G6xxVWgoc9jq1X+XpeT3mESKFC/affa95KEbi4MdxfPO7ryX433m8dQzxsasJmfP/kbxI8x/Nw4ULlLXlYldO+0Mw4snv17pSvwRY7l264j16uu2UDVgn4EIxtDQUObVq8EhafHkTO1xcQm+f4smnGIU5+JgfP3vP4MG9xeG7+t2Bjud/r4O5jJ0jfonl6dcMNAUYliw7MbfV/f+MFrbCTFqGEswPNt1gfHWx181URMOtcI0QwKnoYGJsaHh39pG7yYbE7Han38YGO4+/cKgpsD35+eP/yxXr7zYfP32qxnflH12NDQ0gKMGEY+rVjEzhoX93T3Jo5SHibuWn+8/48dnn7iUNOWYHr//8cAkYZkiNGDAoQuNDkjkb58zK+vbk+f51y89XKgqwZDJ//ilDJPU23VMutJXnj34PDWuZ9er//8ZGBkZ0TSunj3blunPN4XfTP+uCv9jL/jCwvglMDUzCynVwOMSe5JDS1/79zewODo2/EEWhmuEJL3/TAcaG5kc6uvBCR0cCIwQ36CnVQBO4/4PNJ65IQAAAABJRU5ErkJggg==',
    order: 23,
    base_experience: 216,
  },
  {
    id: 19,
    name: 'rattata',
    weight: 35,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png',
    chain: [
      {
        species_name: 'rattata',
      },
      {
        species_name: 'raticate',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABZUlEQVQ4T2NkIBMwEtLX0NDAVN9Q/5+RgfE/slqCGmGK/zP8Z0TWjKERZEMoQyiLdoP2r4PtR53evXubF9jtF8XAwPANWTOKxv///zMyMqI6aXbS3Np3H95fL19XsmZV6CrmsNVhf0GugGuECc7N63Vk/CvCJ8bHJ/Lr55czQX2xjJW+tfztm5sPhoaGMq9evRpV4/+G/0yMDYz/llf0TVYQscz5zvyC4cWTVz9/vBY8nLQozI2BgQEUOCCLwIEEt/H/qv/MjGGMfzdP3JihrP1/+revr/+9viTM9OrxR4bdF1YYLDm18+Kq0FDmMHQbV61axRwWFva3ITfTRVr4X4mylJHEp2fiJ3ZcCDghJxp7v2r2YuxOhQV7R6gSf8Xqex/n9RZZMbA+vp2Ut/o1SO4/AwMjI9SZKE6FagT7ATl09zc0sDg2NIACBH8CgJm8alUoc2joqn/o0QNzGdEpBz1pkq0RAGqqmg+hAbnVAAAAAElFTkSuQmCC',
    order: 25,
    base_experience: 51,
  },
  {
    id: 20,
    name: 'raticate',
    weight: 185,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png',
    chain: [
      {
        species_name: 'rattata',
      },
      {
        species_name: 'raticate',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB20lEQVQ4T2NkIAwYGRgY/qMrAwkSBP//MzCC9DIyMsINwNC4v8GBxUFL9P+Ba68ZHRsO/D3WV8hhVdT/HWT6////GWGa4Rr/MzAwMoCMRjL1////zNfnFWawc7CzKAl+m8HoNfknTDNYY0MDA1NDA8M/TwYGvpQihkJFXQfJD5++/3l05y17wuQ7ZfeWlut+/f7dTTdlUs3/hgYmxoaGfyBHM4I8sLmegeufRKyfhpb8ch6Wfwy3Lt1i+Pb2EcP3Hz9WhrRciri1pLz/w8fPnWbZ016AHcYAciI01HbOTVsvbhgZ8P3Loe/fXj9jYX7zkJn5+zumXYevGJkq24e/+vpzesrUfQ9hGqFeY/i/ri8wkV3ae56GzkeGjw/u/3t+/c7/n5+fMr99zvCM8TfntpT5p1IhwcDwH+xHGKeN10xYt1V/jqExl9+HF98Znj18yfThzXWGl6/+3rt6VcxuxvHjT2HhgRIdq1aFMoeFrf67tc89SlFBaikzL/vD++fuyj+4/XFpxpxTMaCocmw48AdkGYpGmGm1+iraQorCroUbTk5bXhEUxcbMJBPcuqaNgYHhHyxMMBIATDOh5IQ1yYGi6ECDAzMo5awKDWViCGVgAHkB2TCi0io22wE+2tcN0SOu6wAAAABJRU5ErkJggg==',
    order: 27,
    base_experience: 145,
  },
  {
    id: 21,
    name: 'spearow',
    weight: 20,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png',
    chain: [
      {
        species_name: 'spearow',
      },
      {
        species_name: 'fearow',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABRklEQVQ4T2NkIBMwYtP3n4EBLM7IwPAfl7lYNcIUgwzApRmXRiYGBoZ/IAP+r1rFzBgW9hfdZrjG//8ZGBkZGf47MDDwTJ9st+Ljp/9/LaoPxzAwMHxuaGBgamiAGAQDcI0NDQ1MDQ0N/+qlGLjCayqf3rt7RYDnt9B8U0eP/68u/shWbEj88f//f0ZGRkawv+EaV4WGMoetXv13vWeA8juG11c/fz7NkCgXyP5ZR4lhz/dzOgnNO6/C1KBohAVENwMD90VnzWNKahp6co8/f2Jl3HOax1gvIbjh0hNkJ6METgMDA1MDA8O/7sTotv/cTL58ooJ7M+5PqmBYwPADFgYYfoQ6+39hXyGnwVsGXbmp52/9LXcKeycqtSYsJeUdsv9QnEogAYFchpIYsMYjKBBCV636tzosjAkUYNgMxZty8LmCbI0AvRR6Dy3zXzQAAAAASUVORK5CYII=',
    order: 30,
    base_experience: 52,
  },
  {
    id: 22,
    name: 'fearow',
    weight: 380,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png',
    chain: [
      {
        species_name: 'spearow',
      },
      {
        species_name: 'fearow',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACd0lEQVQ4T2NkgIL///8zMjIy/kfwG5gYGRv+/f/PwMjIyAAXh8kzghgwTQvbKoU1VMVKf/789cAupnzG/4YGJsaGhn8gNcsbvEz4ORmd37z+vCqu59B9sMb9+xtYHB0b/uyZmVWmoyjc+eQdA8OnH9zxTgkVi0Dyy3J1ZwiJCqczcfM8vPboo1/BxMOXIBobHFgcGw78WVhq36rK969KSFmD4Qu7ylyT4PKU1cVmC9j+vI5nYGJnYBSSu/Tk6zeHrI4j7xkbGBiY6iFu/b+fQ/kUIx+vKUe9BgOLqGplfdj+VUkF7+5+/vLpDz+fAAsrv+QZn/rdpiDLwDaCwIFIP1cJRbld187vYZDyVWHgEtG49vif0i2mq6sCnj86/FNcyoj9B7tQV3DDzvJVq0KZGedaW/MaqAslszCyxR/8++3tH2lRIf7fXw2Vzaz+f3z7jvHL6Wl//jDys7AJSr19yypgnNO67WEDKNCW+dhbSvJyiefv27770kuGr8d2LFa5fWDDhS/vf3EzfHv8R5TnBYuAhCrD058sZYlt+7tBtoWFrf4LdyrMyQwMDCIrMhmuv37BIPKbWYNBVI73KRsPf294055+qBqQnv+gGGeclWbMkj7r7O/qokRZ+5/fo87dvOrEp6Pr9ufdc4brtx9WTT9+rx2kqaGBgamhgQEcr+g2Mq7OCAn/+OWXuIGKisO5q5et99w7K2qrIXr7669XwRWr31+GaUbWCHYCzMnHmioMv3z+9L9x6TR1FxNl1R/sdyd3rmb4CLXsP4aNYJ2hoUyMq1f/RfI3chIFK8EWOGBFIL83NjQwHjjQwOTA4MDQcOAAyCC4iwAdEgBMcJjtEwAAAABJRU5ErkJggg==',
    order: 31,
    base_experience: 155,
  },
  {
    id: 23,
    name: 'ekans',
    weight: 69,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
    chain: [
      {
        species_name: 'ekans',
      },
      {
        species_name: 'arbok',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABhUlEQVQ4T2NkIBMwEqPv/38GRkZGhv/IajE0/mf4z8iwioFpNcNqhmvXrv1vaGj4h81wFI0gTYwMjCgmrwoNZRZ1+CrqmL3tBVYbkTW9nHOh8d3n1/aahe89Ty1uMvz0TsXHJX9D1f9VocyMYav/ggyA27i/YT+LY4PjnxtNR8I4eH6tfPv0IcOL69y7JOy+P7z5N742qprhJbJfkZ0KYoOdOU9CfpqKr2vmJ17Vby/PstxIPlhsz8DA8KWBoYGpgQHiZ7jG/w0NTIwNDf+OFa7zePzgZaWcOosdh/TbRfm5hx97Wqu7VR7tM0P2DlgjzKRABgbhmuItr7n/CTAK6t1l2HL0HMOH62w/+aX/7UxZ1ev///9/RkZGSOBhRMf+9FkTRGR/ZQmbH9w1Y/X5hfxvzFVkI5ZOCAtj+N7QwMDU0MCA6lSoIWDTWlsZJKurGZ4jBz96IkC3kfF/w39GxgZGsKkz04xZGc4aM6SdmfWHYMoB+xniJJDtKIkBb5IjJu2C1AAApMqdD6ObOu0AAAAASUVORK5CYII=',
    order: 32,
    base_experience: 58,
  },
  {
    id: 24,
    name: 'arbok',
    weight: 650,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
    chain: [
      {
        species_name: 'ekans',
      },
      {
        species_name: 'arbok',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACSElEQVQ4T2NkQAMNDQ1MDQ0N/0DC/xv+MzUyNDLA+MhKGZE5////Z2RkZPwPEpuadZUne5r2FxC7waGBpeFAwx9sGhkbGv4zNjQw/qtOXiqvra684BfDT53fn/5ulJD9WuGb7vsG2SUgA0A2gvD/0NBVzKtXh/3NKTmpKPn50mkdxifCN9isGR4/fveJi+dLTtfilMUwNTCNDCWxi7h7Fsd9BTsrbkKOtsbvyQ/v/Pp98/WzfyHOX9iPnLX8v+8Jq+bR/ck3YTaD/VidMN+CjZUloH52bEVt0uyFbhaH4w6d0P0lxvWWTVXr1vezNzM4L967GL1oc+myBof9LA0HHP+A/MYE8lt33rpD379/qP3Hxv/579dvZ49fXsHw4wfHb3NtP1YhEZ4P1dOC1RgYGF43MDQwNTA0/APbOLlkpyILC8P2h4+ueXUsK7xXFjc9h4uDfTIbKysDMzP7iSvX7ict3lN+HcOPk8o3+3Kx865KaXIQmJm2mfk107uJkqKyKR8+f2c4f+3aNkaWr/WLtzWcQQ5ZsI1xztnCVhaBt/79+cv27////wI8grz/GX//uXL7zp8/f1g4mJkZGS7cOai56/isG6GhocyrV6/+ywgzxUQxSd3D0b7+x69/3zg5GNk15DVjHr98z/Dx82eGz9/fXrv7/KrD9sOTUf2IHrkgV5TGzUz59v2v5pevH58s3Fa5gIGB4T2GU8Hx19DApKWlxXjtmihjQ4MjSvKCySOnWZS0ipQWGRsa9jOD+QdA+OA/UBQgp1UAi8ccHtUmwckAAAAASUVORK5CYII=',
    order: 33,
    base_experience: 157,
  },
  {
    id: 25,
    name: 'pikachu',
    weight: 60,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    chain: [
      {
        species_name: 'pichu',
      },
      {
        species_name: 'pikachu',
      },
      {
        species_name: 'raichu',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABg0lEQVQ4T2NkIBMwYtEHE/uPz0x0jSA+WMP+/Q0sDAwHGBwdHf4xMDT8QzcEWSNUk44sA8OVvwwMDM9giv//D2VmZFwNEoMDuMb9DQwsjg0Mf/qzmWMVpC0tAyoTarYtW5LnHf37PgPD0YUgHf8ZGBgZoS6Ca1y1KpQ5LGz131WZDMbmiQmnOXlZGK9fvbH96UfuuW4WTBFndj5K9yi6+u7/fwZGRkaG/0g2OrA4Nhz4s67S1N7K8esBQSYGhgu77s3RiTc3/cLEo71v20OlyOIrj///b2BiZGz4B9f4/z8DEyMjw7/OTj2ZeCvuKyL8jPwP3jPfeXfpwrtDFz6HlcxleAhTA3I2wsb9DiyOjgf+HFtmEGBiLbv+PzMTw/enrxhmNR2fWbaVIQNZE1aNeycqJErJcFfycDNc+/rmg75GzFNzBgaGVw0NDEwNDQzwaMGSAER5GBhe/2RgYPhtbSwld/Tss0fYEgLOBAALBOQowBqP8MiGxBU42tCdh1cjsWkeAIUZlA82LlHPAAAAAElFTkSuQmCC',
    order: 35,
    base_experience: 112,
  },
  {
    id: 26,
    name: 'raichu',
    weight: 300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
    chain: [
      {
        species_name: 'pichu',
      },
      {
        species_name: 'pikachu',
      },
      {
        species_name: 'raichu',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACFElEQVQ4T2NkwAL+MzAwNjYwMDY0MPxjYADTIPyfgQGMwYARRDQ0MDBBFYFkGBmhClY1aLGFNVz7hWQ2SD1YM4gB5zQwMDA1MDD8y3dmED+wV9r/IsPTWSBFsTwMOkYhBk8KF1z4AFMPtnHLVCNNiYvn7nyWcvjv2HDgT2uMZamR0ufS1xd+ZgjZsncJ8jG9t06/5M7AwPAO5iKwxmtbXFq+/mE+YBqwc8/axe6S6h9fHpDk+6/2+gcPw81Xn47xy4q2OMTv2/7/PwMjIyPCqQwPdjh6c/1/u/TxrUvOBzYwSCfHW278zfLpFzcPC9vWbd/vhc66ZcPAwPCcgYGBiYEBHGCQwAEJfN4s8P3Pvw9nBP0ZfL/c3vucm+kz65+TyYznLsnNM+84n4we+Iz/VzEwM4Yx/L08yyjw44dzthzC8bLGsY0hDF8+//q7P4tt3fovm8Me6fUki77/PHftpvMogYPs9lM1TE1KLvNqP//48l/8cQ7j5mNmO8PnMxZ52bAabztyZDFKPII4q1YxMIeFMfxlYGDgXB3IcP7lMYYZKv76Ki+//WSJX8I+M87s3qNFpz6/RbERpDE0lIF59WqGv4kOCvFmavx2mbMuJnfHy7VxMv+VyJn3NAnDj9iSHEzMlk1O6/Cv318ZGJ4/RA5R5FBF0f+/gYGpsYGBAZSKkJImPJ3i1AgzBZQEwWkZYQDcAgA8DM8P1W6bogAAAABJRU5ErkJggg==',
    order: 49,
    base_experience: 218,
  },
  {
    id: 27,
    name: 'sandshrew',
    weight: 120,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png',
    chain: [
      {
        species_name: 'sandshrew',
      },
      {
        species_name: 'sandslash',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABSUlEQVQ4T2NkIBMwYtP3/z8DIyMjw398ZmLVSIwjMDSeOZPGamLCzcLA0P/9PwMDIwPEegzb4RpXrQplDgtb/XdJW6iWuu76NczMfxhuPIjri8paNGfVqlC2sLDVv5BdgqExPbxcv6z02YVf38UZLhw7uDuy/LQbSAO6v+EaGxocWBoaDvzpK2WwN3KYduDn988/2L+Vc1y+oe+hqPnoW33s+xNnGRh+w2xF0sjA0tDA8GduHYOjhsnUfQICvAyvH8f9+/6Vl+k3A8tMv7T3Gf9XMTAzhjH8BWnGcOrEKgcdJXWToyzsKidY/sx3fPH89cbY0nuh6M5FDlUQ+39f3zHOPyxHpMryyu4uWdgbc+PRv6MttaX3YV7BcCpUAKwZYvp/JkZGxn8gNizEsYYqkiDjqlWhTKCoAWkIDV31D288EpNaCNlIlBkA+RWMD1gfP38AAAAASUVORK5CYII=',
    order: 51,
    base_experience: 60,
  },
  {
    id: 28,
    name: 'sandslash',
    weight: 295,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png',
    chain: [
      {
        species_name: 'sandshrew',
      },
      {
        species_name: 'sandslash',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABsklEQVQ4T2NkIBMw4tDH2NDgwHz16oH/IPnVqxn+oqvD0LhqFQNzWBiqwv8MDIyMDAxgQ2AARWNoKAMzyHQHAwUBOx2mgt9/frN++vrt1NTNbzfitLGBgYGpgYHhX1+hhu6Ht39X8XD/1eBi/c9w++GX9/uvftG7dOf7E5gakCFgGxsaGJgaGhj+mTLoBHUuejpXUvijwIPH/38d3ivB+PffX9Zvv/8vmrzpdTxMHVwjzImuDAx+U/eYbWTmMvl/5CzT/2eXpvxhZRRle/2B8VrnqlfmDAwMX6CW/WdE8jjL+R05R77/YPvIIqBpLcDDwM34biUDN+cLhmvXPn168/FLcUTZuzkwW8FO/f//PyMjI+P/vXs2z37/4uEFUebjtWxS0eKf314+Kv6n3PzpM4Y2rwKG+v//GRgZGSGhCwtVEA0W6O9vdpFgedTw5dbsvtTJDOt2LK05z8rKtNU5rKnmzJmZrCYm6b+RNcLY/1c1hLKFNaz+BQv+tZv2GjEwM7wN9nZ+CHMZukYGZKesWhXKfO2a9v+GhoZ/yN7BmgCwJb////8zgbwBCgOcKYeU9A4Aoia+DxoGpAwAAAAASUVORK5CYII=',
    order: 53,
    base_experience: 158,
  },
  {
    id: 29,
    name: 'nidoran-f',
    weight: 70,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png',
    chain: [
      {
        species_name: 'nidoran-f',
      },
      {
        species_name: 'nidorina',
      },
      {
        species_name: 'nidoqueen',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABIklEQVQ4T2NkIBMwkqmPAavG////w8UZGcHM/+gWYGgEaWJkZERRiE0MRSOaAvb/DP9/MTJADEHXDNfY0NDA1NDQ8M+3fjNXiYvBjl8vn0mefvuB8f+nn3uqS/0yoE4FqQcbBNe4atV/5rAwxr8dU3Zm2kiIT2MQEGY4+/whw70rN054aZu6uMfpf0W2FcmpoABh/M8gkaGwvjd5tqK2vsv379//X7ly4VBqqr0TAwPDP6hFqDaCrF+16ipbWJj2r8VLz+frautOeP/hHcONm+fvZqa7q+B0KkgiNHQV8+rVYX/r62c7/f79I5uXn1fy8+dPa9ta8nphYQCLFizxCHUySsRhiuFMAI2NjYz19fX/GxsZGBsaGEH+QwHUTXLEpF8A1hKAD3MwO/cAAAAASUVORK5CYII=',
    order: 55,
    base_experience: 55,
  },
  {
    id: 30,
    name: 'nidorina',
    weight: 200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png',
    chain: [
      {
        species_name: 'nidoran-f',
      },
      {
        species_name: 'nidorina',
      },
      {
        species_name: 'nidoqueen',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABo0lEQVQ4T2NkIBMwoutr+P+fiaGxkaGhoeEfiN3AyPifgYEBhFEAisb///8zMkIUMjTs38/S4Oj4B6oapA5FM4aNPduO53749HZPS4TP9fXX7yvcOX3rdWmc+1esNoauWsW8Oizs74Q1h/TYFEUvPnp4b5HYH55n7/78zLj79r7l8tz0Gw0N+1kaGuAuYADb2NDQwATyU2T9TBFXL5sTfDysysdO/GS4+eATg6vFh5kF3t4Z6E6GO/X////MjIyMf1edvb5ZQIDf5/ydh9/ffv/Fycv868vJIyc9tawcLnb523yGORliIyT0/s1fs1PjMx/38T8vnjCziYhy/OYXZH32/OW/F0/e/vz1+1/SytK4FTBvQZ36n6mhgfHf9FXrzXjY2fgnr9unk1WY2cf07eOvBx9/st2+/fD04rxIM+RQR3YqPCqaJs3QZxMTreVgYWn6+PpT0L+fP941FqROWrVqFXNYWNhfkCsx4nHWrFks6enpvzESVEMDE0NDwz8UP6IrAjlp9WoGJgaG1QyrGRgYtK9d+w8KdWR1GAmA2KRLtkYATYTDD0dTPzcAAAAASUVORK5CYII=',
    order: 56,
    base_experience: 128,
  },
  {
    id: 31,
    name: 'nidoqueen',
    weight: 600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png',
    chain: [
      {
        species_name: 'nidoran-f',
      },
      {
        species_name: 'nidorina',
      },
      {
        species_name: 'nidoqueen',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACU0lEQVQ4T2NkQAP///9nbDxwgLnhoMM/hgbGf+jyMD4jsgRIEyMj43+42P//LAz9W8QZinyfohsA19jQ0MDU0NDwr2jhWse/TMyWLz79MhX9+173HwvT/WlZqa7ohsI1zjxzhjXdxOR3za7TU5iFJbOv337EoPz6OAPT51dzW6s6UxpWrWJjuBb6pwHqfLjG//8ZmBgZGf71Ll/aYSX5tfzdX+5vq+8Lcl09e9H19PTKPTidCpII3X+Vx/dGBxefhPnp9+/+y514K8nw4uOnG3fu38hSstRhFGZlfrwgI/o2SC0jzG9T1uyY/5qNL+HckzfvWL99ElAQ5WV6ziX+T/XjI6ZXDx8x/FK2YBD6/PhO99tIdcYGhn+MDAz/GRkYGP+X1XWXPvvNE3r93a9XPgrvXKIdfrNvfGX211nsPvP10wemFlz1fRwt/vnShKbC7VAb/zOBPFy8do/pl5/fo/+yc5kJMDJYavy//ecqi+ZfiRcX2R/fe7VrSmeLO8SfEIvAgVOweGsvq6BwESMPP8O7d+8ZGJ4+/5Ok84jl3++3DCcu/WLY80rp18839/T2z+u6CfMaWKNbTo3iL0Zue1EevjQOJSXLn5++Myjdm7dUUujm0zP/8rKlBLl/sLy/Ytja2vcYSSPEapABk+cu8XzPITDh6etPK2YWRNWDQzqrQcLHXFbzwoUrF/v7+9+BAhTqXoi702bOYpmVnv4bFl///zMwHmh0YHZsOPAHKQ7BmsCBgxKx//8zMoDS6qpVzAxhYaAE/h/kNC0tLcYwKB+mHgAcbBAejdqzawAAAABJRU5ErkJggg==',
    order: 57,
    base_experience: 227,
  },
  {
    id: 32,
    name: 'nidoran-m',
    weight: 90,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png',
    chain: [
      {
        species_name: 'nidoran-m',
      },
      {
        species_name: 'nidorino',
      },
      {
        species_name: 'nidoking',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABT0lEQVQ4T2NkIBMwkqmPAUPj////GRkaGRgbGRoZ7BnsmRwbHP9gMxxF43+G/4yMDIz/sSgEqUMRh2tcFbqKOWx12N/zTaet7754aBssFjzl6NddbRe+PZyZMzXt6v+G/0yMDYz/YIbCNZ5JO8NqMsvk9+my0/3vn30peKh179xLKVYjoT1fkrKWZM1ftWoVc1hY2F8Mjf9X/WdmDGP8u7PqUKk0l0DXZsYjDC/YGRgMj7HtTlib4s7AyPAf2StwG/+vWsXMGBb2d3fT7n5TNbWCQ7sv/hb8L8p64/OtY6mr461BgcbIiPA/XOPMtJms6bPSf8/Ln1MnwMhXzsTC+vrX1//3P3z+tDVtSUIPLAwwnMrAAI6a/y0tLfKTXj/4USmlLVRYXngdVzyjxyNGsOOKIowE0NDQwASypZ6hnoGxAewnbPGKmXKITYJkp1UAagKFD+0XLC8AAAAASUVORK5CYII=',
    order: 58,
    base_experience: 55,
  },
  {
    id: 33,
    name: 'nidorino',
    weight: 195,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png',
    chain: [
      {
        species_name: 'nidoran-m',
      },
      {
        species_name: 'nidorino',
      },
      {
        species_name: 'nidoking',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABwklEQVQ4T2NkwASMDAwM/0HC/xn+MzIyMILZ6ACkCCtYFbqKOWx12F9c8hgaVVRU2EudVvxLn2Xy29iYgTVHdz9z4gLHHzht3N+wn8WxwfHPgoyNnVfv39zS5VJ6c+HNTUuP3j+YPXtv3y10F4Bt/P//PyMjI+P/bQ3b+D6+Zr/87dPHzV9Uv3l/fvNLQeAhU37OxoRJ6P4Fa4SZNjVhqcGfL9ynmIS+sy5xvcngelz2l8Rdngd/RT5n5c9N2dvQ8J+poYHxH0gPzI/wkNxUcvgMBx+n8Q2mp7/4H7Kx8nEIMN5+cWtv2ep4PwYGhm9QPf9RnLqmblOhEo9W13emH0zvH3xi+MfC9Pflx3esL969+njpyTG91WdnPWpoaGBqaGj4h2JjcXG9iAub8/kvLy7JXP/BwmClYcpw6MTp7xycXJzPPt1znLKn4UBo6Crm1avD/sKjA+b58riGuexP3jx+zyb2zs3MNuXx5yffLt6+tZtflO1i1/zaNRgaQR6GOQMWZwH9DgIOfwLUC0oLTqKnJKwpZxVDKPP7NBem9FnpvyEG7mepb3D4i5z8cCY5WPyuXr2aKSwMM+nh1YgrnYLEAWuR0g885Od0AAAAAElFTkSuQmCC',
    order: 59,
    base_experience: 128,
  },
  {
    id: 34,
    name: 'nidoking',
    weight: 620,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png',
    chain: [
      {
        species_name: 'nidoran-m',
      },
      {
        species_name: 'nidorino',
      },
      {
        species_name: 'nidoking',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAChklEQVQ4T11Sa0iTURh+zy7OdomvcA4N/SGFqah5CbUf5RASf6QizCgINKUhYeGoH0nmRzoDIexHkOtHCUHmVm0I0c2cl0FlQl43UzQRvGyyC9u+dt+JM/um9MJ7OPC+z3mf5z0Pgv1ANE2TjAIA0iq0HOmuFJWPlUcQIHygL3ZF5MCAEVvUXJvmK58Whw420kBzaIg9GA8CJIn1DXqKywiPVOsqfwMA//UVQyHj9OQ6fKHRti9X17QKLbdeVx9hkYQah9CrrW0/VZB6cjAjIHq4vbV8wZ2VVm3FQci1BBpvfGgZIEBFjgIDDZiwiwPhLKSpC7Xf6sXnU3ecO3BfYoIEr3OnYsY/qjJ1NAGAn50Wk8bq+3pn6S74oEsUlQZ9CS7OzPw4Sk86znUn/lnnZSJ7YDH84LDgqNhK2d429dZ4YssZ6hrszOIV0VMTP8zZ8oJsX+IK2PnrWDiXA1GGj/JySmCRmXAxbo9F4k/VVfWX9cWAfbfvteLdaL5qoLv5s8lwWQgCTZhjF6+Mr2JG54NDKRkBQTGgDFGRYPenW183KK+LAePcMeY+QW9Up6ekHckpSZINy0qIGab4W7aNcHZuWTA5KhO+m3yhah25vjeRLjfy6DF5+OWl93mJjshsehsFaUUy+PV9DiSjZyKb7mXsdVp53hAz2TzcWAEAoT3gvy9pVpfI8h1V08FPYWrhWPetTKqztJS62OBwzcGS1bTQbnycDwBRYog952BACAFWq2/KREniEzYLXu151LNNarOv1gzhlM2aoXPPW3rhWT9rhH2NGBAgiHtSo9HwlUplCDAg4/zHTHle5RLGGCHyg6xX95cDSKfTcsxmMyZuYiWQ+v+W+wusdSkfXcHKEgAAAABJRU5ErkJggg==',
    order: 60,
    base_experience: 227,
  },
  {
    id: 35,
    name: 'clefairy',
    weight: 75,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
    chain: [
      {
        species_name: 'cleffa',
      },
      {
        species_name: 'clefairy',
      },
      {
        species_name: 'clefable',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABmUlEQVQ4T2NkIBMwkqmPAUNjAwMDk1ZoKGNoVhYjw+vX/8NWr2bQ1tb+39DQ8A/ZEnSNIP5/bK74z8DAyIgkh6wRrKk6K0KW9d4D5sKSAovXH788VglOedCdE8pWOmX1fWTNcI0z09JY02fN+m3GwBC/Yt2cBXIykgx//vz7cfrsJQ7X3OrZPxgY0hwcHFgOHDjwB+QisMb///8zMjIy/p955gyr1bVzjUpyIpWf//37L8DB/v/Dp19Mi1pnbis7vMub4f9/RgZGRrBXIBoR7md+vX/tXhFRfvtXz1/9FBAWZGD69Z/9/L4ze82q6lxgFsA1ghhnZs5kNUlP/32xs8VCz93qOAM/JwPD1x8MDG9+Mdy6fWOLemq+7/9Vq5gZw8L+omiE2g52xr3Z83azsv3lEmTnlnr78duf66fOeXrMnXbnf0MDEyM0WlCi4z/Df0ZGBsb/DIu6uRniSr8WVrdIb+Zm+nWnqur1qlWrmMOgtqHbCI4+mD+Q/bO/oYHFsaEBHJowgDXJwTQ1NDQwgRSipxqsNhKbdgEc06sP69wNjQAAAABJRU5ErkJggg==',
    order: 62,
    base_experience: 113,
  },
  {
    id: 36,
    name: 'clefable',
    weight: 400,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png',
    chain: [
      {
        species_name: 'cleffa',
      },
      {
        species_name: 'clefairy',
      },
      {
        species_name: 'clefable',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACAElEQVQ4T2NkIBMwIutraGhg0rp6lTF01ep/jY0NjA0NDf/+MzAwrg4NZQpbvfofAwPDf5h6uMb///8zMjIywiVACv7v38/C6Oj4B8lwkHqwGrBGkE0g05P8XQOVZOTeVk+de3hbQpa494JpL0DybdkpXttOXbxx5PTpewwMDEwMDAz/wBr/NzQwMTY0/Et2tXSuio9dLMnD+/Xb95/8rKzM27i4OfU2nT3/IbimM5yBgeE11LL/KBq7GUrMHRrFVppYq8h/+fmbgUdekuHmrlP/Lx/+sJRHXrjWc0LhA5jrwBpXha5iDlsd9rdLP8MntNhsM78I+9+vn38wyihK/3524wn73rU3n37iZ3HKWdR+C64RFGqMEA+z3l42fbmitGQwMwvL/79//zEyMzP9//H9B+PJE9ferazZZTqd4cg9FBvB/vz/n6k2IUIxxd5uibyemgXD3z8/fz57x/LkxmPGZ+++M71+8804eH73uVWhocxhq1f/RURHQwMLY0PDn/PVta0GmqpVH379YOAT4mH4+PQjw4mzD9d7zesIQo4yuEaYSbubmzVFOLjWvnn4dK+Ru0nUg5uP9xiXlEcxMDD8hTkTHo8YqW7mTFaG9PTftrYxkocPLwHF5X9kTVg1wgLr/6pVzIxhYX+REwiyBShpFSYB8wvUFlCIoyRFkDoAfKPyD3afelQAAAAASUVORK5CYII=',
    order: 63,
    base_experience: 217,
  },
  {
    id: 37,
    name: 'vulpix',
    weight: 99,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png',
    chain: [
      {
        species_name: 'vulpix',
      },
      {
        species_name: 'ninetales',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABm0lEQVQ4T6WSSyhEURjH/+fMncQd47FQJBQLC2XFQqmZjaQkZe4IiaRYKCyV+qzsWBhlZWHhNQqxIuaupoaNxcgjz7zGY2TjOXfu0R2uIimcOnU2v+9/vt/3MfzxsD9y+AT6yCE5SdWIwAECEenTLlgUL6JfA35MFABjgBAE3geACLpZ4BPo761ufN7d6L5/FP6HhqZORaGXmcqM/JqF820DIIAT3uAYKFwuC/N6o8sdzsk8mbsvYMPaeWiiULvQ7ba4+rv7p/HASqSzJxS6Nn/BzAcAyd9fu5os20s39y5Dgfn52YrC9PYIt+qZqTIPHj4Oun1H3WaIkWhcAcCq9tZ5eJS3RJ60l7RkaS2qi+KD4F58UvgKYcE9irrf4XM4JKeqamaPJozRga6q8nTbHLsNI1FOQGDrZHJ9eErNKSk4q10KLhrGDUkfcoiIG/qNnhd7lGOL0LO2jm9OEyWrv3Vs2R1z8W75Q46pWAjBGGOiuSitzyan2IfUHU9bWW72yNL+KjkgkQrt23H8Zou+XQBzc2KT+zL4fye+AtZbpw+xg8X5AAAAAElFTkSuQmCC',
    order: 64,
    base_experience: 60,
  },
  {
    id: 38,
    name: 'ninetales',
    weight: 199,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png',
    chain: [
      {
        species_name: 'vulpix',
      },
      {
        species_name: 'ninetales',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACfUlEQVQ4T12SXUhTYRjHn/ec4z6smSdjUn6kCQtKJTCQpMwkDAovuphY1kUiq1EUdWE3hq8QXQiSNxmFhQjeOCEiKBBsi4rCnKgrbVR+bGrbdDtz85jneM5545xtMnyu3o/nz/P/8/wQ7CiMMdXejklHB0YYY0X9JgRTAEABYBkhIOobStepDQglmlM1OGilGxoccuruxDXMGeyStoWEEIQQIt0t5tzp3tDm2c4aY0OrK6AKJp0t+XojU7cwF4Rzl1691AYkrFhphBzyz9Fb18z7dj0RhK0lQkgRANXa1tr13nbz6ofK6qI97uHJxfFvU/W2R/MTCGOgMAbVHuP9bJu1HN1fwEdiIPIxiG/I0aUQ8bF6sTwYWhmOrYh7Z3xB+/3H3jGUyuXz3Hman8feCPiDohD2M4okEZFk0Lxk+lfICsbfvsjzqkZnj+qcEEDbGb2fmqcsh3PLohwvBf7MMTodApoCCMdJ+EBxIbu1HuUKTwwUAcC6Jhx7VpFx/Lp7a6jrSHPFsZIXBiMt//UL9EZUAhNLE5SpQ4fKLMAFVsUHlX2lfQC/1HjaxB47sNa7914b9MypxWmvEvByVDyugMmkg9zyg5IixBjffPjLeburKrmWhNW3/fWn62qKXdwmIyGEwPdjFs2Mz0NJqRlM2VlECG0wa9/nPr7rDV3oXF2NE0jLONJfO1B7sfqysimBLBPglpdBEXjgBL2CuBgV9Me+vrntbOwCWNCspq0DPCNXukV+/eTurMxsUASZ9ywIkTV5ZdqQM5STx7qbmhyjqf4kAKA61BhMlgFA2634EKCgDcCvgYKxOklDMg059WylVIJ2gk8GrbQDANKZ/Q+Q2zOhUAs1KwAAAABJRU5ErkJggg==',
    order: 66,
    base_experience: 177,
  },
  {
    id: 39,
    name: 'jigglypuff',
    weight: 55,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
    chain: [
      {
        species_name: 'igglybuff',
      },
      {
        species_name: 'jigglypuff',
      },
      {
        species_name: 'wigglytuff',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWklEQVQ4T2NkIBMwkqmPAavG////MzIcOMAMMfQgQ+NBhn8NDQ3/kC0h2kaQYYyMjP9hmjE0/l+1ipkxLOzvt+1bIthePWc5+eKF/MPXHy9F9fRsXhUayhy2evVfkGa4xlWrVjGHhYX93ZlXZKWoJrNESUFOkfnHb4b/rCwMy/ftzY+eOGPSzLQ01vRZs36jaPzPwMDIyMDwH0SfXbLumtT3txrnv3F+NpAT42W4tjdPurpz8v/9+1kYHR3/oGqE+uH/zHquB/y6J+SY/ur+/fGd4ee33ww3H9+pNGnt7Pjf0MDC2NCAqhHqbLDnz+fnl/Jx8NYwMrB8+fjh03fDrX26DE8YvsNchWIjiPO/oYGJsaHh30IGJ+mTDB84pzGcu3+susLvybefO8L6+3FrBGluaGhgQo8zbIkEazyCNGtdvcoYunr1vwMNDcyOUH+RlQDQbSU65aBrBACsr5APEzr5PwAAAABJRU5ErkJggg==',
    order: 69,
    base_experience: 95,
  },
  {
    id: 40,
    name: 'wigglytuff',
    weight: 120,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png',
    chain: [
      {
        species_name: 'igglybuff',
      },
      {
        species_name: 'jigglypuff',
      },
      {
        species_name: 'wigglytuff',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB20lEQVQ4T2NkQAP///9nZGRk/I8s3NDQwNTQ0PAPWYwRXSOI/7+hgQlEMzY0/AOxQTS6OhSN+/fvZ2FXUWG1kpX9DjMApOnU1asSD1avfhfW0PALZgBMI4gGOY917+bN63g+fK3hvX7plVZb2/PL85e53v3/uy+gp9OY4do1kEawWriN+xsaWBwbGv5MjY+ersglEmelZ/H1zeMnE0+/e5H77cmLJclblpY0ODiwNBw48AfsDZjVoaGhzKtXr/7LwMDAvru1+7UVpzjvDwl+htt37j21qCuUAalrYGhgamCA+BeuERaa19onFL6Vk+hU4OBhufb981/jP+wsLx4/qdCpzev8//8/EyMjI5rGVauYGcPC/t5pmjhTOTkq7RPr3z/cjKwMzMevslzesrtDb1Zz5f+GBhbGhgZUp4JC1NHR8c/6shazgNbKkwwsTCAFfxhuPuK4Gt84QefkvEKsGmGhBXL/9VOX9moY6Dp9+PSZ4cPhE/+eBtY42DCcOvw/NJSZERIOCD+C4w2aas4Wt0x9ryjzhJuDTYbx6l0+i/7a2P9Qr6DHIzxhgDSvLurnCOsvAieC/VkNPI7TGr7gTTnIkjA/g13CwMDICEkgcIA9rSIUglM7uiaQbgBQPtUPgem3nQAAAABJRU5ErkJggg==',
    order: 70,
    base_experience: 196,
  },
  {
    id: 41,
    name: 'zubat',
    weight: 75,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png',
    chain: [
      {
        species_name: 'zubat',
      },
      {
        species_name: 'golbat',
      },
      {
        species_name: 'crobat',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABm0lEQVQ4T53SP0gCURwH8PeeYkkQKRQEEkh/CK0hoiUCaW4SvFuiWQhs03R7EQ1KDgUNUotT4dsqG6IUmhqqQboWSQkkrBO98zTF9F6cl1IZEf7m3+f3/b3HD4IuC/7TKX30a28HjESoBgACWJZtYBzXWjiesoRt/Az4BhXEsrDZFI9T7eIirDfBsqufqWXLhJD2gDZsoXCUnxCrVdfayYXbO2pYGMqXvc+ZzN02Wfd0rIoxRRhDORTmRurGwUdRFBBO300FXuXEcPZNK6SSA85bv4gBRhhgWRnQTGzB4GFyJsULoeliYa4nlwtLvDibP7v34cLeqZpGIQCw+UmfECOMsby7EXXXzGZHPVeYRJJUKZUln+R3HNUDl0uVkpQ+2LTfUkohhFCZoCSqcN8fNwm6l1ixzzReQYb3p8R1WqdFaQBQRIbV48OgM/cZpkKlGCaiIYRtrNjBkNESsu1seW4AEIV52+pYb49eHzsPXrVQe9Wf+NejoBQCqL6vA7bWBsCGOI6nhDxQhuGg1WqlylP+vJx/nqD6q93UB3dbwA+X+Rp5AAAAAElFTkSuQmCC',
    order: 71,
    base_experience: 49,
  },
  {
    id: 42,
    name: 'golbat',
    weight: 550,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png',
    chain: [
      {
        species_name: 'zubat',
      },
      {
        species_name: 'golbat',
      },
      {
        species_name: 'crobat',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACPElEQVQ4T2NkgIKGhv0s9fUOfxkZGf/DxBBy/5kYGA4wNTQ4/oGJMf5n+M/IyIBQHLpqFfPqsLC/yAYia3CYf5/jQKLiD0aQgqqmHSm83ILSlUVmLQyMjH8bGhqYGhoa/sE0x5z5Lym462gi98v3vi+Yf85e0BcyD6yRgYGBf1rcstPfFWSZlmmpuZ+NEL8788x/1nQTxt+TFt/J4bz9vFniBaPA3btnJhXsLcj///8/I+Oq0FVsYavDfm0wnxQiaWC6erHoj4VTWhwTwMb9/8/aXrH9id6lH2J/2H7+uPfjslLhzrbnDQ4NLHA/bg9dvJpHXC5k4o8n8dZu1m/f/fyfdeDx49lSNx/yBfzlX6jKycjw5uvriR7LkgrANkKdyjHfc9oqA1UN39U/X2z4YaFuJSmlLnbhxYsHzFfvHI99/TNSmIPx/40XDxqi1uc1gfSghOo6/xk7uYTV3Fa+PcQw/0DDj7DK/Rx+jxgZZF5/YPjC/m69z5KkIGgsMIBtbGBoYGpgaPgXy+Ct6c+gwronUHDyjPUNdt4J8xisfrE3/1+2d9dbE+5f/Wcmn4KphTj1/39GBkbG/wYN2xX+CMsoWD/ZX/PvN6Pzf24thj3/f1c8aPHoBFuAFE1QP/5nBLnac9I2do5n/9s/v31zRURM/PePL9/1/3Izs21u88tLSzvDOmuWyW94ykEkL4hm9ORmwx8leOTjsveg8AC5DYtGiJNBMiAVaelnWRA2YBoKiw50i5AMBhuF4RIArhX9UIvlMV8AAAAASUVORK5CYII=',
    order: 72,
    base_experience: 159,
  },
  {
    id: 43,
    name: 'oddish',
    weight: 54,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png',
    chain: [
      {
        species_name: 'oddish',
      },
      {
        species_name: 'gloom',
      },
      {
        species_name: 'vileplume',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNUlEQVQ4T2NkIBMwkqmPAafGhoYGJi2tq4xhYav/YjMcQ2PD/wameob6/4yMjP9BGv7/Z2BkZGQAs5EBikaQpgbGhn8gBUu25fK9+XNfr8BvyxG8NoKc1tDQ8G/ZoTi9Jx8f1UhJiht+fPWXd8eSNf2bljJ0QW0FWQS2HW7jqlWhzCD/zNkbZffq1Z2DHBKcDN/evGP49YPtzw8GDp2u2KM3kV2E6tT9+1kaHB3/1EyY0cUlLFb6/Pm+VxJqm5t+vzdc2pC44QOyf1E0hq5axbw6LOxvYkn3ZGkFxZybV2/sWD29xhPktIYGBqaGBgaw/1GcCpGE+NPcOcjxPyNLGD8/55XdaxdODQ0NZV69GjVasMUjPACQDMcfHfBgb2hgcjjAwHTgQAMo8jE0YTiVlORHdloFACeIew8Wg733AAAAAElFTkSuQmCC',
    order: 74,
    base_experience: 64,
  },
  {
    id: 44,
    name: 'gloom',
    weight: 86,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png',
    chain: [
      {
        species_name: 'oddish',
      },
      {
        species_name: 'gloom',
      },
      {
        species_name: 'vileplume',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABp0lEQVQ4T2NkIBMw4tLX0MDABJJraGD4h00NNo2M+xscmB0bDvwBaVi1KpT52rXV/+sbGP4zMjD8hxmCovE/yJZ6hv+MjAz/s0x1ZBm4/7NPO3D1DkzxfwYGRphmuEaQJkaos3aX+017cPt+BAcHNz+vmHi62I+N23/+U/vpOOvWG5hmsMb//xkYQbaA2AdCxTLfCahOk1aUYXj15BXDzbe/71lyXT/Awcwx23jO0xOrQhmYw1Yz/AVpBGGQJsaHNcoLhXn/xh698ufP7n+mjHzf3v93UbrD8vM3V6XjpFsdyK5ihFl9sUSP++nlB6nS2p8Ut/5tinnHLCH0heErgwPjsd8S71eHO8xjWL+/gYHFsYEBHGgwP8JsZWDwyUp14pPMj7WV13748R1Dw8KTrVOEly/KOcJwC3vgQEMsO65S+OH/b3X3fn7iEWNmE5Rh55++ZEHX7tDQUObVq1f/xRodMMHQuErL1Yvaj/uFFqows7Mqrl/StRspLMDKcKac////MzIygoIAHO6MDAwwNkQEq0aYsxoaGpiuXr3KiOxEvE4lJt0DAP6DqA9ybdI0AAAAAElFTkSuQmCC',
    order: 75,
    base_experience: 138,
  },
  {
    id: 45,
    name: 'vileplume',
    weight: 186,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png',
    chain: [
      {
        species_name: 'oddish',
      },
      {
        species_name: 'gloom',
      },
      {
        species_name: 'vileplume',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB4ElEQVQ4T2NkIBMwYtHHuL+hgRkk7qCl9Z/h2jWQmn+MDQ3/kNWiaFwVGsoctnr1X2yOaGBgYGpgYIBrhmv8v2oVM2NYGFjTza5er09vPrNw83F8YPr1U/nSobOHww5sutPA0MDUwACxGazxf0MDE9Qp/NcLi5cICvH7PH51jYHlPRODmro+w+2XL750Tum3WM7AcHUVAwNzGAPDX0aY886ExLspWxuu+vPiHf+pHU1//2soMyryOjPJKat8Y/v9j2vVlj1lsaf2dO93aGBxPNDwhxHmxD2eoeuc3R0CP7Mxf2f8/ofz548fDP+/fvzLLyLGfH7vUYaDH197lh3ZuwNmESPM03YMDJp5zn7zLE30LZgY/v59+f3Xv53nbrEy/Phx6MKZXVkgZ/5nYGBkZGD4D/cjcoiFMzAk/ldza34sLiX9T0SU4dPfH0euG9k6MzSE/WJg+M/IwMCI0AgyocHBgaXhwIE/DK7pqiLMjD4mXJwVTH/+/P319fN6cTbeyqXbJ3+CBiaqRrBmaFw5OUUXPLx378HdB8c3OXqmNDAxMi7Zu232rYaGBqYGaELAknIamFRUTrLeubP9JywhODg4sBwAuQYJYEtyMGkmsBsYGkBOAzuPGI0gAzEUI2sEAC8Fxw8eo8IoAAAAAElFTkSuQmCC',
    order: 76,
    base_experience: 221,
  },
  {
    id: 46,
    name: 'paras',
    weight: 54,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png',
    chain: [
      {
        species_name: 'paras',
      },
      {
        species_name: 'parasect',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABaklEQVQ4T2NkIBMwouv7z8DAyAAiwCRugKIRoh6i4X9oKDNDKAMDwzXt/4wNDf/QjYBrhGn6z7CK+U3nDi7R8nmfYYqRDYSJITT+Z2AEOe9xS+DOe2/f8x688C0z1Ua1487j9xNtF2zb8b+hgQnZZphGRpD7QM5ckO8/nZvhXQbrh8Of5CWd+G5/+FwZNuN0x5k0Y1aTWWd/o9gIM+3XIv/CvR+M643Y7/Ff+yjIcO7KGQaub7faMte8bGRgYPgFMRsSBowNDQxMDQ0M/xYX2Eq6KXM9u/6SeddHBjlBJg4WOR+NH+Krdxy8GTbndgYDA8OB0FAG5tWrGf6CNcJMWZWlxfPi0bXIvC0Ms0ESR0sl5gvxyJlq1p/yY1BQeMbw4MEPFBtxxVSTu7R+3c6ntxgYGL5jU4Majw0MTIwNDP8bGhoYG6BxtyqUgTkM6jxkAzBSDjzuGhiYGBoY/sMSBM4EQGqSxWkjIYMAGbOJD4Dfz/0AAAAASUVORK5CYII=',
    order: 78,
    base_experience: 57,
  },
  {
    id: 47,
    name: 'parasect',
    weight: 295,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png',
    chain: [
      {
        species_name: 'paras',
      },
      {
        species_name: 'parasect',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB2klEQVQ4T2NkwAP+NzQwMTQ0/GdkYPiProwRhz7G//8ZGBgZIRr+/2dghLFh6nFpBMvfTomWUZ2z5CkDA+N/dM0YGv+HhjIzrl799218SB/vV/bCV/9ur5FZdyoUbDPYERBXoGg8k2bMajLr7O8H1U5Wsp//H/395BfDLzFGhiMsP7y8ppzZvr/BgcWx4cAfFI3/GxiYGBsY/jEUMnA+5bfbL/b0v/m39z+/vWLm5Loq8WNawMST2WdmGrOapJ/9DdfY0MDA1ADSxMDA9row9JwI83Pt76yffzE842R9xczCeIuF4dMP8fcufs1XT8MsADsV5vGnxQ5TXt/+l/1PSPm/mMRPRoYbDxk+/vnz6+NXHrZX4p87A1acqoA5l3FVaChz2OrVf88lGZoIM/Ge3nz22a8vho4/RHlEGHS/Xeb69fYty/4zb/9wMjI0lzy61QQLIMZVoQzMYasZ/m4LUrF48469/vS9Pzv/P7p5fQoDw9mbmTanbt/9y/Hk78sTn78yXSw9cacJEriooQpyNkgQRjOs89Cd8uzD/1vn3n09OO/W/SsMDAx/8SaAUAYG5tUgRYIM/AzvGb4ga8ClERavKDaHhjIwr14NDnV4msWb5KABAU00qKkaAFCE0Q/yWxObAAAAAElFTkSuQmCC',
    order: 79,
    base_experience: 142,
  },
  {
    id: 48,
    name: 'venonat',
    weight: 300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png',
    chain: [
      {
        species_name: 'venonat',
      },
      {
        species_name: 'venomoth',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABvUlEQVQ4T2NkwAL+///PyMjI+B+bHEyMEZ9kQ0MDU319PUjNP3SDsGpctGgnt5aW8C8TE5PfMIPRXYGi8f///8yMjIx/r1271vz69evT9vb2m65evZz34eunQ9Zm1hf+///PxMjI+A9kGIrGmTNnsqanp/+eP39x7dsbvx25xHh+CwpzGr17/MIuuzb1ekNDA0tDQ8MfFI0g/zQ0NPwL1Zoq4RgtdIaPn1+a5d9Phg/3/zNcvHtr6vRNFTnIzoXb2NCwn6WhwfFPbuL0nHypv5PP/Of7bcT2gfH9vacs03+Kv3i8skhnLwPDWwaGBiYGhoZ/cI1paWmss2bN+p3q11TjJsbT/IeX6efvj7+YGf6ysJz49uvzvNUVBj8YGO41MDQwNSBrDA0NZV69evVffbk0mwBv4R2s/6W5WVg+M9x7wcHw9cOjLUv39PtCQxhk2X/0UAVHfFe616Zn7yT1uNgZWPl4/3+omD7PnIGB4QvMNoxQhZk4o8TfR5xn4+FPLHHcsgIicdNzHnetZlj9FxoL4BSFN+UgpSqw85BTGVaNDQ0OLPX1B/42NjYwamlpMYaFhYFsQwHE2oiRpAFD+rYP8WJRAAAAAABJRU5ErkJggg==',
    order: 80,
    base_experience: 61,
  },
  {
    id: 49,
    name: 'venomoth',
    weight: 125,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png',
    chain: [
      {
        species_name: 'venonat',
      },
      {
        species_name: 'venomoth',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACGElEQVQ4T2NkgIJVq1Yxh4WF/WNgYPgPE2NgYGD8//8/AyMjI7IYWJoRijEkkDQzROuVySy91PUEWQykkWF+w3oBZnbOiLhKjxkgfgNDA1P9/3pGRkbGv/uWnS3V0tToev7qeZmhu0r3/1X/mRnDGP+CNYLAwYVXbr348LovPN8RrBkEarOmmoYH+53S1pdhuHrp/iIdJ6X4////M4MMZNy//z+LoyPjn2NLrkf9+vtvsUN8ktS0sjSBrK7kmzsXnF1ia2MUzcDEwHD52uUwcx+91fv372dxdHT8A/YjLAAOLL529PGLp1xsf3+uDp9Ss3pP/bzTZkaG/O9+v/0ycdoMjf5FNU//N/xnYmxg/Ad2KjRE/85v3qwqISxyS1xQ5P6D50+/i4uKanGz8/yR15ZlufPoWpSpp85yZBvB/oGZtG36wW1Kssqep+6fZxBkFP7Hy8HxR8NAje3R64f5Zp7ak2BegwcOzKRFEzdHCfMKLL3yaCuDIp/yLwvjSDZBSW6Gc5fOhduHGK/CsHF/w34WxwbHP/tmXwhi5WCdt+tw40tFGTE1Xa2sm0JSwn+ePL9XZR9suQkjOv4z/GdkZGD835A7iU9PSU975Zb8twqSWh2dS5bnMDAwvFq7eIdocKzH8////4Pi9z/cqdCoA/FxpiKYJliSQ05JYLH/Df8ZG8GpsYGhoaHhPyi6wBJIaRbdRnRDcPIB6z7nD9ECQaIAAAAASUVORK5CYII=',
    order: 81,
    base_experience: 158,
  },
  {
    id: 50,
    name: 'diglett',
    weight: 8,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png',
    chain: [
      {
        species_name: 'diglett',
      },
      {
        species_name: 'dugtrio',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABG0lEQVQ4T2NkIBMwkqmPgboa/zMwMDI0NDAzXL36n3H16r/YXIVhI0gTIwPDf0JeQNEI07R/agMP2+frjU/uPrsRPvvw7Jlpaazps2b9RjYMReOqhlC2sIbVv9YFWkebW6osuXT/KUPL9O/SRxmOPlsVGsochuRsuMb///8zMjIy/l9yexLf72XnDoucfa33UYiN4abgz1ucAixtVfWbFv7/z8DIyAjxBlzjqlWrmMPCwv5u2VBp+/MXw8J3j99Ifvn68dN/dkZGFkbm2Xlly6phhqNoBHFgEg0NDEwWduWar9+/fxcTNPMlIyPjP/TAwhaPIDH0UGViYGBA0Yw1AYD8snp1KNO1a9r/6+vrQZ7HiB7qphxCkQ+SBwBtSHAPX5KMQQAAAABJRU5ErkJggg==',
    order: 82,
    base_experience: 53,
  },
  {
    id: 51,
    name: 'dugtrio',
    weight: 333,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png',
    chain: [
      {
        species_name: 'diglett',
      },
      {
        species_name: 'dugtrio',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABdklEQVQ4T2NkIBMwEtAHkv+PTQ0ujYz//zMwMDIy/P/f0MDE2NDwD10zNo0Ytvz/z8AIMgRZM4bG/6tCmRnDVv/d2xjSwcvGEHvt+J2whE0Xjq4KDWUOW736L0wzikYkSdFd8S5P5FV42E7c/bE4fsGOuP0NDiyODQf+YGiE+eX05NTgv38/Fb689syAT1yMm5Gd6fv1K7esM1dcPI9sK9zG/Q0NLI4NDX+2Jrnt1lQVctl39tVPKRYmJj5uBtbj9376lO4/vLXBwYGl4QDEVrDGhoYGpoaGhn/zlxTqcrz6fpj9xSf+j+ycDKzffjBw8HMynP/0/PrvPz9ruibsWQfV8x+s8f//BiZGxoZ/y+dlm3Px8dS/ef9R/P/v37+5uNilP37/dePV46cSPNy864urV9VB/cgIdyrMVrBBVxvYGLQafl873iCobdXwjmACAAUQQ339f0ZGRuQ4g3mHEeQdrNEBEwRFOMj3jQ0NKIrxJgBi0zwAoa+hEHyb0/4AAAAASUVORK5CYII=',
    order: 84,
    base_experience: 149,
  },
  {
    id: 52,
    name: 'meowth',
    weight: 42,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png',
    chain: [
      {
        species_name: 'meowth',
      },
      {
        species_name: 'persian',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABrUlEQVQ4T2NkIBMwYtHH2NDQwFhf3/C/sbEBxP7PwMAAwigAXSOIj6EIm6Ow2cg0qcnIWkVG/MaBG0wiXV1bn///z/CRkRHVQLjGUAYG5tUMDH8ZGBgcdvR57jawNbqwb+Uy3T09H3rnMbyvnplmzJo+6+xvmO1gjf8ZGBgZGRj+r1rVwPb9zu5J9q7+6eIK4gxfn79jOLJ36dm/fyUzg0s2n14VGsoctno1yHAGDD+umOzmoayk1SXIJqjDLMT/6/rJ9Z8/X773JHz6Y0Oo/8HhANe4f78Di6PjgT/7lweFsDL9ni3Kycn96tvzv58/8G1+e+4oa+ysD6EMDAx/oJYhNIKd3NDAxNjQ8O/g+uB8OxPpCTt37TnNxKm5XYKfd42e94LL//83MDEyNvxDcWoDAwNTAwPDvzQGBsnAbouuz6xv7vFxiundOflkec68R6uQNaFqbGBgamhg+NfgwGCgbKJvGNtzcf6WiW5Wjy/fds6cc7+bgYHhB8yZGIEDsxXs7P8MjOhxh5wQMBIASLN9gwOTY8OBP6tWhTJfu/aasaHhAChQ8CY5opM8AKD/pA/0WsN+AAAAAElFTkSuQmCC',
    order: 86,
    base_experience: 58,
  },
  {
    id: 53,
    name: 'persian',
    weight: 320,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png',
    chain: [
      {
        species_name: 'meowth',
      },
      {
        species_name: 'persian',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACAElEQVQ4T2NkwA6YQkMZGFevZviLQ56BEV3izMw0VpP0Wb9B4v//MzAyMjL8x6YZQyNUkbSyDIPe3ScM2xkYwIZjaAZrhJkc7SXUlRTi+vHr76/BD568ZstrPqkDNYhx1apQptDQVf8YVocxMYat/gfR2NDAxNjQ8K800SitLNltpqC0KsPRQ0dv33p2JSO18tS+VatC2cLCVv9CdjJY46rQUOaw1av/Nmc6uNjaKK9VU5Thu3Du2rvpi1d7bz7JcAKk5sqWVPf/rEwZjH8ZTuh4zeyE+RHsj5lpDKxTdjDozWqM3iSnJCL1n51x5fe/DFtvXXn6V0SIy+QvG+t7S0PZpt2H7tnAAwdmKwMDA9eZRXGPtY1khTjURBgYvv9iYPj8k2Hj2iveHJK8JwTYmSvuXnvajhKq////Z2RkZPy/a0rYXh11CadX337eYGVjlNIylOU7tud2nnXMgskwf6JohMXhrmkR5erywh3rtlzxMtKXyefgYnX8+fNPi13qkub/t3PZGVQn/0KzsYGJkbHh387ZkQst9WTidh+6m8LEwqDMxcaqz8bOfNsxZVnB/v0NLI6ODX+wJoCFLd7xMtK8Dg+ffq9Lqtn4eEWbb/rvv78PxNbuuNnQ0MDU0NAAiUdiAXISxKpx1apQ5tBQkHGr/4HSKoh/7Zr2f5BNMEsAQh3LkFRmRVcAAAAASUVORK5CYII=',
    order: 88,
    base_experience: 154,
  },
  {
    id: 54,
    name: 'psyduck',
    weight: 196,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png',
    chain: [
      {
        species_name: 'psyduck',
      },
      {
        species_name: 'golduck',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABbElEQVQ4T2NkIBMwEtAHk/+Prg6rxlWrQplDQ0MZGBnD/kI1gNShaCZgo7IKA4MqMwPDjpsMDAwomlE0/v/fwMTI2PBvz4TQZCNrybA3r+8qbd7xeGbxpEs9IFeEha2GuQBsChisCmVgDlvN8HcLP4OS3ILOu7pGPAwMDEIMD+/seLn/8EKDxAaGF/8bGJgYGxj+gdTDNf5vaGBibGj4V8XAIJ59YdFlTh5u0Zu7tvxSV3/O9vTbD0dd3wMH9u93YHF0PPAHVeN/BkZGRnAAsD4/nn6Jm4NJ48fju//fv2B5e+ryc5fYyecvNjQwMDWg2wgTLDc25i/v5bwnqMQnxPCWg+HBxW8Mjx5/qbCvPdKJ7E+EU///Z2RkZPxf2NfH6SP8cAnHu6u/WVkERb9y8fM6Js+xZ2Bg+I7VRlwJYdu2SaKeXnlvGImNx//7HVgYHA78hfobw1xCSY6hoaGBqaGhARwFyICgRlxeAAD+KYkPp69p6AAAAABJRU5ErkJggg==',
    order: 90,
    base_experience: 64,
  },
  {
    id: 55,
    name: 'golduck',
    weight: 766,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png',
    chain: [
      {
        species_name: 'psyduck',
      },
      {
        species_name: 'golduck',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB0klEQVQ4T2NkwAn+M0KkGP9jUwKVRJX6//8/IyMjdg0wlZga//9nZIBo4mRgYADRP8CKEeIQdyDZxZg28wzLrHST3/mt24rZBbiDv/948+jGwZNFuzd1PUN3LlanTp997pKopqruiROHbveUeNszMDA8F9UK5ckO0/7W0NDwD2YjSDM4AALbjtkbcN7JdtC64HvjhjrHucei85Ws5Ltf373P94uZKfz2/SeV2yfn/QS5lLGhoYEJZMqStVumfmESyXr//HqYrPgTw9sPLSpZOLgZvjB8f83FJSj65dWz5d1lPlGhoauYV68O+wt36orFTfr/ueRVI4Pj16T1nA8wNJBb//bi4a8S4p+4P/8RZViUf9L0/MeGMxgaYZ7ff/8/x6XT9w68vn7TXExDh+HXl1uffj9eXlzZMHcOcjTBbZw5cyZrenr67575+zV+feO4fvng1vmK9i73P734ETul2UMNYnADEwMDInAgQlC/9k6sqf38TdS8oTLfNz09WMXCOfvW08cvCmuKoyY0NOxnaWhw/IMej1DXhrIxMKz+BeJMnrtcSlrkqfazxxy3cnJyHmJ1KnoEwwIBJo6eDLElAJjYf5DixsZGZgYGhn+wiIcZBAA0A9MQUU8gQAAAAABJRU5ErkJggg==',
    order: 91,
    base_experience: 175,
  },
  {
    id: 56,
    name: 'mankey',
    weight: 280,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png',
    chain: [
      {
        species_name: 'mankey',
      },
      {
        species_name: 'primeape',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABv0lEQVQ4T2NkIBMwEqPv/6pQZobQVf8YGRn/w9Rj1fj/PwNYvLGxAUw3NDT8A9H///9nhGlG0bi/oYHltdbV/2Fhq/8iu+TsnKz0l8+f7fGq3XC3oaGBCWQQVhuX9RSLRJX0vmNgYOBjYND6s7lEeufnb6wXoqZty97f4MDi2HDgD4rGK4uyUtneXtqbVXhEauqRBYsFBQV4r5w+d/3Xf+79/z//0vTMqw0FO5mBAexbRkYQW8WTfX8yz+4/f7gYhEwtnyvLSYf9+MfyX5SPifHm1Ye7Zvql1emFGvg9ZmTvbFh68hPcRpjHZ9cVu1o6aE1ivf1Eg1VIlEHRQoth2+q9HROLmvuTSuPnPLt5uaho07k7KE79f3sSO6Nq3s9d89rSuRlZu//++nueQ4BL6+mrj4d+fPx2g4WL7WBoUeMuUAAh2cjAyMjI8D801JIzREX+4IfX73alz9lVsyQ/eCInJ5tkcMfyMGjUYA/VBgcHFknFH3q8rByPomYdeDM/wVyViYvb/QWPwsLyrnmfYWGCN+WsCg1lDluNEqcg9eDUg1UjSEPo6tWgSP4PSkWrV4cyhYWtBqUe/EmOmPQLAOyfu5EjL917AAAAAElFTkSuQmCC',
    order: 92,
    base_experience: 61,
  },
  {
    id: 57,
    name: 'primeape',
    weight: 320,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png',
    chain: [
      {
        species_name: 'mankey',
      },
      {
        species_name: 'primeape',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACEElEQVQ4T2NkwA8YGRgY/mNTApJAAf///2dkWL2aCSTIGBb2t6GhgamhoeEfujqwxv//GcD06tWhTGFhq/9iM4yRkRHFZkaQJkZGhHOu75vl/vLKZblvQqJ/ZcTF084c2F+U1Lri2P/9DSyMjg1/YIaCbWqIFuJz0As7dOD0i52WbnIbzfUNj/IoyjIwvnjBcO3+8283Pn1xDY1tPLZ/fwOLI1QzWOOEFA89ER7BRYfOvhJw8FB7HJAVY8H27xfz50ePf3Gxc7FfPHnx9o2zk9zjpny8D/MzyOGMjIiQ47m2Z+ohvs8/DD+xifxR0ZNkvn7m0o/Hxy9z/udg2u/bNN/p//8GJkbGhn/wUP3/fz8LI6Pjnytb++cr/P6Z8FNI6K+grATz0b0XGdZuPX2Z8wdLZvv2dUdBgQ0KT4TGhgYmxoaGf80RnpuNHUzctJVlmd+8fPf+1vV7gj9YGX0SG2bumJmWxpo+a9ZvcFSBA4eBgamBgeFflZ+O+G92hSdnTj+pTs+223bx2vmXL55zzWFkYZSYt2WHOcQiSLRANEIjucjTzlBeTCQ0L0GvDhH0KjJTU7XOfP3OWFa2ZOOiVaGhzGGrV/9FOBU1kBj2NzSwHGQ4wNDQcOBPrJWV2I////+sPn78HYYfwSmIgYGxscGBuaHhACj1gJ2EluTgaRcjrWJL0A0NDEwNDWCD4MkOACnn5A/PVI+aAAAAAElFTkSuQmCC',
    order: 93,
    base_experience: 159,
  },
  {
    id: 58,
    name: 'growlithe',
    weight: 190,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png',
    chain: [
      {
        species_name: 'growlithe',
      },
      {
        species_name: 'arcanine',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABoElEQVQ4T2NkIBMwEtL3f9Uq5sZr1/43NDT8Q1aLofH//1XMDAzXGBsbGf4hK/7f0MDEiKQZReP//w1MjIwoJjPuX1+g/5NT4JGHR8M7ZM1wjSCbGBnD/n79ujjgw6v3Gb2T16RmZfmJKSvJnHl6+8mHhdOXO1dPOHtu1apQ5rCw1X/BGhsaGJgaGhj+tTIw6MQdrzotzsHOsXzF1r2MPMoX3Hy0ih+8en157bpDwd0zL9xuaGhgAnkBrHF/QwOLY0PDn/XtIZUGamJtHx+zf3l75zTP3c+CDMof/zNc3HAtuojh3rJVDaFsYQ2rf4H0gDXC/LZzS7mVmobkJsZfP4UfLz/z6/+N32xsfGwMOy7ePtpw5rwNNFRBev7D/bh/fwOLo2PDnwOLs1cbO6mEnN99neH2+ts7GGXZlzJe/t565vt3o6mnTr1tYGBgamBggDgVavP/wr5CTrVTLzN+SLx6yPlVruj1/W81tXtWHIh0MBZZfuDsG7zxiJ4gYAGHLo6RABocHFi0skT/g4Ic5hKY84i1ERwIuJIkwbSKSyMAkIi7D3tGIYIAAAAASUVORK5CYII=',
    order: 94,
    base_experience: 70,
  },
  {
    id: 59,
    name: 'arcanine',
    weight: 1550,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png',
    chain: [
      {
        species_name: 'growlithe',
      },
      {
        species_name: 'arcanine',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACgklEQVQ4T2NkgIKGhgamensGJgaH+n+MjIz/GRgYQJhh1apVzKGi1xgZHRv+wsRA4oxQfSAarBAZ/P/fwMTI2PAPJvb/PwMjIyNEHSOMs6QzRUZDXSmG9T+r6f1bj5YHlE9eA1JwaFmDHhcHW6RJUFUPAwPD21Whocxhq1f/hdnIfXJB9WkzS0PNO8evMFy78+jb2qvv5dL9tQX0jNWv8UiIsJ3efXahWVRNAsgwsGX///9nBPnp8LSa7QL8Ah6vnz3+Ii4pyXPp8t1SMxcdZSUbvYxXZ25//vT0C+/tVy8KvfK6JoBshWvcOrVyu5KUmAcbK8uvLx8+sz1/8fHCb1amowZqstnv3nxm4GdnZ3j57dNH8wV1EgwHGH4wrloVyhwWtvrvvJYsKwNlud2ifLxc9+49Zzi7/+wbO+47j+695zNiNrF4yMXPtenLp89XQ+tnzIQEzqpVzIxhYX9X92ZZ+bhbH2VgZv5/avMphquzlzM6OoszMPFIMKT3nJhwgOFDIXKIgwIHHhXbe4pOKsvLmB2bt/bPbyEuJjlB8X/iTD9Y7oqKPlVSl3s7OWGB57xvN5+B4hwcqvsbHFgcGw78mWOrn8OuozFZ9M+r/391DBnFv7EyvP76/ZultyHX9RtPLlom1poxMDD8+s/AwAjW2ODgwNJw4MCfpVFeCT9/Ms7//Pf3bV4RQVV+VrZTjLxMu2VZOaqbWxeobmL4eQclHv+DrG5o+Lc8wiOB+SejIj8ve8LHF992hO3alV7GwCAjyMBgXcnAsBLdj2A+LD5B7G4Pe0sRCcHriQs2fEBPhjA+LOVANDc0MIGDugGSPsEJv6Hh/wEHB2bHAwf+IBsCABfABvYYT0kWAAAAAElFTkSuQmCC',
    order: 95,
    base_experience: 194,
  },
  {
    id: 60,
    name: 'poliwag',
    weight: 124,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png',
    chain: [
      {
        species_name: 'poliwag',
      },
      {
        species_name: 'poliwhirl',
      },
      {
        species_name: 'poliwrath',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABV0lEQVQ4T2NkIBMwkqmPAZdGmPh/XAZjaGxoaGCqr6//z8jI+D80dBXz6tVhf7FpRtEI0tTQ0PAPWSFIDMS3t7dncnR0/AOTg2uEaZpTyCB0XGz/Eqafn+W+vH6WunxqxnG8NjY07GdpaHD8k9q0drI5w8+cVyxMDOd/Cz1ZXe8me/PmGZE3b37qVVfvPnTgQAPYVriN////Z2JkZPyXWLfqULghp+0/FvZfsw++YBH8di2uqjijR0lJXmLTxo16AQEBl1etWsWM7FSWhoaGPwkZhRHW5ibLmRkZGeavO/pATVzomo+3jZqmlvwUDTWNiRh+ZAgNZWZYvfovg0u1hTbbD5fP718c5xKVjbuxqSOZgYEBHiiYGqEinp6e7Nu3b/8J4joEFAgc2DDhA4j9//9/FkZGRsxQRQ65////M4atXs20Ogwch1gTA6EkB5LHmnoIacSZlAH47n8QcUwLfgAAAABJRU5ErkJggg==',
    order: 96,
    base_experience: 60,
  },
  {
    id: 61,
    name: 'poliwhirl',
    weight: 200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png',
    chain: [
      {
        species_name: 'poliwag',
      },
      {
        species_name: 'poliwhirl',
      },
      {
        species_name: 'poliwrath',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABxUlEQVQ4T2NkIBMwYtPX0PCfqaGB8R/D//+MDY0MjGA2GsCqEV1RQ0MDU0NDA4pmFI3///9nZGRk/G+Xt0b10KSQ22nlM/mPvRcTuTIr8G5o6Crm1avD/sIMhWucOXMma3p6+u/pi7bo/PjJcGnDDbbjxjJcYqLMTyQr8yJUGBgYXqSlzWSdNSv9N0gzWCPMJhDbKGvt1DQn1Sx5UXaGb9+/M1x5+puh/uijFQzzgiNB8jBnMyJpYn348OHOvRd/OAqzvvnNx/qBgZ2dg/HuK7b/Tz+xsdqpMx6YM6k6et6K3c9AmhlhJvT19QkFBwVdvHjtocTrl4+YWZkZGEVFRBiev3rPoKamymBtacIwZcq0mtzc7FaQt9CdKmxn58tn6+y8Vkac2/D1m7cMj569PycjxZspLy1n9Pz5k7VVVVWvwa6EhVJDQwNLQ0PDH9nIKUVsX57H2Eq8Sr/75Bcbi5zdmhd/OZKvz4nehhweGPFoHVoux/Hn1te969e/BSn0yVlQ9v/fjztbp2WsgxkOD1WkCAcZ9B8aeiz19fV/QfEKlv//n5EBxoZFB2pK+c8IiyWQuEPDfhYHBod/6MmOqCSHLT0DAFBMx19cYxHNAAAAAElFTkSuQmCC',
    order: 97,
    base_experience: 135,
  },
  {
    id: 62,
    name: 'poliwrath',
    weight: 540,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png',
    chain: [
      {
        species_name: 'poliwag',
      },
      {
        species_name: 'poliwhirl',
      },
      {
        species_name: 'poliwrath',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACMUlEQVQ4T2NkwA4YGRgY/jMw/AfRDAwMjP/RlUElEML///9nZGRk/G+cdob17CyT3xCZBiYGhoZ/yJphGhn//4cYCtKEpICFgYGBnYGB4Wta2kzWmTPT/jU2Nv5vaGj4B9IAtgGmuKF3ic+b79xdx1/xLdLl++ShJcUsWpblZwbSDFMD1gPjLOru5o4rLf1aM2nPKRdLDdNJu54zhBpwMPxlYGZI3/bkdL7U0wnhnvp+n75+LbO1tX0E1vj48eNVf/78MlBM33h6UqxFlJMh3+9dew4xujrbMn74zv7fdvY1lqnWbAxZ8Z4MDx496lKUly9nXLVqlaK9vcO9W7duMXQvO8ugIcnFYKou8O/ho0f/JSUk/olIKrG6V859VeIsdd3T1V5DSkoqS1NTcx3j1atX2c6du1By6dLVj/uvvhP5zS7oG2CmYiwnwcvAysbFsO/CU4YFp660MRycXM3AwMDPwMDwERyI6PHDr+fkpKBivVeGj/Xaq6+/fnz/x2jE/u1l4Nntszb8//+fCRS/oMAEaWTcv38/88GDjv9esJ7Wun7nyLZPrx9sOb9lYhbIUPPgslWMLJwKJ1Y2gkIWZhFEIySVMDD4FSzd9vnbR6sH53f43T+96RBITNU2IsHQNnr+2w/vtu+dFu8FdSEiOqACbAwMDKDU8p8hNJSZYfXqvyCDdd1SjJhZudgvbJ10DOY1DD9CUlgDE0MDahIjlFbhfkBWGAqynYGBYTXEBWAAAGT81Q7SEFI9AAAAAElFTkSuQmCC',
    order: 98,
    base_experience: 230,
  },
  {
    id: 63,
    name: 'abra',
    weight: 195,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png',
    chain: [
      {
        species_name: 'abra',
      },
      {
        species_name: 'kadabra',
      },
      {
        species_name: 'alakazam',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgElEQVQ4T2NkIBMw4tLX0MDA1NDA8J+BAYwxAFaN//8zMDIyQjRcvarFtnp12J+GhoZ/yLqxaQSJ/V/byiAZXM3wHKb4/6pQZsaw1X9hfAyN//+HMjMyrv577XDgBCEhFoNvH+5tfvpO95at74LNMDmQZhSNq1YxMIeGhjKAND69YLdHSp/L+c+zjwxbDsoVSjCuPG4ZyXAS5g24RmR/gUyc36m31dhM3Ov4sd23pcW49ggJSNyyCr03Yf9+BxZHxwN/wBphmrbNlfH8/5/165Ll92+GR5uc4WZlkNm///qtgBAJxr9//zRa+j5ciqIR5MSwMIa/u5ZKx0pJsM199ubH/Y+f+LnVlf9K////i+Hy9V9PL537rdk1781nFKdC4+zfpS1ygl//MdaevfN/bk7Ro6vr5kqUsrKxOvrGPk5iYGB4gewdlMAJDWVgXr2aAR7kIG9UxkkLty96+hZmOJ7oAGtmuHaN4X99PcN/UEKAeYVQAkBJXug24bSR2DQPAPaQsA8Dhq/AAAAAAElFTkSuQmCC',
    order: 100,
    base_experience: 62,
  },
  {
    id: 64,
    name: 'kadabra',
    weight: 565,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png',
    chain: [
      {
        species_name: 'abra',
      },
      {
        species_name: 'kadabra',
      },
      {
        species_name: 'alakazam',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACIklEQVQ4T2NkIBMwoutraGBgqq9n+M/A0MDIwNDwn5ERxMYEcI3///9nOjsrndkkfdZvZGUzZxqzPn/u+1dL6ypjWNjqvzA5sMb///8zMjIygk0+uJG9eMa5nwvz7DPU//06rmTtcXExTDGyOsaGhgamhoaGf6vWrXPdsublx6yYDQ3aGnqGP/+f59235e7Z/fkidUEbrF0Z/z557BK8ZiZMM+P///+ZGRkZ/x46tGfByxun4vk4V/+2t9Bnvf/qF8PxPcsYrp6zfhecrsL+/euD7c6hB0P//w9lZmRc/RekEezM7asT9757/cT+/6/dj+WU1RQe3GFhOLL92iWfKINftjbMJh+/nK1VMGBoAXuNgYER7tSEqJSgQH+udj2tJ0cXNazTdwlQNpLQUf97/8IxJlGpD4yikvL/zl386rcw9s2+1QwM38GBs2rVKuawsLC/u3dMCBYTfZf750nTP5b/AY6CWoYM147WMzx5JPbe0Owj69dv7JdXrPgUNG01wwuk6GBgZmRk+Htim/b512/eX3v5yeCegsSzSB7OC7J7dzAEVU9m2MPAwPCHgYHh7///DIwo0RHasJ8nVuvoZoYf1575xS2LZmBgYN+3IfzMh8+iu4NipxRBoo6BEZQokFMOiP3fr+wI76Yum88gRVevrmI7dYFJ/t2HTz94WKa+SE8/C08c6EkOrBmkCRa/uJIyRlqFRg801CEGQA36h2wIAMWn/A53XdRMAAAAAElFTkSuQmCC',
    order: 101,
    base_experience: 140,
  },
  {
    id: 65,
    name: 'alakazam',
    weight: 480,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
    chain: [
      {
        species_name: 'abra',
      },
      {
        species_name: 'kadabra',
      },
      {
        species_name: 'alakazam',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACa0lEQVQ4T2NkYGBg+P//PyMjIyOYCeEzMDEyMvxjYGBg/N/AwMjYwPCvoaGBSUtLizEsLOwvSA1YNQxADYBoPmPMymB89g8jI8hcsMFgcRgAa9y2bZuoquqdT6qqeT93rpJz5WR9xG0XyLABJLd8ip5zZM6lvdu3H7BkYWMycXW2mww2CCS5ffuu5V+//z0eEuQ5af4qLwkD4Vtnf/+VLOfnvWT55LnIe+eguzX7thYe/ctk9s/VM9L2////TGCN82cUekiJ3ln/7NlmM473DKYu0QVzRZQ4GH486mBYOk2zP6VTrmXr4mevZeQvL9W3Y4j7v4qBGayxNYVBXNfK/MWz19bbOP72WfiGegpx8nL+vHTmFdvL28cZr51XPSmlZWn+7Pdt18raI3tWrQplZvz/nwEUoP/jjBQm2Lrz5N9+82CGob5QkKwMv9j5c7/+3L5zc6O0MIPus0sMxyYeZEhEDhyQrbAQk7p0hMHg5SuBkGuH/8VKa/5kMrf+GX/qTNILYWmFjw4udadB0dLQ0PCP8f//BiZGxoZ/G5bU6trai8778nqG+IF9154qK7FqfP0m8kNU4vl/Q6dZkpfO/M/SN0uf/n9/AwujY8MfRpgJi2bnKDo5aZUe27XVnO3PVqMPrLn1PP82X3r74ud6eaOYGdrGptWysmHvYHEKSS5IEbxgZkunBM8u4xWznXysEkSUk7wWXjmy//R8h3CGJKQUhUg5IM0MDGFM/f2WbEVFRd9hgXD1RHjP8+dKhtefqGXn5ibegPsRORkhs0FBHha2GpwusSVJlLQKVQATA4U0KLrAAJLG4KHPAACgXBBzxcA4rQAAAABJRU5ErkJggg==',
    order: 102,
    base_experience: 225,
  },
  {
    id: 66,
    name: 'machop',
    weight: 195,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png',
    chain: [
      {
        species_name: 'machop',
      },
      {
        species_name: 'machoke',
      },
      {
        species_name: 'machamp',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABnUlEQVQ4T2NkIBMwYtP3n4GB8UCDA/NBBod/DQ0N/7CpwaYRJPYfpvj///+MjIyMcD5MHEVjQ0MDS0NDw58yawZe4yi7us+f3x5Kqbi6edK2Sex5Xnm/kA1EaPz/n5EBavLsvjh/KQPrDbeeMt0qjE1VR3Iq3DVgjTDnTNm5xvwvI3vBt9evlFX4eE2fvv/57SXT/7nKciK3nrz4MqshLAxkK1gzWGPD//9MDYyM/6rmz17KzMyq++TdhzfOf/86vpSW/HP/y7ez4jwc5l+/f07sSMxcAPMOeuDwMjAwfK6aNStJXFd37q1Ll69NTU/TZmBgkFIKTft6b/Wsjyg2gm1taGCCBX31smUXZBQU9a9ePMtw5dhe3QOL119BjxK4jTDn1ixatPQnA0PA9Tv3/fj/fYj/+uWTxYYJc3UYGBjg/gMZAtMICy2u8jlz537++mXhtPz8HSAFXhnRFT++/Vq8b9HqpwwNDUwM0ASBNeWAnb5qFVt9aOhvpMhHSRgYGletWsV87dq1/zD/OjQ0sBxoaPiLHPnITiU5qQMA3cy2D9LNorAAAAAASUVORK5CYII=',
    order: 104,
    base_experience: 61,
  },
  {
    id: 67,
    name: 'machoke',
    weight: 705,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png',
    chain: [
      {
        species_name: 'machop',
      },
      {
        species_name: 'machoke',
      },
      {
        species_name: 'machamp',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACCElEQVQ4T2NkwAn+MzIwMP4HSa8KXcUctjrsL7JSRmROQ0MDkz1DPdO0q6v/r4YoZGZgYOBgYGD4umrVKuawMIRmuEaQpoaGhn/IBk2s2LFbREDY7uLVUwZdi7Ov/2/4z8TYwAhWA9YI09RWuUdYTVQ86cOnT9t/i1t/+f5gVpySjLMZ47unHl/ung+OXpS/8X9DAxNjQ8M/kCcYGRkYQH5hWtt45CCrkITNsjUr28Pif/vzCD195RYwO31L98Wb958/OJzb528Hs5Vxf8N+FscGxz/zi9cFaahbrL39+uHbj18+fmBl+6ssIMTP8P7Bq2//GZm5Nj++6bB9ddnB0NBVzCD/M8KcOaNms+qPP8wzmP4z2agp6bC9ePPoHwsz+/9/DAzMh8/vz5u9smQycuii+BEaMAKTqrZ3y4iqpvz//5/h1qNLBysnBDtA5UDqwVEED1WQ2xkaGP4zMjD+r0pZXquodq7p7z9Ghp5Z9wrv3FszITS0gW316oZfsFCHa9y//z+LoyPjn7ltB6rUZA1ad57s+f/q813Gv5/1t85dV+GD00aY+2szFhpKicqe27n3UKOICH9MpF+c8v0nl7NTGhymwQISxamw0KpOmeEvJi5Vdf/lqYRn9z9n+LtGR/xnYOyNqTDtwqoRKcWwMDAw/EHiwwMEZ1pFT+////9nZGSEJHR0AACRqPQPH7C/QwAAAABJRU5ErkJggg==',
    order: 105,
    base_experience: 142,
  },
  {
    id: 68,
    name: 'machamp',
    weight: 1300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png',
    chain: [
      {
        species_name: 'machop',
      },
      {
        species_name: 'machoke',
      },
      {
        species_name: 'machamp',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACS0lEQVQ4T2NkgIJVq1YxXwsN/d/AyPhv1apQZlHR14wHDx74V1///z8DAwMjIwPDfwZGRhAbDBhhDCJpkHqwZsb///8zMjIy/l+wdovf5y8fY3Ljo2PPH4i0e/X2X8Dx4JX5wovWpHBzsjonhfqHMzAw/INa9h9mI3NdV//7L58+c1y5eFo9JVRmj5SkuNKeA9d6XvzV/6mhLFv94P79vAlt9ZPTZs5knZWe/psR5LewsLC/afnFxYICIq3sfLxXNXmfGwl+vPTz7D89dgZO+QdvXzz9y8cvwN5QXqjFwMDwGexKmFNB7q5oaNuvZWzq8P3lzX+/3z1k+s6v+V9GRorx6ZMnDB9ef/h4785Nh2ULZl8IDQ1lBju1oaGBqaGh4V/v7DkbmBhZfLh4BX8ys7FzfXrz/O/7N29fKKgqSV8+dyl5QlvDPJgLQRrhITV14cI9D568URD7tPcvl5Ci2paTH99q66jel5GT03z06JF/X1P9XmSNcBsZGBjYJi9cevXX5xcq25c1Mug5FjPw8vExNJZPt2VguHWkoaGBpaGh4Q88HmGmTFu+2paLne3QndsPj7eUT1/SObWwXkFZUez6xav+DeUFm2Dq4BphfmydMFv85o2bD29cvVFw6vCWGQwMDJKZJTUXvv/4tW7BlK5MWFRgaEwvLDP5/59p3vkrN/tP71k/H6TAzis0X0NNJVZKn92mIbHhBywWUJIcKJhfv17NeOAAA8gf4EA7c+YM67xVq1Q+P3/+aPHixV/RUw56UoWHNJoEXBwAHaMdHib1eQAAAAAASUVORK5CYII=',
    order: 106,
    base_experience: 227,
  },
  {
    id: 69,
    name: 'bellsprout',
    weight: 40,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png',
    chain: [
      {
        species_name: 'bellsprout',
      },
      {
        species_name: 'weepinbell',
      },
      {
        species_name: 'victreebel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABT0lEQVQ4T2NkIBMw4tL3f9UqZobQsH+MjAz/sanBqvH/fwZGmAZkNrIBOG28sK3d8OTBynvpnQwfsWlG0XjmzExWE5P0388e7omRlGFcfG5H72ljbxlrBoZZv9E1wzX+Z2BgZGQA+4fpzJK4a1LaQupXLj895Ra32pmBgeELQY0gAzoiDTa8NWL51VN6Zqc2A8OBqwwMdxoaGJgaGhj+wfyJ7FQQGxyC4Ssd17A//+LJyST4iVeF90uP11o9BgaG7wz/GRgZoKGMoTGUgYHzd4hsiej9n0o/ItVPMrL9bXt2617QnikvDoSGMjCvXs3wF2Q4XGMDAwNTAwPDvxAzhrh/pxiufNFjeP/rEoM6HwMDs4yW6MFp115/gaoHuwojOkK1GHi0wxx+NDQc+IMUb3BvYPMjSgIBOUt7NcP/Boi/MVIPtgSAYTrRSY6YdA8ALWB7D7sBwKAAAAAASUVORK5CYII=',
    order: 107,
    base_experience: 60,
  },
  {
    id: 70,
    name: 'weepinbell',
    weight: 64,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png',
    chain: [
      {
        species_name: 'bellsprout',
      },
      {
        species_name: 'weepinbell',
      },
      {
        species_name: 'victreebel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABtElEQVQ4T2NkwA0YGxoYQPgfNiWMMMH//xkYGSG8//v3N7A4Ojb8wWMoA1wjTNGq/6uYwxjD/jIwMLDkRRkoCqUG3Gc4yPCvoaEBxWa4xuQdyUJzPea+Axlw+1Ck/e17n3o2b7q5fvq6O20gsYaGBiZkzYwN+xtYGhwb/nQcLq34xv7Ty41Ldp21Mms/w9szDEu3ffW9qK/x8dP5O39mZqw+/v//f0ZGRsb/IIMY02amsc5Kn/U7cqVXm4yxYmX8V5H/ktySjK/eXfyznfHfny//eTn2bjjndbBt3/bQVaHMq8NWg7zBwAjndDHYzhQq3hasxsHzmkng3+oPT38/13rK/nLv17nrUrelwFwGCwuQvaDABFu/Jbz0Ercwi65SwIsfF9mfcEy4y37+7YHHvhcXXXzK0MDAxIAUNeDAWRUayhy2evXf5bGpba+3vKo0q5RiYDJ8etjMdZMdJGAYmNDjE6zxf0MDE2NDw7/DefVyXxn/b/3C8OZkiPy0XIYihu+rVoUyh0H9hRyvSAkAEWLwOIW6BG/KQY4rkAsaIXGHNbmBQxWLaSAxcGCRlOQIaYDJAwDt6L0PBPGI0AAAAABJRU5ErkJggg==',
    order: 108,
    base_experience: 137,
  },
  {
    id: 71,
    name: 'victreebel',
    weight: 155,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png',
    chain: [
      {
        species_name: 'bellsprout',
      },
      {
        species_name: 'weepinbell',
      },
      {
        species_name: 'victreebel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACI0lEQVQ4T2NkIAAa/jcwNTA2/GdgYABhOGBE1/f//3/GotVFHP1h/d8ZGBjYGBgYfkHVgNTCNcM1hq4KZV4dtvqvQ0t0vJ6edJ/Qt4+nX7/7pXX0L/e8C2+vtDA0HPjDwMAA14ywsaGBiaGh4R8Dg61ozmrTC8rKQlKPHn5muHHszqfXDx9nnFl1armDgwPLgQNgA8AmgMGqVaHMYWGr/97zYxDfx29+LOUHo1L+lWv/DIQ+9Z5RUb8/deHN6Q0NDEwNDQz/4Bphzsw5VOcu//L1FPVdr8UuvvzKpyXz++eVk3vK3zAz/J18imEKyP+MjIxgfzIy/GdgBJMMDIzl28tv3/7KqBz/4cNrTRER0Xe/Prxf+PLFMxYxKdbTV98sO9G0rIWBgeEvSC3IqXAPq/TlnCjREzaPNRL6/+nDh/8bT9z5/15Zifn9x38M07beDPkycdVahv//GRkYGf+D/QhzqlewmUl3leNJbgkxpt8vnjAsusfA8FpSiuHe+Yfrd+VOCUJ1KiRsYLbyrJrufFBVUcjo349fP7c/4V1R817gSdT1C73Llh15zwAPeWioNjg4sDQcOPAn0lEizMRUxUXPUGaZa+T96wwMJ1/CEwgiLOA2IdvIfG53xiZBrl+uV89ezPfJOzNj5pl0ludbpP42gOMYS5KDxdGSBiE+cQWj5B/f/5z3zTxw4D8kBFHSKUoCAHGQIxjE//+fgZERElUYAACVHfUQ/SlBKAAAAABJRU5ErkJggg==',
    order: 109,
    base_experience: 221,
  },
  {
    id: 72,
    name: 'tentacool',
    weight: 455,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png',
    chain: [
      {
        species_name: 'tentacool',
      },
      {
        species_name: 'tentacruel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABvklEQVQ4T2NkIBMwYtHHGLpqFdOq0NB/BxobmR0bGv4yMDD8R1eHrhHEx1DEwMCAIY6sES6ZufB0Kz8nq4P6iaWzE/u6F0BtQ9EM17i/YT+LY4Pjn5sNJUV7g1t7ub6/ZvDcO4XhamVHsRMDQ99+BwYWxwMMf2BOhmts2L+fpcHR8c/kzJo5H71Tkx98ePcxePNMftZ7Oye5nL6ffyYtjdVk1qzfGBoZGv4zMTQw/mOYflwh59PzY6ySspI3/35h2HbnyrQKLb+auxvkP61ezQAKKDBA2NjQwNTQ0PCPYdJ/drePyy8qS4mqf713huEpmwSDnIJhxvx4g5kwV6FoZPj/n5GBkfF/fnVO8J07zw3vCtucu7FqzR+7N0cZjDP1BLl5pU60dO24+f8/AyMjI8N/sI2rVoUyh4Wt/jtnanrW+7cvWErrNk5Cjrels7Pqf/3+z5eYNb0YphZF44LpWcXvP3ziKaxc0ljSXcLdU9rztSjXMUlbQ8VFXV8l3cam/PP///8ZGRkZITYiAzc3Pe5duy59hYn5+hpzbd589huID9OE6kdEYGGkHJCGxsZGRnDgoYcqkq3oyQtrMgQA0ES9DzKox1MAAAAASUVORK5CYII=',
    order: 110,
    base_experience: 67,
  },
  {
    id: 73,
    name: 'tentacruel',
    weight: 550,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png',
    chain: [
      {
        species_name: 'tentacool',
      },
      {
        species_name: 'tentacruel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACGUlEQVQ4T2NkwA4YQ1etYmJYzcCwenXYX2xKGNEF/zMwMDEyMPyDia9atYo5LAxTM4rGVaGhzGGrV4NtyJq/y+DXB8afcwpdrzP8/8/IwAhW+h9mIFwjTNNDBgbt2w1tS7dqO2kHXNzJoizGWyuTV9Ty/38DEyNjA9wlMI0g+j/D///MGxkZ9z5rmG9/Xs3kj15nPIu18HOGk29sPDMurd6xKpSBOWw1A9hFYI0NDf+ZGhoY/0X3724RllGoZv/06jfPtx9MV/lF/hldPMB6R16Z4QYjV/SRXKdloatWMa8OC/uLaiMDA4NL49wucUGJUm5eLgahT48Ydn3n+nDu3+dUlxevTu2ZVPEIatl/xtDQUObQ0FCGo0ePinBwCLv+eXCz+KOps8HVN6+vyuxfJC4kb8QjJipZ3jy1a1JDQwNTQwPEn/DAKcyv6GL8+cucgVtE8J2hnfKXAxsuMP/+K8nLy8MjwsrAy8nLFVffVLm6oaGBpaGh4Q9jd1u3OSMzW8m7l+8Zv356v+n2W+YT7BbW1xgv7Fn9jE3wj6EAux/3ny83fzD+q50ypXcnzFbG3MySAg5WVo61k2ZMv8fw/iPIGfYlnaXs4rI3PFm+JD999PgnLy/7kvqmms0w21CcCgldiDNA7Pr6Fju2f4zF1c3V/lA5uP/AGkFWMzAwgARB8QNKGYz///9nYGRkhKcSotIqFkWQxIEGAKT/2Q/DheWoAAAAAElFTkSuQmCC',
    order: 111,
    base_experience: 180,
  },
  {
    id: 74,
    name: 'geodude',
    weight: 200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
    chain: [
      {
        species_name: 'geodude',
      },
      {
        species_name: 'graveler',
      },
      {
        species_name: 'golem',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABO0lEQVQ4T2NkIBMwkqmPgZBGkPx/bIajaPz//z/j6tVhTNeuaf/X0tJiDAsL+9vQ0MAEYl+7du1/Q0PDP5ghcI0gTYyMjFhNhykGGQLTDNYI0+TQ4MASJeWk/puT9Sfz7/+tjL//6T65/7RP3UL52N9ff77Eh1U8+v+/gYmRseEfisZV6yave/X0lePvf0yzVJTly/79ZWa4c+36HzYe1r+ikiLPL569YNbePv81yGaYU8GBMHdu+/QvH76mfnj34byIqKAJGysrw8cPnz+ysbPy//r79+UXxn8GDWXdL5A1wgNucn+Dw4f377RfP3tzgoeXW/XCkQsH3CJdoz+9/3Cornna6VWrVjGDAg0tVCHuxxW3GIGDrBBk4rVr1xi1rl79f01bG2QwyCAmEI01OkhNQYRSDk7zyNYIAIKvlhOmB/vmAAAAAElFTkSuQmCC',
    order: 112,
    base_experience: 60,
  },
  {
    id: 75,
    name: 'graveler',
    weight: 1050,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png',
    chain: [
      {
        species_name: 'geodude',
      },
      {
        species_name: 'graveler',
      },
      {
        species_name: 'golem',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB00lEQVQ4T2NkIBMw4tDH2NDQAJZraGj4h00NXOOqVaHM165p/0dX3NDQwNLQ0PDn////jIyMYOVgNRAWRBAsAAXswcGuch+efPq09+TJl///NzAxMsJtBun5zwjT1FKfbyckznl5+4r1Ao7+/nsFBAXEf/748ePlqw9zGhomla9aNZUnLCz7K4qNBQUJApwszG++ff2xXUJWnN/YWNf21+9f////Z2L88vkzw43rdyq/f/8ZzcbEvKqla1YzyFuM//8zgJz+PyctfLmIqGCEnKLsf15+0T+szLwsf/5++fft6zuG69dvMf//84/h168/+X2TF08KDQ1lBoUeEyjkHBy0JLRUdCp19DTyeHh5Gf7/Z/n3n/HX31/ffrJeuHj5/P9//05On7M2C+pUSDDBNIPY5eUpmeyMLBP5eLlZGZmYGF6/fvtvz/bj+meuX78CVQcKxP/w6EhLS2OdNWvW7+QoPzsWTuY9Hz59zWdnZWbm5ubJZGVgTp00e8UxkBNXr179Fx4d0CgAB3NuUrj+b8Z/7DPmrj4FEndwcOCQlWVjXrx4FyhE4QAl5SDHJ8hZDAwMIP//QTYYphMjyYE0XL16lRHmJGgiQU4cYL240irBpA8AVjLOvkNttYoAAAAASUVORK5CYII=',
    order: 114,
    base_experience: 137,
  },
  {
    id: 76,
    name: 'golem',
    weight: 3000,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png',
    chain: [
      {
        species_name: 'geodude',
      },
      {
        species_name: 'graveler',
      },
      {
        species_name: 'golem',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACC0lEQVQ4T2NkIBMwouv7/5+BsbHRgfnq1QP/V61q+L969VXGsLDVf9HVoWgEaWJkZPiPrqihoYEJJNbQ0PAPJgfXCNP0//9/xuRsnVh2FlZbC1s1sT8//+xJjlk3GaqRCaYZrnHVqlBmkJOKKkwXq6pLxPAL8jC8ffOe4evXvwy3rz+ycXdadzosTPsXyGBGRsb/YI0NDQ0sDQ0Nf5qnuznxMbPvffbszV8jPdl/27ZfYlTXkmBQ5ZVlZuM0e/yRVc0hLsz9PsjpjDAT0s78Z7U45rfzy+9vjjdufPqT6qHDwsjH979/xXJGS634v6KCrBnBSccWMDAc+MPAwMAIdep/pvUr5+wUZ33gsvfcjj8fPvAwuajJMPBLsP5pW3OMbcuuW+cZPjAYgVyH7FSQ5v/z24I1hOTMm05dXhew48IJVn9pe4bPLH8ZRCT+MCiLCm0Pyd3mBdMEMgBs4/4GBxbHhgN/FrXrVItIqLUs3PH4/rNPd9mfv2Z51RRrLich8O+bU/xWDQYGhq+w0IcFDjiYqyvypvKyvk1kZmZOK23Yt5aB4cmvyW3RFwX4xbVf/VCWKy7OfgwKGJBalATQ2TmX9y0DA0NXefJnWETPmj7ZnYuLW+DS1dfburrKQeJgr2EkOaSI/t/Q0MCInFpgmuB+REpioOgBpTt4slu1ahXztWvXQAaA0itcHAA73eaSUq7mogAAAABJRU5ErkJggg==',
    order: 116,
    base_experience: 223,
  },
  {
    id: 77,
    name: 'ponyta',
    weight: 300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png',
    chain: [
      {
        species_name: 'ponyta',
      },
      {
        species_name: 'rapidash',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB0klEQVQ4T2NkwAL+MzAwMjIw/McmBxNjRJf8/7+BiZGx4d+qUAbm0NUM/xkZGP5hMwBDI4ZBDAyMDKtCmRiurf7P2IAwBK7x/38GJkZGhn9f1uu7Mb772vvzKse0X32/d4j/v/mAkRHi7P//GRhhbLBGhJ8a2F6ve3BOQFBa+9akXdfUmPkyWNfsPfzzoIsumyjfG0atdc9hmiEaoSat6mPgNDVfevP79xeyf3cVt+p2MdT8PGSoxfZP7OqH8282ChaeDfjf0MDE2NDwD+ZUEP3/9rZJ7HfefPJTUGCexPf5vyDXd7bb356dfMJy44zVv5tcX9g5OSyFtpx91MDAwITkR0hoMjAwMH26v+cJr6SUJAMrM8O7Eye/fbeOi+f2cv/9+9nLa2IXLtyGeg0Sjg0NDUwNDWCNAie3TbxmJiUieeLono/qhnr8jPtnxQtWX1+EHB4o0bFq1SrmsLCwvzMqAuYbGGhaXdy494iEo54yCxdvrndM/+X9DQ0sjg0Nf0AGoGiEBVJBQlatqNw/w7tP2BdoyzJbc/G87s0sXfwKyVWoGuGRb97A58D5RurAgSk3GBhy2RkYJv9ETxh4Uw6yDcRqZGxoaABhUGCBowpdIwD8X8GRd+FTcwAAAABJRU5ErkJggg==',
    order: 118,
    base_experience: 82,
  },
  {
    id: 78,
    name: 'rapidash',
    weight: 950,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png',
    chain: [
      {
        species_name: 'ponyta',
      },
      {
        species_name: 'rapidash',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAChUlEQVQ4T2VSXUgUURQ+Z2bHXTenVs2fFjE1FVIiBMUVCxaFJMqwh/FBoRAMn6KHoqAHm9566Och7CXIEhVzSkMXtVhzMRUTS6M/281Vd3XHdNO03fxZZ27MtCNK9+me79zvnHu+8yGEDyGAiEC0eBsHQIT/cdz58JetIppe8jPsuVcLCk4IUIggEw5oxyKg1QGSVgTJjopkoKDvt0vOoVnGa8wy1WKWrZ0QXofIb23/gAcKeZCxtZWjy8sFqbPuWulR2dmoj9Lvjc8WQf7ia5JpxidRxuKFhrnnZIP2yHE6e6owPa8204jNNadLLVxZB4aCociem0xCOguSSIGvP+j5M7BxBYENToKh9wi3TiUJs+vqjIQQChFlceRpj0kfKPl45+FwTMPwB7rCKBpSEkcTS8zHNhfX6cD4qmm1eelrqtt/TyVqXVtuX8rLyzKN6HV7HPumuocMmYkXAs4ZNP14vx9ikmHZHRTdd+csuQCeXaraARLSbbW2g/nWXAjpAJgI2PzuBVdBdTdrhn7mRMIL82PnhKKySuR5nuJ5XnY9qHgUMJiqMgpKQgY2llmen5SNkTTlcLktp8pq36pjKSQBJNRI7X31pgyfZ36u8sb97PHO2BVxOnNmsC0131pkdnqnqiwpL/1+Z9q7uJo3omoWtUp4l123qpp6Gifqrl4/Xkn7hs/OrERtRYTIWGQ0sSSz3jWUtiqNF78NEmWXYVURUfFCuh6qrWnjh+Un5LW9Ocd1YBQMa2P1SfFtxV32y8kAn1SSYgDNERzH0YIgSOdPFh2aZWLyejuetSi5wsIz7GAoGAEjvT81koLvUlUjK4k+3qpb/BxHygVB+icKR2P4rsR/Aex3I/VOaTWRAAAAAElFTkSuQmCC',
    order: 119,
    base_experience: 175,
  },
  {
    id: 79,
    name: 'slowpoke',
    weight: 360,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png',
    chain: [
      {
        species_name: 'slowpoke',
      },
      {
        species_name: 'slowbro',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAByklEQVQ4T52SMWgTcRTGv9eLkepdW68JJMVClSqYTKWg4JSAoAhu9gbFqboJom5S6KubgykaXSx2KJ2uoggKbql0ESw63aU0jcVmSMmVtFG0bUzy5AIXLmoV/I9/vt/7eO/7CP/5aC9ORAgTIDAJAfKr7o+gCxFRSyzMATDX/QN+Az1oMb/YPfCxGL1z8UL+CfDDdRSAPLgNNE1TMQyjnr56/cjwtSsTA9bK6W5rradxMPhIu3ub/XAL9E9r7sPcAeaGfWPs5on+wVSx8PlW34PxyQxzIMlca4ICIQLJSmJ0EBF9WEVV+R7qvKRHosWclc8dVvV769uVZ0OzkyMyYio0Z7j7ApLJBCiZrL27P3X+VJ/6Ggd0FOxVRCpfsE/VkF36hMK3rdGzL6amMwkOJOc9RzEVIqOef/uUQ3pwfKeubRdfLXeEcltQdW3/quOsDc2mjgGoeiuRd5CFl2/OBe33c9XystrbH4fmNLCRLcnO0dCusl5+fnImddkfU+s4j5nVLH/oOjPWE9usSFd0I0xfy6XSw+OHlhbS6U0ANQCuvpmvB7Y+/tLANo0/R2JmisUsCtsOYT4BJ2yJHY8LM7subbXbs6v/6v5PVtLCDxj7dZwAAAAASUVORK5CYII=',
    order: 120,
    base_experience: 63,
  },
  {
    id: 80,
    name: 'slowbro',
    weight: 785,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png',
    chain: [
      {
        species_name: 'slowpoke',
      },
      {
        species_name: 'slowbro',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACHElEQVQ4T2NkQAP/GRgYGRkY/jMwMDAyQGisACSJAf7//8/MyMj4F5cmkDiKxjMz01gPNc/iLXrC8A4kub+hgcWxvv5vAwMDYwPIdkZGuAvAGpGcx3kuq2KfpJb8zTcPnio/vn1/itfGpSux2QzWuGrVKuawsLC/m3bMNLIU4DopIqXJ8mLXDYZtKTGm02vKPvtw8E198OBB54I5c3Y3NDQwNTQ0/IPYuGoVM2NY2N99a2v8/v9l2MjK9vM397mPzA9vsG556GNmLM7FIz17zmz//Tt2bGpoaGBpaGj4A/MjLARZtwQEXhUR5lKV55f9+4CLl/mWmS7DxydPGa5euz7r/68fhbNmzfoGChuwRnAgNDT8OZdT4KkoJbvt7++//1h+/GS8++Yjw1VXsz9/GRlZT+zfv2TmtGmx////Z2RkZPyPonFNbrWvrB3Xph/f/v0RuP2XUZOfl/nwqw8/r3Ixs19++2b27ClT0lCcCvPjvbLGHg7dX8XX2e4zyDxTYlD+KfLj+q1HHDt/vGWY8+51xo0d22aGhoYyr169+i9K4Gwsr4qx/cm7+NDbszs+8zPeCRWxzJn59PbF/P/fcxnmLDiMnJogGqHurpw1Rc3i4XMnvtbWJcfX7WG3/vJ00t9///ucEhLOwsIBFqfwlAPTjC2yZ6alsabPmvUbWQ4lyYEi1+fZM2bjWbPA8fR//37mxoMH/4EiHN1AAC5zAB/RBirMAAAAAElFTkSuQmCC',
    order: 121,
    base_experience: 172,
  },
  {
    id: 81,
    name: 'magnemite',
    weight: 60,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png',
    chain: [
      {
        species_name: 'magnemite',
      },
      {
        species_name: 'magneton',
      },
      {
        species_name: 'magnezone',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA/UlEQVQ4T2NkIBMwkqmPgboa////zxi2ejWT9rVr/w8cOMC0/8D+v4wMjP+RXYfNRpAYiiKoBhRxFI0NDQ1MDQ0N/6ZOnGr1/uf7wJppNa2OmnFBuhyspyatn3sFJg8yCEXjqlUNbGFhDb96VswIinYPXLvz2P4P0/Pr/8XyCaXknDu+PjQ0lHn16tV/UTQ2MDAwNTAw/GtjYFB7kJe2ISQzUfPm1RsMc0IKjS4yfDiPrAlVI9SZBT7hRpdffAiXd1Z5yS8tcak/r3YPshNhAYTi1P8MDIyMaAGDTROGH2GhFxoayiTo4sLkIij4LywsDOwndEDdBEBMMiTbRgBOP2YPz7DzyQAAAABJRU5ErkJggg==',
    order: 124,
    base_experience: 65,
  },
  {
    id: 82,
    name: 'magneton',
    weight: 600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png',
    chain: [
      {
        species_name: 'magnemite',
      },
      {
        species_name: 'magneton',
      },
      {
        species_name: 'magnezone',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB5UlEQVQ4T2NkwA8YodL/0ZXBJODi/xkYGMNCQ5mysrIYHR0d/0AlQOpQNGNoRDa5gSGUTXSqA1t2dvYXnDauCg1lDlu9+u+ucIeUvRfviv2e0LBV5Pbb6l8vv01raGk40NDQwNLQ0ABzAQPMRrBTpM4847Lo7d8sI/reqaC6luEL0y+GCQtnl8wr6epFdzJE4///jAyMjGA/NC9fEvL73ZNyO3sbo8cPHjHNap/BkC4tuMNDji9EomfxV1AYMDIw/GeEayrcIZQld7eyPME74cz16yKr9+8/F2BqJvv83VfRwwefVK2bXt3O0LCfhaEBEmCMMLdnd630kmJ4vNXSxZHh7IVT///wMdzys3RSYmNlZ42sbz9yRiugliHX8wBDQwMTQ0PDP8b/DQxMjA0M/y7GMujcfi3luUmnyJ5lw0LLF16G68IcnVI4Wfl+7F6zlUNG3mBWQ2Nu+qrQVcxhq8P+IkXHf0YGBsb/z6MZtG4xGtle/Cibk3f1+z+G17tq2t19jF2+b3lsupVhbgMDA1MDA8M/lHhcFarFFrb62i+QHyY0TPBZK6jEfDjfbyMsDmEBA/YjesSCnV7//z8slB0aGlgcDhxgqN9/4C8jIyL14Ew54AShrf0fFBDYkjPeJIcv/QMA2te8D2fb+IwAAAAASUVORK5CYII=',
    order: 125,
    base_experience: 163,
  },
  {
    id: 83,
    name: 'farfetchd',
    weight: 150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png',
    chain: [
      {
        species_name: 'farfetchd',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABmklEQVQ4T2NkIBMw4tL3/z8DIyMjw38GBgaQGhCNAjA0/l+1ipkxLOwvIYdgtbGhoYFJhuGqQErD6nfWDAy8R/43fGVkbPiHbBiKxplpxqz60SGOR9ctZWP+xVDRyX3j7HNBuf8M1fcKGBoYmBgaGOCawRpXrQplDgtb/XfT2mJTbl6ezaePXbsi+ofdeY/os0OntZ4+n3nL+cx19g+rc1KWPQS5pqGh4R9Y4/79DSyOjg1/Nm+syJCQ4p3+/cJJhlevuBlu//55TNlH3ljsA/9xB5cGR6hTwYGFYuOKxaVGAhJM+yV5ufm4uAX/ffz6ienB42sMS6cvTVu/j2H2zJnGrOnpZ3+DDED48T8DIwMk+PmOnemvVVeVKTl6/OzHM6uO8P/nlYptnrhqSUODA0tDw4E/qBpB9v9vYAKF3vEuqbLH/3WT//58cJ1Zp+Q6B4fAIT+v0O0wL2FohPlha5eDPgfDCzE+QVHPvacP91fMYnj0//9/RkZGRnhCwJlyyEoA/xsamEAaV2tdZQwNWw0KesJJjpBNMHkATamgD0KMUJAAAAAASUVORK5CYII=',
    order: 127,
    base_experience: 132,
  },
  {
    id: 84,
    name: 'doduo',
    weight: 392,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png',
    chain: [
      {
        species_name: 'doduo',
      },
      {
        species_name: 'dodrio',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABl0lEQVQ4T2NkIAwYGRgY/qMrAwniBP///wfLr169mik0NPQfIyMj3AAMjatWhTJfu6b9v6Gh4R+6if//MzAyMkJsR9EIsgHZ1H0TYs3/sHD3/efnvfyXmXmVV1THvoaGBiaQoXCNMNMOTUk0+vzzwxfv4vW3Flf4pOioKs8+9/zL3keizH6N6bO+QS2D+GFVaChz2OrVf2sTonX9bPkvPXj8+vaD179iv/3+lfns7udLM/cemcrAwPATZhvcqfv3N7A4Ojb82bWiNoXx5+/ZJ3ZfvqyqyqnLzfqf4eunn9sjOrZ4Qf0LD2EQA8ZhXD+vuOn9m3fXHp28c9XSTPYi039mhhuPvj3OnbZWjYGB4cd/BgZGRmjUwP0ICs2wsNV/YSGZYyIfLKymNvPjj4+TJ6w71QjzDkwea6i2T1sqKPP/Zs7f789M2Tg5LkVlT6lBD3EUjTDPNzR0yihKssbxsP9S/cvAdD8s4VsLAwM4XlH8iBLP6CaDJJEjHqtTYYIgzQcONDK/fn31f2joKpSkhlcj4XTPwAAAcw7CDwHy9RsAAAAASUVORK5CYII=',
    order: 128,
    base_experience: 62,
  },
  {
    id: 85,
    name: 'dodrio',
    weight: 852,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png',
    chain: [
      {
        species_name: 'doduo',
      },
      {
        species_name: 'dodrio',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACTElEQVQ4T2NkwAFWhYYyh61e/Rck3dDQwASl/zMwMIAwAyM2fX4p+eKb5kx8CZKbmZbGmj5r1m90dSgaQ0NDmVevXv03McSrhp/lh+FXVvEzsxcvb29raxO+ePqYzOWb9+5eu3btC8hCFI379zewODo2/FnQEL5GU005+M79Z3dvs4lYbV97ulNSVkKYj5O9ftGiRedBTodr/P+fgZGREeL+fRs6lj6588Tz9bNXs2S0lWUE/v6Kfnjzxry03q3J/0GaGhr+MTKAPN7Q8M/WP1rr76/fviaqvG8DnBUOO/nXxjIwMDR3pXn46WgqrHr0+NmijL5N8XCNDQ0OLA0NB/60pTkE8PNxr2f6//9SZu+2hWVx9uk6clzCq/Y/u7jl6MWN////nwwOTUZGSKjub2hgcWxo+LOwIS5GW0dl8Y2bLzeePbfnaIynadeXr98ZHr1hYIi9v1aDYQnDTZCG////M4I0M8L81t3dza0l/2up95KTsYWvz/HxKqnt55eSURX6xcBg/0fzLI+pzonrv9/32qfG3UcJnP3zGzjeMn5XDknovAoyeUZfYeOOy0/M9R7//ZPpFuD2VUb40YZn1y1KSkreoIUqxAkLp9caiggL7Pj3918G66c9J14zqfteZgpb3pVs84OBgeE3SFMDOFShAOb2VavmiX748F3682cmRlPNXxu+fv5d5xlesvD/qlXMjdeu/QdpwkhyMM0gibkzJzrycTHZfPn+Z3NiWuGFVatWMYeFhYHTLq60yrh//35mR0fHP+iuQU6vAK+1FaVKGxRMAAAAAElFTkSuQmCC',
    order: 129,
    base_experience: 165,
  },
  {
    id: 86,
    name: 'seel',
    weight: 900,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png',
    chain: [
      {
        species_name: 'seel',
      },
      {
        species_name: 'dewgong',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABrUlEQVQ4T52STShEURiGv+9e7oSxIIPbLfkPUZrESrnZSha6C5QishDJGmc5K2WlbPyEdEfNRnbckWhSFiblp2QaqTFjkjQYP/PpTOYiQ3K253vO+77feRH+efBnjhAA6af7ZCASESAi6bouapr2mgz+RREEAIjpOokATtA0LQYApoMvIOkkooav27tnPQJRl8dz2D062nbBFYkInU6nkHBggglbg4P9FVrnkLeypDz19Ojcs7Zz0Fqq5Fb3djcZiQd4DBM0DCNFVdWX1cWFvtqMyMy1JMA9lgVDd2lTxYXyOIp4FAiEZ1pa7NOMkWCCjDGBMcZzwPGCa//WVmCXsmTw+S8nnyBSrOTJ1f7L4HZHR2MPnzFBnoFbWHLt1jfYawyrlJEeCT9G76L3lpV1175jrK/u83bjICMSGGJsbmWjpChf2cu0StGcrHz5OngL1mwL+Pz+h80No8rhGPFxm4xh7MtWec4Tb7hoYLg9sDxrNIdurkhR5GfJYilsbeufB/BG3l1+LOePzeNC8b/8VgBuZWICyO12i7AFEKpqIpvNjaqq8gYlL8AfVeNjb0wErxDHOZU/AAAAAElFTkSuQmCC',
    order: 130,
    base_experience: 65,
  },
  {
    id: 87,
    name: 'dewgong',
    weight: 1200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png',
    chain: [
      {
        species_name: 'seel',
      },
      {
        species_name: 'dewgong',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACJklEQVQ4T2NkwAP+///PyMDAwMjIyPgPXRlIAisAaWJkZPwPkvz//z8TumYMjfv372dxcHAA6fq7du0hSU4eHmsvd6M1Z86cYTUxMfkNswVF4////5lBGmCSl6++mPT317/cpbN3SnZPS3xxZuYZVpN0iGa4RpjTTpy44MjJKViydPW6kqTI2GZxUeHgo4fP33n97klsYqrfCZizwRphnCVLNpYZmZp1ykpJMJw7d2URwz+O+/y8XFX7dx/1MLHRqvn581ebi4vRnlWr/jODNa5atYo5LCzs7+LFG6fJsTJnskhI/+LkFGfdsmWjsbCS3PPsRO8XV68/OfXn1993+vryHmAvQf0DosEhuH7mpttKuiYq/EJiDM+e3l9jVaWafHLKvVwNNcWWZ8+en9fUlDKC+xEUko6Ojn+mL1hibWfmeoD5NyfLzx8//v39/5+JnYeBQViEn0FAgJ3hyuW7G0xMVQLBXmtoaGBqaGj4d/TEvZj/v/7OUVKWYf/3/++fxw/f/GfnZPnPwcnKwvSP8T8PpyDzgQMHfWOSXLaALGKEBczWrWfDOBg5JzGy/bqrpqpu9eXjbwY+AS6Gf0y/GZ4/ecHw4tGbbt8w0zJY6MNCFZZKOBkYGH6uWXw0kFuAy/fntx/swiJink+e3JsQGe/aALUEFBbgtAgG2JIVSNxGV1ewKrXzm1ee10+Yt1ASAFQzyGaG/fv3M4OSHVgBNCUhp12QOADC4QG0rT6T3AAAAABJRU5ErkJggg==',
    order: 131,
    base_experience: 166,
  },
  {
    id: 88,
    name: 'grimer',
    weight: 300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png',
    chain: [
      {
        species_name: 'grimer',
      },
      {
        species_name: 'muk',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABaklEQVQ4T2NkIBMwkqmPAUXj/ob9LK+1Xv8HGRYaGvp/9erVjGFhYX+xGQ7TCKLBGtDB////GRkZGTHkGP8z/GdkZGD8v7l+MxcPE3fXvU+3V5hpmYsysjHVnj17dUr8hMh5q1atYka3mXFV6CrmsNVhf+fnzNcQ5xe8/Oc/A4OwmPAfQVkhjqtHbzM8u/LaJH9X6tmZaTNZ02el/4a5CO7HhoYGpoaGBq5FsUtO8Ghyaz/98PaL/GcJnl+sv26GTArSZmBg+AuzBKQZrhEm2OQ4wVzTQPbE39///rCzs/7lZuFkv3bv3r6HT16G9h9veAfzGobGaVGz02SFJGf++8PA8JXxM8PfP38ZGP8xMzz78ti3bGXZFpgFcI0wk1pCO81YGP6LqsjKe96///zsH+af92Ukxd7HTk6+iBzCKPEI00xMosBIOaGhoczar7UZ7R3sGQ4eOAg2Q0tU6z8o5JENpE6SI8aJMDUAK0mdDyTtC4sAAAAASUVORK5CYII=',
    order: 132,
    base_experience: 65,
  },
  {
    id: 89,
    name: 'muk',
    weight: 300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png',
    chain: [
      {
        species_name: 'grimer',
      },
      {
        species_name: 'muk',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACR0lEQVQ4T43SXUgUURQH8HPnq60dd91VC0MKC6SYh7CHIoLckTCQSop2HgyhyFRwffQx9i5C0VthDxmWsJjFjPQh+BLYKhKFoJaQ9RA5ldsmLrvh7rarM3duzPhBElLn7cL9ncPh/BH8Z1FMGQgDRQhRm6B/OVVV2eBskCKMLPuv/VYUhWwFkRpUGUmSWAlLKzYYD4/vGRmbSeHR9iylFP0FMWAGA3a62zVyY6TOWDI6q/bvPQIUZafeT7VfuNX4bBPEGDMYr6JoW7TWRVxiIr9YVX1QukkMk/GJXpjVP75tvNNUvQGpvTfYiwcFLaQ83l266xznFiCeWND1uP6i3Ft+0cW53PNLX+539Hc0b8BYIMbJo7LZVXv74fHDhxoXs0mTKWFAyPMcyRMghBJPkZtNZOZOX7rXOuxAHIhxeFQ2u5u7K4XCjomJmcnS6c+TRK6TWWOFWicrT1CB59n5tN7T3NfSpgZVFsVwjJOxbDZt66w/c/noE9MqCA++DdJTDWcZT1Kwcot5KEsVkSK/m0/n0trT3sErQzCUcSb2tPQd8HLiGybHe03hF5ilFhX9xabnp4sXEA8FYxmMZQvAAphLfboa6g/1OjDa2nfeV+y79v1H8lF6IVNRVbGvwzIJZGj2KyewBY8olifTqbvv9OlooizxQdM0gpxjrsVo/XZdDdfr/SW+na8Wxp8PDA8sH9te63udfxn/M2XORBtDZC1+GOjqWTYXVSmraRoomkK2zCoOYK4mUANjeMwKQ5hGcAStB2O93W+/iwDIGJvEggAAAABJRU5ErkJggg==',
    order: 134,
    base_experience: 175,
  },
  {
    id: 90,
    name: 'shellder',
    weight: 40,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png',
    chain: [
      {
        species_name: 'shellder',
      },
      {
        species_name: 'cloyster',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABS0lEQVQ4T2NkIBMwkqmPAUPj////wWKMjIz/GRhAbDD3P7oFKBpBmiAaGBiQ2Q0NDUwNDQ3/kDUjaQSb/n/evG2iiopd7x0dD/xhYGBgYWBgANEoBoFdBDNl1apVzGFhYX8Xzj6kx87I3cHKys7x4f1bya/fPv3m5GFqT83zXg5Tg6KxoaGBpaGh4U9byeJEUWmpeeycXAxC/KIMb1+/ZThwaF3t/DWdLTA1KBpDQ1cxr14d9resca3jx4eHNhmbqPOwMEkxHNty9cs/nufq81ZMeYbsV7hT9zc4sDg2HPizJyY0Tervs5mL38p/ey2l81mQmWPam0+vp89f3f4aOcDgGv+DYoCB4f8eZwYldjFt7QV/kq+rmZi9LC+3+Yw3cKCRBdaMFmegqGDAEx0Q5Q0NDEz2BxyYpomK/tfW1v6PrgFmKPWSHLFpFwABR5APrfzNoQAAAABJRU5ErkJggg==',
    order: 136,
    base_experience: 61,
  },
  {
    id: 91,
    name: 'cloyster',
    weight: 1325,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png',
    chain: [
      {
        species_name: 'shellder',
      },
      {
        species_name: 'cloyster',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACJklEQVQ4T2NkIAKsWrWKOSws7C+yUkYYByR57dq1/w0NDf9Wha5iBomHrQ7797/hPyNjA+M/EP////+MjIyM/0FsuEaYAaGhocyrV68Gmw5TuLH9ZOiHj69F4zt8pv1v+M8EMgiscVLuJHZ+HuXsrx8+zM+aHv0+kqHYxi7DkjtzRsjOHf1XarlYOZp2Hlxh3rq65hTINWGrw/4ywty/vf9i97MnD1KuvD9aaWRsPJX5jQDT15ef5374/c6em5NvetakiL5Vq/4zh4Uxgl3D+J/hPyMjiGJgYOhOn93/493PHL1wOZb7jx/8FXiozPzi/f23jx7d2SMno7S3YnHe7AaHBpaGAw1/wE6dmXaGNX2Wye+O8FmeLCK/t73+8eGvjJIsEwf/n78/zrEycQlyMz18fudE07IyS2hYMII1wmydnrG2+Av/0x42IdZ/QjyijO8/vGfkfCH05+//XywPXtze17GmzhmuERZyy+o3i/z8+n/m2+/Pgh4zXPv78MpjRkNpx//CfAK/Lt04ycnEytI7Y/fEEhSnovgzef4aTul/wY+/32SQ+2/A8PHZa4ZnHx/X3HhxYcqes3s+QqPwPzweZ6bNZE2flf67LrQ7kIWBee5P5h9/2Fm4b7x+/XiVjITi9/KF2XOxphyYYL5flfhvxh9s3x5+Y15wYcYDbAkDW8oBuQAcNTAA8hODA8M/UFLEayPIv40NjWAvNDQ0gAxBMQimGQCx8AcgjV1xXAAAAABJRU5ErkJggg==',
    order: 137,
    base_experience: 184,
  },
  {
    id: 92,
    name: 'gastly',
    weight: 1,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png',
    chain: [
      {
        species_name: 'gastly',
      },
      {
        species_name: 'haunter',
      },
      {
        species_name: 'gengar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB+klEQVQ4T2NkIAD+///PyMjI+B9dGSO6AEghSGz16tVMYWFhf6HyIDEUzXCN2Eze37CfRUCegccw0fEDQRsPL9yjpmqg81SciYfnxZPXnC/ePw8wjLKacGzVMU6rMKvvMAPgNt7YeINXw1/j873tN9Rfv3zZ+/XbVxtePv4zHGxs51jZeZtff3nNYhtt+x6uEebEi6tPOXNzc/+/d/vu7EOHDit9/vKFgenHfwZrVxsGTQ31lT9//io3irZ+uH//fhZHR8c/jKtWrWIGBcKldSct/334o/yR50fH6z9vpZf2zflbPrn538ENe1kNJbT/KakqZ755++6ERbzdpYaGBiawU2GmXJx52Pwdz48TP3m+/fn75Rujrb8P09SafkYrNbMXIuJiF3/++j7HKNJ6zf9Vq5jBGmHO/X/1P8/BQ7t2Xr141uo/wyuGe19//TWRN2HW09Nl+M/wP0I3zGwlWD3Df0Z44JyZeYbVJN3k9/W15xO+ffuW/PLVSy5uNk4jHiG+BVyc3Jt//fz1kZGZ+YNemPFZsEVI8QOO5NtrL8qoBus/+f//P9eDHTdsP335/IfxF+P93/9/tjMwMogYR9s4/2/4D/EjDECcAE5eKCkFFIBKDEo8IHUmYSYfQfJYkxwobYKcc+DAAWZQ0GMzHEMjrjQPS8OwBA8A+u3xZRquO1QAAAAASUVORK5CYII=',
    order: 138,
    base_experience: 62,
  },
  {
    id: 93,
    name: 'haunter',
    weight: 1,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png',
    chain: [
      {
        species_name: 'gastly',
      },
      {
        species_name: 'haunter',
      },
      {
        species_name: 'gengar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB9klEQVQ4T2NkIA4wMjAw/EdWChLAAA0NDUwNDQ3//zP8ZzjQcIDZscHxD7oiFI3/Gf4zMjIwopgM09AX2sdZtLroO4wP19jQ0MDS0NDwZ0XRWovvPxltE6cGdTMwMPBtrtqf+PjdDZ+sGZlxDAwMz6Gu+QfX+L/hPxNjA+O/JcXrKgSY5drfvPx8WlqeR4SV9b/iwevrp359qFLJxbr4e8OBA2BngzU2MDQwNTA0/GNgYBBYWr72iByXtjYD21+GZ18vMVy8vP03C5vUq0/f+RsmbKmcg2Hj7Unb2FXzvH4umrh8i8h7Be8/yn++P7yzj+X35TesP5j+Mmjyi7sEzq3fuyp0FXPY6rC/oJBgZGRg+D+dgUFMILKs5fGvX//ZP3IkaIn8Y3v09wPDRyaBPx///GcxUTNl4Li3S8t15Zzrq0JDmRlhVp8ubFc68ODVqXf/vwtrsHMy/P50/9FDTmFeTjYWwS+PH5zm45DYbmNs12PTlfwZbBlM41zPpIL3fxkZbz+5zayhbeP/+fvHsrotty/VRWl6sbAw36lb1HceFB4wF4ID5////4yMjKjxt4qBgTmMgeEvLN7S0mayzpqVDgpRcDwjooPhP2OjQyPzs8/PGGeemfkHZFBoaCiz9mttRgYHhn8NDeBQhwOsSY6Y5Eu2RgDAe9Nmyo7blwAAAABJRU5ErkJggg==',
    order: 139,
    base_experience: 142,
  },
  {
    id: 94,
    name: 'gengar',
    weight: 405,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    chain: [
      {
        species_name: 'gastly',
      },
      {
        species_name: 'haunter',
      },
      {
        species_name: 'gengar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACAUlEQVQ4T2NkIA4wMjAw/EdWChKAg4aGBqb6hvr/jQ2NjFevajGGMjAwhK4K/cfIyIiiCaQBRSMuy7tLFnGX9sR9xWpjruckdjFFMaWDJx8842b6zKeqLGPCyfzzibycctGtx4+Odi3JntLQsJ+locHxD9zGVatWMYeFhf3tyFrSLsLHnfzr9x/m779Z+bk5WZm///jFUDgxUJmBgeFeaOgq5tWrw/6CNYL81dDQ8K8/e4rRj9///Xh4xfJkJWQEX7569+/fb0am0/efvzBQZD707fvvXxUz02NhzmVcFbqKOWx12N/e9BnOXxgF98h8f/H3I5MYgzLTO6a/XIz/934UZtIR42V48/lBUu3MrPkw9eDAgXEYGFLtp5fZ7Fc3UWTk5mP/9+bl57/bNr5lvfn83tY9xyt9EOqQQnV/w34WxwbHPw2Zi5aa22hG/f3zi+HiyRcM52+/Y2D89+Xrn78vPNYf6DwC8xo8OtLSZrLOmpX+O8Gjv1eQTabo5euXr/klOXhNNJQ4zt++tHPK6oIoBgaGdwwM/xkZGBhBBATAQqwovMvnJwOTw9SVJW1lEZ1KEqJyez5/fZNcPy93bUNoA1vD6oZfGAngP8N/RkYGjFTCz8Bg+YuB4fh3nEkOJPH//3/G1WGrmcJWX/sfGqrFCIs39FRFMMlBXQE2E1kzAPHQ3A/v0TczAAAAAElFTkSuQmCC',
    order: 140,
    base_experience: 225,
  },
  {
    id: 95,
    name: 'onix',
    weight: 2100,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png',
    chain: [
      {
        species_name: 'onix',
      },
      {
        species_name: 'steelix',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACVElEQVQ4T3WSS2gTURSGz+QxaUYhD4h1wI20ShuUKi4EixCpLoQuzCKjq9IiBCRom510NXUTcGGhwYUloIEu6oyUJoWkWpnElkqeTUtjp6mJq7ZiSNKQJuY5GUnMhKbo2d3/nu/895x7EPhH8DyPtGQkPDsrvmE0cgiC1E+mCglN7Y3V2vcznf5BkmTldD2SJEUkSbbhDpC2218k8/mXJpMpDwDoIkX1yru6dEfZrOfRyAh7Eu4AHRRFsyz77u7Q0BMMw64e7O+f1Wg06lgslns4OqoFgAODwSCmaZpDeJ4XNd7vWVrqS2ezX4vlMoZKpTK1SgWoTAY7LFv7XShIPi4vWz+trT0TXNuOHpfLh+P4ze+JBL+5sVHNHR+jvT09sMIwR0qFQlWtVuv2+fnLAJAgAURN0GKxqK739ydQFFXlC4VydHtblslk6r5gcPrx2JjkfHf3OMMwEAgEJr/4/RadTidpgpTNplZqNFvFUunCZ4aBOsdVXttsV/xe7zDHca/iiQSwu7vgdrv1myy72AQbf4YgCG82m9XZZPIDjuN3zmDY8O3BQbkURelAIAD0wsLutYEBQi6Xm0KRiMuzuupsOgoNb62vnztMJrH7ev3hitOZDIbDismpqXEAmHk+MfE2lUpdtM3N3QOAans4FEWJCYLghI+n7PaIPxRSlopFo1KhmN6Lx3O0w3Grdf93OEI0nLVarYQgiIqTpme+RaNPd1gWKuWy773D8QAAfjX683q9tQ7w1JqhAHAJAGoAEBOcAKC5dv8DGzovFGoNsHFsa38A9KkRKseVBrUAAAAASUVORK5CYII=',
    order: 142,
    base_experience: 77,
  },
  {
    id: 96,
    name: 'drowzee',
    weight: 324,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png',
    chain: [
      {
        species_name: 'drowzee',
      },
      {
        species_name: 'hypno',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB4UlEQVQ4T2NkIBMwIutbtYqBOZSBgYExjOHv//+hzAwMqxkaGxv+NzQ0/EM3H67x/38GRkZGhv/YHNDQ0MCErhmsEaZp92IJb3a2Fx9+MXnLaim+8Xv54uT78xcNPyZVn69lYGD4C3IMSDlID4pTl/QJZynJSpYrqzNyi8lpCX97/ZLhxJE/389c/69S3nX02apVocxhYatBBiA0/t/vwMLoeODP5lkW0U72J5Y8euD4Q1L+B8OvTxwcV6+y7XRM3Onx//9/RkZGRlQb/zcwMDE2MPyb38+hoCqpuJWP8ZUWq8ivv5wcSkw/PkswnjzzxTa+5ugRmK0oTv3/n4GJkZHh3+6l9uuVFZgCXr768P3tcy7mP1952W7c+1hfMf140/4GBxbHhgN/4BphJvVWR1ix/WI+ysv+n4GV9T/D7//cDN8+fmA4cuhK6bKzN3oaHBxYGg4gaYQFeUOuuYwgG8uDF4/+/37/6c8cdU3RANa/f2VOnHliveT4lWOhoaHMq1ev/ovsVHBQT8plYBdSkA04epj7zvQNN85ObmCI4mBWT0utFQpiYDj+joGBgYmBgeEfih/RI39mmjFr+qyzv5HEsccjVAHj/gYH5mlXRf+DnASKMlD4Q22Apyy8NuJL/wDQC8gPrfFWIAAAAABJRU5ErkJggg==',
    order: 145,
    base_experience: 66,
  },
  {
    id: 97,
    name: 'hypno',
    weight: 756,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png',
    chain: [
      {
        species_name: 'drowzee',
      },
      {
        species_name: 'hypno',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACDUlEQVQ4T2NkwAL+NzAwMdQzMKxeHcp47drq/w0NDP/QlTGiC/z/z8DIyMjwH1n8zBljVmPjs3+QxVE0wjSd26iedO8u30leIWmOrz/e/AnKOHIRZBCyoWgaQ5kZGVf/fXk15RI310Pdq+cu/Dx4iDc6IU3o3s374g9sfba+h2mGa/x/xpiV0eTsbwaGKMFnF98/kZTh4Lp//duvuXNepTi58S/6///pWpfo2yH//zMwMTIy/ANrXLWKgTksjOHv9qkMpiyi5ZPVVL+Zv3245M8nplKWO++Vbmtwbla9c3tpTkI1w1SYWkZQCDI2MPy7uC1IRkp63fkHzwuescuXyP9n+M///PPfP8+vbWdRFzr4/sOnXQpeMe8+NTQwMIFCmfH/fgYWRkeGP9f2ia5QVGAL51R6KnT5UMFJZU1T1Stnrj+buIVzCr8wn+e0plx7UPjAQpsR5tll/WKW3z+Jmbi4fdIS4HmU8eolw0dWJnGuJy9Ue22i9FoZGKZ9YWBgAHkNrBnsR+RgPrxC5uivn0KizvFBZttmbjvGw/VXwS72LD8DA8NvmDPhGkEG/P/PwKCtrcU6ofzPYS42ViObyKsCq/tVl335xsyeWH3DA+pEVBuRUgnThnkyppys7MwfNxmdDFut/b8haxVXw7RrIGeiAIwkhy3tYhPD0AiKJ5BCULyCvQAJCJS0C5IHAPyh2w8WJg4jAAAAAElFTkSuQmCC',
    order: 146,
    base_experience: 169,
  },
  {
    id: 98,
    name: 'krabby',
    weight: 65,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png',
    chain: [
      {
        species_name: 'krabby',
      },
      {
        species_name: 'kingler',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgElEQVQ4T2NkIBMwkqmPAUPj/1WhzCDDGMNW/wXRYP417f+MDQ3/kC1B0fj/PwMjIyPDf7CGhgYmhvqG/8h8ZM1wjSCFIIkXLR6RjJxC0uLFy3rABkyJt3vNyHhLLHvBC5gasItARAMDA1MDA8O/VQyC/Lqxqh9uf7+3xG/NmyQGBga205Xuh+X+fmMW7zqsD3UqSM9/iMaGBqaGhoZ/C9sqhUUf3L/Iwsn3QZvvzcvnd1/9vfPwlaq2sIjgjgcMaqWXjr2CWQJzKtiU//9XMa+fc261sqBcoCbTf4a3rJIMnxfNZLhtrn3Xq7hXlZGR8f////8ZQTSKjav6CnUZ/n21lBcRdJUUlw359O0bw81zV26zK8hws3550uFeuGgyzJ8443HFpBQLXjZm3oMfWa+asrGUPnp8e9NnPtODIC/BAwc5fv7/b2BiZESNs6xQB55pqw98wRmPSBKM/1etYjpw7RrjQQaGfyBbYAEIU0NUkvvPwMDIyABJGCRpxJaeARfeog/irpXPAAAAAElFTkSuQmCC',
    order: 147,
    base_experience: 65,
  },
  {
    id: 99,
    name: 'kingler',
    weight: 600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png',
    chain: [
      {
        species_name: 'krabby',
      },
      {
        species_name: 'kingler',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACVElEQVQ4T2NkIAD+MzAwrg4NZQpbvfovslJGfPr+/2dgZGRk+A9S09DQwNTQ0PAPph6ucdWqUGbRa68ZHRsO/AFJImlivNkRqKdesf4iho3/GxqYGJFMa2hgYKpncGBibDjw59P2hr5P1x8WnthzPydk24Gpq0JDmUHOZoRp+ryuROfRvVey2iWLdjIwMICdFGppyVnjrfzyz2sG3s/f/jIcu35XverIqVsgzWCnTmVg4LGoCXpy7fmnN7Fz96isi3UTY/j1VFJKU+//n29/Fm06el8nwESamfk/w1LzSRtjwJaBNK6PdzRWF+I/c/rurwbe+9t2idvq9DGyCbAyvLv05Auf0b+qA/fcpjkrc//6xb3MZvqWaLjGHf3ZRmzffx7bVDXHMGjhrFpD7t+R75/fYXgjbsPwavuEL0yMTMyCcsqcj/m5nIMKp+zb39DAwgiKJ0YGhv9HF5VO+/H7n7OqprYa26fPf39+/Mz4V1LtD/P3h2y3955heMvGyiAoIxjlljF5+ZmZaayM/1etYmYMC/t7cGZ+/90HL1ONDZSPaGkru3/8/oeBn/kPw917L56cufVwNsff/1osrMyPubjZN7jlzjgK9uPa9gRTRsb/Zaunb5i+/OHHI+trwry+fvz8QlRGRvnbr18nAmsX3j28oGT1r3///796/GJtZP3SlWCNDgwOLAcYIBGPCyxtT1Li5uORCMiedAykBp5yQClldVgoU+jq1f8ONDQwv9a6+l9UVJvx4EGGf/X1Df9hSQ/mNbxpFdl2UFrV0rrKGBYGSewAU88KCjs4gC8AAAAASUVORK5CYII=',
    order: 148,
    base_experience: 166,
  },
  {
    id: 100,
    name: 'voltorb',
    weight: 104,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png',
    chain: [
      {
        species_name: 'voltorb',
      },
      {
        species_name: 'electrode',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABCklEQVQ4T2NkIBMwkqmPAafGVaEMzCBDw1Yz/MVmOFaN/xsamBgbGv6BNPxvYGBibGAAs5EBThsXMzCovLY0Yig6fu4OQRthNj1O8CwX+/ak49/nBwwP/ylVaOy82InsCpBBcBtXMTAwhzEw/N3BwKDikGBzm52Dk4Hh0zuGt0/uMUS/dVHdeXX1nVWhocxhq1eD/YzQCBVcnJys4vD3/W0BeTkGBhU9hjtnbjGEcIqp3u0owq4RHBD//zMxMjL+u7R4cTkXE0vH4x9MDFf/s1bkpAR1/m/4z8TYwAgPJNzx2LdYheHTJwaGhmzCgQMLPZTogLqC6OgIXbUKnABWh4URnwCISYZkp1UAU5RqDxR9M1sAAAAASUVORK5CYII=',
    order: 149,
    base_experience: 66,
  },
  {
    id: 101,
    name: 'electrode',
    weight: 666,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png',
    chain: [
      {
        species_name: 'voltorb',
      },
      {
        species_name: 'electrode',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgElEQVQ4T2NkIBMwYtP3//9/xgMHDjCD5BwcHP4yMjL+R1eHoXHVqlXMYWFhf5EVYhND0YikgO/g/oOeIM32jvbbGRgYPqFrhmuESSyZt0rL2dNuu4SEuNzPnz8Zbt168GjLlmOeVVVJ15A1wzSCaLA/Tp06f1pfR8Pk5++fv96++cDAxcXHduPWwzP29oamUOeD1YI1wkyakFVr6luUdIqFl/vvr+8/mP4xMDKICAv+e3zrGfP2GfPMKmd3nIaphWhkCGUOY1j9t5aBwTSrr+MUr6PT359snEyMP74x/Pv6/d+tlTuYD07tMKtkYDgNU4vh1D0MDKd1pk03YTMx+vXrxw+GD3uOsF1vqj4TyMCA6VRkWxsY5LRMo9y2y/t7yX17/4Hh9bodjx5fuu2Z8eL8NZhtIPWo0cHAwBzGwACKQ74JDAyeHAwMDFUMDNvfgaIDIQcOI8wEgKYA4hq4gfB0gT3JMTAwHmBgYGZgcGBwYDjwlxEaVcipCatGYtI9AOwTqg/PFn2TAAAAAElFTkSuQmCC',
    order: 150,
    base_experience: 172,
  },
  {
    id: 102,
    name: 'exeggcute',
    weight: 25,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png',
    chain: [
      {
        species_name: 'exeggcute',
      },
      {
        species_name: 'exeggutor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABk0lEQVQ4T2NkIBMwkqmPAUNjQ0MDU709A1OjY8O/+lWhjAeuvWZ00Mr6zxAa+o+RkfE/zCIUjf///2dElkR3zf//DIyMjAxgzXCNMMFri/slv9+9aGncsGDL4qIA39dvbxsYKjqvdBD6f5sxb/JPmDokjftZGBkd/zzZv2iFNDd7+KuXr29+/f1FnZ2NnUFKTYfh4bXLyxQCiqJhrgJrhHEaGvazxGpfOsfExa0ro67M8PX5q/8/v775xc/Hz37l2OUPJiWd8gwMDJ/+MzAwomh8fWjFCn4h/vBXF84zCMpLMvxk5mVg4WT9+f3uHfZrG7bMdVyyPwVuI1Q32MOvtk86LaosZ/J4877Xf39+/fSbg0tMydyMl/nPN4Y9c1Z7uC7es3N/QwOLY0PDH7CNoChoaGj4dyjGVpJLUCj1+ZXrG33337rmwMAg3JDomsfPyfnLcNqmVgYGht/QAP2PFDj4owIaNSD1qNEBDqSGBiYGyWfMq/e8/xe6evU/hoYGkEImcLw1NPyFaUKJR1KTHtlpFQDuEq8P0Vq/4gAAAABJRU5ErkJggg==',
    order: 151,
    base_experience: 65,
  },
  {
    id: 103,
    name: 'exeggutor',
    weight: 1200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png',
    chain: [
      {
        species_name: 'exeggcute',
      },
      {
        species_name: 'exeggutor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACU0lEQVQ4T2NkQAWMDAwM/xv+NzAxNDYwMNQ3MDQwNvyDKgHLwZSDOCigoUGLraHh2i9kwdxJKuyT8+78RBaDa/z/n4GRkZHhf/400xhxeS6h51e/bOUV5VBiZPun2Bp9fBZIU2goA/Pq1Qx/QWyQRrATlJQE+d3SFVIk5LiVOYVYXX///MP488ufn0zMzMv/MTD+u3Xu3daVnVcvhq4KZV4dtvovI8N/BkYGRob/OnZSsj7xchVfWX4H/GVhFBIUYOZ48ubLT9Y/jP9lhQVe/vnOsPjlw++rZlWcvdzQwMDECCIaGhj+ZTXraDIr8oZqfGcP/PH9icFt/n+/TfikWD+9Z2C4z/rrCNdfhtnXz3/buWnilZcgVyIHDuvaTl9jcz31rSIqckJ37l7+JyXMxfTh7b/fPfuvZr8SvPqZcb/IrtU7r76Da/zf0ACy+t+qagZpBYPki+r6TsKf7l7+w/DjIfOXr78ZL+97ZhU279jx+npjrsbGs99ggQMO5dDQUObVq1f/ZWDgEVtepbSKV0DU/uX7fwxCnMy1gXV7WhoaHFgaGg78wRqP+/c7sDg6HvizoNt5MSMDS8zd+98Yrj/9Url64/mOtDRj1lmzzv7G0AiLR08GBnb3SuNrv3/xKrGz/Wf4/uPjpfL+C/roqQceODCnlpSUKIqyPrt35+alRZJiXG9l5VULj19jMp23ePGZVaGhzGFg70AiH9n2/w0NDXwsLCx6F5fVnFp9TYijq7Ug4OO3jwdbW3sf/v//n5GRkRGcXtHTKkpCRk6byJpA4gCR3/QTVMVJsQAAAABJRU5ErkJggg==',
    order: 152,
    base_experience: 186,
  },
  {
    id: 104,
    name: 'cubone',
    weight: 65,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png',
    chain: [
      {
        species_name: 'cubone',
      },
      {
        species_name: 'marowak',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABU0lEQVQ4T2NkIBMw4tCHLP4fmxoMjQ0NDUwNDQ3/CDkEq42bN2/m8vX1/cvAwPBz1apQ5rCw1SA2CkDXCOZPntyn4+MdsPTbt5/s927fyPUNDNz1//9/ZkZGRrgBYIX///9nYmRk/Hf48JE537//emrjaLuTjYHh6P49Bxnefv3TFBHiUb9//34WR0fHPzBrYRoZGRkZ/588eU7/188P+X9//NH+8YvR7OLJowws/39mFbe0T0f3O9ypMBMXT+upenrnRrAMz09VFzd33l37tu3Zd2JZ7IJtDC+QNSP7kfH///8MIJvbU+2WONrpRvOL6jPsO3BuY3bHjID//xuYGBkRoY0SOP///wc7uac8346ZhVOjsLXjUGVmqnj79NkHGRgYQGrhcYoRHTDNWEIfJSFgjcfQ0FBmbW1txqtXr/4PZWBgCFtNOB4JJRi4PK60StAAAPXjkA9X6u3iAAAAAElFTkSuQmCC',
    order: 154,
    base_experience: 64,
  },
  {
    id: 105,
    name: 'marowak',
    weight: 450,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png',
    chain: [
      {
        species_name: 'cubone',
      },
      {
        species_name: 'marowak',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgElEQVQ4T2NkIBMwwvStWrWKOTQ09D8jI+O/hoYGJpB4Q0PDP1zmwjXCFPz/D9LL+B/ER2ajG8AIkzxz5lQdJyeniLa2bl5obpvo6slVIENfrVrFwBwaCjYNxXaYjYwH9++fxsDC6fDg8vFHYqL8MpZuIUIf37978eTJo8PWNnZ5////Z0LWjOHUOGWG+NxF+ydrGZjx/vv3j+HQ0ROLvT1c4yBOZ2BkZGQAewMpcP4zh4YygJ106er17Xyc7B43rlz8f27nytMGqi9WcQrJ7nSMW3wFphnFRphzlq3bXir//42f4NujFnvOPmXhFGF49Y/lz9b0xu3pDAwMv0EWojsVFFgg9/zf3GSxzdnY3fPRu1cMFx7feXfn1qcrfEL/8/L6Tl1saGBgwtAI8sqqVavYnl/cOoPxzsVLWprs315y6KY/ePxjevXUJXNAcQyKX4zAwR7h/5kZGBj/QuVAev7j1Ahyjj2DAxOvpBqjSfoskL+whyq+JIstBRHpVExjASWzqBKusfZdAAAAAElFTkSuQmCC',
    order: 155,
    base_experience: 149,
  },
  {
    id: 106,
    name: 'hitmonlee',
    weight: 498,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png',
    chain: [
      {
        species_name: 'tyrogue',
      },
      {
        species_name: 'hitmonlee',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB1UlEQVQ4T2NkgIKGhgamhoaGfzA+IZoRpOD///+MjIyM/w+euiP76MFV9tgw/7sQ4f+MjY2NjNgMZPzPwMDIyMDwn4GBgenQmgWnfzNxKWVvOKhyY9HUtzBbV60KZQ4LW/0X2RWM+/c3sDg6NvxZNDOtwN1Ftf/QpvszQwunZYAUzU9Q4Lj2VUGge/WBF+hOZ1wVGsoctnr1397cFAsOsX+L+KQ5PsU8mmrWdDc0ODzEvoOdmUH64rW7NQFlE3qQbQb7ETlgZvRF1zH8+2fP9FrQWldPif0vIyvD68cPvgSW90sxMDB8hqkFawSBmWlprOmzZv1mYGBg66z3+2KpoM36/xfT97eff3PyCzAz3Hv4tCO1eVElzFaYRhD9v4TBjVu4gGvui48/9rvp6HfwcLEJ3Lj39MYb7h/trF//vivrXrnl/38GRkZGhv+Q6ICGbGWgmTAPv1JL9YIVmVNL0wqFJbj7lm+8qbfx0LbLGIGDJAC2FcafPDnJT1SILyYiekLYqlUNbAwMV/8iRwncj5BAYmBqaGAAp54F3amv/v7g2ptcOzESWRxmMIpG5BDeMLs37hcjv9fq27fTV3d2foSlLpwaCaVRghpBwR4augqUiLEmfAC7ScwPGkc/KwAAAABJRU5ErkJggg==',
    order: 159,
    base_experience: 159,
  },
  {
    id: 108,
    name: 'lickitung',
    weight: 655,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png',
    chain: [
      {
        species_name: 'lickitung',
      },
      {
        species_name: 'lickilicky',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABk0lEQVQ4T2NkwAH+/2dgXB0WyhS2evVfbEoYsQk2NDQwNTQ0/APJ/W9oYGKEspHVYmhE0iRUnOKo2Dtn/1lsmlE0wjTpMTCI9S3O38bMymq8d+el0Jb5u9asWhXKHBaGcDaKRpjklJY4f2cHyw3cHBwMC9Yf36ohNSsiLJvhC8jfjIwM/0FOhmsMDQ1lXg0KCE0D1cn+aod0xWVFXn1jYVLg+sR07ffnkISyJWv3NzSwODY0/EHRCDUEbFqnjdJJXVYVs8eSUp80P978tpNfpKx12ebFq0JDmWGhjObUVcxhYWF/u8uqGmSUDOq//P7OMOf0XaeTi5oONjQ0MMBCGt1GkARLQ0PDnyltNV6c7Lwtf/6x32f4dvp6ev3SGpgcLEqwBk5/efSk71+WLn33PYlJWka6srCp2Q85blFshEmsmrxK8fu/z9vj85MN5k6YK//52w+HgqrsmVCbQBahhioscKY2TOX5wfFX+fOPvMsNDQzg1ENMkoObCFIMcoWWlhYjKMDQNWNLq4yhoaFM4DjFAwCNeroPxKdC2gAAAABJRU5ErkJggg==',
    order: 162,
    base_experience: 77,
  },
  {
    id: 109,
    name: 'koffing',
    weight: 10,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png',
    chain: [
      {
        species_name: 'koffing',
      },
      {
        species_name: 'weezing',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACBUlEQVQ4T2NkIBMwYtP3//8qZoYDooyNBw/+a2ho+IdNDYbG////MzIyMv6HKf4/cyYrg5raf4aDB/8xIhmCovH//wYmRsaGf583zAj5/OSD/tajF6ekLl/+Em5IQwMTTDNc4//9+1kYHR3/HO2sCbEy0F3N8OUXw83L11ZKmigvZvv5P+rt1UddMnXNF/9DNSPbyPi6s4zn0tNPfX9ePUthfv/zp5quKquAlxUT7392hlenLt8Wr2zQY2Bg+PGfgQHsGUZGBgaQn5jOtjcelvp0z+L3/QN/PyvpsgpzKzGwqej9e/f41b9/N68zPP/6Tct+2drbYFtB7v+/KpSZMWz13+PpHjUWImzNL0UY/7J62zLxHv7D8OLu1788krwsj0+fuaC/aJURSDm6jYwfq71O8DExmT0U5/sp7ebIwvSCnfHv2z//Xhw8xfLx48eXb3580XFcvvlNQwMDE7JTWZ/VxlyRZOdSuyn6nUFIVojhzz8eBklJaYaDXQcWvfv+YYmoCM9d23nr7kG9B7abkZGR4f8EBgY5/oyUJo6fb2Sfz98wyaCnIYrv1y+PO1VtphEMDLfA3oKGCSI60CIeHHf//7MxTNjAxVAY+OFMWhqr8axZf6AByYCSAFaFhjKHrl4NCuH/Z2emsZikz/oN0t/Q0MCEnvSwplV4Svn/HyyPnARhcgB7NOUSTUAVkwAAAABJRU5ErkJggg==',
    order: 164,
    base_experience: 68,
  },
  {
    id: 110,
    name: 'weezing',
    weight: 95,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png',
    chain: [
      {
        species_name: 'koffing',
      },
      {
        species_name: 'weezing',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB+klEQVQ4T2NkQAP//zMwMjIy/EcXR+czIgv8/9/AxMjY8A+medWqUObQUO3/IDGcGv///8/IyMiI1SaQgQcOMDA5ONT/hakB2/i/oYGJsaHh37PLBZp8opKrvn/+fFhUtSXr99s2yxfPvnyV1W27BLMR5hqIxv+rmBkZw/5+eNpazi8l2PH29umdImrzPR5eKL7BJ8q+R1C6LefZ7VK3B3cvnbHy2PkOrBlh0n8mBoZGhqv7G3SvnpmVKcaiZfXm0x3BSwc3BJTNNyzmkVeKfH7tTK+U9sSS//8bWKA2IvyXxzDDOWKO0h7BD+8ZvopLMZzZcO2aR+WRl7zcQpZfv34pljOZOw0UaIywkPz0os+Xkemz64oqPj1dLWl7bv6bn9/dN+C9de/FmdRlqZZXdzDwaXswQJzJyPAfrvHtg6a1QjIsQRun3F7596duuLopL8ON1RwMN15c3lKzvssX5CWQTWFhq/+C2CCngjAoGpjuHg3y5BNVaDq088WVy/vE5J+u/7ql9CR/roQUj9y9SyvUDbxv3IJphvoRkVpeXM/3EdeYuJ2RkQFs8uvr2TN///z7efPJGZXp6Qy/UaIDpKChoYGpnqGBgbGBAZxKQAkijHE102qGMLABEDGEBShJDhanDIxh/xghzgcbwMCwmglZDOZHQukZqzwAfmXwPH9V/EIAAAAASUVORK5CYII=',
    order: 165,
    base_experience: 172,
  },
  {
    id: 111,
    name: 'rhyhorn',
    weight: 1150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png',
    chain: [
      {
        species_name: 'rhyhorn',
      },
      {
        species_name: 'rhydon',
      },
      {
        species_name: 'rhyperior',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACgUlEQVQ4T1WSa0gUURTHz50d92GtzZoSW4tmUm5ZS0n0IaEyFSIrDXSgBcE+KVJgmF+y2MuaSFhQQtHL1KwPzZJfeqCFbBYmJaKrBYa65ttNMV1tH7M7c2NmnWjPl3vP43cO594/gnUjBJB0RQiIdEZ8vB7DohJT8nJCKvofcDg4imVZQWnKFYGKdYDsK7WIEIIQQvIUDoOaxcArgHe65ikRqX6VWnvc71+mqlNqCh4ChGRYKlqbqrWIAJxISMzqkutyo7V8PPnEbFVGXvd4ym56Tb8xoQ7CCIb6eiyW3LdDHFekkkF3tzWZSUofMJgYZuLro6vvWuxHzUZz7oVrb3BxsfblkYLJxxs2zXfszWmyOZ2YzsrCAiIE0wjhMIch/nB+8RnTgdZmfOoBpmgoidusC2QeOpgm8mro//6juex+3nllDXmib/qGSQCh5MvnT22hETtriNdWTc14QrFajS451aj28X7x19JvimdeVJ5lTV0f6oMuGVwcv2mmkefjUHfce53XatUzNEyMesDrW4bE7QmCWkNUvV0u5+lLgwuMXl849m1gS9SrPqvovL4j1VgdEPgA0Yc0k4MzsDS/4hd1wdbcUrczKVHMnvvZ15ae09kuT3RiTGdhHG4obSlM2m90wMQfiDPHBNcWtJqO6pHpyt72Oym7suu9nkUYc9m3ZeTDrAzKH8txKsSywu2KxiZG5T9niGc07jHe3fNk8WJd7zCv18W+ChPSsnXf3TJCMPUPlNQm8QANmiu1q0xweCXzVutoD0DbnNT49XMwpBnAt/MkBCPKjDKCACIqUgwfc9J7yu8RlnVESy4alD2EsSxuCjCIGCICxxgomw2Ioum/nRga7izFe4EAAAAASUVORK5CYII=',
    order: 166,
    base_experience: 69,
  },
  {
    id: 112,
    name: 'rhydon',
    weight: 1200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png',
    chain: [
      {
        species_name: 'rhyhorn',
      },
      {
        species_name: 'rhydon',
      },
      {
        species_name: 'rhyperior',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB+klEQVQ4T2NkwA8YGRgY/mNTApLAAA0N/5m0tFYzhoWF/f3//z9jY2MjWF1DQ8M/mGIMjQ0NDUxICpgZGBj+whSDDGFkZAS7AEXj/v37WRwdHf9Mn75C59OnzzxiYmId3759mJKdHb9mzpy18ikpwQ+hev5jderSpft2v3373QVk+JMnL16ysjL8FxBgqS8pSZjV0LCfpaHB8Q9UI8gAxv8FBf1FCgrisUpKMgrv338W4OLi+PPkyTuW9+//Mnz58n5OX19mKsj/DQ2M/xhXrVrFDAqEnTtPKr5///WelJQYw+fP7xgOHrz8T1BQkOnbt59/eXi4mJmYfn7fvn2B6r59+56CwoHx////TIyMjP/mz9/cJSUlXcrK+ufb0SO32T5/+cPCx8f479WrdwyystL/eHnZWU6fvhg4d27thoaGBha4H9ev37mVn1/U697tBwx3H3xm0NAQ/3n9+kN2Tk4uBl5ebgZGRkaGa9duRs6eXbECrBEWkosXb3T984d116GDx2/8/PX6cWholOvZszcZnj17X83O/gOk0ff163feq1f3vwNHCyzeli9frvDo0buq8vLs6jVr1sj/+cM59+jR642TJ5esQ0sh4NQEdipyxEIVwSMe5CwGBoZ/0EQBT4JwP0KTFjNUwT9YUkNOZsg2Y00ABBI+WBoA6Ybwl847msgAAAAASUVORK5CYII=',
    order: 167,
    base_experience: 170,
  },
  {
    id: 113,
    name: 'chansey',
    weight: 346,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png',
    chain: [
      {
        species_name: 'happiny',
      },
      {
        species_name: 'chansey',
      },
      {
        species_name: 'blissey',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACRklEQVQ4T2NkQAL///9nZGRk/N/Q0MAEEm5oaPiHLI/MZkTigNhgTTANM2fOZE1PT/+NTTOyRoaennqRkpLGNw0NDUobNx76e/78vocwV6BrBmtctWoVc1hY2N8Jk6f3cXEyG379/F2RkfH/MXl56VmBgaEnGBgYfkBd8h/kKpAeRpjTlkzKchOWMWzkElKw+PvvL8P3Hz8ZLl64xVBVNVGGgeHJU5iNMBcw/v/PwMjIyPBfgIFBYOmi0l2cwhqm375y/n7y6g3jl5+MLG9ev8ru6Gie1tfXp11UVHSDgYHhL8hCRpgJ////Z+7q6tooLSnq/f7Gvd9Pf/5nVtNRYXr54i1DZWWJ7IoVi10/fPjkkZGRHQ7WA3LC5Mn9AWJiUuufPn11m4PtzzcRzs/63KLK/z5+Zfj3/t1HlsuXr3Q5Olo8ZWHhmBgcHKbAwMDwEKyxo6ND/8OHLz4dHW+nbV2jNV1fRSD88oN/v+6/+M8qJ8PHeP36gz88PPwsHz9+eFNRUazGwMDwHh44IANmzp5bKyLA28Tz9wrDr99/GV59FWJQ1TL4ffr0Vabv3/8xv3v3qqKvr62zoaGBBWzj/v37WRwdHf9MmjR54du3P2I/PjuzWFWZz/LtV0FlaUU9plcvXzHcvn07b9686ZOhoQvxIwwsWrRI5+vXt18yMwsfMDDM53DxP66aFO5Q/uvXrx8XL27N7e9f/R0WfSgakeKKiZGRESWdhoauYl69OgwkBkkAyDaiJW7G0NBQplWrVkEUohkEAJ5kFKICK+IPAAAAAElFTkSuQmCC',
    order: 170,
    base_experience: 395,
  },
  {
    id: 114,
    name: 'tangela',
    weight: 350,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png',
    chain: [
      {
        species_name: 'tangela',
      },
      {
        species_name: 'tangrowth',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABuElEQVQ4T52SSyhEURjH/98dr2Im5NGURyZKKSlZCGUWFkqxcO9a2CjZKpKThWRpZ2E50ZkaRJFGI00yCkWJvPKIRuYhyWPGvTq3uYzXgrM5dc73+3+P/0f456HfOI1zk/gjRXn9KeYnkDjnkhIDhAApigpAixf4BHJZNsmcq0SkPa+ulj+EQshsbt4RgKe+PsG+shI14HeQMSYxxoQyHr3egZSioiGEw7jx+QZz29uHxDtjkBiDHqODmgYigjYOWBsnHcP5lVVtt1fXyMrJBoIhHO5uuf3TfWN1S/dzGoNEDKoOGmUsFWOkYczVC1vZSzDoT7SkWoCoGomsLyb5XKMT9uVwJ5dhUpx4NUoVt2g+5W5hwW0uKKwJZFmenw72pDxTWuLN9tZ5bnd3OYA7BkgMsYx6uR5PAtnt0cDUlJxpNvOX2wtE1ChSrSU4PT7an19ba+hxOC6NWXwMJ6YEwDbb1eWqsBWqyZYMOj47se5vuFs73JteMXXF6dR9jbdDL5e1tKSzmRlhfkAEVAOl/bXwN3kR0gCimJ9fF8Do9duyxENfM8Z7KwSEX8RlSLJTH8bvm/OXfX8D1xeuD+MC7nkAAAAASUVORK5CYII=',
    order: 172,
    base_experience: 87,
  },
  {
    id: 115,
    name: 'kangaskhan',
    weight: 800,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png',
    chain: [
      {
        species_name: 'kangaskhan',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABn0lEQVQ4T2NkIBMwEtAHkv+PTQ2GxoaG/0xXtRgYV4cy/GNgZPwfuuo/8+owxn/oBqBq/P+fEaQYyQYmBgYGkCYQQLEdrvH///+MjIyM/5OnblThEBAt/fv9o/aPP4wiP37+2L8iPyALYuN/RgYGiMEIG0NDmRlWr/4bO3nD8ptvP0Z8//SegV9QiEFZRIDh/KkTrZfmt9WEhq5iXr067C9cY0NDA1NDQ8O/xN55sg++MF1wF/guxPbr429Gfsn/HSfvs6myMTx6eu6w2f2Te1/CnAyzEeZ+lugZO7bI/Pvk/ufZzV8s3HxMh79xs/x9ee/mx0f3PG7sWPGAoaGBiaGh4R/cqcZpaaxnZ836HVjaFXrv9adVvArKDHy8PAzvPn5+xfbhTeKhSWXbMJwKcvMqBgbmMAaGv3MZGPTfKuqsnhaV3tf69qUtz6VLcv7HNtmuWrWKOSwM4j/UwIEKgEJ3sqoXW96d7T+vMjAIPbYNV/A4vPIceiLAmXLSZs5knZWe/htXysKlERxYDQwMTFqhoYxhq1fDnYjTqcSmeQBqbKYPcLO6tAAAAABJRU5ErkJggg==',
    order: 174,
    base_experience: 172,
  },
  {
    id: 116,
    name: 'horsea',
    weight: 80,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png',
    chain: [
      {
        species_name: 'horsea',
      },
      {
        species_name: 'seadra',
      },
      {
        species_name: 'kingdra',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACWUlEQVQ4T41SXUiTYRQ+77dvtk1nls2fPhoRhX8RKdWNSFbQRV154aCbZawaZZfVSiJORkIR4cVcbEnowLLvg7rxJlpYFwMXwfyZuk2aZU0WQ8t0bn4/e+MTFS2D3ovDy+E5zznPOQ+BdQ8RmcrKUSIIADxfRQEqCSEWZT1m9U82S/5PbkPh+967FbHkd/Z1YNh4vqkqUcbt29XfN/3Reu1h6k+y5UJKkSEEs6+8N27O62hbcGgKTlZzYp5hi1x36t5uAEgi1rOI7+QNo7rdF7V2u0dqbbVYincUvDAqxfJcPMXqDRnYamK6Gy45mzbrSCilQAih7Xj2Wemickabu02OZzSMUSeCNkfPxL/9uHK942kHAGgBQFJJSD8iewxR7n104bImm98Rjk2lKw4X6WtP7IGBN0kFZkTNzHxmIjk35eC4klqro/MqRWRWl1PYdas5IYMYyC/j4FOArT19jigZ0cxMDv4iQf/b4YMHSvNSKVlru+M2L3dUQ7fncUOuIr2MhkZ6rI69dbk6ozmzqIiJWJqJjMxq0j8XaIHBxES/fPU4nJ12nuc1y4U+n6/QHwodKooPtdfUc+X760wAaQOMD87A7OQ0XUzT7Oj4QkKiynF84o02NjZqiOoWRMyqBJ42DNAF6chwMHK/wVZRvCRJ5ZOjSzU7S7icgfBE8wOn24WILCLKK3ekRBAERqfTHY2GPmx3imzfZ8SMStbj7bLp9frq8ETkeUvLbf+KPPpPy1FVh+Uvn6p4urac1eOqosfGxtTxVWOrAMLzPGMymYjL5aKCIKwZ/jebqAQiqabpmAAAAABJRU5ErkJggg==',
    order: 176,
    base_experience: 59,
  },
  {
    id: 117,
    name: 'seadra',
    weight: 250,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png',
    chain: [
      {
        species_name: 'horsea',
      },
      {
        species_name: 'seadra',
      },
      {
        species_name: 'kingdra',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABCElEQVQ4T2NkIBMwkqmPAafG0FWrmFeFhv5jZGT8j81wgjauWrWKOSws7C+6Zpwag9rnm66rPHeJgWHyz4aG/0wNDYz/kDWjaISZ3l5Q4yDvEb3/F8P/81eune3oKYpdhc9GkCFg/5RO2bVXSUjIien/R4Yld77XHa73aW74/5+pgRFhK1YbD+zJtf3yW27t8fM/n7ga/jng4NlQBLURbjhcI9wfCZtVFwcyHRPi/STy6Oqx7c4Wv66omc4sw6OxgamhoeFfRf98hWdfOJsWXfmymWFlymokv8FtA4mhOPX///+MyPEG4jMwrGZiZCQiOkCK02edZbn1fMv/Aw0Nf3ClLIIJgOoaAVjLdA94/42EAAAAAElFTkSuQmCC',
    order: 177,
    base_experience: 154,
  },
  {
    id: 118,
    name: 'goldeen',
    weight: 150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png',
    chain: [
      {
        species_name: 'goldeen',
      },
      {
        species_name: 'seaking',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABu0lEQVQ4T2NkIBMwYuj7/5+xobGRsb6+4T8jI8P///8ZwGpAbGS1qBr//2dkYGSEK/j//z8jI5S/alUoc1jY6r8wzQiNUE2+afVcH94852+6Meuz4zWGL1oMDDyV/UG8sYXrnjc0NDA1NDT8A7sAZsKqVf+Zw8IY//ZvPtf26evXCL63p94evPo3dVIJa+ztW88vOHt0rfv///83mAugGv8zMjBAnNi76fRdMQE+pTNnr/79zcCwL9vzh+v3B2tuXb90Mz+27OqO//8bmBgZG/6BNTY0/GdqaGD8VzxjbYiwoOjKz49uMbx88frPRy5ZlnDdj0zSTCt2WYccdoe6DqQHZBMDQ2joKubVq8P+Jtf2d198/Pd/W8B1BVExmdDWxf+eCfx+mB9o+1zg9IUX+xr6L98DhTIohDGjg4GBYe+uwsC/bEbr9l9kZLh563H7uqmVVci2oQQOiIMI/jTW4oVxt3jZWBVunNi1ZcXEWt9Vq1Yxh4WFYYkOWPA2NDAxNDT8C0vOt/vDzG3/8Pmb6Wc3z3rDgBbHWJ0K8TsiIWDykeIRPemFhoYya2trMzbU1/9FTk2YKYfExA4As9rBD4lqwsUAAAAASUVORK5CYII=',
    order: 179,
    base_experience: 64,
  },
  {
    id: 119,
    name: 'seaking',
    weight: 390,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png',
    chain: [
      {
        species_name: 'goldeen',
      },
      {
        species_name: 'seaking',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABjUlEQVQ4T2NkIBMw4tP3//9/RkZGxv/Y1GDVCNLAwMAA0vQPygZxUAzA0NjQwMDU0MDwD2oLCwMDwx8Q+////0wgg2C2wzWiaWCau/EId6Ct1oGvnz8fkZWXzwdpWLVqFXNYWNhfEBus8f9/kEsY/s/uLw4SEtPSEJXWCGNm/v/Kiv+36xNeha97Hn0OS7TX2wZS29DQwNTQ0PAPrHH//v0sjo6Of07snJ+kzMczl+MvG8Or/9wMj6d0MgiFpfxRN9JkefCLfaO6unooAwPDb3CgwUxgYGDgvb1n3xVxFQW5Lz+//GR885z9Us/Ej7wsj58IJTep/pHTvvvqyYNUJze3oyAnM8KC/OKVG1PfX7gaJqKuysgtLi788/n9D5Ia2gKLth8My33PepAh0/0VNJDAUQQPnCO7jkg9M9H6emnRCgkZFk45BSvTVwJ/fntdPnFmcWpe6hP0OMWbAGBBDw0DUGjC4xIpOhqYQAq1tLQYRUVFGR0cHP6dPXuW2djY+A+21EOUjUQnOWLSPQDbVaQOcoUwOgAAAABJRU5ErkJggg==',
    order: 180,
    base_experience: 158,
  },
  {
    id: 120,
    name: 'staryu',
    weight: 345,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png',
    chain: [
      {
        species_name: 'staryu',
      },
      {
        species_name: 'starmie',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAByUlEQVQ4T2NkIBMw4tDH+P//f5AcIyMj49////8zg9SB2DD1uDTCzQMZwMjI+B/dAmSNIDZIAZjes32PHgcHt66No+XSUyfOFXNycrPp6qu347Tx5v2XDezMzPEvHj8Q+PH7LzMbG1uTgrx894+fPxkuXLgkHhTk/qqhoYEJbuPOnTu53d3dv97fvr3vCxdPYdfCpQyWqkq/jO0c/6tr67E/e/asQktLsRPkX5BfQYHAxMjI+O/AgXOWUtw/SgRPL3Zn/vyBa/Opa/9+37zILJncxyDnFsBw6expj+i48J379+9ncXR0/AO2ERYAN1ZNPiT8/qHtuf+qP1nvHWf9sHABE1t4zi/dknq2F8+fXTc319eC+PE/I0TjqlXMjGFhf/cEe000jk/Oe3bjHMOlfZsYZJ2ifzMpqrN+E5da/e/H16lubk4HkQMHFpoMu3YdWsUnLu7DcmDr7UcdRSzaBx5q/f7/n+Ha+TMbwyJDApCjBh44oJCyMrdzvHj06L3Sltr7E3YfltNh/J/w6NadYx9/Mp4pLEz8AIsqcGIgIcXBXYahcdWqVczXroX+b2gABfZ/hgMHDjC/fv36f2ho6D/01EOKjSiOAwBbaMeReyeswQAAAABJRU5ErkJggg==',
    order: 181,
    base_experience: 68,
  },
  {
    id: 121,
    name: 'starmie',
    weight: 800,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png',
    chain: [
      {
        species_name: 'staryu',
      },
      {
        species_name: 'starmie',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABaUlEQVQ4T2NkIBMw4tPX0NDA1NDQ8J+BgQGEUQCGxoYGBqZ6hgaG1VevMoatXv0Xl8EoGv//Z2BkZESYPqPGVZX117cXSV1Hv0AVwm2Ga4Rp2trjJf/zC/v3X5/PyH/7rbwradIBXQYGhicglzQ0MPyDuQCucX+DA4tjw4E/q0vdfITkmZfxyysy/Pr6nPf+rcdTWN+JLGt4uuPstdUMvzA0ggT+/29gYmRs+Ld9kdUBXTY3+5dfT31/8/s158WdbEvK1h+NhWoCWfYfbuOqVaHMYWGr/26r9rVglv11nOn9XYaPn9kY7rxk2Fgx91oAsiYQG+HHhgYmxoaGf/MLbasePfwgxyfJxKMtIxG9/8TrpPaN5+Y3hGqxNay+hsupqKG6usxh+qO3n/cVzz27usHBgaXhwIE/WP0IE5yZZsyaPuvsbxDfQUGB48CDBz8IJgAkBYz//zMwIMcrsma8SQ49QEjViDXVAQDN7pAPtWsx1wAAAABJRU5ErkJggg==',
    order: 182,
    base_experience: 182,
  },
  {
    id: 122,
    name: 'mr-mime',
    weight: 545,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png',
    chain: [
      {
        species_name: 'mime-jr',
      },
      {
        species_name: 'mr-mime',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABx0lEQVQ4T2NkIBMwousLDV3FvGpV6L/GRgbG+gaG/2Ghq5m0ta/9b2ho+IesFkMjLgc0NDQwIWvG0BgXOsVSSTvntCzDycanry5uePuVm/Pth5f/l2wsOgxyzerVYX9BhsM1NjTsZ2locPxjYd282EnLwElXiVN0/7k37/4xfxd/9OJmxK4DHSsZQkOZGVavRmhcFbqKOWx12N/pVYeTWJg/NcpIXZHh5nz278U7Hqb7D5X+sTMrPX/16Uli25zY3TBbwTb+Z/jPyMjA+J+BYa7U1EaWvfaKtzXYTv3/+1Vr7b/r38pZT5wVbJ20PKAGw6kIjecFJjXsP63JcEXle+vfP58zL/97z2/HtmqfzIxDR0syQ0NDmVcjOxVmUqz/9DxFCc5aJenzIr9/HmH48FmH4fID9d+M7JKsvCzfA6csz9qA4lSQc2GB05y+fPHdN5/9FMQf/7z6kPuTqICo8r3HdzI4mL6v3HBgwgdogP7HiI5g95bgtef2HHVQSlQ5cLL/io2Vpy8nw5/Lu491X3BwaGA5cKDhD0p0QCMeZNB/bIkAOWCwaWSAKAAlsXqGhgaG/6Ghq5lWrw79xwAOdQQgOsmhuwIAcmLVD0cCRTAAAAAASUVORK5CYII=',
    order: 184,
    base_experience: 161,
  },
  {
    id: 123,
    name: 'scyther',
    weight: 560,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png',
    chain: [
      {
        species_name: 'scyther',
      },
      {
        species_name: 'scizor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABvUlEQVQ4T2NkwA4YGRgY/uOQAwuDFGAFq1atYgZJTLt2jVH0qtb/1avD/iIrxKpx1aqrbGFh2r+QFTY0NDA1NDT8g4khawQ7L5SBgWeDT+nGNB2ZlS22Iju9t3x2+vv319OTs/J2NTT8Z2poYARrRrFx26RJ7F55eT8VgjPjz1alLnj69MUfvcl7GX0kOOdtWdySBtLw//9/RkZGxv9YnfqgqKyJ3dm+lvHjF4bjG9ZO488rlfj/9beKs7uVOQMDww+wZmRTli/fmif477cu94EjERJJYTwMt+79fnL47Ie/rhZcP7gFlyz0yclbzXDtF0wjPOiXL996kpuV0ZD9xs2DbmGBLl8OnWZYdPtWP1NndUcmA8MrDKfC3J3rqcL+MbFfJP/CuRU3nn8+8VJW4oWuALuja1GuD0gTcsjC/djQ0MDS0NDwJ7es00yNj3FVbk2ZBsg/E2o7rj/8+HtG/6TaiaC4DQuDxCcicEJDmRlWr/7LYJ+a6i4s4GUh8i+1cVbvGwuv3Lz7v/4yv9wzrZ+hoYGJARqXOFMOZnICxQAjPBli1Qj1C0jRfweHBhZR0av/V4NcgwRIsBHVDQAzu8QLtkFfjQAAAABJRU5ErkJggg==',
    order: 185,
    base_experience: 100,
  },
  {
    id: 124,
    name: 'jynx',
    weight: 406,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png',
    chain: [
      {
        species_name: 'smoochum',
      },
      {
        species_name: 'jynx',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAByklEQVQ4T2NkwAH+/2dgZGRk+I9LnhGHBEgcrKmhoYFJS+sqY1jY6r/IarFphGniZchl+MUwmeEnNsNx2ci6eU/XOqGPQjnWd1LezVZJ8XoaPGd1AwPDP5ghKBpXrWpgCwtr+BXepWc0ObLz7Lnz55dziXPZsP7gOGNpnxG0f/9+FkdHxz8gzXCNIL80NDSATGSdsia2x1TQLO8Tw2cGNSEFhusX3th5JOYd3r+/gcXRsQFFIzwwerYnLJDRkI+/eOLZXwUGLuZfPxhud9+cGPmog+Es1CJwoIFthDlh6/EFhdziIn27rm///O3du39svH94ZFjEmH/9/zC1xHdpTsP+BpYGNBvBft5yctlhvv/yE+06rHkyPSLm8/0SnyAi/43749c/b1qi5ldhcypY45yNzR77H9ZeCdNbeMzSyFX2w91/hmqGMhcm7s/79Obtf/vmkMnnG/43MDUwNvyDB86qVauYw8LC/i7aPnGrkZKTuACzSKmMiuT+mTN7RATVhdd+fPNzdmpIxhKYOtR4bGBg6hPvCCnKrFgFSzUNDQ2gwIAkvf8MjAzQZIgrATD8//+fhZGRERz02NIthkaoHxC2QJIKPLpgKQcAgQG/D8lhzmAAAAAASUVORK5CYII=',
    order: 189,
    base_experience: 159,
  },
  {
    id: 125,
    name: 'electabuzz',
    weight: 300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png',
    chain: [
      {
        species_name: 'elekid',
      },
      {
        species_name: 'electabuzz',
      },
      {
        species_name: 'electivire',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACD0lEQVQ4T2NkwAL+MzAwNjY0MIKkGhoa/mFTA5ZEBg0NDUzIiv+vWsXMGBb2l4GBAaT2P0wtisb///8zMjIygiW/3O+SeH/z+S9Zj/53////Z2JkZESxGa5x//4GFkfHhj/PH27T+vZo49LP799Jq5kFMf3+/iGaXzFz56q+UM6wotXf0Wz8z8jAALHp6YWSeR9eWiee2CDxzy3tIZMI75brripcczUcZTzn7K9zgWpkZAwNXcW8enXY30yP6tA9O35Kbto5xfPt1XqPz1ekf/9TusqsoH2M4fq7gkfr595sW3qsajbMO3CNjgwxfq7lbpMtzT8y89xpl+b4pfrv79vX/34aq7Lc/e2UF5WYPxnmHZCtsCAHh+Sz//+5Di5fUcN1eHIh/zlJjsc6X//y8v9g/rjmQGj8I4Y1q0JDmcNWrwaFMEQjCPxv2M/C2OD45xKDUZlMmHnn+x9/f7+5+ouBnZGR+TnH9x8ff90Mibh1fnsDAwNTAwPDP7DG/wwNTIwMDf/2aHlXmchKtfKr8TG8+/KH4d2ZTwwq3P8Ynv5jZ7jw6fVMnxvrM2BqYTaCI3ejuqsU2182TyU+VvsvTIwvzn9leG7EyqT26OfPvQF//+5iuLP9EyhVMTIwgKIB6lSoALbkhSQGTz2oKYeBgfGAgwOzg6goOE4PvH7NCGKDaMcDB0CBgj3JEbANRRoAT+PqEFC+dxAAAAAASUVORK5CYII=',
    order: 191,
    base_experience: 172,
  },
  {
    id: 126,
    name: 'magmar',
    weight: 445,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png',
    chain: [
      {
        species_name: 'magby',
      },
      {
        species_name: 'magmar',
      },
      {
        species_name: 'magmortar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACS0lEQVQ4T2NkQAL79zuwHDzo8K+hoeFfQwMDU30Dw39GBob/IHGHgwf+MTYw/IMpZ0TWCGOfmWnMapJ+9je63P//DIyMjAz/QeIoGo9tS2n6w8C4185r9sETG8y1GP9de2ke9PntwU3JHYz/Xy+z8990qaGhgQnkIkaQMxwdD/w5u1PHR1yQb/PJC9+6nty9cN7UlNX6ym3FfQ9f858JcmG79+71s4Ou8fdd/v9vYGJkbPjHuGpVKHNY2Oq/q+bZObH9+bL32P5z2e4hKWFCAu/s/39ft/vYGbMcMbGfF+/dfNRXMfF9dUMDA0tDA8MfkFNBGOzuub1mR//9/KivquPJIszLyv7r63WGrdsPXePkl2N89+xKUPsChhugQGtoYPgH9iPM00un6QruOfzN0FTj5zyhH2byTOJfGD5+OdqRWvO1EhZQKBpBgqtWMTCHhTH8ZWBgYNmx1OHRjhPMEq4mnxjv3LyxJL/tc2xZkoQjF/vPtw3T318CaYaHakODA0tDw4E/XRUKHhoq7Ns5mLkZuDm/Mpy+wr783IUXkyUkGGu+fPyXP2316zsoGmE2bplvvOrW7Z8GQuxXZj54KR6hosat/u7tvcl5zQzVIJehOLWh4T9TQwPjv8nTFwcrCVzP/fm2rTUoh2E3AwMD284loQf5xKxeW7rZRjAwmHz7//8/IyMjIyhFIUBamjHrrFmQFHN1lRabdti1X1oN/9kimRdL/90b97jhAMMfvEkOFrewVIItWWJLq/B4hUTVf8bGxkZGUDJDNgAA3jAJIhLwoYMAAAAASUVORK5CYII=',
    order: 194,
    base_experience: 173,
  },
  {
    id: 127,
    name: 'pinsir',
    weight: 550,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png',
    chain: [
      {
        species_name: 'pinsir',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACL0lEQVQ4T2NkwAIaGhiY6usZ/jc2MjA2NDD8w6aGEVmwoaGBCcRvaGiAKwaJ2TMwMDk2NPxBVouiESbR2u8uWV34/9Pi9s+SsZXH7xC0MW/3KrlJrgwvbu1q7f7DyektIPR/Q8T06qkZBk/d3ny7tiAvb/JPmCGMq0JDmcNWr/47PydNV0pY8vDtTz8yvN4d6lU0kZI68WD7jAeMRc+0fn9t0p94SYKBYe/LVatCmcPCVv9l/M/AwMjIwPCfwZiB9RiT0dEHn/7/EE8PkxB/8V717sqNX1gFuXjeXLjfEvvf/DLDK+b3jOLbdv//38AE9uN+BwcWxwMH/nQzMOjoxOjsk/dU57s37ymbfCYf48O+JwyBx74Z/tqiuPjfj78HmUMO5fw/Y8wKDxyYkxmyQnkeKzy4KPOPUenKR1aG84f+vow7elX7gYlyNYMo0xaF7ef2/W9ggNgIAjC3nztXqy/NeOOkEONN9j9MBgxf//949ejOpZM/vvOesYo53QR2JmPDPyQbGZjDVjP8PVUuZvWcUXDbJ+Y/i+XVWN0Zfv1Q/ffv5xIOWblsC6+Tn/7/Z2BkZGT4D9MIov+D/dvQuOL/kpOWTne2yVcx6LtH22rvOPpMwjrtbt+xM2lprCazZv0GqcNIAGnLlokckXz/45pj9pdjfaGcL34bxb/9+fF0al3H2f///zMyMoIiAotGmJ9BSQ056SFrwqoRpAAsATGZcX9DA/NBBoZ/yIaA5AHR1/cTp/XbyQAAAABJRU5ErkJggg==',
    order: 196,
    base_experience: 175,
  },
  {
    id: 128,
    name: 'tauros',
    weight: 884,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png',
    chain: [
      {
        species_name: 'tauros',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACFklEQVQ4T2NkQAMNDQ1M9fX1DIyMjP/+///PuHr1aqawsLC/6OoYkQVAChkZGf+DxP7//8/MyMgI1vD//38mkEHIauEaYZoOb1kqyMTBXHPm+LEZLh5uCV+/fnti5hA2fdWqVczINiNrBNtw/sTGje/ffjB08o6Xu3lpVzY3J+eU+QvXatW2TLiOrBms8f9/kJcYQE7kunhs8+u7t+8d/3hnT6W8aXCKmrpS2tTJ8wLbpyzYsL+hgcWxoeEPSA9YI0jgu5kQs5dX3s+dq6ZP4+Viy/zz9x8DLwcLw417z85FZlbbMDAwfIeqB4cBSuC0VGfLq4qynmIXUhT78O3fXzGW1/9//WNifvTwUXte66Lq/fv3szg6OkJsBLmb5fen1m/vHv8/f+IAn5qGuqOigoLmt+8/fjP8+8188fJNJlFZ1fuy2ja2vr6+T2GByLh58zKRj8+eN3z9+Pbu9Us7V+joWRcIcbKV/f77j+HDp28MJ85cyrJx8fdj4eScG5+at2bVqlDmsLDVf1GcOrOvXFeUk+XSjl2Hn7KzML51d7PRe/j42czspvkZ0PiExzNY46pVq9jCwsJ+TZ/UZ/br86eKN2+eTmzun31uQlPlRTZOrmdZpbWgwIGFCUbggAwBC8LAzosXufm/czGb71j6hbGhAXvKgSleFRrKfE1b+39DQwPIEBSDsCY59EQM8xPYfdD0i6wGAGGd8w9S422SAAAAAElFTkSuQmCC',
    order: 198,
    base_experience: 172,
  },
  {
    id: 129,
    name: 'magikarp',
    weight: 100,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png',
    chain: [
      {
        species_name: 'magikarp',
      },
      {
        species_name: 'gyarados',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACBElEQVQ4T2NkIBI0NDQwNTQ0/IMpZySkLzQ0lHn16tUgDf8ZGBhA6kE0mIEBVoWGMotqazO+ZmBgCmto+AVSkJlZoz59estNmGYUjSDnaGldZQwLW/0XZpphXLels/BH7v///jteu3Vrwvbtq1+D1GG1cVJ5uj4b4/dEOZ4Hv198V+BI2vLnFMPFZdctdFTlTly5vQ7FqQ0NCRwPPuhLmLJtUeThlNvJLqDEysf0nkGG89J/Do6/B09d+/axfuGt09KiXMedglIPgGyEeZilsKR5eaDep5CfHz8xbL7G90ua+RmjkcInFgsNFsYXbz8yLD3EkPuU3Vb+w6bGOrBT//9nYGRkBIcW95EZ0ddffWSS3bj76G9BIUUmX9O/zHxcf/+9ePuZ6c5L9rjCB/FbGLZmvYf7saHBgaWh4cCfjkTlkpef2LsfvuVgcNZjYlAU//9u9YHbz9WlRZ7ycf7YkjX92eSZacasSBoZmBoaGP61ZZsJs/7+eWPl4e/n0z1Y3v/+y8qVNenptTyfL1N//FOeNmubVhADw+pf6KEK9m+ym7LO3F13b2f5GkT+//dNcfrWW/Xg6FG10/T8/+ze9jt3fmKLDnjq8Lez0xUUYnq8YMOBD9AUBI9frPHY0MDAdPVqKOPq1ZCE0MDQwNTA0PAPRuNMcrBU08DAwNQASZvg9IkMAC240sQVZ3pRAAAAAElFTkSuQmCC',
    order: 199,
    base_experience: 40,
  },
  {
    id: 130,
    name: 'gyarados',
    weight: 2350,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
    chain: [
      {
        species_name: 'magikarp',
      },
      {
        species_name: 'gyarados',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABuklEQVQ4T2NkwAL+///PyMjI+B+bHEyMEV2yoaGBqaGh4d//hgYmRiQaXR2GRoiCUE4GhtXfYZqx2QzXCHPejhVVRkoq3E3Hbt7rSoiee2h/fpEPQ4DvDkdHxz/IBsA17t/vwOLoeODP4U35Pjaqbzcf3/Rt67HydVNttu9cy61noq4rLfz4////TIyMjP9ABiBsbGhgYWxo+PO4KiRFVERm9ovzZ/8/V7RklI/LYGAUFouXFORZ9P//fxZGRkawzWCN//8zMDIyMvwvKyvjrRN4cI3NJknmxqmTv1m9IlmfHTnKwCojc8fOy9WIgYHh838GBkZGBob/YI2rQkOZw1av/rt9WrM6x70HV3VFPzH//Pzu7wulZObTr19k95QXHcjJz39bMHHiSxSNYFuhJq2piVnGceauHr+zkurXd2/ZTn3ntKqbsP44NGBAFoHjFyNU39+cpL/s8J+vjsqXWz58/qWzfjNbdvfs+QdXrQplDgtb/RcjAcCi4+r+qTwfPr8I+fP39zP7wI5dyGGANTpggqtWNbC9v/qMRUGZj9EttvtbYyMjY0MDAzgK8GrElz6J0QjzO86EDgCrusAP8CoJ4gAAAABJRU5ErkJggg==',
    order: 200,
    base_experience: 189,
  },
  {
    id: 131,
    name: 'lapras',
    weight: 2200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png',
    chain: [
      {
        species_name: 'lapras',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACnklEQVQ4T2NkQAP///9nbjxwgLHB0fEPSKqh4T9TQwPjP3R1jOgCcL7nJFGG7e8+MjA0/AKJqTn4iiQFhjlV5MeuZmBg+A/W+P//fyZGRsZ/Z85csHn//oPmEiZpzdfvmJNk/39/c+/5U0+XP6+EeWUVDkuJirDs2r5da1pX4XWwxlWrVjGHhYX9PbZvk72ArNmBTe/YGPi/P/nP+e8744O799Y3pEYGzVpzcu6DF6+TPj64YzG1p+AkWOPWrVslRMQkMm7cf274n1vSY/k3EUbHF6tZtXhfMRx4IXqR6cdLN3tjXdb2Tfdn8v77vmzn3M5ljDBnnjhzZpa0jF5q2b77v5f/+cfa8HDJBSu5D1qn3kp+NDOyOcjDJuix8dwdniP3rjQf7auvY2xoaGBpaGj4w6DqrdRcU3jztoAqy+4H9//xvX6xtE71k++7r88FpNV8Gd7947569c1zbY5bu5vaG1rroaEaqqLZ6pNz/RtjvjEX5/+zP37/W+Fkymwg+Ibh9oWlDEc/Gv5lkNZglmL7wnB72yqjyTPmnme0qdgiqMb9Zt7l34wB/569+u9ha8fQ+ukX40ZNnif8DO9YPt9fxPPkvw7P129f3t6886xu9pTZ0xgYGBjBNm7Ze6Hj+uNn5T/e3mb4LyDBsPjJz9+3z58u6/F0W/L7xgw+Dcn3fP8ZXz4LKr37iuH/f0YGRkZoPK4KZZ742try2dVziy1vbVb4rO5+Pe6f6SyG6cVTGRgYfsMSBTw8QFbCk1TyMSFJnlNtOwTupb9k/7LGTSh0XcyfH39/TgvcoB3G8Efraihj2OrVf2GGMMKsVm/ZaqLN/EPAXfS04HfW/yeXMQR9lf30wHZt7vQtDAwHwOkWGUBDFeRkxv840y0WCQD2IjQfd/vlfgAAAABJRU5ErkJggg==',
    order: 202,
    base_experience: 187,
  },
  {
    id: 132,
    name: 'ditto',
    weight: 40,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
    chain: [
      {
        species_name: 'ditto',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACMUlEQVQ4T2NkQAWMDP//M4SuZmACCa8OY/zHwMDwH00NmMuIJAhiY1H0n5GBgRFDHKYRrElLi4GHJ2jlDGZugYsCrP+Vtm9b3cGwb+5DhoYGJoaGBpDtcADW6NCwn+VAg+MfhbI18dZWdgv+fP3McPn0HgaB51d1j62cdCU0NJR59erVf3Fq1G/ZNU9FUiLR/Psxhn0XH1TtmN3RXj9zJldjevo3dH9CnApzinOlbaPZy0wzQ7nICUdYAnZOqtkI07Bq1SrmsLAwuK3wwFm1qoEtLKzh17192WEnn8gsf/RKcI0sz2/Wn0zsW26cubu2c1bnR2TNcI3//zcwMTI2/Du7uXDbkZeanp++cvx30RFh/M/IwnDv/qMdj16+KqyqqroB8y9Y4///DIyMjOCoEH5+burV1Re4xfMOvvu31JrtPxcL2y92Th7OC+dOt1R199dCnc4I1tjQ0MDS0NDwRz+uUPpwjfmd+++42fVXMP4O4vvKZMD17t/j99+ZX/5ifPv0598uK+a9sydP3v6JERYwusE5GrxmPhunWH1QM1RhZ9h5R4Jh7wtuhtcsAgznr11lcPh39Ssb47/T/16cz+ydsvwGKIkxMjAy/mfwqZdL1ufw0WG/cVFPjV+Nj+2t5su33++8YbExu/yC3eLM/TcrD86qb4Z47T/EqQwM2JMVRhpt+M/0v54RpAukAQb+MzY0HGDW0nr9X1T0GqMDAwPDAQYGhtevtf6D4w/mMqhyAOdW9A5BoroaAAAAAElFTkSuQmCC',
    order: 203,
    base_experience: 101,
  },
  {
    id: 133,
    name: 'eevee',
    weight: 65,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    chain: [
      {
        species_name: 'eevee',
      },
      {
        species_name: 'vaporeon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPklEQVQ4T2NkIBMwkqmPAZdGxlWhq5iuaV/739DQ8A+b4Rga/zP8B4sxMjD+B9H/G/4zMTYwYmhG0QjSBNOwomab8oW3S951TF/2Hq+NDQ3/mRoaGP/taD0kyflXYvGfb4zWjKy/fz58/Dw1cYHzapg8zBC4jQ0NDUxg/4gzcO9LuPeE6T+LACc7F8P7b2/fevSqyzAwMPyAqwF7BQr2N+xncWxw/DMpeH2muYbNNAZmkBcZGb58+chw4MKO1OZ9OXMaHPazNBxw/AMJAyhYFbqKOWx12N9G72mhfKz8qUIC4vp///799uHTuxvffn1eUrM9bSlMDYpGcAj+/8/IyAgJTQYGBhEGBobfDAwMH8FySAGHoREkAPKH1lUtRpDtIP6q0P/M17QbMeITZ8ppYGhgAhvEQGQCIDYJkp1WAcu/hA8hEYfpAAAAAElFTkSuQmCC',
    order: 204,
    base_experience: 65,
  },
  {
    id: 134,
    name: 'vaporeon',
    weight: 290,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png',
    chain: [
      {
        species_name: 'eevee',
      },
      {
        species_name: 'vaporeon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABeklEQVQ4T2NkIBMw4tAHEv8PkvvPwMDICGUjq8WlEazGwYGB5cABhj/YDEfRGBoayrx69eq/vbGOef9Zf50rmXf0yJmZaSJbnt/60NBwAMUAFI0NDQ1MDQ0N/xKNtde9+/ZvmqutkNujGzdZuw69Kdzf4MDiiKQZrvH///+MjIyM/5P8kniTHF/v//Pnl8LKTbfuuEWGbOFmZ9zhltx15v//BiZGxoZ/IKfDNTY0OLCAnFMd6mDjbfb/8I/fHAxP3gvPMLHSynj/7fti6+jWuP37G1gcHRvATkbYuL+BhdGx4c+1Hd21gtxMTc+ff/r68vUX7ncnbjK852LZlzNzg/P/hgYmxgY0G2HOOLikVldKVvTE5xdvuY5vO81w5eGXC+9efslcef3cCVjgodgItR0cd7EMDH0GkSq23z7wbajdfq4VJNbQwMDU0MAA9h+6RrAAcgDAFCHbhFMjRDMDIyMjw/8GBweWhgMH/sJSEdEpB18yxpvk8GkEAOTqpQ8IYVtVAAAAAElFTkSuQmCC',
    order: 205,
    base_experience: 184,
  },

  {
    id: 137,
    name: 'porygon',
    weight: 365,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png',
    chain: [
      {
        species_name: 'porygon',
      },
      {
        species_name: 'porygon2',
      },
      {
        species_name: 'porygon-z',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABy0lEQVQ4T2NkIBMw4tDHuGrVKqbQ0NB/IHnGxkZGhoaG/wwMDCAMBrg04nIHSD1YM4bG3FxP9smTt//cu3er3acXl9Mf/DLPLkws4q+osPjU0TH9PVTPf7jG////MzIyMoJM41u9pG0OM5ds6Juvvxg+v3nxTEX0/T7/mDWpDAwPfmBoBFm/f38Di6Njw5/Tm4umHOWJzC54zv1pl8hRPnX2ywny9pMWbts2id3LK+8nhlNXrVrFFhYW9mvPylkuf+XMdj/7zczA/PTqja17jya+sY25vTfe/C3D//+MDIyMCKc2NDQwNTQ0gEJRzGHGlqmR5gYhzA+v/Lj44Hkdo41P8KfLZ3IXJHqeDl21inl1WNhfiB8bGpgYwJrMtZI2TN/LLq8kcermrb9nz5z6Yiwpdk9BSUVpbaCRFAMDwzcUPzo0NLAcaGj4o5rWkGYflTjz2dNHDJ9fv2Zg+Pju/beeOrU/hY11zJ/frz7XX3Y4NHQV8+rVMBsh0fKf4T8Do1nfsmYeXgEHFlbWPS+uXbp3qbt4EVKcY00A8MhFif3//xlDV69mAvkLWRwtAfxnDF21mml1aOg/h8YDzAwMBxlAXsCWjEhNcnAzAI7LvQ+rnPv9AAAAAElFTkSuQmCC',
    order: 213,
    base_experience: 79,
  },
  {
    id: 138,
    name: 'omanyte',
    weight: 75,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png',
    chain: [
      {
        species_name: 'omanyte',
      },
      {
        species_name: 'omastar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABkUlEQVQ4T2NkIBMwouv7/5+BsbGRgbGhgeEfiM3IyPAfm9koGpEVNjSEsjU0rP4F1QRSh2IAXCNM06o+J+m377/aZjafXPH//0zWXbuOsLm7L/6Kbjtc45mZxqwm6Wd/L+8xKxQUYAm6cZdziYg0T/zGs3v9V8//8hpkM7JmJBtDmRkZV/+9fTJ1oZLE77j5C54z7Nz3oz4xg4+Lh41B7MX9iz1hJY+u/W9gYGJsYPiH4dSzm712svy95fb4d8kXTl6B5/aqi1SZuRQZNmy+XRWYtqt91apQ5rCw1X8RTj0zk9XEJP338qVL6+1srRreff799+GltcweRnsZ7jxmfa5R9t6Z4dyJ6w0NDUwNDQ3INv5nYmRk/Nc3Y7mJsSLzMsafz5WWz85fZmFrbKatIvDMJGivE3K0oETH/v0NLI6ODX/mtTLEKCoq1Tx+JlO1fsv1b5H+qlphhcf6sAYOzLT///+DIp1h+vQUg4wM90uMjGF/CSYAbAqQbEFJBBhJDmFzAxMjY8M/XEkZp0ZCaR8A4KmuD9ZSz64AAAAASUVORK5CYII=',
    order: 216,
    base_experience: 71,
  },
  {
    id: 139,
    name: 'omastar',
    weight: 350,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png',
    chain: [
      {
        species_name: 'omanyte',
      },
      {
        species_name: 'omastar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB8UlEQVQ4T2NkIBMwIutrYGBgamBg+AcT+8/AwMjIwPAfxP///z8jIyMjmA0CyBpB7P8gBQyrw5hWh61mCGNg+Pv/fwMTWCFjw7///xkYGRkhBsE0gjW12ZipVR05dQtm6v4CBwHHCQc+gPgN0eZ8DUtPfoJpBmtcxRDKHMaw+u9aBtMmzip1NoEggwVvcubavH3LYCPV5FjLzcD0V0xWsuDDlx8LzTyar/5vaGACa9zf4MDi2HDgz2oGLU/vB0Xbbpy88mFb+EZOnal+873DjYIZ/zNwf/v6k/3g4WsuvrETDvxftYoZYuOqUOawsNV/jyyqyBD9+GH6+xPPGJg81N8wsP79aGyro/zr73+Gxw9f/lCzrVJnYGB41ACzERZiD8/0nOS5+szs8vHHP3j8VDnkrjxiePf2w///LvqMN6892RyQv9AfFBbgsIIE9SpmRsawv9ePtjdo6CjWP7n9lGHf1lP/Te9+/PeHieHGSQPB3cwPX01O6t97b1VoKHPY6tV/UUIVZMjG9NAdfBx/Db5eePXw+U3Gs3KinEzul3dlgEO2oYGpoaEBHM/weIRFdjMDj5OeqISCnL/448lLPt01NOP8n3vo1H2YTdgSAMjx8JSCnKKwiaMkOVichjZo/29kaGAAIbATkZIhVhtJSe8ABwrR6Ukoo18AAAAASUVORK5CYII=',
    order: 217,
    base_experience: 173,
  },
  {
    id: 140,
    name: 'kabuto',
    weight: 115,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png',
    chain: [
      {
        species_name: 'kabuto',
      },
      {
        species_name: 'kabutops',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABVUlEQVQ4T2NkIBMwkqmPAUPjfwYGRob/DYwMDPX/GRobGeEKGhr+IVuCrhHE/4/VFQ0NTAxImlE0/v/fwMTI2PDv6Z5NdZzfv0Sx+0ZFc0/f+8Lr9SOhbXWJlxmQNMM1/l+1ipkxLOzv+eY8VVVjs1vcelYMRyt7FtnYBDN5P769fmtLxjqHhv0sBxoc/4BcBNe46v9/5jBGxr9lm062+ApxVTPt2PpD5uX9X9uFNZ9kdBSYMDAwfGdg+M/IwMAI9grCqVBnuExc3beHW7hw8qkTv1zlhNk2PXo5q2xWXfqq0FXMYavD/sL8j+bH/4yMjIz/w60SE92qcuYt5BFmOLTv4M1JTfH6eQwMPxn+/2dkYES3EWwUwinas7ctZbh2/R3/iiU9x56ffwh1HTzEsSUAbFGCIYYr5TD+//+fwbHxAPOBq9P+M6xeDfcbVj+SkvzITqsAc2WDD8TBNfMAAAAASUVORK5CYII=',
    order: 218,
    base_experience: 71,
  },
  {
    id: 141,
    name: 'kabutops',
    weight: 405,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png',
    chain: [
      {
        species_name: 'kabuto',
      },
      {
        species_name: 'kabutops',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABTklEQVQ4T2NkIBMwkqmPAafG/6tWMZ9Ves+0Zcvy/w0NB/6gW4BV4////xkZGRn/43MNhsb/DQ1MjA0N/46s7bXgF+Jyv333+smglEk78Nr4//8qZkbGsL9X9i2xFpFkPPLlyxOG3duuMhw5eS966bYjyxocHFgaDkCcjWLj///7WRgZHf88PrdgsrgsQ87Orbs/PLjFJHD3yZuFExZtT2hoaGBpaGhA1Ri66j/z6jDGv7YLrgTHsV6cK8N8hefeSzGGm0+/MfM8qPZoW8Wwc1VoKHPY6tV/UWwMXbWKeXVY2F+jilUqKmqat78wMTP8fPOK4cf54zuOLq30ZPj/n5EBKcCwhqp9y2ZfRn4e/qt3b7C8vnBoC8OB5W8YGP4zMjAgQprIBICqCSNwYEHu0LCfhcGegYHhIAPDAYaD/xgaGv4RlQCISYZEOhXTKAB0H4MPvfiGGwAAAABJRU5ErkJggg==',
    order: 219,
    base_experience: 173,
  },
  {
    id: 142,
    name: 'aerodactyl',
    weight: 590,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png',
    chain: [
      {
        species_name: 'aerodactyl',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABtElEQVQ4T2NkIBMw4tL3/z8D4+rVoUyhoav+MTIy/kdXh1XjqlWrmMPCwv7CFP9vaGBibGj4h6wZQ+OqVaHMYWGr/zowMPBkTs/Rf/buw73C6iXPYeIwzSga9+/fz+Lo6Pjn2ObJGkysP5dzcL8zeP/6617HoInuDAwMf0HOZ2RkADsbrrGhoYGpAeqcx+fXHWTieGX35u3dH89v/ea4fONha2nX+pr9DQ0sjg0NfxAa//9nZAAFQMNRsWSOp6aljm/n/2d4Ivr88eef5459YX/z7d+hjhkL7JENR3GqfsexOuMfV7ySTO8Yf/svxMz46f6/dccEmN8KaT/4LGJptj1P9TVMM0gjCP9PmH+f48Ht8wHskuKFPtK/zfg+X2V4yGX658izbyzsLx6d+ienV7c102AnA9R1EBthTmVgYDBs2LxNTpjLU/Xlrg/X1GMF3jx79uH5tUv+Djq6Zxef+viDYTUkmpCdCrZZI7Rc94aQBA/DL/s7SmLnXBmfP3p/d1HTDpAczHXoGvEmPuSAwa4xdBUzQygDA8O1a/8dGOyZRK++/r96dRgo1aAkO5xplVDaBwCNxcUPWjqohgAAAABJRU5ErkJggg==',
    order: 220,
    base_experience: 180,
  },
  {
    id: 143,
    name: 'snorlax',
    weight: 4600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
    chain: [
      {
        species_name: 'munchlax',
      },
      {
        species_name: 'snorlax',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABOElEQVQ4T2NkIBMwkqmPAZdGxlWrQpkYVjMwhK1e/Reb4RgaGxoYmBoaGP7BFP9vaGBibGj4z8DAAMJwgKLx/38GRkZGiIKlVaEGElxv3zvX7HsI4v9nYGBkRNIM14gkwbKzVnLN//9C/s/f/v7L9v/PpOgZ94rQnQvXuL/BgcWx4cCfVXmqacI8AjNfX9L4fZnhLjObxEmmV5eVvaeevLWtwYGBpeEAwx+QIXCNDQ0OLA0NB/5MSpZKUv/jPbd54U0G7/xLDGISHxiSKyVNGBienw0NZWBevZoBHFjIfgSxwf6bUsOw5NJD/fBZixkXT6m9MDOnmeEkAwMDEwMDItBQAwcpAFZ1MMiFVTA8gvoNRRO6jWA1yCELcpq2NgNjQwPEXzijAzmaGhrAGuDxSaxGgimR7LQKAFQ+aA9Q+b2RAAAAAElFTkSuQmCC',
    order: 223,
    base_experience: 189,
  },
  {
    id: 144,
    name: 'articuno',
    weight: 554,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png',
    chain: [
      {
        species_name: 'articuno',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACIklEQVQ4T2NkQAL///9nPHDgAPPBgwf/NTQ0/GdgYABhrIARJgrSxMjIiKJw1SoG5mvXHBi1tET/h4Wt/otsAlgjsqYtGzf2/Pz581BwWNgmZIWrVq1ivnbt2v+GhoZ/IHGYRiZGRsZ/B/btWPb547vIcwd3TldlOy//n4ltz5O3LHclZVW54uoWrwBpaGhoYAJpZgSZFBYW9nf+/Nm2stLC01fuPZCm+vP5Ng8DDv5Xb94wsLP8Z7j/+Pk8mdAFaz8/vffRPzj4KEgPXOO8WZPdGZn+uSWm5Bf35XvPsdCWTr784CPDr3cnvt35oFJpH5xc9v7N87vJmcX2////Z4IHDgMDA7uXlabEtmPXHzIwMDDpMDCE5k/p7v709pXs43NbThkHprfyC4nN2LF+t/m0+fMfI2sEh0VoKAPz6tUMf6elSYT+k0+aJiHEIXJsfd23vl0MImvXLtp+78a9vNLqhkvIGhlDQ0OZVq8GBzt3oa/y6bOb71Z4J6n5ffrKY3rz6e8JWvbOv5paJ4AC6S+KjbBo+f//P0ttRvjSRxfWLlt08u/uPBeGKS+fMWxfeY1hLQMDAyg6GFE0woJ62rRp6mz/f3ikZBfNYWBg+DprYvsWHm7BKVEpGTsaGhpYGhoa/mD4ET0FNTQ08Kmqqor/+MH0NTk58hksUWBohKWk1atXM127Fva/oQHsNGT14GSJVSN6qgZ5ob6+HpSY4WkZAN23/xC0DOpmAAAAAElFTkSuQmCC',
    order: 224,
    base_experience: 261,
  },
  {
    id: 145,
    name: 'zapdos',
    weight: 526,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png',
    chain: [
      {
        species_name: 'zapdos',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACYElEQVQ4T2NkgIKGhgam+vr6/42NB5i1tF7/Dw0N/cfIyPgfJA2S09LSYrx2TZSxocHxLwMDw39GmEZs9KpV/5nDwhhBCtEBI+OqVauYw8LC/vbPXy9w79zjf8Y6arGfvvz4rPuZf5ljg+OfmTPPsD57dlWSh4dNieEzs9fXX1+nNXQkPgBpZLtz9uO0f6yMfoxsDHks/5iF/v1nlZKUV9BjZmTtfvn0zqPf/3+fZn8rJfrl9c8tdUt9ff8z/GcEOzXKuC5U1UB5FbPU/9K65oQekNjkybtM+Hj49ty+eyrp/xv2Fumf5ppPHz+zbN3jdaLBYT8L3I+5XpNe8ypy/WibmiIL81Bvw5Id/5l/W/18Jfib75OM0JW3Z9Rmbsm43dDwnwms0VitWMRQSnoWO/8fz/+8X3cLSUvutrA1d7l/44HO9w8/lF5cf8/Azijw5MePf8n9W2J2hYauYgZrbGjYz9LQ4PinqXKOtYq2xpHPH98ziEnIMnz/8oPh8Lp9Px7sexa5/fOUzQ4KCawHHiz4AdLDCIqjhoaGf93dmxTFRPmOfHr8gPvdpfMcDLLqf+UkJblefHj3ubI1mQ8jPkCaQRG6eeZmrmV3XvhHvrkZySAkaLL7O+dHfoYfR/nEpMx+//ixvLojoz0tbSbrrFnpv8E2wlIGyFYQe0pZ3z1Gbr4zW05cXPz23sUr2hq6Yjz8/K2TF7W5QG0FW4SUcv4z/m9gYGR80C3G8ODZD4YDEz5ADWVpaOjjCw11/7h69Wp4KsKZ5EAht3p1GMgV4PSKzY8oYrDEDkvgyM5DVggAvxAE+dCbRhQAAAAASUVORK5CYII=',
    order: 225,
    base_experience: 261,
  },
  {
    id: 146,
    name: 'moltres',
    weight: 600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png',
    chain: [
      {
        species_name: 'moltres',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACYElEQVQ4T22SX0hTcRTHz7nbzTtJsofEBDG1KDdo5EORVrtQFkQ+RN1bsNpDrZBAISmjCPabPgihIlpJGSnietggTJvgS6mk+SJIpcVk6ezvtNnSXG679/7izjU1PU8/fud8zvnyPQdhvSCEEUb1aDAIlIAdgBDl/zJcy1EEQLpOP7U28b8K5Hmi7e0lEhTfNEHXZATEvdtyuV97vG2kAihFwOWGK8FEx2tVNa60rNzT6dwi7RnyoaNu8ABA58BlAPYhQFRV8w+MQQ7H/c1m85XQcG/LC31ebkHkz9zim/Egd7DI3WatPpwk+aeCrfWVJYQQJgaqD0KIcul2zcv30iaNNScQLirIO8JxG+Qn3e+Y0o5v8kmTURsYHarvdzZdFQSnZmmiIGjA5ZKLLOXlY7qs2ppDrHx8fzbDsix6vwSUKoeHcXtmvu7oaTCMAAQB4hPjkmOOtTfb75jPHr0eCYWlSDSq3ZjC0f4hLzVZO5hju6dP9LgH3TzPaxPmdHU9SC4ubksdHyit227MPhOan5cQGC2jIHzy+qPGimY29H26BSbfXlAVotPp1IiiKD9qaiw07tr6KlkJSxlbUlGj01IaVehccAF/U1Ya9/3gqtufPX3d3XlKZZBSihjbz86UvlbLh/x8Y8aEbxpyMtOBKhTCrAKzfj9EF2R4Puw5d6Oy1kEIWZLqFASN6HLJIkDh+bv2iyMfP3fw+/SZSTpdGkWkMxNTJbM/g48ttnu3KAAigHpeS7E8ee2xlTY0JDWWlYVXZladnLpPm02PdvsY2kwmAF4tnaGIohzftep8zP2/pi4Eb5gTOnUAAAAASUVORK5CYII=',
    order: 226,
    base_experience: 261,
  },
  {
    id: 147,
    name: 'dratini',
    weight: 33,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png',
    chain: [
      {
        species_name: 'dratini',
      },
      {
        species_name: 'dragonair',
      },
      {
        species_name: 'dragonite',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACvElEQVQ4T2NkgALf+s1cmxt9vzH8/8/IwMj4Hybe0PCfqb6e4T8jkhgDiAtVwFy86NoOZhbOJV1RigtXrfrPHBbG+BekqaGB8R9ITcqkIxZCQoKRn9+8nDa9wOkmWGNGy3RpVmnHc3/ZhcVe3j+mv7ba/1Loqqtsq8O0fwU1rFXildCYIyQq68j+4znDi3uX1RbUhtwGa0yqmaYuqO528SOrGPvDizv8d7eHbYI5NbDtUK+MgW0Rw4cXDCxfn53rn7zcjuFSz1eYUxkyZ1za+/Efs/WyLG0BjcxpqYwsPGHXJ8fVhvWeyRJXMw7l//uW4fOL29smZlh6gwxlhPnDtXrHFnEFbe/Tx/YFuPw7M/mlvJPEmkP7iiJDsyvZuXg5Ob8/mc7x431vf5HHu////zMyhoauYl69OuyvXeKU+C8iJgucNfg/iovwc5x78fv1j6+f2BU1dUS/PTz36veb2/5zaiJONDTsZ2locPwDdmrD//9MDYyM/9xKt+TW53pPuvH4G8PUbZcZDGUFv3Awft3P9+lKa3tp3MmG/f9ZGhwZ/4CdCiLAVjMy/j/z/7/kncsMd05ffcV19d7Ds6zVZh7MXSeiP/z5b3Hgxom5DIsK9zA0NDAxNDT8gwROw34WrfdP89///GbhpGni9+HjPzY2Lq4XWy7vuu9u4Kj86skN1lOPbnJJMLDIvlhd9RqkGaIxsNZeloU57fHpD9Wmxrw9LLxiwd9+/H5z//+nm5+4JI8yvL8fz/TtHd8/Likphg0NHxgYoBrNzT35Tp7c/n/D1BaBRw+vdV97L2Lxn4FJZiaz4QseNjbpHz++3vpzdUcBw9E125GdCrIVnDYbKgoUfv7m5BBgeGT+7z8Hc+UWiZ0qMnc47uxbeReSIP4zMjBA0jE8ATQ0NDA1NDSA0yVWEBrKzLB69V+YHACskzGgAzcPLQAAAABJRU5ErkJggg==',
    order: 227,
    base_experience: 60,
  },
  {
    id: 148,
    name: 'dragonair',
    weight: 165,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png',
    chain: [
      {
        species_name: 'dratini',
      },
      {
        species_name: 'dragonair',
      },
      {
        species_name: 'dragonite',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACVElEQVQ4T22SbUhTcRTGn//u2O42712+1Vz5EqYpviUlZF9KLIpeIJJrH8No9iESLKLwS1fID0kipEZFZgpF3UFhMVGEjCA0CtFwK4V0zonhy7A1527b7j9maag7Hw/nd55zeB6CzUUA0Cj9da3IEKgkMLUOKxVFKNEASkEIASRJUAlCDiVEVMjdy9BWNUFeBdrENLZCdAYe3DTrK8XKAGAnhFjDGxeS9215p9NT9Lu2l35sAaC2teSfDIfChqCiDJZVfx2MAKcA/RuAfVyXn1ZaZEi/0z7aEzmVt3fudSUlssufR7zftBrK7kzWZg/bl1sfdXpaO+oyL01O+/YsyYTLTNXkdXTOfqmu/35x5UcAhTNvCwZM5ljN6JgfasYMg2EGBoMOXEwYfl8AKvxGY/uUp6bZcxXAE9LbkpGdsJWzBPzOM6ZtfKrLQSAvE+h3BMK56TwzOz8BSmkwEDKphsfU3cXceFlGFeQVRVtzVmY872s06t3Hxx2YSkyFmtUhaXre9CORDylGbtG88DO2f9Grs9j6XVNNT+FdPVX7sgFnKVNx1OnUueMT7hXuyzp2pKvHOCmzvisZyTYngnzusy7vq9cf8EsUoYqAhAIRm5TnNy7cMi521XzyhroLig/kxM2NpPgSFFlh+f0nKoeGJElghHKrQgC6qoi+vkPqkpJ3oRfXym9vGY5rWDh4/xwXU1S/JDMTfv/A4fMixiUBTLkVK56ugWsGU8qAkDCwm7tumctjicdd+xCuf+lZi+Jm8O+GdXndCEVX/A8RSYDKkYOoGf4D+wvpMbvT8ZIAAAAASUVORK5CYII=',
    order: 228,
    base_experience: 147,
  },
  {
    id: 149,
    name: 'dragonite',
    weight: 2100,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
    chain: [
      {
        species_name: 'dratini',
      },
      {
        species_name: 'dragonair',
      },
      {
        species_name: 'dragonite',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACcklEQVQ4T2NkYGBg+N/AwMTYwPAPxMYBGEHKkOVAAmDwn4GBkREqCWIzNDQwPvm4k/1r/3EWDQaGz8jqQGywxlO6zAn89zjOq3/9evE/AwMTIwPE9jQGBtZ8Lo56rW8/6kBiZ9KMWU1mnf0N1ri2UdpR5sbPldLL32jKMDC8BYn9L7TkePnrXzqXIo/Tm8137d4efGBjysBwBWbrYwYGTsbzs42yee7/qWBouxf7ZL/JEUfHA39ACr7O8brK9ZdB6+68a4d/nnzgJdvmzP5p6nPZ76/eJv+xZtjJeGmDna4GE+uld3s+H7s+6ZS7IwPDl28rgizYxVj3fj3xmutV1T5xHgY9hn8p7Esl3URdnn/6xHD6+ANVsB/vrLSaxPLqaxrTWYaHXxdcTJSrcNTgEmGe+/r0x52sQpzTfukztYmpc2s//vX73h82hnIlx11r4KH6eLr5DsnfnO6nV55dK+ao8fv3ttcBf8x/v1C2V1J4yfT30R8hnjIVl11rGRgY/vz/3wAKQAaG/9uCfRm+M2+6+fjhNzl9bq7/bBwMt/ceY/j0h/X4C5bXxWF1DBcYGBi+g9X+D2VmZFz9F6zxRLmVv7CB3oY/bM+Ovnt4x0SS8wv739+PGW7c/+/u28+wC6xhvwMLo+OBv7CEANaYF+la9uX7s7sPX+u+0pX9k6P/e039H3Hzxc9/S3bXzd6wamaaMWs6NP5gUQLSyJjmosQ3a8+9j//372dhcHD4z8jI+LcuK24LJyfX8sreGUtXrQplDgtbDbINDuCBsyo0lDlsNURyVSgD82uHqZyvX2v9aGhwBMcrOoBpRE7EGAkam0YAG3UAWBFb/XIAAAAASUVORK5CYII=',
    order: 229,
    base_experience: 270,
  },
  {
    id: 150,
    name: 'mewtwo',
    weight: 1220,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    chain: [
      {
        species_name: 'mewtwo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABcElEQVQ4T2NkIBMw4tP3//9/RkZGsJL/6OqwagRpOHCAgdnRkfEPVANIHYpmDI1QW8CK0hgYWGcxMPxlYGD4x8DAgKIZRWNDQwNTQ0PDv4O71qgevMInFeGhGv79+6un+sbmrcgGggxF07ifpaHB8c+iRbvdmQS0d4jy/GbgZnqyxMbBOvb///9MjIyMIJvBAM2p/xkZGBhBzmQ5f/7SkVv3+Mznbnw6fdci66yG//+ZGnBrZGCobD7pI8n//1BeXr3i6RMdJQKiajGqyjP1GBiKLoeGrmJevToM5GeEjQ0N/5kaGhj/9U06Puve4+9uu09+5umt0fvn7aogGpG4LHLlgugV+/fvZ3F0dASHNNypMM9nZkYJ/mOyM9p7jOnPypnO2znY/v7VNkjQYWA49hBmOIYf0UNu0eRmxTPHP7FMWtZ9G2+ogpPI//+Mjo6NzA4O9gygEAaJwaIJOfXgT3IN/5kY6hkYkKMBR3QQn+IBsa+cD6ZXNSwAAAAASUVORK5CYII=',
    order: 230,
    base_experience: 306,
  },
  {
    id: 151,
    name: 'mew',
    weight: 40,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png',
    chain: [
      {
        species_name: 'mew',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACHUlEQVQ4T2NkQAWMDAwM/0FCDQ37WRoaHP+A2P///2dkZGQEi8MASCEKSEho4FiwoAGk6GdJSTe3kZE0Z1RU1Bt0zXCNDQ0NTA0NDf/aKiuFhSTVSjPyLjVeuZTY8OLZK24XD5ec////szAyMoJdAALINjJCXMn4v3/+mbOX3orpplq8Z3337HaWT1jI9P3797M4OkKcjqKxoeE/U0MD4z+QYMGk+ys42cTDX1zbs2r+JL9wnH6EOdMybrP0o1PvfhhGGlv9+vB705MnD3KvrQ6cEtpwlU2bQesPzGCwjTCbMtrPK9y99mDl7sU/AmtKJ3D/EJ5w6/gzVtujk0yOwJwHswCqsYGloaHhz5Qp6yK+fvrKWV4VO//h/YcF91+y1jlYSAmBFCW2nRP9/4udeUGD9guYsxlhnl69Ynfck88SboWpujHv3r3bv+vUL4MIj2ynkulTfH5z8Wf9+fOXj+/jda/2IrODq1b9ZwaFKjjS//9nYCruuTRt+Y1v5kfKJDR/Mkuwp89+9J+VR4xRXZqfwV+fgYH53bEAV1frjSDLwNGBGmoGAvu2T5zp6GQT9v4rE8ONh98Zfn59+12A9Vmrobl5K9ypMI+DBBoPHGBugMQV+7rFG6Jk5QTVWdn+PXj/YucOx8COB3iTXGjoKubVq8P+oifF////MzMyMsLFMdIqzOkHDhxgdnBwYGA4wMDA4MDwj5ERkjhgAACsSQC1SVHUrQAAAABJRU5ErkJggg==',
    order: 233,
    base_experience: 270,
  },
  {
    id: 152,
    name: 'chikorita',
    weight: 64,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png',
    chain: [
      {
        species_name: 'chikorita',
      },
      {
        species_name: 'bayleef',
      },
      {
        species_name: 'meganium',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACjklEQVQ4T21SbUhTURh+z93czI9NBTXTIv8oM5ta6vpQ0CClJUHFneEPaWCjsB8WEfgjOwjaB0glNihMFxrm3Y8o0DALR6aZZjk/SqbGnTizqanVprl7d+Je/Fjg++uc5z3P8z4v50GwWQgAiM9944gxpq5jTJBPX3gMhBCEECKNNZfz7B7//jBTJfUqqXDlpDpYW3jlfsNWYiJRUMQYe+sqizUK13huQiRXMr0gY98tKg34ztOPDL0j3hUet6Q3WmbWRRAGoDCA9zEN0ebvGZfOHFGcL9ivDPxg5aadZeZj3yoK6gedfLS7baysefTTwzUiEiaKu9Wf3R2iN+2Jar3Fl6iCOcP8iHuuZzXA2aROSuiacWm++LWpp1bCduXc7C8TyP/tKABP0iB5e76hMzV0IajL7hjWlh/Qjle8PIcCFfq3A0uZetMoSwAQIgQQQkAAM0HDVGWVRBlRFJKRT3FsL8gmm9yjb34lh8SlNRIEXHJV32GCMYUw9iKapiVms5m/VlWdkuLoe7Y3NzEmSp0ome9u55C1S2rj44eCZ22/Q7fBIaPVGXvXwrIYAyVaZRhGotPp+IZq/YW8vONGmZ+cnx3sRH/HvpLJ+WhK7RlGjj+rM/tqbCqAxUXRqu8/fr6d2bNTc0LjoeS829YtifCyMDXkAm9AOFhml0uKH72/14GzpNnYwonEjqwsabbFwr3OAUPswaMPJpSRyz9/ODyqObuc9VD259KoG3V1nSbfIKD11AAzImudbn4RYWuJazf2ny4FsPeV66xyf8W4+mptNiGYQggLkRRjKU4Ui6YltenpqqLe3gkwm5cFaKCVuciBNCZVe6p0jbCR502ijw+GBgnNYIIQ9m6VUwH7B3eNGyHza14iAAAAAElFTkSuQmCC',
    order: 234,
    base_experience: 64,
  },
  {
    id: 153,
    name: 'bayleef',
    weight: 158,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png',
    chain: [
      {
        species_name: 'chikorita',
      },
      {
        species_name: 'bayleef',
      },
      {
        species_name: 'meganium',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACN0lEQVQ4T2NkwAJWrVrFfO3atf9aWlqMoaGh/xgZGf+Hhq5i1l597X8DQ8M/kBZGdH3///9nBCnEZiBI7D/Df0ZGBsb/KBphmnZvOmHj6jft+ppFCSq84uz33d2tX5VazvdgY+S73nos+CEDWDMS+L//PwujI+OfI3vP9wsJ8UU/fPjy/4NPd3TvVv31/yf9i/vtp1e/jzw+vPrul12vkDUy3r59m01VVfXn3m1H+g30jAqOHDvxb//ekzWvD/6SXHqjPi9AqTyfiZn547rbbQugGkFORvhrSs8CO25u/h0fP33kOHX+TOOdFdzfhbm+7RZWlGr4++fPhuU3a+czwjw7adIqUVlRUW1mpv9idx/cMdI30Mu+eunWZzYuhhX/v7Nxn9x+68flvQ+m6VmLPJt3tOszIyjow8LC/k7qWRgiKy21+j/Tn/x3D348+vuJff13gdfreDg4GYSFpIKO7j++pGdOaSw0ABHR4eDAwCIjmqWwZPW0OzuWnDnxajejuW46H8OahQcYXp//ySBm88e/pa9gU0NDA0tDQ8MfjHgEBXJhZnvG7w/M2X+Z/1xh52ay2jfzftIlhpl7GxoamBoa0BIATLC/f72AkrTAvKfPH5/Oyo9rry7rnfiP+e+a9vaywzDbUFIOzK+Te+eHSohIuB3adbJ48tKGTyvmbz3x79+fS1HJ/mn/V/1nZgxj/IuR5NCTG8gVrKwCory8TP/y8vJeIycWrGmVYTUDE0MoAzhx40qzACBeDh/azBjUAAAAAElFTkSuQmCC',
    order: 235,
    base_experience: 142,
  },
  {
    id: 154,
    name: 'meganium',
    weight: 1005,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png',
    chain: [
      {
        species_name: 'chikorita',
      },
      {
        species_name: 'bayleef',
      },
      {
        species_name: 'meganium',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABe0lEQVQ4T2NkIBMwEqPvf0MDE2NDwz9ktRga////DxZjZGT8D2KDaCQNIDkwH6eN/xn+MzIyQDSvTu/UCZtVcRlqAFgzNo1sIAX/////A7LtZPPSpLvPn7DvO3jm1Zyrq9fAbAdr/N/wn4mxgfHf3uYFyjoa2rv+fP/2UTrO3nxb7iTOV6/fJCesaOpvcc6KZmT+d7F614wrDQwNTGCNq0JXMYetDvt7umaCuoSW5Q1uRhaGCxdPNTttWDNxtoJBcOqO3lnLoxoLP337sil9Q/dduEaIrZCQm+VZnOvh4VwvLS8jvHj56gnCWgp3NMSkvS/vOrk0aH39Upg6FD/+X/WfmTGM8e/hugU90tyCxfefPNn+X1MiR5iFVdgwze80vugAh1gFf5Tgqo+HvGbXNGkyMzHcdWhKmr+qYRVbWEPYL5TAQTYJFg1QMaYEhwS++fvnf2RkhIQjTo1QWcbVoaFMYatX/0WOO7wpBy0JwsIAOfWAlRCVVrGlZwAJyJoTjDiPgQAAAABJRU5ErkJggg==',
    order: 236,
    base_experience: 236,
  },
  {
    id: 155,
    name: 'cyndaquil',
    weight: 79,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png',
    chain: [
      {
        species_name: 'cyndaquil',
      },
      {
        species_name: 'quilava',
      },
      {
        species_name: 'typhlosion',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABYklEQVQ4T2NkIBMwEtAHk/+Prg6XRsaG/QzMDY4Mf0AaGvY7sDQ4HgCzYQCbRpAYhg1QDXA5VI3/GRgZGCGakvdw1IkLq2f9/P77+6ubv2YuTrzTgdPGVatCmcPCVv9dd6Yl7/6vs2n3/p46yvRD0P79o28/393/Vb6t5cmO0FUMzKvDGP7CbVy1ahVzWFjY3/07FqtImfy79f31j39X175Wjq6peQiyySGBgePAAoYfGH78/38VMyNj2N8N+5rMJWT+nuDlFWC4/ebJhtNHbua0Zm55ijNUGxoamBoaGv4x8DEIHbxafVdUik+Al4mL4crlB5c99Xr1/v//z8jICHYgOAwQgYMIGKZlB7P3KKpI6P/+8Yvr0pk7u3LClwcxMDD8hapH0wh1y///DUyMjA3cTR2FCkwcP/lrCqYdgdqGEkWEUg7OhIVV4///DIyNjQ2M9fUMDIyMDSCbiE5yBJM+AG0Oig/TQtboAAAAAElFTkSuQmCC',
    order: 237,
    base_experience: 62,
  },
  {
    id: 156,
    name: 'quilava',
    weight: 190,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png',
    chain: [
      {
        species_name: 'cyndaquil',
      },
      {
        species_name: 'quilava',
      },
      {
        species_name: 'typhlosion',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB9ElEQVQ4T2NkwASMoaEMTKtXM/zFJsfAwPAfJM6IJgnigyUa9juw/Hn5Rv7Fs486d64///r9Cd+pk9vffYLq+Y+sEaxJJZeBXZVHzFNNlT2WV5DP/sXdz8fuXH8u+vMDX+LxtW9vMDQwMDE0MPyDa2xoYGBqaGD4Z1sgImnAy7os3UvL9N6rH7P9/I8W7ndwYHE8cOAPzDYUpzY0NDA1NDT8m5mWxuWWe/+BAIem6Nt3Hw6qmC9yADsdajDMayh+/P+fgZGRkeH/wmlqRXaGwr1fmdmf6JgdsPz/v+EZA0MDAyMjwz8MjaGhDMygkNRu5vXLk5WpT3JT0Ft/8jlLz6nnS0+1v4wBafj/n4EJphlmIzhg/jcwMHlzSe3Ot5Z3EmZh/XnqySd2VXaWc0K/f2x6/unfXZ/4a0tgmhGBs9+BpcHxwJ/cPumqTBfF1sdvfjPI8rD8kmD/wXbzxrvH995zOEdnXL8N8ytc4/79DiyOjgf+HJir5amowrft5buvr3jY/oi9/8j8+esv1iluCeerrq7SYtMOu/YLJVT////PyMjI+H/55CSpn79/eJ49/umykxuXz+6TX5cbaUn8TimaewcWeBgpB1kCPbmhy6EnOVB6Y2RYFcrUeG31fy0tBsZr1xogSbChAR4V2NIqlnSNXQgATbnSD3h8PS8AAAAASUVORK5CYII=',
    order: 238,
    base_experience: 142,
  },
  {
    id: 157,
    name: 'typhlosion',
    weight: 795,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png',
    chain: [
      {
        species_name: 'cyndaquil',
      },
      {
        species_name: 'quilava',
      },
      {
        species_name: 'typhlosion',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACcUlEQVQ4T2NkQAL/GRgYGRkY/u/f78DC/lqU1Sps9XeQ9P8GBibGBoZ/yGoZYRyYJhC9voIh/QcPg8XfHwzX334SXF4w6f2jVasYmMPCGP7C1MM1NjQ4sDQ0HPjTOFXZUVRXeTUzm/zPHyePHRB5fPU2q7z4wrDcl/cbGhiYGqA2wzWGrgplXh22+m/VTi9Xs09cm//qK7LfZXywQVB1dQZ3t4x4VOmTS1g1/m9oYGJsaAD742xu0eWbGS90rjBemdimdakA7M//DIyMjAz/UZz6//9/RkZGxv+Pd6wS4mPQFprwp7tM0uxnqsgp/dIgn4oeiEaIGlSN+/ezMDo6/nmxcV2S+J1vc1d73vvK9vswt8Xh2HcsEvwr/zIy94gH+9xDdhXYj/9XrWJmDAv7e3PzjhzFfScmL8k6xsD3UOCv70RlZrZIHYadvBLmHr7Op/7/X8XMyBgGDllGmBPS3t3l71914hHXq1V8zW6f//De28eSviv/35l05b/bRRbfeHSYZ8nSpP3dIHtQNM6cuYrfiY+xT+DLx4jfKw9zfTES+qf6QZDpZoLc7z2G61hPrv+4YnHUwUhY6EOi4/9/Rgaox5t31B2rfCBneUuakeGOzsu/D14//H/u93mWb8/Y5q8KPZIU+j+UeTXj6r/weEw7k8Y6y2TW74TVbss5+OUj3r27NU3L4UPWlT3/tgox6Dh/Z3reuzjqQI3DfgeWA44H/iClnAamhoaGfxMn9kXd/H/q79PT3y+rOMkfe/7tYbjxEdf7D1huvpi8dPInULiA3AjXCHJxQwNEM4i9v2E/C3sDO6sVgxU4oUMBWBOIDQCdBx4e/m8wiQAAAABJRU5ErkJggg==',
    order: 239,
    base_experience: 240,
  },
  {
    id: 158,
    name: 'totodile',
    weight: 95,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png',
    chain: [
      {
        species_name: 'totodile',
      },
      {
        species_name: 'croconaw',
      },
      {
        species_name: 'feraligatr',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABYUlEQVQ4T62STyiDcRjHv8+7GZdllzHKDqzQklJ21FpDspy8OWjJSXJQitz2nOTgoLhJSTtoS1xISf5ctVB24cBq1FqJnBjvo3d67d2a1PK7/Z7n+fy+z/P9PYQKD1XI4VeQASWiguCFEEMrFSgHEjNbmPnDXCwAESBGrBTU7/mkAPZHNPrtvkz4Ofu56r7DmTAUQ70AihCIZFEN1s43DXA0fdU/WrfZjhogs68kxKZNNlziXB+BAa0A+tmKE729cGBl3XcU6tTwmtrNdbiuq3LLWaTjtnAz3qMCKGQGmdmqzzU0Mdc7PejYanNDObi1OxwXiZeehY1ZJ7AmAiL6HuVHUUSIiOR4j133Nw8ue/VbvC/Y7dk5TMXGppZGRNhKVDCsyBxmVpg5b/14KNDV6m3xeOqfksMz20lzrkjRsFkviERYjJb0eClUFjQeiKmqxen10imgGV2Y//X/V+6vHf4CNQh/Dy8JqcAAAAAASUVORK5CYII=',
    order: 240,
    base_experience: 63,
  },
  {
    id: 159,
    name: 'croconaw',
    weight: 250,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png',
    chain: [
      {
        species_name: 'totodile',
      },
      {
        species_name: 'croconaw',
      },
      {
        species_name: 'feraligatr',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABy0lEQVQ4T2NkIBMwouv7z8DAyMjA8B9ZHCQG4iOLo2j8z8DAxMjA8O9/AwMTYwPDP3RDkPkYNq5iYGALY2D41dDAwNTQwPAPZNN8BgYOSwYGVg0Ghs8wzWCNMM47KQZrRi3Oyp/KDIslZn5feY7BVlRJ4fQCVrWfmn8Z/h/l28UQC/UCIyPMeTcYGKQkPDk381d9N/p5l2EWRwJD+v90hiKGEIZehu+MDN8mMXx8c+u/tfwjhqtgPTCNVxmU5LQ6753/ZqsjVF2kdmTCCe7CHheBbuOU9w4O35YwfJ3D+OrRT04DrbPfnkP1MDCsWhXKHBa2+u/dcsNpO78FZn4TZWW4dvcuA7+U0L9/H38yhX4788Do7tFwrsP/TzMwgOyCBrODQwPLgQMNfxgYqmI2LBVdrC7z/P2/v59Y//z8zPPhw3eGGy9/3ksv2KoM8x8oWGChCqL/39/vwLHlwL8ZHOxcnC5uNuqHDp1uPHfipoiqgvCvnK6jCxsaGpgaGhrAIY0eHWADNi7MMPz+7evviMzFV5ASAlgOxsdMOf//MzKCA5uB4czMNNZ7e97/YwhlYACFAXJqwtAIjtf/DUxg5zBCnIUNYNVITLoHAGufshIcYiTUAAAAAElFTkSuQmCC',
    order: 241,
    base_experience: 142,
  },
  {
    id: 160,
    name: 'feraligatr',
    weight: 888,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png',
    chain: [
      {
        species_name: 'totodile',
      },
      {
        species_name: 'croconaw',
      },
      {
        species_name: 'feraligatr',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACKklEQVQ4T2VSXUhTYRh+vnM2p1taSWOLoZUOkspuBO/MbLDoTi92KMog6MJuvBCsoFwvgZkURYVj/RhURnV2ERXeRMh2ESHY+qFyCtqmoLJcf2bbPDv74rhNtvXefB+83/M97/M+D0NRcYLACGnOwRgD19r599xzlo8jIoGI0gDpAEqFsKl8+/3FNDuKZQ4whsxHWq0BuewSmeRTeR/a1CmcVuIIrzRhZ+KL2G+5rj4oZs0BtZMDTtNLt25EmdjaWOX4gfqmAP5eXIjN3xP326G85YDAgPQao0uWRZ8kqThwq//MPtPJ3fafyclpVego8+gNw6Hfc8NV7XWYfV4MzLLBcPfmpanWRm7bWFOSUqejmHTP6j69+NMr4elZAgkETX+RRll2iXWVtS3RsUhPjdO+Z1uNOTkTNRq2dMce49mpQ7Isi5I21X/L4SQwRuk3r7qu7bBbO03rSpX4ckLf3Rf+5vV6agEsASQgy1pgB/9MJUMj4x6Ho17abN1QHo4sKKPv4/qDx+bagUdD2Es6+ClVaAfnjDHGoxO9t83V5uNIKhwCY79iS7zncih+Y6CsE/AM5lhXGfM8qoh8pHmbtcIYfPc1YbFUsupdNkPw9SIammceAt4jOYkZYDYVDcD6jqutZCw1jB0+8WQUQDLy4XybqqruO4Oy88LAeFBboiT51EKNefksirD1CrlWusj3PZs2XgDMjE2C3w8hEFjNLM41Q2AtmYXk5/UfIo/sELB5JPwAAAAASUVORK5CYII=',
    order: 242,
    base_experience: 239,
  },
  {
    id: 161,
    name: 'sentret',
    weight: 60,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png',
    chain: [
      {
        species_name: 'sentret',
      },
      {
        species_name: 'furret',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABRklEQVQ4T2NkIBMwkqmPAavGhv3/WRgYDjDUOzr+ZWRg+I/NcBSN////Z2RkZERXCFKDoRmusaHhP1NDA+M/kOklGx92sX548aI93nwCAwMDWAwdQDT+/8/IwMj4f9K2bezHv2rMVPjzMd5MgIHhTm1Da+mZjTUODftZDjQ4/kHWDNYIc+LUqat4jnHITLN4cNbmq7ii4vv/TH+efnxrv6Qm9lha2kzWWbPSf8M0w50aumoV8+qwsL8MM89Itr+7sd9C/o36ZVbD/7v33F7lNjOlKJeB4VlDQwNTQ0MD2OkogQPTrFS9fpsL92/Pn9KaDM9u3r59d8F6l3vPFj/CqRHmDMfSZcH7Z/04b5Dwz4OD9cfZEz05J9H9SVQCCA1dxbx6ddhfjMBBD2qwk1czMDhoizIeYDj4jwHqL4IaiUmGRDkVm0EA5RyID0gKDw8AAAAASUVORK5CYII=',
    order: 243,
    base_experience: 43,
  },
  {
    id: 162,
    name: 'furret',
    weight: 325,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png',
    chain: [
      {
        species_name: 'sentret',
      },
      {
        species_name: 'furret',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABwElEQVQ4T2NkwAEaGhqYGhoa/uGSZ8Qm8b+hgYmxoeHffwYGRkYGhv/Y1GBq/P+fkYGR8f/kpByp3HlTnpFk42s3Bt/HPw0L5h08nzKFgeE+NpvhNjY0/GdqaGD8xzDlo/nSW1u2s//7ILj12QPj+eu6z800TmNNPzvrN7LtcI3///9nZmRk/Ltt16ZdrILirncevGS4cfL1Dvue5JggBoa36LbCNILo/wwM/5mPba+daKT6Pfv4LZ7/K7YpMrpNSVAOZmC41+DQwNJwoOEPzFawxtDQVcyrV4f9datdZL7rh+TyGYYfFY59lGE88k/gmxHb942s9y40LW9PvMHQ8J+JAeQdBgYGuFMdGvazHGhw/MOQvT7teIroTAZm9h+Xnvzi2HWf8a/3pX3bzWfWRGozMHyBORmuMW3mTNZZ6em/XZq2Te4J4MgRZDjNsO6uNcOGF0LfFd7cWbGw1i+NgYEB5FSwtxDxCHWGYsLMWlEeZuUmg5S9s+7OzznynuX2qxmxMVC/QcMCyalIQQ2XZGBgYHbwShA9sG3BC5hNKIGDnjpCV61idnm/hyk9HR53yIaBlWNNqyi2NzQwMmBJ7ADLpLEPmHOk2QAAAABJRU5ErkJggg==',
    order: 244,
    base_experience: 145,
  },
  {
    id: 163,
    name: 'hoothoot',
    weight: 212,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png',
    chain: [
      {
        species_name: 'hoothoot',
      },
      {
        species_name: 'noctowl',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACfElEQVQ4T22TbUhTURjHn3M3XXM086ZWNiwHoWASBH2pPlzpQ6TODNwKi+jFDAkrkSIt6hGDKEuJUgk/WGgYuwql9kUUr9iL0zK05VvqfE2drek0J3q3E7tw06Tz5TnnOed3/v/D8xwC6wYCMAjg9UVAhDsAkAsAiOhde5SsXVAAQgDoyQzUvnyCrv/tybm/oAzdi08JSmEmS50TTc/L9ua0c+IPdZDDEcLV1rYjIiMr/wWbOE4ZKwji2JHo++qoc9dbF1Y6Yyw36jfoEzMHvZqc/TWV+ZTjlEQQRJ/qqiICExfRZ4ycmn2g38mE9ysDf7FT7qV411iYJjshbzfAbYqoJIirIEVkCKK3sLKx+NAue/q2AJtnwBmlOO48CnFz/aAb7X1xS5N0kV4my4RKj6IEKCW+SaZ5bLt9fMBwgB3J8xftwc1qkzjPqBmte4Io2FBiff+Ba883NRuNZgXPmzyS1fJyc2TPPNtrWQmGRtvPd+D2+5RyOOaq1+X0qDQBiomPb6sbClKTs9Oyot44R4e6eX5ZAhFx66Ar6Gx5wZWy008tEVpdeN20UsseXPy84vYP8SuZZ60ZQunrxMn6C222vqRTPdOthFJKCCFUrs+ewo6aYyFLhgT9d1G/eVL5sDMBupU6ELva4MyCA0aGOwxZVfl1kqIExwoKWhTKnKgaujug1l07v7HeI1I6UzQcHahSqdRdc7MtwAZXAP1dAbmGRdmqVNiKV9X7HDTsUomNWnsf21tgekcfQPqmrGePGlky8+VmWlKy5MwnJFtcb3ltu31tbdhisQ6HpaaOfwPA5X8aQL4JAYggACMU8xR4o9do5hneZPKs/wx/AMwgHh003XqrAAAAAElFTkSuQmCC',
    order: 245,
    base_experience: 52,
  },
  {
    id: 164,
    name: 'noctowl',
    weight: 408,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png',
    chain: [
      {
        species_name: 'hoothoot',
      },
      {
        species_name: 'noctowl',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABl0lEQVQ4T2NkwAIaGBiYrjIwMK5iYPjHyMDwH5saRnRBkKYGBoZ/2BQji6FoDA1lYF69muFvjJlawO83XyV5WTlE7kjKdh84cOAHAwMDSC3cdhSNq0JDmcNWr/5bzqavLWDMM5332+8PORdP+YFs+s/AwIjsbAynrlq1ivl8e5i6oaP3pr+///44+uKf75TVu+6jOx2uEeZMBgYGlY1dpbf1LZ0Y3t06wXDjyulPXffZ5C9s2PChoaGBqaGhAex/FBv////PxMjI+G/HioUT9LVU8l8/e8qwb3pEdcHGf23/GxqYGKGaMDQihSh/Q27q0VfPn0lNW7NVi4GB4UUoAwPzagaGvzAno9iI7JTyAIN+RmYOl461J4wZGBh+4QxVmKaSYEdzMRG+CVzsLBYPnz6/0b32mCbUFuzRMTMtjTV91qzfE9I8++30lArmbz7M8OTNt+L1Z+/0hYaGMq9evRruTHQ/gk0scFAQ+MvKEXDh2Y/nh68+2IkrBaHHI4pz0P2FM8nBUkh6mjHLrVu8/w8cOPAHl40A2SehD0SQ/yoAAAAASUVORK5CYII=',
    order: 246,
    base_experience: 158,
  },
  {
    id: 165,
    name: 'ledyba',
    weight: 108,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png',
    chain: [
      {
        species_name: 'ledyba',
      },
      {
        species_name: 'ledian',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABsElEQVQ4T2NkwA0YGRgY/uOSBkniA4wNDg7MDQcO/EFXhFPjmTNprCYms35DNTA1NDQwNDQ0/IMZgKFx26Rcdq+8yT+bLfnT3x7/yCIVZ8OiYSkp6pe5uuY/AwMjI9T5OG3cOKtktbKiaMj5o+f/rm5Yob2JgeFmKAMD82oGhr8gW1E0GjMYs3YvNfS9unnZCb/K9vVyslxmt6/eZtiw+LJ72aztu/Y3OLA4NkD8i2Hjo7PVr3l42Va/un58oqKZ81U2cWHmo+tOd9uETC9D9jdYY0NDA8jz/9wYpGS7tkQ8+v3r5zzToKm1Xx93XeeSkeB7cenWYkn9lrj//1cxMzKGIZy6alUoc1jY6r+rJvmYqcsrnPz9l/XL31+f///884dby0ST6d71h7fNAqfpMzAwfIe68j/MqfDInlPuftjBQcnmxZtfDIy/XzJwMLMyPHj6uiW46kgtVj82NDAwNTQwgOJJbF23ScerZ6yhrKwsb3iE/rx7/umzV0HblZdIalADB1li1UwfubD0LW8ZGBh+MjAwEE45IM319Q0MjIyIVIItTeJMANCQhiVyjMQOAIKTsQ+WyR0AAAAAAElFTkSuQmCC',
    order: 247,
    base_experience: 53,
  },
  {
    id: 166,
    name: 'ledian',
    weight: 356,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png',
    chain: [
      {
        species_name: 'ledyba',
      },
      {
        species_name: 'ledian',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABh0lEQVQ4T2NkIBMwYtEHE/vPwMCAzEZRiq4RxAdpYGhoCGVraFj9C6oaLg7TjawRLOlnrc676ehLZgaGDx9WMTAwdxor8Zw9e+8j1HawoSCArJGJgYHhHwODoZS7F2drlKPChvg1d8LFLnyrffXzyl0GBgaoPJrGhgYGpoYGhn/9tgySXJKGVyQlpIXePnvE8EyR1bi6++y5VaEMzGGrGf5i2NjQ4MDS0HDgT2usdIuhlHn1749/P7L8PM9/X0hyVk7vyfSZM9NY09Nn/UbRCLOtM0Hagp2Nvy0qs9FRUESM4ciu9X+f3jr1lFVAqyK8cs7yVatCmcPCVoNtRQnV+Q0OHIkNB34cWdZZKi7E33X01LlbmxfMik7JLXjjWTjhwX8GBkZGaKijaPz//z8jIyPj/97wIAsBzt9b7n/5O7llzbZGSPQ0MDU0NPzDFqqgCASbOL+/QYCFgZVTxkDqvaNj4o9VoaHMYashTsSqEVtkIzuPkEaw3xsaGkAYFOHwSCdGI8GkDwBfdY8PcVQrzQAAAABJRU5ErkJggg==',
    order: 248,
    base_experience: 137,
  },
  {
    id: 167,
    name: 'spinarak',
    weight: 85,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png',
    chain: [
      {
        species_name: 'spinarak',
      },
      {
        species_name: 'ariados',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB20lEQVQ4T2NkQAP///9nZGRk/A+iGRhWMzEwhP1jZGT4j66OEV0AGx9mGLIcXOP//6uYGRnD/t49P6vtx++/b7XNMqecPzix8+XL900eYQ3v0DWDNcIEpRgYuG69WvPqwaXrN36+e/3eKMDV5czRS7qmjtVXVq1axRwWFvYXZiuKxtDQULbuOte9HP/f2nz+9JThPxMbw4F1N8LTerat2t/gwOLYcOAPikYQ58zMmawm6em/F0/ICFZS5F7DyMj58//7V+zXzr8ITp2waR1OjatCQ5nDVq/+W5kQYhvgxHdIQoSbYd+x198SW04aMTDcvxkaGsq8evVqVKeCbJyZZsyaPuvs76Iwx9pwb8Wm/4x/vx09/Y3r3oPXm6duPuDX0NDA1NDQ8A/DqQ0ODiwNBw78CbHR94nx19z85w/D37MX3zH//P3/dN/a3WZQDaAwAccpcjzCBfP9jSdqqkjk3n30hfHdp99vWFhZ4mduObQNazyCBBsaGJgaGhj+rZ4/oVX074OqK7ee3Tp05vlRPrbfj+bsONHMwMAA8iPYApSUA4vP5uZOTTWx/77MjAzvQ9IqZmNLTRhJDj2FNDAwMGmFhjKCQhynU2ESoBC0Z2Bgeq2l9R85tSBrBACCRd0P6E31/AAAAABJRU5ErkJggg==',
    order: 249,
    base_experience: 50,
  },
  {
    id: 168,
    name: 'ariados',
    weight: 335,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png',
    chain: [
      {
        species_name: 'spinarak',
      },
      {
        species_name: 'ariados',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABiklEQVQ4T2NkIBMw4tAHEwfR/7CpwaYRJPafkEPQNYI1+ZqZKX7n4/vL/OcP284DBx4wMDD8QTcIRWNa2kzWWbPSfzPwiqQyfH6jwsDAcJaBgWGVg4MDy4EDB1A0wzWuWrWKOSws7G/07G0ydZeqtjKwy+kdl3bJSijMmw61DcULyDaCJVbMmjUpiP9m7tOfAv9OXfrI9OnMugmpB+4V/mdgYGRE8jtYI8y246ePu9w+c73LSOe5AjMTs8DRzIrfSqmT2H5oaJZ6ubr27N+/n8XR0RHsZLDG////MzIyMv6/fWIJ39zN7/oNhG+6B3grSb96/5vh/P5vDDzapnOc/XxT/69axcwYFvYXQ+OqVTP5v31izXr9/Im7s+FvEaa/X/9ceaygL6qqWebu7toNcxlcI7KtIHZnZ69FeXnxRQYGhu+LFyyL/PHp8eHUvPInDQ0NTA0NDeAEgRId//8zMB5o3M/s2ADxBzKAeQcmhjXJQZ0ENnnVqlVMoaGh/0BhgGwQrrRKKMUxAADfoqQPKXvh9QAAAABJRU5ErkJggg==',
    order: 250,
    base_experience: 140,
  },
  {
    id: 169,
    name: 'crobat',
    weight: 750,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png',
    chain: [
      {
        species_name: 'zubat',
      },
      {
        species_name: 'golbat',
      },
      {
        species_name: 'crobat',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABiUlEQVQ4T2NkIBMwYtEHEvsPFWdiYGD4h81sdI1wTf8ZGJgYIZqwakbWCNZk7OvLdfbp80SG//znGDh+sTEcP3yQkI0wk6XXhYVOlvv13uX7w+Ozbc9/Lb7a0MCm3dDwC9kAuI2rQkOZw1av/svA4CtyxebvA3FZPe7nfz6c1ls9wwynjf8ZGBgZGRj+g+hdrV3rFd/d8j/DLMXw7c2Nx0ZGNud/Pn+y3bK1awaGjTCNlgwMnA1r11578vGugjjTlp+/b/9i53NsYPh9ft+vP6Vdmj4MDPdggQZ36v///xkZGRn/b99/eN+X1zcdvcyPMmzc/PG7sGo+JxvHn72O9s4u////Z2JkZARHD1gjzMaNDAy8Urmlj/Z9e/pFXe/BTc51Hx1/5TbdEVVU6LUwNp61f/9+FkdHxz9wjcia1zBIZH5nEHsay3Bp0yb1gDlbbm5on8XAcBfZNhSN6CH3/z8DIyMjJAWha8KqERQtoau1/zMyNPz739DAxNDQ8B8U4ugGY0urRCV7AE9Mog/1Q2aQAAAAAElFTkSuQmCC',
    order: 73,
    base_experience: 241,
  },
  {
    id: 170,
    name: 'chinchou',
    weight: 120,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png',
    chain: [
      {
        species_name: 'chinchou',
      },
      {
        species_name: 'lanturn',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABC0lEQVQ4T2NkIBMwkqmPgaoaGUNDGZhCV4UyrF7NwLA6bPU/BgaG/+guI8rGhgYGloYGhj/ImnFpVK7YaFn34snv3wuyz6SANDQ0MDA1NDCAbAcDuMZVqxiYw8IY/lYVsE/gV87M/2P0muEz52MG5s08l6T/Pm7Jarq8uqGhgamhoQGsGazx/38GRkZGhv/bJjHwXXzpcU00RUb61t2/DK+PvflmwPCSjYvr7dLUkrsJMHUYGlet4hP6cczI77LilyCmV4Icna1f8ub0PHV/8urN6oaub88wNCLbSmy8ogQOyMTVYaFMYatX/wUZ4ODgwHLgwAGU0MQIHDSbYAZixB8hjQRdTFQCwGYKABZCZQ8Y9/azAAAAAElFTkSuQmCC',
    order: 251,
    base_experience: 66,
  },
  {
    id: 171,
    name: 'lanturn',
    weight: 225,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png',
    chain: [
      {
        species_name: 'chinchou',
      },
      {
        species_name: 'lanturn',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB2klEQVQ4T2NkIBMwYtP3v4GBibGB4R9M7v9/BkZGRob/yGqxakRW0NDwn6mhgRFuCEwOrhFm6sa51rzcXEcNXCIZDv//38DEyNjwb1Ufg3RYEcNTrDbCNM5vYBAQ5py/0a88wY2BgfHnsRV9jX8YN/+xC9/f/P9/KDMj4+q/IAPgNjY0NDA1NDSAnbS4e/JU+XcXeHn//vl5h9EiKLTzsAoDw7L3q0JDmcNWI2lcFbqKOWx12N80hkOS/C6nQqyt+u0NuUOCb/84yvD8JCcDMzPbtKjNe7OhTgVZ9p8ROcTm1CxawSXwxtP5+gHuRw8fMN+VMvz7XtiCWYF7/w7PllWe/xv+MzFCA4px1apVzGFhYX9Xd1c1/GBnEZNjkrEWv3RHb9XlHd/kTE2/C6lx8DIxqh28ucApufi07mOYl8B+bGhgYOP+6B9S2r9x2c6c/K0v/vy13neT3Zlvf+8V49IlvR++/vrLIXVybUbNzEOrVoUyh4Wt/gsNnP+MDAyM4Ag2XjWTP56ZmzcvOOYJiB/ozCusb/pZsKGD4c7/hgYmRmgAoocqSDPYgAaGBiYGhwNMDQcO/AHx////z8jICDEcJToQyes/Y2NjIyMsav6DogxEkJrkcOUBAI1zwA/Detz4AAAAAElFTkSuQmCC',
    order: 252,
    base_experience: 161,
  },
  {
    id: 172,
    name: 'pichu',
    weight: 20,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png',
    chain: [
      {
        species_name: 'pichu',
      },
      {
        species_name: 'pikachu',
      },
      {
        species_name: 'raichu',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACGklEQVQ4T2NkYGBgbGhoYKxvqP/PyMD4nwEPaGBoYGJoYGBoaGj4z4isrsFhP0v9AYe/aAYwNjjsZ25wOPiPoaHhH0w9Y6Flg5C4mLx08C+bW6rbVX+CJP4z/GeEagYZDHfFTJHFkjd1Psuzfv50nbHEqkHsMdfPpWKcoqqq3PIrbj27N3PKodL7DaGr2BpWh/2K9mzgsxHU87rP9DXu+q83+nyvPi+SfPyvH+ZUQQbH9HflfGYMCj+5FDN3RD6AOWmm8UK5J8qsd9bK/mG99uZWEsPClvkgOcbQ0FXMq1eH/WXwySw1/S8UG/7JaBITI8/vl5eZzik4MoY+f/rg9kntv4t2Mrz7bfbwtc6pvX23HBwaWMA2hoaGMq9evfqvg2mBgTaHYJ6ZkUkw1///fPdvfdt8+vtlxstS7Ef//Xq/4ePny49f7tr1FWwjxEmg0IVERWVw30RXT9e8Tzc/MBw+dvFB79EcXQYGhi/oscQIC8E+n81uXOzcjS/ePdnOzMiZw88vLHrp9eEzQizCN8W45a69+P1hYs+uuK8wS8A2+on48RroBAQJcon8K9zmt9hR19dfkkvZ5vvn70f05K0/c//n8fn47fXF1kPpi2DRAwtVeHwhxSG661hCQ1f9Bwckwo8MDKtCVzFfey3K2HDA8Q8osLRfazM2HGj4uyp0FdP7e++Z0s+m/0Y2CSXJ4UunGIFDimJktQCji9qCchLcZQAAAABJRU5ErkJggg==',
    order: 34,
    base_experience: 41,
  },
  {
    id: 173,
    name: 'cleffa',
    weight: 30,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png',
    chain: [
      {
        species_name: 'cleffa',
      },
      {
        species_name: 'clefairy',
      },
      {
        species_name: 'clefable',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABtUlEQVQ4T2NkIBMwkqmPAV0jY2joKiaQYau1r/1naGj4x9DQwMTQ0PCfgYEBhOEASeN/RgYGRhTJ0NBVzKtXh/0Fq/7/n5GBESEP0wiiwZpci1Z6/f/+XZzt15992+amPDSNmCqr8Pf1y9WrG34xMCAMB2v8/5+BkZGR4T9D0prgQL5P79cveXRD/P0He17Fv88kjJR0OMQFP++ZHL8Y2UWMq1aFMoeFrf57Yn6KxctvfO7+2X2Ni1ZtUjzwirf4/oX7OvvnJDnIhE/zlGb+/erksvyzoaGhzKtXr/7L+P9/AwsjY8OfN8fiV7MzfjaraJVJsonx28PDy8TA+OMng88O1cQPYSoSzz8Gs2mGrG36v9+BhdHxwB+QRiZGxoZ/d3f4J/78yWfZfjniJR+rQBw/B4ccy+c3DEeZeU6scp5r8evjs8WSrjvi/v8PZWZkXP0X6sf/jIxIIcbAwCDCYNBtzfDjP5edj+CJWtW10l9fX3oYUPPsMSw84NEBshkUUI2NDAwNoPjDAuCByMCAkQCgyhuYHBzsmURFX//X1r72357hANNBhgP/GhoY4AZSLckRnXQBLUiwD+R+1yYAAAAASUVORK5CYII=',
    order: 61,
    base_experience: 44,
  },
  {
    id: 174,
    name: 'igglybuff',
    weight: 10,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png',
    chain: [
      {
        species_name: 'igglybuff',
      },
      {
        species_name: 'jigglypuff',
      },
      {
        species_name: 'wigglytuff',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB7UlEQVQ4T2NkIBMw4tL3//9/RobGRkbGhoZ/2NSgavz/n7GhkYGRwf4AU4Oj4x+QBpABjIyM/xsa/jM1NDD8Z2Bg/A8Sh2vcv38/iyNUMUhiz8Ipwv//3ZVyTey/3NDQwNQAt/k/I0gzWOP///+ZGBkZ/zEw/OdI6Tof9pqR548N20UdA472167p5/pBajxz1ysz/WF9t3W6z3uQhYwwp7y+sdLx5HW2IJ/Ax02JHRbur35x+G+tu5zGwBD9PnfSbfbXH76s//HuRdaGCZ4PQC6Aa3x+pu/qv09HOaVnrvGrDn2zgu3bV+07bxgYfn15nvr83t2TrKKys/Z221vCAgrkU0ZGBob/K0oZlP9/ZBCRj16/SoL/v9yvt1d/LLwfx/HkOwfD62d3zsgxfjJx4p5ZEFG9YeKqVaHMED82MDAxNjCAg/3Ovojjv94JWGx7Gs5wg0nx259/LFwPH965EsY/m1+Y8097WNnK6fsbHFjgobpq1Sq2sLCwXwyOZ8zDLL4suv2Di09RVEDCWI2T4f3z29EPc502rfac9Jthe95PlOiAuX3//v0cy3lv/X1WcVbynYJHrCDHhzNbJifuhoQ6AuBMOeipBTUukRIAqmH/GRgaGhkdGOyZRK++/r96dRjINnCKgYcqmWmcAQASkNPBYI67bQAAAABJRU5ErkJggg==',
    order: 68,
    base_experience: 42,
  },
  {
    id: 175,
    name: 'togepi',
    weight: 15,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png',
    chain: [
      {
        species_name: 'togepi',
      },
      {
        species_name: 'togetic',
      },
      {
        species_name: 'togekiss',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNklEQVQ4T2NkIBMw4tDHxMDA8A+fmdg0gsT+QzSFMoeGMjCsXr36L7oh6BqhmqIE//9f9oGREWYAA5JhECPgGhsYGJgaGBj+qak5iLgavjsydeU7XwYGoY9WujzKxy4fOw5VC3UJssYGBqaGBpC/hGTWz9G5ycbLtJiZiTn94IHfk9qnHsqfmWbMmj7r7G+YkxE2NjQwNTQ0/GNg8FC4cUL8nAjvP8H791/tNfW5H8HAcOtNA9xgdKdCNTZoJwtZVV67KMQmKbN//f+k0uXr58+cmcaanj4LbhuKH0Gc/fsdWBwdD/zZtMiikIPzZ8/y9fdWzF+mkcnAcPITTj8iB3dDggPH+3dv+PWsf39LLr/5GVt8EohH3EkAa8r5/5+BsbGRgbG+nuE/UlyimIIryRFMwWRrBADPIGwP/sbJ2AAAAABJRU5ErkJggg==',
    order: 253,
    base_experience: 49,
  },
  {
    id: 176,
    name: 'togetic',
    weight: 32,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png',
    chain: [
      {
        species_name: 'togepi',
      },
      {
        species_name: 'togetic',
      },
      {
        species_name: 'togekiss',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA60lEQVQ4T2NkIBMwkqmPAZ9GkNx/XAZj1djQwMDU0MDw7/+qUObGa6v/g9joBmDTiM0mDDEUjf8ZGBgZGRj+e2kxSExJqZ3/9dvXvboT+mYyvGH4jM9Gxv///zMwMjL+39CUtN3fzd/j5ZP7DMV9BcuXHmOIgkgh/Ixq4///TIyMjP9uT2zZpaKn6srw7iPD4SNn99n1z3T+//8/I0gnLMBQNa5axcwYFvb3emt5rjAPdxZI1dMXr+Ybtk/pgmqEhzKheGRiYMAMUZCBhDQy/G9oYGJsaCAqOsABCAphqMlYEwFBG0lKOcSkXwCZOFMP7RmNFwAAAABJRU5ErkJggg==',
    order: 254,
    base_experience: 142,
  },
  {
    id: 177,
    name: 'natu',
    weight: 20,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png',
    chain: [
      {
        species_name: 'natu',
      },
      {
        species_name: 'xatu',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABDklEQVQ4T2NkIBMwkqmPAafG/wz/GRkaGhkZGxr+YTMcq8b/DAyMjAwM/0Ea/v//z8jIyAhmIwOcNjYwMLAoBxWIxq6b8BybZgyN////Z2JkZPx3d8rSDkkhofLL5y/bmXeXHd7f0MDi2NDwB2Yrisb/DQ1MID+t9kzy1HG22qQqLc3y7OmrVXIl8eEwA/FqPFHQtspEVyv0+98/DI9evrypXZutAdUAsgjsXxQbGxoamBoaGv6tTygQMNTW38DPymF/4dr1HMdZTVPxOhVk0qrQUOaw1av/MjAwcJUxGGoJW8veLD+66TNySGPYCHM/kmawELomnBphileHhjKFrl79DxanRMUjoaRIdloFAHuOag+H8cjfAAAAAElFTkSuQmCC',
    order: 256,
    base_experience: 64,
  },
  {
    id: 178,
    name: 'xatu',
    weight: 150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png',
    chain: [
      {
        species_name: 'natu',
      },
      {
        species_name: 'xatu',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABEklEQVQ4T2NkIBMwkqmPAavG/wwMjI0NDYwNDQ3/cBmMTSNI7D9Iw////xkZGcFKwHxkgK4RpomFgcGBh4HhwAeoYrhhMM0oGvfv38/i6Oj45+jWrhp+Nvb6Hx8+bmhZui91w4YDH6C2w22Ga1y1ahVzWFjY3wllSereUUmXJPkY2V7dP8+wdNMujdqJm26uWhXKHBa2+i+GjatCQ5nDVq/+2+/BoGBWeOSGgLQa+8OT2z8eutxv0DHhwoOGhgYm5MBCcWrD//9MDYyM/6bmpbT8ljaK+/Lt55SaxsKuhoYGloaGhj/4AgcWkmC/7HdgYHE8wICiAWvg4IgzjBAFqcOVchhhwceIJQ7xaSSYEslOqwDuP2QP6YB8AAAAAABJRU5ErkJggg==',
    order: 257,
    base_experience: 165,
  },
  {
    id: 179,
    name: 'mareep',
    weight: 78,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png',
    chain: [
      {
        species_name: 'mareep',
      },
      {
        species_name: 'flaaffy',
      },
      {
        species_name: 'ampharos',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABM0lEQVQ4T2NkIBMwYtP3//9/kDgjIyPjP1zmYmgEaWJkZPwP0vD//38mXJpRNCJp4m7u7JSrLS+/vn//fxZHR8Y/6DbDNSLb9PDJs33cHGw2z569mKynp1MMtR3uEhAfrrGhoYGpoaEB5CfBR0+ePJGVluY6deZU/LYV27Zpm1v+CwvzeIdsOIpTV61axRwWFvZ38sol1h+//5hnr218lJmDVc9KV8eZgYHhI5LhCBuRnXP+7PkyKSnxzofvP7x/9O6dbYiNzVWYoTC/YvMj065dB5Zqq2tE3L118YWdq7seAwPDa2TbUPwI4sBMjalqlbQ30z3L8ev7ydiw8ECo38COwrAR2amzZ88W5+HhtOUWlZDyc3GZhBwoWDViC3aiUw5MMzSqQMkI7jxkQ7CmVWLSPQDSZJcPxN6jHAAAAABJRU5ErkJggg==',
    order: 258,
    base_experience: 56,
  },
  {
    id: 180,
    name: 'flaaffy',
    weight: 133,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png',
    chain: [
      {
        species_name: 'mareep',
      },
      {
        species_name: 'flaaffy',
      },
      {
        species_name: 'ampharos',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABMklEQVQ4T2NkIBMwkqmPAafG/wwMTIwMDP9wGYxV4/79DiyOjgf+MDRosa1q0P4bxrD6L7oBGBr3NziwODYc+POWwVT7ITuTh9HPk73YbEXR2PC/gamBseFf4A5Dff/r/9a8+8xZXVR3YlVDgwNLQ8OBP8gGwDXCNBVnR8nLh7++wSDBy3H59runG3e9MX418crLhgYGpoYGhJ/hGmFO3DVRJfabMu+is3+Vflq/ecp+vOlddePDW20zjY1Z08+e/Q2zFcWp//8zMDIyMvxvbohbKiz8JOrH6Q/rmBc9np3P8HpHAwMDUwNSKKMHDoj/f2ZOhy73rfcyMbs6t4NsQNcEEsMI1f8MDIyMDAz/wRoaGJi0GhgYwxgYCEcHREMDk9bVq4xhqzHjD6sfSUl+ZKdVAFTRcw9Yi0NEAAAAAElFTkSuQmCC',
    order: 259,
    base_experience: 128,
  },
  {
    id: 181,
    name: 'ampharos',
    weight: 615,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png',
    chain: [
      {
        species_name: 'mareep',
      },
      {
        species_name: 'flaaffy',
      },
      {
        species_name: 'ampharos',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABqElEQVQ4T3VSsUtbcRD+Lk80YHApKC4iVSxtFaKTUCyRxkHRrfmJlUDAJWDxbzgHcRCti04OqVP4RQXFVgxKElpSHdQstWlEHGyKOPmkQ0l871eepjHRl5sO7r77vrv7CJVCgUBQlcpkV5ASmhAwYIGtsBlgC7xtlqiGQO42t2EvBxYakp86R/ZcDfN63lyZ9EbHC6qs3qL0IlApEBHUySjqznrd65mOFk/6TNdPP+40bW3h+iFrGaOHURVn3AB4Bj+O/XrXgWfj0D8G/JSAJgDj/03KgFL6NCEiRjS6uvRHPx/LpbJpNTUTHgEmFUBkJ5WVcjCRKWXM1T/Unal11jRuy+Vf5nDg+KnXPf18JxVXPmgUuWO931FKjYQw5MIH96u+gaNc3kTyRwK/V4Jrb8Jti13I7JbKLQKZ4WCGOTHobWq+uvxi1DypzzdeZ7+2Xrz9zNlUjD1VvRy39i+8tpAws4OZzfDmZjsSscHgzOz+3PC7l66e1wfiffCbUoqI6PE7ShxU9q8AB5whDv196DBb51iyX3z3kS8SMUsvWQqubLmK7r8r/AOki6MP3Oj/iwAAAABJRU5ErkJggg==',
    order: 260,
    base_experience: 230,
  },

  {
    id: 183,
    name: 'marill',
    weight: 85,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png',
    chain: [
      {
        species_name: 'azurill',
      },
      {
        species_name: 'marill',
      },
      {
        species_name: 'azumarill',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABdUlEQVQ4T52SzyuDcRzH359nz6bEwRzmVyklRf4BsfW9mJNyoBwoLk4uLjQH34uUHxdqpYTTIhdRioOHOAg7LdQutnCYKQlj9mwfbfZsnthl3+u31/vz/rw/b0KRj4rkUBBkZiIillIqU81XRH1byd9D/oAspQKXSyEhdGa2EFEGMIQM2ASm1aWUqeynBUAycjbtSCZijTUd06e/4RyYnkRSpsIn3oovqON2e2WPqpbchG/99y/RY0fHwGHvf2BagAFY9zfmjlqaGtqCwQBEVyeeHyLvC94Z7Tl13u/14g3I5MJ5q8wEIvb4Lg5DSYsYse5+Op3tOlQqW1/dPBiaWHYzs0JEmVVyoKZpqhBC39vZWqyrKh+tsUXxEU/gI67j7DLQPTi2tKtpUhVC6ibQCMbngYNrJ9fuXkurbaoSv37UQyuz28OAP2bYNIE/kYOIMrsCmK8HWp8A9/t/Jfl7RxNcuFeFmkOQkiCnOBtD1kVeqOiufgN5J5kPNzTRXgAAAABJRU5ErkJggg==',
    order: 263,
    base_experience: 88,
  },
  {
    id: 184,
    name: 'azumarill',
    weight: 285,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png',
    chain: [
      {
        species_name: 'azurill',
      },
      {
        species_name: 'marill',
      },
      {
        species_name: 'azumarill',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABkElEQVQ4T2NkIBMwouv7//8/SAyG/zMyMv7DZjaKRpAmRkbG/8gKsYmB5OEaYQr+///P8fr1p+5fv39zf/72Y7amqszx////MzMyMv5FNhBZIwsjI+OfgzsPhls52a1gYWFgOHX47E1zOxNdBgaG3+g2wzWuWrWKOSws7G90dKFul4XqyZ9cvJxnvjFcD1O2MGTwUv2J7k9kG8HOObNsQ5aGqd7U/4KCDA/efPt5ZukW0/u6juHvrp2dNqUh8hkDKPAYGcEhCAYNDQ1MDQ0N/zZGJTlq5GQukpUUl3m+b/+XW9MXpd43tNX8w/G2LW/yZLjNCBsbGpgYGxr+7WRg4HZo67jFJiQg9YeF5ffm4+efPps7NT6HgeHQqtBQ5rDVq8GBhKHxXFmDlPTvT9e/f//2QEZZRe/8vfuFptOnTvg/cyYrY3r6b5gLscbjgoJy73UTOs/EpmXacbOzHPeaPPkJzCtYNYIE/0OdjJIIGBgYGRkYUBIGRpKDaW5kYGDQunqVMXT16n/omlD8SGpaBwAAbLcPaK3qVwAAAABJRU5ErkJggg==',
    order: 264,
    base_experience: 189,
  },
  {
    id: 185,
    name: 'sudowoodo',
    weight: 380,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png',
    chain: [
      {
        species_name: 'bonsly',
      },
      {
        species_name: 'sudowoodo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACBklEQVQ4T2NkwAH273dgOXjwwL+GBoZ/2JQwoguuWhXKHBa2GiT8FyoHUvMfXR2yRriCNSWOC/7L/nvWsfrni7NHTkz6/5+BkZERVTNc4///ocyMjKv/vjqjbyMqqnL4y8evDG3l5wvbt7+csL/BgcWx4cAfZFvhGqFO/HvnpJUTy3/mlldX3kt8vP3UwbXz/aOGBgameoYGsD7Ghgawn7E6FSS+oprh6pz5DB57njE8+r8qlJkxbDXYzw0NDUwNDQ3/wBphftgyL0lJXXVeNofwIhsZaT2zD4cNVrPK+7Xw6G66dL+txPzH07tMmlPXH//f0MCEovHM2jTJ939m2eo7Pu4RFZWR/X+5iuHJh/b7sraFJtvtbjv9l3oh7L3yzMxVoaHMcKeC4s3R8cCfDgYGudTn924LSSiyMLxbxXTnSviU5QtilzDxXsqumXQxn4GB4T3IK4hQXcXAzBjG8PdsH4Mts2zlLhHrUg7Bv9sYvt+PYdi3Tfv77tuMCbPXXlkVGhrKvHr16r9I0fGfkZGR8b9Dw36ORnbHA084GuaJywhoi/5oitCPfWfEwMDwFOTEsNWQQELSCInk9f0NAgJCz3Qc42cd2dzCIC2jn5Fi6DujERwg0KhAjw546EJC+j8zIyMjNAoYmNDTLEZaBbli1apQprCw1X9B0cSwmoEJ5Hf0tAoAJ+HcaL2Qc7AAAAAASUVORK5CYII=',
    order: 266,
    base_experience: 144,
  },

  {
    id: 187,
    name: 'hoppip',
    weight: 5,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png',
    chain: [
      {
        species_name: 'hoppip',
      },
      {
        species_name: 'skiploom',
      },
      {
        species_name: 'jumpluff',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABV0lEQVQ4T2NkIBMw4tLXwMDAVN/AwMDYwPAPmxoMjf8ZGBgZGRj+IylmBHHQxEB8BEDW9EGOQZDZnoGVdzHDK5AKdAPhGpElLqUpLP337KkSw7d//97ySdxy3vA0EV0zhsb7DAwcT8Llzr/xU9P4++QTA/PEU28esAmoFj748AHk7wYGiJ9RnLoqNJQ5bPXqv2sZ9GQuLua+8O/XHxbh5NOWhQwM1xsaGJgakAIKYeN/BkZGRkigTDngtPnwx1c+AuxsDNIv/m6uS7joBw0JkHqwGrjGhgYHloaGA39mFxu4HtZ5u0uDX5rhOdM3hsdX7zPIT+Gxn/j8+SEHBwaWAwcY/qA7FWxaQYKBwITdF1z6o+z4br9+82/a2WtPQgVULq4+fOc11CJUG9GdgiXS4c7ECBx4kDswMO93cGA4yMDA0HDgAAPDAYa/ML/BDMSZ5AglYbI1AgByIn4PgZy6rQAAAABJRU5ErkJggg==',
    order: 267,
    base_experience: 50,
  },
  {
    id: 188,
    name: 'skiploom',
    weight: 10,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png',
    chain: [
      {
        species_name: 'hoppip',
      },
      {
        species_name: 'skiploom',
      },
      {
        species_name: 'jumpluff',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABbElEQVQ4T2NkIBMwkqmPAUNjQ8N/pqtaqxm1r137z8Bgz9TQ4PgHm+EoGhsaGpgaGhr+oSt0aNjPcgDNALhGkE0NDYz/opsOWTP9/c3+9d3zW0zCMn5rGhxmMjAw/EU3DK5xZtpM1vRZ6b973LM6b5tGlX3jE3hsfGmH7GIuYT0bJw+OiRF5FxkYVv+CGQDTCKL/MzAwsLlX7F6tpaHt9+EfJ8PbJw/u/f/1chaXkHT7tk0LtD4f6L3BEBrKzLB69V+4jf///2dkZGT837f03KLcKMPYBy/+MFQsPPN77YI5CVr87zjCPNctAHkF3UaGhoYGloaGhj+FtR26+kZmR7i42Li37L+1f1FHUr+nLcPp7YcZXjMwMDAxMDCANSOF6n9GBgbG/wxBS2QY1u0XYGBQZRRN0+J/PcvvCNQWmHfAXLR4hGpGCUKwGEgEFAZwgCXl/GcMDV0NchLDau3Q/wxI/iKgkbhESHZaBQAu5oAPy4hWPgAAAABJRU5ErkJggg==',
    order: 268,
    base_experience: 119,
  },
  {
    id: 189,
    name: 'jumpluff',
    weight: 30,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png',
    chain: [
      {
        species_name: 'hoppip',
      },
      {
        species_name: 'skiploom',
      },
      {
        species_name: 'jumpluff',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB3klEQVQ4T2NkwA4YGRgY/jMw/GcMXcXAtDqM8S+6MpACVPD/PyMDIyNDaOgqptWrwzA0wBRjakQyxitnle4vQSnnPc02E3DbCLHpv0v9iRLefz+TPtw5G/qGW4jDikfgzGNOHvVt7S63QkNXMcNcgWJjGgMD66zJj0QLds2pY3p8XVz7wurev36Vh9PkjDUZpoTcwKkR5pygpIWO7OqGm8U/vWGVuHF4bsXa+qxVoauYw5D8jGwjo1n2HiEhcU41SQGhrayfvwn+VdZjuPj0YdeZYpXy0FX/mVdfa/zP0NDwD2QBRCPUf6o526qd1GQLdDVVRZh/fPzFyCXANmf7kS+cX19FHJ4WsQ0UBjC1cBtX/f/PHMbI+Ldj+s4IMyv75Y/e/vr55eN79qOnTl94zCZ3SPT7xxnrOl1uMII0w20EW/qfESrIuHbdvguqyop6t+/c+7ZqxYxJK1ev3mRfuHHtn38MG49O9M90aNjPgvBjQwMTyP3q+dvVb759k1csfnvLqT8GoYfPnzgoc6jrOrtvoyEzO+e1W2vKDjM0NDBhJICGhgaWhoaGP2C/e05iZ9ie9xMl8qHhgTPlpM2cyTorPf03WFNoKLPDa23GAw4M/1BDFUdKh4YBODDQAQA/qMeUBgkEOgAAAABJRU5ErkJggg==',
    order: 269,
    base_experience: 207,
  },
  {
    id: 190,
    name: 'aipom',
    weight: 115,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png',
    chain: [
      {
        species_name: 'aipom',
      },
      {
        species_name: 'ambipom',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB1UlEQVQ4T2NkwA4YGxoaGEFS9Q0N/xkZGP6jKwNLIoOG/Q4sDY4H/iCL/WdgYETXjKERpKEjzZj/ByOXtJiQgOjH778fVk7Y8SB0VSjz6rDVf2EGomjMneTJ/lSc0Vz6wq3rIm/ly/8zsgozSD5Kb2i49gus4T8DIwMjxNlgjQ0NDEwNDQz/fJc5iHC/53j9kJHxQNqn3+s4/v2rWVm1T/3ntgBhvnufmVfm7L0F0wzV2MDU0NDwz2uhlxrPy9/rxR98v+KswSvAw/Tfbdr332dYOVhNfvz+W72xaHebw34HlgOOB/6gOLWBwYGlgeHAn0p/Qy07D/Hzn779/bf7/MdNX9V4RL7ysR3bVLCjFuZXFI3/V4UyM4at/rt2gp+dnBjDwVNXPjRmtx1qAHlHnEGP+yXDpa/YAgdkCNjja/u9TuqrcZst2vY4oWnqiYWrVoWyhYWthgQQFMBtXBUayhy2evXf5hyHADZ2xvp/DL8PvnrBICvKxz2havrOw6GhocyrV2OJDlgkV6aba7XPfPCGgeHlq+YUF80ff38btM4/uBw9EaD68T8DIyM0nrZN8mT3ytv+Exx9SOJYEwAsTqH0v4aGBiatq1cZQV4gmFZxJHoMYQD6asAPTuMSTAAAAABJRU5ErkJggg==',
    order: 270,
    base_experience: 72,
  },
  {
    id: 191,
    name: 'sunkern',
    weight: 18,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png',
    chain: [
      {
        species_name: 'sunkern',
      },
      {
        species_name: 'sunflora',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABuElEQVQ4T2NkwAb+/2dkaGxkZKiv/8/AyPgfmxJGTMH/jAwMyIrR+RAdaBohioJK5xn9/cvrZKirMqch0fADAwOmZhSN8+c3cCQmNvwIDZ1pw6r1KfDCFeaT19YWrWr438DUwNjwD9l1cI0wSaueVNM433eTuP4Jqt05I3i2KbbbDaShoYGBqaGBAa4ZrjFtJgNrPLO7232uf6G61vzxl+59ZhB9rclw+ueywNrYVxsY/jMwMjAywAMKpJHx/38GBkZGhv9HNvvvvs/6QkT6t7DUr0//xW4zf/gtK8nGqvZDcp6W+4rk//9DmRkZV/+FB85/UKCDTJvEwB4nzlDhLmKVKyfKL3z0x6k/TJ/5mHS/a4V6+mxdt2pVKHNYGJJGsB/2O7A0OB74w9DPILnYyPJuoJwe54Gvtxi2PTl5fJrHNytowIBcCHYuUuAwMDUwMvzrWuA8++7fWynip2RSPlk8t+LgZvZ5GsattJjh0lfkAMJIAEsmxgXe/vbgY2PloX2dnTomgnycFT82iSTlbd/+Ce4lzASAiKkzM9NYTdJn/caaJLFpBAUASDEsEJBtwZoAcJmMSxwAiCWtDw/mTi0AAAAASUVORK5CYII=',
    order: 272,
    base_experience: 36,
  },
  {
    id: 192,
    name: 'sunflora',
    weight: 85,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png',
    chain: [
      {
        species_name: 'sunkern',
      },
      {
        species_name: 'sunflora',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABVklEQVQ4T2NkIBMwousLXRXKvCp09T9GRob/+MzE0AhT/P8/AyM+zRga89d4mbN++3OlJ27X14aGBiawQfYHmBgOOvxraGj4BzMYrrHhfwNTA2PDv85TwTcZ/zGdL7NYHfH//39GRkZGhJP/MzAyQL2AobF5v5fHxz9/l/298sekv3DvvYLlHgqC0pz6///+vdrguOkOA1QzXON/hv+MjAwQ0/urU05Xsx1hcJAWf24oyyfHL8im9Pndj/5mj631MFfANe5vaGBxbGj4c7+6IFJCWHPZzS+vGfY+uXZ2ltQuv0Axje8dWUfeI4cywsaGBhbGhoY/l1LLe3WVpIsYGNkYVu84uyDswOxEbNGCHKogNsipfCvdEiv+sjNYvvr1eUfBzjWdoNBtaGgAycEDCj06YJrRXYWRGDDi8T8DAyND6ComBu1r/xmR4g3duThTDqEkTLZGAHashw8ARN4TAAAAAElFTkSuQmCC',
    order: 273,
    base_experience: 149,
  },
  {
    id: 193,
    name: 'yanma',
    weight: 380,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png',
    chain: [
      {
        species_name: 'yanma',
      },
      {
        species_name: 'yanmega',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABQ0lEQVQ4T2NkIBMwkqmPAafGhgYGpvp6hv+MjAz/sRmOobHhPwNTPQMDAyMjwz+QBpABDQ0QNjJA1fifgZEBasOZMwxcJiYM30CKV61iYA4LY/iLXSNM00Y/3kPfNrUxfw8LYuf6+Inn7s5wjWqGSzNnMrCmpzP8hmkG2whzjv9UZVlOA+7jHhIM0gJPJRgYWb4wnP31+FTTRdYYhvx7txkaGJgYoM6GOxXktwZGhn/ey2QaFS2k61h/fvt779svhs+fmJh/3XqTcyT99VSH/QwsBxwZ/oAsg2sMXcXAvDqM4a/JBEV1ZqGfnSzMrB7sjIzsT889jr3Z83cJsiYUjWC3IzlFJZpB6zsXK5uElOiTs43P3jAgBRymRqjmhnoGBpCz4aGIZCBK4GBNPaEMzKGhDAyrQxn+waIIdzySkP7ITqsAWcJrDzkFRlwAAAAASUVORK5CYII=',
    order: 274,
    base_experience: 78,
  },
  {
    id: 194,
    name: 'wooper',
    weight: 85,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png',
    chain: [
      {
        species_name: 'wooper',
      },
      {
        species_name: 'quagsire',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABoklEQVQ4T2NkwAH+/1/FzLCagYExLOwvNiWM2AT////PyMjI+B8k9/9/AxMjY8M/dHVYNYIUPThfb/X788cfqnYTziEbBDMAReP///+ZGRkZ/75+vLlURMag6+enawxPb+0MUTbtWwtyOiMjwtlwjf//MzAyMPxnAmn88HzVMX4JY0sGhncMT67vWy6rVR71//9+FkZGxz8oNoI0MTIygP0EAtdOFLt+51bYxcv44roIE2uYkFbDFQyNSJqYv346MfvLxw9yjcvU37JIiIc9fPJ8w8Zq5UCYgch+Zfzf0MDE2NDwb+d0KzGHqJoX9z5YMS5e+Z9BSJTj962vHKwhalsXOlmy8z57fHOinFbOIVgog/0I0/zxmrjF/AN9pXvfOQWJCfAw3Lh9iWFL1WcGATFLhjcPll4UVcwygNoKChAIaGhoYGpogMSXaszUSE4mzpBL71h/Pep6cZeblyv166evlXLaZfNQbIRp3r+/gcXBof4fIyMjeoRzMDAw/EBOBFgTgEPDfhaQogMNjn9gAYKegnCmHGTT0aMLJEeURmzpGQBNX7wQfnD8fAAAAABJRU5ErkJggg==',
    order: 276,
    base_experience: 42,
  },
  {
    id: 195,
    name: 'quagsire',
    weight: 750,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png',
    chain: [
      {
        species_name: 'wooper',
      },
      {
        species_name: 'quagsire',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABd0lEQVQ4T2NkIBMwYtPX0NDAdPWqFuOq1aH/wkJXM4UyMDCErQ77i6wWq0ZiHIFV48LYw+23F7988Y7hk6igKP8u3UBF7YhZRtP/M/xnZGRg/A8yGFkjiA0W7I2fdsbN39z491fWf3evP2G6de3B2eoNWSb/G/4zMTYw/kPXyNDQ0MDS0NDwpyJwood/Mv8mESE+1t0b3n7eNXVr4IavG/aGhoYyr169GuxXFKc2MDQwNTA0/GNgWC41JfPRKjYOduvblz5s7JqkFcaoHfbr////jIyMmE4FhwlMsje/ZOLnF4LqJrYMF7i1qxscHRl+/P/PwMjICPEOvlDlYGCo1Q5i4DRYx1A1d1XoKmbkKEHRCDNxSqWzsJWFWdh/Bq70vr4rqUsPrjwNituGBpA3IADVj1DJqQ2hEtJiIgc5uBgFX72+oxNXuusVXo3IfmRgYOAK9zSWDDb3fRzW0PALPVFg9SNy6OFKRTgDB+TfxsYGRmR/IRsCADMtmQ+lIMf+AAAAAElFTkSuQmCC',
    order: 277,
    base_experience: 151,
  },

  {
    id: 198,
    name: 'murkrow',
    weight: 21,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png',
    chain: [
      {
        species_name: 'murkrow',
      },
      {
        species_name: 'honchkrow',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABDklEQVQ4T2NkIBMwkqmPAavGhgYGJgZ7B6Z6hwN/QQYzMjL8R7cAQyNIU0MDwz8Uhf8ZGBnQNKNobPjPwNTAyPCv9JSBATc7i57ou2/rPgkLsVbqHXmP10aYxvhNEtrXngu083Mwstvoc91oMDibz4BmK4qN+/czsDg6Mvw5edAymU/4QvfLN7znu6b+j962+vWL//8ZGJH9iqwRxAYHwv59tld0dGS1nzy59VLg4xkFRUeGH+h+R9H4/z8kBGdPFVv247tC5Lfv3+aW115JAQUszFCYX9FDFaogjdVFf5bOnosMlxgYGEBRQlAjONrQTMfQBFOELfEwhoaGMq1evRoUnxiRj08jwZRIdloFAPQ/XQ+ixxDvAAAAAElFTkSuQmCC',
    order: 278,
    base_experience: 81,
  },

  {
    id: 200,
    name: 'misdreavus',
    weight: 10,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png',
    chain: [
      {
        species_name: 'misdreavus',
      },
      {
        species_name: 'mismagius',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABkUlEQVQ4T2NkIBMwYtO3ahUDs6goA6ODI8NfRgaG/9jUYGj8/5+BiZGR4R9McUMDA1NDA4IPE0fR+P8/AyMjI8P/fSsY9FkYGcxKwjXWnWK48RabZrhGkPPCwhj+Lu5mcDCyNNuuJCfAce3mriPGrmlODAyzfsMMxbDxzBljVhOTs79PbmGYK6dUnvThy89fTD8msJ3ZzWoS3fz7LLoXwDbCnTLNWWk5x4N2XVHpMA5hToavH6+8W/VM9N5fAYHKjuADexr2O7A0OB74A9ID1hi6KpR5ddjqvy1bHUy+ffqxzYb3nagEKwPDiQc/fj8Wl3siyPbPtczr2N2G/w1MDYwN4ICD+xFma/IcS5WNhy/yV8WazLn38rvYlOjT0siGYw1VmInl8yytPv3+WfT1zedX/xlYOf/+/TdlWd2Ns6GhDMyrVzP8RbEROZKLZpmm/mf6+7g/5dyO8BoV5U8fGV5vn3znE9SF4ASBNeXADEGLApBaeCrCkeRCmUGaw8JW/2VoYGBiaABrQEl6eG3El/4BEOqoD5Edl/0AAAAASUVORK5CYII=',
    order: 280,
    base_experience: 87,
  },
  {
    id: 201,
    name: 'unown',
    weight: 50,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png',
    chain: [
      {
        species_name: 'unown',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB0klEQVQ4T2NkIBMwkqmPAa7x////TI2NjQwNDQ3/GhoamBgaGhgaGBj+wQz+//8/49mzZ1mMjY3/MjIy/oNpZGKAKmr4/5+pgZERrgGk8f///8yMjIx/YYaA1IA1Xnn5plP49X05SR3TSBC/JNZNUXHxk++iqxpeh4aGMjIyMv5hYPjPeOHVu8R/v/5cN5IRPw7WeOjN1wBbYab1T5++3L73yLkCzd725U/5/14I3HMuGSR/ev9RHc2fN+ZxuyeZnn7ztcRMlKcX4tQz/1nvSj5eIMLAHLX70YUfAl8mcuz/I/73wRcd90LjNCsZRYEm8aeXGBj+MjGc5VOpNxHkbGIEeZqRkfE/SP/Ro9d0Hl3ZkfTy98b8u6ysTGbMCW+UbH0uswoyvOT9/vE675VDNy7o2O32kZd/D7YRpHn16tVMYWFhfxlEHcKLBZiapfiuib2RtmZ8uWntAm0GBlAo3i5iYJgGUg8KdUQ8/v/PyMDI+D8kKdXz0stnWnxPvh+WtzTM/H37Mos3258GXi3DjwLy8p+98vJ+gjSjJwAQH+xsEPBkYGDfzsAAVogOMFJOaGgo82pt7f8MDQ3guIQlhnpQfCAZSijJobgA2VZCGnEmZQD/ibURaDBpFAAAAABJRU5ErkJggg==',
    order: 282,
    base_experience: 118,
  },
  {
    id: 202,
    name: 'wobbuffet',
    weight: 285,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png',
    chain: [
      {
        species_name: 'wynaut',
      },
      {
        species_name: 'wobbuffet',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABMUlEQVQ4T2NkIBMwkqmPAafGhob/TA0NDP8ZIEr+o1uAofH///+MjY0MjA0NjP9giv8z/GdkZGBE0YyiEVmBmXS28KmnU9/i8gpcI7Km5JUvOxk5uQu/PHu0LWDLJeY/LH/2xmyImbAqdBVz2OqwvyDDwBobGBqYGhga/i1j8BV5FR61+bmXjYXy52cMl74yMaifuLlc/NXHaWFHs480NDQwNTQ0gL0A9TnED1PM2oT/Cop47eP9JsUtJN50g4Fl/jk5kSUM1Q7HGBjBfgapB/sV2Y9wQYb//xkdes5++/XqyW0uDsHLcj+ZM+Z12XwGiTMwQgIJa+BYJ83l/cvMEPz9x9dPFxfnrQMHEJImDI24E8N/RgZ80YGs0aFhPwvDgYMMBw40gEKRcAIgNgmSnVYBJkx4DyrU7BoAAAAASUVORK5CYII=',
    order: 284,
    base_experience: 142,
  },
  {
    id: 203,
    name: 'girafarig',
    weight: 415,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png',
    chain: [
      {
        species_name: 'girafarig',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB40lEQVQ4T2NkIBMwYtO36v9/5msHDjA2ODr+wWUupsb//xkZGBn/gzT8//+fEawAykc2BKHx/3/GBgYGxgZGxn+TDt22v/vmB+/EIN0tIMVpM8+wzko3+Y1VI9h0Rsb/Nbtu5ctpqk54+/0fw41DB+YsTHFOBWtAcgnYEVD8v2H/VR7mf7ziN69ebhNQkA/7+/3rz2+fP7M/enqz38DA/lS/v84aBgYGuJ8ZQ1etYl4dFvY3rmqanpSL+4W3T589//72nSQbDw/Dr69ff/PJyrCxcbBvmuCl7d/w/z8TyCswG2FOZ4mdu9Xg78fvsWxcfHkMTIy/2dk4Wd9dvbB2dXdOCHrowgOnYf9/lgZHxj8Vh5+E8oiIrXpx/er3X5+/cv68fPXMw5+v5rxn+lN+4/LZjJ/7tuxiCA1lxtCYtvjINEVzq8xPr54zvLl3n+HH29cMLLx8DIzMLAxH181xvrl58b7Q0FUIjTC/RvWv72VgZEh/d/9hBq+EcBgTC4cvw/+/K5kYGbcsLw1fAgtdjATgm1bP9YednXv75KrXBg4BAsLqRpp7Z9Ydh/jxPyMDAyRxoGsE8cESyJHe0PCf6QDDAaYDDYgkiCWt/mdsaGhkbGho+AdyVmjYaqbVq8P+oocqAMql0ROssf/lAAAAAElFTkSuQmCC',
    order: 285,
    base_experience: 159,
  },
  {
    id: 204,
    name: 'pineco',
    weight: 72,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png',
    chain: [
      {
        species_name: 'pineco',
      },
      {
        species_name: 'forretress',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgUlEQVQ4T2NkIBMwEtL3//9/RkZGsLL/yGoxNP5n+M/IyMAIVnRm5hlWk3ST39gMx2ojTMOWni3uvOzcJva5jq3omjE0bk6byeU7K/0bSOHcjEnRwhJS5fw83FmOJZ5H9jfsZ3FscPwDkoNrXLVqFXNYWNjfVRWrujjZWK77NgUtOdi/M+zxkweyXJycb4Na4mbD1KBohJm2tGFtq4uRSdXlW9cfnHj85NPr6+fTzPUNg6JOp1QzHGAA2wbXiBQgPOub18xSUVAK/PbhC8eT39/nSnNw/T10/PjxssVlC1aFrmIOWx32F8VGEAcmsbxo4TILXcPI30z/GCT5RBhu3LvmbVrstg2/H0sWe3/+8dPLTFtDZ+uBXRcZmJmsnU1tj5oWOuf9X/WfmTGMEcNGUED9r3SuFObV4mXSV9aP9C7wXlYZWamqqaD6L6496SQ0MYDjGCU6YH793/CfibEBnFzApoOTDSQFwVMP3pTTwNDAxNAA0djQ0PAPb5IjlHZh8gD8x6gPwuQzQwAAAABJRU5ErkJggg==',
    order: 286,
    base_experience: 58,
  },
  {
    id: 205,
    name: 'forretress',
    weight: 1258,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png',
    chain: [
      {
        species_name: 'pineco',
      },
      {
        species_name: 'forretress',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABk0lEQVQ4T2NkIBMwYtHH2NDQAML/8JmJovE/AwMjIwPDf5CGhgYHFgh94A82A5A1gtj/N29O49q4hiFzzsJZvSANq1aFMl+79poR3QC4xrS0NNZZs2b9ToqyThYSFLaVFP3T9uQZZ1D/rLUdeG1saGhgAvmroyph/bV7//U/f374UV+Nq93Y9Nu+PXs5YifOfT2TgeHsNwYGBrDLwDb+Z/jPyMjA+F/dOonXU+Pf+XfvfykvWrddn4Hh/aXESNenylK/ztX0HvT939DAxAgNNLhTQ0NDmVevXv2XgUHSVlVXZ6+itNQJDjYGiwNn73R8enq0DupcsG0gNlLghDIzMIA0ikh5upo8EBdi/Xf/xW8WY9WPu/vmHPfEqdHBwYHlwIEDf1R1nH1Eef7Plxb6OX/1kfePzDREPT99+99648qhYwhXodgI8bSVlZf8///MHscf/d3P8HTbbT0Tb23W/z8fnz275yMsYNCcCnYM3A/YUhTMf9g0gsSYQkNDGVevXg1OctDkBwoQcKDAALa0SlSyBwAv9KEPyLCXxQAAAABJRU5ErkJggg==',
    order: 287,
    base_experience: 163,
  },
  {
    id: 206,
    name: 'dunsparce',
    weight: 140,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png',
    chain: [
      {
        species_name: 'dunsparce',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABUElEQVQ4T2NkIBMwYtf3nzE0dDUTSG716rC/2NRgaAwNDWVevXo1XHFDQwNTQ0PDP3TNqBobGpgYGhr+JSWV8d7+zKf588cPsVObW7YQshFkyH8GBj9xETPhmUqSUv5/f/948OPzO++rh+dfY2BoYGJgQNgMt9HBwYHlwIEDf/QsA+MURfgWvvz4j+Hr///3/n567Xft4s6r6E6Ga/z/v4GJkbHh3/q5PvWc/3gbdu9nY+hdtq7CJaXn07f3r6SPra2tQdaM7EewU/sKGaQffZI13XXHeabwx/eHBNXMQ+5/fHn/8s6JSlC/gtWhhypYsLWhMOrguQ9Lvrx+v4br+oZpV2Ucvjy/cuAMciBhiUcHlhndKt7fvryI+Pf/z4KSph07CYUqhnxubi775cmX/x4IFf3PgBS3IIVYU05DgwNLQ8OBP/hSI44kRzgBk60RAJlPkA9R6f7UAAAAAElFTkSuQmCC',
    order: 288,
    base_experience: 145,
  },
  {
    id: 207,
    name: 'gligar',
    weight: 648,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png',
    chain: [
      {
        species_name: 'gligar',
      },
      {
        species_name: 'gliscor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB7klEQVQ4T2NkQAP///9nZGRk/A+j0eVhfEZsEv///2diZGT8hyYHUvsfp8aKinbBjo7K9wsmTMoTkZHOe/Xp89qkpIRyqAa4ZgwbF8yePYdRWOilAg9vAT8jI9eh69d35uXl+f7///8vsivgGletWsUcFhb2t6urP81GXWcmMy/b/yef3v/78f79QzYevvWhocElyP6Ga/z/v4GJkbHh38Y5DCpWOhPOM36W5jl28w3DU1amm3ysf72ik7LuNTQ0MDU0NID9DtYIM2nu3CO8lsyXzwkZXFX59pHt7+0Vf5gPf37m2LJkzYFVDQ1sYQ0NvzAC5z8DAyMjA8P/m4W5R7gCwqw/nD745y8TG8tXITF364SEXbgCBxZaTK9b6i6JSCpov3x879ebC2fYHrFzuCv++/X8xetvzx0PHHgDswDi1FWrmBnDwv7e8E1xEooW3cvB/IeB7RYbw1dG1r9Pzp5n/s/CdNRg5XoHBgaGPygaYZ7eaJ4iLuvEcu+9yFFm2S+mr8R/isjuOn1qxdPn3wsKrpx8+b+hgYkROXDAtkL9uLZnStqPkj1nudNYfwnIG0xzqK62BcmvCg1lDlu9+i/WlPOfoYGJkQES3DAAsqWxoYGhgYEBRRwj5exvaGB5ffXq/9DVq/+BQhlXIgcAkSDcD8Sp1zIAAAAASUVORK5CYII=',
    order: 289,
    base_experience: 86,
  },
  {
    id: 208,
    name: 'steelix',
    weight: 4000,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png',
    chain: [
      {
        species_name: 'onix',
      },
      {
        species_name: 'steelix',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABZ0lEQVQ4T2NkIBMwEqEPpOY/ujqcGleFhjKHrVr1j4GR8X+DgwNLw4EDf5A1Y2g0Nk5jPXt21m9CLkHXCHbWXAY/3md6zNaXZPiFNP8wFrK+eDGv9tL2mQwMDP9gBmI61Tk4vuoHl9sXEd6gTwLCv7TY+fjOXT+2cMXh9QkMDQ1MDA0NYM0wjUwg03QZGAS/uMa+sNQ2Zvv49hWDwa9f//l+/mYsf/uwkOHwhgkMxmmsDFBvwG10cHBgOXDgwB9Pd7+mN8KqtSJ87N9+/vrHcefp82eSb17EnTy7cz9DaCgzw+rVf5FtZGhoaGBqaGj4t6qPgXPl2bJTRlLsOrcevWI4cvflurtnNgT///+fkZGRER4tKH4ER8Hq1X+XMJjL3PExm3WBj8v87sfXEy5vndcMMxhn4ISGhjKvhjqHoWEqD0ND9hdsUYM1AYBMBykGOR0agMSnHIgt/xkZGBD+wptyCKUYmDwAopGJD7onxxsAAAAASUVORK5CYII=',
    order: 143,
    base_experience: 179,
  },
  {
    id: 209,
    name: 'snubbull',
    weight: 78,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png',
    chain: [
      {
        species_name: 'snubbull',
      },
      {
        species_name: 'granbull',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA/klEQVQ4T2NkIBMwkqmPAafGhoYGJpChDQ0N/7AZjlUjSBNMAzIb2QAMjTCFKSkpMkJCQgxdXV1PsGnG0BgaGsq8evXqv62trTOfPHnCMH369PRVq1Yxh4WF/cVpY0NDA0tDQ8MfPz8/x8LCwn3v3r1jCA4OdmJgYNjv4ODAcuDAgT8wzSg2IjlJpLOz88TPnz8Z6urqLBgYGN6gOxerxnnz5oleuXJl95cvX/6/fv3aff369a/wavz//z8jIyPj/6ioKHkWFhYlAQEBhidPntxbt27dQwYGcNT9x+pUqCCKAlxiuBIAY2hoKDgBrF69GpQA4Dbhs5GoVEh2WgUAMlZyDwElNUcAAAAASUVORK5CYII=',
    order: 291,
    base_experience: 60,
  },
  {
    id: 210,
    name: 'granbull',
    weight: 487,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png',
    chain: [
      {
        species_name: 'snubbull',
      },
      {
        species_name: 'granbull',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABz0lEQVQ4T2NkIBMwouhraGBqYKhnqK9n+N94gIFZy4Hh/+rVqxlWh4X9RTcfofH/f0YGRsb/2BwQumoVM7pmiMaGBiaGhoZ/Ls1bND8ycEs7ib0+rWDo1PTx20++U9dezFyXZXyi4f9/pgZGxn8wg8EaHfb/ZzngyPjHc+aVgm//GGMdJf++UbHSdXv1/A/DzXvvGS5df+FwvErvYOiq/8yrwxjBzoba+J+JoYHxn0XBdgVGDe3L9kJ/eILWKf06a7/93zJhV453xw7VXZ3g1OzQsJ/lQIPjH4RGkK0wweLDsVFGWotCvpz9d4JFlanrDfMf86fX3E5O8tjPELqKmWE1JKCQQvU/IwMDJHBUO+/dvy2uqMD64d0vT3F+tttPH029XqKU49Dwn+VAAyOqjSANxjPPsJ5NN/mt0XChSFxev/fzu8dfRT+d6w03FJyTFGD/GDnEkeMRxAbb6Nx+oukdv1Yty98fDBzXtpwMUnn1++d/jsqKkoIjq1atYg4LC/uLEY/WZRt5WYWlqw/cfrbBUUMhhvH/z+f7Sk0nyYQW/nmyuv87SnQgOQFuK6GUiJrkoKrB8XXtAGNDvcM/hkZQ+gArg0c+WqgSsgNVHgDP7L8Pr3OsPAAAAABJRU5ErkJggg==',
    order: 292,
    base_experience: 158,
  },
  {
    id: 211,
    name: 'qwilfish',
    weight: 39,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png',
    chain: [
      {
        species_name: 'qwilfish',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACKElEQVQ4T2NkQABGBgaG/3j4SFIMDCDFIADWdPv/f/aPe/ZwPP3G+c/f3+Yziko0DljjqlWrmMPCwv5On77ISURCPp2Z+f/RID+HSQ0N/5kaGhj/r1oVyhR6Tfs/Y0PDP5h+sMb///8zMTIy/tu9dWWfnrlP4YNzc5/c3ZXnHdXDcAnZov///zMyMjKCvQPTyMLIyPjn/s1nlaLi39vO7yhkuD1H0SNpz8SdDAzaQtNbTBYys3NuSiudMXvVqlDmsLDVfyFODV3FHLY67O+K0J40qdDzpbw831SO1Sr2ZJ/tK2VgUDNtLbM7JSwplZdR2DQZ5i1Y4DDs39/A4ujY8GfHCgZ9WdnwC0dXcT0V5GLZcu71k+/tc7ZPYmBguA+zDe5UEGP/fgcWR8cDf07tCkjQ1mKbf/vuPwZuFkGGo8e+M6xY81x/x8m9l0JDQ5lXr179F6vG9TPsczXVuSZJyLP92LPv3/e9O4QEv/x+PWnxxm35aWlprLNmzfqNohHmjBXdJjocHOzLlQwFXzXUfb368zezGTcnw/ZVu/Y0Ojg4sBw4cOAPisb/DQ1MoHhaMilIhunX27UcbL8ezFwvcoOT+c97TlYW+eXbNxdi1djQ0MDU0NDwz9Y2RlJf+VM7FysTU9fsW1nW1oqG/Nx8HNt2Ld8NU4NiI3LSg7BD2RgYVv+CJYAGhgamBga0lIOeDP//Z2BgZAQneMYGhgZGhgYGBpBrkNUBAI2c6w867UHCAAAAAElFTkSuQmCC',
    order: 293,
    base_experience: 88,
  },
  {
    id: 212,
    name: 'scizor',
    weight: 1180,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png',
    chain: [
      {
        species_name: 'scyther',
      },
      {
        species_name: 'scizor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABXklEQVQ4T2NkIBMw4tb3n5GBgfE/LnlMjQ0NTGmSksyz0tN/////nzF91iyWWenpfxgYGFAMQdX4/z8jAyPEljSGmayzGNJ/I9kIUgvXDNfY0PCfqaGB8Z9v23wNPjXpfG5uNj2Gv/9ufP7w8c7ywouTGV43fGFgQDgfYWPoKmaG1WF/RSvaPfzEpbfLqiswfH/7hWHt0dPnAgID7Hrc9b8yILkIrjF01Srm1WFhfyNnr+w3EeYr+MPG+uPfh49sD77+fnrg6HGfm4smXgoNDWVevXr1X5DzEU7dv5+lwdHxT2j7tC5uWYVSJlaG31/efGLlZv73Y35GlCwDA8MbhoYGJoaGhn8oGmGCWgkFBgxsHCsYGdmVOLg5mV7efbQ3xVDMswGiAR5AOONR2z4r9R/7z9fXd83dwMAQyszAAHEiDGDTiBLsxCcAiEqQXyAsCA32FyEbiUq9eNIqfv0AHhSAD3o8r6YAAAAASUVORK5CYII=',
    order: 186,
    base_experience: 175,
  },
  {
    id: 213,
    name: 'shuckle',
    weight: 205,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png',
    chain: [
      {
        species_name: 'shuckle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB6klEQVQ4T51STUhUURj9vvvem56ijehCiHBykQ4v5QnZDxSkFdQqArtvZUEGuaqFCEUQfW0KokWt+oGIFiF5saDNkFE+F7ORKVvIBDnhYnIQ32AN4c+Mc71xh5JRm0Xd7TnnnsP5DsJ/PvybTinF/Js+01jgBMrzPLmZt0GolEIhBNtMHKMxs5u6i+XiMqFCAFQafHr76q6QffxQtb20grXZz6d7+5IVHYc5N/geoR4z0ee6HQ+qrBpz4WcOptNTi/lvS6cu3Tv3nogYEa3pT0qOiUcJq7O/c3Vo5OOZcA5EPv0FGp12OTM+rupbXDNTzP+4MHC0EQAKnHNDCCGRgBgBrT3vOLA72upef5dMnc221cno5AyD/Y4KrB3MSKUXm+3CxZ43L0cAIK8NUUf0hJB3AE7u6x2MLUSaYdX6XqwKt5rzs58gNzdbiPjJ0LZIw/K1eKx9CuArAbBSVN0mIqr+gYfHevYeju2ssa36piY5nfigpGGbr+KvYe7JjRMvAEY5cEOAkOutqmFloIdy8Pyty1HHvVtthSyJJmSymclEauKKGLr/dks5v6tGRQqRULfWUNd28EhLeHvtRHz0mcapq8sk31+/5Zbl/IldfjciMomo0gA2UBnnDgZBEn2f9NxKw6iwnH9b+y/wi8SStQ9UkwAAAABJRU5ErkJggg==',
    order: 294,
    base_experience: 177,
  },
  {
    id: 214,
    name: 'heracross',
    weight: 540,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png',
    chain: [
      {
        species_name: 'heracross',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABcUlEQVQ4T2NkIBMw4tP3/38DE0iekbHhH7o6nBr/NzQwMTZANCCzYQZgaPz//z/j6tWrWcPCwn4d3xDl8vcPA5tNyLJtq1YxMIeFMfzFqhGkiZGR8T9M8tKOiDs/Pt7lNAs/LQ22GeRqMMXAALcRpmnjnhPiz74Lymf6qp/aP9/h0p//UsKnOPKMqqMsXjY0NDA1QJ0P17h//34WR0fHP02z1mjbqbPte/LyynNJGR0NZWXz//eevLNxMtY8+///f2ZGRkawc8EaEU6cxL73lNxWS/mLzq++qzPce8TAwPafjeHUyiDVomkMd1atCmUOC1uN0AhzQlxctrBXvN0jCWleru9v3zG8vH+T4dHlpV21HXcroH4HWYTqx9BVq5hXh4X9ZchqCGIQUcph+fSM8c/LD50Myzt2QAMLrgklcMCS//8zMiCFKkgI6jxQfMJDG1MjAwMDyGbt0ND/9QwM/8NWr2YCuwILwJvk8CVHsjUCABZOnA8OnLJPAAAAAElFTkSuQmCC',
    order: 295,
    base_experience: 175,
  },
  {
    id: 215,
    name: 'sneasel',
    weight: 280,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png',
    chain: [
      {
        species_name: 'sneasel',
      },
      {
        species_name: 'weavile',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB90lEQVQ4T2NkIBMwIutraGhgqmdgYGhkYGBoaGj4z8DA8P8/AwMjQ8N/RsYGxn/IauEaQZoaGhpQJNEMZWloaPgDEwNr/N/QwMTY0PBvfcVs459Mf35yMbML+zUnHdxRt6j47vV7MzV11SsfP3+yP3566Z5VoauYw1aH/YVq/M8EcsrGqnkxolw8qYz/WZ4xsjC9Y/3yy/InD9OUn7/+Tdl7bG9Qc/KM3YxhjH9BljGuCg1lDlu9+m+3X76evpzGHjYGRhYOHbmHhgq6Bjff3//yaN/p4ypSCq4PPr3d7tGf5g1yIEgfxEaG/4yMDIz/FydN8Hv6i3mGlqGgpCgr06+7H9+y/H7EyfSIifWE4Mx4hzwGhp8wtWCNsIBZGmUjeNxwxgOOxzf5Yjmv/P/4XuDvdH4dFgFRkQde6/VtfI8zPIWphdoItvr/XUEG/ln5Bxvv/mDMj35/7Rfzn+9si1mlGaw4mP6pv71S7LW4YcL///8ZGRkZ/2ONjt60qdf/vXp07vP7V1cMdMzbPnz89Jrhz7fN+98dy1u8a9dXUNxiJABQXK5NrTD9+4/jbtjchndL01pCzz+/eaZn8+L70DgE6UHYCItYmOdBfFicgQMwdBUz4+owcFSAowNbUgVpCF0d+g8U0g0NDSwMDAz/0FMVVo3EpHsAzpPjEIAD+yMAAAAASUVORK5CYII=',
    order: 297,
    base_experience: 86,
  },
  {
    id: 216,
    name: 'teddiursa',
    weight: 88,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png',
    chain: [
      {
        species_name: 'teddiursa',
      },
      {
        species_name: 'ursaring',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACpUlEQVQ4T2NkgIL///8zMjIy/ofxUej//xkZGBn/r1q1ijksLOwvSI4RRDQ0NDA1NDT8m7dhg1ZSQMC1+evXC7z5/JmtNC7uFcyAhob9LA0Njn9AfLAlMFNc0jr4o7y0n9y+/fSopoak6Lv338TUlCW+nj13925tboo3SMOE+XOybt158XFaa81SsI2vXr3iOXD6ws7/LExWoqK8DD9//2E4f+khAw87M8PtJ98YGL4+aBITl2T/+u136O6jl83Pbp71Bqxx0559jYaGWnVfv3z6dfHiJaZ9J58wqqrJMHx+/55p8YIjfz081FiYOUUYJtdPN2NguHDaoaGBBaxx5+FDu1VU5Fxunrv1Z/XmA8z/hUT/SUmIMp87ce3b7++fOFV01Rnv3nn7fc+ypToMDLfvMTCEMjNu3L9fRVyI7/K/P385rly/+5tPVID13ce/DOs2nX7JyfT1BgObqP2vjy8+M/z/xysoLVK0YmJtf2joKmbGhs7JUs4uJqtZmVmt/v5nYLj76Pmv5WtPn9dWYj/HxS8U2lS4sqC6zUlWSceyfdvOc0fXTi23gUcHiFHW0GLy9huTzNyuqosMDAwP++bMcdu56fgdcRWFYDtr3YKHDz9KNM872spwZVYN2Ea8Ec/AwJBd1xLv7GC54Pa9dwyvXj1d2VtVEAGKQnDggEDazJmss9LTf4PYsXktNmxsLNq3rz2R9AowLbl86xv368cPTtpbSZ24dPXJ5JWzuu/CNILo/8a+aVyWBqqr7959aygowi/54ycTgwj/v4fPnn0+vWXfs1qGZwtuhIYWcq5e3f8dqvE/IwMD43/noCQlVg4+gx3LJuz3iMh2+P7955uDG+ecY2Bg+ApPatD0DHcqAwNEM7ZEDgqM1drX/jM0NPyDyQMAxPsuZwdZKh8AAAAASUVORK5CYII=',
    order: 299,
    base_experience: 66,
  },
  {
    id: 217,
    name: 'ursaring',
    weight: 1258,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png',
    chain: [
      {
        species_name: 'teddiursa',
      },
      {
        species_name: 'ursaring',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABX0lEQVQ4T2NkIBMwkqmPAUPj/4YGJob6+v8MBw4wM7x+/Z9h9WoGxtWr/zEwMPxHtoQUG0Fq4ZrhGhsaGpgaGhr+leTmphp8/uXvaGI48fWtR3923LsZXPHxXiPD4fOvGRgYmBgYGEC2w50KM41nUX7pyQhray1WYQGGz4+eM7D/+89Qfe3ctJ7enuyZaWms6bNm/UbWyADyG2NDw79t+i6GWimhx7n5eNj4WdgZLx49tcH30bXZL7Zs2QZzFYrGVaGhzGGrV//dw8CgxljVe+qtmDKPws1rzJ8u7U1wObp34Zm0NFYTqG0oGhsYGpgaGBr+aTMwCM2ZvPCeioom/6PDJxlunttpG7VjyxGYwbCQRQ5VmD8ZV6S5lCiK635/9/689atfj8rjZ9171NDAwNTQAAkYFBvxJYT/DAyMjMTE4/6GBhYGBnsGB4aD/xgaGv6jayLaRmyuISXloOgHABu0iA95cHFsAAAAAElFTkSuQmCC',
    order: 300,
    base_experience: 175,
  },
  {
    id: 218,
    name: 'slugma',
    weight: 350,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
    chain: [
      {
        species_name: 'slugma',
      },
      {
        species_name: 'magcargo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB6klEQVQ4T2NkQAP/Gf4zMjIw/kcWxibGiKLg/39GRkbG/yCFB/YfYGY4yMDgwODwj7GB8R+6BXCN/6Ga0mamsc5Kn/UbWeH+hv0sjg2Of5DFwBpXha5iDlsd9ndm5UxzDka2zQzMTMd5+Hj2M/5j/PH3z2+d/4yMBnuO7wmYtXnWm4aGBqaGhoZ/YI0NDQ0sDQ0Nf1Y2r/R6++rlVg4ebgYzW3OGN69eM7x/857h+tVr+6rm1zjDNIH0IJza8J8J5JcJlRPMVcVUd3EJcfHysvL+fvToEduGzWucFh1dtn9m2kzW9FnpYG8gNCKF5vqu9bvef/vgyszAwvDm05vTolyCC998fTevqL/oO1TPf7hGmDMaHAoELILdbjz99FL8zu07v99+fPtHV0n77Z+3b3ULFzR8gAUiXCMs5HZM3hEsJSa15tT103+FWAWZP375+CqxPdGEgYHhcWhoKPPq1av/ojj1zMwzrCbpJr83966frK2sn3P0zFGQsxhYWVlYnj+9J184q/o5tsAB2QxKLczTSqdt+fPjz8fr1y9N+MfB/FZXXaf6369fM/ImF5/AGqog00FO+fTkE//O4zvfYSRFaAKBiaMkOZggyGStq1qM17Sv/dfS0mIMDQ39B0qKGCmHUIJGtx3EBwBeGeoPE4jqmgAAAABJRU5ErkJggg==',
    order: 301,
    base_experience: 50,
  },
  {
    id: 219,
    name: 'magcargo',
    weight: 550,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png',
    chain: [
      {
        species_name: 'slugma',
      },
      {
        species_name: 'magcargo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABV0lEQVQ4T2NkIBMwkqmPAZtGRoeGBmZRLa3/q69d+w82uKHhH7oFVLWRW6p7oov0xx/mTPeurRXh57q3VVz8I7qtcBsdGhpYDjQ0/DFOK4wKlJdf+oWfl2HP3ccMH+5cKbyzec0EhtBQZobVq//CnAzX+P//KmZGxrC/7TMqZoaaiqT9YWf5sP/qR4GepRfWO0uIhs+aNes3AwM4TMD+hmtctSqUOSxs9d+6Cs9oc2e9JTw8bAxvXr5j2L7rTsmcaTt7Z85MY01PB2sGA5TAaWhoYGpoaPiXHGseIa0hrvjrN5sKl4C449UPon4rGxquwOQxNIIE/v9nYGRkhDiHwSdOekWB1ZMbN54sbchpiZk5cyZreno62Fas0REaGsqclfWa0dHxwL/i1uIkpt/fz3Q3TLuA10ZcKen///+MjIyMEJfgshFZc0NDAwsDA8M/kN+RxclOOQAF5oUPReCpTQAAAABJRU5ErkJggg==',
    order: 302,
    base_experience: 151,
  },
  {
    id: 220,
    name: 'swinub',
    weight: 65,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png',
    chain: [
      {
        species_name: 'swinub',
      },
      {
        species_name: 'piloswine',
      },
      {
        species_name: 'mamoswine',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACTklEQVQ4T2NkwAL+MzAwMjIw/F8VGsoctnr1v////zMyMDD8Z2Rk/A9TDhIgC6BrBJu8SktK7quiedV9efWDTdM6lu9Yu8mIT0K8ZN361ak9PT1fQS6Aa4Q5j4GBgWWFrs5uBSYuh6eycicvbFlTGLxuwzEufaP3aspyIgwMDGCnwzU2MDAwNTAw/AO5+7ylzW4ZHXmXRffu72bZe+yt69HLEf/FeXO1VRSm/P//n5mRkfEvilP3+wZrOG7WvbNOa00bj4t56fUX3/6Y3r/Lcl9d/2z0ktkmIEP/NzQwMTY0/GOEMTZqmzYLqAnU3GH49Onl+pPThCqaZVl27Y7my0rYzsvF7/nv1LGVYjcvTTbdvvso2Kkwv02RV5n3ke+/23dudi7VE9f8fmYULjnz9qO8N/e/pb8s3a8x7Z3R+v/t/z8hew9JMjAwvAE5FRySIGck80nHsjMJPFH7cFVJNDplzo+vXxg4zu79duvxa08WHY09HF9+vD3154/S6idPviOHKhMjA8O/g6Y6sg8+/WpTlJc79unNK8HOq3cu2qipmt17/PaiCD/zg6kPH54DBSRc40xjY9b0s2d/b7BxjPr66+fS6FPH2BkYGH71OzgIKL168ejrwxs2UV8ZLs1kYGBNZ2D4Dde4atUq5rCwsL8tpS3hf1+/0q5fMKnhTFoas8msWb/XOLgef/eP4Uzaod25+x0cWBwPHPiDEh1IiQCcDENDVzGvXh32N6Om30Ho1y/Wtq7y3TAxrGkVlrgh0dbA1NDQAE4Y4GiAJnQAwWIKmhrBY0MAAAAASUVORK5CYII=',
    order: 303,
    base_experience: 50,
  },
  {
    id: 221,
    name: 'piloswine',
    weight: 558,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png',
    chain: [
      {
        species_name: 'swinub',
      },
      {
        species_name: 'piloswine',
      },
      {
        species_name: 'mamoswine',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgElEQVQ4T2NkIBMwYtP3/38DE8OBA0yMjgf+4DIXQ+P//wyMjIwM/wk5BEUjTNPrp37q/z7+15yutXlTAwPDPwYGBpA6FMOQNTL+/8/AALLt+l6XcxraAoarp1xNCWu5Pvf/qlBmxrDVf5FdgWojWB/D/3np2loyyr8ncAtzPbBOvpD2f78DC7p/cfpx7dywJn7GH4YuSRv9/v9nZFi9OpQpDMlWND/+Z2JkZPx3fMncPbx8XM4Xju9k+MbBdyqtfpI5yJn/GxqYGBsaQH4Ge5qhoYGBqaGB4d/+qaYSH3597BIQzo+VfPyS4Rb7P4aP1+8z/JF/X6wrd2ajScKru7AABGuEcRoaHDjczRhW3zt+4NnjQ0EcOnGctkx/X/798PL7emmpX2fsk0+vgtmK7kdGhlWhTAxQv1zsZuDmCrCSUFU9dhfZArhT0SO7wcGBxd7BgcGxoQGccvbvd2BxOHjgH2MDOE7BAFuSg0c2yAsMDA2MjIyQAMEZj4SSGbI8AIRAnA8rxB6zAAAAAElFTkSuQmCC',
    order: 304,
    base_experience: 158,
  },
  {
    id: 222,
    name: 'corsola',
    weight: 50,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png',
    chain: [
      {
        species_name: 'corsola',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB9UlEQVQ4T2NkwAv+MzIwMP7HpoQRiyBjQ0MD80c+W/H+IuenuMyFawxdtYp5dVjY3/Ci+aG8IhLZbMysq6aVu0xLmzmTdVZ6+m90AxAaQ1cxr14d9tc9rd+bnYNr0pc7B532bVv2kKGhgYmhoeEfTo0NDQ1MDQ0N/9zTur1/fPmZ/4lFZIcI9z+x3dOzKhgYwH4F6YX7F9mPIPb/hlAGnrMiky/amkkrffnNybBo+7WKB+uLOz1zt7Fvn+z1C6YZrrGhoYGloaHhjxsDA7d43ZrHStJsAq9ef2K8+/TbK162b65rJxZcgjoXbAFYI8yZ+kVb1YRens+XllfSE1LUs3l4+/KvNw9u/+bj5dzBJ6nyYGVLYD0DA8NXBgYGRsb///8zMjIy/i8rK+P9yaX24ujFBxt5RUT5lFS0vN++fMHAzsXB8PbJ3bV8fELBn17eCd6zsmudg0MDC1zjzJmLJX9+e+P54/eXw9eecR3dfPTWFmVR3jdsIqL/BJl/+PlYK55n42DqSIyJudzQ8J8JElRQW0HsdevWCd++/VSxvDz3DCwKOvtmz9FQ5u/29w+7uWrVKuawsLC/KCln5syZrOnQyAb5e9VVBpZrqxtAIcmQmzuJffLkvJ8wwzCSHMj21atXM4FMhSiCBCB6msWWVvGne6gsAFvuyxXrVcxeAAAAAElFTkSuQmCC',
    order: 306,
    base_experience: 144,
  },
  {
    id: 223,
    name: 'remoraid',
    weight: 120,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png',
    chain: [
      {
        species_name: 'remoraid',
      },
      {
        species_name: 'octillery',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABy0lEQVQ4T2NkIBMwYtXX0MAEFm9o+LcqNJQ59LU2I8OBhr+MDAz/YeqxaARpavgH0dfA0tDQ8Aem+D8DAyNMM5rG/4wMDIz/GRgiFEQY3v56w7D72R7bTD1RbvbY/+9+zzY4NfVWA0MDUwNDwz9kjYwN+/czNzg6/kksqdxxRVjZUvbFh20Jky65Sf7/vl4kQTtHcUHDD5itKBoZGBj+z2dg4DjUMeWZqJSS4IHz53/GcfxvkvFy/BBgaz3t////jIyMIBcxMMA1njlzhvX+mx8WE3YeV/v8+kmioqq89au1R7eHFcWzaClJf3K3Mw75//8/EyMjI9j/jA0N+1kaGhz/zJ4xO0REVnnV9BPXCjh+vBHlkletUVix5wm3uAjL47XdNrMYGO6CQjhs9eq/YI0w66urW6Q/vXkpMnnm5IsMIWVBDEIs3W0brrHYvGKYavt/fTfMiSjRgez2+YtX2564cb9sZmtZcUZhw3ynj982hM3r6oZqAHkN1Y+rVq1iDgsL+ztjxlxLRjauf+lJkScnzF4S/ort7/W2+PhLDQ0NTA0NkPhFCRwQB9lmZDa6JgyNUM1Mq1evZgTZDko59fX1f9H9h1UjsWkeAGhOyA/K6woUAAAAAElFTkSuQmCC',
    order: 307,
    base_experience: 60,
  },
  {
    id: 224,
    name: 'octillery',
    weight: 285,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png',
    chain: [
      {
        species_name: 'remoraid',
      },
      {
        species_name: 'octillery',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABJ0lEQVQ4T2NkIBMwkqmPAavGVaEMzAyhoQyi17QZX19t+B+2muEvugXUtfFonLzlSyWjz3/+/ZV/e3GPTObGbzNx2tjQwMDU0MDwb1VfISfvkf4nBoHZQiyiYgxL+vtvFe78oA7VCHLhfxAbxan/V4UyM4at/nvCnyFLLSBp6h9ZKYarB7bNdGw5lwGTg9mMohFmKwMDA+vjerOTHCw8hvNfiTuUTV5+sKHBgaWh4cAfDI0wTR0uSvw+WrynZHj+qR14yvgr85OZwfP1c66HhoYyr169Gh66yDaC3d/gwMAiL6rg8urHd3dmXpVHJcuO9jcwMDA1MDD8Qw4ggtHR0NDA1NDQgKIJI3BgJu53cGC5pfaZUfC90r8wJOeRZCOuJEnQqbg0AgDKB2oPNxUY9wAAAABJRU5ErkJggg==',
    order: 308,
    base_experience: 168,
  },
  {
    id: 225,
    name: 'delibird',
    weight: 160,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png',
    chain: [
      {
        species_name: 'delibird',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACf0lEQVQ4T11SXUhTcRQ///sxt0wh3bCGITIsWZSZg1IorygUWhHYHaQx8KG7HnwIgpKM9Q9JevGhaNBdEIkPkWN9PPgBGRs+FFiLvnTpxJT8dk6vlDl37/3HXd6BnZfD+fgdzvmdH4LthgCAAAAKYo5esluI0+lXtLi7u5vieV5FCGl10BpTRghBWlL3/w1Mh3o9BSQEEEJAMCEURkgVb5w8YogrPGFIzvRa+GEePzCam5jGJlOWt66uegpjTGkr0E6nU+nv6T/1W4q31Dc0cB3Nh85WHXO8WpqKQ0fry8qL3vtmm0kJTDK5rkaXqysYDDJIFATW7fMlfW2eu+bk4vXgSuaBw1LfOdVI7vyJrcB6wjAgy9JPi1Fq+iAVlT4KRT/xPNAIA1AYQC0HKLY5jMPmbCtVWWyFXQVZsLSwqv6IzFDrVAbENqjAgzej5wkAQgAkdaMOrq8prY9/m226eavi+B5jRraMFDX8foJq90avRGHt3hZDKebTrIpCGev2hZOiUGYr2p8zHun7DnsdVtlgpJmn+O3pToAebLcb8MjI5rZ3iGXAusOQxJX5HsfR3bd3mHduJDcVemF0np2Y/yXi13OXgxzHVIVCchqor1pdCHlnSgo+UipY2UwTSGsJYGkCFE2vD84YK14MDX/GGCiMQU2tyvM87ff7lcbaEwetyvwXaROWZ5cTj7OyDc0mljFZ0BxEp1dbn49BO+aAwSGQU0D9l4FAoCY6/PVJpwdfjQA8u1C+r3j83VhJbcu1rvxCW9slt7tN702Tow0QBIEVRVHWpIc5jsFb9/T2DlpisUnkcrkWde1tA+pJTVIYY1V7NAAP2hlbikYA/0T+F6QRFo5aT2YwAAAAAElFTkSuQmCC',
    order: 309,
    base_experience: 116,
  },
  {
    id: 226,
    name: 'mantine',
    weight: 2200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png',
    chain: [
      {
        species_name: 'mantyke',
      },
      {
        species_name: 'mantine',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABSUlEQVQ4T2NkIBMwkqmPAavG/w0MTKuvMjCGMoQyMKxa/Y+RkeE/ugVE2fifgYGRkQFVMxaNDUxrbRoU/snxWYr+F5Jj42dlsZpxu/n/fwZGZJtRNMIk9/oabPv/65clH+Nvnt/Mv6Zbb32Y9z80lJlx9eq/MCejatzfwMLo2PDnQlvQDH05rvTLt78w7Grc4FbCwLC7wYGBpeEAwx/sGhsYWBgbGP5cLxdJleIQn3X5zEeGQ4e/W1R9ensSFGCMDQz/sGpcFcrAHLaa4W+DmIyemTbTegVOZqX3X389f/ufcaLfoSedUE0gV/5HcWpDAwNTQwPDvzmFMkImL9g2M35llnn17vP3X38Z93sff57NwAC2EVMjyESkoGdmYGDgYmBg+IwUh2BNID72BIAWb/9DGZgZVzPAQxSnRphfQEajRzzWwCEl3QIAq01yD0RdMSEAAAAASUVORK5CYII=',
    order: 311,
    base_experience: 170,
  },
  {
    id: 227,
    name: 'skarmory',
    weight: 505,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png',
    chain: [
      {
        species_name: 'skarmory',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB6klEQVQ4T2NkIBMwEqPv/38GRgZGBhD6D1OPofH/qlDmA9deMzo2HPgzc+ZMVrXjx5kdFyz4AdLwn4GBEaaZoI3fMhisvwubh3w6+rJS8cCDHzDNKBr3729g+bN5t4mw0H82o5pjh7xap7gWfzyaaqH+zIQ7+aASsq1gjatWhTKHha3+u31ZiZ7ih6sX2f9c/r/lvN3+F7oWTlqvrzH8+37nb8tFvqCb+9dtCg0NZV69evVfsMb/DQ4sjA0H/jxdEN0o+edH3b29B/6+5DViXvhd7L/4p7c//7Bwcfxj+Dm7c+3WtFWhocxhMI37GxxYQIFxIdO4nPP7n46PXz78vvhXhfEmCw/z599//nDz87N++Ph58bwNm+NQbITY2sDE2NDwb1ehk5sO09edT14z/1v6W+ov069fjH///fsvxPg3qmHd9jUoNjY0MDA1NDD862dgkAyd5LdcmoXZ/uvt5wwffvxl+Pn5G8Otr0wHPddfdmhoaGBqaGj4B7II6kcGJsYGhn9HE0wN2H59r2dn+qfO8O8vGxPjv1e//vx98+XHt0V2G1+sQU4s8OgApQ5GRkjKSPM15lLiYGCtWH32I66UhRKPoMhlaHBgBoUwTMP/BgamAwccmBwPIMTgTkU3FWwAzB9I6RNZHQAraeEPmB+EzgAAAABJRU5ErkJggg==',
    order: 312,
    base_experience: 163,
  },
  {
    id: 228,
    name: 'houndour',
    weight: 108,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png',
    chain: [
      {
        species_name: 'houndour',
      },
      {
        species_name: 'houndoom',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABBklEQVQ4T2NkIBMwkqmPgeoaGRsaHJhBrmloOPAHm6swbPzPwMDIyMDwH00xSB2KGIrGhgYGpoYGhn8MDAzMvdn+7kyMrN8Kp6w5ADUERTNc4///DIyMjAz/pXwZuDr0YrcoSog5PnnxmuH4jUcdk9YeqFwVGsoctnr1X5hL4Br3NzSwODY0/JmWEBVqb6O26i/LP4YnL94wnLv7jGH/pYfae0+evxYaGsq8GqoZrrGBoYGpgaHh3wTzSPGfuv9bhUQ4DX7++Mfw6deP//eePEues+nwJawaQU74z/CfkZGBET1gwK5DDzSMUAXZrLXqKmNYGMI/2EIaXwJAlsNwBdVTDsEkDAAVGl8P5TYpVwAAAABJRU5ErkJggg==',
    order: 313,
    base_experience: 66,
  },
  {
    id: 229,
    name: 'houndoom',
    weight: 350,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png',
    chain: [
      {
        species_name: 'houndour',
      },
      {
        species_name: 'houndoom',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB70lEQVQ4T2NkIBMwYtPX0NDAZM/AwASSO8jQ8K+hgeEfujoMjfsbGlgcGxr+ICsEGdTQ0ICiGUXjqlWhzGFhq/+Wp4Xy22qJ1X7+9IV925HzzYt3XXqFrhmu8X9DAxNjQ8O/6RUJCoI8/zdJi/DqMjH8Z7j98NWZhPbVZgwMDP//MzAwMjIw/Ae5Bqzx/38GRkZGhv8ODg4c1SF6V5j+fld+/fbDD2YWFkYeTnb2208+xudNXL9of4MDi2PDAbA3wBphzmjPCFAw0pS8xsjwn/P9hw//WZiZ/nCwsbE+fvVpbkbPuhRk/8OcCqJBTuBYWh9xTZSfR/Hjl2///jMw/GNjYWa5dPf99rq5W7xg3oHbuCo0lDls9eq/fYWhuipi7KdffPzKJszL8f/H95////xnZX7w8vP5+jnbjKAhDbYEbCNMY5q7gbe1d9AW4aefGT7xsDB8Yv33/9n1S4wc3DwM1x6+9F+y9dCm0NBQ5tWrV/8Fa4RxPMwMLXMa2nafWzD/uX5wsNRvhv9c++bWfuSV1Nl958mz5rV7T15qaGBgAiUIRHT8/8/IyMj4f960fqWkxYUfmvybJF9cvsC1bum61y8YGB6AQx89OmCpBFsKgYU6lIanHowkB9Zc3/B/VVgoOK1eW736fwMDZloFAP9E3w+jT+3vAAAAAElFTkSuQmCC',
    order: 314,
    base_experience: 175,
  },
  {
    id: 230,
    name: 'kingdra',
    weight: 1520,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png',
    chain: [
      {
        species_name: 'horsea',
      },
      {
        species_name: 'seadra',
      },
      {
        species_name: 'kingdra',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABaklEQVQ4T2NkIBMw4tAHEv+Pz0xcGhn+NzQwMdTX/z/QeIDZod7hLyMjI4pB2DQyMTAw/EO37f///4zImuEa9zc0sDg2NPw53rnAT5SZI8qjJCI+taFT2Idfzu0PE+MZ/fyIKyBXMDY0gA2Fa2xoaGBqaGj419k5WSriM+/JF2duzOU1Vv7A+OVnq+bEHG6QYpgaFI3/G/4zMTYw/uuYMFMu9gf/HkFefokf7z5xXtt+dAGPtdqzZ8/e9Hotbfj0n4GBkZGB4T/cxjMzZ7KapKf/fjZrc4akqNR0hr////z7+ZPl7vajj54xfJ3psKSxDaYJ1cb//5kYGRn/Xa2es0nLw8X3y/u3DP+VFBmOHDpy3SvLTwukGJdGcKhV1s/U0DPTzWd4/9ngLQfnsYYX92cu+vfxoVde3k/kkMYZj9CAw5kIMDSCQq7evp6J0ZHxDyjuGhsPMDc0OP5Bj1dCNkK9hpn48GnEm/wBu0uVD+tnDdwAAAAASUVORK5CYII=',
    order: 178,
    base_experience: 243,
  },
  {
    id: 231,
    name: 'phanpy',
    weight: 335,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png',
    chain: [
      {
        species_name: 'phanpy',
      },
      {
        species_name: 'donphan',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABTklEQVQ4T2NkIBMwkqmPAYvG/4yrVq1munbt2v/6+vr/jY2NYDUNDQ3/kC1B1fj/PyMDI+N/bK74//8/IyOSHFwjTKLv8WPO9xdvazX7ON1iYGD4nLtivTLjx29yk9Kj9zc0NDDBbIZr3L9/P4ujo+OfGWs25ispK0/4+O/b01sPXzz+/uMXj7SUVF2mg9X6hv37WRocHf+AXATX2NDQwNLQ0PCnKCI6yTYrfS6blDjDxx+/GXZvOLh7fk22G9T5IPVgr6AHDliiYNkySykBnmU/fjEwCnPw/ZSUkqgJ0tNYver/f+YwRsa/ODWCJJIaGkzmNTScXXzq1ANuDo79QXp6CWfOnGE1MTH5jU0jWKzh/3/GBkZGcPBXL10rz83JoVsV5L0FOWRxJgBQCGppaTGGhYWBnYYzOnCloIb//5nqQc6AugCmjppJjrjUCwD/CYUPH4SSHwAAAABJRU5ErkJggg==',
    order: 316,
    base_experience: 66,
  },
  {
    id: 232,
    name: 'donphan',
    weight: 1200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png',
    chain: [
      {
        species_name: 'phanpy',
      },
      {
        species_name: 'donphan',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABn0lEQVQ4T2NkIBMwYtP3/z8D44FGB+bXWqL/w8JW/8WmBkMjSBMjI8N/mOL/DAyMjAwIPkwcRSNMU8P/q2yy06Zac/5nZInKmbobqhikFm4gisZVq0KZQU7b0Ro3W/HXjxTuBx8Y7n/9U2G7Zl/n/9BQZsbVCGfDNa4KDWUOW7367xQny0DzP1/WsWhb/mVnY2G+sHvaz6hfKmIMd+58amBgYGpgYPgHcgFc434HBxbHAwf+tNiYhQrfPzVD0CNGQJCXl+nOhOnzshkYktH9DtYIM2lbmm/Ap7MPWJ9xsrEafL659N77L/+PCRuazTt//gy6P8EaYc7c0J+w88Wxaw5qrxnfCrpoSZ7bfYqB5cu3r+zyEvseMX3tLltz6TBMLUQjNFCWTMu0+HH5dvfP6XtOCDdE+n67fl/1163nB7hddBlOnT2VNnnfq7sNDQxMDQ0M/+B+RPdDbqWnKOuNF1J9689fxBanaPH4n5GhsZHx7LPNzCazzv4Gafjf0MDEcPUqY6P26v8gm7AmAOSkBXLS1asMjKtXMxCX5IhN8wAVfroP9LcWBwAAAABJRU5ErkJggg==',
    order: 317,
    base_experience: 175,
  },
  {
    id: 233,
    name: 'porygon2',
    weight: 325,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png',
    chain: [
      {
        species_name: 'porygon',
      },
      {
        species_name: 'porygon2',
      },
      {
        species_name: 'porygon-z',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABrUlEQVQ4T2NkIBMwYtHHuGrVKqawsLB/////Z1y9ejVjWFjYX3R1KBpBChkZGf+DFCGzsTkKrhGmcN2iRWJ/+YTUQwN8Du85fFiN6fdvUScnp+MMDAz/kA1A1sjMyMj49+DRo06KEhIbv+7dOV8iNDLhzs0720wtTCPQXYBhI8OqVWxX1dQuyvJxarz6w/hr7Zw5yuVdXU/+//8PNhhmK0IjAwMTI9Q5+1fNPiUsxmN65x3XK25ujlpJefmvehoaS5FtBWv8z8DAyMjA8D+NgYGrgoFh3uf5s8OVE1L+3Tp27M/Xu3fYWBUU6y3s7Jr+///PxMjICPYrROP/VcyMjGF/b58+HSvMwrzoS1fZX4aYHObPjx8zPMjIfbWTgSF4EgPDkVUMDMxhDAxg50I1Qkw6f/3WamUJwZAnoaIMz14JPfzOyS7Nqc103mXeUzOo30DqwdEF8yNUII1r68RnNaz/nvC5FV4o6MySVzXV4o/58eZJp1fDu0///zMwMjKiaoQZAjYNB4DbhmwjWG1DQwNTfX09A0MjI0NjA0iAgaFeK5SRMWw1/iRHSnoHAJCJsA+lbeghAAAAAElFTkSuQmCC',
    order: 214,
    base_experience: 180,
  },
  {
    id: 234,
    name: 'stantler',
    weight: 712,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png',
    chain: [
      {
        species_name: 'stantler',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACC0lEQVQ4T2NkIAI0NDQwNTQ0/GdgYABhMGAkpK+h4T9TQwPjPyT1YM3oGmF8uMkQDW5iDAz83xgYVn/Bb2NDA1PaM0nmWbPSf3vFnsrzNvgz8dH947GdU4qXNDQ0sDQ0NPyB2/j//39GVa88tjvbJ/+EO195tVVbotZRBeFnN6MyXfUZGBh+/mf4z8jIwPgfrDE0dBXz6tVhfx39l5tzsf7M37omIYuBgUEoOHza2iRfG4OHj64UZlVFTZg58wxrerrJbxQ/eoauydm+OmSGjM2i3kQn1UQVGXaWj+9ecUqJ8DLcvXfdpbwtZe/MmTNZ09PTIRqhQf3PO3RRy4cvX2197D013cz/igrwMjNcvvbs98cPX1k37dhmunZb/xmQ+v///zMwMkKdumrVKuawsLC/eXlT/KN8HDcI8nN9f/HiC+frN18YONk5GO6+u37A3Fx5hZDQ2wWqql4/QeEBCxzG2NjJbhJCnMWWRuqurMxsDG9ev//Jwsr87Mu3r5MzywIWb9l1/C4fN+dCO2uDvP3797OANeZlTNcRFuSay8vJvu/b9383Pn9+Lfrg6aUdK9fPvQpLLd2TNrhwcjHl7diwJnPLlkVPwRobGhrYGhoafmFLRSBvXBMVZWxwdPwDVQtKfv9QUs7+hv0sB6G6r16d9n/16tWgpAZORWhJDyXJgQxBS2oYboCrAQAiZddOeXFpkQAAAABJRU5ErkJggg==',
    order: 318,
    base_experience: 163,
  },
  {
    id: 235,
    name: 'smeargle',
    weight: 580,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png',
    chain: [
      {
        species_name: 'smeargle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACMUlEQVQ4T2NkwAH+///PyMjI+B8mDeGDeBAxMBMV/GeESYLEGxoamOzt65kcHRn/QNRB5FE07t+/n8XR0fHPhoN3wj9+/fo33kt/DczQnTtfcD9g+sqS7qr8EcVGZKcdufpq07t3H3T8bNXUGRz2/9800yiX4f17o+e3bk5Jj3M/2dDwnwls46pV/5nDwhj/zt58uf7p0xeXzfSUK//8/m3y4dfPfn5ObieRG5f0hS6cWPd8//4mp6unLv5vaGBibPj/n6mBkfHf6fuf/L9+/bVh5+79E7i5+DSEREU91CR5GTg2rWdgba/+wh6VsPHe95/5QesXvf3P8B8SToV9q4R8bI0XvHvx2PfwufuX7zx4+ZObn98k+NrRP0K7lrBwWju+ZPxwPtLm6of9/xkYQJpQAkekpKw35+Vf5j2MTBy7jVRkONhPHP3LyMB0nV1V5epTfpk/996+njqvLuo43I/oEVLdtTTNw9dn5rtvfxlOnb907+XbF2v5GZnu9JaFzYKpRYmOmTNnsqanp/9mYMgQi8rT6rM00WW5ee/xqykNcXnohsM1/v//n4mRkfHfxp0nS6/eeZZ95tKtrnUzy6eVti3dy83DMb0hL3hNQ8N+loYGR3BCQNYITmIzF60x//nr5/+8lOgLS9fvNXj/4Uu4CD/vi4ggp27kuEZxKnr6ZGBgYGJgYPgHsiF01Srm1WFhf7H6EZw2//9nurp6NePqsDCQhv+rVq1iDkPSANMIAEr8AiBV9bdkAAAAAElFTkSuQmCC',
    order: 319,
    base_experience: 88,
  },
  {
    id: 236,
    name: 'tyrogue',
    weight: 210,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png',
    chain: [
      {
        species_name: 'tyrogue',
      },
      {
        species_name: 'hitmonlee',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABbElEQVQ4T52SPUjDcBDF3z8pVAttqbZ1dHJ3ECw42EUEZxu6qKEfTi66FuQGB5EizoJQoYuJFIqCi0McitpBdOgkStFFUEFJqIptIgETExI6eONxv7t3d4/hn8H8OCLiWq0Wk2VZB2D41XhAg4hjRCZghVnjgV2gATAGGPnSxuhD4yz2jO/2taK8AfDANihJEi8IQq+2U555D0aOdqvS43njNAXgNZ1OBxRF6TolO8AMLwhyr7Iyv82FYqtLtcumfnszxRizAA6AvYJTqi0nNT5xEYmPTBaWc3eaqjZzefEAQB2ADbt2lDIZXpDlXmF2er/DBhb58BD4YAiV6t4cgBOnZBdIRAEi6opica2jafTUvte4UGQwGgsX6/XaYT+QIyI9m10QE4nhkqp+HEPXx5LJ4aut8ua61dg8kvePhsEYY+bf4gBeAEQBfAL48r2qM2k6x5xs/DWxhthG8LXcbxPrglaNyz39wL72/wFjX40PECrbJwAAAABJRU5ErkJggg==',
    order: 158,
    base_experience: 42,
  },

  {
    id: 238,
    name: 'smoochum',
    weight: 60,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png',
    chain: [
      {
        species_name: 'smoochum',
      },
      {
        species_name: 'jynx',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACRUlEQVQ4T2NkgIL///8zMjIy/gdxQezGxkbGhoaGfzB5dJoRKgCi//+/epVNT7uM+zLD1vcwA2CGMTAwMEHVgg0Da1y1ahVzWFjY30OHTk7j4mCP/PDpw5FjB0911DWXHW1oaGBqaGgAuQTsGqgB/0AawbaBRIqzi+9LayjJcjNy1P388/dvXkFaZ25uLvvkyZN/amjoJjAxsby8du38dpBmxlWhocxhq1f/XZ7gk6qgoDSrY+/VPxsP79VkYGC4g+wvJSUNtbdv3/h9/PimB+zU//8ZGBkZGf5PC3VUf8UonHXm/Y88F2/Pmd6u3jNPX7z4NyrKn1VISEj43bt3zxgYGAQZGBgOw/04c+ZM1vT09N9dkxZEvnh8Z5mUhBjDr59/GZ4+fcqwad3atsfP7/cJCAjIfvjw4TIDA8NfkIXgwAkNDWVevXr136iwWC8xXu6t52/cYeB5eZ+BXVSS4RO/yJ09OzaoIjkbHCZgjQ4ODiwHDhz4w8DAXuijKZ/NJqv0gfvXj2+v3r8TfcsppHHmxIEgBgaG9Qh10OiABXFWZuG2aecu1AYoyr/99vnrQg4m9kcfPz3bpa2t6T5t2tQYmMvAfoTFYX1NfQAXJ//K8uoiriVLlkX+/8e0uDGuqTquKeYHGytbWkVliQY0TiEJAJbUKisrNW7cuCO7fv3q3RUVNaUcXGycDXV1TZWVlT5v3rz5MXv27D0oGtGTFrIkMhs5LcOjA8QAKbp69SojKHRBilavXs0ESoYgr4DkQWzkBAEAxLwSIT5B2xsAAAAASUVORK5CYII=',
    order: 188,
    base_experience: 61,
  },
  {
    id: 239,
    name: 'elekid',
    weight: 235,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png',
    chain: [
      {
        species_name: 'elekid',
      },
      {
        species_name: 'electabuzz',
      },
      {
        species_name: 'electivire',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB5ElEQVQ4T2NkQAf//zOGrl7NtDo09F9DYyNjQ339fwZGxv/oyhgxNGIXAKlD0YyhMaVqmTiPKIfQi3f/XPm42AUlOb/PbywIe4TTxtDQVcyrV4f9TWhbX/Dtz5+W/z+/7hNn+7vQzkp/T5iryce0mWdYZ6Wb/IYZALcxdNUq5tVhYX9z+zab8YhInXz26fstfXmBW2xfHk9YeeqFaKiJpG5etEc1hsaZM8+wpqeb/J6045GtvITooWuPXjD8ent/Kfu3lxcYOXizf/3/2VGTEjyLEepXmI0wz7M2LL80Q0iQz/nCpXMssiwfD/r5eUcpSAjtFuZhcfv//z8jIzSEIRr//2cEBbln7mwZEb4fllHaxyLv89YETj106eGcLG95QVaGJxqFE10YVtfehKmF+3HmzJms6enpv+8zMAic37zt/QN+F4Ydm5ev15fhOiEtIqr/88fHleXJ/ptQ/AhzwvSdd3Q+Pr4v/+g768wPv37/u3lij83Z1Z2IqIC6DKQZ5FdGBgZwymCuWHLpAY+IhMzmreu7T05OLwMpAAVaWprxv0YGhv8NjIz/0EMVHDj+TZta//7/48T3/abXso7K98ZpM1nPzkqHxx1yIsCZ5GAJAleSRNHY0PCfqaEemiaxJGxkQwDha80PR5ZT+QAAAABJRU5ErkJggg==',
    order: 190,
    base_experience: 72,
  },
  {
    id: 240,
    name: 'magby',
    weight: 214,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png',
    chain: [
      {
        species_name: 'magby',
      },
      {
        species_name: 'magmar',
      },
      {
        species_name: 'magmortar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABL0lEQVQ4T2NkIBMwkqmPAavG////MzY2NjI2NDT8w2UwhsaGhgYmmIZV//8zhzEy/sWmGUUjyCZGRsb/DAwMrAwMuZwMDJM/QcVAekHicADXCNeUdoZrXqr0HtZ//3TuPXmdXR9ssBiqGqQWrhmu8czMmawm6em/z2TnpbDE5s2+wi/JIP/uGcO16fOy0pe0T//f0MDEiORnDBtnrTu1i5tfxPXW62+/9V/cZD3FLMpw8PEjl+NdMXtDV61iXh0WBvYzhsa4rtU+v/7yLTBQk+F+/e4DBwcz51ee7x8NKrMd72DVyMDwn5GBgfH///8MjAVZrbqq1nqiT5+9/8P4+vFHNu7f1xoaGn5BLQL7Ez06UAIAX+LAmgBCQ1cxh4ZCtK0GYai/sEYHqUmP7LQKAIcRfw+0WKuoAAAAAElFTkSuQmCC',
    order: 193,
    base_experience: 73,
  },
  {
    id: 241,
    name: 'miltank',
    weight: 755,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png',
    chain: [
      {
        species_name: 'miltank',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACDklEQVQ4T2NkIBMwYtPX0NDAxMDAAMIMBxgYGBwYGP41NDT8Q1aLqrGhgSlNUpJ5Vnr6b3QDHRoaWA40NPyBiYM1gmxANtHKyUne0tEx5Mv794w3b99lOPDmxzyG4zvfOTg4sBw4cACsGdXG2FixVBGRIB5e3rq/f/9Kvnv1kkFPT4fh8YOHt/fvPBB15cr5MzBLwBqD4uLCeX79DWP/8dVMyMxM5t3r1wy7t+/6raqowGTnZPtHSl6e/ezps5+mdfeYMTAw3AT5n3HVqlXMYWFhCgwMDA9KCwrW/RMW9rt76fKvkNAANhl5aYbHV28wfL965cdnSRmO5bv2tZ7ZtbMG5GSwjSfPnrVlY2NjXrll85SHDx5pG2mr/7W2tmTg4GBn4OblYmb9///3nftPWLfs2J85qaN1RkNDA0TjvoMHg1gYGZP3nTihde/hQwVxIcH/ZkYmjEICfAyCEgK/7z14wvrxw1eGc6dOLZza358AciXj////GRkZGf+DDHBwcbERlZA4/PnDh+di0nJ5KorSZapqaqaZcUUt2SXJuu8+fFgwfcKEDaAAAtsIMiE0NJSBkZHxr6WdnRUHB8ff/bt2nZw9e7bi799/fTQ11ac7OjrC4hCk5z9KdCDHZ0NDA1tDQ8MvWISD/MWAlIIwklxoaCgzSPHq1av/ggyyt7dncnR0/AuyBXeSIyHBAwAMI9TcFg9rcwAAAABJRU5ErkJggg==',
    order: 320,
    base_experience: 172,
  },
  {
    id: 242,
    name: 'blissey',
    weight: 468,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png',
    chain: [
      {
        species_name: 'happiny',
      },
      {
        species_name: 'chansey',
      },
      {
        species_name: 'blissey',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABLUlEQVQ4T2NkIBMwkqmPAavG/wz/GRsbGhkbGhr+4TIYQ+P///8ZGRkZ/4M0/G9oYAIrwGIAikZkTQwMDFwMDAzf4Db+/8/IADUQJAbX2NDQwARz2qvajv2/GP4YP2muMV66+ba+6Kc3UnXRlpMa9u9naXB0/IOi8f///0yMjIz/KmbvLzZ7fq+H9+8bhtcXzwbWGsWmGDMz9q6q9tkfumoV8+qwsL8oGkGc/Q0NLI4/dA1ncL1T1z57tGvzq/9PVwrz1D/cMnWbQ8N+lgMNENtQNTY0MEECoYFjeYX4eROmfxpLZDQZFty5Z/SwL+V8aOgq5tWrIbZh2AgJwFVsDWcuazIIcbkxyyne/dsSsR4UwOjRQt0EAHKWoOB7pltSav+R/YVsK3VtJCb9AgA4J3UPOyA4dwAAAABJRU5ErkJggg==',
    order: 171,
    base_experience: 608,
  },
  {
    id: 243,
    name: 'raikou',
    weight: 1780,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png',
    chain: [
      {
        species_name: 'raikou',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACAElEQVQ4T2NkgIL/DAyMjAwM/0HcVatCmUNDV/870OjAfJDhwL+GBoZ/MHUwmhFZ4OrVULbvR+79N0k/+xtZ/P9/BkZGRoihKBr/NzAwMTYw/DsxS7+Og5dD8fmN93MVjYR5/v5l0nlx6+0x54obx2BqsGpcUao67S+rYBL/31MJ4mY+nu8ePddheHtpjnvL7+n7GxhYHBsY/qBqhDplRZWKET8XTw+/GO+Tz99+qb669+IJL/+3SQHNrw9jtbGhoYGpoaHh39IKG0FXT/2FouJCvseOXLvFzMUQahG19hLIFnR/wgPn/6pQZsaw1X/XdgbPMdcVTN514E5uUteBKfc2htkxcfA9VnCfc/////+MjIyM4EBCDlUQGyQovLnR+LS6puwbcTX1LXzsfxvv3Xi6TzlwufP//6HMjIyr/6JohDmXgYGB5cXlluvC356qsAgLMLx/8ZHhyN4zUX71p5aD4jcsDEMjAxM0ovn2zY+8pSnHI37n1vPnLAy/xV+9/2bnX3X46P4GBxbHhgPgkEVJAP8bGpgYGxr+LSuQnSurrq1x7dqj4/9//+Tj4uX6Etd9uQg5gFA0wuJoRZvbJE52XonTF16v+PTtxQ9NeWGLzL7jdQQ1MjBIKFiZiPEcO3PpCgODMSsDw0sWBoYn3zGSHHoChvEbGuD+hnkLnl4ByL7eD/Wk5E4AAAAASUVORK5CYII=',
    order: 321,
    base_experience: 261,
  },
  {
    id: 244,
    name: 'entei',
    weight: 1980,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png',
    chain: [
      {
        species_name: 'entei',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABwElEQVQ4T2NkIBMwYtPX0NDAZG9vz3Tw4MF/DQ0N/7CpwdAI0oSs+P//BiZGRkzNcI0N/xmYGA44MDU4Hvhz8eIisdcvv8W8ff32fHh09f5Vq1Yxh4WF/UW2GaLxPwMjAyPDf6iE6K7tMw/YO1lqXbhw/bm5Q7gpw3eGp+guASkHa3LapGm0T/D6/YRKZfPsvo7tbOyCXx/cvcR94ujxuPbe1YsbGhpYGhoa/sBsZVz1P5Q5jHH139CjZnt0+XT063TniZ4/ueLozdtPrTas6HnIxvY8cdE6hv0NDQ4sDQ0HEBob/jcwNTA2/EvYb+Pg8d93/vvLH89uy2874Tu1rNzUyvL+7h17uz9/+viquX3xwf///zMyMjKCvQT2I0wzAwMDa2dH3nR5BVnr3z9/vtLRVbc7e/bSxq+fvr19+vJ2QVfXps9QPf/hoQpzMsigNav7u9+8fpP76/evS8JCgpqMDGyxUbElG5BDFyUeV60KZQ4LWw0Kdv7CHH+5/ikbr06fWlH55t2bZbW1c+4jhyxGAvj/n4GRERE18KhD9h/cj+hJCqQoLCyMafXq1f/2729gdnCo/wsLFHh0kJnGGQAhRdQPZndOmAAAAABJRU5ErkJggg==',
    order: 322,
    base_experience: 261,
  },
  {
    id: 245,
    name: 'suicune',
    weight: 1870,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png',
    chain: [
      {
        species_name: 'suicune',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABX0lEQVQ4T2NkIBMw4tL3//9/xtVhq5nCVof9xaYGq8b/DP8ZGRkY/4M0gAxgZISwkQE2jSCx//0OBQLv/r2WbT609DJRNsJsuLrhxlKGP6xRV86fsQ9vDT+0atUq5rAwhLNRbPy/6j8zYxjj36PrdopJcGo8FeTiZzl18fgqjzzPcJgczHa4RphN6xvmC3DxSdn++ffLhvHXj8y7r19Y5/bnXl4VuooZOaAQGqEBMj+hgUNQ3aD3A8OTJ9zsrCVP775cUjC1Lh9qE9j/IDZa4Pxn/P+fkYGRkeH/5sa8xNefjs19/1XzePGMxdZ4Nf5vaGBibGj4t7zM2uTbX/OpG4+8STXXepH18fvrpq4V5581NDAwNTQw/MOw8f9/BkaQbf2Zpkov3p3m7VzJcJGBgYE1zZiBYdZZht944xGmGaRoVWgoc9jq1cSnHJCTrl5lYFy9mgGkCR4ghFIOUckeABgxmQ/RaGmaAAAAAElFTkSuQmCC',
    order: 323,
    base_experience: 261,
  },
  {
    id: 246,
    name: 'larvitar',
    weight: 720,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png',
    chain: [
      {
        species_name: 'larvitar',
      },
      {
        species_name: 'pupitar',
      },
      {
        species_name: 'tyranitar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABrUlEQVQ4T2NkIBMwIutbtWoVc1hY2F+QWOiq/8yrwxjBbGwArvH/fwZGRkaG/yBFyGyG//8ZGRgZweLIAKzx////jIyMjP9nr9sXx8rJI5fgadaSNudC+vsnt+avbgj7haQBpB5sCCPMSWkL79o4GvAffvv06XfeB7saz32WMOAsj638uvbBYk3WLzKK79f4e8Y3XIJ5h7Gh4T9TQwPjvynTF/p8k7SoPvHyd1Uqc7ncxb8JBW8Z5eYpMVz1u/dD6ZjB1+4J0ZVb38NchxI4V/dk9766P/X46sdzNfktAprkX2xnEH7b2xxaer4O5LyGhgamhoaGf2CnQvH/0NBQ5uJE+foHd+9G8/BJfGbnkdZj/Lj54usf5j9//PgxKbFo1rL9DQ0sjg0Nf2AaUUJx98KAtcJiUkGcHOwMHz/9YGD595Lh3qOvl8Lyd+ojhzbW6Fg1LchbXERg7YtXH2/wcrId+sPItMsvaekWrBrR429ao33o18+/D5b2HHuFNwEgx9X+/Q3Mjo4Qv5w5k8Z67977f2Fhq1FSEUqooia/UObQsNX/GKERjjXlkJPOAWXIxg85XaVYAAAAAElFTkSuQmCC',
    order: 324,
    base_experience: 60,
  },
  {
    id: 247,
    name: 'pupitar',
    weight: 1520,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png',
    chain: [
      {
        species_name: 'larvitar',
      },
      {
        species_name: 'pupitar',
      },
      {
        species_name: 'tyranitar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABQ0lEQVQ4T2NkIBMwkqmPAavG/w0MTAz2DkwMBw/8Y2xg+IfNcAyN//8zMDIyMvyHKV61KpQ5LGz1X3TNKBobGhiYGhoY/u1ZaKb2j/N32ftPLzeGpzzb/P9/KDMjI6pmFI3/9zuwMDoe+HP3hH2dkjpz46ljn97df/0oMiLh1a5VqxiYw8IY4DajavzfwMTI2PDv6kGbTYI/fHz/PBNjOPJ25/6okpVO/1etYmYMC8OhcVUoM2PY6r87pzjUqHCHNn/8+oHhxNXDsVnTdyz539DAxNjQAA8oFBthAXEsp01DWo/5+q3Xjz65nlwpw7DpzeeGhgamBlwaYZLrV5Qqsxz+q37v6p1/P73+XCgr2/YCPbSxRMd/RkZGRnh0QKMBpA5FDHsC+P+f8UBjI/Prq1f/h61eDfIXukHYUw4xyZDstAoAD9+PD1rc5aMAAAAASUVORK5CYII=',
    order: 325,
    base_experience: 144,
  },
  {
    id: 248,
    name: 'tyranitar',
    weight: 2020,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png',
    chain: [
      {
        species_name: 'larvitar',
      },
      {
        species_name: 'pupitar',
      },
      {
        species_name: 'tyranitar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABbUlEQVQ4T2NkIBMwkqmPAUXj////GVevXs0UFhb2l5CBcI0gTYyMjP9RNfxn/N/AyMhQz/CfkZEBRQ6sEabp4sWjYr9//xJ6vd1R6/sv2XAW5hcH/Rp+T8NmO1jj/v0NLI6ODX/2L8zrZmP+E/754dZFShIPqy9eZqjT8Jn+7ffnlwJGgQ21//83MDEyNvwD6QFrbHBgYGk4wPCnJoghnY2BoSUrO/CNsJS0xt2Lty7defJc+td/oTd+pQc1/q9iYGYMYwD7HyNU26KlfdxdhZbKyyryPbz/4OPSpZcOnL/NMGv/E4ZtoaEMzKtXo2n8z8DAyMgACYCaEKFlwlzvAs7fFl216PjrBHA4IMmj2Pj/PwMTIyPDv9NzlK0/ff4e7lz4rW7fZMEZvMx/q0yzHt1raGBgamhgAPsPq1ORQ/D2NhX2pafu/G1oYPiDHrJYU87//wyMjYwMjA0MCBuI0oikCGQwWqIgwqn4kh0AIt2MD4NReusAAAAASUVORK5CYII=',
    order: 326,
    base_experience: 270,
  },
  {
    id: 249,
    name: 'lugia',
    weight: 2160,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png',
    chain: [
      {
        species_name: 'lugia',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABLUlEQVQ4T2NkIBMw4tL3n4GBkZGB4T8ueQyNIA0MDQ2MjA0N//7/Z2AE6WbAYgCKRjRbWBgYGP5AbQSpQ7EdrhFJE9vrrKBpPGwsnk/ef1mpunBb0f///xkZGRmxa2xgYGBqYGD4x8DAwHEt0e+WpoyM7N6rV766rDskzMDA8LOhoYGpoaEBJA8GqE5taGAC+W1Te+58OXGBhKNTj2xkD3Nuu8HEfrWntPQrVD3YZoRToc5x2L+fo2DhrDl88luieD+qf33x1fDOrv/ffCfPWfoE2VYUGxESLvxn+r5c4P/LonC5482ioLc34qFBC48irBqndTars95+Effv27c3TPKCN1Pb+7Y1NDiwNDQcgIUyqh9JSQw4U05DAwNTfQM4EOAhiWwwTo2EkjDZGgFRJnoP0C4dQQAAAABJRU5ErkJggg==',
    order: 328,
    base_experience: 306,
  },
  {
    id: 250,
    name: 'ho-oh',
    weight: 1990,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png',
    chain: [
      {
        species_name: 'ho-oh',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABnklEQVQ4T2NkIBMwYtMXGrqKOTSUgSEsLOwvLnOxaQSJ/YdpaGhoYGpoaPiHbgCyRriGktZuPRVZcbaMuLgzIA3YNMM1/v//n5GRkfF/TkJIrYGydiMTO++/zQcPn/j87n3mnuOHLqNrhmtctWoVM8hP3UWZBQEWZv2/v/xjyOzueXbw+nVTBgaGZwzGxqwMZ8/+hjkZrnFmWhpr+qxZvzdXFge8ef5+/Z9fPxgYBLg+G+jIm5pm1d7E6sfQ0FDm1atX/zVlkDaYMSn7gLiJFP/zJ89/Sb1jZ/vBwXJNOSEvLDg8wcuNn20CyHAGBgZGsI2rQkOZw1av/pul6lxWMTG0U9ZM+v/7Rx//fr70juXMpds79767sPbPD167WSu2xWI4FSSgL6o0pzsnOFlCj/fXh/s/2Z4/+crw79/HTb9l3hzwVBWdI+o/7zMskDDisdbYS/fe2W1/NcKdZFh+8hlLKfHtOPrl6uNZs86+QQ5ZrCkHW2r5/5+BkZERkTAwNIL8C9YYysBwbdprxnoHh38M9Q3/kTWBpIm2Ed0VAFWprRBFXInJAAAAAElFTkSuQmCC',
    order: 329,
    base_experience: 306,
  },
  {
    id: 251,
    name: 'celebi',
    weight: 50,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png',
    chain: [
      {
        species_name: 'celebi',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB40lEQVQ4T2NkwAL+MzAwMjIw/McmBxNjxCX5f/9+FrjcQYd/jA2M/5DV4tSIbuD/hgYmxoYGuGa4xv///zMxMjL+e75gXfe/f0zevxh/rhLmF3j09fdvode/v+3Uiwm7vGrVKuawsLC/IEPBGpH8xHG9df41DT09xX/svxmY/jAzMPz+y3Dnzp0PzcUxOosYGJ42NDQwNTQ0/IPZCKL/MzQwMF2UXnVSj0/K5NvXr7+YWVkZLl26yvb5y5eTj8R/eiQ2NHz4//8/IyMj43+wxgaHBpaGAw1/JvP4Bsf1Z6zhkhb9z/DrDyMLL9fvj8oirHtmLF4c0lEZ93//fxZGR8Y/CKdC/Xf20NH5Rn95E77py/36/vIN2+d1x/5/MZNn+Pjw2feP7P8DvGOjdqM4FWb9gSOH5kty8iaIvPjK8Pbduz8/RHkYOQT5mLkF+RkuXL0yzTswMPv////MjIyMfyGBA3U3AwMDZ15Xs0yolPpGRV1Nzd8cLAyPnj8/8/7z16YAX989DAwM36EBCvEjmmaGJZGZBb/VxDj4P/5zfzhhY3Ehw6VzUGWQQIRFB7LmAwcOMDs6OoIDgIGBgXn//v2MDg4OIMX/QKGJN8mBnH6gsZHZsaEBZgBGyiSU5OBOQ9cJAMs30g/GBJGlAAAAAElFTkSuQmCC',
    order: 330,
    base_experience: 270,
  },
  {
    id: 252,
    name: 'treecko',
    weight: 50,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png',
    chain: [
      {
        species_name: 'treecko',
      },
      {
        species_name: 'grovyle',
      },
      {
        species_name: 'sceptile',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACgElEQVQ4T11SW0gUYRQ+/8zOrpq3HbUo0jUtNEwUtCBWqdUIepAMmvESRUQg0e0hs6fcf9VoDUpIjFa6qA8is0GiKFqurr0UlBVKtJWtBa6sl10hb7jjzB8z7krtefn5P853vo9zPgRhRQihEEKyAhNMKAs4KYxNG+F9KAQIgkDzPK8QiIIJnEDzdl5SBxCCEEIqHiqViAmhcFDF5/PtZqfYWZSPxBfmkcy19T+pZ60nBxSyxQII4003CGNMYYzlqnPc4RzjsQtpBsPFkde9Rxrvt7zpuTPsimJ0GUOfHfnWztqxf9WDVgmqbWh0BOamTCl7s8BYVNQx3uqdjNuhqZvxz8Osbwab265b6tsc6bfPF/8ExboypcLcmZiVGu+SkDZhf3KiaNAtMe6+H6CNTAlIgQit1zNdd+1ZOa5tHxnsflB+anx8dmXL6pPHj6wsG3drXWLkHLkBovUAH7/nkUg4QG/ExLoGxJhyJsBcidInid96mmuUVSmy6sbeddV/YHNP58muu2JEJM0wDIJ4pgc+eUoXny9wg9uZ9QkNu7OwnjtYololAkcj3i713jtRlpxb1kWtjILHqyGxqcVL7HKbuOBf9RW6Lp0xZ5JfTx82y9Nf3vq37kiIQCPES04rvNyTfbRgbNhZnbLPVOP2zt1I2rbaaro5lQEAa//dcVMVaMSDtPi+sn153l3y6mvJaHrERAGt9dvYaPlqVsVQGgD4OI6j7Xa7FLQq0Ijnpd7+/uPZBhhcdXe0d08WOTQgTmTu0l1O0El6Y2lVJQAEQjsJWVVe0tTUFD8pHYprqTb+Ds9m8K/2qckJNYTn0WazMXq9XuZ5XiIYKIRVwlZe/wLEPxQsNhcvJgAAAABJRU5ErkJggg==',
    order: 331,
    base_experience: 62,
  },
  {
    id: 253,
    name: 'grovyle',
    weight: 216,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png',
    chain: [
      {
        species_name: 'treecko',
      },
      {
        species_name: 'grovyle',
      },
      {
        species_name: 'sceptile',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACSElEQVQ4T2NkwAP+NzQwMdQ3/IcpYWRkQLBx6fvPwMDIyIBQiK6OEV3g////jGfPnmUxMTH5vaUn1JiP71vjw6e//116fr2we9bjuw0NDEwNDQz/UDQ2NDQwNTQ0/IMaxnlqScRVGdGXio8vHmQ4fNLgZsnaP8YMDJe+MkBcAwH79+9ncXR0/MPAwMDy9OVLM8YfPya92rvWiEHX+Bfn+tXsD7dMueoWlGvF0DD5E9QbqI49cuBAn4KycuGff/8YLmxY/f/aw5f/9H+/YT67f9eeuitPXaGqETaePXtWj52dveXvPwbfv//+/3/96vmf7xcXsDL8fP1fy8ro/7UzD5mObztk23ng2ZFVoaHMcKdevXz5uKaOjsXR3Zt+sn+9x8706yXDj4+PGDh5OBnkNKR+3Dx7j2PL2ouNHTuuNDQ0OLCANXZ29pm4Otsuuv3kw1aBF+sjef7dkb7/hPkXIzM7GwOXOIOAsi3DtauXGK5duFI0f+O2/oaGBojGVatm8jNwKPF/PNQWwCfvMPHCtTuF7dMX35zSUrXty5dPr34JKUx+f+5MuTjLZ56vnNzhzbNXrWJEjoIDi5ue/Pr5V9otpVG0OFhBxM3e7jorhxjDprQexZ8m2npyngGL3/34ldTd3b0W4sf//xlBMbNx48aUD+/eCV9ITJzYz8DwfcvqxVUsPMLV167fiCkqKlq/6v9/5jBGxr8o8YgnyXIyMDB8h7kMlLIYGRn/o6Sc////Mx84cIARmhAYGxoYQBiWkkBmg9SDEzoAsiMFQJM9KYEAAAAASUVORK5CYII=',
    order: 332,
    base_experience: 142,
  },
  {
    id: 254,
    name: 'sceptile',
    weight: 522,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png',
    chain: [
      {
        species_name: 'treecko',
      },
      {
        species_name: 'grovyle',
      },
      {
        species_name: 'sceptile',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACoklEQVQ4T2NkQAKhq1Yxrw4L+wsSamj4z9TQwPgPWR6ZzQjjwDQpMDBw6HUeYd1UbvMZpFnr6mrG0NBQBoZQhn+MjIz/GRj+MzIwMIIIBobQVf+ZV4cx/k2celmWg0fg4Penr9oXVBnPRrdtf8N+FscGxz8gcUaG//8ZGcAmMTBkzrl/4uc/ZnONvZfvKcjK3A7r0ffojNoZLSku5K5mLJBjEaP6qTPpCG/5PJvPjP///2cEOcG39WSLiJBsNevRo7+cuNTYOHm4GR59eHJPlEtUSYJPiuHSwyu939/++McuznizYKHLXJgfuUsmnXv6889/fsGDt/9qi6ozff7049ebL4/fMP1m+8wkycz4V/SDupSg7OtNNTdVVzOkfwRrXHVsFafsX8mtd1mV7G+e+/b/95GHzBJukl++CTFdVBIT+PL521+bw0f3F9dGaYu/+8U51VxT8y3cqRu2rjF//+q34V9hrYbfYnriRnIMDL8/f2Z48PYvg7q6AAPzu6+bf7+5fPLbjx+djo6Of8A2Lly4UE5NTS3y+8+/bB9eval6waz4XEdTQfD5uT0/r9x/yS2gYcVipsLL/OTGFYXISP9n////ZwJr7Ovr4ywqKvo+YcZGVyYmrrV/3x1doGwd7bLm+Je7zC9f/Ofp9SxkXfF42rvvzC0LEqUOg+IcGjiQSPVJ39q15QXLx//R7n3Vf6/1Xrv2Xv7d3beHDi3z64ybfqWWk5X1z8wU9fa0mWdY4SmHgYGByTl6Qaaa7Ldl0zs2f0ub1rjg6eX7O76+fLD3wLryJyGVGxJZuHlvrqhxPgZKUcga4QklLW0m18FZ6cw3GRg+g1NW6Crm1ashaRgW7ygawQq0r/1naGgAJ26Hhv0sB+od/oJSFkgDOKlBUxkAnMUumhyFcmIAAAAASUVORK5CYII=',
    order: 333,
    base_experience: 239,
  },
  {
    id: 255,
    name: 'torchic',
    weight: 25,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png',
    chain: [
      {
        species_name: 'torchic',
      },
      {
        species_name: 'combusken',
      },
      {
        species_name: 'blaziken',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPElEQVQ4T2NkIBMwkqmPAafG////MzIyMv7HZTBWjav+r2IOYwz7y8DAwMTAwPAPm2YMjTPPzGRNN0n/vWD7ZL8v376I5QRXzlm1ahVzWBjYIDhA0djQ0MDU0NDwb8fZjSrvv7zY/vjx48KymJYtDfsbWBocG/5g1QiTnLCzy0eRTWAzpwAXw6NPr1tT7AtrkJyOaSPMOVUT8xyVNGS3iEmKcj24+/hRXmCtPgMDwweYa2A64U5tYGBgamBg+HeRgYH7Xk/yrQ9mBlKPbt7985+B4Ts/n0BQYXjDHmS/IvsRxAYHf2eW7xZWB33vj98+/n734jUrKxOnb1/Z/C0NDQ4sDQ0HwH7FjI7//xkZJjTyZ7274/fhy/Nny/r3XmVgYHiOHiXUTTmggLiqdZWRYTUDg7a29n9QFFHNRgBksoUPIusFqQAAAABJRU5ErkJggg==',
    order: 335,
    base_experience: 62,
  },
  {
    id: 256,
    name: 'combusken',
    weight: 195,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png',
    chain: [
      {
        species_name: 'torchic',
      },
      {
        species_name: 'combusken',
      },
      {
        species_name: 'blaziken',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABU0lEQVQ4T2NkIBMw4tf3n5GBgfE/NjUYGhsaGpjq6+v/Nx44wNzg6PgHl8F4bbQM7eO09tVm6olz/4puAFxjQ8N/poYGxn/Vi/abfHzztp5VSHLdf0Zm1wnxFlEgTSCXNDQ0/IMZgND4/z9TAyPjv+plJzcJiIr5/mRiZeBgZvzw5fmD5SfPX2vb3pX6BFkzTCOIBgUCY/Wacxd5eAV1/94+/otJw47tzaM7+X1JDpNgLsKwcdWq/8xhYYx/61ac3MQtJuf748yWry855bl//vrVObfYp6IB6iIMjaGhq5hXrw77axvTaqRjbX7wPyM7D+OPbwyvn92tWNOV1QmTx9AICYD9LA0Njn+sIyptNQxNlv7+/VfqyoHNuuf2LL6OVyNIc+iqVcyrw8L+MjAwcPrntilunFx1jagEALEZEjX4UhW+BMAYGrqKCeRvom0kJt0DAF3okQ/JLHehAAAAAElFTkSuQmCC',
    order: 336,
    base_experience: 142,
  },
  {
    id: 257,
    name: 'blaziken',
    weight: 520,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png',
    chain: [
      {
        species_name: 'torchic',
      },
      {
        species_name: 'combusken',
      },
      {
        species_name: 'blaziken',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACSklEQVQ4T2NkQAL///9nYmRk/AcTamhoYGpoaIDzkdUyoiuasbRL9c7ju1r3nt48u27ygSfIijE0wmxasmVmPCcvx4yHr+6xf/70ec6bx5+aJjfMecLwn4GRgZHhP7pGkK1gwYkzGg5JyvHbcigK/3399M3fO1fuN7YXTG7D5mSwU1eFhjKHrV79V5OBQTVnec05VhFBHmYGhv8PHj7e3JwyIYmBgeEtumaQRkaIhYz/k2sTIsztNJZ8fPOZmYWVjeHDxw/3H9x6VJHgkbPO0dHxD0QtxHWM////Z2RkZPw/YV1jl4gYb+mZqzwM+urM/5gZPzL8Z2RhunHl+pb2rOl+UA0IjSDd0xZOif/B9mrml79c/yffduMIFLnNYKxy8/+9hy8YZCRkPj259Nq2s67/csP+BpYGxwaQzWCrGWbNWqB9LK3rrdzsyBXbn9jYuyk//60i/Zh1/dZdX9QFtJfoqplMjYuIu4ISqg0NDSwNDQ1/MpuT1BWVRM9z8cuyi4qxM/38/uXn65cf2Pfu2XPp8++XLl62MbyP7z78LSrH+rYxfdY3Rlhodc+uUXz7790ddi4Gpu8/f/8RERBlkZaS/n/m/GlGBiZGBikxaYaXD1/d/vn9Z+Hk6oVb4RqnTp0a/YXtXfHWsxtW3bzzZKuToZmOlZlN/7Nnz0Qevb1fzsrGLPT93c9HK/u2zQRZBk9yubm57JMnT/6J7I9Fsxc5ffnxhScrN2sTetKDa0SkWQeWq1dF/2tra4NcAw7B0FWhzNrXEHyQGADtwQ+gXm175wAAAABJRU5ErkJggg==',
    order: 337,
    base_experience: 239,
  },
  {
    id: 258,
    name: 'mudkip',
    weight: 76,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png',
    chain: [
      {
        species_name: 'mudkip',
      },
      {
        species_name: 'marshtomp',
      },
      {
        species_name: 'swampert',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACnElEQVQ4T2P8//8/EwMDw//VqxmYwsIY/zKggYb//5kaGBn/XbzxQvHXP4amL99+vHz24lMrI7K6////MzIyMv5HFtu/fz+Lo6PjnxMnzrtKqurs+vqHgeHW1QuLGW/ceVTDwszt9/HL5w5jXYV1IBcwMjL+g2luaGhgamho+Devt0XWJjDpwhdGbqHXr5+/ZXz49NUlOSlR3eu3XxzRUpO0RdcIs3Hvjr1GMlrGZ/+ycTN8ePvyM+PR8zceWhmoy714+e60pISwGbpz////z8zIyPh3586jWarGplOZOVgZHt17uINx86GLe31s9Zx+//75fcG6bQZpEUG3rl69yqalpfWHkbGRgYGh4V9l25JJbnZ6GQra2qyfv3xnuHL+pDMjA4M17+W76w7oKIkZvX79+kBgSnT00U27nyECaIpwYyuTRVxK9Cpmbj6uKxevlHhZ6/aCQzW0a5VEtZ/NRj11SbNT569va6lae8TCRkGqpia2koEhp3D3wfQ4FV01wecv3wu/e/O2xMdWu5dx0rZt7HleXj8ZGBj8nr14u/Hu/XcMN289YQiNdGA4fOryA04mJgFRCQmBbdtP7JVVtHT+8vHZkvRI3VhGWHC3tEyRz8yMvXvpynPmq/cfPeEVVf6urqakys/LwPDq1fNP61fd5JORE7579cZVx/l9kY/BTm1o+M/U0MD479CFezFfT52b9/LGtaqqP7633QUMNjAxfv8d5sPI+vnjT4bejnqP43sm7mxoWMUGTzmwaHBn0JS0TBB/L+zVKPn4AcvJ3effcoXb861WkFdMePT4xYayNPNAkEUoSQ4W2bAQnTSJge/Jm5bArqaahenFC+yU1eTcy9KdqkHyKBohzm5gqm9o+M/w/z8DLN1iS8MA1x43IS9txnYAAAAASUVORK5CYII=',
    order: 339,
    base_experience: 62,
  },
  {
    id: 259,
    name: 'marshtomp',
    weight: 280,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png',
    chain: [
      {
        species_name: 'mudkip',
      },
      {
        species_name: 'marshtomp',
      },
      {
        species_name: 'swampert',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAC6klEQVQ4T12SfSzUARjHn9/d78rLKfJ2dCgSMpWXqGOWW2K0XdLJUrY2MyMTtbG2OPPW1u1KUtOdpJBcXro0Mm81Iztud0KYcPPSXXfEnfNyb792Z1rr+fN5ns/zfd4QwAABBDD4zzAABAHA2u+Cg2WfKzE8x9FTOds3D2kgNDCIMT8PzHx9vGk144umYtnqu6gyUPQwAA1jgHak1MZfK5B3jMVmHmiyV4mbS59ToQ5mdsCOy9ntRKv7Xg/Z/S5cCDa4DIqwo6ofoUOryjEmejLvIpR95ZYOR7XeMgRx0YOZ39jTimNrCZVsL4BkjA54hAs67CygSC9oJy44pWz0zT+T8oqhxnylrdafGYXATXBMjb8jzO8V2GqbutscBBCFMQDNB9DTxwD15oJaFOuaAY0zj6Sv0qHKkzD0JpB1yqBol8HPFd3uE5Js6nnKQp8g92LOoPTfXYkiLboUC0rqArsI2JqZl92hlTeMM9J7stqzVIoIv2YOLP9wap7DkdO3A3+Zxi/G/BzQtGQolqaLJORQtZx1fc+1gdp7ENNbaATbmmg5p32wkql6ntZ1AlC+M2wEyGx1Er5MpcADSSkAbKsqHfl4hPCdk8WiAh8kRlBYdy5k5XdnCigPXVqVBZu67VkGj/F2kDvTgGuh1RFCT+j3k7YJ22OjiUkJn15XDCUTkKEhf0JAwLBmSQChOKnH58oS/EISuxHsbIjkdR1B97aFg8ebPNCHufjitsCLN7m4mEy7ypMiDAbgGAzQj34gpgla1yO5FdBVrdqMsDIziZyYEWunBr+g+6YTNcejKYSlNfdOH2p1uKFLY6sNDXR8XBxXx3z8JFcyN0GxtCQNu7rYnZFLJBT11iae6sZDzQ9aK7d17mNt9Xx6NmdkYedzdgpg5WVlV2bFsyFMJuuF6CnsXcMFDeBwErA/ehLmZRYFVHpNQX8DHaXEcTd3wb/w7v3Ky1OJh9XNSSRnsrUc9Xt/nlYhBADtbvwPSp4+7nR0BgcAAAAASUVORK5CYII=',
    order: 340,
    base_experience: 142,
  },
  {
    id: 260,
    name: 'swampert',
    weight: 819,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png',
    chain: [
      {
        species_name: 'mudkip',
      },
      {
        species_name: 'marshtomp',
      },
      {
        species_name: 'swampert',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABN0lEQVQ4T2NkIBMw4tP3/z8DIyMjw39sajA1/v8PEWNkhGj4z8DIgEUzThv//2dgalydxdUQNu0LyBiwEUgAQ6NDw3aFAw0eDz37Z0fJCKa5zE5gSGZgYPiHrhmuseF/A1MDY8O/6Vu2JLGwvvpqpS7fJCLMrHbwyBnbMM+SI6v+r2IOYwz7C7MUrhE5IO4+2b+Nl13U887d+ww//t+xcbIsPLp/fwOLo2PDHwyN4HD4v4qZkTHs79HT80LuPrm/6sNXxr8aKnZL3CxcEqEa4H5F+BEaeqtWrWK++3fjFCk5nvi/f/6cEPtsU79w76wzq/uPf0f2J2rgQDXnz2YQf/KbQVyEW0BxZvyHjei2gWMLI3LR4g3db1j9CBNsaGBguqoFMjSUYXXYanhI4o1HYpMu3rSKzxAApNF1D3d8kLoAAAAASUVORK5CYII=',
    order: 341,
    base_experience: 241,
  },
  {
    id: 261,
    name: 'poochyena',
    weight: 136,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png',
    chain: [
      {
        species_name: 'poochyena',
      },
      {
        species_name: 'mightyena',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABcElEQVQ4T2NkIBMwYtX3n4GxobGBsaGh4R8uc7FpBIn9B2n4z8DAyAhloxuAovH/fwZGRkaG/zKFoZxRxo+Eu2JOPlm1KpQ5LHT1PwZGiGEwgKwRbtOErX7LBAVkQj/e+2SSF7vkIth2qKHYNDLkbstlZ1k6T82yMHiZKp+4ztm5R6KXGPAfs/n4l7UlY/dtZM0QG/8zMIKcktxgKSQkxTJfXEhCQeDqG+X78v+m/vrObPv2+dfqeU0n94euCmVeHbb6L0gLwqlQzSDB7RFRydL8fHOmG51Pn55+chZBp64KDWUOW73675R8L7ufP74d3CPy/xozn8Cnz4/ffDo45agHNLTBYQG3saGhgQkUb0VT/WWZ2D/MfPvpLSfjF26Ls4+Yr7H+/LbuzOILrQwNDEwMDQzguMUaj2lpxpwKxgpyX/69ZWnLPHAFWyLAnnKQVILjcTUDA8NqSKBgjQ5k8YaGBsarWlcZYaGIN+WQkt4BdvqPD6EOiq4AAAAASUVORK5CYII=',
    order: 343,
    base_experience: 56,
  },
  {
    id: 262,
    name: 'mightyena',
    weight: 370,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png',
    chain: [
      {
        species_name: 'poochyena',
      },
      {
        species_name: 'mightyena',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACF0lEQVQ4T2NkwAUaGJgaGBoYGhoa/jMwMIAwCmDEoo8xdFUo0+qw1X9hcg4ODiwHDhz4g6wWXSOIDzbdJlNXiZNXQuj2qd9XHhw48AOqCS6PzUYG9xrvcma2P/Z/f/3+8OHZL4E/v/7tObvkWB+yZrjGhv0NLA2ODX/SNmZ6m6vxbXl87MaGhuSNgbENbmIXrn8OY2b6x3Jh+ckJDP8ZGBkYGf7DNTo0OLAcaDjwx39FZIrDtQ9hPC8/2kzW+598Kfv48v///zNpeOmm//rFsO7+3isvGRgYGMEaGxoamBoaGv7FdgfqfPn0fsX6v09nbn6pVH9VmYllhzRPjcSLT7kMb9kdV3RtehYaGsq8evXqv4wMDQxMDA0M/0wTdWQFRER2fvn0S/EVz8vJW/7Y557jf8/cJfVrqeSdLwm/mBlW7bt3MIphNQMotME2wkKK2aXQsvQFN7NIqrk6i/tpxvwDWv8ZFj5/1sNw6SUDmzC70ofH3yovrrx4C2QZRqiGWlpycueIX+ffcO/eJwMJ1U+8bDLPrn88wCvyq2RX88mzoatCmUFxjAhVUEppYPjnWekpKiTOMnkp88dKjfuvtLVFZaa8f/O79vu/rzeP9585hRGqsFRhnGbMenbW2X8MDAx/V11tYFu36YLUisoND8Dy0PAAMbEmAJAEzEmwUL969SojKDRhFuDSCAswxoaGBhAGuQAFAABFf+STkkO1/gAAAABJRU5ErkJggg==',
    order: 344,
    base_experience: 147,
  },
  {
    id: 263,
    name: 'zigzagoon',
    weight: 175,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png',
    chain: [
      {
        species_name: 'zigzagoon',
      },
      {
        species_name: 'linoone',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACHElEQVQ4T2NkQAb/GRgZGBn+o4gxMDAyMGCIgQUhAKopqcyPd97NqwK+Lsoswm9/PV/QcOAHmkFgLlxjw34HlgbHA38ylsUskRBji/728+e9rr7dVgx7X71kaGBgYmhg+IdsAEQjkkTOXL/NLr//+Wx5+2nGnOpDmUiKUZwM4sAExBkYGD6W1tqb/nn+qvOHPi+T7OfnbVVVj08zMDC8gPoTrpnRocGB5UDDgT+BbY69v1kZsr/++zlVSVXaVE+Mw/b+iesXTn7nEpH492/t+vojBaGrQplXh63+C/bj//8MjIyMDP+jetyiX/756nLr46efnrYGXp9//JT+8/D9dk4+toe3rjz7c6L/fD7U2UwMDAz/IH5Eiobqif6BGkYKi15+e8dzff/ZB3OXPT7EYCYsKcHAzPzz06/897seXwGFCarGCX7ijSrCVy0evBV+IsjNcE2Ol2H+3L0MnP/ZGf6zMDD8+/TD58Xqe1sZHBxYYNEB97R5s9XJkz9/XGR491/GS0vI89bdlz/+sjBy8IhwMfx69bPrZu+FcpBfwRobGhqYGhoa/kVM9az9+ftPBEvBbsPVDAxhnM4yDaYOsooffv96zMTAcO7Pd4bSK91n74K8huJUz0Z7TxYO1veby/ecABkY1OtiwcjGtPTV3behhyecPYccHhhJDtkF0FDkYmBg+AYOwEYGRlgKQmhkYGAAuR2kGBZX+BI7AHg66GyWZ2wWAAAAAElFTkSuQmCC',
    order: 345,
    base_experience: 56,
  },
  {
    id: 264,
    name: 'linoone',
    weight: 325,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png',
    chain: [
      {
        species_name: 'zigzagoon',
      },
      {
        species_name: 'linoone',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABxElEQVQ4T2NkwAEaGhiY6q+GMjKuXv0XmxJGXBoJiWPVeLVBi01rGw/vCx22iPU/Pi7LWnb5/X8GBkZGBob/MANRNCJJct4tsd7Bwspid2rzlerQK2/b/jcwMDE2MPzDqnHVqlDmsLDVf+/tidRjFxa++OrOi5e7QtfYlzMw3AT5uQGXxjMzjVlN0s/+3lFqa2TkKnf23ef3BzWCtzn8P5PGymA86w8jIxan/v/PwAiT2D7fO0iT58NKZi7+91e/ivh4hC06BXUiyGtgf2IEzrOLKT3/3n8t/v/sG8MHQabfbIIijPy/3hZJ2K2bjBzSYI379zewODo2/Fm5oKLYWPFtD/uxS+95WYQFf//6xfBKmIlB00qaYfWml/nhNdsm7W9wYHFsOPAHZiPYCaUZOcGn3jL9S/5z04fhywdTdaZPH5/uv97ztr8t6uu3Xw8LShvKVq1axRwWFvYX7tSZM9NY09Nn/V66cJLZ7UfP5y29/ajNWogvVYKP/2BHU0cDAwMDCwMDwx+s0dHQ0MDU0NDAMEmFgTXvDsPPvsaKwJ9/GZgqmzrWEgwcmIlQQ+ARDg1I7CkHKdTAfgb5ByQG8hN62gUAlsK3D3S6LpQAAAAASUVORK5CYII=',
    order: 346,
    base_experience: 147,
  },
  {
    id: 265,
    name: 'wurmple',
    weight: 36,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png',
    chain: [
      {
        species_name: 'wurmple',
      },
      {
        species_name: 'silcoon',
      },
      {
        species_name: 'beautifly',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACW0lEQVQ4T2NkQAWMDAwM/2FC////Z2xsbGRsaGj4h6aOAaQQBsCaFjEwcMvun6P47sIdieDCjj0gyVWrVjGHhYX9RdYM17i/oYHFsaHhz75Yb3cpB9Md737+YXgoxDs3MqI8BaRh5sw01vT0Wb+RbQGz/zMwMDIyMPy/mhWq8uTJ22OM/g6iIsrSDA+evT7w5NZT/7yGyZ8aGhqYYM6G2zhz5kzWf++eS2dWNjyYGh+QbJMXOufn7nO/2ZSkWK/9+nVlz/zL/vP2LrsHswDkcbApMX4e6vLqmud43n2aLfj3tbm8saLF24//X/y5fIv9m7GJ4P0n7993T5qqysDA8LaBgYEJbCMo9BgZGf8nhvinc3Lz8Et+eqobySQSw/zz38vZ7+9//Kopy83yj/l877z1vlA/grwFAatCQ5nDVq/+u4NL3f+/nuhSfmHelyZy8krXX72+on99rfH/q6v+MjKCQxYc+gg/Ghuzpp89+3trpGOv5GfWohl/OBqDuZj+GDBzNq9ffSMvg+H85FWhoWxhq1f/AlkE1/h/VSgzY9jqvzsnuulocPJcvv/x/y6H0vXuO5Ltb4rKcavNP3NXacrmm/dXrQplDgtb/RfhVKjAtFxLezdziQMfv/z8ZJyxTfL50dhMCSHOnqNbHi6zKd0Zy8DAAEpFCD/C3F4RpSuoJc6jx8DF/jWu9cCZs8v8+o3MJQsen3nLsGb7PbuiBecOg2xFTnIwp8PTKkigwEFBIDbNwO3L+x+89tk7FjAwMIADCF0jWPOqVaFMode0/zM0NIBCD8UgWCwAAAq6+UC5EvMIAAAAAElFTkSuQmCC',
    order: 347,
    base_experience: 56,
  },
  {
    id: 266,
    name: 'silcoon',
    weight: 100,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png',
    chain: [
      {
        species_name: 'wurmple',
      },
      {
        species_name: 'silcoon',
      },
      {
        species_name: 'beautifly',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABVUlEQVQ4T2NkIBMw4tLX0NDA1NDQ8A+XPE6NhByCSyNjaNs8kdVVSa+JstGhYT/LgQbHPxGLzkS9+fJ7yb0HD8zudUWeaVh1la0hTPsXsiEoNqadOcM6y8Tkt/uMY3H/eKUWsp7aYr9tYs4hbLbCNf7//5+RkZHxf27DJD42S9c1T/6Juq689GjOJn/NNuZvnwK9jcQnMDAwwAMLoXF/AwujY8OfC1Va0z/5L8+Y+prnT/6d2d//aXh+vc2pyJhoLycBtRmk5z9CYwMDE2MDw7/DGgwO9+p3Tf8urqOheHUpw2tJW4Zjr//ETMu0Wdqwfz9Lg6PjH5ABKH6cOXMma3p6+m+Gxj2umdKszdN/c3Ay3LjdyTAxZhnD//+MDIyM/2H+xYiO/6tWMTOGhf0FKfjPwMDCyMDwB10Tho3w0EMyHRZF6CGLL+XA5ODOwxmPhJIZsjwAwCCAD4343Z8AAAAASUVORK5CYII=',
    order: 348,
    base_experience: 72,
  },
  {
    id: 267,
    name: 'beautifly',
    weight: 284,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png',
    chain: [
      {
        species_name: 'wurmple',
      },
      {
        species_name: 'silcoon',
      },
      {
        species_name: 'beautifly',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABQklEQVQ4T2NkIBMwEtDH+J+BgYGRgQFEoQCcGv+vCmVmDFv9F6T6PwMDI7pmrBqRNa1aFcoWFrb6F8RihM0YGv//b2BiZGz4d+F6uBrv+3+Tnz98vcom8sDcVatCmcOgLgC5AkXj//8MjIyMEFM/zLNbxy/8O/Dgq3fdDqk3y5DlMDWuYmBmDGP4+6rHc4EoH2P8tye/GO7c2uOiv4Jh7/8GBhbGBoY/sBBCtRGq8Xyb8xQtGZbsh3cZPt7dt9PO8zDDpVWhDMxhqxnAgYVh4/4GBxbHhgN/rsxRt1Zh4Dty/uuXy5b51w0YGBj+oYcsio0NDAxMDQwM/wIZGIRDc9XOfGZk2Zc+6Vry/4YGJsaGhn/IEYkrHpmr5zjJWHBxf/WN2vyG6HhENhk9NLH6EVlDQwMDU309w39Y9BCd5AilfQDgcHsPawcLnQAAAABJRU5ErkJggg==',
    order: 349,
    base_experience: 178,
  },

  {
    id: 270,
    name: 'lotad',
    weight: 26,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png',
    chain: [
      {
        species_name: 'lotad',
      },
      {
        species_name: 'lombre',
      },
      {
        species_name: 'ludicolo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABvUlEQVQ4T2NkwA4YGRgaQPgfDnkGRiwSILH/IPGGhgamhgbsmtE1gjWFppXz33p2lefili1PibMxNJSZYfXqv/HmocbveTiOfLlwv2Xf2yOt2GxGsXHVqlXMYWFhfxlufxaNnNl379bnTzxnb743ZTgw74yDgwPLgQMH/sBcANf4/z8DIyMjw/+zDAyaj47sWHqbX8zw0f2rDOJ3bi2rLWqObvjfwNTAiPAvXOOq0FDmsNWr/94zZ3C7lbd4ywFJNVa3K9sYFO803lryL8Wjdsqc+w0MDEwNDAzgkEZ1augq5rDVYX8T522dYSesmP7u+a3/9y4uypg6fd0s9FAGawxdtYp5dVjY36jJEwqljS369G4d+ef28vi/Zi7rvw9FJf+ZCgq9vnT1asyaoqLDsIACa4RxcmdOUl75gyOw5/O1cm/2MyIdAmEM1+59YNAw0nxz7dXzgu3ZeUthliCc+v8/IwMjIzjiZRsam7R//5b7IyEu8v3R0z9HuzsCQOL///9nZISqQfEjyGYtLS3GPWFhTLMYGH4zMDAwMfQVsjMU9X+H2YQRHegpBC3SmRigoUlIIyy9wlwE9gIyAAB3lcgPGi9BoAAAAABJRU5ErkJggg==',
    order: 352,
    base_experience: 44,
  },
  {
    id: 271,
    name: 'lombre',
    weight: 325,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png',
    chain: [
      {
        species_name: 'lotad',
      },
      {
        species_name: 'lombre',
      },
      {
        species_name: 'ludicolo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACb0lEQVQ4T2NkQAINDQ1MIG5DQ8O/0NBQ5tWrV/9jYGD4j6wGxmZECP5nZGBgBCuCavoLlWN0cGhgdnBg+AcyEE0jRJOPT5z0p0/vuA4d2nI7ICDB4PXrd3ePHt30GaYY5CKYZpCNIPz/////jOHBaVc/vLknKCKu2srw98fkNy/vL9l19GBsUkJlwe+/33cuXjzhOkwzXCPI1KCg1JOfXj804xKQ+f/x+2vGO19/NOsJaLQqK8n9+Pb969NDh7Zr3blz8hNIM8SPoEBpaPhXEB7fwqQbWP3z1f3fHJ8//Q36Vm+6iCmb9y+n0DFubn6Ge/fOtW3euqzawaGBhXFVKANz2GqGv7uzGGyecZZsuyrhyaP0/h6js8QhhvPX315Z+UTiMZ+koue/P38YXtzcdXLn0eMWILsYV4WGMoetXv33UDGD1jsmx6n7Pns4GMn+Os2iKiF7/pmcxPX7HxiEhSX+fLh/muX55WXHz5w5ZwXW+L+BgYmxgeHfkbb0EgZR8+6FH+WyH28+9sejwKXHgeMCz8HDbH9uaTr/8Xm8nvPpjqKWlEMMtfsbHFjAfgzIXeBmY+G08+HThxs+P745T1HfbtP9F/cZwiXeMVx98YnhnqAigzGnBAPnxRVroya2hfyHBY65eTSfsJWHx63zB48Z6lnVCklKM7y8++gUu4Jm9deXl249n5x1irloo5IUn1D07ztHrbcuqTiGEh1YkhYrAwPDb5i4X3SX9WsOoevH56a8gyU5xoaG/cwMDAf/1dfX/28EJYrGRnCaBWkCBf+BAw1/kJMnUlrFlpTBqQoEQGmYMTR0FdPq1WHghA8A6EQWKETT0IoAAAAASUVORK5CYII=',
    order: 353,
    base_experience: 119,
  },
  {
    id: 272,
    name: 'ludicolo',
    weight: 550,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png',
    chain: [
      {
        species_name: 'lotad',
      },
      {
        species_name: 'lombre',
      },
      {
        species_name: 'ludicolo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABdElEQVQ4T2NkIBMwkqmPAavGhoYGpvr6+v+MjIz/cRmMovH/f5BahGKQAVpaWoxhYWH/GBgYUAyBa5yZlsaaPmvW78aeHk+W34wZzIy/91RUVEzGa+N/BgZGRgaG//MZGDhOhcRut/U0cHj48uuN33/YwgQFuXP3799fv27duucMDGCvgW0G29jAwMDUwMDwbzIDg+Jd39DLzFI/uYXlTL/p6hl94uRkl9i4cWPn5MmTK1atWsUcFhb2F64RrLmhgamhoeEfQ2GykNnpp5urS7OtuLg4/j9//pzx+fPny8vLy6OQwwA5cGDO4K+pqtktLSsr9OXLJ9GnT58xc3NzH92xo8Xn7FmG3zDnwjXCbLSxcTRWVFTgv3Dhsoqamqr62rXL1zEwMDxgYGB4Ghoayrx69WpUp0JDj4mBgQEU9AyWlpacx48f/w4LVbhXoALYEgBjQ0MDc0NDwx+QGgcHB5YDBw6AbMEej1jiCx702OKS7LQKAPn9iA/7QujeAAAAAElFTkSuQmCC',
    order: 354,
    base_experience: 216,
  },
  {
    id: 273,
    name: 'seedot',
    weight: 40,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png',
    chain: [
      {
        species_name: 'seedot',
      },
      {
        species_name: 'nuzleaf',
      },
      {
        species_name: 'shiftry',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACLElEQVQ4T2NkgIL///8zNjY2MoK4DQ0N/2DiuGiwQpAmRkbG/3gUMzo4ODAfOHAAZCDYUMaGhgYmkA3l5bW6v799ZZKQlf/29eu7p42Njd9BZoLUQGmYuWA+SCNLQ0PDn7qG1kn/GZg8Xj1/+uP27Qee+/Zteerg4MBx4MCBHwoKChxSUlIBv3//vnv69OnTDAwMTIyrVq1iDgsL+zt96tz5InysCbsPHWPYd2DfFpZ/fxtu3L17FmSNi4vLFn5+fu9Hjx5tOn36tD/YqTD7l06cvvsvJ7vLqYuXvm/cvIpTSVH1PC8vb/iDB4/VOThYVzMyMjZ+/vx53Y0bN27BNML8wGVh67I6xN/f6/Pnjz83b17FzsHB9ffbt2/Mb968m/TkyZN85MAD2zhz5kzW9PT0321t3am2to6z/vz5/Xvv3t2sL148Z+Dg4GQ4e/bkmePHjzozMDB8ggUWLDqYGBkZ/23evEP/2bMXRxgYGHg+fHj/5N7dO795+fjlT58+ueDgwb0lDAwM71E0wjhyunKCzF+Yt96/f3+nhpZODis79wV25j8fmJlZXp08eTLb2NiY9ezZs7/hgQOLy/buvskP7t2V5+Tgen7lytUQMWkVCwMthbjnr14/6O9pnxu6ahXz6rCwvyihCuJkZTXwZGfX/9q5e3rtw/t3j0yc2LsTKUBQEgI8OrAlN1DiqK+v/wtKw+jpF10j4////xlWr17NtHr1ahANdhY2AADXJ/4RXfoPIwAAAABJRU5ErkJggg==',
    order: 355,
    base_experience: 44,
  },
  {
    id: 274,
    name: 'nuzleaf',
    weight: 280,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png',
    chain: [
      {
        species_name: 'seedot',
      },
      {
        species_name: 'nuzleaf',
      },
      {
        species_name: 'shiftry',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABmUlEQVQ4T2NkIBMwkqmPAa/G////w+UbGxsZGxoa/sEswtC4alUoMwNDKENoaOh/RkZGuEKQBpBBjIyM/0FsvDbmTprEPjkvj4mBgeH7qkltomF5Va9hmmEaQfT/vr5Czn9Pv2YJyMh/FJUW8/r08pWegLj4c4Y/v18qKSuZvv/6w83Gyf/m////mcAa/zMwMDKCKQbu3qqcx6pKCoIC4uIMH95/YGBkYmT4/P49g76xEcPT56/q3IITm/fv388C1hgaGsq8evXqv7U58dYfv/85JC7ExyjOz/WbXVD4/5+fP1i/f/tx//v3bzysHNy1ebWds1etWsUM1tjQ0MAECrGchGANcT6+w+/evhaRV1JiEBIVZXj57DnD57//c5q6p09lYGDgYGBg+IESODNnzmRNT0//vXbxzKYf37/mMfz/++fK5Rsdj5+95l6yblMfAwPDZ+Q4RwlVkF8PzJ/P/lNEQO/79w+/AsMSL8AUw1yFMx6RTQW5Yvny5f8PHDjwFxKGCIAtHhlXrVoFijuGsLAwkAasgOy0CgA23aNQcQIT3gAAAABJRU5ErkJggg==',
    order: 356,
    base_experience: 119,
  },
  {
    id: 275,
    name: 'shiftry',
    weight: 596,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png',
    chain: [
      {
        species_name: 'seedot',
      },
      {
        species_name: 'nuzleaf',
      },
      {
        species_name: 'shiftry',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABoklEQVQ4T2NkIBMwkqmPAUNjQ0MDEwMDA5OkpCSjMQMDw5bnz/83NDT8ZWBg+I9sCVwjTENDQ8MfbK5oaGhgAYnXNzT8ZWRg+A/WCNLU0NDwD6qBpyIj0UxFSVZfRESQ69XLpyfTKnv2oBnGyLhqVShzWNjqv61VeY4CvHxJ8tKSNvx83AoiIsIMLCysDFevXWM4fPz4Fh1N3aqff/8r8LALHozJy/sEd+rsruozygryxj9//mJ48vjRHx0D/X+iomJsb9++/bN1+3YWNVVVBm1NTYYV67aGd06dtwqscXZ7hROvkNjeJy/eMPCx/X3DxScg8vPXX4YfP7/fUFWQ1rh8407n3g2bjhtamPC1zlixloGB4RvMRu72xoo0Pl7+TD4ejmdsDH8Fthy+ma+rq/VRSpijcf+ORYlzVx9/h+RPRkbkgFm6dK08H8dfa46/DFtdw8I+/v+/ipmRMQwUFQwNoaFsDNqv/zU0HABHDbZQBRu8qqGBLayh4df//wyMjY0NIAtgoQ6WR04AIElGe3sGpoMHGf6hK0SPW+olOWLTLgCcy5wR7svg0QAAAABJRU5ErkJggg==',
    order: 357,
    base_experience: 216,
  },
  {
    id: 276,
    name: 'taillow',
    weight: 23,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png',
    chain: [
      {
        species_name: 'taillow',
      },
      {
        species_name: 'swellow',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABOUlEQVQ4T2NkIBMwkqmPAavG/wwQcUYGhv+4DMbQCNIE0/CfoYGJkaHhHzbNKBqRNT0MiKl//ffjVJPNm9/8/8/AyMiIajtcY0MDA1NDA8O/ynUMwqmXgiYyHeZ2rz+z2GLhR4a7IBvRNcM1/t/fwMLo2PDn3Mz+TAneX9POr9nJcGjdewP7DeqqP599FQrM2jxr1apQ5rCw1X+h/of4YP/+/SyOjo5/dm5eVvqH8VfH/wlL/8ru+b/pcyST1x11hoKEhl2z9jc4sDg2HPiDovH///+MjIyMoFBkWbd4zjXVt59VWbecYnior8Bwdu0Fh6oH2w+uCg1lDluNZiM05EBO/79w9uz6X78+uLOyCTB84OVdVhARMQXJYLBSKieA//+ZQDaDYnT1qlVMYWFh4ABBBtS1kZj0CwBTAn0PLr9dAwAAAABJRU5ErkJggg==',
    order: 358,
    base_experience: 54,
  },
  {
    id: 277,
    name: 'swellow',
    weight: 198,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png',
    chain: [
      {
        species_name: 'taillow',
      },
      {
        species_name: 'swellow',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABY0lEQVQ4T2NkIBMw4tEHkvuPSx6fRrCehoYGpoaGhn/oBmBo/P//P9PZs2eZQQqNjY3/MDIyYrUVWSOy01jmLV4cmhQbu3zV+lUGT34/uVkUVvSdgYEBrgasEeachQsXqjGzswvpaGuo/vjJ0Prpy8/rH98/ex4aGJiAy6kwk5j2HTq018LcwOHH928MP3/+Z7j14D3D6dPH7EtyUg417N/P0uDo+AdkCIYfT5w/e0NBmF/9zZvXvxl4JVlfvPjE8Pr5tbl37j/sri0vvwlzHVjj////GUGBkFFQoaClqz9dgV/I4Mev30JMAvx3mX5/uRrk7xk3c+ZMxvT09G8wJ0Ns/P+fkYGR8X9L7zzZmuKkTxVLtzAZ8zKUhPr5VM+fP1H14fu/bxuKit7BLEBxKrIgSKI+jYGrcRYD3AZ0eRQ/giQbGxsZ6+vrQW4HxR9jQ0MDCIPYKPGJM+Wg20Aw5RCb5gH2YKAPxZ8BnQAAAABJRU5ErkJggg==',
    order: 359,
    base_experience: 159,
  },
  {
    id: 278,
    name: 'wingull',
    weight: 95,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png',
    chain: [
      {
        species_name: 'wingull',
      },
      {
        species_name: 'pelipper',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABwklEQVQ4T2NkIBMw4tAHFm9oaGBsaGj4h00Nisb9DQ4sr6+K/g9bvfovTPGqVaHMIHZo6Op/jIwM/2HiWG0sKSnhvn3jqueZD4yXnh7Zdgum+P9/BkaYZhSNGyb4xEmJv9xvFnlDnk9Tiy9Sm4sjNIrpuYbom7cythfBBjQ0MDA1NDD8YwwNDWVevXr1X2s/L5MebZ7Td/59u7D8seDNIMnHe1T1BSrZjvxWus7E85dBkvW4DufNULOy0y8aGhqYGOHWu8Vyb3C4slPdvsv68mcuhl/nlzAYKD1i+P3x7y8uQU62rRf5GB6de2g4YduBCyDLwE5NSzNmnTXr7G8GBnaPro6m7cy8Yr8FX2xnMFd++v+vsCLb5Tvvrz68+za9asqJozCLQBpB+H93dwl3aWmP9oKZU3NZuXljvrz4wcD/9xTDoj0fVm/bzRjDwLD613+QE6HRA9dobWgoxc7NbaykqqooKipkyf+RT23Z9ceXLx2a09NalcHw8M2/m7NmzfqNLTpYXR0drXbv33+bgYHhAwMDA9cqLYZPMyUDeUWFWNz/MjCsBAUi3ngkJhViSwAYYqGhoUzItoEMxpVWCVoKAOZrsJNSxCvkAAAAAElFTkSuQmCC',
    order: 360,
    base_experience: 54,
  },
  {
    id: 279,
    name: 'pelipper',
    weight: 280,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png',
    chain: [
      {
        species_name: 'wingull',
      },
      {
        species_name: 'pelipper',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABa0lEQVQ4T2NkIBMwkqmPAV0jiP8fZFhDQwNTQ0PD/////zMwMjKCxZABska4JpiC////M8I0rQpdxRy2OuwvTA7FxqlTp/JkZ2d/KUmqteyZ1/yAgYHh+Zypi1VY/jDxJ+RHn121ahVzWBhEM1gjzOQJrbPFpcVE3cWFJG3FRUV8mBmZ7j1/+frvlZtXWi9dv/dg+pKWm1A9/+E2rlq1ii0sLOzX+qk7650cbBr+MXxn4GDnZnj+5APD/uPHdyRXBkUxMDC8/8/wn5GRgRGhEWRzWkK5romm2XQrbV3rz7evMAjrmTE8e/WW4e6D21t+/HxZeOCq6P3VUH+i+LEqv1vvzat3v1Tl1fwlBYXzP/388eTxixdd0vwcl/6w/lUsaMrczcDA8A/uR2xxOaFplunLV/c/t09pv4FNHsVGUNyBFElK+jCnp5v8BrH3N+xnOchw8J/WVS1GnNGBbDI0AYCdRdBGUpIf2WkVAD+4kA/NO+GcAAAAAElFTkSuQmCC',
    order: 361,
    base_experience: 154,
  },
  {
    id: 280,
    name: 'ralts',
    weight: 66,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png',
    chain: [
      {
        species_name: 'ralts',
      },
      {
        species_name: 'kirlia',
      },
      {
        species_name: 'gardevoir',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABwElEQVQ4T2NkIBMwYtP3/z8DWJyRkeE/LnNRNDY0NDDVNzT8Z2SAaPgP1otdM1YbN8+cycXMfYXFK2byJ5jtjQwNjAyNDAwNDQ3/wK6BOWXmTGNWUxkDKSPvuQ8fnDKK/vRV3lXPcX3C/6sNbIzaDb/gTgZ5g5EB5CoGhv///zMyMjL+v7TVa/6/fypfv7/XM/34/cJfj/QpVmAN//8ztuwrkft+/z5Da8q6h2AbQU4BBULZjCQTaZV7KpL3/NK0eLwcn308++Mh97fZwvIX+Xnesuu/E/+tf/jMvTVT87eErloVyszY0ODA0tBw4E9Sh3eru41sFe8lrqe/v5uLMbHeYn3IxMagI3ubgfMNC8MpwU8Mm/beD9o99fj6UJBGqD/BoZjU4LTSXZI/7P0FdYY/n5UY/jHcZvju9oiBi5eF4diVV6uX1+4Og3kLEjgNDEwMDQyg0GIOrfXIV+D5nvD7k5IU61eRe9+UL3O9fPJt/ZrOQw0MDAx/YRbBQ7WhgYGpAaIZAhIYJBh4Gd4zTGb4iZQIQOrBrkONx/8MjA2NDswgPyOnGGg4gGyDpySsCQBsYAMYwxRiJD1cGgkmfQCGXKwS8ZcJRgAAAABJRU5ErkJggg==',
    order: 362,
    base_experience: 40,
  },
  {
    id: 281,
    name: 'kirlia',
    weight: 202,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png',
    chain: [
      {
        species_name: 'ralts',
      },
      {
        species_name: 'kirlia',
      },
      {
        species_name: 'gardevoir',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABSklEQVQ4T2NkIBMwkqmPAbvG/wyMoatDmV5fe814oOHAXwYGhv/oFmBoDA0NZV69ejVIMRw4NDiwHGg48AdZDFVjAwMTQwPDv4b/DUx7SveYvvv4WuXa4Zs7GG4wvGWAysE0wzU2NDQwNTQ0/LMrsND8y8GxilOUW4eZgYfh6bkfEYJir+4f7j9+ioEB7DWws+EajWcas55NP/vbp8Nn6V8ZriheNrZfvz////XtwyeeT68+zzzeeSAD2clwjaGrQplXh63+GzclxEdISHLzgzcfGF59/M3w/SPP//vnzip+2Hf+IUNoKDMD1P/ogQN2yplN1fOPPOJL6H8qycDz7kXL1ZlltQwNDUwMDQ3/MPwID7H//xkZGBn/B+dMNnnDyMN5cHLiYagc3H8ofiSQEFA04dPIGBq6igmkYPXqMJDzCCcAYpMg2WkVAAHDgA8cW0jRAAAAAElFTkSuQmCC',
    order: 363,
    base_experience: 97,
  },
  {
    id: 282,
    name: 'gardevoir',
    weight: 484,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png',
    chain: [
      {
        species_name: 'ralts',
      },
      {
        species_name: 'kirlia',
      },
      {
        species_name: 'gardevoir',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABtUlEQVQ4T52SPUhbURiG33NvGv9KI4UstWgFK6JghIIuDmZw7OBw7lJ0VRx1U9BvKYpop+IfKCU1FO4RldJBF3WoLiIqJYNItDW9gqjXqDGI0XvkSm4kMYN4lsP5zvfwfj8vwzMPy8ZxzlWhCwsMIAIjgpWZ9wiUEowxyLRECYaMWFbFptYq3+xYKAIg1tLt8wY+bxnIgB3QvqUe4u7F2X+Tb4o9nwpfFyxEz+NxY/fo4+H+ccXceCTMOVQhcGtXk1J0Suz6Wrf4qrTQfxk1kcNeIrwTM/e2wr7lGfM/ERSn3xRIRAoRWQC5Aj0H654PddU/N9dOJnpHawHsgkNFUi1N0X448BT1jsTKc9sMj/sqYbKm/uaOeVoiF/npxhnag6KUCjFmDS2MdJ+6Eo0J43uZJ6+6CPkVV6tFJWW/ajRD13VV07SHHgmkEMgK4u37g/5mcWbub+fHDWv8x/J8+5fOb4rh/rPR1VcfBM4lwBgg09bBOXcLIRjhXR7hb1Tqujo4PO3PldcvIqGj3wPHKxfJgaaDT3Df/doeDScJMvvHKYUaGtRKr1dqQti2Szkqq3OeoIw7ZJauD/022YsAAAAASUVORK5CYII=',
    order: 364,
    base_experience: 233,
  },
  {
    id: 283,
    name: 'surskit',
    weight: 17,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png',
    chain: [
      {
        species_name: 'surskit',
      },
      {
        species_name: 'masquerain',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACOklEQVQ4T2NkwASMDf8bGLUYtBjDGMP+wqT////PyMjI+B/GZ8SiEVmI9fDhWr2zZx+8LihY/AhZM1aNM3blqfKrcv1+f/xVkImgXC8zF9OjKSv32MyfduhxQ0MDU0NDwz+4xv//G5gYGRv+TTuZNltdVSqanY3l5+cP37gfX33FyvmF+cWTnne2lcdX31m1KpQ5LGz1XySNED/Ur4raxMHG58vBysrw5//3/ywCjIxsHAwfvj3+sO/Q9tfpm2cdePP/PwMjWCOYwcjwf9XzNtHrs06ZqEkrLOX9wy34T5Dp38/f7xmu//7CxCPOyPDi3nOXrpwde0G2MsKsnrUvW5uZ798Jtuf/2SS+8rDdnnmJgd9Q+K9pvAHzgZ23NqWVzS36////PVjIMoauCmVeHbb6b9uSUK0/nP+u6knIMYg85/z7by0X81utV3//6P9lfs35/ZKni625ImPiD5TAgXEY4rj1VtjFr1YRElT78eL7v7/ibEzXWF7/ZRT9z/zu7jf/qtgVmxr2O7A0OB74A/YjzLnVa2IiZQTZl8p+5GHk+Mv6+9XzL4xf//1mufL18bSJ1buyYepAesAaQ0NDmVevXv03LMulUNqQp1KFieeJgACP4TeR379Ef3Kyfbv+c31U/uwgaMoA6fmPLQHwrGJY9f3h4g3zZO2E494f/3SJ7Tbj+uRjC9oZtjP8hFqGVSMsybEWtzo79FbvPcLAwPAdPWlis5GxoaEBhP/BFO/f38Di6NjwB1kzAAHqAsnstqShAAAAAElFTkSuQmCC',
    order: 368,
    base_experience: 54,
  },
  {
    id: 284,
    name: 'masquerain',
    weight: 36,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png',
    chain: [
      {
        species_name: 'surskit',
      },
      {
        species_name: 'masquerain',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABEElEQVQ4T2NkIBMwkqmPAafG////MzY2NjI2NDT8w2Y4Vo2hoaHMq1ev/gvS0NDQwIRNM4ZGJIV8SdGBsfOWrp9K0EaYTfX19XLy8nI7Ht6/q7FoWpvF/bcMpxwcHFgOHDjwB2YIio0gfzEyMv5vqq3crqqh5vHo4UOG29cvn5uzeK0xVANI/X8QG0XjqlWrmMPCwv5Obs2aam+tnfX6zSeG3TsuHOqYs9Ier8b9DQ0sjg0Nf/Yua4/8+ePHsu/ffzNcu37fuXbK8n0NDQ0sDQ0N+J26b31X8OK521is7Q0cTSw1VxrYpO+HuQarH0GCMH8SShhY4xFk+rVr1xjrGRj+MZKSAAjZhhGqxGiAqQEAxkB7D1SURi4AAAAASUVORK5CYII=',
    order: 369,
    base_experience: 159,
  },
  {
    id: 285,
    name: 'shroomish',
    weight: 45,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png',
    chain: [
      {
        species_name: 'shroomish',
      },
      {
        species_name: 'breloom',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABwUlEQVQ4T2NkwAf+MzA2NDYwNjQ0/ENXxohLX0MDA1NDAwNYQ8P/BqYGRlTN2DQyrlq1iiksLOzvpBOT+A6fP8y7OnP1U6gFIPX/QWx0jYxgYQgpbDPRpMpMzTjj5bvP85dGL8v5//8/IyMjI6rGhoYGJphfdm2ZNYObjTHky/e/hya/3dLC8oct8M/dT7O3dO55xNDAwMTQwPAPbOP//wyMjIwM/5Os1Xlt/L03yinJOSpqqDAwsXIx7Fqypjy9eVoXsjpkp4LdHhpqyanCKXr8+/sPH5S1Va1+MzPf52FlVnv18VNQTf/S9Q0NDSwNDQ1/UPy4KjSUOWz16r/OKtpaEUlOC3nYmE0uXb41/98fxsedS7e2MzAw/ICGCaof//9fxczIGPb3/v1dBi8fPD0vIsjL8ODlhxMu7in2DAwMv5DDANXGVauYQVEwo7PY9euvP3M0DTTe/Pn9l9svKEebgYHhL7JtKBphJhbHerv/evWC5dbOs88tMoKXnDp50X77+TuvkRMERjz+Z2BgZIRG8P//+1lq86coXjz64Onms2e/4bQRlvRANjMwHGBqaDgADj30FIMsgDOZowcIskIA1JvCD6f8P+0AAAAASUVORK5CYII=',
    order: 370,
    base_experience: 59,
  },
  {
    id: 286,
    name: 'breloom',
    weight: 392,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png',
    chain: [
      {
        species_name: 'shroomish',
      },
      {
        species_name: 'breloom',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACY0lEQVQ4T2NkAIH/DIwMjAwMDQ0NIJKhvv7//8bGRkaQVENDwz+wGjQAlsQH/v//z8zAwPCPkZHxP7I6RoYGBqZQPh/J1UVbnk7LjNS7NH35vxkMDFdmV6Q4/Hp5RyR7/oE1EFf9Z2RA0gy2MXJRdNm/bwxxUkcu/DLQ8GNyzah8f2XHcp03717xGAdEJqjLqaxE1wzWGLMwrkn0F2Mt06Er38s6N3OKSUoyHN21i+HXXz4GexcLhi2bjzX6B1s3zJw5kzU9Pf03SA9YY0F/muSEwllft69ZY6muZbLj86fXf/4ziDGx/Pjyl1tYjvXRyyfn7V00jcCBtb+BpcGx4Q/j//8MjIyMDGCPr+4prXrzgblVwzqUQVZW9f+lVQn/frJpMv+TsTk9ea9nh4Son/aGvk29DAwM3yBB/r+BqYGx4d/C9opApr//5/Hxcgtwypn+vXbiELOIhMr/23+eMjxmOMb4j4/l3kdR3pj1QcuPgzXub3BgcWw48GdRaWijCD9X3a+fPxmY2f4zfP/45A+DehnLT36Gv+d/7/0px6V/8/jH/SdWzlxSDNa4KjSUOWz16r8dCR5F0gLsvZceflhk5J7m/efJaWFGcZMfCjrGHG8ZXzKwvOLacTrM1LuBgfEfWCPMn71J7vofvv7IaV55sHT9oTdqn47NXCLF+k71vZjbDnZGzqUrTk/fvXzi8pcNDQ1M8JSDHEiwYG8KYDD+w2XX27TskBcoQKBJkAmUDFGSXGhoKHMoAwMDyNn79+9ncXR0/ANLZjNnnmFNSzP+A0t6eNMqyBXgHMAI8RFyWgUAtyX/0z/muqkAAAAASUVORK5CYII=',
    order: 371,
    base_experience: 161,
  },
  {
    id: 287,
    name: 'slakoth',
    weight: 240,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png',
    chain: [
      {
        species_name: 'slakoth',
      },
      {
        species_name: 'vigoroth',
      },
      {
        species_name: 'slaking',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABTklEQVQ4T2NkIBMwkqmPAUNjA0MDk2TaM+b09+//Maxe/ReXwSga/zP8Z2RkYPwPUxwauop59erQfxA+QhzMgylqaGhgamho+Ddfo1z3pTpnyVJh/hmX5xUeJ2jj/4YGJsaGhn8rc/x2SOr6u5ceenr85NK6II/ASsUnT148Yf/H+uLs2Vm/YQbBbfzPwMDIyMDwv8/JbA/D00/OW9UifjFzM5778OrVBm5erl/7N3b3M/z/z8jACHEyTCOIBgtsLOq84Bbjpz/x6NVf87ffY+P/9WDbqT3TvCE2NTAxMDSA/Qy3cdWqVcxhYWF/Zy2aZ6+lpLn70YOXrH3Tt7z+x8W9RYCdaf2+Lf2bkf2LKx71S4PVnCTFWTcXTQt94Oz8RHjv3jkv8Wr8//8/IyPUH/gSB1YbQxkYmLUbGkBy/xoaGv5DvI8jHklNemSnVQBhaXsPLzEd7wAAAABJRU5ErkJggg==',
    order: 372,
    base_experience: 56,
  },
  {
    id: 288,
    name: 'vigoroth',
    weight: 465,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png',
    chain: [
      {
        species_name: 'slakoth',
      },
      {
        species_name: 'vigoroth',
      },
      {
        species_name: 'slaking',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACJ0lEQVQ4T2NkQAINDA1MDA0MDA0NDf+QxbGxGWGCDQ0MTA0NDGANoaGhzKu1tf8zQAxg/A8iGBj+gwxuYIAYCtYI06TN0CD03u4h97ND8x9DDQTJg/TBwX8GBkaQIYwwTZMSGbT+MsYePPNZgvvix28VfH9+bz22T+r+f4aG/50WAaEfWH7v5v/BrFB5ZtN5sGaYxqAUBhmHV2bLmT6o20xgZGJg//5l8dVTa+MajHzTmL9/fsXDwS30hfX/q9pT27aAvAJ26n8QY/Xqv8v8che+/PI9rvDj+w8m7F8SPv0ReCDHwZRg+PP3dtYf353aLm6taGhoYAIFHmODgwNLw4EDf0IdIj0CfrBv5zKU+jX76x+2Gw/eMHD+//n99vfvnbrcXDpnuX5mMWxf/ZoBFPIMDf8YHRwcWA4cOPCHgUHR7VBT3k7rrESG/Alz/k1p2c1k7C7H8OvHT4ZP37/4PDy1bquWVijbtWurf8FD9f///0yMjIz/Tl4468PPLdty/Ph1/bU7tv66fPc+o4SoJOuPT2+mfOUWLrmzXfg3yDa4Rmi0wIK9qjmrMeLrp7cfVq3aNvO7ns4PAQ42dy4Ort9f37zovnFhxwOQc2EJABxfkZGRIm/v3EnlOH3aS05M/dKUVzcLGBgYfsPiNDQ0lGn16tV/kW2EsSG2rlrFzBAWBlYA8peY2Ot/kHBAAHiSg5nq4ODAjKQII+XAtKJrRBdHSW7INgIAAgHwk5u4NAUAAAAASUVORK5CYII=',
    order: 373,
    base_experience: 154,
  },
  {
    id: 289,
    name: 'slaking',
    weight: 1305,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png',
    chain: [
      {
        species_name: 'slakoth',
      },
      {
        species_name: 'vigoroth',
      },
      {
        species_name: 'slaking',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWklEQVQ4T2NkIBMwIuv7//8/IyMj439izELWCGL/X7XqP3NYGOM/EBufATCNYE0MDAzMDAwMf0Ea9u/fz/L69ev/166JMjY0OP5BN4QRyXl8J05d2v+FUXKvi6loGaZt/xkZGBDegDv1fwMD0xztU/HSkjI9WnKM8y6ePzzn4evf/CwChlJnTt3eO6/L/zMDA0IzSuBAbWHZs2zRfueIaJt7t58zrNx09mBV6U9/BoawjwwNDUwMDQ0g/zPANYYyMDCvBvlP08GlX+lAmkX+4U9/mLiNxcRZrgiKH84UE8v+AjUYHB4YNjaEhrI1rF79C+bH69cf7f7CLOXy+9OT5lwTheazDAy/QRZicyrD//8MjGfPnmExMTEBKWLYdehGJy/zJy1La7MQBgaGn+AAxRFXYOc0NPxnamgAxykywO5ULAYx7t//n9nBgeEvI8QecMLAZSPBVEe2RgAxAHsO+vqZGQAAAABJRU5ErkJggg==',
    order: 374,
    base_experience: 252,
  },
  {
    id: 290,
    name: 'nincada',
    weight: 55,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png',
    chain: [
      {
        species_name: 'nincada',
      },
      {
        species_name: 'ninjask',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACQElEQVQ4T22SbUhTYRTHz7n3OlNS1JVkoVHgiEFgS2KsBEcviyyGlJdIKuhD0ooCg6AP0QkiEvqSUFHEQAuKO6koLJ3ZTUGqbUVhs1ZCLw51NecLm869PXFvK4bz+fQ8/+f5nXOec/4IiyySZUGRqbY2CYhssTe4mLhAU95kwf9BIuLO6wkdIPEfV9VsDwx6l3o6errePm+ZBoAsWAUZY4jpkja1vdc16bW+Km0J+L/6LlothnOMsRxEjGdWgkomIkp1223llWVj+4WkSx+J1x3gK45ogvOabSaToXdhcOWMRMARQcrd3tgamxtrCv+Kh0uL4iVlawFG+GZ3eNnm3uLciLtqve4BY4xDxJQKMgaICCzoowFtkc8UDU4nhLxCAWfvM+94JxYbdsFQ39M7O+vrDskyE8xmTKRBEhAp8XOoxVa++ss1mBiOAZZw899cXDDUGJvQnV4yIN04aCO6K0mSRhTFmAr+zaqmZcEPxzq0+aN7YSYEMDUJE1MaiBpl8I/PPTJuXFGvzjbdEyRiHBGmdnR/X1M5GXKtHHmVu5Udv/oJmi3PhjWDlt17rAXaCu29/tf2hyPeU3CdwgAMsUFivEPEZONt56WZcPTkkxef98HjM10AnnyA6lk4cWWd1VjzprigtHD0Xf9Z54XDl2tJFjKdkwcAUWWsnptHc6qbbsUlSeJFUUza2nq2/PAHNnS2ttsh4Iwo38u2HDEOSG256pYGSeIdopjMGL6qZ4L/9lm+VODfQ8vxJZmVAOr9H0gY95NZ1aqsAAAAAElFTkSuQmCC',
    order: 375,
    base_experience: 53,
  },
  {
    id: 291,
    name: 'ninjask',
    weight: 120,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png',
    chain: [
      {
        species_name: 'nincada',
      },
      {
        species_name: 'ninjask',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPUlEQVQ4T2NkIBMwkqmPAavG/wwMjAcaGpgZ6hkYHBga/jIyMvxHtwBDI0gTIwOqwv//GRjRNaNo/B8aysy4evXf6wyFvs8LmFyf2rMyCle92Ot1fcGGVaGhzGGrV/+F2Yyi8UxaGqvJrFm/12RlVGinqLXfN+RnOL72/KzmkCnp+/83sDgyNvzBqjF0VSjz6rDVf92mBmV56NpO/cTwjeHmg7uTl8fNy2v438DUwNjwD6vGhoYGpoaGhn+LuneK8Srxbnrx7OmNzNzQBKhikOvggYTiVJjG9NIu1eTwkK3fvn5W3bN/v39LQ8GmVatWMYeFhWH3IwMDOHrAph49enk2MzOb9OHDJxtLS+NONvz/z9TAyIjdqbgSw////xkZGRlR4hJnyvn//z8TyAWNjY3/Qf4mmACITYJkp1UAtRl4D9wFVJQAAAAASUVORK5CYII=',
    order: 376,
    base_experience: 160,
  },

  {
    id: 293,
    name: 'whismur',
    weight: 163,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png',
    chain: [
      {
        species_name: 'whismur',
      },
      {
        species_name: 'loudred',
      },
      {
        species_name: 'exploud',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABf0lEQVQ4T51SMUgCYRR+706jWuLUTaTllEKClqiIgqOgoYhAzqmgJRqFiBpq+B3dImqwLWryaAikjMojhMApMsGkEITAIRIiiKS8FyeH3qVg9Mb3f9/7vu/9D6F9IQDQb5jebCoi0vsI4TAgY1orTDORAAFNCiTzhDENAS2qdSIBof54AXIPLjm381vu7t6HT8E1+/I6ou4vggTfNReGbYsiEXGIqO2crCXEOf/0V/YN8snc1XooOkXEOMSG7TqRMcYxxjSWYI5M9SkzWPY6PT6RUysp7Xki3ZeE26Isy7yiKFU9c0ORAQcMtJn4gOAujV0Pc5MO3qMJl8XT86PlgwUA+ABT/kZGIkSsLYDP3hVSti5t1M51QLn0Hh4a9zNVVW2SJOk5a9WKaM/lHzcTuXhAFLwkunx7/X5fVP8iY7CVWB+kayJQQAnuHhdiadiAQ6aqNmZSs2Y0mHJM5pWgUg2dra50Vuw3kfnIPRj5zYfQ8nLaX6F5q39BmzD/VvwBhKCQD35+5CYAAAAASUVORK5CYII=',
    order: 378,
    base_experience: 48,
  },
  {
    id: 294,
    name: 'loudred',
    weight: 405,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png',
    chain: [
      {
        species_name: 'whismur',
      },
      {
        species_name: 'loudred',
      },
      {
        species_name: 'exploud',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACNUlEQVQ4T2NkQAL//zcwMTI2/IML/WdgZGBk+I+sBsZmhDEa/jcwNTA2/KvZXKrKJvfNuG791DUMDQx/GHBoBmuEaWraV64tr8Z9WEREW/DyvtfrK7wygqAGg9Sh2AzRuL+BpcGx4U/hvsI6bS2xRtMHfj+Ofr7EkbU/UpehjeFKaGgo8+rVq/8iOxmisaGBqaEB7De2xq7Kc8p6ttrrXsyZvy5hXRI2/4HEQBrBzkjeUSj05899xYCd2itOy/57f1zy/BxLVaMTx64/u3UgccEPdAPggZOxNqvnDduT72GMRb5Cn/gyXT4aPSrXrOr6+v0r645Jt1LubN/+CTmgwBr379/P4ujo+Gdp9VZ52wzHB/8ZGRfLy3DGgW1pYOBhaGD48v//f+ZGBob/DYyM4OgCa1y1ahVzWFjY35kLV89wcXBJFxEQYLh+5/GCcxfvLmX+LXUhPV39DTzaoOHByMDwn5GBgfE/yMS8jsZziT5xesqyir/+MzKwvX37jeHFqzcM375+e8XKyrb30/ff1X7uGvcbGv4zgXQwMjIy/j8i8pp3YU/LnUi7SDFLUXOGj99//xfgY2U8ePzc+mu3br/VUdSS/PL1C2tgoFUoAwPDJ5QE0LVpxrJvXG+F0tWKRb78+qK2e8/eKVkZ4TUMDAxgf4WGhgqZmZn9LC0t/QoNVYhz5zPs50hkcPzh6enJFxERLxEfH3ELFnggGhSAsJQEjw6Yk1ET/X8WRkZGUIoBJzdkNQCpOPgREYopMgAAAABJRU5ErkJggg==',
    order: 379,
    base_experience: 126,
  },
  {
    id: 295,
    name: 'exploud',
    weight: 840,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png',
    chain: [
      {
        species_name: 'whismur',
      },
      {
        species_name: 'loudred',
      },
      {
        species_name: 'exploud',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWklEQVQ4T2NkIBMw4tP3/z8DIyMjw39sanBq/L8qlJkxbPVfXAZj08jI0NAAwv+6F3Vz832//Ss9fdZvdANQNP7//5+RkZER7LR76xnc7t9mkHIuY1jQsH8/S4Oj4x9kzcgaQWywpsYZK8uDtJ91XH3M+DHiuqY7Q7P7SYeG/SwHGhCaUWxs2P+f5cz+RcHCfFwh2rJyIS//MDH03n4wR+/YwbZLu6bcZ2hoYAJ5AWQ4WGNo6Crm1avD/tpWLrLnZ/8vuqUhfl9gbJPufxVlh6NXjvZyCqh4fbl97di7A3OeMDD8Z2RgYAQRDAwwk6TSJsg9+/yWl2F581WQsF3toijW319O7O3IuidiGyP55vCS51DLoBrBuiEmgZmhq5gZVof9lcieHvbz08cT7xdXPIIGDDwc0KLjPyS6oSGr4pnLfmf75J8wL8ECD+5HclId3iQH8w9JSY6QKwBydoQP1+HncAAAAABJRU5ErkJggg==',
    order: 380,
    base_experience: 221,
  },
  {
    id: 296,
    name: 'makuhita',
    weight: 864,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png',
    chain: [
      {
        species_name: 'makuhita',
      },
      {
        species_name: 'hariyama',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACG0lEQVQ4T2NkQAL/GRgYGRkY/iOL4WIzEqMImxoUjUl+frzzNm36wsDA8P////9gOUZGRrALVoWGMoeuXv0P5iIUjYf8GKa9VnJvDp6w8znMloaGBib7AwxMjgca/oDEGhoYmBoaGP4x/l+1ipkxLOzvrQn55nKmnid2n30Q75uXsWjq4lUqvz5+4SvMSToH0nBEmsHim7m0htu6pwv+/2dgZPy/fz8Lo6Pjn7frpzQLmfvXzMlZvi91XZnzhq378j6zc9yKdbHasaZufqqt/t9ZN6alZNjvZZj5v8GBBW7j9an1bhr2bjvfvPjCcOjN70IVK7vELxd3NzPc/+HHzSscq+8iw7Bvck+cc9eCxf/3N7CA/fj//38mRkbGf+eDGVSfc/N4KCZs7OGV1WB7uGrOO6sQdyEGSVmGF4f2Pl9U1WRWfunOE5C/GUGhBwq5ioZ+BV0zh6gbv1mZXG7vzBWW0xRb9Zm523WX+yF++xa1vY+YNxR2VN77D9LU0PAPrpGBgUFo/bbjk01MTKLW7z5x7sdfRlZNaX7t70ysW8Mcj0YzMCR/3t/QwOLYAAldsFNXrVrFHBYW9nfZpu02MhISKi/MDBeHMTD8PXv57vLPX39qzZi2PGHFoubzMNfBNSJrRk8lPT09IiUlJW+QNaFohAYS44EDDMyOjox//4MjC5JqGhr+MzU0MP5DNpRgWgWFYENDA4omkAEA5T7rlVjwX1sAAAAASUVORK5CYII=',
    order: 381,
    base_experience: 47,
  },
  {
    id: 297,
    name: 'hariyama',
    weight: 2538,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png',
    chain: [
      {
        species_name: 'makuhita',
      },
      {
        species_name: 'hariyama',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABIUlEQVQ4T2NkIBMwkqmPAafG/Q0NLAcZGP41NDT8w2Y4Vo2rVq1iDgsL+wvSgMxGNgCnjXMa031fPXtxt2rmxmvYNKNoXLUqlDksbPXfebMrQ+w1tVY/f/LivE1EqRMDA8OHhoYGJmRnwzXCTK3uCZL3VLN/IMDB859bjJtx16Gjm9LzJvv//9/AxMiI8C9MI4j+D/LDoR1zNlrqqvl9+/T95/vfX1he3L/HfObgpZycvsVTQQHm2NDwB6QOw4+71syIZOFgbGFgYlT69OUbw/dXr2ftXj+nc97el/eQnYsrcIQYGBiMGRgYPjMwMJwA2YDTj7Cg3r+/gcXREeIcWHRcu3btP3p84rKRyaHBgUn0quj/1atXg+MTHVA/yRFKwwBWYn4PiKP3VAAAAABJRU5ErkJggg==',
    order: 382,
    base_experience: 166,
  },
  {
    id: 298,
    name: 'azurill',
    weight: 20,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png',
    chain: [
      {
        species_name: 'azurill',
      },
      {
        species_name: 'marill',
      },
      {
        species_name: 'azumarill',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB90lEQVQ4T2NkQAMNDQ1MDPYMTAwHDzAwNBz418DA8A9dDYjPiCL4n4GRgZHhP7LYfwYGRkYGVDEUjf///2dkZGT8H9gfqMnFzxcl+Pz9zazq93u1GA4/b2gIZWtoWP2bAckAuI3//zMwMjIy/C+oCbporKum9/rBc4bv5x+crl5x0AzJBSD1YBchNK5axcwYFvZ3clNqia+TafeVq/cZDr2+x/Dx46cIRmFevcvf38082rjnUUMDA1NDA8M/DBtBph1ZVbfm7dv3Zu0NB5rNirXM/jL9T5laskqagYHhGYbG/Q0NLI4NDX8W9mSFaCpLzfr39x/7xWsPZqXXzSusy/APVJIRY0qomb121apQ5rCw1X/BNsJCDkSvjQ859TpU1UT57X+G++vOX0+35zO+pGm+6P7jF2v903pWwCxARMf/BiYGxoZ/aY3+fcwqwoV8/xgZvr/8xKDPJPpTX1FqhUlgTQIs5FHjERTxDQ3/evP9Us/wfC+49ONzl6KCVBbrg2+d63t3rIOGLGqoglJLQ0PDv1XazlpMkuwzNuj9qVjcx3BxSTTH59c/PkcUrd2/qiE0lK1h9epfsKjBmXIm+7opCpz74fb1zc99GT9P3kZPQagaoQHV2ODA3NBw4A/MdGzJDkMjsuIDDg7MDgcOgIIeJf2C1AAAewbbD8o5HqYAAAAASUVORK5CYII=',
    order: 262,
    base_experience: 38,
  },
  {
    id: 299,
    name: 'nosepass',
    weight: 970,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png',
    chain: [
      {
        species_name: 'nosepass',
      },
      {
        species_name: 'probopass',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABdElEQVQ4T62SPUtCcRTGz//6hghmglqRRERDNDW2BLX4Bby3JYJIkqAhd8kDfYKGCiMim8JLNDSEOJhLbY0uBVlW5GuioKnde+JeMzIrQjrrOb/zPOeFQZfBuuSgA0RELhAIEGOMfmvaBhIhxxjKChCLoTYeB0BECQA6mnQobiPa0wAFRHxtKQaDQZ3X6218dqCC4XBYIwiCdBE5mpUa5b3U/VU0X5B3LGaTYW7Ff/ydZRUkUkZidH5ycPmYvjMbLINDVKto5Zcq5DLJ05pxIFSnvojPt1Bs1b4r8hpBEKWNtfmtYdvosnNkrH77kNTbHFYoPucglatuHpanVs9wWrGvMNRUBGCsuQDT/ro/qi2XJzOsku13Oq57LL0liTOaanr7rtvtDhERxxiTP5aDCBwiyLAEukVuZqKUT9yI4lNWaczzvNXlcoHH4ym05m3bqnJDxOY5fgjVppLrOAcRMFHkuURinBBRLUJE9vUp/u/l/vq7b4KFmA8OjGH+AAAAAElFTkSuQmCC',
    order: 383,
    base_experience: 75,
  },
  {
    id: 300,
    name: 'skitty',
    weight: 110,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png',
    chain: [
      {
        species_name: 'skitty',
      },
      {
        species_name: 'delcatty',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB7klEQVQ4T2NkwAL+MzAwMjIw/McmBxNjRJdsYGBgamBg+Pf//38mRkbGf7g0o2hEsomFgYHhD1E2rmJgYA5jYPj7U99d+54Uz4rdnvYVeXl5W69evcqmpaX1B912uI3/b99mZ1RV/bmUXalPtyGt8JurE8ODG/fMImIiToNs/v//PzMjI+NfFD/+//+fkZGR8f/Fixd1Pn58v+XKum3y0ka6DBJa6s9/f/sxe9GS6ZNnzVr+BtnfjDBN9+/fr1BQUGj/8PEDw5q2DgYeFdV/Cvq6TPKysgxCQkIfnjx5EqSiorIfZjPYqUePHrW0srI69vTp05rVK1acCwwLXScpIclx6uiRl9VleVnzlm9cwszM9EZRUVGZgYHhN9gykMbt27f3/f79O8vPz48DxL99+/ZeYWFhp5cvXjC8e//22e3bd3dqaWklPnnywC0oKGx3Q0MDC1ijv7+/7Pfv33127do1ffny5bbW1taHrl+/vkNERESGk5NTQUtLy6Kqqmo2Dw9PQlVV1a2GhgYmuB+R4sy2oCA/csKEiVnt7e2mf/787q6trctkYGC4Dg1dcECCbQSZwABKMQ0N2CKdOTc3l2Xy5Mk/YQEJ0oOR5ECCq1atYg4NDf3X2NjI2NDQAEt2ILXw9ItVI1pSQ9EAkwMAKELRE3W+i1QAAAAASUVORK5CYII=',
    order: 385,
    base_experience: 52,
  },
  {
    id: 301,
    name: 'delcatty',
    weight: 326,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png',
    chain: [
      {
        species_name: 'skitty',
      },
      {
        species_name: 'delcatty',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACWElEQVQ4T22SbUiTURTHz92zLRWKoZvszZKtKRQJtYJopXvJyFGhxUYSGAV+kCTSD0UochkEEdQXYbAo8kOfnuG3sj5UG5VEkdDLSsxyc9O9tPlsUyrZ9njjPvnMFR24cDnn/zvncu4fwX+CEEAIARFLhBBE7wihck5IVIYIYYwlGGMSCAQYm81WohraQIT/AtfFawCgAIDcRkOWAXBTbUmEyyDGVinGwZKnr9OsrlU9S2cSviHfg6Gpx7f2x1dMV6RbdEyOm+/r7u6K0AEiiMifN5K7I70v6xU1lgjHwPKm2tlOR6NBq9Yyk+/zy68+FXdcG3YvlkGWdTFut5/39HbdNOpUg+FEotB8+JxEQwpS7vMM1Fs0xSQnl31ZVLZeHjz2gmVZBrlcLsbv9/Nnj+w607Jn731dYwPEU3FysOMCUvBJfnpiQpJUGUv7zGZZ6M3T0Z4BfJFQUFzA6dadM3qjocna4Siu/uBkasNRUGlMEP42CelorFQNGemHUOiRZ3TcKSyIgv3nT2hzmfxbSZbTtB1v5w/ZD8AStwI1SgsguZpMv35YSk7dqcrztYERn99O6JdS8PaNgbal5PdgnUwK6q06aD/phGw2B1/nF6AASgh9jINqNQTZn4Vi//Wx7QAQFcCrPY66cDR3qblJf0qOkMmwuyWm26Zbi8UT0lQi8uTe8Fje5rLb5NWyzeFIyjn+/N0sBekRrVRlMKga5ubSCQDgAfQAsPCrwlkyACgK7ltPImy1MjgYFKxVGXT1Xq8XBTdqwqB/vYowxvRQPwhRYXZRK1R+A/FO/mk7b4HjAAAAAElFTkSuQmCC',
    order: 386,
    base_experience: 140,
  },
  {
    id: 302,
    name: 'sableye',
    weight: 110,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png',
    chain: [
      {
        species_name: 'sableye',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNElEQVQ4T2NkIBMwkqmPAZ9GkNx/XAZj1fj//39GRkbG/6v+r2K+duAaY4NDw18GRlRDSHEqigtQNM6cOZM1PT399/rdi4MFuHkThQVFv625OuFiU8jqXgYGhh8M/xkYYTbDNe7f38Di6Njwp7etUi02JeXm+y8fGW4+vM7AIfKP4f8zzgR395CF+//vZ3FkdPwD8jdY46pVocxhYav/Lu4rSWTmEWlWMTL7eOX6XR7WDy/lPv7he6RlovqCmZW50d7Cbdv///+ZGBkZ/4E1NjQ0MDU0NPxrKUnOkVRU/3L77Y+rHJ9e8/Oz/Q4qbJtR0D6tXUZKVCI5PjSxGhbKcKfCQhJfvCKrQQkckM1aWlqMoaFh/xgZGf6DFDY2NjLW19eD4xMURRg2kpqCSIlHFLPJ1ggAWfh0D0NQef4AAAAASUVORK5CYII=',
    order: 387,
    base_experience: 133,
  },
  {
    id: 303,
    name: 'mawile',
    weight: 115,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png',
    chain: [
      {
        species_name: 'mawile',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB0ElEQVQ4T2NkIBMwIulj/P//PyMjI+M/YsyCaQTR/0Ea/v//z8zAwPCPkZERzG9oaGCqr69nYmRk/INsINzGY48fc7L++ydpKi9/D0kDA7IL/v//DzIA7CLG/w0NTIwNDf/mMTAo2Rw+dplLRXGhjKRkFsz0hqwGnvjyxNxvDx9HHlmyPCF91tRzq1atYga5h5ER4kymCwuWXdaPj9Q6emhXhI29+8r9r/7zqP99eVpSQlzj4op17wwigxUYGBg+Q/UwMIBMCAsL+7u8qS9Kx0l78eene5n+f7p8/L90yll9R++cNzdufj9gGJ+VyHBhwf6GBhbHhoY/YD/CNDK45Mkttvv9kI2fgUGCgYXh2O3HDNq+WQwvnz25m5qYpAoNQHBAwqLg/86di7gfP/7RcebAkbcWmozZh059FfnKy8ugqam8k42Le1ZVYeE6aHSBQxuucfLkyVLfP7/PLauqq2RQ93XyED1Ra+mYaiYmJeuWmZl5dP/+/SyOjo7wKAE7FdmkmWlprOmzZv0Gicda8GjyGMa+mD59+nuQJbC4BtuInHIaGhoYGxoa/oWGhjJra2v/B7Gh8iia0DVipDRQqmloaAD5CewvrCmHmPSJrAYAWvHBEDQNuJMAAAAASUVORK5CYII=',
    order: 389,
    base_experience: 133,
  },
  {
    id: 304,
    name: 'aron',
    weight: 600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png',
    chain: [
      {
        species_name: 'aron',
      },
      {
        species_name: 'lairon',
      },
      {
        species_name: 'aggron',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABiElEQVQ4T2NkIBMwouv7//8/Y2NjI2NDQ8P/hob/jA0NjP+wmY2isaGhgamhoQGbQpC6/8gGwDWCbGJkZPx/+fJL8cOHT3O3Zd16Pnennbybu8lNRjRNIAOQNTIxMjL+O332ShkPv7gdwz+Gp+8/fL1tZabQM3PmTNb09PTfGDb+Z2BgBJnakOwupCDL1imo5PqQmY3748f787cqyekmvvrw9Y9/9qJGrE6FCe6dn3pSW4HHbP+pG++5OIU4JIR5OT9++blu1/mnmT0zdr2ChQNGqK7qjTkiI8ZtfeHW+79cnCzMjP9/MHz+8qclp31T7apVocxhYav/ovmxgYmRseHfkk6Xgj/s5v38PJwM717eY7hx73kTN+vr1Q0zzlxFDlkUG2Eh29fekMHPzT79xpVbm7pnzfcH2fD/PwMjIyMiStCdyvgfouK/h4me+tmHf56+fn3tS0ODA0tDw4E/eAMHJLlq1SrmsLAwsF+gUYYS+Sh+RE9WoaGhzKtXrwalIgxNeDUSSvsAU3SkD4l63+wAAAAASUVORK5CYII=',
    order: 391,
    base_experience: 66,
  },
  {
    id: 305,
    name: 'lairon',
    weight: 1200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png',
    chain: [
      {
        species_name: 'aron',
      },
      {
        species_name: 'lairon',
      },
      {
        species_name: 'aggron',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABV0lEQVQ4T2NkIBMw4tAHEv+Pz0x0jYz//4cyMTKu/vuf4T8jWCsjCDFiGALX+J+BgZERhy0NDQ1MDQ0N/5BdANMId9rr3fX9nz8pR+yfz+aRvCXiIgPDfxYGBsY/6JrBGv+vCmVmDFv9d3+/hYu+CcvuW1dsGG5t1z/olLWXi43Z9a+Yq7w7A4PFJ2TNKH481ifDaVX0RGxv1d6VVsbm5u+ZtzGIqJ1k2LVJyMOnonrn/v0NLI6ODX9AlsE17m/Yz+LY4PhnW9s2LRUR6auf3r/9LiGhyvn2w61T+vnO5lD/wb2EFDj/GaGhx7Gvdu01NWlVRRYOVoZbD55MsGtwLYQZDAsgFKeuWhXKHBa2+u/ySjs/XjYTNRb297yXbs2fXraA4QXWwEEO5v8NDUyMaEH///9/RkZG1LjEmnJWhYYyi2pngeUc6h3+omtCCRxSkyyutErQHAABDoEPz+dm5wAAAABJRU5ErkJggg==',
    order: 392,
    base_experience: 151,
  },
  {
    id: 306,
    name: 'aggron',
    weight: 3600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png',
    chain: [
      {
        species_name: 'aron',
      },
      {
        species_name: 'lairon',
      },
      {
        species_name: 'aggron',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACN0lEQVQ4T2NkQAL///9nnJU+i+W51PO/DQ0N/0D8xsYDzFevvv6/enXYX2S1jDAOSBEjI+N/GL+hoYEJpBkuz/CfkZEBIQ/WCNM0p++Y0Jf/v32Y//zck1vu9mzptEuCrz6+yPn26/uJ6nr/3ciGgzWuCl3FHLY67G9v46Y5Ip8/J59983TGpAVlmf2d20J4nz1ffe3dy3d9yiqSDA1hvxgYGEB6/oM1hoauYgb5oa5wbuDjK7cn82saXjM3tF536vZFta/3b4b+/vt+4vxVzT0QZ4P0MEI0gm1dFcp8+HCis5XWWStRMd2qX//kWaXFXzPs2Htx/rXHolsVRViCj5w7lLlnz6yP/0H+hdmWnd5jx8EqdVBF5voeMY4n9ndOLGZQd4pnvX2X+enRm3orjLSki48f3mCz/fDCoyA9jLDQc/bLF1fjlTn3+eu3PxyPzooJnePj+KH79j+zgdrvfzyGjMws/0/0TU50YGBgAIU0I0qoMjBkiNVVCVSYMn8uFH+rwfBP4RfDnucvGDYfYU/iPN2y/AADww+UwAH5saGhga2hoeFXZWlfs5bQj5oPH55++8/N8u3zNyORizc/J6xan7OwIXQVW8NqcMiCgxYKIKHVXDNx3qt3/10mTzvpw8AgyVVTqH6cjedbX11zYTEs2tA0gvUzTprUwOvp+fanqurknyCBmTOnmDOwcX9MT0y8gTXJIQsixS0oIODJEK9GULICWw1Nt6tWrWK+du3af+R0C5IHAIKzE3VXSOWXAAAAAElFTkSuQmCC',
    order: 393,
    base_experience: 239,
  },
  {
    id: 307,
    name: 'meditite',
    weight: 112,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png',
    chain: [
      {
        species_name: 'meditite',
      },
      {
        species_name: 'medicham',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAChUlEQVQ4T32SXUiTURjHn/O+ax9MZGjO5XIZfVAjU1NMCNIlfV10EbHjRRBmkSEWBIlBWc8oI1rdaFmCkkp58U4lqCzK2LRCsVXOiwaaqJQfrc3IttX0fXfiVSZ607n6H87zf54/5/kRWHYYYwTAwRFCJcaQs9kQECG6vCamSUwIgpWn1CHJd6HhRAI92Tgja3d99qqc0g/zjAEhBNgKY8zEBODHUvbY1ZKyaCaYODgR8FXtO/bKzZiVJ2Sx6ZIRETg5zpfHkOqeuFuWtiX9Ahf2Q5gZQQpU2HTQ8yL7OPTVnIH4s7Uwu2QUBIGnlErPbx8tFNdVdk1Nq+eicyHFnEYbyUpqVzP/AJFUrnO78g9dHPo0VbPtyLOrCwmsVoF3OKhUVfIkIzkr9aNmdoTTxK9mvkgE+t54yRo9GTQY1d8P5MbtnffV3cspflvGBCtPEFGBiOLD5lsHZ7zaTu2on/02cZCZMU7ut+jBlJ73JznFoGlp6Bz1eC9vB4AgAnIE0alAtIj26o4KFlXcTOv3hEbcXu1gJoOwtJnpEpNYfmEhNzDw+kHNnfISQWA8pUQiMWG/4ewY+xE4vNs37NN9/aUf/0vme9frOV1isrRjZ55ycnK4urJy/6XYICIvnRDCTlmvmHijsTmXVxZsDQeBNxmgeegnqOISpFDYz3s8/ad73Y31BQWocLlQXADA6XQqLBaL6HB02oMh5fmXXZ4ec8aGb91Pu91rjYbrURZVi+R9WmtrxzgicogYXSJHbvCorW1TMDCdUFpa3g+wSElTU3ttJCJtVKnYteLionex9a0wLidDLqijn4kLUPwvq/KjHMNsNhNKqQz2wkT5D2w2IIhkBez/AC6nKnfBoiaWAAAAAElFTkSuQmCC',
    order: 395,
    base_experience: 56,
  },
  {
    id: 308,
    name: 'medicham',
    weight: 315,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png',
    chain: [
      {
        species_name: 'meditite',
      },
      {
        species_name: 'medicham',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABy0lEQVQ4T2NkwA0YGRgY/uOSBkniBP9XhTIzhq3+i00BVo3HVoVyWoWt/g7ScGZmGqtJ+qzf6JpRNDY0MDA1NDD8m12mJ6NvqtHEysT29/69j8uDSjfvW7UqlDkMyXYUjTDJM4fzbAQY/h3gY/nG/OTzG38jt02b0J0N1/ifgYGRERIYLC8OZd8RV2CV///jN8Oz+/+fyrhPU2FgYPiBpIYBrrGhwYGloeHAn/tbvSSePpO8IqPyXfjfd26GOyf//fwmcs00IPf4ZZgakH9hGqFBHyqxdib7FjN9QeOCCX9+G4q/ZAh24Ga99ejbLf/8XVYMDJ/fNjAwMDUwMPwDa3RwaGA5cKDhD4NwUNWyZsHWyFChH1cusXAoS35n+Pj604+6+QwcN58+LTm0e2evg4MDy4EDB/6g2cjAuqjDOdjVSm45F++/8yzsrELf3jPKd8x+Oq13wcdOBoajj6Cu/A/3Y2hoKPPq1av/zqu0Ff3Hzhma0rBrGgMDg8jBhcGLONg/FJhH7L21v8GBxbHhwB9kP4Ljt6GhgamhoeEfZkoxZm1o8P2LLIeRcv7/Z2A80OjA7Nhw4G9DAwNjff3//4yMjBhpFm9axZeOAZeQug+GOOpwAAAAAElFTkSuQmCC',
    order: 396,
    base_experience: 144,
  },
  {
    id: 309,
    name: 'electrike',
    weight: 152,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png',
    chain: [
      {
        species_name: 'electrike',
      },
      {
        species_name: 'manectric',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACnUlEQVQ4T1VTbUhTURh+z7131zmdS9eyIkpR6MMQkTC1jKkRkolQbFpBUYRhYPVDMAjjZKQh/ulXFpFiBfMupA+woKgJiji1WuVXDTMdzsqlu1P3de89cfxCz4/Dw3nP8z7v+7znIAAAjIHBGBSKV9aAgHnrIEgY43XnK3GEMWZo0GQysRW7guWz88Q9J6LOUw9f/qaXBEFgzWazvDYpxYhur8qKNOHIYN6eHXqLc8zHO4anq4qqy+a9Px2OnDN3e/rul6l87u8kF9ukVUUKPlwvPLvNsKFJy0r+1scTzNZLJ/3H8vfG1je0TpMoyMW1jd/WKFIxgggBhBCQvurC50npWcUvhgLyxqSd7PiUfyEKxjRIHbqd+q7hHuwrzUursjyhJFopEkwm1my10h7i2ptrHqQfyjnR0TGoRBMPbNb4GZdn9rPO9VelRmxK76QztaK5/yvlLPYIkBzj7y9+LfoW0iQlTR23JZ754uiHmfe9ijYxngl7gvBj8l9HSpLWQGR060DtM8sisaflSKJGt3uY5yP5iGmn4p2JYYL6WJjoHQFe5BQUgUg4LIc4FRspBv3nTj9604wIJgzCSIHkCsufJn2JQR8IjI56Ve5fHobjeDT+yUciACFOz0DnhCu7rsXeLQgmFmGjkcM2m5SZWVpy47zBUpCtA3FOgrpGF1wsVEleMYTsQzKbsB26ZejLPXrZGVw0dHmW1CnVYTB+TCnVcVlZqpt3nmquXinQ7HeL4XD7AEGdb6cOArT3YGzkMLZJy+YsWdRWGb3peMOcCACBjIx8vd0eV1lTzF+L14ry7MJQQlWb04UBGAygrCUuDnbpmZl4s9kaothyIbNcVtQhx0hYqO/q8q1UuE5xORslEwyYAUw/wLpHvpr8P37BISEYLYciAAAAAElFTkSuQmCC',
    order: 398,
    base_experience: 59,
  },
  {
    id: 310,
    name: 'manectric',
    weight: 402,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png',
    chain: [
      {
        species_name: 'electrike',
      },
      {
        species_name: 'manectric',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABjklEQVQ4T2NkIBMwYuj7/58xdDUDk/a1xv9XteoZV4cx/sVmNqrG//8ZGRgZ/6Mq/M/IwIAuxsCApBGiIHTVK57v919rbXn++LGxjKLy2RL1IwwNDUwMDQ3/kA2Ea2xo2M/S0OD4p7T0WDarjMCUzyxM54S+shg1HjypzLA1+p6DQwPLgQMNf2CaMTRm56/w4TG228wqJMzw/tr9R1PLgswdHNh+HDhw4QMDxIVgr8A1OjTsZznQ4PgnuutEnaCUXiOHAMvfR9df/15V25wnLXH0NyO32aYnV+e+w7AxNHQV8+rVYX9diw6E8goLz/z6jU3w88s3B4/NsXYQlTD3YmFn53j+8NA6BoYGJgaGhn8YNsZ2njMR1TQ4/eo5A8PLm3e+3NpXl/798WUWLl7VTQ8ebIA7FxGq0JBzytgrzcwvMZOFmV3v54f3B69vzpr9/PFpUMgyIIcsajyiBjsHAwPDD1wJCzPlNDQwNTDUMzQ0MP4LDf3PvJohjIFh9WqM1IOpEWEFPOgJJzkSEjwAE1+hDzRjLdgAAAAASUVORK5CYII=',
    order: 399,
    base_experience: 166,
  },
  {
    id: 311,
    name: 'plusle',
    weight: 42,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png',
    chain: [
      {
        species_name: 'plusle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABnUlEQVQ4T2NkIBMw4tb3n7Gh4QDzVa3X/1eHhf1FV4dV46rQVcxhqxGKGxoamBoaGv4ha8amEST232H/fxabSxfc/n599ba9yv3k////GRkZGf/DNKNohJmcnTDBlU/PZhYHr7DCmxfPGB4+uOKzaW76VoeGBpYDDQ1/QJrhGvc7OLA4HjjwZ2VAcLCHgtaanU/fMYT94P+RrOXA8fbdoykbZqfkpqXNZJ01K/03isYGBweWhgMH/riYxoQlsDOsFBfm/9UtoMPIy8HL+u/v99Xr56SGha5axQwLKLiNDg37WQ40OP7xSp7b+5NXukiK6ddvJmYWxpdPn7Gwcfw/tmleqjWyPzE0mrlUlRqYe3R9+/Xt/9tnD39+/fSDg5n596z9G0rSQ0NXMa+GhjYicBoamBgaGv7J66UoCvOxrRISl9X4xyDG8/Hdo8dn9zdqMzAwfGZgaGBiYIBEC3p0gKMCJGFsmaDBxq9o/e7NiyM3z0y/iawJm0aI2P//DAxIccYAdQ2hBACWB8XpgQMMTAccGP6BvEBUkiMm3QMA9uyuD+GCS2QAAAAASUVORK5CYII=',
    order: 401,
    base_experience: 142,
  },
  {
    id: 312,
    name: 'minun',
    weight: 42,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png',
    chain: [
      {
        species_name: 'minun',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABhUlEQVQ4T2NkIBMwEqPv/38GRkZGhv/IalE0/mf4z7g6NIwpbPXqvyBF/1etYm68du1/Q0PDP3QL4Br////PyMjICDb1//79LAyvX/9nDAsDG7BzZwm3u3vPVwwb/zMwMDKC1EfnyvwXYOF3mtp/FaToYnWLxZV/N1W//vsizinEvTm2fMnNhoYGJpALwDauCg1lBjlvtnuMra6C3jo5SbENf5j+CT14/sqQW5j1mAiXoKF8VZIxAwPDDwYGBpCe/8hOZWJkZPx3edKkszqWOka/nz9lqPXb1VJcY/Hj/dcf6er9xXLI3kFoXLWKGeSnczs6GnmYWev+PPj0+1jqblWOYMnI74+/C6We2la236GBxfFAwx+QK+EaYW5nYGDgujw164X4B3He/Y9uzr8n+Hxr5d2XmxlWX/sFcyaKRlhcFVpacgam6mZwM/EoP7rzdFNgy8pd0NAE+w0WsgQTANRf4FjCmQBgEvv3N7A4HGRgWK119X9YGCQx4EwAxCQ9gjYSYwgANbqhD6Prz6sAAAAASUVORK5CYII=',
    order: 402,
    base_experience: 142,
  },
  {
    id: 313,
    name: 'volbeat',
    weight: 177,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png',
    chain: [
      {
        species_name: 'volbeat',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABy0lEQVQ4T2NkIBMwour7z/j/PwMDIyPjf6g446rQVUxhq8P+MTAwwMTAUnCN////Z4Rp2N/wn+XWs1mM6bPSfyMM/s/IwAA3EKKxoeE/U0MD47/mmIX5bGwskuXzoitA4rFWGWISQppVn399mTNjV/WVhoYGpoaGBpDtEI2rQlcxh60O+1sbOb1Mml+l8+cPhmlPnr76wMD4LZKN85/iqVu71HZfX3u7waGBpeFAwx+sTs0Pzz1lrxto+un9A4ZL908z9K2b7lzsPUHj/ecPX+YdalgEsxXux/0NDiyODQf+bFwUmyoryj+d7e9n5uv33s0Jzducmu3dvOTbj1cv5u+dXAKzFaYRRINCjSnPbUmLlcnrSgYGTobz19nWc3AkpUlJCjm++/jufOVchjsNDQxMDQ0M/zBCNdWit9PDn6+M4R/vb4bPV1jff1827c133RkVszZe/v8fFFOQaEGJR1iUHJplv1XPwMhr14Z9T1iZBNoCWw5OPzPTmNUk/Sw8elA07t/vwOLoeODPnpmJaRw8rO6z62b1WQdY8qT1Ht+JHBUYNsIie9ukXHavvMk/8aVGtCSHlgAbGphAqYMRLbnhtBHJ7yjpE9lYAKtKyQ/IfQFDAAAAAElFTkSuQmCC',
    order: 403,
    base_experience: 151,
  },
  {
    id: 314,
    name: 'illumise',
    weight: 177,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png',
    chain: [
      {
        species_name: 'illumise',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABXElEQVQ4T2NkIBMw4tAHEv+Pz0xcGhkaGv6zXL26+r+29rX/DQ31/xkYGFEMwtDY0PCfqeEqIyPDaoa/yDb+//+fkZERoRlZI9x55ck7On/++HZz+dKbB0KyWf8y/RJVnTw7fk9DQwNTQ0PDP5CBcI0wE7f9z2V/NDfrDvcfUZn33x5/fHP7668P3x5NnLQwqrWhYT9LQ4PjHxSNMNMe/3/MuWTa7fv8TKLijKIf/p2d/eTjH57X8QvW5m0Ge6OBEcVGiDO1GNgixFtmPX/5g1WF9zeXEDNTwCtVhZcC/3j3T1wcFc3AwADSBFaLEjggW7eu2ipmYVWrwPzhTR377/c/f4jJOTEwfnebOCvuJDYbwQEIc264e5P+zz/Mfhs+fJ0TyMOxYP3BOndoCMMDEEt0IEIuVyWX/aOxurySpvY9WKDAoghnAoB4AzXSkeMVj0aIMuS4I0kjrvQKAMggnA9nnGFhAAAAAElFTkSuQmCC',
    order: 404,
    base_experience: 151,
  },
  {
    id: 315,
    name: 'roselia',
    weight: 20,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png',
    chain: [
      {
        species_name: 'budew',
      },
      {
        species_name: 'roselia',
      },
      {
        species_name: 'roserade',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABuElEQVQ4T2NkIBMwYtPX0NDAxMDAwHT16tX/q1ev/otNDaZGkKaGhn9wxaGhzA3a2v+vXr3KuHr1apD4f5AcikaQTQ0gTYFThKOlb6WyvXt6fv6ytTvRbATp+Y+sESwAUrRnUeH+74yiDkHd+z/+vnQvMjDSUuLXp/dSW7duncDAwPAVZCFc46rQUOYwsH88tf4c4L165BrTv6l7v/wN0GZlvf3ob/GkS6+v6rH/vHvg+Lk7IP/DNaalpbHOmjXrd2hohF9dsMDGraf//OVmevvaX+O/xOk7orXB7bNboE5GcSrcmekZWSsZOHjDGL9+Zfj68s6+Yq+PEvc/iJ4L3MizhOH4Mrh/wTb+//+fkZGR8X9VXVnDz29/6nkZmRhuPXnzQIH9ysvGOEXzExe/fLSd+rfzf8yuTsYGBnCIgzSC4uwfg7KyWKiR7laFv7wm7xh/Xpi7dpXDtnZTj58/2Xv+/vx5J6T9tCPYEkjAwEMV5lQpVws7k90nDm2GqFFhZ2C4A0oA3MbGxt/Onj37GxY1WKMDLBkaysyAI9VgJACQsx0cHJgOHDgAsgUUp8gGg+MYm40kJXcAlFm2Eltdt+EAAAAASUVORK5CYII=',
    order: 406,
    base_experience: 140,
  },
  {
    id: 316,
    name: 'gulpin',
    weight: 103,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png',
    chain: [
      {
        species_name: 'gulpin',
      },
      {
        species_name: 'swalot',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABIUlEQVQ4T2NkIBMwkqmPAavGhoYGpvr6esbGxsb/DQ0N/7AZjqHx////TIyMjFgVIxuAorHh/3+mBrAmdd51m6bo796+7ur06dM/MjAwYBgE1/j//39GRkbG/wwMbtyPHs8/wMLEYPLg4dMnnz9/jnd3d963atUq5rCwsL8wW5E1sjAyMv45cOBApK2d/bIt+05/FWT/z/3g4YM9cTHhrgiDIVrhGmEmzp49W09UQvHi+YdfGJ5dPcrw/sPblyryYpodHR3vQYEGCyxUP0IlKmqaW8T4OQT/MnGo3L53f8Ovv/+2L5gx4QFOjejBfv78eQFDQ8MPIHGcTkXWBFLU2NjI3NDQ8Cc0NJR51apV/yABhwB4Uw6y09BdQ90kR0z6BQAHL4YPmJodGwAAAABJRU5ErkJggg==',
    order: 408,
    base_experience: 60,
  },
  {
    id: 317,
    name: 'swalot',
    weight: 800,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png',
    chain: [
      {
        species_name: 'gulpin',
      },
      {
        species_name: 'swalot',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB2klEQVQ4T2NkIBMwYtPX0NDApKWlBZYLDQ39x8jI+B9dHYbG////MzMyMv5FVggyqKGh4R+yGFzj////QWxGRkbGf9ev31V7+fqVPQcbx4MrV26fTUkJe/f//38mkBxMM1gjzMT///+z7zt4YjInD6/5z18/9f78/vPz378/pxh+/Upzd3e8sWrVKuawsDCwa8AaYaYdPHy8WlJOqeXs2TMMDH///r9w6TKjsKAAw48ff/a8//U3vL+hCGQzyFX/GWGmFBdXGAeGhJ75/P3nv/dvXv1/eO8e0/WrZ/9zcXExsLBw/Tt56Jj66cun74WGhjKvXr36L2PoqlXMq8PC/kaFRhkk5+Wf/vjlG+Plxx//Xdm7gYWP+99/Pn5hJlZWVoYPn3+snTV9UgjUj4wwp4Ktn7lw1R5JJkbnj/tPMbzQkmBQUFRi2LJp43MxCXkhHl5e9vqaEnEGBoZXoDABhyTIm8YMDKwxU2ZM+XjjiqLQswevWDz8FbU1da02b96ZxMz47zYjM5NtR1v9RAYGhm/g0MeVcCZNmmT45MkTvRcvXmxZtGjRWyR1YIswNIKcYc/AwOTY0PAHprihoYEFGm2gqACnIpw2gqKo8cABpgZHR7hirCmH1LQOAPmp1JO1rO00AAAAAElFTkSuQmCC',
    order: 409,
    base_experience: 163,
  },
  {
    id: 318,
    name: 'carvanha',
    weight: 208,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png',
    chain: [
      {
        species_name: 'carvanha',
      },
      {
        species_name: 'sharpedo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACgElEQVQ4T11SX0hTURw+595rzT/MBK3YSkgJ2nUyyhmIRmuBDz2pdG8g0pJgtnrKB30Q5PoyCCS0ILzPzhZ3w6DQCDbQBB/EoWJN5Y6pd7U1vGOb/9fdduKMJlsHDhz4ne/3fb/v+0EAAOA4juA4LovfhQchBEdGRkiO49L/12AexDDPKwYGemmj0biyuOirBSClbW1t/YYBCCECQljUGOICz/NldXXXO1KpP71Vleprx8cH1edUpZXxeOK9Wl1hN5vNPzA7hBDlmXNAh8Oh1mg0pnj8sLOtreXJ2sYWCAXFTNWFiySEaWl6+sPjyUnnfOFIMC9jdJSvbmnRuwnq/F3x+44SjQZKAqFfp81NN1Xr6ytfxsffPhAEgWRZNoPJcoz4uJ1u4+qOqP69sDDeZb6v90Qi2d3dANQ3GGAkEj5ZWvIaVleDIsMwpMvlymAgvli7amzs9dTh0bEhDYj6rHKaOTo4Ivf3k+mmpmaqtLT8hcXS847n+ZK+vj7lzFW73V6TTMbn9vYSlEpVsk/TtHFzcwPpdDo0M/OZqKm5HKRp2jo4OOjFs+IZc25Zrdbak5ODlxbL02lRFHmSJHSSFFK2t4OUTncjI8syFYvJYH7+U4MkHfoLpYKuro6PnZ0POxRFQV7vV0iSADQ23gLd3T3Z5eVlYmLiTWptzWMIh8FWzpwCm0mbzbaYSMRuh0LSRjL5E7W3s/UIEaQsR6lwOPLI4/EIJpOJOnM1L9npdDwTxcDV4WHulSAIpyzLXurv75/SajV3ysrK79lstjkcyxnw32oVbUc+qtnZ2SsEQVT6fD55aGgoipMoAuKPuJvf78du491EDMMQOLeCJc/F9xemGzZm1Rc6YAAAAABJRU5ErkJggg==',
    order: 410,
    base_experience: 61,
  },
  {
    id: 319,
    name: 'sharpedo',
    weight: 888,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png',
    chain: [
      {
        species_name: 'carvanha',
      },
      {
        species_name: 'sharpedo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABVUlEQVQ4T2NkIBMwkqmPAavGhoYGpvr6+v8wQxkZGeFsuBi6jf///2diZGT8hywOMqihoQFFDMXGVatWMYeFhf0FaTpx4MDM9x8+fPIMCCgF8ZHlQHy4RpjEiq5SZUUz7/0ampqyDx89Ynhw//41ZVEGZ23HsBfImmEaQfR/BoYGprxWiWwbWe5iSWFB+dfv3v7//O3nzatf2eZ0HX8wk2F1wxcGhv+MDAyMIAIMwBr13GK5tVw9cjj+fRY05ebO/cXI+HnF5+8TdHkEhS6eudJ3ekHDC4b//xkZGBEa4ZpBDKWyyVk5hkoTP/9hYuk+ei3jy4zimWDjoZpQ/AjihIauYl69OuwvQ81cvxUaXLNesvDdyj/2uI1hUsaO0FWrmFdDAw5DI8TQ/4zQeONjYGD4BBIjGB2wuHNoaGA50NDwB8RHZiPHLc4kB7UZ7AhsyZLstAoAUa+OD0Mrwn8AAAAASUVORK5CYII=',
    order: 411,
    base_experience: 161,
  },
  {
    id: 320,
    name: 'wailmer',
    weight: 1300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png',
    chain: [
      {
        species_name: 'wailmer',
      },
      {
        species_name: 'wailord',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABtklEQVQ4T2NkwAH+M/xnZGRg/I9LnhGbBLKmVatWMYeGhv5jZEQ1BEPjqtBQ5rDVq/8eSSr2/Pzzt4Hn0kntIMP////PiKwZQ+OZtDRWk1mzfm8IzW/88en96/edResVz5z57pGS8g5ZM4rG/w0NTIwNDf/2ped5qYuJrX125dmhCz5mQtKiIhu8/Hxa9+/fz+Lo6PgH5AJUjf//MzEyMv5blJ5d4+Xj1Hz9/puXh46e7hV2tDDNyEgJw2rjf6imNSvXFH77+dP6y4t3Jn942M+fP3pyg5y05MfGrpYNUIvAIY1sI4j9/////8wN7R0TxAVYnHnY+K7HpaQHQ0MeLA+LBTQ//mdibGD89yiyvOi3uVD31b9Pma5NPpJR8eDczAYHB5aGAwfA/kOx8T8DAyMj1MRbsysefb/7T/bowXMMYnKCH0K+r5Zj2MTwuaGBgamhgeEfRuCEhoYyr169+m9mgmfA75f/2qQ/smhqWP87ze+43dbLi+Hn//8MjIyMEOdiTTkgibS0AknmDy/ipq9aMYWBgeErsm04NSI7G5xqkLyBNXDQ0i1jA0MDYz1Dw3+Y35HlAd6Mvw+avWALAAAAAElFTkSuQmCC',
    order: 413,
    base_experience: 80,
  },
  {
    id: 321,
    name: 'wailord',
    weight: 3980,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png',
    chain: [
      {
        species_name: 'wailmer',
      },
      {
        species_name: 'wailord',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABjklEQVQ4T52SXyhDcRTHz9kfN2LyxEY0jxvlzevdm5RCuXm2B6SUJ39K++2JUDwpD5SHPWyLSeRxE2EPyoMrJYyVf2u6K/Lvd+/Rbu5Km9LO2zl9P53T+X4RiiwskoOCIBGhH/wIfgDGmMYYmHw+IEQgY1EeGKKQWUJJNQTRqGjxeGI82xMBGnDhjUA4s++3j47Hv2BvJyVvuurl98oXSTp8NuAcaAwWjqbHwMa9T8pLDaSVN+E80d9s/+zlqeSUNHJxQgxMyEDTwVCoxyxJYXV3o6U9XStuq2oVNJUcQPK9Gk6fLR9XUCa83aQGloeCS4ZWB4mYCZFpq2vdXUqqYeWTcxsJCVPG6QStXCAgwNuTu47AYGBLZKIlxmI8d2o0yiweD+PzQ5N9Z3XJxbj6et/qrLJlkkqGI3+wllrngsPB9TwQQLdGf3fbbKe3UVa2r6sreqwCnj5ePh473A5rZCKSNnR5XyXdLsz59SsgBAg/Xha0I3uOCKImu2SEMIDb7SbmY1ns7wD8N4JFZ/UbSuqvD4Ti5/0AAAAASUVORK5CYII=',
    order: 414,
    base_experience: 175,
  },
  {
    id: 322,
    name: 'numel',
    weight: 240,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png',
    chain: [
      {
        species_name: 'numel',
      },
      {
        species_name: 'camerupt',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACD0lEQVQ4T2NkQAP//zMwMjA0MDIyNvxDl0PmMyJz/v//z8jIyPgfJPa/oYGJsQG3ZrjG//8bmEC2nNgfLfP90zcfR//1MyBi9f8bGhoZG9AMQdIYyszIuPrvg3Mps1lZ/6RMmXJdu33myWswFzU0NDAhawZrXLUqlDksbPXfmQUikhE51nc4OAS5tm75PDUoY21OWlOf7vtfTL9WtxTcDA1dxbx6ddhfkB6QRsb/oBBhZPx/9VRuDzePZvGjO88ZHt45cye2aLtaWsdknc9MgmXLy2JiobaD9PwHuR3shOkVDApfVWfsv/xJVixccDvXn687zrz5rHpLTPLz102vMjzev/0+c3VHaqtDQwPLgYaGPzA/gk1hYGDgWL6y/ZCIAL/pyZssX/lZXnMn+lxl2HtS4pf/EskQho2lm0NDQ5lXr179F10jQ/bcrSe55TTNXr39wqD9bDNDScw1hs1bf570S1xjCTUc4lRYqCE8Hm7q0RBwhFda/JLUqfUvBcU5he7+kRVfvPOxLcP5rmcMDQ1MDA0N/+AaV61axRwWFvZ3+cblJj++vdrAwvKf8fSZl9cei1q/42H+839xYUBEw/79LA2Ojn9goQq2FKZxzuLF3lzMn8o52BmV7p+eXvhOpIzt8/d3pybV5t9GjkucSY6B4T8zAwMjOM7ASRApOaLYiC2FgGxgYGAA4X/oSQ4Aj370D9Q0fNEAAAAASUVORK5CYII=',
    order: 415,
    base_experience: 61,
  },
  {
    id: 323,
    name: 'camerupt',
    weight: 2200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png',
    chain: [
      {
        species_name: 'numel',
      },
      {
        species_name: 'camerupt',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWElEQVQ4T2NkIBMwYtP3n4GBkZGB4T+IbmRgYGxgYPiHrg5D4/+GBibGhoZ/MM0gDchsmAEoGhsaGpgaGhr+3Ujy49WYt+nzqlAHHoWXXwXNDp1+jK4ZrhFm0+viYuMvf/+WKU6YkHrdyvL8dz62iUY7Dk46Y2zManL27G8MG/+npbEyzpr1+1JS5Or/P/++/2Yocof/+cdyrd6lsgwMDN8aGBiYkP0Kt3HVqlDmsLDVf9dEOJrr5YYukZQRVblx9nynaVBbxf/9+1kYHR3/IAcQsh8Z////z8DIyPj/xKa20wbS/CbXT9w+ZJg9wR5bAKEEDszWZfFKka4lxcuePnz1/kf4tmKLr6fnwwIOa6iCTf7/nxFk66X9jTMeXbqt/XfO1V3+l883QxwDihkIwJYAQGIgBUwMWCIen0aYgf9BtjM0NjKCEgTBlIOkAGYz1tSMNa0Sk+4BdrCTD9lpzLcAAAAASUVORK5CYII=',
    order: 416,
    base_experience: 161,
  },
  {
    id: 324,
    name: 'torkoal',
    weight: 804,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png',
    chain: [
      {
        species_name: 'torkoal',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABR0lEQVQ4T2NkIBMwYtX3/z8jA1iG8T8uc7Fo/M+IquE/Y0MDA2NDA+M/ZEPQNEI0pZXf5bfUOPQzISHhJyMjdltRNIau+s+8Oozxb0zHq9VP3n3bcaBLYS4Dw3/G0KwH4qunKb7AaeOqVf+Zw8IY/zZMOL9MlOvDt7b17xo8LK0vPX3zcu6OSfqlMIPBvkc25f/+BhZGx4Y/Bzf3ZxsbSEx59vL/23l7Fdd3lM/PYmCY9RtkO8z/qBr/r2JmZAz7u3nNmqU+zjxRuw5+ueseEKICMjw0dBXz6tVhf2EWwTWGhv5nXr2a8S9D8m+73f4bVtrovpFonCrY2tETUbO/wYHFseHAH6x+hLs/9bH9BLWTPS46W+/reOrGMzAUfYd6CSVOsScAiNFMDAwMoLgDqcFICHgTwP///xmJikckP8AMJCXJEZfqAUZLgw/W8TZQAAAAAElFTkSuQmCC',
    order: 418,
    base_experience: 165,
  },
  {
    id: 325,
    name: 'spoink',
    weight: 306,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png',
    chain: [
      {
        species_name: 'spoink',
      },
      {
        species_name: 'grumpig',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABnklEQVQ4T2NkIBMwYtHH+P8/A0NjYwNjfUPDf0YGhv/YzEbR+P8/AyMjI6rCVatWMYeFhf1F1wzXCNP0f2Ya62rB94wnLyqZMXz68K538sxr+/fv53BwcPjJyMgItx2s8f///4xgQZeZ/P0OhycyPXzK8pfxH6eAGMdPNp8pGTEWqp9Q1DEwMCBsbGhgYmxo+Lcg3qtPxNil8Bm/yA+ux+84VNmZFylkJBx/dv3OCUMzwwv///9nYmRk/IfkVIjA5dKqXXftnF1///jwV/fQcSYuOytGJgfbDy+v3DY1drS6g6GxwcGBpeHAgT9Lnb1r7xibNen++flF6c0jnhVCSts7JjR5QZ0KNhzERg5VEBvkeaa929qPaChIWna17GMQlnz/trbNyZaRvfD6//8NTIyMDRgaGVatCmUOC1v9d2p/wUpZUV7dC0vvSUrpfX6T3CFjy8g47QVOjYi4UjVnYLh90j8ozGXjum8/GBi2HNm/v4HF0bHhD0wNtpSDkVBgLkGWwKoxNDSUefXq1f8aGhoYG0CqGyD+IqiRmHQPAJ/urw+f5PeEAAAAAElFTkSuQmCC',
    order: 419,
    base_experience: 66,
  },
  {
    id: 326,
    name: 'grumpig',
    weight: 715,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png',
    chain: [
      {
        species_name: 'spoink',
      },
      {
        species_name: 'grumpig',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABfklEQVQ4T2NkIBMwYtPX0NDAxNDAwKC1SosxNDTsHyMjw390dVg1oiv6/5+BEV0zhsb//xmYvhwrEamxNmJM3XFdQlyh+Z6oBsNndM1wjSDnNTQ0/LtYEsv9xcL95CsGUzn+33t5z+37F1cyO2fx/ob9LI4Njn9groFrhEks9lgTyRmjt+y9DO9/jvuvGZ+suXG8cmuYFVQDSD3Yv0g27mdpaHD805WyIY5ZkXEhj+LvP9/P/2L+8YWJ8bMBZ1hruv/qhgaIGhSNDg0NLAcaGv7Y5fZEO/N+WeLnJP978/6TDHWtByYvWVLTGBMT84mB4T8jAwMjqo1Q20GC/PGZDUf0nQJ1HuzbxfB2+hrZpQwnnzg4NLAcONCA6UdY4EyatI392I6V1x8/O/RYXspO4NPfj7O37NwwxcHBgeXAgQOYGmE2urnpcd9//1319unbF6ABwsfAwPCJUAKAh9r///8ZGRkh/kHyBlw/1pQTGhrKvHr16r9IoU5eksOWngEhKZ4PuBZsGwAAAABJRU5ErkJggg==',
    order: 420,
    base_experience: 165,
  },
  {
    id: 327,
    name: 'spinda',
    weight: 50,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png',
    chain: [
      {
        species_name: 'spinda',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABl0lEQVQ4T2NkIBMw4tT3nwEix8jwH5sarBodGhxYDjQc+APSELoqlHl12Oq/6JrRNTLub2hgdmxo+OPAkMAhEPCAY8OGAx+waYZrbGhoYGpoaPgHMtm/zsKXW5HTgeEvy++3t78v39l55KJDw36WAw2OYFdAfMDAAPIEIyOImsnAuiidge3k/Jh6M0u10pMXbzLcPHHJdW//5T0Q5f8ZGRgYwX4GaQRhMOdESP5iFW5JpyM6nyZ905fpOLHv3J5JHXNc/fqPl/38w/RkZ6n5MoaGBiaGhoZ/jA0MDEwNDAz/GFQYRLcKht9VM1HjXaf8/CWP6mPxO69+nbl8Negcj05Q2vfXd3+c3DlP8sOBBR8Y/v8HuRDh1HAGBiNudSNNvgwDJUOLn01XLnGcfH6cZ9OZf1rZosJ8Ww/3R2YwgCyBeA0TZGVlSTCJM93jZuIo7KztmWnNwMB7lIHhM7I/UTSGMjAwa4eGMjesXv0rOzlK/vv/L+/mzdsE1YAZOLgSBlKKAYcm1FdI0YFNJzReQZqJT3LEpHsAEWWcD119k2oAAAAASUVORK5CYII=',
    order: 421,
    base_experience: 126,
  },
  {
    id: 328,
    name: 'trapinch',
    weight: 150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png',
    chain: [
      {
        species_name: 'trapinch',
      },
      {
        species_name: 'vibrava',
      },
      {
        species_name: 'flygon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABOklEQVQ4T2NkIBMwkqmPAa/G//9XMTMwhP5jZGT8j24BTo3//zcwMTI2/ANp+N/QwMTYAGHDAFaNZ86ksZqYzPp9/3pvwttXz4RN7Ht7/68KZWYMW/0Xp0aYpvfHGRz+8sfseviSxc7YccEJvBob/jcwNYCct+02+26BSadeffrMEe2xwIKBgeE9Q0MDEwOSc5GdCmKDA2HRud4d3BLC7j+Y/jDcOXLtRH1InyXUiXA1cI0N+xtYGhwb/hTMSwzRM9NezcHFwcDIxMBw68odhp1LdvocW3F9a+iqUObVUH8ibPzPwMjAyPA/st5XRExSyIudmz3i/av3fz+8+3j03z+GDWvbd934/5+BkZER4irUUIVqxpoo0OQwogNkauOBBuZ6BwZwvKXPesYs9VzqbwMx8UhMMiQ7rQIA96N/D/gCG60AAAAASUVORK5CYII=',
    order: 422,
    base_experience: 58,
  },
  {
    id: 329,
    name: 'vibrava',
    weight: 153,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png',
    chain: [
      {
        species_name: 'trapinch',
      },
      {
        species_name: 'vibrava',
      },
      {
        species_name: 'flygon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACF0lEQVQ4T3WSX0hTYRjG3/c7HrczVwvdPxtIN2lu3il4F6PropD2VXdBZHoRkRldVPBRdJFdVMKK2YWxi8hzIEFDQmoISRJYXU2iP8ioNd0Zmx6G7I/nfHFcG2rzu/ue7/vxPu/Dg1DncMaJEgekChgAyOv9wd2iCSFDo6ozxgnbdq/q/4Hmw/3BWIcIxD30NDgPALweXAM55wQRjZlw6rYkNd/R0gXIrmc+JlKfTrHndGU3vAXKIVmgCtUv20f9x272xZvsdlhXC0Wn02P5/jv+sn+k65wsc4FS1HdYlWVZoJTqb8fPX8kmbzwSGzNlyVYS8rleUihmN2Y/RNujsVvJ7VORMSCMgfEmAq2gP3inps50ch0Nt+89ljb8hl48Iix+m+q7F6WTkf5F8dJYT9mciqGQLCgK1YcvPO7yWHs+t7a0iTaLw8hpacKxtFkuYcPC8oup6OTdk/9smuvxWjjBIGsI2A50a665172+q04rdxoP5wJ41PuMu50+omqJgScTg5EKgxWwGs7Q6VfHdXtq2ru/A5rQs7mUjJG2lm5ysPkwrOaW4WdyvnNsevir6XILrC597ezEgEPyjghEtNoku2hplGBNW0nn85mFVPbH6Pjs9VidAlQsAIDj4olwu82y75Cq/VldU38lZr6EE7sbtqM5e9VLDnFBAQXMEPesHANG4iE/BlQXxl0qDwSWOGOs1t0q+Bcgd+5m+Il+kgAAAABJRU5ErkJggg==',
    order: 423,
    base_experience: 119,
  },
  {
    id: 330,
    name: 'flygon',
    weight: 820,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png',
    chain: [
      {
        species_name: 'trapinch',
      },
      {
        species_name: 'vibrava',
      },
      {
        species_name: 'flygon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABmklEQVQ4T2NkIBMwYtPX0MDAVA+SqGf4z8jI8B+bGqwakRX+b2hgYmxo+IeuGVkjiP1/VV8oJ8NfZo8335kesbFy/kupnHt+Zpoxa/qss7+RNcM1gpzX0MDw7+Q6Z2GGF3dP8vAzKbOx35tSFqKyxtxL8H/FttOHGhgYmBoYGMC2wzXub3BgcWw48OfEJAa+F9/CnsnJsHFvPq14Xo3xKK+syr4AmxyGqzA1cI3/GRgYGRkY/h9JYuA9IVlatuK3Q43s11e/v9z4yuqkdZPBSHFy0aFbPqtaZ2x5+v8/AyMowMA2wjitaQyS8lJxNYZ/1bP+vv/478vlM0xX1X9+FtN4UHbvhsTGwllnn6NoBGmG+RHEvtXPMI33hnHmqdWch197vf7St4Q57BrDtS+rQkOZw1av/oviR7BmBwaWhgMMf0DsDW3azx/++BKV32R2aFLQTcm8dZeeQMMEHK8Y8QizeWOngeu75z9uJ0648QDsHWg4wKIEawKA+QOkaFUoA3PYanAUoKQgnCnnfwMDE0MDOPTIS3K48gAAxiqoD/YenfgAAAAASUVORK5CYII=',
    order: 424,
    base_experience: 234,
  },
  {
    id: 331,
    name: 'cacnea',
    weight: 513,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png',
    chain: [
      {
        species_name: 'cacnea',
      },
      {
        species_name: 'cacturne',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB8klEQVQ4T2NkwAX+/2dkYGT8j0uaEasEVJNT6HTpj4JMr87OSv+Nrg5DY0PDf6aGBsZ/HinL9L5/+Tjl4IpMZwYGht8MDP8ZGRgQLkDWyMjA8J+BIXQ1E8PqsL+OMfMOf/vy7vnJDSVhoaGrmFevDvuLbCuKjQ0NDSwNDQ1/3Pxrzb9zKpx4/+JqxJUDfSu1QhvYrq1u+IVVY0JCA8eCBQ0/wJJmTdsdlGU9Pn54vPvv90dJlw7MeWKcNpMV2a+MDA0NTAwNDf8YzKcZ51gzVbuZfFG/+EBEa9nRz78kBXnZvrx/8vDU1hoNBgaGH3C1DAwMIKeCMDjYm1unHkvwZLDsW874a9/Nf2wSooI/X737xs74+9VaZW2z5NWdrh9hzmX8//8/IyMj4//caAY+To0tN0QEeSU/vrn/69aJwyznP7MwGSlIM7z5L/yRiY372+d3D4pObmpY0dDQwAQOHBCjoaHh37pli+xff2Wbofn9j8a9G1f/f5KVZeTl592cmBUbamwcKs7Bofj+6NGuzyA98FBNS0tjnTVr1m9+PTunViurhSIGevwff/3+nZ4XL8vAwPANbwJYtWoVc2ho6D+Q02fO3WQjzscbHRDqmAkSX716NcPq1av/wcIDe5JDMh4WBgSTHFQBY0NDAwiDbMAKAJRyz5HX25FZAAAAAElFTkSuQmCC',
    order: 425,
    base_experience: 67,
  },
  {
    id: 332,
    name: 'cacturne',
    weight: 774,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png',
    chain: [
      {
        species_name: 'cacnea',
      },
      {
        species_name: 'cacturne',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB7UlEQVQ4T2NkIBMwYtHH6NCwnxkmfoDh4D+GhoZ/6OpQNTY0MGFTFBq6inn16rC/yJohGv//Z9RqXM16rSHs16pQBubVuhvCWTg5tZ49fvLy3tmjax8fnfeMAc1QRpAmBkbG/zDThLIWbnXSVPfiYGNm+P75C8Pjy1c/v33+JODuro59xmlprGdnzfoNUgu2MbRktuJzRv40sZ+vXI00ZYxPPf/358W3Xww3Pv76K//jN/v/T69eXdlYKc/AwPAD5mywRt/0Dv/NH8Q2rPH8xmBjpfH73js+1s/vXjD8fneXYdoJrt/vmfhYmb6/6Dk6u7AU7LKGBibkwHHat7JxsaGustRfBtY/P79/YxERYP4/7yDz/4b7on8c+JnZfv74uvtCTZ7fA4YHP8Aa/69axcwYFvZ345ziMnNjzU52NjaGj19+/mH895Px0av/zJOvyDGwCogxfHr+8Mfmlgg5BgaG1zAbGRsaGkD439L+zG4ZGZF8UUEe1ncfvjD8+vX9/Y37X+uzzqjct/l96/GRLTMvggIU2akgNjh0Q/2MVAKdzC3+/mf4Elu4+CgDw5fX8DiExgJ6ymH8/38VEyMjamQ3NDSwHGCwZxC9+vo/LCFgS3IMDQ0NTPb2DEwMBxkYDjI0/GtoYCCQ5EhI8ACm5tgQtGSo0QAAAABJRU5ErkJggg==',
    order: 426,
    base_experience: 166,
  },
  {
    id: 333,
    name: 'swablu',
    weight: 12,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png',
    chain: [
      {
        species_name: 'swablu',
      },
      {
        species_name: 'altaria',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACbUlEQVQ4T4WSX0hTcRTHz7n3TtdM1xymZRhGRkF/wF4EibaiIMonUV9E87W/RIVEPVwDy3APy6JgFfQYk+ihqBBhFuIqRQWHa6ZGYan767arbb97f/fErg9iCJ3Hw/lyvud7Pgj/LUIApH/HcH2DEGQwejJ0AMBRQZadWvXpN/uSmqSuiIWqRY9US+lQ/6qQCOUBEGUnahsbeFq87dSO9wVCdgpVzfOtr34QcyLAVSsNAHniuQ+lLwIZ6KkJkXXP9pJlVrA7HF4xeccLuyZ/pZthuP6jw+GTjI3k9Yr3/jTc/p1UmnomF7YCEDbas1RbzjZPz5txchEgmJJgJ5/77O89XpPTrFptnnC7zuy/bNHjEJhbgqEIwbhiAhA5wM8kB+AEWVGQjySESttwR+v59k4EuFHiftI6U+8oLyzYJKlM1aX0MoPBiQS0+TWoyGgoRRWaZSZoqUzhrqLR53Ln/CV0uV4dbqhzjlitVmBMI0RESRRAEnTwTyzCyWdhKOVAusqxQowrYZ7n3ULoxk/9Yyeq9h7o0zjXEYWcdSQiAESw5IvgefkVrj6OEVTl87rKIgnSCzdfexx3UL4ul7W0XZyx2YotjDFNEATJOB4FYCxDicQi/zEXxWg8Kr4dRm8gkj8S6D3WbYQz6p/qOnSwql1RAFRV50Q6qZxBaikmEmmYzaQgFBpzN51tu2LAIcuGNaN874a67fbSCzab3UzEQVGSEIuFIRxZCE7PTj9sv3XtkQFKx4CYowkJCHGNxTLPA0+tyWQuUbma+T4VDN697/pisEVGbsbb1/6YC8RLAjYi3wg5n88nOZ3OdTj+BQxaJM+sx8QdAAAAAElFTkSuQmCC',
    order: 427,
    base_experience: 62,
  },
  {
    id: 334,
    name: 'altaria',
    weight: 206,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png',
    chain: [
      {
        species_name: 'swablu',
      },
      {
        species_name: 'altaria',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABhElEQVQ4T2NkIBMwYtP3f1UoM0Oo9n9GxoZ/uMzFphEk9p+QQ7DauGOht+MfRoYXPvdMb6ZJPmOelTbrDwMjqmFwjfv3O7A4Oh74U+3LYJFW5nv864/vW7Rc9/jCbP7/n4GREUkzWCNCsIHj9oUvJ5i/f9E/euDN9lhe4f4AQQ71DdHPZjEwrP6FrBmssaGhgamhoeGfDIOM0LHHVTc+vGYQPX3o3Dc5h+9cf0TEGH7cfr4y0HFFxP///xkZGRnB/oc7FS5oXCB5oOLlJFW+JyEcQvy/GDgZWV4///013vWm6kmG+y8bGhiYGhoY/qEEzv//+1kYGR3/PLhRP09elDvx5t7t3wRFxbk+fvnNcPTsXcPEhgsXVq0KZQ4LW/0XTWMDEyjuTmyPXM7CIxMqz3GH+cwN7rNsf7+xv356PTKi+vqVVaGhzGGr0TRCnQ7yA0ccA4Nc7DyHUNekAzMZGBjeoMcrdRMAyOaGBgZGe3sHJgeHA38ZIcajpCasKYdQcgPJAwDKwJsPrVf+0wAAAABJRU5ErkJggg==',
    order: 428,
    base_experience: 172,
  },
  {
    id: 335,
    name: 'zangoose',
    weight: 403,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png',
    chain: [
      {
        species_name: 'zangoose',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACW0lEQVQ4T22SX0hTYRjG3++cs7UR2nT+WZqkhZiGgWa2/lELQoIIKY8XIghGIt12kYW1MxkWGeWFgRYiSGScZQiF0RSmS2KFQ0jOYtHm2NpUtNhZW80dz/liqyND9t588PD+eHm+50GQYTAGZDIxpNHIiBYLS7hcLswwjJS+ijJwSQ1v1xmGIdLh7aAMZXd3d9aZzYOfnj+5t9c+OREbnHD40uF0EOH5eQrV1QkOh/1mgVbqfWt9P1mvP1W7uupRXRix6cHyzC3DKZABIIwYY4QQHrpzy1B17vQYpSYLfwdDEAn6pLyiYoKzf7B2PhxuwJghEGIklIQYgJTxmYvHerS5u25vFJVAuLJWKpt9CZpYEBJEFrGsKBOsi57DXU7nIkvTZOqi/XxNvkZF9Gm02jYkSZBICGIOwZN/dHrgs4uBzy0RYlSWwj86cL99znZjqKNDIXskp9ouzZzQUSdjAZ8QEpSURi0CX92EPAXlEpIwjgRWSDTevza1/qVyNAg/ELbZKGQwbL4eH35wtDznuv9bOO6b+6w6wvUDf9yIQ+rdCAd8WLnwTlril3s4STvwiON+IhazZDNqFkeGzY9r6g9d87i/wy92MlqxZCcUO3XqQMgT3CGIutI9+yhHFFraF7xjbFWVcutzzgDk7W9teqUJhwvn3kxf6W1peFoqbhx48ZHrWis9qMrHwtlowH31rnf9KwZAskc5+ORLAYDQ2th4ORKPV1f4/YN9LteK3KT/EN4qQHoraKBJC1hEeZmlgaQtgE3/Mk9Fl6lySR0ns5r2eokhp3MTZejuX5AmEeP/LE/ZAAAAAElFTkSuQmCC',
    order: 430,
    base_experience: 160,
  },
  {
    id: 336,
    name: 'seviper',
    weight: 525,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png',
    chain: [
      {
        species_name: 'seviper',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACW0lEQVQ4T22SXUiTURjHn3P2bu+2bEObrImUkGVQyhgkRoHbRVDd1ApXmlJhC4kCIYS6yE51FQVeSBl1VQTm3oKWhg3NOWdg1ED7ELIaBTGrfeDm/Nr27sR5txdrdOBwPvj/nuc5z/kjKBiUUgQgYBgtRWAFgCu+LBBCmQwBSGt+v0pSSjFCKFsYTD6zoAghOUjumlKCESISNOUdqtPpinaCAmAi8LavsfVcqBBGOSgX6Z1/oLjUUHZbrVYfXaPVQhYohKOxMBXFr4nkQviNx+c4SciypGeg1+vlbDZbZnzcd2iDXvskHo+DhuchEo1mykzrOU6phIVkEj58mmmytzh7mf6fjKEbB68uJpYu+ZSWEb58Y1zL8/t/xuaeGnRFARWC8uRKurfZeWaCEIIZyCZ7MPK02yerqrbXhN4P+3tilfwmY0lt+uP0bGJ46EI3wANWHYMIIVkkv49Syr32DHi54ORu4zYzxLAGei5fp1vFDJoq1kNMpDfd/e4OORFyuVwKh8MhTo+9sOiMpsC3vjvAbzanjJY67Pe/4qJLyyvVWypViWgMZSjUHz52Ykz6NhkcHOy3rl2ce4mf3cLx6r2wrnYXpObn02o1rxRFEZQYwffZ3532ltZrjMk1x9WgQA5BdHccvy9GIgce6mtONRtSp01iZs+XkorOH59nfqmoeH6k++6+5wBBuTmyg2h7W1uFUaPBF7u6go+OmHdQXaWz8d7jswCQAgAVpTT9H+es2slFGlQOIjCxZA5BEDDrw99WlEqVBysh3/IsIYDrwYptZJQB0nflV0n+B7TYGWHFFU+0AAAAAElFTkSuQmCC',
    order: 431,
    base_experience: 160,
  },
  {
    id: 337,
    name: 'lunatone',
    weight: 1680,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png',
    chain: [
      {
        species_name: 'lunatone',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABSUlEQVQ4T2NkIBMw4tL3//9/pgONB5gcGhz+MjIw/kdXh1Xj////GRkZEYr/M/xnRNeMoRFkEyMj47/32487fH78PPHVqgO1JnsmPWpoaGBqaGj4B7MZXSOID3bWra4le1Q5+JwvX7uWoTejYuaZtJmsJrPSf2PVCDO1q2uGlwIH2yb277+Yb7x9YV7e1XBq1apVzGFhYX8xNMI0KccGipXouF77xs4sLCUszPDwwcOsitri6fsb9rM4Njj+wWYj3JndvdNuSoiJqbExMDOcPHu6uW9CW11a2kzWWbicCnNORkZJhJiY+PIPnz6emjRhvhcDw9O3hAKHiYGB4V9oqBbb9+8G127derz91q3DuQ4ODiwHDhyAOxPkXJwJIDQ0NuHp05dfjh3btYaBgQFsIHIiwKmRUErEY2Mo8+rVq0G2YCQ3vE4lZCMAZLKOD9crlbMAAAAASUVORK5CYII=',
    order: 432,
    base_experience: 161,
  },
  {
    id: 338,
    name: 'solrock',
    weight: 1540,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png',
    chain: [
      {
        species_name: 'solrock',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB+UlEQVQ4T2NkwAIaGhqY6hnqGRoZGkGyTPUN9X8ZGRj/IytlxKYRm9j///8ZGRkRmpE1gtj/69PquV7xfM7QfiOyhVlY8OszntfObA8eHa5dPOc+yCUNDQ3/QAbDNSILNhR03vRXd1S78vTKN5a319lfPPqiVrh1+j0MjcjOWO7vJquhEXXyv6yK5NNn9xlurJw7pfTugVyI8/8zMkD9yggzpdI5W1jJWPf0U4bXnxhPX7lhLusf/v33L4ZTbHd3qasqP9747mbX+r72WzD1jP8Z/jOCQmxOcp/Q7RePa66wPk2NNAhgdla04Lh699r/bS8PMUlzSjO8vX9mctvGxXkODg4sBw4c+AP2I0wziN2d1lmqJK3QZaNq/ufz968sKzYu+/v3w+mjzspG/5iYGIqs5nac/9/QwAQPnFWrVjGHhYX9rU2v2yLILeptJaPPcOHrdYZ998798Xz6Y7sEPx/Xx/8/uyLWzNq1KjSUGa4R5oQ4+5jST3x/u559evlaQkyck+Hff55/Nx/kh/6RXLrly4tvq58c/441OvqD2kLuf3qoMGnPzL4kh4TeD8zfItbtXSWJnihQUg6yX0EKuwKa3X79/c1Zs7lp436HBhbHAw1/wUGCnABgJoKC++rVq2ADV69eDVKIEngwdXjTamhoKDOyAcjOBQDgcvRnFpvytwAAAABJRU5ErkJggg==',
    order: 433,
    base_experience: 161,
  },
  {
    id: 339,
    name: 'barboach',
    weight: 19,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png',
    chain: [
      {
        species_name: 'barboach',
      },
      {
        species_name: 'whiscash',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABoElEQVQ4T2NkIBMwoutraGhgqq9nYGBkbPj3n4GB8cD+BmYHh4a/jIwM/5HVomj8/5+BEabg//9VzIyMYX9hiv///8/IyMgI1wzX+H/VKmbGsLC/h9a35v74/kvBLaqxuKGhgc1SnSnj47vPq8Kyu18ga4Zr3L+/gcXRseHPtmUNjcIC3HWnT10z1tRTcZUU4u04tPOwVUb76uOrVoUyh4WtBrsCYWNDAxNjQ8O/hgQviaBErysiIgLCf37/YTh/4mKtf0Z/C8xFMKcjbGxoYHFsaPjT35/rYqEuv1tQkO8X468fbPdv3pvokTah4MzMNFaT9Fm/MTT+h9q4ztk0j8lBp5dfSpTl84/P918/exGX3Lr+CEweUyM0cHYHu2WqFAZMY3j/keFJ++pjtsfOOTMwMPwARQ0jAyJK4E6FOeVYbUqcvpX2wmePnzOcPnR2ZtSSvRlQTSDLsEQHNJ7W7ewW+33yqs+Nncsf1y/oPsSgmvezoYGBqaGB4R+eBIAayWAr0CIew4/IKeRAYyPz66tX/4euXv0P2V84bSQlvQMAFEHDDxgrSBAAAAAASUVORK5CYII=',
    order: 434,
    base_experience: 58,
  },
  {
    id: 340,
    name: 'whiscash',
    weight: 236,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
    chain: [
      {
        species_name: 'barboach',
      },
      {
        species_name: 'whiscash',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABbUlEQVQ4T2NkIBMwYtP3n4GBkaGhgZGxoeEfLnMxNP5vaGCCaYCy/zMwMIAwCkDR2NDAwNTQwPDv//79LKdXLxQxm7bgBVQ1SB2KZrjGVaGhzGGrV//NkmFQKY+LXy/A8lf1zdPLU5XnXizGphmu8X9oKDPj6tV/b2barxXnYQ969+0HA5+gBMOp55/9vOZu37zfwYHF8cCBPzD3IjSuCmVmDFv993Ka3RodCc7gx+++fv3BLct97eHznIAVB6auCg1lC1u9+heGRphTpzhZGNkocO3jYGLifv/xJ8tXLv49Lgu3uII0/P//n5GRkRHsV5TAgTmn08nSTFpE+CSfkDCDiIQww/NHd9uC522s3t/QwOLY0AB2LopGmK1bQsxCPwlIez7lk7qgdP9M9JNPv/rz955fAYpfRmjoYk0ADAwOHAwMB35A/KPCx8Bw5xPeeESWBEX+AQYGJpDTYC5BlsdhI0IJsvNI0ogrrQIA3RiRD97YG6kAAAAASUVORK5CYII=',
    order: 435,
    base_experience: 164,
  },
  {
    id: 341,
    name: 'corphish',
    weight: 115,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png',
    chain: [
      {
        species_name: 'corphish',
      },
      {
        species_name: 'crawdaunt',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABuUlEQVQ4T2NkIBMw4tDH2NDQAML/GRgYQBikDkTDAYbGhoYGpoaGhn9wFf8ZGBkYUTWB5FA0IjSpsHt4aBid2bHlyhsGhs/Ozs7iymHK76SeS/2FGYqsEe6cpAWp6398+cV978CdAxyK3Cb/f/8+cXDC/i6oK8Dq4BodGhxYDjQc+BOTH+MnnSG18c219w/mBs/2T4j3Xv3mB/M0AR3x+1+vfLq3fuXKK////2eEawwNDWVbvXr1Lwa5JCWfih93P7y40Sr/Q/+2gCX7xP98zPy/7v5juFV4x/3Q1927QkNDmcEaQYzVq1f/ZWBg4CmrSSq20rHJePH0xduNP05oy9vJMvy8+4vhYumVKedeH8+FOZfx/38GRkZGhv/z5xcI3Lr6YGlarpPX13/sDNuW3Wa4duP8wwsPf71gPPRr6nmGk4tR/AgLSQ8/Wz1nc+kgSQVJwT2fvj9fkD+D3U7XSOzQ2XM7Gf4zbIZGCRMDAwM4qsBOhdmKHMGGmk7y519fF2Z48/wcODAgwQFPBPDAAdmspXWVkSE0lOH9rD1M6emzfiM7DT2F4UpyIHUgZ4HkQYGGAfBpxJv8ATVQuxA3a+VXAAAAAElFTkSuQmCC',
    order: 436,
    base_experience: 62,
  },
  {
    id: 342,
    name: 'crawdaunt',
    weight: 328,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png',
    chain: [
      {
        species_name: 'corphish',
      },
      {
        species_name: 'crawdaunt',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACbklEQVQ4T2NkQAOhq0KZtUW1GRscG/6ApEJDQ5lXr1797z8DAwMjRC2ICWMzMPz/v4q58cA0xgbHA2ANDAwMLAwMDgwMDHA+ihUgQ0AYbAoITJxRo3pa6Gf2u1tvHf48/XJ91x+GuQyzV+0JZWBgdknzZU+ftfkb3MZFLoGaQqFCuRyPOd9cMxQrUeUV5nxy/tHc1PLOqplpsRWSVlyqPP+ZNN/2v04PvbRm76rQUGaws90YGLjz9+Y+FtDlF7x/8+13nn2/OUW3ilqJ/N11++FM2+cCeoIsrzc8P+0dNsOCgYEB5F9Gxv37G1gcHRv+bJiW0MVnL1h6dfP1Vz/kuN9uOn4xJN/IerGUm7TR3/PfGbgusJQb13R3nZmZxmqSPus3I1g3A8P/NgYVUX47Lj82PdEc3nBl3d/PP+39v//lv6/Tv3cq9ejWfRLilAxNmqQJDVeQHgYGmK3zDk1wf3XlYrmoBqsFwzc2zu1zTwavWX963cYyB5Mtf35ICcjLKnbnr574/z/YMghoaGBgsuRexNny8JRBdAjrIQGuv4xX3ggzinD+ubp7a3NEdHSTxfUrL7KaY6cZocRjQ0MDU0NDwz+QYOuS8BOySlzm1678/C3E95/1418BBhEhLoYn918n9GYtWrhqFTRUYbaCUs3qsNV/GRgYeDKrbJcy/Xu/kZNfKODZS+YFyybsP8TAwPDm////jIyMjP/hToVqBieGwJJAMSmRfymsLKznefmZbJpTV1WDvfO/gamBEeIqdI1g/cbGxqxnz579x8CgxcnAcI3x/3+GL4xhoUwMq8GuAQOsGlESJUIdPFmChACoTuwRjKCqWQAAAABJRU5ErkJggg==',
    order: 437,
    base_experience: 164,
  },
  {
    id: 343,
    name: 'baltoy',
    weight: 215,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png',
    chain: [
      {
        species_name: 'baltoy',
      },
      {
        species_name: 'claydol',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABe0lEQVQ4T2NkIBMwkqmPAavG//8ZGM/OMma5t+fsv7DVDH+xGY6hEaSJkZHhP0wxOh8mjqJx1apQ5rCw1X9vLmMQ+SOkkvv6yp0tDiUMp1etYmAOC0O1Ga4xNDSUefXq1SBnyeRM8ZhjpSPg/ujOp08V5z4GMEw7uj+0IZRtdcPqX+g2wgz4H1dnmW9lZTqB4T/nl2/fv/Fcun9o7oLiiykgDf///2dkZGQEe4OxoYGBqaGB4R/Iptn7kxe8fP7K4c2z73+lpURY3315/+fdt7esRtq610+efFw7r2bP2oaGBqaGhoZ/jDDPe2faCOoZ81998fjVrgfff7kqKwhJffz6neHWhdct7taqNczMjPPb07cnNex3YGlwPPAH5kQQDXICMwMDAzuTn2zcvyuPzwq4m/p92PJpOsPjmxwMGgwfGW4wvAW5EqQWOVRhmlGiDS064GrQ4xHCDw1lcni9mlE0K/T/6rDVf0NDGZhXr2L4x4AUv9RNcsSkXwDQfpoPi/mPMQAAAABJRU5ErkJggg==',
    order: 438,
    base_experience: 60,
  },
  {
    id: 344,
    name: 'claydol',
    weight: 1080,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png',
    chain: [
      {
        species_name: 'baltoy',
      },
      {
        species_name: 'claydol',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACJklEQVQ4T2NkIBMwYuhrYGBqqG9gOObewPn5M8O/48cafjIwNPxnYGT4j6wWXSOID1bg1+La+/HLr78HOw6WQTXA5UB8ZI1gCZ9qS2kWVXkNHi6OuTdefGD8+vJbrDjr+1sHGk6/gKoHGwzX6NDgwHKg4cAfx0wTdX59+TX8EoI6N+88Z2D/8+/t749/uo617+4KXRXKvDps9V+ExgYGJoYGhn8MDAwsDAwM7PZF2mYSotL7OD//+Lyg7ZApAwPDbQYGBlYGBoafDCDfMjL8Z2xoaGBqaGj4p52oouXpYrBQTk7E5Nb557tYeVl1+fi4fvz98/MAjwBXxKePP25v3H4p8ur8q9dAehgb9jewNDg2/EnrDizVNpXq+vjsW+zv/z9tdR1U0368/cxw8cS9WjFxke9svBw9l089XTSvYn18Q4MDC9yPsSVu3It7nvAyMFx7MeVw+j4mXk5HPlZmhhOH7jZMydzQ6JXgaiCvzvtpeuW6e6CwgWlk/P8fzPvfuC7KX11XZsPpk48+GhpK8z+8/46h2me+KgMDwx1QoPz/z8AIUge3ceaZNNZ0k1m/i+eHTjAwV83fteRMlbqpjAsjO7vTtj1nIo72nV4Z2hDKtrph9S+U6AC5u6HhwJ/oBq8MQSHeyS8fvtEXFOX1kVAR7bx6+WH+2sZdk2Bq0BMAcoriZGBg+O4WK87NwaMi8/vBywfbt9/5iTUBoKdZWDQhiaMkOQB/R9nWLQ/c/QAAAABJRU5ErkJggg==',
    order: 439,
    base_experience: 175,
  },
  {
    id: 345,
    name: 'lileep',
    weight: 238,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png',
    chain: [
      {
        species_name: 'lileep',
      },
      {
        species_name: 'cradily',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABn0lEQVQ4T2NkIBMwkqmPAa6xoaGBqb6+noGRkfEfAwMDY0PDf8arWqsZta9d+9/Q0AASQwFgjf///2dkZGT8D2WzMjIy/kZWBTMUZCAjI+NfkBwjTNO2bbf53n1/yxcTbPEkd+kFM1ZuAZYXrx//5Pj2kW9evs9+rDYyMOTyvX7deoaHh0Po4cM3BRoaUkscJu5tEfz++e/6ioBOBgaGb1u3XpPX0hKTUFQUOQVyJMhGJpC/zp27P9HQUCEPZPKZCw+rd738F//k598F0+yldj3/9rtISIgr+M2bz3+amtYozJqV/oYR5H6o5xl37Li0VF5OIvLFH1aGd4ycDF9//2GINeQGu/L3bwaGAwcuT3Vz08tZteo/MzhwkDQzzOtZpXX8H2fub3HlDJ53D/8EG8kc5WTn43zz/uOjlcsWJSxe3PMVpB4eHaBAgobavxIGBm7W9HS9U6/+Ke1dP/sSAwPDZVjgwAITIwHs37+fxdHR8Q96KII0NDY2grwGjlOsKec/AwNj2KpVTK+vXWM8UF//F6IKEuUwAylPcqSmWQAZBbTnIN3wpAAAAABJRU5ErkJggg==',
    order: 440,
    base_experience: 71,
  },
  {
    id: 346,
    name: 'cradily',
    weight: 604,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png',
    chain: [
      {
        species_name: 'lileep',
      },
      {
        species_name: 'cradily',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACHElEQVQ4T2NkwA8YGRoaQPgfAwMDIwMDw3+YchAHO2hoYIJqYDBOm8l6dlb6b2SFWDWGrvrPvDqM8S9IoZptstm/w3Nv3GFg+GQZWsh5fHX/d5A4psaG/0wMDYz/FNUibPmigrN4JeXf/3j9Yuf3l4/F/jx8uOLmpq7PIH0oGkP//2dezcj4N3/fa78PX7+te/j8Zb8IN9fZB3eusZ45u2MDw6Z5nxn+/2dkYGT8D9f4//9/RkZGRrDn560/sY1P39xzzf6TOSuSLaYi+Q0eQDCNcIEXT14UXLj/qXrVtecisWr8h9k4eW4cP3F7dkmB52lkw8Ea////z8zIyPh3y5YLSd7e+nMXXP7JcPzS7X9TQ9SZWNhZGfbtu/Xxxo3rutnZAY8bGv4zNTQw/gNr3L9/P4ujo+Of3TvPdzs4G5T8+vP755t3n9mkxfj/vH3349+7t//ZL1+7GhoWbLEGphYUuZD48pku3RNhtD8jwEz1//9fDD9+/mFgZGRmePb0K8Obl68XO7lqxIH9iggcUAAx/mdI6uR1lZQMyDHTteTi5opde+Emu7Oy1MvTdx/JdJ2/spVPVmVp/Nc36yZPzvuJHB0oyWnmzE1yG2/cEdvWX3STQSrEUiTcXkT4P8vDm3dfnGfY3PgNPR4ZGxr2M2tpOfwPg6YaHIkRbAnWJAcKuatXVzOuWhX6j9GxkZlBVOs/g/a1/7C0CzIQAFhz8RLpwieUAAAAAElFTkSuQmCC',
    order: 441,
    base_experience: 173,
  },
  {
    id: 347,
    name: 'anorith',
    weight: 125,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png',
    chain: [
      {
        species_name: 'anorith',
      },
      {
        species_name: 'armaldo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACAklEQVQ4T2NkwAIaGhqYGhoa/mGTg4kx4pNcFRrKHLZ69V9sarBqXLV4sfp7Tc176SYmvxsYGJgaGBgwbIdr/P//PyMjI+P/////Mx84eXnzrCPH44pmb/C7Kcb+MObwhr1nZs5kNUlP/43h1P///zMxMjL+q8xtE82sSr304+r1/w+TO6+5PtjqysDI8B/JuSDL/sNtXLVqFXNYWNjfIAYbpbbrCy8xvvjIvffwubVZdSkhIE2t3a06D7/8ujersfEbAwMDI7JTmRkZGf9uPL7PWlJY68jfPxy/5EXZ2e4+vF4rIybC9fTF+8qtBy9YtZfGHwdZAtYI899lBgYHlk07lwixckr///j1H5+3DdO7F2/+M4gqMN578OShnYGsNgMDw1ew+tDQUObVq1f/bU5J0eR7/fWaJDPPA7e4ECl+V1vm+x///P/fM53luqjQ0zVW1o4L7LVuN/z/z9TAyPiPERbZsRl5Ootv79CZGNvP6e3lOY+Jg5Hh7euf/y+sW/J9TmnKiZMMDM7I8QnzIzikQBI79p/O/svKU3b9xsMaWyuDhU9eP20MtjeeuWrVsY9hYVbfMaIDZvOSefO0vn96/ja1oPrlrl273H5+/fnBN9D3FCwcsCY5ZMmrV6+yaWtr/wIpbGhoYGloaPiDzalwMZDNUMX/QKkIHNmMjBhJDgCx1+4P1YYDHgAAAABJRU5ErkJggg==',
    order: 442,
    base_experience: 71,
  },
  {
    id: 348,
    name: 'armaldo',
    weight: 682,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png',
    chain: [
      {
        species_name: 'anorith',
      },
      {
        species_name: 'armaldo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACaUlEQVQ4T4VSW0hUURRd597j4PicsjSxd1IGPrBJiiy8+QAjQke4JP1USBP1E0IPKIRj9TFBRZZQWX300UddScgg8zUjhn2MouaML2ZSoyIRtQRT596ZE3eakQqh83P2PnuvtRdnL4LQYQxCXp4kVFdLcEgIgLFAuLbSTfRHxpjA/tPIGRPIHz0kDBrvRnLf6K7iZ/XZSzNaTFvbq5pJADoxD0/kACGhPDgRprtZjbciW2MiP6y5aNNAkqam6PRsTldv+4RerjKbM9Ljo3KPtnc+YIDAgEAQaC1iV4v3bK+KWuvxDX+eMNQ4hp6PObvKGZMoYw4NEqMPjX3eVP+sraC5475dkmgQeG8rdsccQm3OkU0pLlfi+vLzCWVAUwPABCu+inWoU0sK5YZibapAcDgSTgPqb6ngBCB8Q6blympDwvX+btfexqdR3DM2M1rJ+r7rHbF5lpe3jT5L9GSPdKz3Wwfh4ISAcLudU+VOzcD4ojPtwskBb487e9vAOAZzd058sV6OLc3cRyv387lSy/u2wiLgB2HMThk7qN2osF9SDartSf81/7l8k9jqWuc3GRdEozEaj1pGzlRk5W8Z8v1829Vsa7earREhqTCcPV77yYe5pHm1U60fNEWkx/lBoQYEgQhGqmJ+kXs3v3udoQAL+pqCQM5l8XDJ9AtRpGUFOQbUv9E+bkzWElfFU8OIJ+BK30FSmnoWTw07OxplWRYVRfHrwOUlp6YWZns8S3FmdDoPnEhLpJTG3XzscgMQAfjCn6gPC0v9yyErefNfW4aBQRJZlgU9UBQlwBiI2y0TPQ4RLVtPz38BaDL5VyX7a9AAAAAASUVORK5CYII=',
    order: 443,
    base_experience: 173,
  },
  {
    id: 349,
    name: 'feebas',
    weight: 74,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png',
    chain: [
      {
        species_name: 'feebas',
      },
      {
        species_name: 'milotic',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABdUlEQVQ4T2NkIBMwYtP3/38DE8MBBiYGB63/jIxh/xgYGP6jq8PQuGpVKHNY2Oq/yAobGhqYGhoaQAbAAVYbXz/qlPr9+afTm7efH+vZdR8Eqf7f0MDEiKQZrhFm05Et2QXiYrz9XJzsDL///GG4e/vx0avnXwfmtW9/jWwzuo3Ma+ZEx5w5c17Rwkwzn0+Qm+/bj69M7979WB2XvTUM2RvIGkFscCDsX5flwc7NMO/uteeSxwtvMSjWiXyUEOTQjC3c+byhgYGpoYHhH1aNMzu9Z3LxMqY9uf3u7+cNP5iFYgW+cvL/0cwuPvQYm0aQZcxLpgXGaKjKWbx58zLp85cvjKzsrKyvX37bmVq60wOrH2HuX78oukBGkq//29cvDJ8+fWH49PnHucMnnnrOWHzpFb7AAcdTT0uQvJQ4i+2Htx/fZ1Xs3MXAwPAbPS6JSgChoaHMq1ejJgrsSa6hgemAPQPTwYMHGBoaDoBSEeEkR2yaBwDmb7MPlf3dYAAAAABJRU5ErkJggg==',
    order: 444,
    base_experience: 40,
  },
  {
    id: 350,
    name: 'milotic',
    weight: 1620,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png',
    chain: [
      {
        species_name: 'feebas',
      },
      {
        species_name: 'milotic',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACAElEQVQ4T2NkwAP+/29gYmRs+IdNCSO64KpVocxhYav/oomD1P1HFkPWCJf8/5+BiZGR4d+2JQ4hP/6xHQqK2/Vqf4MDi2PDgT8wzSg2ruqz5BSSEtFxidh8+uJON24mJsZHTx++9fRIOXMKpOH/fwZGRkaIzWCN/xkYGBmhTjm1ze/Ivx+fDt+88fOBsQ7bjKXzD6onVcf/vXbhrqp/ypEdMM1wG7ctMefzijn5iYGBQehAj9xzMaY/bO/vPvvzTlnvtLgiv9irVz/zfdJPbYWFASMs5DYv9Ann+v+5+N2Txx+kuNhsRZiecHxiEv/H+ekDU3nNW6etDAz7t03yZPfK2/4T7lSohxlnVCk5fX//P95YgTWWk/PvnzfMPH8F3rxh/6+tuYufn6FC23XP+f8NDUyMDQ3/IH6Eevr//waWxc2be1mfPMiR5f3FxPyfjeHlX94bkq4aZ79/+av48uu/mvDkvfvBmkEaGxoYmBoaGP7NqzCMZOJklGDm+fNI6s+fuXcuftyh4qho+YGLzS44et/DpdNsBKOzjrxHcSpyUJ/bHhD549v3PqvgnZL7llmH/WZg/eUedWADrgTAsCo0lDls9eq/Uyo1hNn/sHnzP7i0NGw1AzgVQUMTlPwQ8Ygvef1fFcrMELr6HyzisaYcmCAoQawODWUC2Y4rDwAAVrzfELFjNZMAAAAASUVORK5CYII=',
    order: 445,
    base_experience: 189,
  },
  {
    id: 351,
    name: 'castform',
    weight: 8,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png',
    chain: [
      {
        species_name: 'castform',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABMklEQVQ4T2NkIBMwkqmPgWoaQQb9Z/j/n5GBkfE/w6pVzAxhYX+xuQrJxv+MDAyM/xka/jMxNDD+WxXKwBy2mgGsqaFhP0tDg+MfZAMgGhsamBgaGv4ZN63S/c3AxnXp6oXfDApGPzX0VBNuRG9qYmAo/wzRBDWcgQHqR6hG04ppSu85hNOqtAQjWJj+vVvziVvD8evNqEus8tbzb96ZwNCf+RTmDZhTwX4LZWBg29+06lCkMIe5+Ptb/z9++sgoKCjI8JpXiaH/7H1jhvmF5xhCVzEzrA77ixKqKrmT2H8/vSL0cN0sFgYGhs/2qQ15T/7+tb374fNKhnUT5sADDe5U/JEJCWk0gBmPIP8yMDCEXr3KuHr1anCohoauYl69GjVaCCUAmDwRNhKZBgnZiNMYABDgbQ8F0b72AAAAAElFTkSuQmCC',
    order: 446,
    base_experience: 147,
  },
  {
    id: 352,
    name: 'kecleon',
    weight: 220,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png',
    chain: [
      {
        species_name: 'kecleon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACO0lEQVQ4T2NkIBMwIuv7/5+BsbGRgbGhgeEfAwMDWC501X+m1WGM//7/bwDJMTQ0NIDkIJIg8P9/AxMjI0Tw//9QZkbG1X+xOaahgYEJZDBYY0NDAxPIpP3zQyV+Mf0x+f/3m8XHT39uhBfsXZI+f4/rzOXPjh1OW6Hz9TvLW4/YTXdA6hn/g4iGhn8n1wWq/fz7ycgudO+KghjvNHnmrZ/vhd/+wvyNbdODIzsCo6TSHd7+8ue/+UawcMKEBR/ANh7Z6MfLzvAj1NRfZVtTp361uKio05V73B9Pv/qsLS/JcnBlY4Afg9BbvnUFwl7MjAzn/WsZboI1rluUIcbya4bfzV87Qjh+fXUX43vA8OidIsPXP0IMs5efvff04s/y/tMJCbw/HpkcefrXd0GE9WnGVatCmcPCVv9tyHSO+WZYvXjfjZ8/zpx6zZDuJ8VsoSX2f9OiE2wKom8YmIS4GX6aOFx4/58xbmmA3mVGhtBVzAyrw/6yWLbVhYfZNepp8DMwsrIzvP3wm0H8+UGGn/dO/tr+0ovt0KGLsxietKVDomgVMyPD//+MDIyM/5MmL5f6/J7NIUmsnunnN4aAp78Ddb/yKL2UPJeYFHtrmkuiwZ+18yfnvXZo2M9yoMHxDyQeoZpR4s1yFSeDgj43w3L1N3Dx0FBmhtWQ+EWknP//GR0aDzDXMxxkYLBnYHB0bPgDjWOWhgP2DAwHHP4yMDD+hxmCkuRQU8p/RoaGRkYGaBJDT0V4NOJP/QDv4e09J+J/4QAAAABJRU5ErkJggg==',
    order: 450,
    base_experience: 154,
  },
  {
    id: 353,
    name: 'shuppet',
    weight: 23,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png',
    chain: [
      {
        species_name: 'shuppet',
      },
      {
        species_name: 'banette',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABt0lEQVQ4T2NkIBMwYtP3n4GBEUniPzY1KBr//2dgXB0WyhS2evVfmOL/q0KZGVYzMDAiiYHkkDWC2GDTPXMnsW+flPtrUZw7V9ziXV9BYlBXwG0Ha4QJ/mdgYFsfE2gv8uud7c9vHz8/E9M8EvT70+f3v35wyq3cexpZM2NDAwNTQwPDv7bAQOFwBY5DP58/lPvL+J/zDwf/zwdnd3Tre8bXf/71+5F+/zJ5qPPBLmME+YuREexEjgPrpl+V/vdb6cfJi/8ZVAwYX94/z6CWEsdw7cadVg+flJr///8zMzIygv0PdmpDQwNTQ0PDv4W7F8qxXLiYKysrm8f24Dbj82s3mN6r6fxlO7LXJmbH1dOrQkOZYQEHD5z9DQ0sjg0NfzYxMITxb5mzUuT/d4bLS9YzvL51hYHj/auA1AcMGxsYGFgaGBj+IIcq2N2r0kL5eZ/eiz4ho8ylLCpiIvnwrtie67fvPfz8e8aKm4/PhDIwMK9mYEA4FSmC4VECEitgYBCYwMDwATlQYGoxUs7/hgamAwwMTK+1tP6HhYX9/d/AwMTYwPAPPfVgTXLwVANJeoSTHCnpHQAO364PitFWOQAAAABJRU5ErkJggg==',
    order: 451,
    base_experience: 59,
  },
  {
    id: 354,
    name: 'banette',
    weight: 125,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
    chain: [
      {
        species_name: 'shuppet',
      },
      {
        species_name: 'banette',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACNElEQVQ4T2NkwAL+NzQwMdQ3/GdkZPiPTR4kxogusWpVKHNY2Oq/IPGGhgamhoaGf9g0o2jc3+DA4thw4M+Njcul+raqvp41y+Q3SLPW1auMoq9fMzoeOPAHZghc45k0Y1aTWWd/H25iMNeyqp364Mm5y8YJW7MYGBi+wxT/Z2BgZGSAOB+sEVlgTYuZiYE6y+m/T/4w7JsnnpF5efPMq76+/k+/fFF227+/D24jKCAYGxr+vQoMDGVhYuq6f+32wx9al/S/K8QKvP7K+z1vxjT9C7Gx6wW+f9fuWLMmtpmBYckqBgZmuFNP+/vP+87G4v/760+hH04hDJd/fv+tsnorK+e/GzceiypICfJy851++zq25/CxJQ0ODiyM////Z2RkZPzPsGgRd9efH5OYP73hvPPDSP/7/+9aTh9O/hPu7GC6Fx81672ZueL1V++iljc2vgEFGMxGEP3/P8QJf9f4+U2T0lbP/Hflws97nALMv7/cu8t54cLeu88EptQyvL3ewMAA18gA8+t2a5t1P58+0fyXGKcu8PET45uvnxmYXr75923DxoDlKiontt+58xoUqCjxCHKC4qJ5Vv+09U14P3+uuSMp0iX19oOgIw9fxY4Xz9pSj52onmlszJp+9uxvjJQDDu6ZM1mzHzzgm9re/hbE3ZKW5n3m1avXDRs2nMJIADCBVaGhzGGrIUkOxA5dteofOPDQAHYbGRgYGxoaQBicTvc7NLBME736fzXUQJAYAGln+cW3Tjj/AAAAAElFTkSuQmCC',
    order: 452,
    base_experience: 159,
  },
  {
    id: 355,
    name: 'duskull',
    weight: 150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png',
    chain: [
      {
        species_name: 'duskull',
      },
      {
        species_name: 'dusclops',
      },
      {
        species_name: 'dusknoir',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABMElEQVQ4T2NkIBMwkqmPAafGhoYGpnoGBgbGhoZ/2AzHqnHVqlDmsLDVf0EaGhocWBoaDvxB14yhEaapuCdbXoTll1hlwezTyAbBDEDR+P//f0ZGRsb/W2wyBfmqWXY+f/RC68qVV57Nkw8eBjm9AcnZKBpXNYSyhTWs/jU3PyDYWkdxzdP/Xxm2HbiyoXfZscD9DQ4sjkhOhmv8/5+BkZGR4f/t27nsu3Y9b/l1nbHkKy8DAwMn85SauhW5ICfC1IDYcI0wfyxcGBr+n/GvheRbQcdPn3/of1dmWismKPbHw6s3AjmAsIUqEwMDw7+cGBeHP6ysOjPmb5/S1uwZ8OCx7NZZs2b9xho4MMH9+x1YHB0hUQALMILRAVMACkWtq1cZw1av/kswOkhJfmSnVQBjToAPsV/gigAAAABJRU5ErkJggg==',
    order: 454,
    base_experience: 59,
  },
  {
    id: 356,
    name: 'dusclops',
    weight: 306,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
    chain: [
      {
        species_name: 'duskull',
      },
      {
        species_name: 'dusclops',
      },
      {
        species_name: 'dusknoir',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACMklEQVQ4T3WSTWgTQRTH3+xummLrR9pkCQa1H7Gt1IsWtZeWzUm0ICJOwIInIbFEPHjwpow9eM6p1NhTlKpZvTQKOWiytSKKIiSNtbEISkkwbbIbrPYj2Q+ZaJc20TkN7//+b96890Pwn0MIYahECNH/lYJqgghjzNhsNiYUClWo5vP5LIqi6KIoaltztxrp3dgULw17BxHXyE+Ew49pzDAMhBAy9U2jaXKDpd/RpA0cPX/xSklWdmaiUzftJwZext7OpOpeNAyDQQjpb+Iz44ty3r9eXofMbAp22R2QKxShQbPCgY7uQODy8FgkEmG9Xq+GIhizXlHU7o5c7Rs62P+ecbugyWAqkwtf2FPdbvQ9myuvyj+tu5cKuSPB6+0AUAYAZBonAv5Bl7oRa3O4G1uVPZDsWELHK4dBzsxp3w6tsKVY/uHZ+P0Lf9tF1T8SQjhCiGr3eYbOFbinG8lFve3MXqS//mUYzS1M0r6SjT561QcAeQCga9L/DAdjFkRR64WG0dPXRm7YHLw6n15gXV1daP7TbIWRC5aSkg+8eJcaEwSBkyRJNdeRSCQ4j8fTErx9a9S5r9Ov6loZ1n4wma9F7tnUeJp39jyJxSVCwaBQmEaMMUuXHLwT2T8dDX9u7+yx8rwTPqY/zN17MNmLMW4GUVwTAaogbCNHEAgnSURttcCxYgWsrh1wMrsKzwFguha7WuTooKqt1CTSgVBq6sjZlocxsMvLQrWoJEm0SB3ovwFKn+URVv8wGAAAAABJRU5ErkJggg==',
    order: 455,
    base_experience: 159,
  },
  {
    id: 357,
    name: 'tropius',
    weight: 1000,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png',
    chain: [
      {
        species_name: 'tropius',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABuklEQVQ4T2NkwAL+MzAwMjIw/AdJQdlQJkIxI7q+/w0NTIwNDf/+///PuDosjCls9eq/2AzH0AhSpMDAwPGAgeEHVAPb5rR6Ft9Zjd+QDYBrBNnAyMj4f1lohZO4nGCLhKTUVHFRqQN3H16ffmPvrfnxByetXxW6ijlsdRjYBWCN/xn+MzIyMP7PZLARDC3z38MnzKN27uaVH68/f/nlqGd098/n31evHLw7Pevk9EsNDQ1MDQ0N/8AaV4WGMoP8Mt8+11bTWa3iHxOT/ZqzZ7n5OH8xaAlr/FUUFdqwq25PbjXDuucNDA1MDQxQjWBboYGyNbZhIqsuW96Vjxp/jLg/sNy99+QGx7fvcyU5uDY7zau9iWIjzNMgf/YypsiJ1LOnahq6VzN9vs5wcOWtfSVb5jkjRQ04mtBDFcQHS5RHhTQLC3zTKZu2LRDEh9kEswRFI0wywKlL2cxYfef3rwyKly/fLthwuGQyLNSxa3RoYGk40PCnLGVhCB+/cNrv7/9Fnr18dG722uyUhob/TA0NjP+waoQI/mdkYGAEOxcfwJpywFG06j9zaCjDP1CiIDrJISmEGYyhGQCourkPNNQ21QAAAABJRU5ErkJggg==',
    order: 457,
    base_experience: 161,
  },
  {
    id: 358,
    name: 'chimecho',
    weight: 10,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png',
    chain: [
      {
        species_name: 'chingling',
      },
      {
        species_name: 'chimecho',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACRklEQVQ4T2VSX0iTURQ/926W+yxN3dAUxgKxaBH10J83WYt6yxVtSlAxKrCV+WDQi7HTm2X1SYUUQUjRn+2D2oMRITVDQtqkYBBbMN3ymzZhrlK3gW7fjW/bNyfdl3PvPfzO7/c75xAoO4wxQghh8hcDRgSrQG2CLVd4AyH5UDhEuXgR1SbErLebP0lXpV1tD3uxmKNeB3KmIVwuJ1GAclSqVQYu8z5thNq3Wgyx79OxD/6geNvu6R92W90qRYGsKy8Bd+IGy7H6S7oZWBw3Tu1P1uZa98Ua6nIZ8Bzk+5yKfAIFKwQRKSJK7itOfVO8qjttTpmjhzfuja+k4c/IT2hPGGc5plmIxZYuHH/R51NY81IRgSKCJDg6jnA9Dc85bZO2Nh7OPvj4F06Fd6jHubnffldoz8j05xmFSAYW/TH67ty1++H2pKNRBzl9Iqo6MDofCmi6Bn+x5MDRW9e3AcACAFAAkEpdVSodumMbaNFVXd20nIGWqc2+SHM0rRINYj//+AwwpEBQWjeONWaA00/tbds5tda8khDEudBb25egBQSQ51nqfolRmSsyJEhQujHaM1Sjq7j46In/RPDepzf5PAMCpDC2dUBkSGWQ4+X5Dk1z9ausWpUlSxkITs4OLybSNyf492FApIBY5tGLajRhtuvZWVu1XusyVyZhVcPBJNRBOCDCj6/RTv/dMZfVbVUJNiG3xohAAUHq5C2Gb2Jqt7NRrJC4GuPYltb6xHwq4ul9Pago+k8qMEaguOTle1nwtz73D7wbAx6KnHrzAAAAAElFTkSuQmCC',
    order: 459,
    base_experience: 159,
  },
  {
    id: 359,
    name: 'absol',
    weight: 470,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png',
    chain: [
      {
        species_name: 'absol',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABf0lEQVQ4T2NkIBMw4tPX0NDA1NAAUtHwn4GBAYThAKvG/wwMjIxoChkYGEBq4ZoxNK4KDWUOW736b2hWAw/v+1cG377+uMcmK/5z0dT2t8iaUTQ2MDAwNTAw/GNgYGBiYGD4l56Ts+7Z01dfN69flcDAwPAXq0aYpgYGBgGDls7lT8T45Y6euSglKsjzIlZc/uq+opyCcgaGJzB1YBthflrCwMAnXlJ18r+hrsbJk+cYLl+6weCSGcngyi/KsNfDVTeFgeHKKgYG5jAGhr8Yflw8b17a7buX25i37xV+Iy1y2ya1gEP16/fbZyPD41PRbQTZOnPmTNb09PTfNQsb87+++2q17OKN9XEG2uk/7n6JnTx58pP9DQ0sjg0Nf2DxAbfRwcGB5cCBA39Ck8KLfn38cZXn24vjQrZmxyb/mqzH0AAOMBSALR5ZGRiMGSzdRXhv7Hwm/Z7h8uXQ0FDm1atXg0IVfwLAYjhKqgHJY7MRJvYfkuQaMJyJSyNRyR4A+vOQD8BE8hQAAAAASUVORK5CYII=',
    order: 460,
    base_experience: 163,
  },
  {
    id: 360,
    name: 'wynaut',
    weight: 140,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png',
    chain: [
      {
        species_name: 'wynaut',
      },
      {
        species_name: 'wobbuffet',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACe0lEQVQ4T2NkQAMNDQ1MWle1GK+9vsbYcKDhD1SakYGB4T+yUpAAOh+uIJShgc2kjJO9vKv8M7oFYI2hoauYV68O+1vbvsBYkZ+n6tvVQ08fP//NouTtbz313PXES1MLzzU0NLA0NMBdwACzkRFkDSMDw/+Ohllr+G7dDf7MxcXwTph7T/j+7XVFp/aePsDA8Cc0NJR59erV/0DOBmtsYGBgamBg+LebgUHuf23rlKu8LJ4c76/8Uzb3YpR48u3pjpxkyzIGhhdIzmUEa1wVGsoctnr139UMKv6yi4s2POFQ+X//1o//MqLnmBSFjf4wByd4mbqovwnk0s/8x8h0b+PGaR1QGxuYGhga/vUbFTiJRonMldLQUPj6mfHvrdt3mLmZP/7VZX1mYl224EJMTPWrbz8+z1m3ZlIV46pVq5jDwsL+Tp18MPzTt08rLh3f9Ck74gff//+3GFafKfnz+flxFmv1vtlX/xyZyPj1/rYjR3a7njq16BbIRnAcFRdPv/Hjx5+7Qj/XShpaxRkKiCv/vHT+DPPZB9wsRuK7/33578R05NKnRTu3VMY3NPxnAju1sLCP89yF3ZWMTBJ3rSxcJ4tzfeUVk1RgePvoMMO5Z4J/5QVZ/r54cmTi9KUry2AJAqwxLS2NddasWb+zs0uTRMVt575+cuuCvsiM7aeehCp9/sMS/vMn09cNaxt5IaknlJmBYfVflJQza9ZCta9fmb1u3nt8cMbkyvOeueZ8dlLZa799+3ivuTk3i4GB4S8sSuAa////z8jICE4HYDBzZhpr2vOZfxkbGEERjgFQbAQlcElJSebnz5//bWhogGqAJBIGBoShIB4AGEEMIQ58mqoAAAAASUVORK5CYII=',
    order: 283,
    base_experience: 52,
  },
  {
    id: 361,
    name: 'snorunt',
    weight: 168,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png',
    chain: [
      {
        species_name: 'snorunt',
      },
      {
        species_name: 'glalie',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABhUlEQVQ4T2NkIBMw4tLX0PCfqaGB4T8DA+N/bGqwaQSJYVWMbAC6RrCmhqmreJj+Mqn+e/fjbkNDzOeGhgbGhoaGfzg1NjQ0MIEUTJp3TvTO2ycHv358t3huS0I7WMP//4wMjAhno9gI08jA4MLf3mV37MuXbzWtTe0bsot75ab2ljxE1gzX+P8/AyMjI8Rv+7bXbBcR5PF4+fTxyT13bRg//fm7fHpVzIS0mTNZZ6Wn/wapgWtctSqUOSxs9d/Zk2MVDQ1Vbn7+qcfE9ucU892vVgwHbrInzqt0W9DQsJ+locHxD4rG0NBQ5tWrV/8tjApS0hXhu8uuJMbAwPro23exHK73vwRzS6O1p8yceYY1Pd0E1cbQVauYV4eF/c1qWen7/fa5TIk/xz/9081y+M/M+fj31zeZ/Q3JZ2BqUGyEBXVoaKHQ6tX970D8plkHTN++vv1oYnXqy////zMy4gpVqJ/BAbS/YT+LI9Q/6Jqw2ogUYP9BTtO+du0/euTj0khUsgcA+N6vD/9RcAMAAAAASUVORK5CYII=',
    order: 462,
    base_experience: 60,
  },
  {
    id: 362,
    name: 'glalie',
    weight: 2565,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png',
    chain: [
      {
        species_name: 'snorunt',
      },
      {
        species_name: 'glalie',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACvElEQVQ4T3VSa0iTYRQ+7/fNTZ3IbHjJFLUmpE6pEAuTKBKSLEPzs4tDrRTsYqWQoVG8XRX1h1kaEWI6C9t0ZtOVKbE0WlqImVNT89pqupi2OS9r2xebaBD4/Dl/nuc85znnIAAAGgAhW1kTaJn2D2hF9Go3xdMzlkImDSx5lkKspUUU2fjAxLczoemodslPjDGBlYEIxAlmq9zayYb6yLiLL1sl1bE4xYm7LSQpLCbrRlV0NN9oIKJS5dKiVS+aRoAQjTAAgQEsstijafvra8pnRqS5s2rVHr/w9L3SeEGSrrb6XWKRZBPMzkxsNxvIjrzzfTZHDJjAgC0N4O3pnpd4JTA6/MwXyZsfPbj9lmtKaGv844dDBTcrG/SOTlsl9uxx5Wh/NhRlKmyj0koREwUlGNUdlRkcZ1aJ8I6YHhPW+dwGmAQA4m4aVmzkrAv75uEFLQRZ25R5iFrN+Kk6O3nCYJ/FYjFD7DXTUFepKi+LD84CjHWQfr3Mc2HxVIGjI7PH009UcFUgsAlHPwgv+Pq7FbeJmmm5eFh1MCWY29mkc0h35r4ufITjKjLy79ODnbn9vqEu8NU4CHJssgrZ85OtUzTDNPh+fXEf69rmEf6x0LPjZQqXwkUv9NT4SxDhE7Bz6M+ibCrvXKPtLBhbkKwkJzDycITS+F1rUEU2q821u94GhPqeHH+uMNMyDVlqNgwX8ba82LE0L+i9l8OfA9BYl2p1ZGiHRf3sPi1vYuz3gu+JSGDMaxy6Ojv0LjXTU72kHU/I5MC+kQFIZZNhIH3ykaIo0paxu6U0zsuDU8f19gBgkAAaNbQpuquSj+dfjjsicNfriKiQgV5VxmhX9cqnIZrGBELYUltxyZ/n5npgYU63QaPVfY45XfIMAIxrfe/yHWmaQAhZ/ieJKIoUA0CQJggByAHL5aYVzl9ufi0maoo3ogAAAABJRU5ErkJggg==',
    order: 463,
    base_experience: 168,
  },
  {
    id: 363,
    name: 'spheal',
    weight: 395,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png',
    chain: [
      {
        species_name: 'spheal',
      },
      {
        species_name: 'sealeo',
      },
      {
        species_name: 'walrein',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABDUlEQVQ4T2NkIBMwkqmPAZdGxlWrVjGFhYX9xWUwhsb///8zMjIy/gdp+L9qFTMjDs0oGpE1bVq/NtYvMHgZAwPDX2RxmAvQNTIzMjL+vXz+dL0AL3/Dk4dPMy2dHWf8//+fiZGR8R+ys+EaV61axQzyU3FxsVZORsZVPn5+hm8fPzGsXLJYs6Sx8QZMHsPGhoYGpoaGhn/d06eLmauqHpCUlNJ8/ezpze7iYrv1ly69gsljder+/ftZHB0d/2xeuXyKoZ5+9vYdOyekFhYWotsG0oweqiD+/6Xz5il9/PhRnY2X92RKSso7bFGCNzqgGsCGoWvGmgBA/rG3t2dycHD4C4tTojQSkwzJTqsA+c1zD3Jsm84AAAAASUVORK5CYII=',
    order: 466,
    base_experience: 58,
  },
  {
    id: 364,
    name: 'sealeo',
    weight: 876,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png',
    chain: [
      {
        species_name: 'spheal',
      },
      {
        species_name: 'sealeo',
      },
      {
        species_name: 'walrein',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABtElEQVQ4T2NkwA0YGRgY/uOSBkligFWrQpnDQlf/a2hsYKyvb/jPyIhpALpGrLb8/8/AiK4ZrvH///+MjIyM/4/tSBZqP81Q4ynOoG2l8PPrs3dfSr0iNtz939DAxNjQ8A/mPCSNCFNXbS+8JyzDrfjz22eGX2dvzwnI2pa6f78Di6PjgT8YGvfvb2BxdGz4c3JLoruApeqOz5///D524QXry9M3E1pb9y4E+zts9V8MjTCJ5ZP9TD4LiM3jEOHVvffi9dyGxCUpYMX/GRgZkAIJ7NSGhgamhoaGf1N6A9Ue8AvlX+fm0pf6xWP9Z+2XXqFyvk2/vzIIT3JrXY+sGTlUwSHa0utk9UFMv1DiHV8I89s3DGe0mRm4JfkY3j9857k6dtoOh4YGlgMNDX9QosNhfwPLAceGP36T0oP4+LjW/r9y//Z3MWnVP3x/v3/5/8lhX+ayU6GrQplXh63+i6IxNDSUefXq1X+Lqv2tPv7lSp7bsTzHqzTG6/vlT1f279h0E+YlkPewppz/DQxMjA0M8DhDDgeMUMWW9BoaGJgOMDQwOTAw/AMFHrIarDZCFeBN5ADB6LwPsLYN3gAAAABJRU5ErkJggg==',
    order: 467,
    base_experience: 144,
  },
  {
    id: 365,
    name: 'walrein',
    weight: 1506,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
    chain: [
      {
        species_name: 'spheal',
      },
      {
        species_name: 'sealeo',
      },
      {
        species_name: 'walrein',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNElEQVQ4T2NkIBMwkqmPAafGhoYGpoaGhn+4DMbQ+P//f0ZGRrDw/4aG/0wNDWA2hgEoGhsa9rM0NDj+aWxZHf35y5tvPR2Z60G6HBwaWA4caPiDbDu6jSD+/67eHRu+fvrk/+LRo3Wr55ckvmNg+BQauop59eqwvzDNcI0w2xKyu5Isje3nPr139e+T79+Zn126vU6A+0fxig0zHiD7G64xNDSUefXq1X+Vvd2sTPgtdvAz/+V+/uvDJxF2TYE/P1/VLF7Z1JqWNpN11qz03yBbUZwKkwgKKk2TkFSf+e/rT4Yfvz79/PL9Xeya9d2rkZ2LFjiQKMjOblP7+5sljZWdQ/v9+9dtS5Y0H8bpR5inodHxHzkEscUpjgTwn7Gh4QDz1auv/2trX/uPLSFQP8kRSsMADYWYD6qwytAAAAAASUVORK5CYII=',
    order: 468,
    base_experience: 239,
  },
  {
    id: 366,
    name: 'clamperl',
    weight: 525,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png',
    chain: [
      {
        species_name: 'clamperl',
      },
      {
        species_name: 'huntail',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABy0lEQVQ4T2NkIBMwYtP3//9/xsbGRsaGhoZ/uMzF0DgzbSZr+qz03yANIAMcHRuZDxxo+INuAIrGVatWMYeFhf2trm6R/fn9R0JPX0szSENDQwMTuu3IGkHs/5WVbfYiIrxVjIzMbp8+fDry8PH9nvnzZ25saGhgaWhA2AzX+P//fyZGRsZ/HY29h5U1tWw+fP7w/d/PX5wnT5xk2Lhou/lbhvunHBwcWA4cOAB2NlzjqlWhzGFhq/+2pGXNVTDWSvr78QvD06vXvl/9w8nJz8127v7jO47bt2//DHIVisaGBgeWhoYDf1qKE9rZf92J/vSBQeTJB9bF8zeb1Mcn/Dz2/d3bE6s2LY0KDQ1lXr169V+wjTBOgGeIG5+g0LIfTKz7xUWEQt6+fXetN/hMaMsilqpNl9jOPr6zvx/mXJhTmRgYGP652Hlr7jm0VTI1MSOHl1cg8Mzpa1/b4j9zf//5r981/2DR//8NTIyMkLjFCFWQoLm2vSM7J7uiuJz4P+53ix+wcDLcmbOd4UkDAwNTAwMDhkawQcbGxixnz54FJwBkgKwJ3Ua4ugaGBqaroVcZtbW1/2tdbWAMXcXwj5EREpowgDWtEpPuAbU0xQ9JywadAAAAAElFTkSuQmCC',
    order: 469,
    base_experience: 69,
  },
  {
    id: 367,
    name: 'huntail',
    weight: 270,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png',
    chain: [
      {
        species_name: 'clamperl',
      },
      {
        species_name: 'huntail',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABTklEQVQ4T2NkIBMwkqmPAZ9GxoaGBhD+h81wbBoZ////z8jIyIhVA8wQdI0g/n+QZEJCcCozM/PruXNXbWhocGBpaDjwB9lmZI0wTcxTp7ZMuHP7Ts7TZ6/XrFq1NRSkoaGBgamhgQHuCrjG/fv3szg6Ov7ZtWtVoI2l1rpd27Yw7Dty+ZuYmMDqmq4NbQyfn95iYACHCdhFcI3///9nZmRk/Lt89cTFMv//xrx4/fLr9XdfOB/ce8H04uXbidu2HSgIDQ1lXr169V+sGo8eXjOBnfFX/oXz5xl2HrrK8PDhi5unTp2zYmBgeMfAwMDEwABxLrZQZUlOD/Z88vBl9udPP0zY2BiXHDhwupSBgeE3VqdiiysHBwOBAwcufIDKwf2H1cb/DAyM6WlpLDNnzvrDyMjwv6GhgamhoQEUIOBAwRWP6Baj2EKKRpxJGQBIQIQP8NSPqwAAAABJRU5ErkJggg==',
    order: 470,
    base_experience: 170,
  },

  {
    id: 369,
    name: 'relicanth',
    weight: 234,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png',
    chain: [
      {
        species_name: 'relicanth',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACHklEQVQ4T2NkwAJWrVrFDBIOCwv7i00eJMaISwIkPrO+niu9sfE7AwPDf3R1KBr////PyMjI+P/wzpV5L58/N9y7Z9/66Us2bYKJI2tG1sj4//9/BpDG9cunv3rz+u3f1LwaSahikDoUW+EaJ02axJ6Xl/ezo6M2QlpGevmrVy8YDhw6kbh5w44FkyblsuflTf6JYeOqVaHMYWGr/3qF66tFOCXvcZFRkt394g7D8TPnHu6fvkj3JgPD55kzZ7Kmp6f/gdnMCApBUOhtXDrR8dnbT9v/M7Oyi7Kz/3314zvD/fuPmDUV5R4LCwuHBkSmnwQFZkNDAwj/gzt12ey+J28/fhK+++zZN2Z2NqG/334y/P37748wHzeLvo4Gw72Hz42KK5vPg5zb0NDABNY4tbfO8eev37N4uLkkfzMwcP/4/ffv7+/f/6sqyLHcuHPvARPDvyN8PDyh375+P71n09awnWevPwdrLC5OE+ntnfWpu7Vy0+MXr905uTgZhPl5GViZGRh+/vp7rqK207g8L9GKmYVZ5de3nzt6Zix+BdIID+qk1OhUDjb2WZcu3josKsx338LKOO7u/YcPZ81YpM/AwPARFqr/GRgYwTaC3AzycH19PdeNGxdt7tx5fERdR1ZTiFdw95s3Hz49ffrM7/Dhk5dyc3PZJ0+e/AsUsigJAEvS4oTaAkp2KAA9rTI6ODgwHzhw4B8DAwMI4wQAf0fqke1yRTIAAAAASUVORK5CYII=',
    order: 472,
    base_experience: 170,
  },
  {
    id: 370,
    name: 'luvdisc',
    weight: 87,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
    chain: [
      {
        species_name: 'luvdisc',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACqklEQVQ4T41Sa0iTYRQ+38VdZM198xKiRqSmREkmmSKrLW2SQRA1C39FoUQX+1NhrfQFKU2DyCwxFCHSqGF0Icaky0zYVLYshSJZpS22pm62m7pv3yX2kWE/gs6vczjPwznnOQ8G/w4MAHgAwHQPdbih0sCuhMaaoLqsOswrpeWkhJ4Su/lJ04XBHgGEAAcEXCzdot9WROI8Nto4ao3VMaJI017myFUkZkQiSjCxblBOehonrlnrEUI4QojTdmjrpAppExtlwfvVW2ltsBqEiaU9FSOZHijULBAhX2pI1vKFmdvgcmcaex2Bip6KjoQMxbGgK0CT8aTI+8lbPaQf6hKIJVdLz3PyuCv1VBiIqMTYZ6ALwk9HtgbvqndRqVSX3+UPEiJyFROMDhhrjOXLqwrnFF7a+dZJSfIJZ9hY65PlDNCecwtFyZ3xcaDEJQQGUXbc1mpU+RwQ0Ol0REwxIqaY9mRx7kCK6JVenJS6xsU7WuS+qRRFfBnH8cCEaZMdvTwIAH41UpNmZGaEVU+17RbfrDVG6k7vOV6+MfuWffq75wzjpIqlMja6yOhtzYPXV7xC4GB/JNdCSvP2/W9kcmnOfXqWD/sjGAQjnlAC/iyNkjhxErdFFsM2y1nLjEBcHp1+ZP2+tWVZj+Z9LJ01xYgmVuPcZhePy2kMJtLZWYVckkxKCQi6A7ct+sETGEJqEiEz01q9t9qVjd9hg1HImSWZMfkCRjEiIvEHFnrcZ98xrBUv5OelVbEsIxl/4ETYa6QmNcjMdDUc6hXxRNXn6RlncpI84+fcEmAkF6Iomczy7tuBey9G+v+yHI8QjiHEdd8o0Tg+sPlNncPdbRc1Tz6OLz2fdI/1qzblHbW+Z9tNdru7prMgbp5ax8W+ICiEEODotyf/w/QC5BfxHzJf9lITAwAAAABJRU5ErkJggg==',
    order: 473,
    base_experience: 116,
  },
  {
    id: 371,
    name: 'bagon',
    weight: 421,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png',
    chain: [
      {
        species_name: 'bagon',
      },
      {
        species_name: 'shelgon',
      },
      {
        species_name: 'salamence',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABdElEQVQ4T2NkwAH+/29gOnCAgcnRseEPNiWM2AT////PyMjI+B+XoSBxDI0wTR8uTzb58uyGhIz71C1E2fh/fwMLo2PDnzvbimZ9/fjGWz9ykTRI438GBkZGMAUBKDY2NDQwNTQ0/MsyjZANmt526P0vJoVbp854VBeE7Fy16j9zWBjjX6waV61axRwWFva3qbLfUs7RcdHfH3/kf9y4kpJdlrCoYf9+lgZHR3hAYfgRZvKMbZfn/fv/mz/L2yj4////TIyMjP+Q/YqiETk0d9/6/O7b7z/H/LUFfVb9/88cxohwJk4/MjTMEZrv4v6W88G9aREx9tn///9nZsSncX9DA4tjQ8OfXalt9o5yagce37i2Q2lpnSe2eEVx6n6HBhbHAw1/jlvHRGuwCyz5wMJwVfHJPguGa9e+/Gf4z8jIgEgUWFMOAwMDi1VgrFDsix+sGuyvXzoeOICR7HBpxJfaMBMAsuoGhgYmEL+BoQElGmBqACs2oA+FlQwZAAAAAElFTkSuQmCC',
    order: 474,
    base_experience: 60,
  },
  {
    id: 372,
    name: 'shelgon',
    weight: 1105,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png',
    chain: [
      {
        species_name: 'bagon',
      },
      {
        species_name: 'shelgon',
      },
      {
        species_name: 'salamence',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACE0lEQVQ4T2NkQAf//zOGhq1mWr067B8DA8N/DHmoACOyRENDA1NDQwNIAwyA5P8zMPxnbGhoZESWg2uEaSquXyZy9PhZU+Z/F68e3bPnEQNDAxMDA8yw/4wMDIxgV4A1wjSllc+Ue/P0Y7WiJNO13u6S7QwMDLdA8gkN8zm+3Lrvu2ZZ03oGBoY/cI0ODg0sBw40/FEyiqlPjrRzSU+O5uLj4WCcPXutV3Z22IvYlM7tX75+XbV+edP80NBVzKtXh/2FORXqFwbFvr55a02N9QzVNdQZTp25vHHN+nm9p698LXxyfXnyx48M7xkYGJgYGBj+gTX+//+fkZGR8f/jx8c4z535fPHEsSuqLCz8v7QNtNiMjOQYWJj/xikpyS8+c+YMq4mJyW+4U5FCkWXrjo0uUhLamx49+sH64tmzT1o6GnzPn92dGxbmmPL//39mRkbGvygaZ848w5qebvJ76dKj8n//frvMzs7H++DBzeeHD1+us7TUr797/2b1vDnNixoaGlgaGhr+oDg1OrnRubo0Zs6pU6daOjoWq2zeNDVZRVlBzcYxoV5VSYZ7wbzWNFgMoGiMT6nrMTVS/5OTFV3BwMAguGvX4UuPHj15kJISGWBszPDJ17fhLywRwBMALIBg/i0p6ebu6SnlZ2BgAPnpJXrSw0hyWlpajGFhWNMpLMrAZqBoRDcV6h+QMHL6BSsDAJtQ6A9w/6ddAAAAAElFTkSuQmCC',
    order: 475,
    base_experience: 147,
  },
  {
    id: 373,
    name: 'salamence',
    weight: 1026,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png',
    chain: [
      {
        species_name: 'bagon',
      },
      {
        species_name: 'shelgon',
      },
      {
        species_name: 'salamence',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPUlEQVQ4T2NkIBMwkqmPAafGhv//mRoaGxkYGhr+YTOcoI0NDf+ZGhoYMTQjawSx/4NMz994dvm7j58YF8c5RoLEGhoamBrQbEaxMXTVKubVYWF/M1cenc0ko5Ly4dHd478uHPJc3VnxEV0zio3///9nYGRk/J/Uv2w3j6yyyy9eIYZ3D26XrEr36k2beYZ1VrrJb5h/4RphfnHYf1NEbs/uG15r5vFfCk9hOSArP+lYqnd+6Kr/zKvDGP9iaty/n6XB0fFP8qxNWS8/fa1UEhGXefry2WMmIeGrrEdXVi5bsOAyAwMDpkaG//8ZGRgZ//s2zdL+8eWz8j851br3L58+EP785psKw8eX0yf0VEA1ggMRNTqgmolJFBjxCAq9AwwMTAcaGv6ADAAlBIbGRga80UGMTRiBQ4omkFoAb+uHD2LNaysAAAAASUVORK5CYII=',
    order: 476,
    base_experience: 270,
  },
  {
    id: 374,
    name: 'beldum',
    weight: 952,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png',
    chain: [
      {
        species_name: 'beldum',
      },
      {
        species_name: 'metang',
      },
      {
        species_name: 'metagross',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPElEQVQ4T2NkIBMwkqmPAafG////MzI0NjIyNjT8w2Y4Vo3/GRgYGRkY/oM0/P/PwMjICGEjAwyN/1eFMjOGrf77bmt5+9NXb27rJs6dt7/BgcWx4cAfnBpXrQplDgtb/ff/mXq5A1vuPvz7491HYXcxBUPHBR8aGhqYGpCcjWLj/oYGFseGhj9X5pRMnnbiR46F4F8GY/kXTdo56+vPzExjNUmf9RtmK1wjzLYXJ0sUn1/6ff2+sAsb84vHjDoMuz+UMDKor89c/wrZVgyNs/sDNa1E+E6evcLFqyj8nUFE7u/DtLXHTQ+vvvMaq0aQE2C2mvqbWnE8fRNhqyzJ0PaCYTHDwWOnGxocWBqQAggzVP//Z2RkZEQJflCcoothjUeQk65evcoYGsrAcO2a9n/k0MQIHFKTHtlpFQAvwo4PDSpDqwAAAABJRU5ErkJggg==',
    order: 478,
    base_experience: 60,
  },
  {
    id: 375,
    name: 'metang',
    weight: 2025,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png',
    chain: [
      {
        species_name: 'beldum',
      },
      {
        species_name: 'metang',
      },
      {
        species_name: 'metagross',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACEUlEQVQ4T2NkIB4wMjAw/IcpB3Hg4P///4yNjY3MWlpa/69du8Zob2/P8Pq1w/9p0xoZDxxo+ANVCDYArrGhoYGpoaHhHy4HqKio8Glqav7ZvHnzN5AakEaYE1hTU/Oms7ExHXN2Dj7y9MVLLVkpkb9yckrPZ87sNfvw4X3aypWLXBkYGF4zMDAwgW1ctWoVc1hY2N+oqLhFOjqGsQqKGt+vXb3CmZySzrBl68a/F88dZT5/4Vzf2bOnih0cHFgOHDjwB6wxNHQV8+rVYX8ZGBjMt2w9euLnz18MIsL8fxWUNBgXLJr7f/6sFmZtHfvYrVtXLUHRCLOxtXuZXkJU4LnLly8y//7147+pmSXD+Us3/ty6cYf1/79fswsKItNWrfrPHBbG+BfFRkc9C/PI4sYTHz68+f//ywsGdYdQxsXb9v51kxRgvnr7yomJE2qsGBkZQVHCCNYIC9GpDX0qX0TlL3PwCXKoiQr9nXr0PKMuP/MvXUkpjodPn2+uLIv1A0UZSDNydLA0NDT8aWqaMlFUTDaPT4CF4cu7Xwzfvn1h+M3A+GP77vUm+3euvQoLD7hGmEkMDAycjc0zW9nYGNN4ecS+X71xcSUHC9uE/v7KO8hxjZFyoH5gqK5eKL1//4bfx46tf4XsHaxJDiQIsnn16tVMoHiFaNjPcvXq6//Q6IInLBQbkZMbyFlQm7AmQwCjlPsS+uUK1gAAAABJRU5ErkJggg==',
    order: 479,
    base_experience: 147,
  },
  {
    id: 376,
    name: 'metagross',
    weight: 5500,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png',
    chain: [
      {
        species_name: 'beldum',
      },
      {
        species_name: 'metang',
      },
      {
        species_name: 'metagross',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABR0lEQVQ4T2NkIBMwkqmPAavGVav+M+95f5bp/Z57/1avDvuLzXAMjaGrVjGvDkMobmj4z9TQwPgPXTOKRpiimkmnXdg5BeRX77p25NJq/5v///9nZGRk/I+sGa4xNHQVM9hZWgsNGwsdzvDwSzD9+/mR4deX55HVmforQM4PC2OEOxuucf/+/SyOjo5/Nq7dOYdHSCH5xYsXnzT1LfmWbrpwobfCzBBqG0g92Ga4xv//97MwMjr+uXVqZr+qqXHBvzfv/167+525Yhk/w9v7J6tPbC5rY2D4z8jAAHEyXGNDQwNTQ0PDv5VzK1PlZSXS+XmZDe89/ssQN0/ghIHw7y17l6a0M/z/z8gA9Sta4EA0g0wsz7XRt7T0kQuIqthMVHSghyA4pK+uZmRAi09cKYdx1apQJtFr2oyODQ1/iLKR2CRIdloFAD//iA86ZNO4AAAAAElFTkSuQmCC',
    order: 480,
    base_experience: 270,
  },
  {
    id: 377,
    name: 'regirock',
    weight: 2300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png',
    chain: [
      {
        species_name: 'regirock',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB70lEQVQ4T2NkIBMwoutr+P+fieEAA9PV1wz/V4cx/sVlLorG/fv/szg6Mv6BKQYZ0sDI+A+bZgwb+8//V3j88lNS38k7RxnqjXeuWvWfOexa43+Ghob/DAz/GRgYGEEEA0Lj//9MB1ev1j7A57hRXFZE8cPNe/+e7l9tNHlyxUVUG/8zgjQzrlq1ijksLOxvbdNi/cRY/wvvn95gYGRi+KqsZ8q9afvZ3bGhJm6JLctl59dEPvbMnSS6fXLea5CFjAwMEBMWdXdzv+M1LvZWvR8tIiKq9uAN799zfxSYd7xj28Ty8KYcu6DQ3a9vn01eXeV1MHTVKmawUxsaGpgaGhrAgfD17qarXAJCWr+e3/1z5aUo47RXtswfHlz7z8r8LWlFmeMCmFoUjamtWw1aA9nOi0pyMDy//43hylMOhsOvxBm23HyWf77LaVLazDOss9JNfoMDp6HhP1NDA+O/mPwJ6t/kTDapML6/qyf0W/blN075xW8kPhvKCUt9vH1m/bqVaxMY7iz9BPMaPFSlfOu5dDi+iu9a3XOfgYGBjYFBWqyA4emXJw2bbD6/fiPxeP/2Fdeurf4CjQlQwIABiAbHz////5kYcUQ6sjrkBMDI0NAAwqBAgrIZGBwa7JlABh5ocAQlP7DhqAmAxMQOAO370rxsI1SDAAAAAElFTkSuQmCC',
    order: 482,
    base_experience: 261,
  },
  {
    id: 378,
    name: 'regice',
    weight: 1750,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png',
    chain: [
      {
        species_name: 'regice',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACRklEQVQ4T3VSa0iTURh+32/bN3Gw6YZdSCRvTTLmEMQSbFmZFRgRfIsIBEOI8Ef0I6kfxRv9iQiCkAgisP5EfkT0I4wNYkJB0sVbE2KbxlzLNTYvu2/fduIb21yRBw6Hc87z8L7P+zwIhcUY4245gKMelBhjKIoiJwhCDhFZEVN+onyRgVsBtvpDIuKIKOddCe+7/+73iQO6WH9rgz7jCUYenDposgNA/H/kfEUAQO9ycDKw8qvb6wtBR7cF5l1hSEUl25neHScBIAvAEGCzbWSMOETK/fjueBXy/DxdidHEZM6oMFS38pBO+IUrdztgetRP406ehL0ZKGgutfr5zfDtJ66z5/rr/Y1r6yHpU7pTWaOJ+mv1qT0DfX2x0mAYQ5lcGo4VUVv3dOHlTl3FkTXfUnpxg+OlSNDtc88Iurrm3cYmo36XRvPi6kBbLK+5TLjm2rMZj2Fb7fZkIp6LRzYwkkxjlV4L6+FVUKm1kIyHph9e6toPAGm5orzzXp2/Y/vYYjJ3SqlEiq9Q81JGkn8YKpWcfWLCFvC5b3SZm+bGaDCJgjCuEEVr9vjlx6aUqmpWoakGNWah3dQCi25XZmFpOdPQ2FLpczvHph4NDRIxjghZiWgZGu3NKNUUXA29RxXfbNDXHDa3tesCvkX4Ojc7r+EVI87n198CEQdEuYKPf3uUn6DuWP2FmyMXs9ns0W8f7MNfXt+bOkSkdBBJeeM388eQMQCrKHIgAsjtl2ezKKn4Vkb8J8pyFMHCEfXIFUoDLKL+AF3/EB0mgOyIAAAAAElFTkSuQmCC',
    order: 483,
    base_experience: 261,
  },
  {
    id: 379,
    name: 'registeel',
    weight: 2050,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png',
    chain: [
      {
        species_name: 'registeel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABd0lEQVQ4T2NkIBMw4tEHkvuPSx5DY0NDAxMDgz1TQ4Pjn1Wr/jNfu3aAEcRGNwBF4////xkZGRmhtvxnZGCAsFHFIUbANcIkM9svCRor/47++uVz8vdvjOfeffi0r6vGdylOGxsa9rOAnDRzwZopt+4+yl5waBODi64Rg56aNcOzd8z1UxsCmkJXrWJeHRb2F8XG0NBQ5tWrV/+t7W7rP3bqTkGYiOjvd6ev/1nJ/5vT3dHiSGdNvS3I/w0NDf9QNUJNy2tpi1fV8loQfvfi33esgv+WCkuxPj6xqHjB1El9oaGrmFevRrNx1apVzGFhYX8rG7sX8Wn4xcp+/8nwgYOT4d2/bwyvz03ym9wzd3NDQwNLQ0MDOISRQhUWig1MpU06NSxSKqnMvz68Y/z0eumZp/Mmbp+8/SdUPTikUePx/39GBnh0MPAyMDB8RgpNlASBkQBA0bJ69WomkLNBmqChDWKjpCI8SQ7sdHD8Y0t2+NIq3uQPABbwpQ+VyS7gAAAAAElFTkSuQmCC',
    order: 484,
    base_experience: 261,
  },
  {
    id: 380,
    name: 'latias',
    weight: 400,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png',
    chain: [
      {
        species_name: 'latias',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACQ0lEQVQ4T42Sb0hTURjG33PvjNZMJ5tpKxqx0tAoEAZBFC1aSBm0cLc1I6JIwwqigUIgvmNFYdGX/qztQ37TuFckAwkSWotFRDgYtU1xoxiVtIk6XY3mdk9c6Y6JEJ0P58t5f8/zHp6HwH8eSikhhFB5nPyL461WVrBaQYhEKCCKpfAKkAIQQCQEUbTyPCtwXEESdvR6tCPrKg7Euk8NISKDiGIRpAgMQRClQR+CwoSQf+M60Rpe2HA6VmOs2KI3mN5PTHYO9HS4kVJmGSyFXqJZdxjHvr9w2s+nQNfXR3Y5Z+lSwV7OdH2bz54ZdHX6JVdCpQtRDLia61U0ObxGkTYkFzNDb43PjjQk31VZgtf2eb0Q7Dh4ZSO8uh8vriq7Be2gz1fDcHklNKXnIDTaHOrfrWZ7Mp8nNJtjnlEzjrXwPM9yf/9NZIV+f2R7oVL9UDk/aw5HPnV137K9Dpy12GaUDSfXVmg2RUHnwMu2ezJMfD6fwmQy5UcE4UH1TuOl0FQin0gtKAxsBvS/4jlWXbuY2HFUMzH+Qbh94RjHU8pyhBSIlBUnCAXHTbdj/1Lurvjzd85ZU8c062sV9doqUKrKYDwaT9/xh1vgydUAWHkWBK5QjOPGo8GpvcnMtjnDVvjyYxI+ptID2fXa6NOvMyl4fP05AEwDIiMVQUqiCHovHjrXnt3jb1Olj7fS/iaLO9O2olVIGUCyDJWCkkCxh/Jju8dT5p2uowB+UXZa1VUpTy4cJo2NPO0FJxBESWiVmAz+AcEDBiCbSptHAAAAAElFTkSuQmCC',
    order: 485,
    base_experience: 270,
  },
  {
    id: 381,
    name: 'latios',
    weight: 600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png',
    chain: [
      {
        species_name: 'latios',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB6UlEQVQ4T2NkIBMw4tLX0PCfqb6B4T8jA+N/bGowNO5v2M8CUujY4PgHRP9n+M+IpJnxP8N/BhAfRWNDQwNTQ0PDP5CGOfG7vZ9/fPG1dkPsgdDQVcyrV4f9RbKZEa4Rpul13z77T0+/JBx7w6Nz7sWjhP6dCVdBzm5oYAQbyBAaysywevVfsEaQ80BO+7zubNDrxy9rX996+fjS0/ONqRsmnV0VuopZVFuUESQ/N/Foz7ev7wxzV/k6MyI77+2KYxf/P/+lw/OP7cefv79ZX3x8W6LSGjQJZPgqLQa2TxrzH739y3WmfGO4D+P///8ZGRkZ/7+fe6iJX1Ks9tXT1ww8L/7//fLnGxMnGyvj4adntHymlV8/mTKz5c6HF9ej19QvBRkEduqu2ikpkswiRiwMbNzMjEwxd6/emLj3LbtwmrVj3LfvtyoNusM6rrat3nW1KtQzjIHhL8iVoEhi7PJL4infNO8zNNREirV8NHqZZD/1KqjNC9ZSN2ZVYD/5WY71joaPXcz+/ftZHB0d/8BD9f+qVcxgJ4Qhgn0VAwOnXOqcKj4BPt37bK/yvVtzHsLCBKwRZCsjmGJgAEkwNDAwaIVqMYahxh0DLDzgfsSV7ECp5kDDAWYHLYf/jdca/8MSB0GN+NI/AENF2pKyd5sQAAAAAElFTkSuQmCC',
    order: 487,
    base_experience: 270,
  },
  {
    id: 382,
    name: 'kyogre',
    weight: 3520,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png',
    chain: [
      {
        species_name: 'kyogre',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABvklEQVQ4T2NkIBMw4tPX0NDA1NDQ8J+BgQGEUQBejTCVq1aFMoeFrf6LrBND4///DIwgC66tbmS99PRT08mL6zomLHjwYVVoKHPYaoRmFI0gp9nbMzA5Ojb8acottJeTYZ5y8+63LWLCnCcL23s3IGuGa/zf0MDE2NDwD+ScS7unFj64+87i7sMPRrqa0jIvXr74F1PapczAwPCioYGBqaGB4R9Y4////xkZGRn/MzB4sl/c4Tf5w/tPqV/ff2NgYudlUFHgYZixaPuXnoUbbRkYGC6EhoYyr169+i9Y4/79DSwg5x1Y1t6lpipfumHzyR+8vzlY9K2lmDfvOfm2esKufSWxRkk9i3d9ZWAAhQHDf0aEbQy8+5e23Ofl4RH++fsvw44DlxiePHz4+eLVZ2d4+bnvfv/2re3UzZv3GRgYmBgYGP6B3McIDkYGBu4Fnflz+Hk5gqTEBZ/0zNhy4ezF1wrK8lxlu0+f3wuzCRYlUD8yMDIyQiLZVIhB1sHDjqN72aFHoe4Osqt3HrgD8xeueGRsaGgAYXDIwoCDgwPLgQMH/hBMOaC4BCkCJbUGBgbGBgYGFINQnEpOOgcA5Im5DyTalgsAAAAASUVORK5CYII=',
    order: 489,
    base_experience: 302,
  },
  {
    id: 383,
    name: 'groudon',
    weight: 9500,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png',
    chain: [
      {
        species_name: 'groudon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABGklEQVQ4T2NkIBMwkqmPAafG/w3/mc5KzmI2Tk//w8jA8B/dAqwa/zc0MDE2NPyDKf7PwMCIrhlDI0zT3XXr1P48/+5dk10wezXD6y//Gf4zMjIwwm1G18j4//9/BkZGxv9vF27eK/SFx+noySPNNotq6/437GdhbHD8A3MFisb/q1YxM4aF/X26bZf1t9tfDgo9/c58//WjdpP5lVX4Ne7fz8Lo6PjnyuK95TKfmDv+f/3G8Pjt3XK9ztwu/BqRAuFG0eSt6lLqXuefXpli1F+Ui1cjyP0NDQ1MDQ0N/9JCQ/ljRIzjXtx8sC5s34ynDQwNTA0MiJAmMjpQQxRkAe4E8P8/49n0WSxbpJ7/BbmAqARATDIkO60CAOaChg8ItFioAAAAAElFTkSuQmCC',
    order: 491,
    base_experience: 302,
  },
  {
    id: 384,
    name: 'rayquaza',
    weight: 2065,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png',
    chain: [
      {
        species_name: 'rayquaza',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABa0lEQVQ4T2NkIBMwouv7//8/44EDB5gdHBz+MzIy/mNgYPiPzWwUjSBNjIyM6ApBajA0wzXCNMV2L+Ku9HUo+vLhE4uZhU491DYMzXCN+/fvZ3F0dPxz5sS5WkU5pabXr98zHDh8ojMjJ7Li////TFBnw10N19iw/z9LgyPjn/a1FysZ/rC08f96yvDp7t41FQ2doatWrWIOCwv7i+xXuMbQVf+ZV4cx/g1bfi9VheHVRO6fr//ef8f2XuZ4l0fD6r3XQkNDmVevXg3XjBI4MJNbSowCP5vPmf5XSF38yam9nSsq/SrSZp5hnZVu8htmK4rGhv37WRocHf+krr4T4Sr/b/mj77wM1558Pj0vWs0MPZBQNTbsZ2locPyTPvtojNDPR1nv33y48I5LzmFVmbcWXo0wZ1hbq/MePXrzM0PSRt5knb9Bc4uCFqInAoyUw8DAgDXCidEIUgM18D9D6CoGJlBoE6uRYNIHACzFlg93o6UNAAAAAElFTkSuQmCC',
    order: 493,
    base_experience: 306,
  },
  {
    id: 385,
    name: 'jirachi',
    weight: 11,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png',
    chain: [
      {
        species_name: 'jirachi',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABpklEQVQ4T2NkIBMw4tDH2NDQwKylpfX/2rVr/xsaGv6hq8PQuH//fhZHR8c/yApXrVrFHBYW9hdZDEVjQ0MDE9R0xrlzFwf9+/ff7/Dh472LFk2/hG4gXCNM06RJU32lpKQ6WVhYNSUkxBnevn37ZsH0ZQartyx6imwzWOP///8ZGRkZ/zMwMHCvW7fpvqaGuuinzx9/szAz/+Xh5eW4c+fuCW9vT0cGBoYfMLVgjTDb6usnyKko8165c+8Wr6mJzX8xMQmG9+8//v/69TvT/iNHDCb3dV6E2Yqicc6cVUL//7++ePHiVhlba4/fTMxKTD9+/mD++u3rxYz0eFMGBobfDAwMID3/4X78//8/EyMj47/21vbjBvrGFh+/fGX4/efvH0E+fpajh/ddbu9u18MaqjDnBruaZ1tY+7MyMDIa3Xx0I1aCSzTj+qldHGs9g6YyNDTAowklOv4zMDAyMjCAAgkEWFxczP337Dm5FlsiwUgAoaGhzNra2swNDQ2/QBpAgTFt2jTGAwcOoCQKXEkOpIcxNDSUafXq1SgpBmY7Po14kz8A/3y5D2tpuXsAAAAASUVORK5CYII=',
    order: 495,
    base_experience: 270,
  },

  {
    id: 387,
    name: 'turtwig',
    weight: 102,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png',
    chain: [
      {
        species_name: 'turtwig',
      },
      {
        species_name: 'grotle',
      },
      {
        species_name: 'torterra',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACuklEQVQ4T02Sa0iTURjHn/Pu3Xx30Xl3mbeJmaEGIRQm5UyDDE2KnJL6IS27g6gh+OlIlAlhGFmhRF8yUUsr0pyCzkSXkaSl5tQPGl5z5kzdxe3difedlQcOh4fn+T2380fAHUIQlJUhjDHEqzDVo4oH0PYA1mI77+dCMKbKAABj7OBsxEMIkb8BO9/G7KthYpEg1ExLxtU1FT84H8aY4mDEGVkPngfUhUXDpev54gQ314uTJ5JXRzbN3SkTn4NktLSBJcQmcpc3S4IDryWVl65wMA9CW5tLVv9sbZzmlUR48PApe2SMcG/HO1i1mEtH9V9QpF/gbamrDIwieiCztS6W65wH0xs75VG/TUNK1hai8QmxeH7oWjs9NeEnc3OH78uz77eMK7ESimYYoYiZsVlyCwc0z3gwp7nPl0xN6k5aDKHzu5VQvMF8etnRsBAgkafNslYLazQwIpsDBAjBnNVcf2Wg/Zyz1aS78guBC6nHDylDlqoKYE5159aif9CI6kWNBzIZF4jcw2Hz9ux2dVDFJtbemdf7JhkBxhRsr5jLkfGwOTyl87X+45l8ADlDguemrLqx4WMt1eW6auWBs0IR5Z2vH3zCV4wrqVL7Szy9GIfp264E1VMpy4bbGLGVZcRCGgFl31jfNMxMbywjidFo27qsPZ+g5UEVrg2IGNHnbSUezYiK2b8v0Y8ChqZg6KcFBi0uLBr7KmCDw2FxzgCuw/1FjyuLKjm18B/KJbhZ36VbMax5ZSqWmwXuitTpJSPV7hEXsarTtu9R+PhIicXl3g11tFM52wfjapmbQpRY2DLWC5r7vwBACACO3EetfdG+wpkjstGC8fWA6Oz09A4CgP6BO6VGCKERQrxOiQrotzkVvml5JfNOWROEEHIK4H9VTGMAx/aWuTG4y49BCKGampqQWq1mOfsPGkUkoExwO04AAAAASUVORK5CYII=',
    order: 500,
    base_experience: 64,
  },
  {
    id: 388,
    name: 'grotle',
    weight: 970,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png',
    chain: [
      {
        species_name: 'turtwig',
      },
      {
        species_name: 'grotle',
      },
      {
        species_name: 'torterra',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABO0lEQVQ4T2NkIBMwkqmPAUPjqlX/mffsmcX03kXw3+qwsL+4DCbCxv+MDAyM/9ENwNDYsPSpy42LZ41ffvt/ZP8U/6MgDQ0NDUwNDQ3/kDXDNcIkU5t2bvjPIej/6NEThh8/PqUcmpMwF5tmuMZVq1Yxh4WF/S1JzNr0W97D98yjl38l5BV+fnr56Oruy9cSGA73XgtdtYoZ5m+4xtDQVcyrV4f9zQgrLn71T6Dl8f9/HLK6dgy/vv5mEPh1Y++SiXkuDAwI/2IPnLTNXPZvLtazCYmVsbJzM0ixPOnOiC2vNjFh+P3/PwMjIyPYBFTwn4GBkZGBARyKDrnzLYQ/3jVfu6hlMQMDw7vQ0FDm1atXg6MIu40NDUxg45BCEj1k8cYjyN/3BN8znZ2V/ocB6gqY+4hIANjTDtkaAQY6gw80hvxEAAAAAElFTkSuQmCC',
    order: 501,
    base_experience: 142,
  },
  {
    id: 389,
    name: 'torterra',
    weight: 3100,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png',
    chain: [
      {
        species_name: 'turtwig',
      },
      {
        species_name: 'grotle',
      },
      {
        species_name: 'torterra',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB7UlEQVQ4T2NkIBMwYtHH2NDQwHhVq54xNJSBIZSB4R8jI1zZf5h6bBqJcgPCqP//GcNWr2ZaHTaNccHc5KhXzCK6b3nkuRlfP1I4vnhC/cFjO06npc1knTUr/TfIZLjGhoYGpoaGhn9XV4WyTb/q/4DX0E6Sn5eD4d6dhwxfb57/YaPKsiUzMymCgYHhL8P//wjHg0xJ71ybfPzaLedoK/0ALj5BlvOL1v55rGL0V0GCl0eH+8mK/ILM2LS0mYwgWxkbGvazNDQ4/nFq2Jxhpa83feOq5U/DbTU4WIXUhE9cfszAKSjA8ODMjvfHVtSL+lRunPz51b3jB+cWLoY4lT9XecHCiAt337PyLNl9dOX9ZR/rVDJVmyT/fxL59+7Zvjf/GMTNrZz9vn/9q3Dn+Ma489smQTQuXrYpkp2dfdnF268ZNl3/kH55Yc4s5KBtnbfnzNufvMb7jx37w7a/UOvkE4bbYI19fXOE9py8aeVsoSRWXJi58P////8aGxewNzQk/mhsnxmqqa60av+pWwwXH73fe2xZjQs4VP+DQoiRER6xMJtgobxp7WKjlXsfJUuJ8JhKcn6LKqqsvAOSA9sI0tzY2MjMwGDP0NDg+BckBBNHNxRmIMGUAzIUkjDC/sI0oSQAItIZyBK4lwA81NuQW0fioQAAAABJRU5ErkJggg==',
    order: 502,
    base_experience: 236,
  },
  {
    id: 390,
    name: 'chimchar',
    weight: 62,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png',
    chain: [
      {
        species_name: 'chimchar',
      },
      {
        species_name: 'monferno',
      },
      {
        species_name: 'infernape',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACLklEQVQ4T2NkIBMwIuv7//8/I2NjIyNDQ8N/BgYGEAZRjA4OjcwHDtT/ZWBghIoxMKBoRDYkbeZ/VgaGswyz0k1+I4mD1IM1QzT+/8/IwMj4v27elY6Hd29cfPH0mc7OBXnVIKmQzH7P9z/ZhPbOy17FwMAAMgSsmdGhYT/LgQbHP975S92FhSQX37l64vLjj98loiMzC7+xiX7bt7zNXlVNr+X7/79Td/SF5ISu+s+8OozxL9ypniUb9j+9f8Wc79Ot79auEUKfhR0ZmH89ZXh7c9/7Fx9+czKxs7HeubRP58Hx5TdCQ0OZwRrDS1b7S6oYbjh1Yvv3Lw8ucDYVx/z9zqrM8OXJUcbTd78x7Th0+oeKsR3H7///6g9PjmkCuRKs0SN7YRGnkHjvmzvnX9989o55YraTkIYS///lK08yrP4ozqjL/peBX1qL4fG9Cw8PzEpWZ2Bg+AnW6FuwtFuAi73k9uVT2/wsBWb+/Mcx6/6Tj+JGOgoMO49cP/eRQfykpIxyJisbF8Pu7dNc3p7fsBesMUuLgUfIu9Dm08ev1ybNmvWIgYGBk4GBQSPUx4d19ZYtp+yju3J1TH0mcXALMBzZ0NZ8cuuUOpBGeNyADAF5fPXq1X+R4zQwrlJYQ9ssluX3J/EDs4snHX745jksVBkbGhqYGRgY/jU0NPxjYGBgYmAIZQwNZWDQ1tb+DxVDNosRZ8pBTcL/GUNXgQxbzaB97RrYICI1YuYEAM1235U14eHLAAAAAElFTkSuQmCC',
    order: 503,
    base_experience: 62,
  },
  {
    id: 391,
    name: 'monferno',
    weight: 220,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png',
    chain: [
      {
        species_name: 'chimchar',
      },
      {
        species_name: 'monferno',
      },
      {
        species_name: 'infernape',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACmElEQVQ4T12SbUhTYRTHz713o2a0UmP4IaUXRuhQSSXnWjJfeifM4s6KiKxwH6TCwAqDfPpitaDEYCGaow8Z7qIGCllim87lS26ZqNGciDlflpsuzdlyd0/cWxPzwPl0/r9z/odzCFgXBpqmaJkMQ2kpBoIAAgBzEoSARAiCITmxlsMIkQRCq8X1TdfCqyA3Sc0wbNftbJWXwP6jruRBqNEuOm4k3FkKQH5iA7sPnENzGAFJIAjyIAbO1F9LIzdlX13itK3iQ+cC3e2ttapJvVy6M0lpaJ/U5zV8voS5BQjAPGhUgSDDBIG+/IgrwoioKlJ+HaKke2DU44SAmQnGbvntH7PPiczOlaKiJlu5UaUS8CBCKgFCpoDuwv7ipJzL2uikFD+55BJOuUawu+sjJXV3QP/sVhhcwHl3m2wGFAL7KiuFKRrNik73oCLrQOZV0aYAUK2PWO+oi6oTxDpjCHLAv1F07InJLHO0fRqmaZoiMDZQBKFmbT0tiV73t35jm63x8HHFDtI3vXeofwy6xyeeaQpL9NOOoV4NXZA6A9C7OvF9c2PyNsmGt+Hhi5HPq5u12wdaFUtKWimWSGDcbq9PlClvkaKg40NPZ9XDxy8LMEYkv6O+8j59MFNuMFs63dMzcx2ymOhTlj6r70TuybBZj3tw3kOUp6cnVFssJjhzsSQOAL6E7iise6Et/uVj3wyP2EXx8VJLp6XXdiQ7K8zj/r57Ymr5vCI17t6y76cr5+y10wDg4UAu+RtyUaNDu7zzPyqsVmutXJGWIt4cVtTyriX3VX3XawCgAIDlb/lPTxiNiIJ2gAyEAqEmZWWFkawPS1gBNYnQ0wX+WdY+wH//ijHBMAwJwIBazbChGkKIRAhxznh3fwAGiyfqT0A8OAAAAABJRU5ErkJggg==',
    order: 504,
    base_experience: 142,
  },
  {
    id: 392,
    name: 'infernape',
    weight: 550,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png',
    chain: [
      {
        species_name: 'chimchar',
      },
      {
        species_name: 'monferno',
      },
      {
        species_name: 'infernape',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACVElEQVQ4T2NkwAJWrfrPHBrK8L+xkYGBoZ6BgeHAAaYGR8c/yEoZUfT9/8/IwMj4H5thUDGQerA8XOOq//+ZwxgZ/87YeyPjw8d3yoqCwpxrDpx/G5PsPPPehSdZ96ZndE3efvLT////GRkZGf/DNTasusrWEKb9K2/p5dg4W7VFP5jZGFbsusTA8efxDx527ttHFi332bNn1iOoZRCNYFPA9jP+T+7a6OHpbrDlzOPP/99//cV8c+ehv3p2Zsd//Pz4cFa6ZyzcRhgDpG/byZutt7/+r5LhePb/8cuPDDd/SzGoSwj/YecUYD1x9FLRwgKn/ob9/1kaHBn/MP7//5+JkZHx37oj10qVrTW7bt79xPDt88//Zx6/ZPz8/QeDCg/Lfztbg38PH377devivbCWGN0toFAHu7C+sk1DyNbtOoewMMOXrwyf+ATF+Y4/vP2fm4OD8ebRM/9DPS0YlfSVGJYt3ndlboazLjxUG1bt57lx62H9ij3H/rQXlcmzC4pHXnt9+yczCwvr+wePmX7cvHtXREdV+RcjCwPfh0e20yqSj6DGIwMDQ9OqUztevP7mfuf+DQZZOUWGf38YGO7dON8mKcz1koGFS1SA7/fkGaWZrxDRsX8/Cyh1tE+7JHjrx5ML+3ds2hAUEG3x9ecXs5mFnioMDAx3kRIGJBZgoKHhP1NDA+M/v8xpepumZ11Katts+f3He4flTXHtaWkzWW9JPf9/oKHhLygGMZwK08yAlPwaGhqYGhoa/uFOq1AZqOb/////Z2hsZGAEuQI9/QIAXUUUdb2eKysAAAAASUVORK5CYII=',
    order: 505,
    base_experience: 240,
  },
  {
    id: 393,
    name: 'piplup',
    weight: 52,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png',
    chain: [
      {
        species_name: 'piplup',
      },
      {
        species_name: 'prinplup',
      },
      {
        species_name: 'empoleon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACO0lEQVQ4T2NkwA4YGxoamEFSWlpa/69du/a/oaHhH7JSRnR9////Z2RkZPyPRZyJkZERrhlFI7Kmlrpq/zOXznPlFBQ9+P751W1f36g3+/fvZ3F0dPwDMhSrxqXLF89hYGFJfvfmDUOQXyDDp4+fX+7dsNcupyrnFkwzXCNMYOOWjd7f3r/f8vLujb/Smob/jYxMGFgYWVhu3LxxKtjb3fcLA8OrhoYGJrDG////g92/ZtkyDWlFlUsPz59l+X364D9OB29mPSNLhhcvnn5VVFLgPnBg36HY5ER7sJdAGkEmgEJtet90aXkF6aPvP72Tv/HgGoO4qOx/Qw09xk+f3jHcuHWb4eOnj+kNra2zQkNDmVFDtbOT1+/C2TlasrIab399V3j+5gNfsI0Ng7Cg8JzyWbPeX3/48BTDnTtrHBwcWBgbGBiYGhgY/q3o6Ih48fr58s1PnyzIDYxc8ejZwy1P37xiMVDV/Pvw1q38V7+/ZL36+PXgkllzsxoaGlggNjo4sBysq3v+6cMHEd+gIMHNGzeHysvJznr17OXfF6+eMv3+/pWR+fNHhoMXLvnNXb5qcwPIRmiU/F84b6GLkKiIiq+v94x1K9cV/vz1tW/F+lXZLtaOOcamFpq37t+9wvX7p31YSso7eKiip5JNqzbJPXj6QC2vMG/P1nUbPT5++OyYnRQz9T0DwyOYRfDAWbVqFThthoaG/oMlOVzJDyPlwGwGOYUBFGgNDX9ABoqKijIePHjwH3JCBwDZPRhupJY+tQAAAABJRU5ErkJggg==',
    order: 506,
    base_experience: 63,
  },
  {
    id: 394,
    name: 'prinplup',
    weight: 230,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png',
    chain: [
      {
        species_name: 'piplup',
      },
      {
        species_name: 'prinplup',
      },
      {
        species_name: 'empoleon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACGUlEQVQ4T2NkIBMwIuv7z8DAyLDqPxNDKMM/RkbG/+hmNjA0MDUwNPwDiaNoRDHk/38mRkZGsCIQ+B8aysy4evVfGB+s8f+q/8yMYYx/983aksQko2z++f+f777euuUMDAw//zc0MDU2NDA0MDD8W2ruqnrm6Zcn/U+Of2dctWoVc1hY2N8zy3ea8314foJTWZfhzD/+3EAPlSnH+lZxWhWFfQcZft47qOrS29dO8ScOu4Cdur+hgcWxoeHP7dRC+9dqGrsEPELZrt64ExMaarYU5qxbvkEznnz55NV/5rzb5s9vbzQwMDDB/bhGVt3kgb2nqllmWQkzA6Puh7ef09h6KpnEfj/MfM8jKu2we7smAwPDx1Whocxhq1f/hWvc7B8R8n3jCoMPMflGdrWdntx87Azv7j5hYDm4i+FYdXJDKgND42ZjYy7fs2e/wUO1oaGBqaEBEszT0uubHezsa/6LC/99wSP8ne3cWZ5zWf578xkYwH4DORMUUCAbQfg/Q98qziNn9yz59P3bjZO8Ou9d/j7v/vLyHsP7L+8/vPr8/6WlvCjz228/E7z2bz8KCmm4UyflTmLfwPJJZF9/zVOQyYuqG2Nvzl8dvf/ZlYqVoaE373z40Hf0+fO2mitXHoMSCkYCAHk+VFv7PyPU6eipB6rpP4pGZL/+//+fiaGxkQEU+fUgr4SGMjGsXg3yGzgp4kxyhNI+ACnz4pLVLiUPAAAAAElFTkSuQmCC',
    order: 507,
    base_experience: 142,
  },
  {
    id: 395,
    name: 'empoleon',
    weight: 845,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png',
    chain: [
      {
        species_name: 'piplup',
      },
      {
        species_name: 'prinplup',
      },
      {
        species_name: 'empoleon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACYElEQVQ4T2NkwAIaGhqYGhoa/mGTg4kxIkv+//+fcXJ7u0heVdVrfJpAcgiNDf+ZGBoaGTas0lz78/f72R8//jE/dupM+4IFC36ADfn/n9Gh8QDzgQbHP3CN////Z2JkZPx3cPcWzdu/jC/y/77L+v/b5eNhUZlWIEWhq/4zrw5j/IvsCrCNgRmLxB4yqZoHG/GL//v9b7aqwF2Gb9/vZyQlFczsW3WMsyjM6jtInXvpkZTT3Qmr3jHc+cTY0PCfqaGB8V9g6aHWByxiVikC/VNVDVxXnzx1xbO2tmEHSEPkzE8iP9+83fL58fVPu2d4eTAwMPwD2QjC/0EKvMqOzP7BJcpXanzB79MP0V3hoU7+6XNe2b189Hb39xePl+6c5ZYEdS4jNHAamBgYIMFf0L7nTHmEjPHzVx9/th+TOvj723+3b5cPH921ItoGogmiFqrxPyMDAyPY1hkTJuwzMrFwZGZ88/vFV0nWCasefd89J1CCgYHhk7FxGuvZs7N+Q0MVpuk/U1vfkpVf797TVX4iKP/cXJidjYf576FL/368/8Q5gffzvpbt2yf/hHmNsWH/fpYGR8c/06cvz2Nk/N4yLSNJUt+399JNdjUlVh1NBsE3TxkYf/1nePr0jMm5rSVnQ0NXMa9eHfaXEZRaGBkZ/0+d2qfy/f3b3yU1rQ8ZpANqYt3MnBl4VLkuX76zm5OL6euvj++Wnj3a+YiBAeJCsB9hmkHstLQ01lmzZv3ubi5RZPl+8kdh2+HniIhHhAU8yYESNjjMGhr+wZwD4e9nuXr19f/Vq0P/wQIQJA4AyGwWH9JrBLAAAAAASUVORK5CYII=',
    order: 508,
    base_experience: 239,
  },
  {
    id: 396,
    name: 'starly',
    weight: 20,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png',
    chain: [
      {
        species_name: 'starly',
      },
      {
        species_name: 'staravia',
      },
      {
        species_name: 'staraptor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACXklEQVQ4T4WSa0hTYRjHn+ecs+OWG5va2uaQNBRE1BoURASd6PIhkkFGZdLFgoTqUx+SLNlbBMGC7IIlZKAUoy2kvkgXChX7ECFTu6xll2VTZDqt6ebm2c5546gLQ6oX3i/v8/ze/3P5I/z7IBCCQBwUAOniVPwP+EeYEMoQgrLyOAd6PB7Wt8dHCcz/TAhhCCEyCIfVxaA2pyRV7HPPjTAALKhSXKKokLiQsPmo+0gSoQoovpdp3E0ZvpamEm9etdZcmQNdrpaKmZ/aahnw67Hje+ud+51FetfpaG1ls62M5Vp4KvlRxUUysy02WU66e27a67C19f7ZsRF9Q1ZwOiPFL4PX/c+3FOqtlc9yi3euG397YTQcuTWgy1epaGRKZng6EZ/dN/zizBM8VX/7YJRZ27Yy+gMyIlPQFwr6Z8ttvEg1q3I/voRvXBLKrFrp8uOnAgw+HGkiMG4s8cTnSlVVOk+UznK7CnJXFOgEe8E7rx+KR32SYWxCYteY+ZLlidBgx/ADmc3SGTdgqbVIcx0ppYg4vyN7c/CepDNVVyS8oppNMkOBaa4/EIPy6KTE85lsXiIOAS0L2evFJkyPvuZid95khPtu+DQE21bHQFSboLuv90vbjDFw0py/NScZB01kBnS2DDAUyo1KqcpVFLmWS3evWdWpQzQaTkRzTKHejqu7nR3eD+rtDecsevOOwHgsdOeAZcBs1j5K7zENQ2N7u0UUTVhXtVFZuPg3Zy02ABJCMW0pBaCgOARBEAjb1emQ4Dxg56YuRhAEaYlzlJ4VyOFwKFNbbOzfVSnxX/ag/GPP6KuXAAAAAElFTkSuQmCC',
    order: 509,
    base_experience: 49,
  },
  {
    id: 397,
    name: 'staravia',
    weight: 155,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png',
    chain: [
      {
        species_name: 'starly',
      },
      {
        species_name: 'staravia',
      },
      {
        species_name: 'staraptor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAClElEQVQ4T22Sf0hTURTHz93bplvirLV/FopzOCjRYmYkpK5I/MMMyd50JUbpHEJC9odIaFz7xz/KJNNiC02xMt7rhxAm1IQxZpgiCfNHUIkO+zFXGFPWnO+9G3u1iPLA5d5zOJ/zvXC+CAAAYyzBGAvRdzQITVOIZaM5idX+vdFfkGy4ro5OoahPmV1dLnGgySTFLhe3FYx+F6WTl1uGjFJ58ZzDHnEuL5c2AIyI6gCIpWmJJhAQe00uF48AiJg4S0pKD6gSnk4vDoY4E1aqN8KwPjLoGZtZ6mwEYLdQRCI4sXdPZTj/6EBIToGWl8Frg4HXE45CHg8sDd7rnLRau40+3z6iVAYnfD63Y2oqhAjGEoSxUG62dOgVytSi/p6MB2Un0hVp6RuNK/64of6+4EZ5OXMoMbFG4HlY8PurLcPDvYimaYplWf56Q13Bineh6sc25X65dlcWfF8VCkdfSkIFhXxAqw3snnSrQ1Ik87jHT14BeCx+tb27N3mnUuF9632j+uL/CAZ9hpC5toYiHW3oc5UVKJUKdDevcV9b26Rhg+FstaWsTwSbzzfr4lPSnMm+WZ3imx8CObmgS9XBKPOET3o3Q6Wr1QKnoCiBropEwlx2TU3FTBSMHgIYS5Zu97Z/0CRecBizN/NycmXxvByKn92HsdHRSPDOgJwThKtW25lGhhBKVGRohjKzZt5x49ZFw7S3ffxRz2bTWqTiVE5WWlEg2CpZXFQ6D+Z39Y+766N7jan9WdPzF84WbmVVM1dJP2wCeNVJSJy6p2/WmJSkd87Pn6tvuXTXbrfLbDbbZsw5W1qylq5VHbEc13I7tiegdeH96WN5q4QQhBD65ZxYMAxDaeY0KIAPEzPAfyaPQdH+n+zGF8siZxevAAAAAElFTkSuQmCC',
    order: 510,
    base_experience: 119,
  },
  {
    id: 398,
    name: 'staraptor',
    weight: 249,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png',
    chain: [
      {
        species_name: 'starly',
      },
      {
        species_name: 'staravia',
      },
      {
        species_name: 'staraptor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACoklEQVQ4T2MMXbWK+dHhjdwnJy/9xPD/PyMDI+N/h4YGlgMNDX8YIICRgYHhP5QNp0CCDHGrW2d///+9Z3VYy03PSbns2/Mm/3RocGD580PJ4UjHvD3ommCmMUStbKt5++qN3M7cvjSQoHdPsfHv7z8XfHv/ecaRvoVTGxoamBoaGv4hGwC2MSAnxOGfnMQklfdXpt7hUJH++Isl4PfHX2uPTZnXyNDQwMSApglqYyhz5ByZM/9+fTf4/YWTgZWRlUGS4fWTa7x80bsyJh5qaGhgAWlsYGBAtdFnekkg0/e/6+wPPv/7XV7k3VLuv58shJn+SPIzq9+78mr6iokrskA2NDA0MDUwIJzLyLCoRKwj7qqxnI/Slkv8H69elGU9fVSQ93EQ089Ips/f1X4ffF9Ud/DPNFWG7T+R/Qr2Y3xtufY7oW/nvjNzsTE+eP1FguUH8ztFCba/vxj+SrxlYPt77UH54jXrukC2Xg29yrh69eq/jMILp0vny3879/jwObFfz7kYmMX4GB7dvbb2s6ygOZcQvwzbm99vhN+8fMsqI7ZvYcNcsLMdHBxYGDNW1ucJSXBMfGFfGaTC6RX52015cf3GyUfjuiq2/hVkszh99VLcrQkbFqeWhy989vHPv60z1iYzMDD8Y6yrtvVntvfY8Pgn52XBj19UXrx4slHCSEZE4guby41td2fPnjEbHLcg4B4dtJ2dldWR89gtc7AfS0o8Vgrq2oS9/faL4ce/dwyi3H9efrx1q2ZC2745IPmEBAeOBQsO/Ijx901/x8uS9+HsDS+wRhCIMnBqYDCQrv/18s2ENdu3F4IFIWkXzAIRxgwM/GcZGL4xMDD8ZmxgYGCCRW4mA4PgdAaG9yBFaWlprLNmzQIldFgChyd2kB4AiSsf7C6imMQAAAAASUVORK5CYII=',
    order: 511,
    base_experience: 218,
  },
  {
    id: 399,
    name: 'bidoof',
    weight: 200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png',
    chain: [
      {
        species_name: 'bidoof',
      },
      {
        species_name: 'bibarel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABdElEQVQ4T2NkIBMwkqmPAafGhv//mRoYGP4zMIKV/Ee3AENjQ0MDk1a9FmMYY9hfsI7//xkZGhkZGRsY/iFrRtEI0tTQ0ABWsP3EgrQfr565B/pVBYMNaGBgQtYM1wjTlDZhglyT573uN78kg/6+/c0i8rOuQcqNoZmRkeHff5DDGSHOhmtMmzmTdVZ6+m+ZpbvrDxqdbxBnfMDw8eW/X5KS7Gwb74guDPSqSfj/fxUzI9QLWALnBu+siW0JisZ5Pcw/3/26e2fHw9QfUd0M+SYLG/bvZ2lwdPwDtxEUAIyMjP9vXSlvFmZ9orXzhIOEqrGr1ds3bxl+vDh0SY930YGXL6UXWiZtOQdzLiysQYH+f+/eDGlZ9mdR589+//xbqkjn9x8GHiXmeU9EuD8I37v957hvwf5FsJAlNQGA1KMGDsgkUMj6+Dxj/rzl1v/X9fv/hzIw/D9woJGJl3cz4717Sv/CwlaD4xYlVElNeqQ6FW4+AJ4Kmg+2urFdAAAAAElFTkSuQmCC',
    order: 512,
    base_experience: 50,
  },
  {
    id: 400,
    name: 'bibarel',
    weight: 315,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png',
    chain: [
      {
        species_name: 'bidoof',
      },
      {
        species_name: 'bibarel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACSUlEQVQ4T2NkwASMDAwM/7GIowiBFMHB//8MjIyMDP8vLurmlnr2uOHV5cs7tJfu3/v//39GRkZGFMNQNDL8/8/IwMj4f0bLhPlSeqYJHLsWMXz59TsnaNa8qatCQ5nDVq/+C7MFRWNoaCjz6tWr/85OSdF7KKR6VOHF5Tt9i5bYXmNg+LLfwYHF8cCBPxgaGxoamBoaGv6dinKIfiKqWiX6+ZMGNzc/0/XPHydGL1hZANLwv4GBibGB4R+IDbYR5ow7bgyeZ4yqm/f+5bwlceaknZS8+J1PWsbK5vePHbGfvjiRkYHhx38GBkZGBob/II3QUGxg2h6yt2eOZTJb/LW9Hs//fFFW+PH+xVt5O8ErXALHTPZPXh508P5smCVwjQ0ODhx8QsLdW7VtpXven/f99v7Fr49Cypx3GHivLGXl3xt9++i3vM1bq1H8CDMlx9Eryt9IbanF/4d3efvWm29qbFl36Q/np7tv3/62fHPrWNqqNT0wf0JCtaGBZZKKClfea26lTU+Pnxd6eX2CzeLNhXvyMje//MnAsIxT8q/zhLqkIgaGd6GrVjGvDgv7C48On6mr8gV+frc3O3vAje/vr/0JK5b6rklMbPn18Z3TMSnth7cNrW4Lfft6cXlu+FpQfIM1wkKq39kygIODl+MfJx9/9po1M+dFRWX++vvX+se3b7cu2gbefi0qemZLou9tuEZc6bLTz0+dlYGB9zcDwzPdTZveejEw/ITFN1pa/c+4OiyMCZS0YK5ANjQ0dBXz6tVh4GQHABHlCRyTkdAkAAAAAElFTkSuQmCC',
    order: 513,
    base_experience: 144,
  },
  {
    id: 401,
    name: 'kricketot',
    weight: 22,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png',
    chain: [
      {
        species_name: 'kricketot',
      },
      {
        species_name: 'kricketune',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABXklEQVQ4T2NkIBMwYtX3n4GRgZHhPz4zMTUiNEG04jAAq42V20JF271WvwbZ6DnJk3173vaf6LajaAxdFcq8Omz1X92l7v5MLz74aQgL/WRjYuleHLf5fkNDA1NDQ8M/mAEoGletCmUOC1v9d/emFIuLN95uO/bpfdq6lgNr0DWBNMM1wjTVz0/QcDdSOiXMx8579uKT7qiAyWWr/q9iDmMM+4vsXLjG/fsbWBwdG/7MWBgdommstfrHm8e/OL7eY1qU/SBl7oNbC///b2BiZMTi1P//GRgZGRn+d6QJ8gtbmG+Xk2G0/PZHlOHI6ZcMN+/clt+y+N6j0NBQ5tWrV4NtRvHjzJlprOnps37Pmhvg+eHH70J1NRmOB89fPn5861lNT8splADCiA6QzWATGRn+309g4FBcwPAD7De0RIE95TAwMMBCEuo3UFJASUk4NYItgfobW9LDqxFfWgUAhU6WD8txDhQAAAAASUVORK5CYII=',
    order: 514,
    base_experience: 39,
  },
  {
    id: 402,
    name: 'kricketune',
    weight: 255,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png',
    chain: [
      {
        species_name: 'kricketot',
      },
      {
        species_name: 'kricketune',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACPUlEQVQ4T3WSX0hTURzHz7l301WOOW1EU9MRYfSQ1Ej6R13zySeh8lK9rPWgEORDkT3VfhFEL0kQIaIselH0RhjKBJG8iygaWmJNpzENV8s5t1j7/++cuFdnc9jv6cf5ng/nd37fL0Z5BQCMeFZkdH4d9c/6sSRxFo44BScWeCGbf1cW5aIII4xovrilL9DXQUoxwpg29ZyvLFWrb+E02en56raV79fvYxlFYzwY7bV1DI9IEwEAkRAZBAoMYCCX+00DSr2GD/wIoHQgjCoPVKFdJSoU/L6Ggo6lo6NP337OwesvAjAIgDR2XRg6HE42H1qNxOdryounVCzBDKGRVEbpGJswolehTxxwChHEjAxOAKdoADHTea/OfOJgjXVPWSr70x1jXCGKPHGEd/xhE6oM2/N+/vddYXwqRBHCMkgHW1jMC9kPz08+O1Jfe33BtZaci2aVRL+bSceyKdaVKvJ6Q/bbT8a4jYVtgBRhjBF90XnGVlVtaEpmdaio9BfyFhWTFV+ESZAomvMs8X0dswIAp4DcqLnlPOw63q/VVl/S+GLvAiUJg7a2omL49UKvqZ67FgsGpi+2dRsppRhjTHGuaW29ozE17/2SXJ3xnDNbT42OtA+crlPyb/oeXy0zOnwr7o/qlrYbwiaYb7J18JsO6xRhc4MhMT70sl2VXj62PHPz0ZUHyFkYjH/JKYhezmjpeHKyW7m4qCU8z2/GbgsomWuxWKRPUEopI4r3GbsdCACS07J9Vv8b0u2Fv4qgCB+nR4EMAAAAAElFTkSuQmCC',
    order: 515,
    base_experience: 134,
  },
  {
    id: 403,
    name: 'shinx',
    weight: 95,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png',
    chain: [
      {
        species_name: 'shinx',
      },
      {
        species_name: 'luxio',
      },
      {
        species_name: 'luxray',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACjUlEQVQ4T2NkwA4YHRocmA80HPiDLB26KpR5ddjqvyAxRnR9q1atYg4LCwNLMjAwcIpHiUuKaIibXd31YSfDkUfvGRoYmBgaGP6haETSxGI30yH/H/ffPCZGRh52AXahd7feL7p1/mbR50Wf34IsxLDx2qFrkqmn0iPeiL/tk/gjzPD2xRcGVnGOnwLCnOwfb368cq7srAEDA8NfuMZt27axe3l5/T998vTGizevcG89sU1p/fNdQm4/xJmYDXnZv8pyMHz9+ff/5wvvtG4tuHWD8f///4yMjIz/L+58wf2B7c76nU+3m17/e0NA9osUw/sDFw4YCbGo3/j4gW/m32fcCn850x+sezAL7NSGhgamhoaGfwwMDNxtq9tuu+g6S959fe93+8VIVoP3NgxivzgZmJ//nNA551AdAwPDZ2igIfw4c+2sNYLCAsHm0ua/7zy7xbr49VKGFwxP/ro++crMdYPh9QUOjazdbOd473VdnI8SHQsXLt17g/2K05nfF3/astiwavNoMn5h+srI8/v3f7av//9d+/mMed3F6UtOTnwaC4pPuB+760rXXRR+E8j6+z2DIpcyg6qg9r9jz/czMP5lY2L4/peB6+7FL78+PTbuW//mVmgoAzM4VIv8dWT1FNhv3Xouxn7m7fcNNso/zZn//pFSkBJk+Pnp6bfTD14+11e1V7777m9I97wNaxsaHFjAGlctW+QkwvJr78kDq7dXTtvplWhrK3rh/Xv5Cn/1RcLSSpqrD14vVtUzCvn1h2F6VX3TYlBCAWtcv369wONP39T2HLx4fdO8LljIMcxor84SkdfIufXgcXpVVdVhWIgyMDD8h/sRKc2CDWtocGBuQErksPiGqQMAuDclalPb29QAAAAASUVORK5CYII=',
    order: 516,
    base_experience: 53,
  },
  {
    id: 404,
    name: 'luxio',
    weight: 305,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png',
    chain: [
      {
        species_name: 'shinx',
      },
      {
        species_name: 'luxio',
      },
      {
        species_name: 'luxray',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABVUlEQVQ4T2NkIBMwkqmPAavG/wwMjAwNDIyMDQz/cBmMobGhgYGpAabh/3/G/wwMDIyMYAoFoGhE1nSv26TrxasX+6y6n+z43+DAwthw4A+yTrhGkPMYGRj+M4SGsp0zfDJJS/x3+uXHH86cVAz1yIlvf/v//39GZJvhGvc3OLA4Nhz4s6jU2is8Mmrr778c35k+PeXcfel8sX/h+r4zM9NYTdJn/YbZirDxP8grDCC/cNw7PmmLAI+g86WjJ7f8zJiS587AcP8/Qh6sF8WPq1aFMoeFrf67XIdBljnIfgnD4+c/ncSFPgn/E0tk7Nr0GVkzhh///29g2jfjyozfz59JqWuqez+6d/uEffURS6gmkGXgEMaIjlWrGJj/PPTQfveZSVxVRVH4+fNnzAnl65fijQ5ckY3uP6w2gt3S0MC0Wusqo6ioNuPr11f/g/xNlo3YXAIAx9eMDyxPYaYAAAAASUVORK5CYII=',
    order: 517,
    base_experience: 127,
  },
  {
    id: 405,
    name: 'luxray',
    weight: 420,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png',
    chain: [
      {
        species_name: 'shinx',
      },
      {
        species_name: 'luxio',
      },
      {
        species_name: 'luxray',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB6klEQVQ4T2NkwAH+/2dgZGQES/5HUgISAfMhUmjg/yoGZsYwhr9gXRADQIrhmrBq/P+/gYmRseGfIEMaf7L4gz89L3d9hYlddRDl0T7w+guGxlWrQpnDwlb/vdPKEPfuJ0PbrZcM8TEzGfaCFJ5SEq5gVWE/a7jr2e4GBgYmuFNXrVrFHBYW9nf7hDI/pu8iGx99EmMQErjM8JP1WXik0W32F/cZAiQTzwTDnA7XOHPmTNb09PTfS2ZMznr9WGyqgtR/hifvn73XYCjycvFza2SQ48piFNhwF+ZssMb/DAygAPy/ioGBTcSPQZHTN2qxkmmM6eWn3y6wnQ65wMmuoHZo+4OI4kMMj+E2NjQwMDU0MPzzzvQWzJFnP8v/557wJyGTKnkd64n3T+w++OHMsmmGzsFrnvwTOOGaOdcSGgHgmAIHc0ODA4cmh2zs8b+yW9R3tFkZJqYsvnvxBserw0cqJAtqNv98+kg6vnLRHljMwfwIj6P6mb5cBm843p/deyFD31FfkYODLcy3dJkGWpwiEkBDQwNTQ0PDv9kNQTJCImKmT/+xbvM0UOW7duFS3P51c+ZOOMDwATkRoKQcWCDhSIWEUg4D44HGBmbHhoa/////ZzhwoJHZ0bEBlPyQ0yz2tIor4SOLAwCPL8eSqg8ZhwAAAABJRU5ErkJggg==',
    order: 518,
    base_experience: 235,
  },
  {
    id: 406,
    name: 'budew',
    weight: 12,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png',
    chain: [
      {
        species_name: 'budew',
      },
      {
        species_name: 'roselia',
      },
      {
        species_name: 'roserade',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACY0lEQVQ4T22SbUiTURTHz33WXBtWukWt2mp+yCSlkZn0IXL2rmIicU3sRUhFw6Y2SA0iTpBEQUIbTTOJIjTx9oJBSoaxEPINVChDNulbsaSmqG2a7bnxPHNDwfPlwL3nf86f3zkEAIADECKnULRTqqCMiYBIwm8EUVxeS8Ki6uKzhr1bXbvyb353EQLBsCCceT1V+9bMKXUVXTPSG6GUKhhjwcyC2isZ2/pqwD/dce9BVeVQfssTUclVs88CpdsbtKbFabFQozVUkdKmxaVhABxBIAjiCIAlqjSmQzejcm8+uj8lsIn7phx+j3qn0hu7T2kjF99+45QqCGPByEQAc2LfrWP9KblbooMLKhgf7p6oKzqXYFc7jfr5yV8Evs5xpFEE2V/Z6jIw6z40OsaSTAbjxG8CDz+6m582VZdIRZ8w9ySZ/1fb5/GW214OjSGiIFPjFBSEQfB9VaFzY2Dgkt9SCNFxia/MB06dflRsMQT/BO4aY3W2LGfnz9ASACK4pS6IKF69fONMunnguXbHBeIa1dyfbc2dFBOO9N5u6+mV1pTHmExcFiKCgAjiYDNkD/Znl6jWxh2K0uoh2fhlg2u4NcfaAG867VZVZoVjIbJX2arkGVGsv17mSkqMT9P4bF0Hy4GOvD5RpzFdS7/TvT7jcU3yD845IUTCErHKSYhT7fGWRuFdjHLAnlXUUwmQs7t/1Dnmcbs/n89L37OKcPmdlFkA9OMA6DUfLkidio63ppp0gy/sVgdwTmDlxCUhogBLNwmAAkDoPleLCNXwJ6XtCsaoKFuXSEOaAGAREcmKJv8Btpz4kZ0mI+4AAAAASUVORK5CYII=',
    order: 405,
    base_experience: 56,
  },
  {
    id: 407,
    name: 'roserade',
    weight: 145,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png',
    chain: [
      {
        species_name: 'budew',
      },
      {
        species_name: 'roselia',
      },
      {
        species_name: 'roserade',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABOElEQVQ4T2NkIBMw4tb3n5GBgfE/LnlsGhkb/v9nbGBk/Be6ahXz6rCwfwwMDBgGoGsE8WGKWBkYGH5DbUQWBwuhaPz//z8jIyPjf9O+W808/36k7X/zYS5Dh10VNs1wjatWrWIOCwv7O2XZDm0uJeMrLqr8DEcvvWCIdJyhy8DQdoUhdBUzw+qwvzA/wzXCbEurr+cKNpRZyyVp7rH36OWbDUXR7gwMDA8ZGBqYGBgaQP7FdGrD/v0sDY6Of1LnHK7RVlVvPnr5IsOBDZtrXu+Z1Boauop5NTYbQcY0NDQwNTQ0/Js+ucHhr6h+z8uvP982J0f4MTAw/GRgQI0ePPHIwHLYm4HXdivD+///GRgZGVGjBJ9GsF9grkBPCDg1/mdgYGxsYGBsaGCABwiyZoI2kpLkiEr2ANS9bA90uMKQAAAAAElFTkSuQmCC',
    order: 407,
    base_experience: 232,
  },
  {
    id: 408,
    name: 'cranidos',
    weight: 315,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png',
    chain: [
      {
        species_name: 'cranidos',
      },
      {
        species_name: 'rampardos',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABtElEQVQ4T2NkwAJWrQplDg1d/Y+hsYGRsaHhHzY1jNgEiRHD0Pj//3/GZ4djDbfYLbnsuTdN7sSM9w/CVq/+i24YXOP//wyMjIwM////Z2A+tXXihesvhXmUufa/tI2ca8fAwPALJg8zAMXGVatWMYeFhf09u236Ril1B7+8eTe2rW4N9F616j9zWBgjiq1IGhuYGBggARGb3niWT0zJaO21lw+E1pboXmNg+MIQGsrMgORkZBtB7P/KrsXTNa09Mt59+/3r7PVLbBIcjFsfri73gToRrAbEhmiEmRbQnRynyjcnMiHuHw8nx/8dO/f9b914hkWN+W3Cra1dCxkcGlgYDjT8gWr8z8jAwPj/////zCFtx86wf3zwJyQySkuYn4Hr+r0fvyoXb2WzkuDfv7XT1amhoYGpARqvcKcmNMznOPdNUyRb5gb7J0GLG4+/cL1hZWOXOLl96mFuvYDcnXVGF6EuRHIqyOHQ6Fg/NSBSUFjJsj+irztvVe20H2927fDOOjkVFuJ4owM5suvT0rgaZ878zsDICLYJq0aY4P9Vq5gbr137D/MPOWkVFgYotoEMAgBAjbYP64uWwAAAAABJRU5ErkJggg==',
    order: 519,
    base_experience: 70,
  },
  {
    id: 409,
    name: 'rampardos',
    weight: 1025,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png',
    chain: [
      {
        species_name: 'cranidos',
      },
      {
        species_name: 'rampardos',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACU0lEQVQ4T2NkwAL+/2dgZGRk+A+SQmYjK2XEphEk9u1CtTQjy381Tp22/f8bGpgYGxr+4dSIbPqdvUWTX739LSUn9G6+jMvSLf///2dkZGQEuwIEUGxMm3mGdVa6ye+6SRu9DYSfLfrLKiL05sv/7ZlJon4MDI5/GBj+MzIwQDQjNP7/z8gAM7H1mtEisa1n/3IbMEze+377ublhXgwN+1kYGhz/grwN19jQ8J+poYHxX8/mZyIlkxeZWrA+CUzOKYrds3M3x81F07/5hOjrtcxaePc/AwMjI1wjkk3xk+4dXrhzr83SRAUGPUNThqy8pt+HHzCzyvJ8nimj41T17vXn3zc3JX+G2cjEwMDwL6xu/5SNW7dkJ5j+/h2WVMZgoinGun3XIYaI4OX/VRyFGTnEZG+zM7FZnV2e/gbkV7Af85fdDZZ+emDN9jlNDHxOhf89PCMYI+04/u4784RxztHvDPs3LGYSFmD9wCvIrnV9XdtzBoYGJrDG6KYNUb8eXPHgFNDtX7RkTYBfZmGdyI/LDPM66xjsk+oZvjHyM5w+f4CBm/Fj9Nezi5YxODSwMKLHDwMDg4CFZdT7e/8lz786sUGMgeHuc/emO5OZPt5Y+Or+mcln1zXkOTTsZwHbCApVBoZGloaGhl/z6oNbGH/9S5jVvl7PLyssUVyIpcdxyTLOytqvQr9vbpda2xVyhgGUGNCTXH+Fg4KSKt9b/+RNn9d2+Rjx8rGbnbzDtbO2Z/F9sFpoLOBMq6tWhTKHha0GRTgYrFq1ijns2rX/DNA0CwCDDPnXTTOfvwAAAABJRU5ErkJggg==',
    order: 520,
    base_experience: 173,
  },
  {
    id: 410,
    name: 'shieldon',
    weight: 570,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png',
    chain: [
      {
        species_name: 'shieldon',
      },
      {
        species_name: 'bastiodon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABLklEQVQ4T2NkIBMwkqmPAavG/wwMjAz//zMwMjL+x2UwNo0gMbCGhoYGpoaGhn/YNKNrhGtSZWDI4BQXf3bp5ctNacbGrLPOnv2NbACKxv///zOCnHf30ZP5n14+T5jb3796yrJlYdhsh2sMDQ1lXr169V8GBgbFY2sW3uZR1Wc+e/b8N8a/fzYysbO3xcXFXfn//z8TIyMj2OlwjQ0ODiwNBw788dDSigmODV/Mq6Tx9fbFS9x8vDwMuw8etNqyY8dxJMORNCICQmbD8mWn5WVkJLYuWsCw99zFafvPns2GeQPmTxQ/NjQwMDU0MPwrYWDwZdNk8JTTkXuRsfpRE1QxPOBQnAozCaYZLQpQNGHVCBIMDWVg1n7twMjg4PCvoaEBFKcYCYG6SY6Y9AsA3SR1DwazbbcAAAAASUVORK5CYII=',
    order: 521,
    base_experience: 70,
  },
  {
    id: 411,
    name: 'bastiodon',
    weight: 1495,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png',
    chain: [
      {
        species_name: 'shieldon',
      },
      {
        species_name: 'bastiodon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABeUlEQVQ4T2NkwA0YGRgY/uOSBkniAzg149RYGFrI2b+6/ztRNjYwNDA1MDT8c9bXV2MUFJ3x7fu3WcdOHluxatUqtrCwsN/ITkexMTQ0lHn16tV/TSOqZdnvHjv2m+HLjZOnT7vCbP3//z8jIyMj2N/IGuH+WViSvlbHPTho5oad82ZN7U2+fv26+5s3b07Z2tq+h2lG1sjEwMDwj4GBQXBJf+dhDWNz7bismstNdQVnlVSUPI2MjNQZGBg+YtPIzMDA8JeBgcFs0eKlJ9+8esNwbvu+v/q2Zsxb9+8/feDAHjNcToXZqLlw1twFvz5/M7t+9iLDhZu3/+07e7CYgYFhAgMDA8xwFD+CYpuRkYHhfw4DQ8YfA/FMTnElFoY/r1f2773T1MDAwNQA8QoYYAsc5qZwp0QBhienP35nlPzPJMhXt+HEqoYGBqaGBuwacaag//8ZGBkZUZMf1pTT4ODAclX0wP9QBgaGa9oM/5FtwuZUAskWVRoAu3CUD+wc62gAAAAASUVORK5CYII=',
    order: 522,
    base_experience: 173,
  },
  {
    id: 412,
    name: 'burmy',
    weight: 34,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png',
    chain: [
      {
        species_name: 'burmy',
      },
      {
        species_name: 'wormadam',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB60lEQVQ4T2NkQAKhoaHMq1ev/gsSamhoYGpoaPiHLI/MZoRxYApdXFz49ZX0WXtn9b5hYGAAyf/Hphms8f///4yMjIz/NZwD1bxkFQ48ePNs67otK1MbGhpYGhoa/kANACuFGQKx8f9/RgZGxv+Tg2IOPBGXtGdk+M2gpqGSmpSfM6ehoYGjoaHhJ1QT3AWMDQwMTA0MDP8uWMpIv+VVvf03t4hNQlSC+czli6uTUlPCYDaEOoTyrD6w+guyjWBTtjEwsN8NCJik6GSWZhmW8Le+pYf50Oatc9R0NVewMLHWP3nzZsWRY/unwQIQ7NT9+/ezODo6/lmwYlWLnalx9YcPH3/t3LKdje3zD4ZvP38wfPj0meHElUv7jp495gy1kRGsEWZKclRcubWDQ8evP78YXj999keKjfvvt58/2Y+fOsXw/c+vhPUHdi2EhT4sOuCeXjRvUYuGnk7hsU3buZ7ee8Twj+Efw9v3b+sWbF3XjBzPGPEYwMAgoK7LsOMFpykbFx/vr4+vnkxYdunWigYHB5aGAwdAUQMGcI0wgXxPy8m24q++b7v+86S1Imfxu198raXrzm4lqBGeSkJDmbUefBV9/u/X9/dn93xETz0YNoLTQygDM+NqBnCaJZhWsSn4z8AACXYs6RUAEUjZEALBp6MAAAAASUVORK5CYII=',
    order: 523,
    base_experience: 45,
  },

  {
    id: 415,
    name: 'combee',
    weight: 55,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png',
    chain: [
      {
        species_name: 'combee',
      },
      {
        species_name: 'vespiquen',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABaUlEQVQ4T2NkIBMwkqmPAZ9GxoYGB+Z6LdH/DNe0/zM2NPxDtgRDY0MDA5PkM2Pm9Flnf6O5BqT2P0wMRSNIU0MDA9zkWZmGngICbPnffvzpS+g/u2tVaChz2OrVf0Ga4RpXhTIwh61m+DspgsGQ4TeDC6+IkLO4pKa7gjgPw8V77x9Fdp/SYGBg+A7V8x+hcdUq5rCwsL87JsT3O3m7Frx49oLh6v71fwV52ZjvPPl8Pab/jBEDA8MPFI0wJ5YyMEhYtIXc+cokzMnCzfFL8NM1Jo5/P9luPvp6K2P2WS0GBgaQM8F+RfYjWKDClmGzsl+nz6tHdxg4n85m+C/p8vjt85dn29ZdDmxoaGBqgIYuXGNoaCjz6tWr/wYwMCjbVBeXsP/9/OTuydWmE/a/T2RgYGBnYGB4gTM6GhgYmBoYEKGKL3FgxON/BgbG1atWMV27do2xoaHhD9RPIHX4EwC+SMebcohNuwAGRYEP/9JsrgAAAABJRU5ErkJggg==',
    order: 528,
    base_experience: 49,
  },
  {
    id: 416,
    name: 'vespiquen',
    weight: 385,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png',
    chain: [
      {
        species_name: 'combee',
      },
      {
        species_name: 'vespiquen',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACH0lEQVQ4T2NkQAP/GRgYGxsYGBsaGP6hyyHzGZE4jP9XrWJiDAv7CxJbtSqUOTRs9T9GBob/2AyAaQTRMAW8DAwMPAwMDM+hGpANhxvC+P8/AyMjI1gT/761Hb18rH+d/zEw8T968GjXorzpRZsYGJ7B1DQ0MDDBvMC4v8GBxbHhwJ+pYQzFbpkzem4++8ggJi3OwPfxNsPu+V0FuRt+T0R2KigMQM5nbGhoYGpoaPg3M8dB4wcDw56f4i7Sn59c+GEq+4fj2uV7BRVn2Nf5S33ZwcbJ8YxfWChmzvK9L0E2g93//38DEyNjw7+t3dHbNRycPK5fe/Tz/9O77M/vnNvAoOvAoyon4nLq9A2GVWuP1p29/bTZwcGBBaQRGjBabItyBS9aBvtoMHBw/b29Yzfz/98/GLbd//NfSELsq5yYGM/RUzfrFqzb3dzQ4MDCCHNzQ2goGzvH/dPmGpJ6777++vXuwxdmXQUhhn2XXjFUr3jD7G0l9M7OQl+/vGvOE5D3QBENDqkUO3VFLyvZu/ycLIwfvvxg4ORgZ2BlZmA4duMtw/LrP4/xfn2advrOu6uhoaHMq1ev/ovkVAamJCetXaysDJ9/f/8+n5udI42Bhcn1w8cf8YuP3V0BCguYJhAbOXJBfBYGBoY/0OBnZmBQFGFguP8SXRO6RnAggSI73cSYZdbZs78hGhiYV68Gp1uUpIduI3LSg3kDa2IHAEWD2JtedIeBAAAAAElFTkSuQmCC',
    order: 529,
    base_experience: 166,
  },
  {
    id: 417,
    name: 'pachirisu',
    weight: 39,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png',
    chain: [
      {
        species_name: 'pachirisu',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABg0lEQVQ4T2NkIBMwYtHH2NDQAML/GhoamEA0NrPRNYL4/0EK8WkCySNrBGtqaMjiYf7DLF7bMvluTVqackCa8SMTk/Tf6LbCNTY0OLA0NBz4k54Y1vzp+y+bhAm8Pitqvj+eP+d6PAPD1c1pacass2adhRsA1/j/PwMjIyPD/8rKRFH+H+9X8Xz+pK1loi8qayC9UtWiJAJqI9wrSBobmBgZG/79/79Z+szaY7cf1e/nlI5UZOC3lryq6dhnzMDA8BNmOIofV4WGMoetXv13ZrCvhry/+kVuIe7/go9fsF9cvDMr+tiD6WfS0lhNZs3CdGpoaCjz6tWr/zIwMGgvm5J9QUJOlIV1wWmG9++/ZPvtPzhtv4MDi+OBA39ggYQRqgwMDMxF8Y6nOP5/Ffr69Dvbd0Y+y1l7jj5qaGBgamhggMcpRgJIS0tjnXXgmhbDrSNXNP3crMWZfl06sOHAB2jUgeMYPR7xJT54aOLVCPXvv9DQUKbVq1eDnAe3iVQbMVwDAHbwmA9ZV3+TAAAAAElFTkSuQmCC',
    order: 530,
    base_experience: 142,
  },
  {
    id: 418,
    name: 'buizel',
    weight: 295,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png',
    chain: [
      {
        species_name: 'buizel',
      },
      {
        species_name: 'floatzel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACCUlEQVQ4T2NkQAL/GRgYGRkY/oNokHBjAwNjQwPDfwYGMEYBYAXIoKGBgamhgeEfNgORxeAaQ0MZmMUeSgtMPfX07RZvG8GPDAwMwswswic+HXjQcIDhD8w1MM0gp4BtWOdupv+PgdU/ZOfRpuWuZitff/m+T5qHx/o/I8v5kF2H+9Fdwggzaa2nuYwgE1/DrlenVjCyyeg4iMikMTOxvL785tF8NlamZ9n7Lu5aFRrKHLZ69V+QrWCnwgTWuTtkv/ry2iRDSmHKek6OM/fffblVtGWnVp25cv2jn3/7Flx48AGq5z9YYwMDA1MDA8O/6VZ6Yr+ZGZft4hT8xcn/Q+Q3Ow+z1fXnW9i4mFVXP7nUePQ+w81QBgbm1QwMf+GBA9PMwMAgFW1psqfQX1H21KVPPBfuvL0TKc7V47j50EwMp4JsdXBwYDlw4MAfdWe76HIFySVGUrx/Dz788P//+w8sOn/+h7ps37tmv4MDi+OBA3/gfgQxQkNDmVevXv3Xy90lOFT0/yI5Hl6uzfffPpRkY/38SFho09QFa6obGhxYGhrQNCKlGqZpoSYT3/EzfBQ481XrrJR41lUxUYbTC1a/wJoAYIINCQ4cVxcc+A0KgIU+1nI/zt1/k/7s2TdYaMITAHqSg/Fnphmzps86+xsc6g0NTA0NDSjJECOtQjWCxP9DQxprIgcAx/fXD5OmIpsAAAAASUVORK5CYII=',
    order: 531,
    base_experience: 66,
  },
  {
    id: 419,
    name: 'floatzel',
    weight: 335,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png',
    chain: [
      {
        species_name: 'buizel',
      },
      {
        species_name: 'floatzel',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABYUlEQVQ4T2NkIBMwkqmPAU3jf8aGhgPMV7Uc/q8OZfjHwMj4H5fBSBr/MzIwoCpcteo/c1gY49///xkYGRkZUAyBaQTR/xvm3+e4/+6T27fH19ieXN+z7/jOue/w2tjQsJ+locHxT3L5Sl81DZVN71llGH78/ruT6/fb77+/fTjZXWDbsWrVKrawsLBfMIOgNjYwMTA0/GNgYJCcsuDQZRZZW2Hmb08YmN5fZLhz994qe9WN/F+/CfcEp63as2pVKHNY2Oq/cD+GrvrPvDqM8W9Sx8k4JoZ/bYw/Pki/fXbvwYODEw8H+qm/4eV6N6Gg8egjmH9RQhWmOcQ/abuac4LHuzfPGGY0RbQwMDDUgpyIHEjIGsEBlJs7if3/t4ueGsbWItcvHfw0dcbCBwwMDKdCQ0OZV69e/RfNjwSTAdhQZFVYUw7I9NDQUAaG1asZwlavBmkABRwKoFaSI+hkuAIAGXyPD4TkWKsAAAAASUVORK5CYII=',
    order: 532,
    base_experience: 173,
  },
  {
    id: 420,
    name: 'cherubi',
    weight: 33,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png',
    chain: [
      {
        species_name: 'cherubi',
      },
      {
        species_name: 'cherrim',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABx0lEQVQ4T2NkIBMwYtHHyMDwn4GBgRFE4AQoGhsaGpgaGhr+gVSnpc1kfe+S9m91GONfbLphGkE0zAZuS6c4geP7Fj3Fb+P//4wMjIz/fYs3i+ioyU28e2zDy5/Pz2m+1iso1ZQV15mbr7WKoaGBIfTqVcbVq1eDXAO2gBHuPK+pEi1O3Dee3L3P//E3F4OKigwDu4DE+ZoMZyM0m8GuAxFMDAwMIJPUomPK96vouEhxibL/fHppH/uTkw0N605oT7ayUvJmZhdS/PHl+fzTp3c9BumBB05o6Crm1avDZJxCaqfwMP/zeffhy28eAcGPL6/tYhUSZCsWF+XTunL7w8VLlw4tcnBwYIFrbGj4z9TQwPgvKbt7NausWQgr07+vL+9f5l49PW/3/fMFaV/f3z938eZnj+jMfadWrQplhmoEOZnxv1doloShIs82ITntJdIifztqC2rnCGl4KBQ7zA0Q1fMwe/3gytmwoiffwYGD7HG32BLuXbvuiYd6G7LKKsiZntv3bw2v5GPlzcvrrqJHDbJG5LhEUfcfFGWrw5gYw1bDEwNGkgNFT319/f/Vq1czhYWF/WtoaABFGTg1IQNsaZWoZA8A+/OsgZ/o7L4AAAAASUVORK5CYII=',
    order: 533,
    base_experience: 55,
  },
  {
    id: 421,
    name: 'cherrim',
    weight: 93,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png',
    chain: [
      {
        species_name: 'cherubi',
      },
      {
        species_name: 'cherrim',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACLUlEQVQ4T2NkQAMNDQ1MBw4cAOE/6HLIfEYkDmNoaCjT6tWr/4LEQAY0NDT8Z2BgAGEMgKwRLBmR1CD15e1z9y0bZ86HqmZiYGD4h64TZAszyBZb2xB/RsZ/nqLCQj6/vn/7eeXJ40AhdvaHZ8/u+ejg4MAiKir6H+YakCGMDg4NLAcONPzx80udw8HBlfz+DzsDKyvrv4/3T549+oPJkeHSrq/I3oE5nZGB4T8jAwPjf9/A5H2ibJyO2rYe3158/srVXRl+qqGhwbqhoeGPt3eSCyPjn09btiw6BbIMpJkRGgj/UoOKZojqGqW/+/SW4er1sy8u7lg0U9vS98KPH1+9BQWFHnJysigzM5/P27Tp5meQZpBusAkg52i6FsT+untokYiw6CtmHsHL7EyMOoz//ol///F+9fHjH84wMJzq+v+fgZGREexMBgaQ50Hxpi3J4C6hHbeDlY3txw8GNmaGPz9Y/3579ePwkffhO5cJVUtLcOzQcVpd//9/KDMsOmBBzhwfE/9LVlZkZUv7wRdGBrypsgaeTzbutXJ+tqHa/MkLQVYz7w2rwLYix4+pZXidqZ5w4+d3x+OuPtJz+3ly4Tyzqi0ZP7+9ZVw2IT4MpBbZqTA/sjs4BFVevf/l5OuHu7abm/uonjy55XZw5pyAn79+P9syN/PU/v0NLI6ODeCkiJFycKbP//8ZGRgZ4ckPRSNqCmlgYmBo+Be6ahUzw2oGhtWrw8BpGAYAhaHsZTGKg5IAAAAASUVORK5CYII=',
    order: 534,
    base_experience: 158,
  },
  {
    id: 422,
    name: 'shellos',
    weight: 63,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png',
    chain: [
      {
        species_name: 'shellos',
      },
      {
        species_name: 'gastrodon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABGUlEQVQ4T2NkIBMwkqmPAafGVf9Dma8deM3Y4HjgDzbDsWr8/5+BkZGR4T8+12BobGhoYGpoaPg391RS2JdPPwTyXZbNwmYQikYkBeydJ2KecHKyiGxcflZ5b8flew3/G5gaGBv+wVyBorGhgYGpoYHhH0OuCnuWi8bl78wMIvOvPFdkqDj7EeYSrBpBARLGuPpv9x6/rhxd4dKLL78xpF97l3ExYvfMhv0OLMgBhWwjiA0OkMxJgTeiNATUH377xzD/2pOpe6v25uDTyBC6KpR5ddjqv8Gldkn3/glOVeH+9VHk40u36RPPXQoNDWVevXr1X6xORQ7+Ha0MkiwMDP9cqhleEh2PxKQmnCkHFMIgA8ChjAWQnVYBAzpzD9XfzVgAAAAASUVORK5CYII=',
    order: 535,
    base_experience: 65,
  },
  {
    id: 423,
    name: 'gastrodon',
    weight: 299,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png',
    chain: [
      {
        species_name: 'shellos',
      },
      {
        species_name: 'gastrodon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB/ElEQVQ4T2NkwAH+///PCJJiZGT8j00JWBIf2L9/P4uDg8NfdANQNDYwNDDVh2oxMq4O+8vAwMDBwMDAxMDA8A1qMEgt3Ha4xv8gV0El7j5/lMnHzlX36/fPa6cunuucv2fnlU1dU54xgJwPdTpY43+G/4yMDIz/Q6dO5WHOztbufHCvX05e0RIk9/njT4aVGzd0pMZHVK5atYotLCzsF9jv/xsamBgbGv6tdUiRMZMV38315q/GYTO2u2ze1srMn/8y/GHgYWD+8SHEw9tvLcTJoEBj/M/4PzSUmXH16r/L3VNsvQVkDj0U+MdQL/z2CDP/fW5LORPllUce9/66F2ciI8Vw6dTpx+0vL8V9BWkGhTXYb1NDQ3lUXvNV7Of5cv2kq857E+7vBf8/3Ph17/6HbC6+zgd//uoxPLuzLuLQusiVDg37WWCBgxJiDImm9mFW5qvlJaVFf754e+3XJ+Vrl/erijFzHEg4tLrlPgPIe7A4bGhoYKqvr/8fxsjI+rAz7lasv7P8y2tvGPYfuPT66KSF0gwMDL9R/Igc+aGrQplXh63+W9qVGvyPgyvz2KXHB901RMUbSmbmgFISyE+ggAGTaKkG7ORjfQycPzcxMDseYPhyv4GBQ7GB4QdULWYCgBmAnBBgLkDXhM1GmH7G/xAToBQiqcEUAAAX+82UuR9sKQAAAABJRU5ErkJggg==',
    order: 536,
    base_experience: 166,
  },
  {
    id: 424,
    name: 'ambipom',
    weight: 203,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png',
    chain: [
      {
        species_name: 'aipom',
      },
      {
        species_name: 'ambipom',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABnklEQVQ4T2NkwAYaGpgYGur/MzAw/scqz8DAwIgu0dDwn6mhgfEfSDw0dBXz6tVhf7FpRtHY0NDA1NDQ8I+BQUO4vj78e2Nj4zcGhv+M2GyGa1y16j9zWBjj34imHbaKchLb1py7e/P2pOBABgaGx9g0I2z8/5+RgZHxf07fzuNcfAIW31/dY9CSYn3Pz/ZLMyoq6iXCNRCHwzSCaHBAdM9cckNCmE+dj42RgZNfcCvrv98Bjo6Of/7//8/IyIgILLiNoaGhzKtXr/7LYGChkObstPjnf36jhX3lcgwMDG9DG1axrW4I+4UcSMiBA7a1deLMKA4enoL/TFymO2/8ufb359eP3HcX+G3efOANsnMxoqO0pjmTgZ23T0SYl+PBHxWGh/fuXtw2IckAahvcS1ijw8wlPEdCQqhKQlr23cePn5esnNHe0dDQwNLQ0PAH5lwUjTB/VjV1x7x+985MVFRQ9uvXn0cmttX24tUIM62ss5OX6/v3nwKSihIfBDlfNIShBgxydOBKkjjFMQIHKRAYGhoaGBsaGkDxi5HYAYBkpQ87A9KbAAAAAElFTkSuQmCC',
    order: 271,
    base_experience: 169,
  },
  {
    id: 425,
    name: 'drifloon',
    weight: 12,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png',
    chain: [
      {
        species_name: 'drifloon',
      },
      {
        species_name: 'drifblim',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACLElEQVQ4T2NkIBMwwvStWrWKOSws7C+InzP5fN+U0zcOMyyK3MDA4MD8///+f4yMjP+Q7QBr/P//PyMjI+P/g0f3Fx+9w+11/oeS0+tzmxlqohUfM7PzTXU0N+r8//8/E7JmsEaYbet3bDa7cP3Nyb/vvv8V4fnGrGZh8fT7H0brYGfrh1g1gjQ37G9gaXBs+JOc5Ncrzslc9PHjZ4apS34WMTAc7p85M401PX3WbwynggRCV61iXh0W9nfSkrUyF689u/LjFzO/nKzcj7V3uV1vTXI8whD6n5lhNSM4DEAAFjgg+j/Y5oYah7fiwTvfvXrBYsR7genEHb7tq6dle/3/z8DY2NjA2NDQAA4kkAawpoYEBo57LPm1vNxskdLiXIqv3v/5K8D1m/nT1z9fjz4SaVAS/G717khzys6rDO9AeuDRERrKwCYoWmbNx8fay8vxy/DbL7Y/nGx/mJj///777isz68WHDFf2re7WhbkUrHH//v0sjo6Of67cuhu85eiLNY8vbv4nLfyT6dUfbQZNdSWGNVuOMPB/nBW8ZuuTdQ4ODiwHDhz4A7eRgSGUmYFh9V8hu8JiQ64nPdLCP25/Z1KUkFE1+r9859mrL45OtkIKl/8YgdM9sWf34wePf0zqn+jHwMAgGBLiOYeZidlx5aotgtg0wkKZadbCFSqqJrrPHLW1v4AEpy9a3Pfu9Zv31cWFzbAUhhwdGEm9oaGBqaGhASSOkkZhCgFWYusRAkKW2gAAAABJRU5ErkJggg==',
    order: 537,
    base_experience: 70,
  },
  {
    id: 426,
    name: 'drifblim',
    weight: 150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png',
    chain: [
      {
        species_name: 'drifloon',
      },
      {
        species_name: 'drifblim',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPklEQVQ4T2NkIBMw4tEHkvuPSx6rxtDQUObVq1f/bWhoYGpoaPiHTTM2jTCbmBgYGLBqAhmEohFmU3hIfDQzM9OEL9+/1m7atGoGTBzZZrhGJEnpzMzS+0xMDKyvnj58snrDKiUGBobfUEvgfkbSuIp59eqwv83N7RPev/+c////35+3H71n2fJX3oRhQ/WF//8bmBgZEf6Fa9y/fz+Lo6Pjn/7+SYvUlBViz199+FOb5y67tZ7Iy83bN1Ykd5xegNWpq1atYg4LC/ublZVnIyLAd/j763sMaZ6cDMICvAx7Tr/cGla+3Of/qlXMjGFhf3EGjigDg11AsKOosZGx8c4zD/eb6qh8qWpuP44cPRjRgS0EQTb8//+fkZGRETNwkN0P0gzir1ql/b+x8QATA4PDP/SEgC/J4U3FZGsEAFAWiA9lF3faAAAAAElFTkSuQmCC',
    order: 538,
    base_experience: 174,
  },
  {
    id: 427,
    name: 'buneary',
    weight: 55,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png',
    chain: [
      {
        species_name: 'buneary',
      },
      {
        species_name: 'lopunny',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACOUlEQVQ4T2NkQAL///9nZGRk/I8shovNiCQBYoM0MTY0NDAeOHCAKSsr639YWNg/qDiKGTCNYE3btm1j9/Ly+kmUjTDnpaWF8qup2a8/fOzczz8/P70XFJY46exoId3Rsar55s1Nn0EuQbaZ0cHBgeXAgQN/3HwTAvSVONczMf5kePeVh4Gb7TsDn5Aiw6M71wIXLF+yITc3l33y5Mlw1zAyMDQwMTA0gPzBm5vkcYebR1Ds9SeOX0riHxlO3xNh0zNQu3D1A0/Y2u6M26tWrWIOCwv7C/IKPHAaO6b6sv+4vuj5qx8CTP9//GNi+MD08/X3P/ZWaiyP3rF+Km5Zas7A8PZGQ0MDU0NDwz9GmCnLli1r+fvnX/W2HYd+21rpsX7++e+/vuBrBlu1z3///Wdl2XL01ffIiodLGRgOpIJtbGjYz9LQ4PinuaG1i5+Hs/Tc1Ts/TPSUWLh4+Ji/vH3F+P7ZTQZ9Rdbfj9+xsOYuf1DFcGdXe2hoKDM8cCwtXdOV5BVm/Pn3m4GPi5vh988fDO8/vH35h51fgJ/93+P/bPwq5/Zv0L/55MklsMbQ0FXMq1eH/c3Lq/Z/9eLFlLu3b81mZmHRO3F6/6f29s7Pf379zjt6/EaxrLSQ5Oy5k7oYGBheg1wKDxzjtDRWXymp/w0NDX9gCWDatGlKnJycwomJiafRUxhykgPLgZyxevWqfwwMiDTb0PCf6cCBRqYDBxpAUQFOy+gaUVIHKOi1tLQYYXGHnBQB/ij1FGimMgkAAAAASUVORK5CYII=',
    order: 539,
    base_experience: 70,
  },
  {
    id: 428,
    name: 'lopunny',
    weight: 333,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png',
    chain: [
      {
        species_name: 'buneary',
      },
      {
        species_name: 'lopunny',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABHklEQVQ4T2NkIBMwEtAHkv+PTQ0hjTjNxaeR0cHBgf/AgQMfiLKxoaGBqaGh4V9seLjmp2/f4jZu3lz5//9/RkZGRhQnY9iYlpbGOmvWrN8BQSG1f3//Zt+8eWMNTAzZZhSNoaGhzKtXr/4bnGapwc8sduEv28djCyce8GBgYPjFwMCAElBYNUbn2kwRYxfJ/sL4ieHorbdJ1zZenO/g4MBy4MCBPzBbUTT+/8/AyMjI8D+0xHYrBze716tXvxg+Pv9UfmLDhS6HBgeWAw04NMKc6mqp58yly7fhz/c/P16cfWV89tq9Rw0NDEwNDQz/sNqI7PmgGGNJ5o+/OVZvvnSfqOjAUPSfgZGBETP14EwAIKeBDEF2Hs7oICW9AwC3vXIP3U/MVwAAAABJRU5ErkJggg==',
    order: 540,
    base_experience: 168,
  },
  {
    id: 429,
    name: 'mismagius',
    weight: 44,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png',
    chain: [
      {
        species_name: 'misdreavus',
      },
      {
        species_name: 'mismagius',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABVklEQVQ4T2NkIBMw4tHHxMDA8B+KMZTh0ggSB2kCAWQ23ABsGsEKLe3sdJn+/v149OjRR9g0Y2g0TjNmPTvr7G83N5ea3x/+bt5/av9FBwcHlgMHDvxBdi+6RrizDOxMWgQk+M8cWLV3A1jDfwZGBka488HuhwGIJgUGCWV5/UoHNZO8G4/ufzr66XU8w/HLEM1I/oVphNnEnlgRs8NKz8LhyOGD/6RlpBgvPLnB+OHTz5ZjSw/UhoaGMq9evfovzASwUQ0NDSwNDQ1/Svti65RlNBqZmVh+8/Pxs157cpxh5+4zE44vv1rY0NDA1NDQ8A9FI5IzeB1C9fXdnHwPn7ixaws/z99OU2ur03lek38i+xNn4DCYMVQrsKnueXDk9kmooZAgQvIsaqpoYGAK1QplXB0G8UvaTGPWWelnf6MnHZxJDhwQ2qv/MzQwgP1EtEZsipHFAHi8fA8+auzIAAAAAElFTkSuQmCC',
    order: 281,
    base_experience: 173,
  },
  {
    id: 430,
    name: 'honchkrow',
    weight: 273,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png',
    chain: [
      {
        species_name: 'murkrow',
      },
      {
        species_name: 'honchkrow',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB5ElEQVQ4T2NkIBMwwvQ1MDAwNTAw/IPyYeL/kc39z8DAyMjAABaDawRx/v9fxdzYeO1/Q0MD2ID//xkYGRkZ/q9aFcocKqrNyOjY8AdmAbJGYQYGhrcgDaEMDGyrGRiYGBgYfpyZmcZqkj7rN9RmFgYGhj9QmxkYNoarRKu4GU/5KSmWauQ1ec3+/LDi35/uiTG+enLIdeuLrSt649SM9QS9P168G3dz2ZaU6HMMZ8E2ro7Ri/Ms9lrILczNcOfay5M7L0kyiXFwcTG9vz7VwIZDXYCXI0tYmp/12+O3DGtT+xLjLjMsYPy/KpSZMWz1331LE4IcTOXWPjt2mWHddRWGX98//GR5feRthq++FLujLsOn118Zjh64meyVt3YZyAsogXNtR5LL7TtsWceOffEWZv/DJCb4l8XGlusZl5Tog/sPP/Rbh81ZAw40SOiCAeP/MzNZGE3Sfx9ckF7C+pOz+9yeewxiKj8ZxDWkNtnHz/cHa9jfwMLg2PAXFCWIeGxoYAJFw55y68Y/AsKmHpNf3Z4TxW2tKcbJtbpsi9UEBoYPyHGN4lT0RLTfwYHF8cABAQYGhjfIkY+RACCRDnJFI2Nj4wGmhoYDf5D8hJKK8NoIsqWRgYERKSnCHYVXI770DwB/mbEPy//ZfgAAAABJRU5ErkJggg==',
    order: 279,
    base_experience: 177,
  },
  {
    id: 431,
    name: 'glameow',
    weight: 39,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png',
    chain: [
      {
        species_name: 'glameow',
      },
      {
        species_name: 'purugly',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABjUlEQVQ4T52SzUtCURDFZ57pKwlCCkNJqIggaaeLyEDcBGEUQgaulaxNbVvOxv8gKmkV1MbWbstH0iIMIpEoMlP6ACEDA/vSN/Ee+jAwBO/qMtzfOXPPDEKHBzvkoBWo1Lgu2Hz/46GBRCy43QnB4/FUUysOvcN6UUMCOeYHnT/GciKR0EmSJBORrCiooAIRoVoAmDEBJN/q8gYA+G62YmZEREZmFhBRjseTzn7zkPkgOGxxzzlMucfiR7/ZOO4ev4mMrUFRktKzpVI56/O5sioci7FueRlrZ+fpaYOu93igEBT1lWP4EUZAxBykHtdLE/7IlyiAJZmUXIHA/JnCqK0ysYCE8kJob3DDvr1l68ssdaGlki/mjXefqztTfrouPFyder2zl1qrjf5T0ajeGQ7/AMBo/qgn280WSN1X372bhQkAeFIN6v/TwmnATCQgkbwfsi2Wa/Lkq/h0SLvwkMlkDHa7vapk0XjbdgGYARG1uWoBtwRPCLpunx34Yr2oEYHm0jyWto7/rWTH4C/lTp9jtuvOHwAAAABJRU5ErkJggg==',
    order: 542,
    base_experience: 62,
  },
  {
    id: 432,
    name: 'purugly',
    weight: 438,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png',
    chain: [
      {
        species_name: 'glameow',
      },
      {
        species_name: 'purugly',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACIUlEQVQ4T22TX0gUQRzHv7O7d3sm53FdZdmfQw21gyIokiT0xOQ46yVolywooocefElIfAoGIpDSXoLiIOjBJLjpKXwRobuCsCL6A/mQ2ampUGRnp2ept7sTs7rnaQ0M85vfzOc3v39D8O8glFIxLQAEAOecixWEEO5ctxXO4OCEYOUwrmmyzpgpIAcolAtAYZXwrq6YbzRXs/n+tYaxAptKPP7cr+v1Pxwv8qCmaTJjzDxy8vLRM4e9T/Z5XyQyy0M7n6Z7Zq5caN0/MTneGY3WMc65TAgx8yAFJAqIuDB4He92FzcctLY8w4dfMQRrmx/X1VZoqx7YcdugA91o2tbcP76jPFKRDZWV43z2T9b43Ps9dg/ofQB8vQgsrkuOA3a3bK0f/FIairZ+nAr6q7qL3EtvH76U+9wjgbbqkhTtHPj5WtMgM4Y1VxM0rDTSpAG0nD0VWerbHiCoLJMxMT2XvPNoKAJg2UmMXRo79XHIug5z4G7lodKA/MbtUrGwkDM8Hpf5acqjnm7/1gNMXg2Hw0oyKYyvggkKpZHCiLV7Ow745m/mimAtWpDIPLjqBxmZ8WU6mBScTc1muOiDjck5pqpVJ6pxKz2N4yVNZFNmGMYel6EU15j9l8b85/AqPbcOFE87CiHf1tS92ZQV8O/K/ZbckNsY3heWIu/qWsuBgIIQulLPvJ6LNrV3/+9V5yKlkELDIAyAqLrOYG78C38Bn+LRD8wLpkwAAAAASUVORK5CYII=',
    order: 543,
    base_experience: 158,
  },
  {
    id: 433,
    name: 'chingling',
    weight: 6,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png',
    chain: [
      {
        species_name: 'chingling',
      },
      {
        species_name: 'chimecho',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgklEQVQ4T2NkIBMw4tf3n7GhgYGxoYHxH7o6nBr////PyMjI+B+s4f9/RgYYG2oCpsaGBqYGBnumhgbHP+IMDNzJ3YsU20rjroSGrmJevTrsL8xmVI1oJufNObbpxZd/jqsK6rIYGPYtDl21inl1GEQzXGMDyKaGhn+2xUvdD/fufLVud17Fey7FMH1JNoZvz28ct7M2tQY5GqrnP1wjzE8Ltl/aw83JZvL0Bye/g4bAH315PpYXT54yTO7tMW6bMOHcqlWrmMPCwv6CNcI4kzvKdT0DEy9JSkkyXLl1/6eImDT7pxf3Xt+8dmtBRHxsOTYbQQaAQ/DAljWzhAQFUu89fsjAI6jEcH73Kv3SnumXkAITrA7u1P3797M4Ojr+qWrt1ov297z44f0Xhke3r5VGJiX1/N+/n4XR0REUKJDowRY4c6ZOVWHh4NDi4WIXD4mMmcvAwACKfLiLsEYHSqSD4/0/EyMjZqpBsRFmEkjz6tWrmUB8UOjhSpIE0irulAwAelqgDx6qdhUAAAAASUVORK5CYII=',
    order: 458,
    base_experience: 57,
  },
  {
    id: 434,
    name: 'stunky',
    weight: 192,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png',
    chain: [
      {
        species_name: 'stunky',
      },
      {
        species_name: 'skuntank',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABcUlEQVQ4T2NkIBMw4tHHuCqUgSlsNcNfbGqwalwVysCMSwPMEAyN/xsYmBgbGP6BFJzOkfA890t6T/qss78ZGBhAav9j1QjTdCOJQZ1HzWvlx0cXebWn8WsyMFz71dDAwNQANRCkGcXG/6tCmRnDVv892ey30tjZNezUsS0nrUp2WiD5EW4risb9DQ4sjg0H/mybqhItK6C35P3rS8efcNqVff/AcJH3/2emsIrVH2FOxmpjT05tVnw839TdW94u+i7wdb+yEl/Bw8cfwuJzpt5qaGhgamho+IeqsaGBibGh4d/+8vAdlhHm7usXHF33/fG5L3J6Gs9dGrZXnEkzZjWBBBTCj7CAKTbkkA8zZzzHLGz859vLa2JnHv3rL9r1oQjqT0w/wkKtzU1B4+tPRt3Wg/e39Xop1N3/8n/GlEMP76PHLapTGRgYGZHiChaaDQwMTA0MkLjFnQAYGBhXhzIwXVvN8F8rlIGRpCRHTLoHACeImw+nDKITAAAAAElFTkSuQmCC',
    order: 544,
    base_experience: 66,
  },
  {
    id: 435,
    name: 'skuntank',
    weight: 380,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png',
    chain: [
      {
        species_name: 'stunky',
      },
      {
        species_name: 'skuntank',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACIklEQVQ4T2NkIBMwouv7/7+BiZGx4d/8BAaOxAUMP3CZi6LxzExjVpP0s7+3hjJ4fGGRjwlf/jDm/yoGZsYwhr/oBsA17t/fwOLo2PDn7rUZqkwrZp44f+v+26AVH9RAGhoaGJgaGhj+IWsGa/zf0MDE2NAAlng4JfLqf2E5rctnFjEYB3AennntnkdjOsO3VatCmcPCVsNtZmxoaGBqaGj4t2pxprqalFjO11sPIj7ySQoz3t/PaGhz8t/Re6qqwUm374Et+P+fkZGR8T+IDddY09WlamSkcFPiwQpGGVPrf1++/WH6//ruv80r7xmo2yl9O5E+i6OTgeEqzCJGhoYGJoaGhn8enavUd/wW27j475x9oUX+mRdu/fx/4yk345MVE+L0vY2zxFQUPr1//LrII6T5KjjkQbaCvTmnT6gh5Zfk2d2/zYy0peedfcDwp/Ig36+M5yF7ZZSjfCUdrK7L6efoMTAw/Pn/n4ERFqqM//8zgHj/r5XorNX09w36/p2R4cXx3f+/iXxkfHL4DcPfe+9SvU8xzNnf4MDi2HDgDzw6IPoY/i/w5trFx8UuK8X2/gk3L4PLkfuy298xsx+u/hbTzXCg4Q/MhZDogGpaHMQl+ZtJzC9pjcJCBoYDPzp91NpU+D99CF76out/AwMTYwNIKRiD/QcGMM3oKaTBQUFAS/TB57DV4AQA1oSiEcbf78DA7HgAksRAqkDOx5ZeAaol5o53uhduAAAAAElFTkSuQmCC',
    order: 545,
    base_experience: 168,
  },
  {
    id: 436,
    name: 'bronzor',
    weight: 605,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png',
    chain: [
      {
        species_name: 'bronzor',
      },
      {
        species_name: 'bronzong',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABI0lEQVQ4T2NkIBMwkqmPAafG0P+hzAyrGRhWh63+x8DA8B/dAmJtBKlD0YxV4yqGUObDm5mc/3xnfcgSJvhgMsPknwwMYNfBNaNq/M/AyMAIkYzdG3Ti79e/Rssuv71o9kMg5VTzlosMoSDnr/4LkkfR2MDQwNTA0PDvZGiT5a5P54Kvq/0Itvsk/mody8PkXXMPXAkNDWVeja7xf0MDE2NDw79VsXlycqyCD8SYORjP3rp/9tvv3+xPjn10q2ZY9xxmMIqNq0JDmcNWr/7bYOmnYimqeEyCj1/03KtHeYm7FkyGGYocsjhCVUQyR9ZQesrj3ecZGBhAfiIuVJFNbmBgYGpgYADFJQrAaiPIL1qhVxnDVmOPfIxQJSX5EZtyMMwEAHBIaw8++B/qAAAAAElFTkSuQmCC',
    order: 546,
    base_experience: 60,
  },
  {
    id: 437,
    name: 'bronzong',
    weight: 1870,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png',
    chain: [
      {
        species_name: 'bronzor',
      },
      {
        species_name: 'bronzong',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABRklEQVQ4T2NkIBMwYtO3KjSUWfS1NqPjgYY/uMzF0Pif4T8jIwPjf5CG0FWhzK+vvWY80HAAwwAUjQ0NDUwNDQ3/9vtXuDB//itjt697AZKNILVgA0EAWSNc4kBA2eU/jH91Wn8daXopx3HF+QHXpsnbt/+EqgdrRmhsYGBiaGD4x6CnJ+afJ376nyizHPt/IYYnJ15cPNGxzwDJIjSNEEPAgnHdxedEv0kaPvx/leHNu5eHD0zaZkeUxo6IVRc4OQT1b549yvCR+dmFpRdmGeLTyPC/4T8TYwPjvxL/adsFeMQ8nr+5yvDt28dt8w/3ecMCDlvgMMAkU5zr83T+vGv69ucn/4XfjJ2rTs2sQI4m9FBFiesqLgZJcWVHqfzL+8+iOxOnRnRnIUcDVqciW9nAwMCkFRrKGLZ69V9syQ5rWiUm3QMAy5KFD8H/TT4AAAAASUVORK5CYII=',
    order: 547,
    base_experience: 175,
  },
  {
    id: 438,
    name: 'bonsly',
    weight: 150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png',
    chain: [
      {
        species_name: 'bonsly',
      },
      {
        species_name: 'sudowoodo',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABK0lEQVQ4T2NkIBMwkqmPAafG////M64OW80UtjrsLzbDCdoIMoCRkfE/umYUjf8bGpgYGxr+7XbvnCzIx2996/3jvKg9rUdg4sia4Rphkqv6WqQdmGyuiHILCZw6frzafF5625m0mawms9J/Y9W4v6GBxbGh4c/e9mYnOSnBHX/e/2M9s/t3VuzW4ulQDSBL4E5Gder//8yMjIx/l++YEyX6m3ep8LYP37/9ZV1gPSspC10zisYzZ86wmpiY/N6//0yGro7c9Leb9jNcv3Trd8CVWlmGvQwvGxoYmBoaGP6BDEG1keE/IyMD4//Y0Fg5OTUL29ucH1lWPa26wjCd4SzeUAVJ4gp+ghpBChoaGpjs7e2ZDh48yHD16tX/q1evxkgEBBMAriRJtkYAJbl5D9SDm54AAAAASUVORK5CYII=',
    order: 265,
    base_experience: 58,
  },
  {
    id: 439,
    name: 'mime-jr',
    weight: 130,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png',
    chain: [
      {
        species_name: 'mime-jr',
      },
      {
        species_name: 'mr-mime',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABzElEQVQ4T2NkIBMwouv7z8DAuHpVKFNo6Op/jY0MjA0NDP+wmY2hEYsikJr/6OJgjatCQ5nDVq/+2xio4/qTgc/bM0Cnb9PJ87/+3fmi1rvr+iEGBgYMzWCNDQ4OLA0HDvypinJ0l1SW2CEj9vfrp7tP/rx6+uV06epLrg0NDEzoTobYuCqUOSxs9d/4DKPofNmEJd85njIcv7Ts9/NHKpa9+/efhRmM7Fy4H////8/IyMjIfCVyk7+619818+92HE1rOBnEwMDwCqqBiYEBEVBwjfsb9rM4Njj+OZ0931XBmGnXossrv94+wf7/J/unmfMPCFUxMKz+hexXjFB9OWHlWR7xP0aFO6L/cL11ZhIW4Wa6/v50/7KNz4v2NzSwODY0/AG5ABI4DQ1MDQ0N/4rc/GVd5dyuKYpL8hz7dJSB/78QAzMTC8OfH/8YeH5x23ksyDu8KnQVc9jqsL8oGrcm9Om++fnV4cm77y9dVDTLvv35eYSHmf3Dm28fT3Fw/X7mOK3wAswS9MBBjmiUwAC5DBqAYDUofvzP8J/xQEMj88EDDAwNBxr+/G/4z8RwdTXjgdfXGB0cGP4xNjTAkx/OJAdKs4xYkhosLgFNRskPyDmTdQAAAABJRU5ErkJggg==',
    order: 183,
    base_experience: 62,
  },
  {
    id: 440,
    name: 'happiny',
    weight: 244,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png',
    chain: [
      {
        species_name: 'happiny',
      },
      {
        species_name: 'chansey',
      },
      {
        species_name: 'blissey',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACaUlEQVQ4T2NkQAP//zcwMTI2/EMXR+czwgRWNTSwfWpo4ElhYHjX0NDA1NAA0dzQwMBUfzWUcTUDA0PY6tV/YeoZ/zMwMDIyMPw3ZmBgndEQt4L5z+/Pnw6/mulwcO/xq6GhbNqrV//CZjsjzGnTc3MN4yp09nFxcQqcbVw53WTC1iyQhp3GDhrcZ5+rcTD8f2fcIHWCseHAH5A4Y0NDA0tDQ8OfWo9JvQUdQkVvPj39cWjWm0Unb8tv03965aNz2ucyHnst98/P313Vjuh1ZGBgePv/PwMjYyjDKubVDGF/PRha9WR4WXbu/vwwW5vBUlRZ+Vfo5LvJLpeWF87SDTNLfXP9M0Omzv3aNQztLSDLGENDVzGvXh32N8ei3eHzi39+lo56+vKSivqcfIzs96+8P3f10v37tklnxB5clbTZNfuf91aGqsMgPYwNDg0sDQca/lQ6T07euvfJ785F2i0eHjKyL958YDg3k4nh2MYrO1of1HgaMxRlaumx3Vx8qWNfKEMoM9zGSpsp5v+/8ITr+zHs/cf/qunLczbRh8c4z7JyCixs3Bu+ocxucv3H9z92zbxceryBoYEJGo//GRkYGP83ui6c8PEyq5GCK8tfMa2vVgdaf6yVMGeex/CXXYKZhV2wdk/E5P8M/xkZGRhBGsAARP+HMKMDpxTYVMurf+eZm/nqlow5z0IuFtF3XUfT9yOrhaecmcYzWdPPpv/u9tmY8/7ed4m2a6d3Vdipe3UcSqtA0gBigi2Aa4TZWmI2WVFDV/VjylyPd1kOU3nEDrz+djVUixEU8sgpCFkjA8z9hBI4SB4AOQMAp2BkxKEAAAAASUVORK5CYII=',
    order: 169,
    base_experience: 110,
  },
  {
    id: 441,
    name: 'chatot',
    weight: 19,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png',
    chain: [
      {
        species_name: 'chatot',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABiklEQVQ4T2NkwAH+///PyMjI+B+XPCM2CZim////MzU2NjI0NDT8Q1eHobGhoYEJXSE221E0/v//n4WRkfHP0/dv/AW4+Sa8e/dmk6yEVBsDA8NLdM1IGv8zMjCA/cS4eMq9w1rqitaP39/8svnaAsO5DR13Ghr+MzU0MMKdDNc4M20ma/qs9N8ppofzqtpOTbx/V+zL3iUOPEwiexxbNiQeaHDYz9JwwPEPzK9wjTCJVMutPoERfzd//yrKcO7Yt1+vfu41n7277UJo6Crm1avD/mJoBAn8Z/jPyMjA+F+WYa2fm9bbRWzCXw9OP1zoj+5MkFr0UAXx/zP8Z2A0MGPQl+EtZNuyr/9UQwMDU0MDA0qUYNXorp0stPPq3X92bo95D+2yfc3AsOAHumasGkNDQ5mTPI9V7jjGNttK91OIhDjDPvuIt9f/NzAwMUJtxpFyGBi3z2GQ9kpleLJ7EZvm5//sr4LiP7/9/5+BkZGRAZwMsWrEngwRmvBqhJkO8lt9AwModaAkeACYsrEPwhXxkAAAAABJRU5ErkJggg==',
    order: 548,
    base_experience: 144,
  },
  {
    id: 442,
    name: 'spiritomb',
    weight: 1080,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png',
    chain: [
      {
        species_name: 'spiritomb',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACH0lEQVQ4T2NkwAH+///PzMDA8I+RkfE/NiWMWAQZGxoaQPgfSO7///9MjIyMYDYyQNH4//9/RpgNN2++MX1/99RNCy+vTw0N/5kaGlA1wzXCNG3dtd/AQF83X0pMOOHRk1cP12447luUG3B51apVzGFhYX9htsI1NjTsZ2locPxTn3rKSl2X46ioHO//j+++MJ44tK+xZ0F+A0weXSPIAFAgsPVErjwrLKGv8+Ht+9+fHjxg/cH17e/zH49NFhxouBAauop59WqIrWAbV4WuYg5bHfY3WbvfWlWd9Uhsacef69cDWfb06/8S1hZhu/H6Wv3cvVVNacYzWWedTf8N18jA8J+RgYHxf4pflbgou/IZB3sumSePv/55/VyG5TfjW4b56+bb3vu850hDQwNLQ0PDH7jG//8ZGBkZwU5l6MhZtpCHRzGMiZWR6df3V4zvP32+wsryJ69mWvwRcPQwMDAygmxC0sR9dv3yTW8+Gpy81R5wl88gZg6bvtZDQTGxXR8/rJFSVZsovmmfQmjDhAcPGhoYmBhXrWJgDgtj+NuYw+BpqKkz1zfriuxSFROLf3evB3M1Bd5z9P08+eGTjbW37hitZRc49zwwkeEDKGyQEgDYn1wMDAxfkVPI8okMzozMXo8jcrbdgoqDYwB7kmNoYLR3OMD0OivrPyzS9+93YHF0PAAOGKRQhXCQAwmm4P8qBubGawz/GxoYUNIrAE945xLovFypAAAAAElFTkSuQmCC',
    order: 549,
    base_experience: 170,
  },
  {
    id: 443,
    name: 'gible',
    weight: 205,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png',
    chain: [
      {
        species_name: 'gible',
      },
      {
        species_name: 'gabite',
      },
      {
        species_name: 'garchomp',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABkUlEQVQ4T2NkwAJWrQplDg1d/Y+RkeE/NnmQGCMuCag4SB6rZqwal00u1nhx79HDov7V36GGY2iGa9y/v4HF0bHhz96V9XZGJqoH79562mfiWV78f38DC6Njwx90l8E1gvwVFrb679o51fJSHAwPnj173RtcNqvk////TCDnMjIyotiK4tT/q1YxM4aF/Z1rGrbxPs+z1y37j6QwMDCwMDAw/GloaGBqaGj4B7MZReOq0FDmsNWr/y4qCpvExfQl9y8n5xM9d7tf7z7+DLb2LruwatUq5rCwsL/ooQoPwUkZfqcUhdhMX/5iZJDXV/nx/dsfa7/07nMw72BER2hoKPPq1av/hioZ66prse39/fPHg87d5xMZGBiuwlyD16lpDAw2sSuqdgoL8HCtmbUpsW7diQUNDQ4sDQ0H4KGLEY///zcwMTI2/FsxpXAmNztL2ruvPzLiCybP3N/QwOLYgIgWbAkA5ldeBgYGrpkz036kp8/6iDMe0SRwJjWsfkTW/J+BgbGxoYGxvqHhPyOW9AoAhMKiD+Iho14AAAAASUVORK5CYII=',
    order: 550,
    base_experience: 60,
  },
  {
    id: 444,
    name: 'gabite',
    weight: 560,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png',
    chain: [
      {
        species_name: 'gible',
      },
      {
        species_name: 'gabite',
      },
      {
        species_name: 'garchomp',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB9ElEQVQ4T2NkwASMDQ0NjFpXrzKGrlr9j5GR4T8WNQyMaIIgPlaF6JqRNYI1Leou4f7w8bXEu9O7+Bt2Pr+1alXDr7Cwhl84Na5atYo5LCzs79ULC7RvHT936N2Zq0JagY7XXn77ExoQ1nBt1apQ5rCw1X9hBsBt3L+/gcXRseHPos6kZFlRgTnsPNx/f/9jZJ4Q0ZSwnoFh4cw0Y9b0WWd/Y2iECSyuDj8jzs1q/Pzll29cCtJcD649/PnjL5N+7bxNN1eFhjKHrYbYCrbx//9VzIyMYX9P7+l2UZAT233lzG2GI/suHg9N87gnIy4YffvOs+2GziVe//83MDEyNvzD0HhyY+tCRRXJuIP7LjB8/fLjyn9OtqXhYXbtr5+/Y9i+8rBLRtfSvTC/Mv7//5+RkZHxP4OSEv+2Er+7Wqoywht2nnn84/pFXjZ+/k+6bg5SmgoSLPuOX+uNq5xVsr+hgcWxoeEPSjwu7UxP5uBk0zx//v4vLWHmSjYetgXvGfiP8/OyeW7eeSd98a5dr/7/Z2AEJQr0BAAOo8YkP0dvX7N97//+qnENaWqFBRxME9yPMIkzM9NYTdJn/W7O8VXkFxAsfXH3Q2Pb8k0vQeJbnkv9bWiABAyGRiQx5GSHNRlidep/BgbGAw0NzA71DX9xJXIAdfrXD8sxLVcAAAAASUVORK5CYII=',
    order: 551,
    base_experience: 144,
  },
  {
    id: 445,
    name: 'garchomp',
    weight: 950,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png',
    chain: [
      {
        species_name: 'gible',
      },
      {
        species_name: 'gabite',
      },
      {
        species_name: 'garchomp',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB0UlEQVQ4T2NkwAEaGhqYtK5qMYauDv3HyMD4H10ZI7pAA0MDE4MDA1PDgYY/MDmQIQ0NDf+Q1aJoDA1dxbx6ddhfkILuwG5LMU6x5ve/P80uWJ27ssGhgQXZMLhGmKm9gZVqOx5etzKStJ9oIq7Gd//d5dpZVw52376z7Reyk5FtZHQxLudT4ueZ/IeZJfbXP1aGP//+/FbmYLr882mvXc+ll19Xha5iDoO6CKQRhMGeD7WuOMfDy2nI+fs7A7/A738vvzMx/frKzWAsLHL637+f04o3FC+AuQxmI1izq0GoATs3R4ngz3cGnLzKmje/PXjD8of5sZmI8R1W5l/Lm7Y1bUTXCLIQbjMDAwNHgnnURaZ/TK9f/Ps2bdvZdctACv4z/GeE+RMlVI2N01jPnp3128kkvsVOWLz6KwM/w5NfPxiE/n8tnHqgb0JoaCjz6tWrwaGOohFmYqhV3q7PDExOHMws39QE1XkFGb41V27Kr0OOEhSNMIlMp/oaHpZ/qt27mjvbfPr3/GX4Yl+7pfY2eqjCEwTMxjbnNmFWLlb30s2ly1rdGj1/M/w/27Cr4RVOP6IHAFpqQQ48VD/CrAaZ3NjQyAhKn1DngdIpSkIHAMMz2A+X/IVAAAAAAElFTkSuQmCC',
    order: 552,
    base_experience: 270,
  },
  {
    id: 446,
    name: 'munchlax',
    weight: 1050,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png',
    chain: [
      {
        species_name: 'munchlax',
      },
      {
        species_name: 'snorlax',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB10lEQVQ4T2NkwAr+M0KEGf9jl2dggCqASzOGhoYyrV69+i9IxMGhgeXAAYZ/DAwN/9ANQNcIls8KDeU5cJWB4dq11V+gGkDqUGxH0WjpXih0fOcHbiUP9Q3CHExv3989Xs/K8I37+uWdexoaGpgaGhA2QzU2MIGco2cUUqWtzNL8h0WZ6eHTtwz/f35iePLhSczzm4eWMjBA1MCcDNbY0NDA0tDQ8Kc0lcHezatqPxOXw7/O6fuZz9+6WfX62rr2VQ7uKgyifPfDoH4HBxsUg91/+/ajTWJiYr6LVu77VbX1NZsK2/urNtcXLbMUFG59+e1Lc+HZ43WrQkOZQQagaDx8+Nw1JSUlzZji+QxvPv/+L/zjPuPT148ZDEV4GRS+PNnWdeqw9////xkZGRkh8dXQ8J+poYHxX2pyThYbr1zC4YuvVdg+3BJgZWNj/P3n7xcm5t/z5QV/NazeufMdzIXwUEUOtUA/n9KHTz5nfPjw5w4bw4+SG/fOXkaPFuToAMfVpEmT2N+8f5914+pV2////0utXr3agYGB4UdoaCgzLGHAAgdbovi/atUq5osXL0q1trY+Y2BgAKckZIA15YSGrmJevToMQzFBjTD/NDQ0MCKnFmSNAGcByA8VyoIEAAAAAElFTkSuQmCC',
    order: 222,
    base_experience: 78,
  },
  {
    id: 447,
    name: 'riolu',
    weight: 202,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png',
    chain: [
      {
        species_name: 'riolu',
      },
      {
        species_name: 'lucario',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB7UlEQVQ4T2NkwAP+///P3NjY+L+hoeEfujJGLPpgYv9hcqtWrWIOCwv7i6wWReN/hv+MjAyMYA3btm1jl5BRtHj36uMNFxeLlw0N/5kaGhjhNsM1wjTN/H+GNZ3R5LefX4p4b2/1sc9ff33PKJ8XfWpn58WGhgYmmLNhGkH0/2jzXL6ESr+F396ei/NPLv9sH1oSGGBjZP/j3//3bz++O9jTkHsAphmscX9DA4tjQ8OfVdk9rnyyiru2cf7t4Hv38qSmsmTT2dtPLv/9/e/fsyf3n69eMrkMWSPj////GRgZGRnaU7MrTP3j2978ZGbQe/CU4czvFzdO/Phx8evzl94fPzwP27By3nYHhwaWAwca/oBsBDszLS2Na9asWTr37z9svnL4osPxQ9fuv+P+zsXMxvPoy+fPbFd2LXE9e+/eR5h6ROD8/8/IyAgOUZ7kkvbjc3sqY4LDEoxFZTW7P398N2vpnM5KbIHDEBoayrx69eq/dr6xivb2fvd+fnm34eju5RvUDR2NRWU0azsrwj7i0LiKefXqsL+5ucVaAhJqu9++eS308tmj0rUrZ00BBSCyJhAfOQGA/drd3c0tKSAguHHXvLerVx//jk0TukYYH57UoLaA+HAxWLLDmlYbGhoY6+vrQaGFoQGmEQCiefYPHBfh8AAAAABJRU5ErkJggg==',
    order: 554,
    base_experience: 57,
  },
  {
    id: 448,
    name: 'lucario',
    weight: 540,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
    chain: [
      {
        species_name: 'riolu',
      },
      {
        species_name: 'lucario',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACH0lEQVQ4T2NkQAMNDA1MDQwN/1CF/zMyMDD+RxZjRNcI5YPEQQphNIYydI2Mnnqe0tsvbX/S0LCKraEh7BdIh4aGs/CNG3vfYtgYGhrKvHr16r9JDtUmzFyCe1dte2j0kWHyXZDC5NDpE1i/fDKbsb3cCkNjg0MDS8OBhj8RQd3eNsJyW96xvNp3W5G/V/zpuxC1T1KJF1+92Dh1a15AQ8N+loYGxz8gAyBO/f+fkYER5PlVzBManl9RMzbSeM/MxmCuIMJweumBfwvuP7hooMwd39lccbmhoYGpoaHhH0gjOABCQxNFV69+wWDhcj+gvmbGDEE+/v+nz19i+vGL/e3TR3eYX3/4s33p9IZomHq4xoSsUokF07qlN+09ZPjq5beZhw+eY5KR5/tnqK/LxMXLybB9+6Gmye0l9atWrWIOCwv7Cw/V////szAyMrLuP3Ntv4aOpvmDB4//qKvLMuzff46B4ccvlvMXr7xtqUw1ZGBgeAxyLkwjPL7652w4aWmlZyYtIcRw+fJ9hkvXnzJ8ff/w5vOnz9W/fPnguGLBlAOgWIDbOHPmTNb09PTf0xatrHl457HQwabD2xQjlXxU9ZXCr1w+EyIhqOT678//NTNmNFxBthEeRfPnz+dITEz8ARNYtmmTNq+U1H1fE5Nv////Z2QEhz4sOjDTHeOqVauYrl27xtjQ0ACON1g0wJRiS6so6RMaiqBEj5LIAUZM5RUDsaMjAAAAAElFTkSuQmCC',
    order: 555,
    base_experience: 184,
  },
  {
    id: 449,
    name: 'hippopotas',
    weight: 495,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png',
    chain: [
      {
        species_name: 'hippopotas',
      },
      {
        species_name: 'hippowdon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABOklEQVQ4T2NkIBMwkqmPAavGhoYGJq2rVxnDVq/+C2I3NDT8Q7cAQyOywlWrVjGHhYX9xeYqFI3/GxqYGBsa/q2ubrFifX1DN2DWkpmz/fzEDevq3pmYmPxGNgBV46pVzIxhYX83VneFMv5kKPfr6bXfU5X18MG3H/4pE9qPIrsAReOqVaHMYWGr/1599Z/n476KPR/vfmF598vwYHRjSjHUNpD6/yA2XGNDAwNTQwMDKBDkH+xL3ihvIKD/9MyFBzJuexVBCpHkwWYg2wgzjX3/fPfLeqp8qscufvp75tpvp8ap+w6tCg1lBoUyzJ8oTg0NDWVevXr13zg/E0MJIfbIz58+35q+7tKc/wwMjIxQJ2LVCHES9ngjGI8gBSBnvRe8x7TnvdK/1atXg/wNDhCc0UFK8iM7rQIAIQqDD0WU8bEAAAAASUVORK5CYII=',
    order: 557,
    base_experience: 66,
  },
  {
    id: 450,
    name: 'hippowdon',
    weight: 3000,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png',
    chain: [
      {
        species_name: 'hippopotas',
      },
      {
        species_name: 'hippowdon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABf0lEQVQ4T2NkIBMwEqEPpuY/slq8GhsaGpgaGhr+QTWA1MI149S4f38Di6Njwx+Qpli3WO7FuxZ/ZWBggGvG0Ph/1SpmhmvX/jM2NPzbv9+BZfVMmz3Pn3x4955lStiBAwwgg8CacdnIkp/lYRgd4B9+7QJH8ZpV1++wCb1MXrdr4aEGhgamBoaGf2CNML/sWFslKSwoVX311GMNC0dN029fGHnXrnjHePv2i/vfGJ+kbtm/dC+KxlWrVjGHhYX9bass8vNxctx49fRdhg//fzI8usPJ8PTJB4af/96c+Pz5Q/y2U4tuoWhkYGhgYmBo+JceHud/ft//xeaevLwvH/99xMEqKfrt16sdaw5MC3ZwaGA+cAASWCCA7Eewp4MDwzL+/WCLZPj9d4GUotzXz5+//F60Yur60NBQ5tWrV//FppFhVWgoc9jq1X8XLVrEzcHB8QPkfJBCdE3oNsIMY2JgYABHOlQDiI2SanBpZPj//z8jIyMjhmKikxy+dAwAPzCpDxtxTPEAAAAASUVORK5CYII=',
    order: 558,
    base_experience: 184,
  },
  {
    id: 451,
    name: 'skorupi',
    weight: 120,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png',
    chain: [
      {
        species_name: 'skorupi',
      },
      {
        species_name: 'drapion',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACBElEQVQ4T2NkIBMw4tPX0NDAxHCAganhQMMfELuhoeE/AwMDCDNg08jEwPD/PwMDI1gBCPz//5+RkRHOB+n5j66RiYGB4R9Isbd1VLIAr0TI7x+sSz9/e83EL8DBumLXtLlQsxjhGhsaGlgaGhr+MDAwiPta5s7l4xJ2ZWPiYxMUYWV4++7dy08ff4iz831vXLFrQkNo6CpmDKeWppWmMf4Wn8nJwcogLff3t5wiE5O6uhjziWPfGeZMvHZ3761eFbgfGxpC2eSEJPhtrfQzGRg4G29ce/3/9ZsP/x49+c784Q3T/7BI2X8sjIxM7e1Hfqw/uNuVgeHVUbCNDYWhKq7O5jvU1WSUH917+3/dkqv/zt1mZxBil2SSVGRluHn+5199s58sLFwP/tVP2q/NwPDgBuP//wyMjIwM/9vbM5VE//xcz8UhpbdqxQcGfnERBnExfgYL258MD++xMXz9/v3dn/9nwxv61+0JDQ2F+xEWmqxtdXlH/v/6wVzdMat+47z2NQ+e3NsnIiZ9ToSPKcY9qk4RI1RXrVrFHBYW9nfRrP5YN3OOnXP2MrBqCr5ZenpubaBEyAwTEc5XxjHpdR2wOEUJ1f//G5gYGRvA8VhQUCAwYYLAFwYGcBRhAIzoANkcGnrtP8wAUFKrr6//v3p1GFNY2Oq/MBPwplVokoQnPWRrAdr/w2oSLyHLAAAAAElFTkSuQmCC',
    order: 559,
    base_experience: 66,
  },
  {
    id: 452,
    name: 'drapion',
    weight: 615,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png',
    chain: [
      {
        species_name: 'skorupi',
      },
      {
        species_name: 'drapion',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABMklEQVQ4T2NkIBMwkqmPAbfG0FXMDK+vMTIcaPiDzXDsGhsaWBgaoBoaGpjAGhsa/iEbgK4RxP8PUqCf2+729dVLrTsrJ0yAamRC1oysEazpPwMDI2NmdwUrK2vLb1YOJok/31YwTSzKfcbA8IaB4T8jAwMj2GAkjXBBRuei1nuC7CwKzIz/fz1hEWQ7unmvPcP5VYcYHBpYYH5GaAT5BeyPBoH4FsEbogzvxdlY/vy6+EOSbeusw0YMz1acZwgNZWZYvfovqo1QjZq27pKPtBzWf+XkNWfi4GIQe/f8AfOsatunDAxPGOCGozgVHHLwAFBOa5jI9OPHd75FHU1nGRi+IfsPzY/QwP7/n5GBERIACIAIFJgYrgTAyLBqFZPDtWuMBxgY/qHHIXYbiUyDZKdVAJFrbQ/ZyLi5AAAAAElFTkSuQmCC',
    order: 560,
    base_experience: 175,
  },
  {
    id: 453,
    name: 'croagunk',
    weight: 230,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png',
    chain: [
      {
        species_name: 'croagunk',
      },
      {
        species_name: 'toxicroak',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACI0lEQVQ4T2NkwAIaGv4zXdVazQiSWh0a+o+BkfE/ujKwJGHwn5GBAVUzVo0e01apC8uo8n1+/+bP0+f37p2tSP/IwICqmZGBoYGJoYGBwYGBgelAQ8Mf/dRKNVErh1M/mNn5ubm5GX49vF2/vyiqyXPSNvbtuZ6/GBobwZYhbPz/nxHkF6s5e+Vvv3v5QPnC7vMvtWwN//KLzHqU65eO4Ufl2AwxxjesP+5sn/yJN6dew9XQvF2OgzGAlZ370//vn3he/2f9duHDl6lSH5/O3l6bd1ctsljkF/t3FkYpn6hpfPqmmYpGti8+vnst8eP6uQ/BlsbcvHx8rL9//WK4+Owtw97HL/6oKauxsHLzvrh/7rDEj5sXZzKKOXq4c+lZ1Imqm978/fHdoguVsf8ZshsOmGno/7/86sXf75/fsshfP50j5Bl3mYmBMef1zVMSP+9cgXgUGWgVtiXKCIvNeyUh/5fj8b1/bKysrM/+/l16pz41BlkdI0NDAxNIIEHenm1BouMPx/SqmdWScmlzpSR+2r15zcLyh4E59fO7HynTyhXmfGV46dDQwHKAgeEf3MbQ0FDm1atX/9UKTTDQFpVd+5CbTUnkHwPDn59/nu/68KKHYcnMPqiNID2gSEUCINsbGv4xMDBwMYSkmDEw/vvDsHreRQYGhs/ImlDjEaYfoRlhYugqZobVYX9R/Yg9oTIyODgwM4iK/mdYvRrkAoxEDgB0CdZiJ6GlcQAAAABJRU5ErkJggg==',
    order: 561,
    base_experience: 60,
  },
  {
    id: 454,
    name: 'toxicroak',
    weight: 444,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png',
    chain: [
      {
        species_name: 'croagunk',
      },
      {
        species_name: 'toxicroak',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABRElEQVQ4T2NkIBMw4tIXuiqUmSGUgWE14+q/2NRg1djwv4GlgbHhDz7HoGsE8f+DNNQcis/88PuL3BTntZVQA+ByID5WG6v3RIc///NzxcfXv7+8it2odJiB4XVDQwNTQ0PDP5grEBobGJgYGhhAErxJ28KefTv54acQM+NbJhsR8SlFSw0YLjA8QNaMYiNCQkp9bafp/Ls//jLO4/l72vDA96blmw+8YfjPwMjACPEKska4HzZM8Jmory+ed/zg+7NRDetMQApxOrWhgYGpAeJUzsml7k9E+TiEnr37znDszmuvNZvPb3dwcGA5cOAAPKSx2ciSGmgyl4udxeH7rz+vZ607YwoNafyhmpDgwHH58gGms2cZ2JpSnLP+fRTqaVi9+hfUW2D/4YwOtIhHsYmQRrAXGhoaGJHjDtlAnGmVUNoHAIGPgg+mDLmiAAAAAElFTkSuQmCC',
    order: 562,
    base_experience: 172,
  },
  {
    id: 455,
    name: 'carnivine',
    weight: 270,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png',
    chain: [
      {
        species_name: 'carnivine',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABd0lEQVQ4T2NkwAEaGhqYGhoa/uGSZ8QlQUgcq0aQbQEBAZL6+vovGBkZ/2IzBEXj////GRkZGf+vX79fQFKYbfPFi8dT03NLbmBzNqaNDf+ZGBoY/0VGL2p5/Zvz/55VobWhoauYV68OQ7EZVSNUE4PuDC9tfaOtsqwMB3bMN3OEugTk4v8wZyNpbGBiYACFYoFAaY7ddTE+YYnjj77+f/zxifnpzWmn0W2Fa0xLm8k6a1b6bwaBrrhbEwwXqsqyf59y6Adn7pp7Tf+vbGxjNAn4x3A2/TcWGyFCc8s61Xnvv5ihqKjhcO/Lzydf2T8v1ZCXvG9VkDQTFnggdSh+bGBgYHLumRN96eFzDk0uznpLS3PpFafOdCa2FVb8//+fiZGREZ4gcCaARXVLNvz5/U0naeWGQIZ72y6jRwmGxlWrVjGHhYGCPlmegWHuDwYGhpehoaHMq1evxhMd8CQCC2EGBgeHBpYDBxr+oKcePGkVpBkEsCd0ABynmw9hPMW8AAAAAElFTkSuQmCC',
    order: 563,
    base_experience: 159,
  },
  {
    id: 456,
    name: 'finneon',
    weight: 70,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png',
    chain: [
      {
        species_name: 'finneon',
      },
      {
        species_name: 'lumineon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABMElEQVQ4T2NkIBMwEtL3//9/RkZGxv/o6ghqxGUwTo0wm54s3CMsE+/yligb/888w8qYbvL7zuItTR8/fXY1zo60hGoEWQR2NoaN/xv+MzE2MP7bVznN/ifjnznX3j0LK57Rcb6hoYGpoaHhH8xmFI37G/azODY4/tkf1Wqg5m9+XkpWluHJk/u5smEeU/7v38/C6Oj4B5tGuDOub953XJZLwILp////t9+//q0f6qHEwMDwFNlWuI1Iwc5y78TF44qCoiZvX79lOHT42LWgynRTBgaGb8hRg+LUVaGhzGGrV/9VYWCQaQutbvv+8bvtlV2ncrsZjmzZ79DA4nigAatTwc5Hi3CuVf9X/QxjDPtLXHT8/894oPEAMyigSE4AYNsZGBgZofFGlI2E0i9IHgBUwoMPWFDRDAAAAABJRU5ErkJggg==',
    order: 564,
    base_experience: 66,
  },
  {
    id: 457,
    name: 'lumineon',
    weight: 240,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png',
    chain: [
      {
        species_name: 'finneon',
      },
      {
        species_name: 'lumineon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABU0lEQVQ4T2NkIBMwkqmPAZ9GxtDQUKbVq1f/xWY4No2MxsbGLGfPnv2NzzXoGkH8/xANMg7y8kImDx9e6mFgYGBiYGD4h2wQskaIptxcPoZVe0NSfO3i/v1ntJ83d7orAwPDHgaGUGYGBoSz4RobGBxYGhgO/KlT8yx+YyDeo+9ixaCrpXnWysYWpPG9g4MDy4EDB/7AbIVr3L9/P4ujo+OfLY290/4pSmeySEkwfP3DUhfqYbPYytbF99jhPZMZGMCBCfYKXOP///+ZGBkZ/208ecNE7vfZhSeeiWhlbvrx0/rmzC2ffpzovXz53XFkv6IEzv79DSyOjg1/WtMYUm5+05l0/2v0hsPPZDMYTsZ8wulUmNtBNpd3zePmvJDM3ric4Q1I3Ng4jfXs2Vko0UMg5fxnbGhoZGxoaECJChQ/okU2Y0MDAwiDAgIar6gqyE6rAE/jeQ8xaGIOAAAAAElFTkSuQmCC',
    order: 565,
    base_experience: 161,
  },
  {
    id: 458,
    name: 'mantyke',
    weight: 650,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png',
    chain: [
      {
        species_name: 'mantyke',
      },
      {
        species_name: 'mantine',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB3klEQVQ4T2NkIBMwYtO3KnQVs6i2KKMDg8O/1VdXM4atDvvHwMDwH1ktisb/Df+ZGBsYQYoIAqw2Ho48bPNb8osQ00/m6N/ff147x3Ctr3xe+WcGBgaQerDNcI0zZ85kVUhXYPs1+XEH2w/BnDd8DxiEZdgYGHYoPGRZx2ns8tTlLcgLYavD/oI1/v//n5GRkfH/+v75AoIn5Tc/sz1r/ebPC0beo6p/fyi+/SPILsku+lP85Ns9X93DzoZ9bGhoYGpoaPjHCGMcYTgn9bn7xoNngldZ717994f59x+WP19YGCTVGH7pGMmxMa9Qm2C/wLlwf8N+FscGxz9gpzb8b2BqYGz4t61v6cy3HE/Srtx9/eeF1BMW6edS/xW+y/2XFpP4yfmU9/Ab7psBYf1F3/8z/GcEa4S5fX/Sjox/YgzTn0ie/3Pl/zUGjvPKv83N1TlZ7nEu9ugJiDvWd4zTqsjqO3LggENrd/kq/u8PWUPumhyd8YvtJwvLXSkGjR+aN7iYGX0dp/nfgdjEiBqqyIL5gbHtIqICXl+/fbrbsWRhGgMDw5uZaTNZ02el/4ZFMEo8ggKqnqGeAT0RIEcDVo0wwVWhocxhq1f/BRvUUP8f5jycSQ4tncFTCbb0BwCmWs0OyGgiEgAAAABJRU5ErkJggg==',
    order: 310,
    base_experience: 69,
  },
  {
    id: 459,
    name: 'snover',
    weight: 505,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png',
    chain: [
      {
        species_name: 'snover',
      },
      {
        species_name: 'abomasnow',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABnElEQVQ4T2NkwAf+/2dkYGT8j00JIy59oatWMa8OC/uLSx6rxoaGBqaGhoZ/xsbGXGfPnv1GjI2MaTNnssxKT/+dNmdN/Ou3n4tOHtnl/Gzz8jcMDQ1MDA0N/2CGoNj4//9/RkZGxv9Fc9c6fuYS2nf/zNmPe3pLJBgYGH4wMDCA1ML9C9MIE2TybZlRLyguXvTp+z+e3/++ffnKwdLJlhHZ/6th/88DDY5/UGwMDQ1lXr169V9tU19TWSfHU/JqKgxcn1//usLCzcbExcnw/+SZXU8f3Ii8unP1OwaG/4wMDIwgAgFWMTAwh8UV+qT9/znZUVpQ9hqb8Pc9jNycbK+eX/13747r4Z1LnsP8itCI5Pm2mPTzQdIcBp++vmNo4zdlePbu/UOBozvNdl069gq3Ru8oQWdx6UvhT449ZH169Mkyz+7wTy+f55xc3DfVOG0m69lZ6b9BbsSeAFyDVRl2r70NUqDqn+QiwsZ47vjque+QQxZnygFp+h8aysy4ejUs9WCNDtTEAfEvKM7+Q0McFPEoaRavjfjSPwC/hq8PtfyGCQAAAABJRU5ErkJggg==',
    order: 566,
    base_experience: 67,
  },
  {
    id: 460,
    name: 'abomasnow',
    weight: 1355,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png',
    chain: [
      {
        species_name: 'snover',
      },
      {
        species_name: 'abomasnow',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACEklEQVQ4T2NkQAWMq1atYpp2TZRR9Orr/yCp1avD/qKpAXMZkQRBbLBiZNDQ0MDUABJoaPiHLA7TCNbUMH8/x5e7H23uPf/FLsjB/Zmd+z/ztC6f/RB9DUwNSJrBGkNDVzGDnBSSMNtBUFBy/y9mHgbm/38ZRHj/HT189l4KD/tf3d1rslYja4Y7debMM6zp6Sa/GVxmpeaq8M5ieHzgw+Stz4OcA90mfPv+ueX4jsrVDg4NLAcONPyB+/H///+MjIyMEP9lbtervb6iQff/T+9uMYfrbF9e8RzdXqcC9R88HBgbGv4zNTQw/jt27Jj97sMvl9fvfL4mb1/W3cSe9gnrmawYrtz5/oOP84PdgtVr2RmStI/BAgnu1LUbtgeuWXlEsWVZy9ybM+f1K11dl3j+i+n3+WwaHPz/P96/feuJNB8vR9KhzdXLQkNDmcEakZ06ZcGWtC9PGGcaPzzO8OcPB8NOWWMGScG/DJcvPjiw5PJOb4azm78xMPxnRAqcmazp6em/k5IaTI7e/X3wi5TI7EgNhZfPX/wIYPrzkWHx7AxzsD8bGphAzoVrhAX1pGmz7G/ffeM0ubeqm4GB4QsDQ6BrXnn4Ln0tpqDk+LD1sDBBTjkoTobFr6AgJ7uZ9b+Ir99en8rPTLkC8xaKRph/HR0bmQ8caAClUZQkiBwWGBqxJGjGhv37mRkOHvyHnOQAKPr5EeYauK8AAAAASUVORK5CYII=',
    order: 567,
    base_experience: 173,
  },
  {
    id: 461,
    name: 'weavile',
    weight: 340,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png',
    chain: [
      {
        species_name: 'sneasel',
      },
      {
        species_name: 'weavile',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACgklEQVQ4T2NkQAKhoauYV68O+4ss1tDQwNTQ0PAPWQzEZoQKgOj/IPaDbZaGc7Z4/bj7SUeXi/3fi7lzgw+Fhq5i09a+9gfZAEaYid5B85RYGL71JLvcDdx0RpHh9kum7/xsf25uWl9gwsDAAHbF////GRkZGcEWgGwC21ZS0s195syPkuf/vv/ItWBvvPuY9VP/8ir3YOvCXwxyhgGXb36UunVudwUDw6bPID2MyKbA/LEhM+c4y1MGiwkMShdevPqmJMXLy+cbILs8NzsoCuY1sB9fvHjBfe7cA3kvL4trPQv2pImvPjDT8VsLwxWBGoZzlmYMF87d+BUVacEmryKcaKitvWD//v0sYI3Xb96s2LjhQuHV218emuqIKokW5HXbunLn3XqlKtWu5rBOjIvH7v0ndhEz0x/eDVWp20ChD9a4bucisWmTPu8UEJQ0MNB4HHRf2o6lmL1uBjunvlDmVo3VP648XCOjqTRj2fxIWQYGhq9gP8LiLjpp1e5X7z7897ATvvnrv0oOy5ezDIxs/38zcCmx7t59cTY7B5swEzPLnTdP73UcOdLxntHBoYHlwIGGP0ERixL+/v/q/vDeh088PKwGHxmFrvKzsSWK8oGi4TPDp/cvGRhZ2M7t3VFljBId5p4NfGKcnFovHzyV/P3/b/3581MNXOwLE999ZrI5d+6bvYQE6zUdA4lPe3ZUJTEwMPwC+3HVqlXMYWFhf69dOyN54uyrbYf33Tkyf35eLix6ps3cdOf/31+7s7NC8vySOjk2zSv/DEtyYDW5uZPYw8O52WxskkGRzMDA0MCUkCDPFhEh4/f584cnoaGhx1DiET0Bw1ITujjMZSBxAA8iEbpWT9MoAAAAAElFTkSuQmCC',
    order: 298,
    base_experience: 179,
  },
  {
    id: 462,
    name: 'magnezone',
    weight: 1800,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png',
    chain: [
      {
        species_name: 'magnemite',
      },
      {
        species_name: 'magneton',
      },
      {
        species_name: 'magnezone',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABbElEQVQ4T2NkIBMwYtf3n5EhNIyJYfWqfwwMjP+xqcGmESSGrBidDzYHXSNYkW9xvcjT56/kf/7+df/q6rnvoOpQbEbRaJw2k/XsrPTfDCnN1VJ8fC2sn97WPJzT1AoXR3IzXGNDQwNTQ0PDP9eICCkLt+jzzNxCYsfOnf++a/FSa4Znx88zhIYyM6xe/RemF0OjpyeDaGLalMvcPBzie46e+9HfMM2AgYHhZmhoKPNqbBoRJvaYLlzxdpO82FeJ7PVS/7nYOetP9+Q3MzQ0MDE0NPzDsJHh/39GBkbG/wxumccLA00tOFkZfrSd/sCh+ecdw/O7Vww/HNhwAdm5cKfCnKLm5JlzS0RvMsMfRgZDnu8ML58+vv5s7zobBgYGUOgyMTAwgG1FDlVofDmweHk9cPn5R+Dvf05Rnn//fh8+sPnAG/QowRqPWFIKRiLAmnIcHByYRUVF/79+/ZrxwIEDIKfBAwUzcEhM7ABCVJUPeFUNCgAAAABJRU5ErkJggg==',
    order: 126,
    base_experience: 241,
  },
  {
    id: 463,
    name: 'lickilicky',
    weight: 1400,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png',
    chain: [
      {
        species_name: 'lickitung',
      },
      {
        species_name: 'lickilicky',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABVklEQVQ4T2NkIBMw4tTX0MDEcPUqI8Pq1X+xqcGq0cHBgeXAgQN/kDSA1P1HNgCbRogizxQZBj5VXoaVZTcYGBhBmlA0Y7XRmoHBhLNy20wWMQWjH4+uRh7oD10RumoV8+qwMLizkTVCTCxcxWm6KWyFpvskP2VhVobT1w69+vvp5fLtu/cVINuKbiNYc/X0vdInL55byfz6nKiQoNi6T89vfdm6dXsrTj86NMzn+MVlrcH28kzCz7//7X/9/S0m8OflofesQj3nJqWeDQ1dxbx6NcS5EBtBQd/Q8M8we608t6TMxsdPz34WAUlzcAmdPbKkiOHcnp2hoaHMq5GiBqtTrfyi7Pg/XMq7d+hKk4yzc/7evXuT0eMSq0ZPBgb2z86B8kf2rr9lamoqoaCg8BrZNoRTUYxrYGJgaPgHFcKIeJhSXEmOsaGhAYRBBmDVjDutEkj8AMw+gg9vgHreAAAAAElFTkSuQmCC',
    order: 163,
    base_experience: 180,
  },
  {
    id: 464,
    name: 'rhyperior',
    weight: 2828,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png',
    chain: [
      {
        species_name: 'rhyhorn',
      },
      {
        species_name: 'rhydon',
      },
      {
        species_name: 'rhyperior',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB6ElEQVQ4T2NkwA4YGf7/Z2BobGRkaGj4h00JIw6NCOH//xkZGBn/o6vDqlEldxK7PK+ZwO/fr/kOdfveZsCiGUWjg0MDy4EDDX80Ijt8mfjFS/5yCxy62RtYa5x2hvXsLJPfyLaiamxoYDnQ0PAnNiUlSFTFf+2ju+c/XJ5dF3yTgWEfQwMDE0MDA9y/KBobGhqYGhoa/gWHBk+WktHMef729fPnty+8P3qcU5+B4cAfBgYGJgYGiGawxtDQUObVq1f/jYyMdGVkZKxbdoN/5rpG1cW37rzZOH/JvTNOppwq02fMT4AZDNcINeB/nBmD8FuVgubHnGpfaxz3eh++ornp4hMOGReV759r61uyGRkZQbaBLPsPd6oD1H8MnY+kXP6/3Cfx/ZL6Y07Du7fvnejnF5Cy//v2Xs+tuUWnGEJDmRlWr/6L8GPoKmaG1WF/GVrPSGo+v3Tu+m+WqRZCvAUvHp7d9ODlv0p1oU9cN1dPuQ+xjBFhIyyokxIiUt8/Oui6ft/zMDUGBmmr2PCJyvJC1bUt02/CwgLDjwwMDKyh4VHp/JJKe+dMaLkOUpCSklbx49cP9iWLFjViCxyMlNcAijeGBgZQ9IAk////z8iIlPQwkpyDgwOLg4PDP5gGkC0gjTA+zAYArIXND3iNF+kAAAAASUVORK5CYII=',
    order: 168,
    base_experience: 241,
  },
  {
    id: 465,
    name: 'tangrowth',
    weight: 1286,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png',
    chain: [
      {
        species_name: 'tangela',
      },
      {
        species_name: 'tangrowth',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABn0lEQVQ4T2NkIBMw4tAHE/+Py1xsGkFiMA3IbBQz0DUiK2RiYGD4t7/BgeUgw4F/DQ0M/5B1Imtk+v///39GRsb/0yZMW8vByaGXlJ7kxMDA8Bik4f+qUObGa6v/wwyAaYTblBDKYGConXFMQVqU8+jBJc0SUnL8N68+ujNz6/3JYAP+MzAyMjL8B2mAaeI4sDK5V0FeNP3nj8+M7GzM/758/v//4/NHrNfvvmFgYudrunzrw6z+RcefgjU3ODiwNBw48IeBgaH2wdGSpn+MTL+yC5YyNlQHMEpL8bMc3nXoh46eGsf7r//+J0QsMLvHwHCmoaGBiRFENDQ0gDyudWJ9xkEJMV6RZatOMni76zLcvvOMQYCPnQEUSvfvvniQ3HxAERpAjGA/hoaGMq9evfqvnzq7emCsc5qYCK/g7UevBQ+d+7zR38Us9tmr14f+M/A8qeqaNxcSfoxgP4IBTDNmhDewMDA0gLwCAvBARIlHkGYXF0EmNTWp/69fX/1/DRr8DQ0OLFpaov/Dwlb/hRmMK8mhxzVG0iNGI9bkCgBaBqKR9SnebgAAAABJRU5ErkJggg==',
    order: 173,
    base_experience: 187,
  },
  {
    id: 466,
    name: 'electivire',
    weight: 1386,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png',
    chain: [
      {
        species_name: 'elekid',
      },
      {
        species_name: 'electabuzz',
      },
      {
        species_name: 'electivire',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACSElEQVQ4T4VSS2gTURQ9b2aSTD4kVBNLNUkttrVSsSBU0GKaLFTcFqYgunDlQvADiq7EEdqdO3WlFUWpaAISCS1uzERFWpRKrbFtKm2NVk2mGpM2n2ky8yTBpFT8PHhcuOeee9659xH8OoIgsLIsE4fDQctRkiQVAK3iv0fyN+B/+TKxfGlvz+EuJbNsYY18GjrW4t2UenbyyrDyT0WPZ78rm8tOO1u2GPPpDHSMHjOfaU9szP9QEASjLMtFSfJqgKhVG1Wfuks8e3G0Lp5FYh27klQS+nprPNQfdAuYv1WoFosiGFFEhVzzOHgncEgdn+83cLYm1TlXqrf5uVBfWzxk5wcNqdf6iXfvrwGYXaMYDoc5n89Xugy0ObefmKTNK2g5MqWmFlfYN1/dGBphYbcUcwvf89efPwmdrihSSgkhhI6+nTyw9HLMx8eSZ5QMOLZTonXOuEYVo3YjuFHd29nOp1OfMsfODTQAyJWJLCFEDQYCQ7uXLAfTdcaSzCe46Ogp2De40ejmMDXzgWrYp7Rvc/FXb0Z6B+5H/BWP4yN3ncsfpVeYz9T/UNVi1pom0Nx0+EUGJpNKujqsXPNmFzp3tmIi9uX2Dt/5oxXi43t9e9q3WvtLNOthqMastzlgMvNY/JZFLl8EBcmbzeyjQqE45rDrAnzj8dmaRxp9oIdRaVJQalWUQqOqFRt4g15HQKKxheTTju4Lc9WJUgpSUaSiyBBxdbl/+i2UigwkMIhAK9fW9lieLnCJVEBvNyBFVvleaISsbfwTi0AAHW53ndcAAAAASUVORK5CYII=',
    order: 192,
    base_experience: 243,
  },
  {
    id: 467,
    name: 'magmortar',
    weight: 680,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png',
    chain: [
      {
        species_name: 'magby',
      },
      {
        species_name: 'magmar',
      },
      {
        species_name: 'magmortar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABl0lEQVQ4T2NkIBMwEtb3n/H/fwZGRkbGf8hq8WlkXLVqFVNYWNhfbIZj1fj//3+QDf9BGkL7GDgdxddrZUUHnsVpI0hDY+MB5oYGxz8b9+wRf/rkV8PNy79sTc25GGLC3AwZGBh+MzAwgCz7D7cR2RaQyfv3X+U5e/5i3cF9t5LlFDS+cgnIOna3WN9taGhgamho+Ifi1Mlztve9fcvJ3FDukB+ezaBmY3gw/+rljz9fPLxdyPDvW/uGTbVVoaGrmFevDvsL1tjQ8J+poYHxX03NjhUfeDjDmX4znH32/Z24Eb+szNv375++f/tM+snDa1m7dnVOR9EI41Q0NKhw8hic//5djkdNg4vhxJ4DV0/sOcqtb2krxCerpDS13eUtFqc2MDEwNPzLSO2Jffb0+3RBke8f//6XEGZk4ni3eGGaFwMDwwWYBSBXIvz4/z8jAzgKJrG7+lyV271l5tugqGkC4qICPNMnRl2C2QSLEpTAQQ9ZmCJkm7BqhAj+Z2xoaGRsaGhgAOGrV7UYQaGInnqISKvYUzMAQLe3Dykzo/UAAAAASUVORK5CYII=',
    order: 195,
    base_experience: 243,
  },
  {
    id: 468,
    name: 'togekiss',
    weight: 380,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png',
    chain: [
      {
        species_name: 'togepi',
      },
      {
        species_name: 'togetic',
      },
      {
        species_name: 'togekiss',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACbUlEQVQ4T2NkQAWMIG5oaCjT6tWr//1n+M/AyAAWAoH/yErhog0MDUwNDA3/0AyCcxscGlgaDjT8gQmANf7//5+RkZERZCKjMYMU51kGVg8GhofrVBgY+O4wMPyxVvdjPnpz02cHBweWAwcO/AVpYYRpCrKIMQo2cGo5eu8Cq4iEuLONjMbx6yJ/mfet2v7/2+sPFx31dJZXrW8+CLWREWxjlkOpxK9fn7bJ8MsbssixM8hx8zJw/GFhYNGXYJjdtYLBXk+bgYeT53P15iVTPr4/PoOBgeERWOP8lGkFApyC/e1TVjyqWJt878nBu1rvZ74UU2nR+/1PnJn1eM/5j98Yf3/j4fovKSzKXd24sbkNrHHt8o2rnp56E1rRvznwG8OGDfNnLom6velRkpKynPOXf6+eFkwpMl67aUver3M/qk4fvtTZt7epAqwx0z+/6h0zSyu7Mpsv9wvOBFEBdvVH5+8cff+RMV1XVOS7nrryoce8n6Rvvf2mM/PVs3SGzVNnwaNj8swF1SyszO/OH74SKv6Qx/gP9y++f4w8P0W5WVllefmZPv/8yfBa5vuNytZiHQYGhr9wjcjxtzB17oN3X7/KH7l7i4GDhY1BSUSCwVBBluHnv38Mb959zMxdmjUDkQAaGlgaGhr+TOte7P3l8cf8h6/ePP775vtHQS4BiQ+fvh5VUBL3/vH7l+J7xi/7Jyyqz0KkJ2gimLRkCd/haLavqxnDQBENB30Lp0uzMLMw5sWkPvnf8J8J3akgPjhNNjQ0MF29qgWWdxF8z5Q+K/031rSKJMjI8P8/AwMkCSLSakMDE9RAkPh/APyZ+5CduhuVAAAAAElFTkSuQmCC',
    order: 255,
    base_experience: 245,
  },
  {
    id: 469,
    name: 'yanmega',
    weight: 515,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png',
    chain: [
      {
        species_name: 'yanma',
      },
      {
        species_name: 'yanmega',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgElEQVQ4T52STyiDYRzHv8/7vg3LQaJQHJQLacRa/tV2IU6i940Ualm5OO4i+YkcpSa5KEop70WJNMmcrFEbNyUOdsFoGoVtHg2bd/aKPLfn+f0+z/fX9/dl+Odh+hxnRBOMaJwDjOv1ZICcc8aYpplIANHrdzgN5ByMMXAQl7DpKcDhfgigGHTgFJiENhwwHpQebwnRsOU+dOl3bRvaca7cf4dToCzLoqqqcUcHqovN7hMpOwum2zv4ziKuqfX+EaI9icgWS46cNioRSUQUU+xzA49hw1J+9BmF5XlXM7MvFYA9olX9GhVgDODT3TaL97TEaepqqm9taywLXobQ27M4CKwuW60keTz0rvoFEgmM6HWyuZ6ujbU1omXInJcTuQgfeZtegqML8z4Mr8kQFRXxNDBxWZNlUVHVOJo762oecp2BwIq9paHPnf10O7bj395N+pABJh7ow3oQ8LG7ShShCjf4VNI1R7vkxAdElEjN35KjEy8BSXVN8Yes/p78N8cSlw9ocsEzAAAAAElFTkSuQmCC',
    order: 275,
    base_experience: 180,
  },

  {
    id: 472,
    name: 'gliscor',
    weight: 425,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png',
    chain: [
      {
        species_name: 'gligar',
      },
      {
        species_name: 'gliscor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACCUlEQVQ4T2NkQAH/GRsaGhkbGhr+oYpj8hgRQv8ZGRgY/4P4DQ3/WRgYGv/hMwCqEaIpMHCR2P//b7k2bCh8ADIgLW0m66xZ6b+x2Q7W2NDQwAQyXdOrRd5CyfnQjz+s6+882tdxelvZi9DQ/8yrVzOCnA52DQyANYau+s+8Oozxb07OznB2PukVoozXGa4++vHyxuOrFacPdCyAGFz/H+YVkB6IxtBVzKtXh/3NdSjJ0XNTn/z7Lev3E28EOHmkFRi+f/g6cf4064L///8zMjKClYNthgfO/4b/TIwNjP9uZlccFfvLZ1Vz8++vc9zcTMoiKsfevbqyfdu2qg4Mp8L8yBC4Qm3ux51r1L7PZ96qNkH2Ebsy78cHV7J/84sl/+cQWrZ7cWCvg8N+lgMHHP+Awh/kALD1HZGznsz5x3z6zneh7y1WDBEszBKMB899eKfz59YzRiYuoa6VqXIMDAx/QS5lbGBgYGpgYPh3zV1Tcusn1ZVzf/J2aQsr1z3+9F5QnvOF51FmzR6fD+d0tX5sWVLAcaaF4awJKHogvoWABiYGhoZ/Vdrqjq9FHCdc5Zaae2xb3aQii9Ctj1kEpFcfmW0AVQjSA4p4dAASC2NlYFj9iyF0FXP1kw3Gv39/+dh1ZtNNaGCihiqyaciJAi3O4YkAi41gpWDnQOI4lFl7tfb/BgbUhA8Aw8nZEVKTewoAAAAASUVORK5CYII=',
    order: 290,
    base_experience: 179,
  },
  {
    id: 473,
    name: 'mamoswine',
    weight: 2910,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png',
    chain: [
      {
        species_name: 'swinub',
      },
      {
        species_name: 'piloswine',
      },
      {
        species_name: 'mamoswine',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB9klEQVQ4T2NkQAP///9nZGRk/I8ujs5nRBbAq+n/f0YGJAPhGmGaZs7czc/AIPgtPd3kNwNDA1Na2jPmWbNm/cZqI0xT257rwky/PtS/2be2sqen5yuy4v71+wUKAhw+wrwBtrFh/36WBkfHPyVLtqWycLKrdwQ7l0A1CbjGFaVbhAVbcTExMDy/dCV3UkX6o4aGBiawRoeGBpYDDQ1/TF1DOqwiosql1LVMJ/rHSzOzccz2q88VlVJTml7tZJTVsOoqW0OY9i+QHpgfWRgYGP4wMDC4+KdX7Wbj4b1xbuchjXdX3jGkrmhhEFFRLC0zUemZeeYMa7oJyO9QjaGrVjGvDgv727vhQN7pM2cmMrGzM1zfc+yfSbDXPxFZmaXf5q5lvXX91tztd3ftCw0NZV69evVfRqQo4Jt64eHDD+cvC9x98eTXhw/v2RR1dX7s7OmcKX7pNwt7sHHLttXTXkAt+w9yKkgzAyi0ylbtmvP+2q3kN29f/Xvz+sUrPXsHobcPH7qv6Kg8AAkskHpI4oCEakMDU0NDwz8vr1IJIUv5NXyiwlKfPr0NUTEwYHp1+/aTadmJL2BOhEURSspp+P+fSfTANa7Xf7+Jffv683WXv81niEWoqQY5VLEmTXD8Ojj8RU5qWG2Emd7QyMDY0AD2C87EDgCzNN6R1KuPOQAAAABJRU5ErkJggg==',
    order: 305,
    base_experience: 239,
  },
  {
    id: 474,
    name: 'porygon-z',
    weight: 340,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png',
    chain: [
      {
        species_name: 'porygon',
      },
      {
        species_name: 'porygon2',
      },
      {
        species_name: 'porygon-z',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABOElEQVQ4T2NkIBMwkqmPAa/Ghv//mRoYGf4zMDD+R7cAp8b///8zMjJiaoAZgFWjcVoa69lZs35XbDtm2JEScpPh2bNvDQ3/mRoaGP/h0ggyCO6s3O4FZ8WVFF5I83CfSnQ3bfz//z8TIyNEM7KNYE0uLqH8b79+8f/38N0L/fSEOWkmTrLPjp3cEdYa5/l/1SpmxrCwv6gaQ0OZGVav/svAqqYvpad64d/Zh/88GrOYnLUMGF7uP2ZbMq3kyKrQVcxhq9E0hq5axbw6LOxvZlLNHE4xkWQOISGGv///HeHm4dpalx3WgTNUYaFY1TDVgF1OWv03D8dHTmaGi9XBHs9XrVrFHAZ1IvbA+f+fkQEtChr272dpcHT8QzAeQ0NXMWtniUIC7eDBfw0NDfAoQNZMmySHLx0DAMcZdA/9/QWzAAAAAElFTkSuQmCC',
    order: 215,
    base_experience: 241,
  },

  {
    id: 476,
    name: 'probopass',
    weight: 3400,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png',
    chain: [
      {
        species_name: 'nosepass',
      },
      {
        species_name: 'probopass',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACKklEQVQ4T2NkwAIaGhqYQMINDQ3/sMmDxBiRJEDs/8gKG/Y3sDAcPMDQ0HDgL7ocRGMDAxNDA8M/hv8MjKtWr2JasWKapJA4h9Cc6Tsu4bMRZhMzAwPDXys/BjtnS8/NwiJ8337+/biYnUHi39cvX59Xl6yeuGpVKHNY2GqQ7RCnqlurS6loinRunXN0y9ETy4v+s78x+/3zEwMrOx/Dj2+PGA7tv3mxsXqjISMj4////xkYGRkZ/oM1eiSazJRQ4kt7fPXA3IzgNh9Wri/iXJwif9lZeH+f3buS4/kH5vjuidvP2QdqBx1c/7WLgeHBD7BGn2wLIw52hrNfPv0//ubWSU57Q2sDETbGPx8+fWR59IX72Pn3jxO11aS28QhxKT+++jZr38or0xkbGhiYGhoY/rlEa+j+/8dZsPc156MIjtcvQ114p//8w/S5bPvfI0qSzLYSEkycP77+3/P/74+CzbMu3wDbCIo35DhrmxVrz/Tw4QGur38/f5jw3rIunPW30+dPP/dtu/8Qop6BCRGPoQzMDdoJrA0NC37MrfJa/1lKPEB4362nwuuOankxMHwCR8t/BsaGRgaQK//BNcJCKznPQUeFl2f2Xx52IYbKA1NrQtVmM6w+/j00NJR59erVoJQETiQYGssaPGXe/WUS52Vm/tjfsOnOKgYG5jAGBnDcIQPkJMcAsxWm4D8DAyMjWjKEyaFoBHvjPwNjWFgok7a29n98iRwARbPhEbbzJCQAAAAASUVORK5CYII=',
    order: 384,
    base_experience: 184,
  },
  {
    id: 477,
    name: 'dusknoir',
    weight: 1066,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png',
    chain: [
      {
        species_name: 'duskull',
      },
      {
        species_name: 'dusclops',
      },
      {
        species_name: 'dusknoir',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABsklEQVQ4T2NkIBMwousLDV3FvHp16D8GBsb/DA3/mRgYGhkYGhr+oatD0/ifEawBBBz2szAccPwD0YAkDjUBSSNE0ihlicW7N59fPNiQ+cA4foHyk09/OF+uT7mCrhmqEWqicQe/kprc408fXzhxcMt84OXlvv3q5aN5b7dmJoOd3cAIdzKKRlGvqRI//jFttuXd7Lvtrc8ahu/f1zAcL57Q8P8/U4NjIxPDgQao0xkY4E51aNjPcqDB8Q+DQUUlv7JGhTQ7K9/Pvyzb7q7c1cbAMPco9sD5/5+RgZHxP4PZQstoh9/T1IztDJi+vfgrq6HLfOXKY4Yzp27uPnDpYTfDyZLdMANANoIwOCRj67Zed3M11+CX4Gb49unDX1YOzl8M35k5Xz7/wpDVMOWl7q+DmpcvH3nPwNDAhOLH8LRmZSVt82AVQ80QKTkZ0zcPXzE8vH7py4O7N8vmdOesYWBgeI1sI5SNEleMJY2LUli52SRPnV65Yu/K9bfwJoCGhgYmSR8f5nQTk9/ICtNmnmGdlW7yl4GBAT06MBIsY0PDfmYGewYGhoMH/zUQTnLEp3gAHvGskT+LjxYAAAAASUVORK5CYII=',
    order: 456,
    base_experience: 236,
  },

  {
    id: 479,
    name: 'rotom',
    weight: 3,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png',
    chain: [
      {
        species_name: 'rotom',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB2klEQVQ4T2NkIBMw4tK3atUqZlFRUUYHB4e/jIyM/9HVYdW46v9/5jBGxr8wxf///2dE14yhsaGhgamhoeHf/pMnTThY2G37Zi6ft3pW50d0zSgaz5w5w2piYvL7/fv3+t9+/T4kJSbKd+z8+T5rI6Pi////szAyMv6BuQKu8f///0yMjIz/QBI37t6/oygnq/ztxw+GS7dvfYjJLdd+fHT3s4aGBpaGhgawZrBGmDOuXr0q9J+NLf7th0+Nf37/4X3z4SPD+y9f/p45c8lmTlfDCeQAYgxdFcq8Omz1X66qnPoCXeMGZ3m1X6IcbKxScgqM33/8/H/3+QsGdi6Ot1sun2xt7S5YwnD28xuIjQ0NTAwNDf9sCvPaX3z/68k/Y2qrd5LNKlkNqz9//7MyP7398IOgi+PRc8zMPmc3HJhxfemCzNBVq5iRA4eZgUGEKyfCkJeFme0py9+vDD++fWP4zS7IMPMT80p1cfHP3B//rDm3cfHO0NBQuEbG////M4DiKivGXeXXtz/+X3+wfuFk/a3IIcBrfIVRfPqhBTPXgf0IdSFKdIBMWr16NTzikQPDoaGB5QADwz+Qt+ChipacGBscHJhhYvX79/9lDAtjYkAzEGdaJZT2Ad++yr1Pm4dKAAAAAElFTkSuQmCC',
    order: 569,
    base_experience: 154,
  },
  {
    id: 480,
    name: 'uxie',
    weight: 3,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png',
    chain: [
      {
        species_name: 'uxie',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACXUlEQVQ4T22SXUhTYRjHn/ecHdzMLXNZkC03YmJahkxxBFGHJl00CmzHPiAyMBYSXXfXW0FXXnhVGd2EBbVDi4qoWHXsQ0Ld0LSsPMMsapj71n3ZzvbGOeDYVs/d8/D/8fwfnj+CsiKE0ABAeJ5HHMcRhFC+XCP3qHhIiKxD5H/C8lkBXIXGfFM9ajVscb923+7t6j2+FEvta2q0OACWwxhjCmOsOPgHnPXPvamrNe3+Kopps8GsCf35FTQZNm8DgHCxowIoCIKaZdnM1Xv3bfYOm2fdWrWUThPVuDjpO7DH2iZvGfR6GWdbW7aw0UUI3Y1QTh68HZ3gqQrGkUgkJZphqEqNljLUVA35g5lzbKspJgiCimVZCa2u/ySKzdVVuitane5gfCmRjy4nqSqNGvTV2hzNMDTJSnPTs5/377JY/C6Xi1asWgcuHjna2n53k0YL2hQl7Wg0q+o21pKFYAQWo3E0PDIaare2rJ8MfAv12ezyvSEF7Brsn34KK9udWc3i5VPODRSiSKVGTZaTSfgZTlDi/I/UwMRzqGkwVv4e+3DtHe7vU8DOS+fPeGZ87JOeCx5/JnijxWhETfUNEEsm4MH7V9JWfT3hx15ExJV4fiUQejkzeOtESQDMDodd1Fc8hnQOzhqt3RKT7by+8PH0ziXpOxm6w04B5IwAi/MAGQXci7FqGGPJePhQh163xo7iiWde96MR+fxm58mb4UjsywL/8BgAKK8ojRwGCjAUcokFQYVZVpJDwgFH8cDngONo4HlZQ0qsAsaUJRCgfdFoHnhe+WtRydpCjv8Ci14KHyXJ9eoAAAAASUVORK5CYII=',
    order: 575,
    base_experience: 261,
  },
  {
    id: 481,
    name: 'mesprit',
    weight: 3,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png',
    chain: [
      {
        species_name: 'mesprit',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACB0lEQVQ4T2NkwAL+NzQwMWhpMYKkDky7xuh4oOEPujKwJDIAaWJsaPiHzUBkMRSNq0JDmcNWr/67t7pPWo+Xp5H59z/ejxfvrFdc07MCp40NDAxMDQwM/+oZGLhiIkrOqKiraf7++pHh3+3PDHtvv6j0vjarY79DAwvM2XAbYbat13Az/qxsc+aKoOhfmfcff2s+eMnx+euX/qAHs4v+h65iZlwd9hdkO4bGHoYwu7+VDvv/ikgz3fzIziB49uAdq5MPH/wS4VkSc2PWwlUMocxhDKv/ovixwaGBpeFAw5+KpPoeFhGF4l+v7/99Pf9cRqiu5PcPOqJ7opa3vfzPwMDIyMDwH0kjiM34P7V2ienvPUejjH98S/v+lYH1pqpk7dytHZ0g5/3//5+JkZERHOJgjf9X/WdmDGP8u2DOkmZGZl6n+ET/6NyU+WuF3nw0Evj29JJFezz3jzev2x3dHefCNIM1NjQ0MDU0NPxrqu2ylhbjvJ+cm/tMx7tpq7WAiFncujN//3XbPnwgLb4lNtCrGUUjsmYQu6trhuq504+nHP7KeqVaiMvWYUlZnhYDwwkMp8Iid+bMmazp6em/Wxt73P8z8wsdXXD7sG2OXk2VGkMZg1fMJ6jX/qNEB0zz////GRkZGcGScAON01jTz876jTPJwSRAftbS0mIMC7v2n4EBe7oFAKPN5Q9AaW/kAAAAAElFTkSuQmCC',
    order: 576,
    base_experience: 261,
  },
  {
    id: 482,
    name: 'azelf',
    weight: 3,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png',
    chain: [
      {
        species_name: 'azelf',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB2UlEQVQ4T2NkwAP+///PyMjI+B+bEkZ8GvHJYdMIEvsPsu3BgUbx69/fvvfymvyzoaGBCWRQQ0PDPxCNpvE/IwMDI0gTEyMj478Lm8um//j5o88iZNJtJNvBBsM1gkyEmQZR1Me5sKG5//a+970thxhuL5nUwPf8o7BwaW3ufbiNME3GLgm6Vroqk1zM1N8raalbnrl4V+LC9Ydvb507PUlOQY5VRJDdt7WjwQDFqfMWb7D6xci79DeXtILVr2sMvLoGDAefcf7/8u0vI/fXBwyysmIMK9bv6VnYl1UK9grM7fnV07bwcgt4f/z2j+HP10+/v/1m/MfOxsTEzM7xj5+HhVGQl4vt+r1nD75/ehGwcl7zRbDGssJqk6/fvy+/fue5jJ5t4ClOdm67f79+MjAysTKwsjEz/Hxz/u+5c+eZf/5kCT18eMWa0NBQZrDGmPCEfEkZhQmHDu6bevLMoZyqSTu8/zMwOTGzsPJ/f/v8y7vb+wKePHsjunvPBkMGBoZbcI3BvsEa7NwCectWzM0GBTV6xCfGZ637/PXbxTVrFjSCNK1evfovZgIARQuDPRODPVS7g8O/BkZGbgYGhs/IBqLHI8g2rGkTmm5BesHyxKZVcGpBthEA7LjJEoGOYjUAAAAASUVORK5CYII=',
    order: 577,
    base_experience: 261,
  },
  {
    id: 483,
    name: 'dialga',
    weight: 6830,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png',
    chain: [
      {
        species_name: 'dialga',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACHUlEQVQ4T2NkwAIaGhqY6uvr/zc2NjI2NDT8w6aGEV3w////jIyMjP9h4qtCQ5nDVq/+i64OReP/hgYmxoaGfzeq+0xY/7HOOX/9dlvIhkmr9jc0sDg2NPxB1oyicX9CA4fjgoYfRzI7PK0VVLadv3vr8Z7HFx3Ltq+8i24zXOP/VauYGcPCwE7ak1mxQJ1XMJ6FgYvh7ddvj3WmlmsxMDB8Afkd5mewRphTHlb6WXP+Yl/A9emxyjtWob/vGayYv37+ecNqcbMOAwPD3/8MDIyMDAxg/zOuCl3FHLY67O/anhWmso9PndTke8f408bvz71vPEy/DlxmYvr44cOff//c7Ra1nkL2KyMsQI5W9Ru8OnN7gqqLqZ1SiBfDj68fGd/N3vhbgluI9eGHN0e1p5fbgGyC2Qp26tWGBjbthoZf56M7swx8BKd+ZHjy5/drGaYv938zcrMwMH7++fPDjoun40RZeQ+F7Zn1EaqZgeF/6CpmxtVhf/e4VWdZpglNZZH99fP3bXb2TyfZ/v5j/fv/wavXLA9fv2b48PNzTPaBZUsbHBxYYKEKosGeXpWZsVtPi9/lC9O3D+yXRAW+fvjJcOL5/c8ff/0urz+xejosZOHRAQukmQ3zjH5fvuycs7Z/9vrk6mJRVRlNm4rMJAYGhk84EwAsoLClzdDQUObVSEkPI62CnGLPwMB0kIHhX30DyIiG/40NDRiJHQDvHgEicPOJgQAAAABJRU5ErkJggg==',
    order: 578,
    base_experience: 306,
  },
  {
    id: 484,
    name: 'palkia',
    weight: 3360,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png',
    chain: [
      {
        species_name: 'palkia',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACpUlEQVQ4T12SX0hTYRjG32/nDMd0m/+KXOTfzD+soCREcdAq1EQpiy3Ni0JoJkGFYESgnOqmLqQuckMF6yJneSyMaioVm0XlwqaTzCSSKabNzZzb9MydnX2xk4r5XX3wPr/n+Xi/BwEAYMAIAeKvJpOJdOp0WA0ANNCgoYELD7YeBIARAMJrAwLgf2GXGoh1WK1WEzRN80Z8zOmycwefvHgYeNP7QezhBIft+ltyJWskX7m2N1PW+dEhbY7wpbyMoygqtBaAePDCmUv3vE5nUFVd0SFeAevykBk4jxtSnR9xPDGhOtALA2FdeXFlHrkUHKE/0QwP1lbUGtNSE1XipAy3Y9iyI1nAsMZQdKhxtjuCZL/5nv+EY9MFVwsx4z2p79QrNp5aWFzVU5WZdPyH1fJnaWd6LCffDblTFpD77UGLIJmMYBY8nvR86YLbfUNnuE9RFEXyiZWnqutSpDFNHvvEnDRXmSCMiYd97zrgNRMNMmkkmyMRCOllkZt+1pIKAIvhJfFgeV5RcUHpiV5ZlAhCbx/jVUKMgkkZ4JPEYf+vObTA4eC0fcqQlpwIfnbZ0GZo6+dBAJA16zue+mYmC5SDDRGSAATJ/ItgUxSB5f0g+ds13yfC4NibqThrHbeNPOp5sB91ARAaAK4dYJe9TDPmk8VFKhZHBZ7oLHAm7gEYH2I9c070RRRLxgJn8zKBOwOfjZ2oS60mNDTNNV2uL2XczIsRhxcy5vuHvwqzZr8Hoo6eT5FEuLxuuD3L1MGY6e7GP2KMEUIIX29sUgVXV7STtglzd5+yHaCGbai/WS3ZlnDF4XKOHjmUd62kRDWj1bYIW1tr2H8FXYO39DE8wxhjAiEUbo2Ioij/umZ9OUBRlCA7OxvpdDpkNps3FzvcY95ks/Ff/+oopi6W/EMAAAAASUVORK5CYII=',
    order: 579,
    base_experience: 306,
  },
  {
    id: 485,
    name: 'heatran',
    weight: 4300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png',
    chain: [
      {
        species_name: 'heatran',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACbklEQVQ4T2WST0gUcRTH3+83s7Oz6trmtqRY2MVLgkFC0EGbLkLRpWgGunTosBIGG4FCQvCzU2hhGGHuQTNMaOZWJFJQSxBrBzuYGIJlCdlis6vuOjs/598vZnUr8x3e+z3e+/B9P/gi2BuoJT7MzwzHHX8k9aa4FDldev8baFfHGAKE2P9LhDBMSC8AEK88+wvuQBIhfIBvOm9v2ZdogVYBmBPT9zsflwBCMJBt+A8oqyqnKYrbdvPJAFdZe92hFBBzwLFcKGZ/jZr6t8TC874CAEMAyE8Asqxymqa4rd1jJ1wW/GCvr3t0Y9U1PICaWB0LVkeFzHy648uL/qQkET6VIs42SFRBI4oldY08yjhCx7lI1j4kbgTSSy5MWxEnXMzzRl7vXpp80A+yyoGmuKh8YkNr5/FQbd3bimi0Ggo573AsiGmoHnTDdKy1LG/mMq8XX95rL++XFM8MTsZyi5l3rrNVHxArw7ToMBSuQdixAFnUo5s6NvO6Lgqhtrlntz77XyuBx3pG71QExGt0WV/hg8FGyyw6HmaAeRGQ6/AAyAaMA5gLfP24tNAMr+4aJXDkVGK1cCBqJZglHMEshngRqsw14MQw5Dxm2TYVIkJVkYscrMCb2cTsRM+gD6Jkg9InMn72cr2BOhEamzPpp+/IGG2o3n8yggW5kKcrb0SxY6CwbxwbdDmx+LR5t3MA4GHthYs48zN9FdI//GtuN54dCm1477tWp8aHoP2KKWL3Bp0aK4GqLHN+VVTVK1tOPioL2rxmlS0Wb4kHkjNJ2+8ZANqjSCSJh1TKIwC+tZAqy3hea2IEiKfCjgBo7m9HtSB1ZSCsSAAAAABJRU5ErkJggg==',
    order: 580,
    base_experience: 270,
  },
  {
    id: 486,
    name: 'regigigas',
    weight: 4200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png',
    chain: [
      {
        species_name: 'regigigas',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAClUlEQVQ4T2NkgIIGBgamBgaGfzD+//8NTAwMDf9Xrw5lCgtb/ZeBgYEJKgdWwwgi/jMwMDIyMPxfxcDAz5yrxxs8+dITmAFYaJCe/yACzGDI0uKxnfa4qmex6S9uKb4Pt67zLV6/7DNzQ+evxI+3b87bXPI9brsc69oTFx48ANkO0gRywj9fB2mLzQc4nJdOvHveWD9sg7zMn5/fP5/9deSs5Da/lBOxkUbyTmfe/Pe9/ehRIVjj//8MjIyMINeGMu9ddP4YG4uAGQ/PJwZx4V8MP3/wMOw+xfL532/WrIy6xyxmehwKpy49aACFB9iPINBebGNsafJthYQIq8r3vyq//v/4zsrPef4vExc/y6fPvAxHTn8+kl1/wRaqHBQmIODC//rM4wcPn/H/XLD69y9BQTFZZQXGf7ycT5lU5Bj/cnEyMD94ynz02atXSfHFT2/9b4DamBxiGNFczLP84s03/Z4J/w4u6Py3QUT478+bt8WYr9z5wGRrxnwxMYzFcM9h1q2ucWd8/v+Hagx00UqSluaK4OJiXO5hzWjIysaR++LVFwYTPV6GbQcYvvGwvz1jbsRjd+jU73Np1WeNYfEIiQ4GBoYFHQxz5OUsky9cYwzdcfCTWognv6isNFPg67df+bg4fr4+dPKf0MSF16UZGBh+Ma5atYo5LCzs7+rlq53fvry65/KpJXemLrujCg+0Mt0D3Oyv7fOaX+QxMKicZmC4cwJs4////xkZGRn/T506T5aVldG6Pa/q+L3vzx81NoayNjSs/lWe5bJeT98m4PtvhuSUnIZ5+xsaWBwbGv5AkhxUM1rygnhBbxF3fya7AePPv3cKCqJewlIaPB5Bmg8cOMB88KDjv4YGSGJHNxCZDwBiAhQmUgJ8wQAAAABJRU5ErkJggg==',
    order: 581,
    base_experience: 302,
  },

  {
    id: 488,
    name: 'cresselia',
    weight: 856,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png',
    chain: [
      {
        species_name: 'cresselia',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACg0lEQVQ4T21SbUhTYRQ+7+7NubmPJBPxo1TaWvnF0lkJtS1DISoR3LTICiECQygiiTB8MYMkQQID9Z8/QtyQtIQQEm9i4abTNL2b9GGRYer8YG1Tt7v7xsSlWeffeTjnPM95eBDsKIJBgDDwQZgQQAgB2TkT7NF2sCc9PSJ/fNzT35RyWCQSntBcGWkmBqCQGQIEACHYOoJCgAGAajBktIN5/d5Ch1yXxFPNLw2zqlKYnqqGc+LSguVbIx+XHhtZ1veHMSSPPZvRyPvR1bgybhlNQPyTB5FtF4rRZCTlL1v0+pdUncOaTYVBdgCTASijGQLdCnnyvtRDdl9iQphn7SBwzg/OHNlU1M9F8YKp85f2c6bsU4vN5t9i3NT/GmCPIFc9yorUCXScPKB0DAj0UkBDbt+zbGbs0ouco+VrnsCwcWzYusGIMdAYA3c8T5Xz6Ly4T8TRYfabcyQpN5oXnnRRLe+ob8IeX0VJSmTVvGT1WpFlYhyFLJ98CpKIvdm22ChaydtW/d4hQssK5WhqNZp8d39F2fE09NZJ5w0WSgHwyoX6+nS0Xs9w7fVZlacPqOt+vCG8ZJoVcJkrEKMs5ii7AuaSW71JaQuyzg7aUlhrPbbxIyEEIYTIQ3znyMoMmyUZJJVpRZ5wbomPTXRrEAERfBFaA5p8N2V1iN9fvNur3m6OAAHwTddvlzvtb2ur+geVNfu1CmkYuuHkZ0sSJLuH1o2a7sXlXWxNfcPz0GLQIAIYhzfywooYh2OmyNTaFkrUQNnl+15VakFeauEpOKNwYYwFGGP+r8htjx/W6ehqhgkO8NDVJTWNFqyzgLng0j9ZxRjTWoYBPcNwoYRsqPlP/QbWiw0fNA+fgQAAAABJRU5ErkJggg==',
    order: 584,
    base_experience: 270,
  },
  {
    id: 489,
    name: 'phione',
    weight: 31,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png',
    chain: [
      {
        species_name: 'phione',
      },
      {
        species_name: 'manaphy',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAByklEQVQ4T2NkIBMwYtHH+P//f5AwIyMj4z9c5sI17t+/n4XhIAODY4PjH5jihob/TAwMjQz19fUgdYxnz55l3LJly9+GhoZ/jAwM/xkZGBjBViAB1jtPL0uoSOs+xmbj////GcE2Lly+J1xNTdP56c7Vc7n//WiS9ouRPX3rK3NyyLEpkyZ9XuHiGa3M8O+/6ruv3zyePn66K9zfciFYowwDg1DfxuP3dVWV+Hh5OBnYuXkZbt7/xMD8/8s7KUn+b99//JX5+v0Xw717N9a8e/G8OD097BFjQ8N+loYGxz/OkZWWVZlRu/S1tXjY2Ji+//jxm+3Dp2/Mr99/YXj15i3D508fV8eF2YWBLGr4/58JbOPMM2dY001Mfs+cucjcxML9hKyoMMOVm7f+fv3PzMjCxMB07+7tBzduXHOZ3F12d+bMM6zp6Sa/4aF65swZVhMTk9+xlfPsnVWlpgkLCWnxiosxfP709ty1e4+2OpvKNoPkYYGFEo+rVv1nDgtj/AuSnDRpSSqXgEBUSpyPIyJkETGAkQCQNWtpMbBdu8bw6z/IT4wM/5GjDVvKYQDF7f8GBkbGBlDKwRrPDDg0whyHXRM4PZKZxhkA0V23jagDf20AAAAASUVORK5CYII=',
    order: 585,
    base_experience: 216,
  },
  {
    id: 490,
    name: 'manaphy',
    weight: 14,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png',
    chain: [
      {
        species_name: 'phione',
      },
      {
        species_name: 'manaphy',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACO0lEQVQ4T2NkwA8YGRoYQPg/AwMYwwEjLn3///9nZGRkhCv+/7+BiZGx4R9MPVhjAwMDk4+xMbPx2bN/GBkY/iNrsnNjUDy0i+ExAwPDHxQb/zMwMIIUwwT////PysjI+Pvlm48xTx89rDdKM/i3qnHdTWcLR67b5y/mWbjYXWv4/58JbONBM3VFWXEZp4eb9y50hJjM/ObNG4mb9+/bbplbsVxE02FZbmZNPxsb4xmQ+v8NDRCNdwNc1isJiwS8/PJz/2KTQN/S0rivIHEZB4aYYmP7xYW9B/UZGBgu3XQzT2Nm576jsnnfPrDGS2nRuoKHlzbLTN3v/9nM6tn8ufNT589c4x9l+SXtkajcyzTL+NliS2eU8jEzsF9+99bHfOexrYxgaxsgofXk0w+1Ly+f1S2euyh60Z3tDOlmrgyOzqGPlFlZLn/Ojbj1WUxmjtHq7df+/weHCwPD/9BQZoZVq/6Bgr+4NGjJXW7WaOO/n79ycGpw37v2YsX0Jcsi4YEHtQiscVVoKHPY6tV/NwbFW7835D7y7P9LBsdznxgWb959bJoAM5ObtuPaXYf29Ezy9GTP2779J0gPLAEwMzAw/NUWVsvWdNLz15WSFBRasXRGrpoxq+XvX5l//30PPXXq1C2GhgYmBqi3YBpB9H89cweZB0yi3z4dX/0OZKq7o3vYm09vDp89e/Y51BJ4fCMnObBmqF8YGxwYmBsOwFMLshxYCXpahfHBBoSGhjKvXr0axIanUVggAQBdH+aPYB9HtQAAAABJRU5ErkJggg==',
    order: 586,
    base_experience: 270,
  },
  {
    id: 491,
    name: 'darkrai',
    weight: 505,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png',
    chain: [
      {
        species_name: 'darkrai',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABuUlEQVQ4T2NkIBMwYtEHEvuPJM4YumoV0+qwsL/IalE1NjQwMTQ0/GsA0QwMDFevXmVcvXo1igaYZmSNYJsaGELZGhhW/0I2PXxGce6Hp+8P7WyedxFkaENDwz+IRqhNDFnhmprifGulRLhbPzxi38Lx8Bw3l5FqGasQd/62lG42BgaG3zC1YI2hq0KZV4et/pvRmjhbVlQg5dzn73ff/PzDK/GfsWX/x0/v+ESFl7B//pZ2tWnBbBSN+/c3sDg6NvzZPDOnXs9Ep+HN2w8MOy7cflhdNlePgYHhk1tXxqv7P3/tvV07LxJmCdhGmLszEgIU0kLN9nz//Fn58Zcfm7U1FBdcPnPN4x4bO1NN1sRMsFMZGMBhAQ8cmEkMTlaJu7KcZ6lLCrHwcbIwHD1+ab1P9uwgaGDBowqhMTSUGRz0SYGWS+1Ujz25fC+b+eOrcH4Zcfkpr5ncLk5deQvmMpAhcI0NDQxMDQ0M/8pDjXVf/frtOH/jpVnqgmxqNpaa+nfFDFcfWLDgB8yZKBpBnP8MDIyMqKkGPbHAUxTWJLdqVShTWNjqfw0gFzU0gALvH3rSxKaRqGQPAMhEuw9P0WToAAAAAElFTkSuQmCC',
    order: 587,
    base_experience: 270,
  },

  {
    id: 493,
    name: 'arceus',
    weight: 3200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
    chain: [
      {
        species_name: 'arceus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABxUlEQVQ4T2NkIBMwoutr+P+fqZ6B4T8jI+N/fGaiaPz/H6QeogHEbmxsZGxoaPiHzQC4xtBVq5hXh4X9bTh8zuX718/qnR72U9E0MDo4ODAfOHDgL8hcuEaYbaVrj9z/++vdkb5Iv9ipr/bzZIs5fsFiIyNUI8gAiBO9Umcf4lWSFFYxFDv1+cW7hH/f3zZMyYxuBBls5R3l/uvblzNnD2x+A9IIwmBNmgxRdlZ9Xkt5hBVkPj+89fXLk0/1Py6eXLLp5PKXZi6R1fxS4i0Prl9Wvn167z1Ghv//GRkYGf/bx9UsvX32/4rC5eEiL66/mff2zt37XKrcWd8+/H/BzcTA94+ZedmrG3dPru2sDgZZAnaqsXEa6z/hN5b8TPsevf8dukbW1lvcIUBH6j8rMxMbOwfD/WMnJn9h+to1JybmCdS/MD9CnGvnFqr4mY3V1sTS4RLjzz9br50/W6GqbzCHR4h/4eSiuLSGhv0sDQ2Of+A2ghgODg0sBw40gAWNnTyVuTjFMg5vXThRTc66TNXZ/PrW+X3TQ0NDmVevXg2KDohTkQCjg0MD84HPzxgZzs76TXTKQVWIiCK8KQeP6fDoQlYDAG9gvBEOMd9WAAAAAElFTkSuQmCC',
    order: 590,
    base_experience: 324,
  },
  {
    id: 494,
    name: 'victini',
    weight: 40,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png',
    chain: [
      {
        species_name: 'victini',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACNElEQVQ4T2NkgIP/jAwMjP8RfPwsRmTphob/LAwMjf+0tOoZw8IY/oHkGhoOMDc0OPxlYGBk+P//PyMjIyNYHKwxNHQV8+rVYSDmXyJtZARrnNR7zYKXk3fOk0cf5rNxfF3JxSNlklsit5Xh//9/XX2PPG+c3nNu3orkZz1Nl9qvX37WPXe1xzuwxqzkVSrG2q63+XkEGE5c2r1QkItVTVLWQOrH6wd/3t89IVS9dI/59M6OiUKCMp4LFqxU2X4s4S5jQ8N/poYGxn9pKesLWNlZ+h4+u/1bkf/dGwfrSKmXT7cyPLol/+Au08cz1tq+IU+eX3/eM8nJiIGB4QVK4DCIM4gF6qSvEGVidhTVcvjJxCnJ/O/bN5bv904wPBaRYXhwb+er04dWmTEwMDxE1cjAwCDGy2DlHTLtqMx/QQapb5//7vt75x//56e/XrPycb94cXn2ybNH0hwcHFjAGtPSzrCqK7Ao8nMLsa1YXv1XUM5gj4GssRQLExvDk5+PGH78OcNw/9b9WXv2rC1jYGD4CIoNuI3NNWeOyEpqWp+7dDjz5883TCLiKlPP39n8gJeJc8X/f4+v2thrr87Ly/sZGhrKvHr16r+MDQ0NTA0NDf98fbsV2bh5K0T4hGOEeSXZX7y93zJvQWwbAwPDL1jcwjTBEwBMM1iBlLKsrJQe/+Mz669AUk4DC5QGJQ54koQ7FaSZgcGeqaHB8Q9SagIlL6zpFyNUQQZcvXqVEeQPfMkPAJm049UmtQsJAAAAAElFTkSuQmCC',
    order: 591,
    base_experience: 270,
  },
  {
    id: 495,
    name: 'snivy',
    weight: 81,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png',
    chain: [
      {
        species_name: 'snivy',
      },
      {
        species_name: 'servine',
      },
      {
        species_name: 'serperior',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACiUlEQVQ4T22SW0gUYRTHzzc7u+5qEpO6eX8ozbQiJRIkhFYoe6qgdnxRokjoQihqECQ6UkQPEvWQtVOWJVo5YIg+rOm6E6lt0Zq76uJlcc1Ls+aK90vuNF/M0EKZ5+38v/Pjf/jOH8EWZbVaSYPBIAaecEODCtG0BAA4oKHNHMZYhRD6JetGgAQOYA4AZv/MyfMK/A+IMUYIIWyz2Y7Nu+0VkoY6TGi3LU/0WGrymQfFACC7KrACygDP8yp5PVvvQO7k7EotEKEwIsyDPkSEExnJ0FFveplXePMcxphACEko4BJY2WztHvzh8iRFJaL1To86aEhYl0ovZGN3az35NL8wswWgs8FoVCmOdXUtVHg0FcOeOYJP3ijoUQ+GaBJPRWNqTzia9mIYd3j8G65W9YwYVFXy7N1VK3OUVEC7s98kEqrG2/uTt5+/X/RG0qnF0LgMUqtZg8lPHPh6+qQdcfuIucUVoc3hzWq29w0qoOe78G15bbWipuji3vT0tOsLvj4x8/IDctw9AuLqOni+dAN47f7wML3a6Zm5dafxQ5kCjk4JD/UREVdGR8f8bmev2kKfxTl8B45JTEJLi6togDfDhLlS1EWkkgNu4RLLfzYpYHVTU+ih3QnPZ33zB7pb3kYNvarUpeUWkjklpeBxj4ltL0yE8LVrI5jaqd346ecfWTsNm38VleVkD8fHxic01z8xx9IFqbu0KHKp/z0sEHoI1unAOzPdVG39eFpxZBiGKC8vl+8jslVV1zQEcbyW44otFsva48q79/SR+qx27jXrQ2HOqWFHV5fLNb5lcjbHMK/VEVKbfXDlLx39n1WGIbiUFETTNDYajYjjOCW38tHbKYpgWVbupd/xCCj58bn8KwAAAABJRU5ErkJggg==',
    order: 592,
    base_experience: 62,
  },
  {
    id: 496,
    name: 'servine',
    weight: 160,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png',
    chain: [
      {
        species_name: 'snivy',
      },
      {
        species_name: 'servine',
      },
      {
        species_name: 'serperior',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABbklEQVQ4T2NkIBMw4tHH+J+BgYGRgQFEYQCsGmemzWRNn5X+G6S6gYGBqYGB4R+6TnSNID7MBoElRkHuMefWrVy1ahVzWFjYX2TNyBohmlb9Z555b3W42/d7Ta+fnbtnNnuVG9jmhv9MDQ2McJvhGv///8/IyMj4P2njRl7es5/Xu3+57/z808rnp5Q7myQ05KUbA3VqYWpABsE1rlr1nzksjPFvy8rjGUeefM/ROrnjmuX7S9+qbDK9NHl4+zcVO7U7NOxnOdDg+AdFIwPDf0YGBsb/FRVLBTu4hIOnsn3K1BSWMerfsXnl5rXtEf///2diZMTiVIjHIZrBTPZUtbBwtZP6Lx/UVO+cOrXBoYGl4UAD2DY0GyECoatWMa8OC/s7ae9js70Hj0zc2BTpxcDA8J6BoYGJgaEBM3BgJsH8Wjhrb82H/+xf56fb9MMMwxUdcHHk0ENmE9QI9u3//4yNDAyMDUgBQpRGQmkfAMHslg+c2uORAAAAAElFTkSuQmCC',
    order: 593,
    base_experience: 145,
  },
  {
    id: 497,
    name: 'serperior',
    weight: 630,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png',
    chain: [
      {
        species_name: 'snivy',
      },
      {
        species_name: 'servine',
      },
      {
        species_name: 'serperior',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB10lEQVQ4T2NkwAMa/v9namBk/M/AwADCKIARm77QVauYV08L42Q4wPAFKg9Sh6IZXSNcQWbv9I1cf7hu9pbHl2HTjKKxoaGBqaGh4Z9WaAObU5DEwY/s3ywWL14UwLD+wkaG0FBmhtWr/8JciNWpKbMn9bNqfCtQ+cjIIPbT8N6XVz/tMjN9n8IMBmmGawwNDWV+dJ6N++SdpZ/cGqp0xDnZlgQrW6r/4eSOD/G2WYXuXJBGuL/cuiMX83JxfFj7el7+svmMTefddKufsDH0nWHR3ajM+e3Rjo4ND1Cd+p+BkYGR4b/X/FAJtvecFRsuHBdYpp8t+IeD0W/rh82nP/DKyP59+TlnT+vatTDnIvwI1QwysbNzsbqptcnaH39/KB2+c3JDe3JGFM54XLVqFXNYWNjfVdsOacmISi/cvG59bHt7ya1z5x6uYmJlXWagK7Vu//7/LI6OjH9QAgcmuGbzsW1sbMzSfu7m+iAFi1dvdpCRVt1/5949y9QYrxMwC6BO/c/IwABOWtzzV+y8xPD//9LESI+6////szAyMv5ZsfHw9V8/v/+NC3PTgYUutgTAxcCAmtRcXEL5dXW1Rfv7G+4xMDD8Q3EqrrT+//9/RkZIQkcBAMCMwxC1hgRxAAAAAElFTkSuQmCC',
    order: 594,
    base_experience: 238,
  },
  {
    id: 498,
    name: 'tepig',
    weight: 99,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png',
    chain: [
      {
        species_name: 'tepig',
      },
      {
        species_name: 'pignite',
      },
      {
        species_name: 'emboar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACLUlEQVQ4T42SX0hTcRTHz/ndTWsX55+Ypk5qg/UyG4RGQQbbSxBUGnJFiVFPFr0I0Uv0cqSHoF4SISp6ihLxShQUVlKNiAyriSnFsqCVdr2uzLXL7vTu7hcXXa006Dz8+PE758P3nPP7IqwOHJAk5vL7ESIRuBhxcRnkHADwwlJcA/yvpzXBvoMdTRsd4gFFTeBo7O1Az+d3LzgAYoHqL5ATMSTKTbSFr2+qdB8SMhpoKR1icQ3imtYfnrzTwYEYAlltwypwvKX1msPtC39NfMk4mMDiT6JGUmCD4U9jRwpVC1u17hyGeWnf3e6HupltmPIE4N6o+kCtc51SzrdHiXNGiL8ViTgjwhx03pTOOZcuHZ65XzyuzIsXdp0wK5goiKIBprm45+rp4DDRYxtRKGvNiwDIIXBS7Nle/Tpsm/XqCwqMTGn8xu4uXF+6zqiprbRPf1Ti/WebtgHAd+AcMb+UofZjm6v0Hy/LOW7QGeT01Dwbc++HIc+OnMPMsIQ69y2pRkMjt89MSJIkoHXIsmxubQw1B2zirXLOjBJmA+fijJDytcCkN4jpZBLTc7HuZ4Nd1NB52f7qylEDAYgBUK641rulzFf/1C6WuEwOoKhxAHcz7CxzGwKYz2ucRa1yb1vCahMQrfmsWIYbq+rqsxXVe5kdDXt6abrIs09RzIXZ9496PyzXreyj8B/z8D/9tqKUz/9lOWLBYIRZyQgASK7jXPa/4UBkGfwPk/8EfurwEDIK/HMAAAAASUVORK5CYII=',
    order: 595,
    base_experience: 62,
  },
  {
    id: 499,
    name: 'pignite',
    weight: 555,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png',
    chain: [
      {
        species_name: 'tepig',
      },
      {
        species_name: 'pignite',
      },
      {
        species_name: 'emboar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACB0lEQVQ4T2NkwANWhYYyMzCsZghbzfAXXRkjNn0NDQ1MIPGGhoZ/UHmQuv/IajE0gjTBNMwo55nAzS3xKrbuTltDAwNTQwMDzCAGFI0wTQkJCQJyvJ+sVVVUtzx6cG1tdf/mEKgL4IbCNc6cOZM1PT39986dO7m/vLtzgZ3hpwrr/99/D5948FFAUvJoSWWdH7KzwRqRnTenpyyWkUN4EdOvH/8ePXn9n5WDi5mTm4Ph472myIa5DCscHBxYDhw48Ifx////jIyMjP+n9Pcb3b14IMJA8WXp9Rfy/9iYuP7/+PGD+d1/4X9aQlcZpMXZmS4+4HVrm7p6d0NDAwvExopCpfdvPl4VFhbmeHjv8AkpUYFPMprubg/vP/v7+ulNZnbWr3+YWERYvv5kuiWrLmHZ0ND/DqyxODPV8/H9x+sEhflvcEjo5psLL3C48cKp8efPLz81pe6wnbrGwvj+EzsDN68oA7eogMXEqbNOwgKH3dLSUuT48eNPQQZNavDke/OSade/v1/Nn7/6wPDrD8Pvl29+FbNxiD3fcuDAegYGhr8gjSiRC0otYatXg1OKpppJtrQ435TPXz4znDz/UIWB4dVdBgYGUOL4B7ORsaGhAYRBqeM/cmS7O7m1fP7yQe7YqVNpDQ0Nv2BqsCY5WHw1NDAwIqcWvEkOa9plYGBqgKRVeHoFACSs3pNOSTGLAAAAAElFTkSuQmCC',
    order: 596,
    base_experience: 146,
  },
  {
    id: 500,
    name: 'emboar',
    weight: 1500,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png',
    chain: [
      {
        species_name: 'tepig',
      },
      {
        species_name: 'pignite',
      },
      {
        species_name: 'emboar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABq0lEQVQ4T2NkwA0YGf7/Z2BgZPyPTQkjNsFV//8zhzIw/GNkZPz///9/FkZGxr8MDAwoBmBo/P//PyNIA8TA/SwMDI5/QCxUcQYGZI0gNkgD28ylu7PlFMRczt58xpnmatBz5PSjk0FB5m+RNaPYCJNYterwCVsrfXN2zn8MDEwsDLZeLapXj3fcWbVqFXNYWBjI2Sg2Mqxa9Z85LIzx76njV3u+ff5RzPDnF8Od91+WpUS7Rv///58Z6lewJ9BtBAXEn4cPn/pevv5g48uXrx8tvnrBZn9XwzNQMCGHMFxjQ8N/poYGxn8Mzini1+a3X35+4TyfgorMkzcTGv7fnrWqPYaBYd5+BwcWxwMHwIEF1/j//38mRkbGfzfO7ZLadofzhvTbR7zu0YEM65onvbnaXaHZy8DwpoGBgamBgeEfhlP379/P4ujo+EcvqDl5Vl30nC+/mBhcpu7azbAwzQ0acOCYweZHeBwuW733wLcfXznObdoYM2313Dv44hGWiGDxyczAwAAOeqiX8KccsLL//xlhIdjQ0MDU0NAA9hcywJpWkWyB+wldIwDnVb4PZKbWnwAAAABJRU5ErkJggg==',
    order: 597,
    base_experience: 238,
  },
  {
    id: 501,
    name: 'oshawott',
    weight: 59,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png',
    chain: [
      {
        species_name: 'oshawott',
      },
      {
        species_name: 'dewott',
      },
      {
        species_name: 'samurott',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABjUlEQVQ4T2NkIBMw4tT3/z9jQ2MjY0NDwz9sanBpBIn/B2v4/5+RgZERwkYC2DSCNbnvOCb0ifm3/HFX+/PYNGNoTJs5k3VWevrvlCXLQ5iYGN1nRUWkNjQ0sDQ0NPzBaWPD//9M9avDGBnDVv9dNaPrENuvL6wBeU2W/xkYmBj///+P7GSEjUh+aV+7sz7r682GOx//MCzgYI+fnJq9CN1WiEaoJr+Nu6RUZMVNfj56HBZ+YE30KyZehlWWTr2/TBxa8h9c+OLo4PAXZitYY+iqVcyrw8L+Ru8/YuEsIXz82B+GYO4Du5K42Rn/7DP1nJDI8m31xmdvfba5O52EqQXFExM4rtbtUWuR5a9Q5uX9d+3tx7nNzGxvGJjYPhd+eq1qJSe5/vmX73PyjAwq/v//z8jIyPgf7ke/jUd4N714/5ch3fcbRoTXz+SqdjdIOvbp6/79Hk5XQZbBNMIjfP///yzTVq/+v/ratf8M9fX/caUe5HiEsTFSCSjwVjEwMIUxMv6FuQZ3WiWQ+AE3SLCReJi86wAAAABJRU5ErkJggg==',
    order: 598,
    base_experience: 62,
  },
  {
    id: 502,
    name: 'dewott',
    weight: 245,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png',
    chain: [
      {
        species_name: 'oshawott',
      },
      {
        species_name: 'dewott',
      },
      {
        species_name: 'samurott',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWklEQVQ4T2NkIBMwkqmPAavG//9B4quYGBiu/WdYfZWRMWz1X3QLMDSCNDEyMvwn5BIUjf///2dkZGT8v7/BgUPBzq2P6fdrgxdPri43T941ef/+BhZHx4Y/MANRNa4KZQY5a31X2DJPE63INxyqDB9e3WZ4eatBxbmM4e6qVaHMYVBno2psYGBibGD415Wrk+RswD3pFUcy+6uPX1l+PtmenNa2c/GqUMZ/YasZwP5F0djQ0MDU0NDwLyWn20lLU23dvy+vv71/dGOXjK5XDDsv5+mkaEtHBgaGHwwM/xmxaiws6zPj4hU78OPn78t/vn66LKukGMgrKFSUHmOzEBYOGKEaGrqKefXqsL+xwekmbHwCocyc3BwXP7yZcnLZpNvIIY01HkNXrWJeHRaGEnerVq1iDkMSw5lyQkNDmbW1tf/X19f/b2xsZAT5naCNhCIfI1SJ0QBTAwCx54gPF9z7gQAAAABJRU5ErkJggg==',
    order: 599,
    base_experience: 145,
  },
  {
    id: 503,
    name: 'samurott',
    weight: 946,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png',
    chain: [
      {
        species_name: 'oshawott',
      },
      {
        species_name: 'dewott',
      },
      {
        species_name: 'samurott',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABg0lEQVQ4T2NkIBMwYtO3KnQVc2hoKMOBaY2MDgca/jIyMPxHV4ehEaQpbHXYX2SFDQ0NTA0NDf+QxVA0/m9oYGJsaPh3xn+yrqCCQP7La3efWu1u6GJgYPi6KjSUOWz1ariBcI3/Q1cxM64O+3vGosmcxVNth7KAqMA/ATGGfRvWXgtc32DCwMDwHdlmDKeeypl79oEog57ct7+/v1tobOJefzHk6edXewPXN7vDXARyMqpTGRqYNsaxO10wUC8WFhLzuHL5Ur39/ReuzH9/Xwzf2J6Dy48gQ8ChV1I3q01YRCLh6YN7ZfvWrbh97cGJk1BNcDUIP/7/z8TIyPhv6drzs798/Ghw4fzptxYmRsmM3CKZ947s62mYUPjh////jIyMjGDDMTTOWXIs6c+fP10Xzh2/q6KmxS8sKPozMdrClIGB4RdWjcjuD0ytVFMSlHLiEBIUa62I6WRgYPiJHpeYCWDVf+awMEbSEgDM1lBwkgPxQhnCQhn+MUD9hTPlkJLeAb8Spw/1VIomAAAAAElFTkSuQmCC',
    order: 600,
    base_experience: 238,
  },
  {
    id: 504,
    name: 'patrat',
    weight: 116,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png',
    chain: [
      {
        species_name: 'patrat',
      },
      {
        species_name: 'watchog',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABaklEQVQ4T2NkIBMwkqmPAUNjQ0MD0wEGeyYHBod/DQ2M/3AZjKrx/39GBkbG/3DFUH5Dw3+mhnqG/8hySBr/MzIwMP6P1kuReeDnZSb68829Dd1pF9BsBKkHGwzWuL+hgcWxoeHPooSi1NeattNuymqz3Dt1cNaeCanpsSWLuNXkxcVqc90fMzAw/GGAuoIR5KeGhoZ/cwoLhc4ImN8wM9QS5WX692P2/ktHdvXGudZUTHcQlZLezS8usefshStxk9uTXv///58RrjEpqUHqr6Boq7S0nI+ksOC/p68e37p7+0a0DLeQoYAA/2xxKZlzGUeXBDAsWPADrBHkVJitvdM3Gj69fZlTStt63rsnD1+/f/3yCZcg37fnr55vWjazaRPIfzC18MCBCUADQ0Rf2JJdN9jxH4+U7N8ZDZmvkC2ABw4s5EDBrqW1mjEsLOwvcmhCDK3/Dwp1mDjWlANSiKYRIyFQL8kRm3YBFrufCws1k+UAAAAASUVORK5CYII=',
    order: 601,
    base_experience: 51,
  },
  {
    id: 505,
    name: 'watchog',
    weight: 270,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png',
    chain: [
      {
        species_name: 'patrat',
      },
      {
        species_name: 'watchog',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACy0lEQVQ4T2NkQAMzF66Sk5aT5nv1+u/LpDC71////2dkZAQpYvyPrJSxoaGBieHqVZZVDKJmETbmRQKiEj6f/7O8fH/7nHFPQ+mr/fv3szg6Ov5BtwBsVnZDb4GBrnE/M68ww9GrD7/NvXwnjmFewdpV//8zhzEy/p25+QxXuq/JNxQbQZzcxmnlDsaGHZc+/v745Mq5yXPYC+oZ6v8zMDIy/jt9+73/u7cvVN0tNHuOHXvMaWUl+x3scLCNlW3mr199qPooqu1nryxwQ4r7X01CVODaCXNW95lZWQcyMjFt+vXz12d7fbkWBgaGHyB9jKGhq5hXrw77y8DAoKCWu+SYk4GKpNqfO1uZmJguC4hKVYiIiDKIS0gwvHr5YqK3tXYZAwPDL3CANTQ0sDQ0NPyZNHd6wrvfEvMZuSUYZHn//37x4sk/cVFhdjYW1h/sHGxHJCXEe231FXckzDiouiDD/g4jLABaZj9p1dfmrvrw9tLPWUc+sPJysf6x0JdlubB7x9d1U7csZmA4eDKyY1WipILixr4I0wmMDg37WQ40OP5h0NuU1VkgNJWR8R3D8TdcDK9fPmdQUxBheHT7DsOXVy8ZhCXEGf78/T5n56SyVGjg/GcERa53ed/a9w8fBKlISt3+LGMq/entK+a9bZGzfMumhv/8/l1w1+QSSwYGhrOQKPkPSRMMDAySWd3rn/14/WTWvK7cOo+8CTelVXT51f5e0jp+50uyrJxyMdePZ16d9SXb02bOZJ2Vnv4brLFrxooJcqpG+XsPHo758GTPPXE562Mi4ioM/7488GNiYleVVFDrPX70QMOCvurGhob9LA0Njn/AGqcvXh/28dNPyYrsiJmgeFq4fveyn39YI9NCq02buqK5Gdg43V69frV+Smv5GVASbWho+McIScSoCbhjwkK5D5+eiYrxsF8rKioCpxSwz5DUAgCd0y8eZcOdmAAAAABJRU5ErkJggg==',
    order: 602,
    base_experience: 147,
  },
  {
    id: 506,
    name: 'lillipup',
    weight: 41,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png',
    chain: [
      {
        species_name: 'lillipup',
      },
      {
        species_name: 'herdier',
      },
      {
        species_name: 'stoutland',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACl0lEQVQ4T31SXUiTURh+z7etVNQ5h3+b+RfqRQOTwiLMjDKIKdbFDLUbvUisLupCIcs8BF6EsMoCjcgmmsN9oGY/9ofbSkiowN9UutDa5z63Nb85tfb7nfgGM4nowIFz3vM+73Pe93kQbFsYY6qlpQWZTIAcDppwHEexLBvEGPPb84Qz+jvwrzshRAwAAhghhIJbQOP4xNmoqMgrEhI5D3xgdT3g+mC1s1MJlGxfwB3Y33DmQuM0THPhooQQFGK829HdXFRw8EZWRg5QGwBOmwfs3mXwEx5cdjvI42Qv45Up9k23exdjZTrVpwsNIWBtbaMi/8DeghxFZp4iObWJclDUqm1NJJXzAbfLLk7OVqGY5FhYcbDtlq+zuLS6lEPCQMLNP773pGgzsGFOiU2CmKhEPj0tmmKXFryWVXjt4r531TXXjQKA22AwiEKMfQPDhT9sK+eCbsIzi9+qsrJzvT6/Jzo7QUXk6XK0ZFmor6wp7+xs1T1yMq5bVzsuTYWAul76xMzkxB3rMpNWckQ94vN5D6/73Yk5EpUvLS91B7fufH9UXVA00jU6O/Pxy8OGjotaJNBWVFQII0Zzk1aLIilF+YYeAdbCQEllmV8aGyfp1/XOZ+3OXJHtjC8eNr2oart/TS8wCptkFBdHvNLq235t/qz/bB5nOItTeaxKLZbKpP6xsTFJTIQULMyiaYB/d9KEdZ7QV0O6IEQe9OibVImq1rlPs9Y+bf/5/ON7qstrNBri4eHZ4NPbN7uvXxbyhYFuMQKAaPD520ZRUOSgtYPjPab2Gf0QfShdmTvELa/Z1KcOlwHAEsZYjDEO/M9yglQSoToAeAQmjUYjomn6j+XCVjIajYInwWw28xhjInQRftuutxD7DaRbLp/+2o8KAAAAAElFTkSuQmCC',
    order: 603,
    base_experience: 55,
  },
  {
    id: 507,
    name: 'herdier',
    weight: 147,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png',
    chain: [
      {
        species_name: 'lillipup',
      },
      {
        species_name: 'herdier',
      },
      {
        species_name: 'stoutland',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACLUlEQVQ4T2NkIBMwYtP3//9/pgMHDjAxHDzI4FDf8JeBkQGEQOA/TD2KRpCGs2fPMpuYmPwm5BC4xv///zMyMjKCTTy4+6DmdyYGvyerMs9IvLuW8eCNwa2c/ReqZ6YZs6bPOgs2FKyxoaGBqaGh4d+6VaucGFhZ45TkVfzZeHkEnp/Zw8D69C7DgxffGZ72TFSsZGB4kJaWxjpr1qzfYI2rQkOZw1av/ps9ZZm2KdPHTdIqykpf3r75+fPbdzbBX89/cT84zv7wJ+/K6AkrImAWMf7/z8DIyMjwf11coDCzxM/FLLrRVrxyirysnz/9e/fq6X+Wg9mMn2RyGL7/YWK5+fjZ3tZl1z0ZGM7+ZoTZNq1/0jTB3x8zX7ML/BcVl2T8/fcPw81bNxne7z3HYGEiySDF8eT32b/qrHf/s/jM6uncCnZqXFScmb22zPH/fOJM567eYLi4b9vXD8xs55n+M7zjl5G91Nncnfnx+QPB43sOMn18+WbtpLXLQsAaW9q6GpV+PEp+fun8wSN8Gru0uFj3tM6Y8RQkV5GWm2NlZjj507fvDJcvXX36i5M5qX/y5F1gjd3d3dyltx1/McxCxB8spF0YGCySZsxdfu/sxR133j9b5rV69bEwRsa/II0gDI6//Q0NLI0HDjCIior+X7169T9oIvi/9PAlwWhbvfdIiYIRbCM08lGSFExRaGgo8+rVq/82MDAwMUDi+y9IC9a0ip7cYM5GFgcAjn33kip5tDgAAAAASUVORK5CYII=',
    order: 604,
    base_experience: 130,
  },
  {
    id: 508,
    name: 'stoutland',
    weight: 610,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png',
    chain: [
      {
        species_name: 'lillipup',
      },
      {
        species_name: 'herdier',
      },
      {
        species_name: 'stoutland',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACi0lEQVQ4T32SbUhTcRTGz3933rs5nKkpUmIYKlaa5Hwje1lWHwIRQnZVkEQM1wfNoiAocX+hBCdksCQ1U8oKvWKkyAzBJqISqDOyFPMlxEzbTEunm97d/cOrhWX0fDzneTgcnh+Cv8RxGmrY9xDCp7Bza4UAgJgwlqp1WEAIyMZ8Y/gfqWUAnY7tBgKAEADZEcR3j8d2MDFJD8PlsUrKHJLRRX8K8gx1vyCfH+h+XVt86ynMEiKGAQjHUYhlhYnO8vS+scHn/Q47lJzbBYs2BRS2+0JKyBKEMbPQbR7Wpxb03jBhtVQM9lfmuEVrq/jBF6frKCYpYwnttfu50tzArxlJlQcIP3VHGPscwvSO/jAV60sSxR/Fs1sP1xeBNjS2qoJ4qJxzbw1SZVAy+ARGgDDbCKMf7a5FRaTEW44upaSlVIoXOR0EBkRcvW2zTYfPLB8+4q86D7sXW13EKxoWYA9i5rqR/VvvuixYSw+/GynPzc/OFYPVpdcrvPbFaT1sbTAysdoREJUZFBXmv9/B0/B1ZpIIK33ESzYhcfDBa0cxOghDeFIMtrQYy+Yslivo+/TQitPRkXCGzaecEsFiXRbcFRTzfsTsklIyCTPf2pVZ0HTyd48Y18pIf5afMz4bsUnX3sxbLe5VZTUxDUbrql6fHKc+EV23vsZLjt2si4SeB6MajYb61aNIh7owKzVRFV//YcYKDQNd2fCovQYA/Esbq6dWFE4at73KA8PL+2qMN+vQcBzVyLJCTEY620cv5YGP0i2Kpw3me4+fJeRfPNvjuVDjLZfS3l9kzeOGJzlAyCYA25n8gz8CaANKY56RHje0wWUw8ADg2skqxhLQ6USIoagIAcai6V/6CQPOBeXMP+NaAAAAAElFTkSuQmCC',
    order: 605,
    base_experience: 225,
  },
  {
    id: 509,
    name: 'purrloin',
    weight: 101,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png',
    chain: [
      {
        species_name: 'purrloin',
      },
      {
        species_name: 'liepard',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAC10lEQVQ4T02Sa0iTURjHn3N20TVnGi5vy7yVlw/6wdJcmWkfahihxhAiYaRpeE3SNMQ4HySYRJqFkZqpiBaaglhYakpIzsoLmvfMpmBLlDltzNdt74nXC3jggef84cf/Of/nIAAApVLJa25utnK9SqWyra2t3eJ67mQnX3XWjBthcLDn774GAAjtX0JCFD4iEc7v7zd0lZYo5l2lEk+hsfdHfEbbrFweU2ilNAEDdMtk4jzOZAf0D4+RO/LZTu0KX/IsE9Qn/YIzKDiInQS5LLZCaXT6ZbOri7jAsG0CHqA0zZd3zxEAwTflA3EhiL6qWheglARLTqBs7vGilpGcPWUA7RLvZXSlPLJMBL4O1NqgAkEd2Tj0eXfUMIWsXmBuHB3EEWHlku6tFVHE8IzI5no8YjQDXQuNb4P873qY9JssLUoy4VYY+vAHUQCMANinIYpMG+G/MveMIExHhUAlFtb39CJu79Jq7VtlFlentc6P3yfqKmDjmxKUPM6RKwqQKK55qIkK8I5qXGs3S0QXpVYXp6+8zYW+iDN3oL+guEQplp0YLlLFzVNKd1Ml5AKfkD7LeEdiwNKyzZCwSS9ir/lZnL3W+ePzhwduZHlGNr1xK1xdXUvKTFcd45g9kGBCCAs5de49x7emjj6pkazm36LGgCD4NTmHGMa4JXV2tV36vTxUdD81FADYPZBiQhD7uqWlzKAzZU89qmc8bsdjOzc3ngBvIyeplAqxBc+PdBWl3VMXE0L4iJBdt+pLcMQ7o3qCQY4uHe/bYXuTAfm58xDgLdpe0RmALxQLf85M9mU9KI2ihGBECGBCgC1PBplXeO7MhhGQfkEzMjS91hspdwz2DYy9MjY6DZt63aKJYdSkqqeCY7h1cAnRhvIwezvDYOjAGMyqm2GRC6CnNtbHqNfm6XQjbSlq+AQAZkoBIQR054378IFPDC9SUgSplZXmg9reiCyn/QfexDtWR8ua8QAAAABJRU5ErkJggg==',
    order: 606,
    base_experience: 56,
  },
  {
    id: 510,
    name: 'liepard',
    weight: 375,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png',
    chain: [
      {
        species_name: 'purrloin',
      },
      {
        species_name: 'liepard',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACcUlEQVQ4T2NkgIL/DAyMjAwM/0Hc/6tCmRnDVv+FyWGjGaGCIPr/qpnl/Lff8HFUV1e//P//PyMjIyPYIJwa//9nYGRkBNnmyXdll84e5t9vp2l6z1vw//8qZkbGsL//G/4zMdgzMK1+vfp/WFgY2CUwG+GG3lhXtE9M8qeNkOVUfgYGhu9nZs5kNUlP/w33EtQlYI2rVq1ifh8axiSY2VWsqsvSru9wl+HQqa9uDokLdoPkd+68Iyb49ovD958fr9sn2l8GewNq6/8lfZF1ohx/0yQUzKQlRb+/XTu3Vj9zBsPTY43b+zhZOQtFxKQZvgkxfrny8KJacGHwcySnprEyMMz6vWZuw6Kv37gZ43NLY3dkLJzN9J9B6f3pa2f0nV3LGIzlHiWejNc43n/8O1zj//37WRgdHf882J+Xffhhctm5hGU5HqFcXO6r61duDpnQrOVgX/NSmMnFKlJ/7/9V/5nBGv8zgNwMCfrtXT0nXwhnmF16+vrR0ytr8/1Z2NSFxaXsWWTEC1yKbW+BNYUx/gVrbGBoYGpgaPiXzZznH9AhuOHXW22GE9KBDFyMvxi+XtnFcIflyjILRbENP27e21Uxq/MjKFwY/zc0MDE2NPxbGNDc8PDBF0up0Dt3Gf8aBr58YiDxT06D4dH1Q9stvl9TYDQQ7Ep8Xb2cYTLDT7BGWPw02eRnvWf6/qH/0JE1DGmcnDWPFA1lX/HY80gqKPCxCjg/2/A0IJ2h+1yDQwNLw4GGPyhJDnviMmZlUDrL1RDn8LWh4cAfmBq4jatCVzFfe32NseFAw9////8zNDo2MtszMDA4HmiAK0Y2GABAGv264pHNVwAAAABJRU5ErkJggg==',
    order: 607,
    base_experience: 156,
  },
  {
    id: 511,
    name: 'pansage',
    weight: 105,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png',
    chain: [
      {
        species_name: 'pansage',
      },
      {
        species_name: 'simisage',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABeElEQVQ4T2NkIBMwkqmPAbvGhv9MoVoMjK+vNTI6MNT/a2hg/IduAYbG0FX/mVeHMf5FVohNDEVjw/7/LA2OjH9CF5/3FuDhitu27+hqUx318xvSre+GrlrFvDosDG4gXGNDw38mkJMa9t8X+P6f4+Trv6xqj84ezhNV0nBkZeNZvChAdj2yzQiNUNsiJp1ZKWFhHPb1y2+GZ3evztqaapgXvubWqY+vv/rvyDR8ALMA4dSGBqb/9fUMrrWb6sT0tOvfPHv7f9fNuyUM06P6pNt3bORgZrtxt8yp3HjmGdaz6Sa/wRph7s/fcLvw1LN3jqY/PlpfZ2DnfsHKtsKOk71+6tkTIpI8vP+fd8eeY2hoYGJoaPiHEjgyhas4tZgfMv1SsrF8/uG9gCA3l6QU47f16/K8noBD+f9/RgZGxv8gJrJGEBssiA4cGvazHGA4+A9kE0wOLR7/M4K0hq5ezfT6mijjZ0lexrNpxn9gtiAbSOUkR0QCBgAi6Z8PA3MB2QAAAABJRU5ErkJggg==',
    order: 608,
    base_experience: 63,
  },
  {
    id: 512,
    name: 'simisage',
    weight: 305,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png',
    chain: [
      {
        species_name: 'pansage',
      },
      {
        species_name: 'simisage',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABa0lEQVQ4T2NkIBMwkqmPAbvG//8ZHRoPMB9ocPwbGrqK6bW2KOOBeoe/DIyM/2EWYWhs2L+fpcHR8Q8hl6BoXLVqFXNYWNhfBgYttohFi5I+//jl8efbj28Mvz4v2lnmvwPZMLjGVav+M4eFMf6dev6R6ctvHGsf3b5+a1lCboF+aoIwh4hwFbecMtOOTBtXqGZGsMaG//+ZGhgZ/7VOmCAua+pw74uMPhfHows/l558brS3xOsag1WsmIqxqfSdyXnnUfzY0NDA1NDQ8C9j+g4zIT6OLS95ZITF39x63zb9mDXDmZabSE4EWQQOIBADxmGM3nB3+u27D8ycBPgMzzCy3pDh4znw99vX+sVx+q8cGvazHGhABBrMj2DNCQ3zOZ4z/NcSkNRKf/Xzxwt5CeEjDF/fHF6Q6PgDyQKwA5BDFe4MLFGBIYcaj///MzY0MjAy2B9guvra4f9r0QOMB3DEKZWTHKFkA5QHAIaoiBCcTdtaAAAAAElFTkSuQmCC',
    order: 609,
    base_experience: 174,
  },
  {
    id: 513,
    name: 'pansear',
    weight: 110,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png',
    chain: [
      {
        species_name: 'pansear',
      },
      {
        species_name: 'simisear',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACNUlEQVQ4T2NkwAH+///PxMDA8J+RkfE/NiWMSIIw9v+GhgamhoaGfyC5VatWMYeFhf1F1wxTDKLBJoeGhjKvXr367+JVG9W/fv6cd+PymeoJEyZ8gIqDDAOrA2kAa+Lh4REVV1JivHvp0isHBy2epKyOh/9+/TmVEBPkOWnSJPa8vLyfUFvB6hlhNhjp6/uwc3CZHj95vH7qnDkqJiY2t58+e9YU5OVUD9JgY2Fh/uvXL9FT585tAXkFrtHa3Nzi1+8/O0+fO+v39NXn/J+/fgYqaWl6M3x6vc3R3r7o29ev/sz//ycdO3v2LgMDAxPcqQ4ODiIfP306KPTnF2Pn8k1iL169El7i7f/ohYX2sa8fP0Z8+fYt8Pr16xuMjY1Zz549+xscODDnMpiaRpf++7dEUVru35tvPxl+PXn2f6MYLzPnq9fRp27cWIYcsvBQDXB3z3/65k3s6eevF5xgf130iUVBoZiB5cC194/uaopJ+8lISi74/evXkr2HD18CBShYo62FRSYvN/e0/1++WG7//98kTUh48tsPn/5d+POTif3jx89///2boSgnl/Txy5crx0+fdoBFB4OWlpbc06dPWT5+/HjPSFOzjEdCooGLjfX/h1evGV59/tx9786dBgYGBiEGBgY2BgaGFyjxCOKkGRuzzjp79rezsbHjP0ZGoeN37pz98eHDQwcHB+YDBw78wepHaEIAJzMcAJR2QQCsBjmtwtSDxRoaGhgbGkAuhChEBwCU9wGj0knCygAAAABJRU5ErkJggg==',
    order: 610,
    base_experience: 63,
  },
  {
    id: 514,
    name: 'simisear',
    weight: 280,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png',
    chain: [
      {
        species_name: 'pansear',
      },
      {
        species_name: 'simisear',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABLklEQVQ4T2NkIBMwkqmPAavG//8ZGBsbGxgbGhr+4TIYQ+OqVaHMYWGr/4I07N/vwOLoeADE/o9uAIpGkE2MjCBFuex8lre4Px3f+Q6qAaQORTNcI8ymzt2SQZLitr3sLOw8797/6860XtqFTTOGUzde7bsgy/NT/8utDwyMRl8Zzp95k5/nvmJSw34HlgbHA39gTgZr/P//PyMjIyPIKey3Hjw6yX76nv79VTu/Lfa8zsX5+dfuKfnb3EJXhTKvhvodpAduY0NDAxMoFANLSsScxLWOfWR5rfz69/dfXD//BLfXtmwJXbWKeXVYGDjQUDSCODDNChEZCtEmpjKc7388rGnNfowtSrBExyrmMCSTGRoYmBgaGDDiE2sCANnMwMAAwv9wJQLqJjli0i8AT/F4DzInfTgAAAAASUVORK5CYII=',
    order: 611,
    base_experience: 174,
  },
  {
    id: 515,
    name: 'panpour',
    weight: 135,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png',
    chain: [
      {
        species_name: 'panpour',
      },
      {
        species_name: 'simipour',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACW0lEQVQ4T2NkgIL///8zMjIy/gdx9+/fzwITf/369f+wsLC/MD6MZkQWKKioUJjQ0fGIgYHhH7pCDI3///9nYmRk/Hf3+lmfT9+4pr568/IJIzPzKm5Orm9fv37Tef362bbo6PBdDAwMYNdg2Lhl85RLSgYeunfO3/937sKNjVISYjz/GH7t+PaTd3dRbsBlkIZVq1Yxw5zN2NDQwNTQ0PCPwcrKe1JGXKeDrsuP4wdUWliZGP7zszJctjTnYT9x1Z45KG7rLQYGhl+wsAD7Eebc08cuLlJQVYvdtqPnx69PtWvdZcrKzjB0Lf/xgWG7vsn/WRevr5WJCgm5BNKDonHDhl2LtLQ0Y29dPX1RSuS59O/PR9nff9d59fsvz6OvTOoiTx/eqCguzt8GthWqGezxiLjcRf7ebrE2VlYMXz7eZXh0bSGDhHIcw4vHFxhKOjYmXj6xbQHMn4wwN////5+lo3PSdktLC5fvX97c//KdSfjjq6vcSvIyzD++XNrgFd4WeObMGVYTE5PfyE5lZmRk/Hvhwt0OVlaG8g3rlR98eMaQycyZXWtj986KgzP6gYKet7mKBOMr9MABa7x47tjel6++2hzb5RqsZ6B36sF9eV8u/u9zNHSLv3JwCK+2sDZL/P//P1gt4///DIyMjAz/N9czcLFqJ6x6+kZuZ3JW02Swn/0YpJ7ec3VKjd19g4nHOTYme2/+/wYGJsYGhn/wwJnZ4cJ/4+wenv7VDE/3NziwODYcAKVPcKCB4pr9RwN/ZQfDe/SUAzIApoiloaHhD0wBPIFABODqAKfKHhxLf80wAAAAAElFTkSuQmCC',
    order: 612,
    base_experience: 63,
  },
  {
    id: 516,
    name: 'simipour',
    weight: 290,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png',
    chain: [
      {
        species_name: 'panpour',
      },
      {
        species_name: 'simipour',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABe0lEQVQ4T2NkIBMwkqmPAUPjqtBQ5lDt1f8ZGxj+4TMUp40NDQ1MPs8amH+/Eo5+//Ptcq/tDD//MzAwMjIw/AcZiK6R8XSupanG5OP3eRkYXoMU3IuV3X/mh0hY2OrzrxsaGJgaoC6Ba/z/v4GJkbHh37m5ucV/3rxoZzmxeoPsJ4aTDOIM+YeXMRgGMTC8/c/AwMTIAPECio0wp0xt8k0QY+ef7yUlwfD1xu0vuaxe9isb0s+B/B+2evVfbE5luLqqgU07rOHXhX0T+n5yGhfKMbxm2HX9b2d8UmjFmZkzWU3S03+jaAQFRkNDw7+1a6skBZ682sDKysYooaul/O7JS867j29OjS5bVfr//39GRkZGzMCBad4yNXUG85/P6SoGhl852Zm5jx+6tCm0bFEwAwPDH6j3/mOEKgM0uCfFqeWYe/gEff3++8nG5Mk9ExkYLuH1I8xEJJoBWQMsUeBKACDx/yA/MTCsZmJkDAOHJDIglFbBBmBLegAEkpgP+DaRGAAAAABJRU5ErkJggg==',
    order: 613,
    base_experience: 174,
  },
  {
    id: 517,
    name: 'munna',
    weight: 233,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png',
    chain: [
      {
        species_name: 'munna',
      },
      {
        species_name: 'musharna',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABT0lEQVQ4T2NkIBMwkqmPAUPjqlWhzNdEXzPaMxxgcHRg+MvAyPAfm+EEbQxdxcC8OozhL7pmFI0NDVps3xUsLfb/nasVwMeg+OCdcdus9LMfG/4zMDVAbIbbDtf4//9/JkZGxn9HTvYvNNZVjLt/4zhDx9nO0EWpiocZGO6/hNoIUg/WjKyRkZGRESx4/di87m+/7mX2XWtZt5Sb20zp3fdZ9wr/TWJgYPgD1fMfxan/9zewMDo2/Fm+unguw//7dkc+r3v5VlfYesXVtzsZEhk8GP4zMDEwMvxDsRHEgTn31MGJ7Y/ZnldMPtdxRPybbM/Kp58PMkz48IGhgYGJoQGLxoYGBqYGiAT/splJtV++MM9KK559C+y//wyMyFGDER3//zMwMiLFXdpMY9ZZaWf/oMcn1ngEaT5wwIH54MED/6AuwEgDBBMAriRJtkYABQuEDzZ9V3MAAAAASUVORK5CYII=',
    order: 614,
    base_experience: 58,
  },
  {
    id: 518,
    name: 'musharna',
    weight: 605,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png',
    chain: [
      {
        species_name: 'munna',
      },
      {
        species_name: 'musharna',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABl0lEQVQ4T2NkwAH+/2dgZGRk+I9LnhFDooGBKVQrlHF12Oq/uDSBxFE0hq4KZYZpKLRkEOo/zvCegQG7rXCNq1aFMoeBbGlnUDBSsJvi8ZP5QVvC/pyGhgamhoaGf+i2gzX+//+fkZGR8f//Gxt5N7y8eE5bVUFl0/kLp0q8+8zx+hGmcdu2SlE5IaWwF29uduy9cmxxe8WxLLhL0EyAO/XqqlA27bDVv84vZvBmEAzZcuPcmsTIOoYFDvsdWD7f+sx4Nv3sH2T/QjT+Z2BkgAQ935mt8deO/P4sXHBsnRdDF8N+LBaBowiisYGBiaGBARQAUtcuzb3+ju8vn82h2U8YnjIe1mZgvPNFlk3g/+MfEx5Vnr4HUwt36v//q5gZGcP+HtnZEi0rI7H43pfHjHvOHrpzjIPhwU1+RhmRJW/sL62/9ApDIyR0G5gYGRv+9XZ4dppom7lKv//qoRLX8wpbyGKkHJDmuXMZBN6+/cZRXt71rKGBgakB4g0UgJnkMOVBgQFSh5JusWoEJfDGxgZGbCkGZi4AIcGqD2t71SwAAAAASUVORK5CYII=',
    order: 615,
    base_experience: 170,
  },
  {
    id: 519,
    name: 'pidove',
    weight: 21,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png',
    chain: [
      {
        species_name: 'pidove',
      },
      {
        species_name: 'tranquill',
      },
      {
        species_name: 'unfezant',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACcklEQVQ4T2NkwAH279/Pcov3FqOgseC/MMawv///NzAxMjb8Z2BgAGEGRlwaCYmjafzPyMDA+P9qw3+2u35nwnc9Xygi/vGPtNW/i7J/OAWYD73+v7Y1Y8dyDBtXrQplDgtb/XdyCoOider6O7I61kxfv3xgOH5z85svLzbmpIYdWgl1CSOKjf//MzAyMjL8d1+VLJR2bW6JlvOhirs8zIwr9zS+Pn/99uwrwtJXHLhZVh9oOPAHorGBgYmhnuE/AyPD/9xJKuyT8+78bItjULOIW3Vz1s3TX1cc7c6JVoves/HL7QC2/wy33/We2snI0ODAwtBw4A9XjKYkp7LQVok7TDFXlx6+Vje9I5NVl2vavEPzSu9XXegBme/g4MByVesVx+tp177AnMoq2mK/59+vP5qsvxnPvVhwpNC/ObbP2dzc48CGQyXrHq06ridn9/xS7aH7YBeCvASiQybFTznx8SHHn5vvj/IrCDLdPH7gklNE2FFndRPW6h3bGSxZWBku8TL+/PqXYSpDxc5ieKhG9SfcXHb5Qg/DvAvLGfx4TBnE5Tsyfb3M9GUVfn46vIdl7Reu/4GCz1i0dTQYFtwTiV0b37wEbGNMW0wmszDntLfvPjDwCvAy/H3/9Z+GsfEDWwU2JdlXpxjW/tFkkP77kUGP8QVD8ym2svWV87rh0ZHVm2r1h4nRkOkf0wuWz7+OT2mY96VoXkG14v/Xvr/5pITe/GH+euf+4y2rqk6WMTDc+QnW+P//f0ZGRkZwGsQCmBgYGHgZGBi+MjAw/MFIAKGrQpkF3wsyST2XAhnwD6zAnoGpwbEBppgBmrJAcv8Bx9f+EbL1sboAAAAASUVORK5CYII=',
    order: 616,
    base_experience: 53,
  },
  {
    id: 520,
    name: 'tranquill',
    weight: 150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png',
    chain: [
      {
        species_name: 'pidove',
      },
      {
        species_name: 'tranquill',
      },
      {
        species_name: 'unfezant',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABMUlEQVQ4T2NkIBMw4tHHxMDA8B+KMZTh0ggSB2nCCTA0/mdgYGRkYPgfZGssyXz47CsGLS3m1deu/UI3AV0j3CY5OZkNsoJ8mke//vJiuHPnroODA8uBAwf+wAxA1gjX5OJulCP++c/kD79+1kSycB74y/3jRvzeG29hrgFphmv8v4qBmTGM4e+OKoY4RoWkhYpMqgxslyv7AxbrPWsz55zltf3kJ6waV4WGMoetXv13kYdis6GBQo2cqNAfvn/PWXK2f+iduu9aycw0Y9b0WWd/Y3Mqw/9QBmbG1Qx/p7rJVlur87a8/M76YteVL/29J+52wQzGqhHq9P8MDKHMwWbXDdeeunKPgYHhHbY4wRaPBOMQJXDQTGVcFRrKdE179f+GBoZ/xNpIVOrFl1bxGgAAv2dsD5kAkKgAAAAASUVORK5CYII=',
    order: 617,
    base_experience: 125,
  },
  {
    id: 521,
    name: 'unfezant',
    weight: 290,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png',
    chain: [
      {
        species_name: 'pidove',
      },
      {
        species_name: 'tranquill',
      },
      {
        species_name: 'unfezant',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACDUlEQVQ4T2NkwA4YGxgYQPg/AwRjAEZ0kdDQUObVq1f/RRJn/P//PwMjIyOKASgaQxkYmFczMPz10FTy+s/KLsXBwsK88dzlmSBDGhoamBoaGv7BDES1MXQV8/9VoYyKqtLews+fTT37lWEXAwND0v6pq3gcs8O+/P//nxFmM1gjzHlpgWalmpr6vm/3n7inYqAbb8r37eaG53/2nfnD6vR03XrPUz8Y7jMwMDAxMDD8A2vc3+DA4thw4M+uJNEp8nzS2bcf/GGQMrT5z/T7L+P/h7MZBJXUGFY++hdaPv/OmoYGB5aGhgN/wBobGhiYGhoY/jVY6YlZGf28YM7BJPnz17O/18R5GVkeiDBJ/PparrLwdhfUfyA9/+F+/N/AwMTYwPBvwxyN7b+PMXpwCDN9Z9Ng5vSv//b7xxOeNFcv0QvWZtaXYAEE17hqFQNzWBjD373FSsvXXWGI2PyRiWGCwV8GkY8M/wtu8H/l5Rfg+fXtm8fxU6d2Ojg4sCBsDA1lZly9+u+RKJPJz3/+yw5de612Y6BynJwYt4rhzAsGMuqq0irMXy8cuPbgBQMDAyNydIDdzhBbwt3JcFeufPH66yWxoYpsrOy2bfOWLEJOECh+RPY4OIq0tNhWX7v2Cx5dr18zMhw4AEpR4BSEkeRAYqGhoUygZAcKba2roYxhqEkQbAc2jTjSPaowAJVSx9RBCzLsAAAAAElFTkSuQmCC',
    order: 618,
    base_experience: 220,
  },
  {
    id: 522,
    name: 'blitzle',
    weight: 298,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png',
    chain: [
      {
        species_name: 'blitzle',
      },
      {
        species_name: 'zebstrika',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACg0lEQVQ4T4WSbUhTURjHn7Pu7vQm17es2USvtDVcG2XTbwkjjXKV1AehTPwiNkQKjFhfyg4pvRAUlEhmrQ8lA/fJoCgkGSFq4TJNLcqXpXM4mW65Tefdy4l7a4UhdD4cDjz/3znP4fkh+M8iAAgBkH9jaBNOAkJQr6fA4YgI9XPKDDZzcjmIAeKJfAJE7Xo9ZXI4Ip91tK4/kNVSy5MecLvXrIqCBVVyuKaoeuY0YBEUGCJs4iFx0yeFts2rS6/vo3l+MLZj6aZvWJZEJc+q3n4t/J35A4JRo5G/nJDFKmF47cYJ/fQIcFnzfIgUchzSKizg+i6f1j2c3Q0AsQ2tapXq6jFW2mQrWKcKlf58xKzEIy6CUrJ5iESzo/HFZOmDtaTu248JX7o/0PLmg2tU/GPJnr23lEzULGfG34dS1aojmmA6kC0kuC4hjtesRHVodND6KjsnwubmDHnczatzc00i2JDLPk9TFB/POpxnLVZYjDQlTx2foolOHQbvyiKSMeXu3kfAU54R7jqdVhuemLD8Ahvq240VJ89+HOxb0my9lpmfI48HgqF4BstC78C8ZIU5LzFUnIHO1vuetqfPtADgFcHm5ssqkLHqfrO5pK6swDywGAMfJYG8bXFYGJFCIHWclx+7sDzj8YzZOjtbAaAbEUIQQkgcR2NNcdkBJtzjGlt9wTuTumk/2kmXhS9+C02m3OmBIZAyRbsU261TTmeV+CLGmMIYRxsvXany8z9OPbl7rw4APEJtX6mu4aC+vNXv8xktHR0BjuO8TqfzywblCMYShLGoFa6spK/abBHB066urqM+n++dyWTyJiTY1FWMhS7+6pUYusFgoOx2u3Bx/CeSWAYf/injnAAAAABJRU5ErkJggg==',
    order: 619,
    base_experience: 59,
  },
  {
    id: 523,
    name: 'zebstrika',
    weight: 795,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png',
    chain: [
      {
        species_name: 'blitzle',
      },
      {
        species_name: 'zebstrika',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABOElEQVQ4T2NkIBMwkqmPAavG////MzMwQOQYGRn/MjAw/Ee3gFgbQepQNKNo/P//PyMjI+P/Q8cuuOtoKQS9ff3usKqq0ioGBoZfUBfANcM1NjQ0MDU0NPxjYGDgvXLp8lNtXR3ef/8YGGbOX5OalRI6Z//+/SyOjo5/YE7G0Lhz5yJuZnalk//+/tdmZGD48fH9S5OQkJCrq1atYg4LCwP5FwzgGmHO/H/sMee0N+fX/Wf47PHuD88v9d9/08LDgxb+//+fiZGREeQiVI0gXtrMmayz0tN/hxeXZblYyE1ddvfXj+9b78w5ISFWzLC6AcWfaKHawMTA0PBP2rnS8ikruzz7o9sCP68tnQkNUZSQxRId/xkZGBgx4o24eGwA2czAxHD16n+G1atB/iI7AWCkTGJTDoZGAO+Ydw9Dr02DAAAAAElFTkSuQmCC',
    order: 620,
    base_experience: 174,
  },
  {
    id: 524,
    name: 'roggenrola',
    weight: 180,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png',
    chain: [
      {
        species_name: 'roggenrola',
      },
      {
        species_name: 'boldore',
      },
      {
        species_name: 'gigalith',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABnklEQVQ4T2NkwA0YGRgY/uOSBkmSBbBpZPz//z+DSXo6y9lZs/4yMDD8w2Yypsb//xkZGBn/2zZ2p7LysH7YV1yw2qGhgeVAQ8MfZAOQNTJBTRc26untktLRC311786TU1mZVgwMDB8YGBhQ/AzXuGrVKuawsLC/c+cuCHuuIL/y1u+fDPLMzAyS9+4lZKWnL4TJw2yFa/z//z8jIyPj/x07Nusfunov+Mnz19UiCjKPlP5+K8jJL9oIk8fQCBJo2L+fpcHR8Q9DeY+dg4nCwQOXr18Q3bT5jPa/d40HLt15wsDAAPMO2N1g8P8/AyMjI8P/rDClqXLafllTfigypP6/+E2Z7218TNXGNatWhTKHha0GhTIYwDU2NDiwNDQc+JMRbJPHJqo7cdJDzi/OfEw8nF8fNWzZsqrRwaGB5cABRMgiQjU0lJlh9eq/orpOFa9lpPVFvJSLuTadqn304sMOhsvHNjJA5bH6ESRoZSgpX3D++ZMwBgawsxoYGFgaGBhQ4hDFqeipAxzp9fV/QYmBuJQDCTmQYpwJHGQQAI4unw+f3KtWAAAAAElFTkSuQmCC',
    order: 621,
    base_experience: 56,
  },
  {
    id: 525,
    name: 'boldore',
    weight: 1020,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png',
    chain: [
      {
        species_name: 'roggenrola',
      },
      {
        species_name: 'boldore',
      },
      {
        species_name: 'gigalith',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACqklEQVQ4T22Sa0iTYRTHz7Ob2Qx1ovMaOJ0ixDSEypWoaOali2SLLlCoY/UlNUMCu/AIEiRIhhk5KyyNotdIyYIKc11mK9twMy9v0zZxlixn08zL3m1vvG9+0Oh8eW78zvk//3MQAAAG4GAAL7OnaRohhGgAQMyRuftfMI9Qe75QGhkp3Hrk5N22vzDmIIS9GGMOxphN+G+wIBOdLcqbPD43qqWDLCQIzXyTSsU/oVZTKzBTeU11Fuzt7fWVy+Wep21KvdBPFORCEp1tVKvv6Yfm1tZWO6sCYw6zIozZJCw4YZ/I0b0eePS2z0JXlRcIF+eGYHKkDsxWz6WHxsP1B2Umquh0vXO1XBY0mw3BlvG5Ij//wIr4uFjxwszXRddvi++Q2Tnz3SF4oFIeKqON2T6mKQhJ3PXCwshHNE1zEEKsAfq+d+VXGtsrd+zcGx4n5oLT8U27v1Z3JkESeLsiY0Y0bg8KrbnvvQBkdQ1bkWlBQ8OooLRUugzJ1W3gjjgaLSJducHaG9fHcshNgWNXhQLK8MEW1LklJqzp4+MqBwtinM7DWONW15aUGZdk9T6iAHf/CMXJCrW5DT8iBIbJJefGweZUzbDp899/0gjRNCCEgJ56DsJGTaVpaoNEEib2AjmyQJ3N5/Nf6WzLs94En5ykL4bteZdTAMDFuqtSJfPVaj3VdDEr/xmZ1NU5MD27W/bL0eWIlrQXx4I03KhNPLee1GFp8c/JbnnuceJ9D8Y8VqoYQLg5K+/TsNM/Yn7OnhnCo/cND3HFx05lRqcl+meWKOtS9hSkXlsH01ai48kB1lUGlMXEhAxSAWlRHP1LqxWcoFLxQa2mALKjICz21jYJeU+n7b4DEJ+hUMjeEAThYcC1w6xQcIEgPJCOeaDB7pWmcwHAs3oA/gAZdyPlv5k6CAAAAABJRU5ErkJggg==',
    order: 622,
    base_experience: 137,
  },
  {
    id: 526,
    name: 'gigalith',
    weight: 2600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png',
    chain: [
      {
        species_name: 'roggenrola',
      },
      {
        species_name: 'boldore',
      },
      {
        species_name: 'gigalith',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABaklEQVQ4T2NkIBMwkqmPAZtGxv0NDsy3nn1mfC519m9DA8M/bIajawTx/yMr3N/QwOJQXw8S+8fIyAiXg2tsYGBgamAAmR7KPD3jceyPf7+Vdp/4vXXbpUsnYQb9//+fEaYZrPH/fwZGRkaG/xWZNoLS339t5+JkMdfh4GV4+vXjlXceRaWW6rree/bsmpSfn3+7oaGBqaGh4R/MRrgTJ6banDR0jzHj+v/j+6snlznvfhZ+LqaoLXni3AXl/v7+e+gaGRoaGJigAcEzrSFzs5mlpsO1c5feHl8/59H0UwxVDAwMOxoaHFgaGg78AbkSJXBWNYSyhTWs/tWf65fkH+Ix99G9xwyLZ2ydPffkpTRkTRgaQ0NDmVevXv033NK8X1SQQ+jfXyb2P39/cc7ac9Qf5kRYQGFPACIMvAxvGD6DFfGLKzF8fHkPPS5xppxVq0KZr13T/g8KQWISALJLYJHNBIp8om0klIYB1BiUD3x92ccAAAAASUVORK5CYII=',
    order: 623,
    base_experience: 232,
  },
  {
    id: 527,
    name: 'woobat',
    weight: 21,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png',
    chain: [
      {
        species_name: 'woobat',
      },
      {
        species_name: 'swoobat',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB30lEQVQ4T2NkwAJCQ0OZtVevZmRoaPjX0NDwD6qEkYGB4T9MOYiDAhoaGpiQFIPk2BMSEhgXLFjwA1khikaQTatXr/5by2Bme5/hlKLjjBnXnD3cVt+796DEyclp7f79+1kcHR3/gAyAa/z//z8jIyPj/4s7u7mvrT5wTfbLS7kLCg6TwstqbA/t3xsYHBz88P///0yMjIxgp8M1rloVyhwWtvrvxKZ4Y0Vlg71SbH/4j+86uk1CXvDZvVPzi8o3MXz+z8DAyAj1J4pTz5yZyWpikv778KaeLOG/b6aumdoRbmnJ4Hz9g2FN3uTzr///Z2BkZIQEELJGWKixz6/JPKQpw2y2rmNKo6Cmg0Cl+YEihgYGWOiCwwiusYGBgamBASwptKrQ9DrDX16x81c+nX11mXHt3Nen21eFhjKHrV79FyM6YBJJqjZKhbk/L/Nx/eE6eJqNIW7mbw8GhnM7HRwcWA4cOAAOURQbQxkYmFczMPyNFZdX1Bb7ek5CXErg9mume60XL+gyMDB8g7oOewKAhdrU/ilLXty45fP1zfu6vrWLJzU0NLA0NDTAbcMaj9u2bWMXEBJI+fv/r82/X//q7O3tbyPHH84kh5SsOBgYGFCSGc4kB5PAZgN6mgYAGijED9t3NSUAAAAASUVORK5CYII=',
    order: 624,
    base_experience: 65,
  },
  {
    id: 528,
    name: 'swoobat',
    weight: 105,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png',
    chain: [
      {
        species_name: 'woobat',
      },
      {
        species_name: 'swoobat',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABXElEQVQ4T2NkIBMw4tAHEv+Pz0xcGhn+NzQwgTSuvnqVMWz16r/ohmBo3N/QwOLY0PAHTSGGC+AaV60KZQ4LW/13c66nGwsHQ45n9/agFeFGJtzy4vG+XduzGRgY/jEwMMANgGvc3+DA4thw4M/iAo9IOzvdZZ+Y2c88vHlf5cvjl68iJu9R//+fgZERohrsdwwb105INVXT1NwnKcLN8/7VO4Yj69cWJs46MwHkZ8aGBpCtYIChcf2kXGVpGck7IgJcDA9efvnx6Pie3Ty//tWHzDh0flVoKDMsoOAa/zMwgFzyPzSUgTnNIb7739//hXfvvGBg/s70g/XPHbmk+XdeNzQwMDU0gP2KsBHEQZaodtfbzMfPrfz6y5ezPdsuZzIwMHyBGY6hEeb8/6tWMW36fIbryb2bAtmtG59CQxQlhnAmAEIpEXfK+c/A2NjYwNjQ0AAKfozkR7aNAFz+jQ8kh/cHAAAAAElFTkSuQmCC',
    order: 625,
    base_experience: 149,
  },
  {
    id: 529,
    name: 'drilbur',
    weight: 85,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png',
    chain: [
      {
        species_name: 'drilbur',
      },
      {
        species_name: 'excadrill',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABx0lEQVQ4T2NkIBMwouv7/58BLLY6LJQpbPXqv7jMxdCIYRADAyMjQwMjA0PDP2Q5DI17a/wavv/5O5Hl/x/Ph++/7U+fdfg5VANI7X+YZrDG/w0NTIwNDf82FrnGKBvoLX7//c/8n4/ueOy49tig55H8FwvWf/InTmy9zsAA9gZYM0TjqlXMjGFhf3dNLZpsZqmX8+vrN4az+w/v96xb7uTpHhX36dt316OH18eGhoYyr4b6G6xx1apQ5rCw1X8PzqtYqG2oE/fq3jOGU6vKuhJWZjU72j7f/PPX3y3HTm7qNTZOYz17dtZvsI3/wZ5n+D8p15PdytlqMjeXgOfT529kwtuuPLJSkxD+85eB+/6bRzNvnNpczcDA8BbmXHjg/P//n5GREWSOwc4oNwW3l9+ZGF7++svA8ecrAxfDd4aTT5/7/HxxbysDQygzA8Pqv8ihCva4u7WKtosU/4avP/7w3337+xk70z9xcV7OB63bz9syMDD8wbQR6mRQCC9+dbjwz5+/Cp8+/Vhy9v47Vi4OVsGZB69uxhuPDAwMTAwMDCiRjS31YE05DQ0NTA0NDf9AARcWGsqkrb36f0MDqmEEkxyutAoA8Ii+D3cIGEUAAAAASUVORK5CYII=',
    order: 626,
    base_experience: 66,
  },
  {
    id: 530,
    name: 'excadrill',
    weight: 404,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png',
    chain: [
      {
        species_name: 'drilbur',
      },
      {
        species_name: 'excadrill',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACVUlEQVQ4T2NkQAL//zMwMjD8Z2hsbGRsaGj4t2pVKHNY2Op/DCBBNMAI44M0MTIiFDQ4MLA0HGD4A5JHlwOJgTXCJC4dbhc8v25fPa+c4mtROamTV9etl2AQEH+UMXXXoVWhocxhq1f/hVkE1tjQ0MAEctryyTlSagrit8RFBbjffvl1df/6I9rfHp3UrNr87AZWjRBb/zMxMjL+O7yqZYeUBJ/7q5fvGHau2drRsPJ0ZUNDA0tDQwPY2Sg2npk5k9UkPf338eUVDmKSovuZWVn+cnFyMC9ZuHV90cRNQTDFnp6e7Nu3b/8J9iPMmSDOk1PT9n/+8Nnh+tX7v30C7VkvXXvKYOK1b6uJjdQ3frZvwvefPiu/d/PAGQaGUGZ4qH66vmg7r4yQx9T+gy9v3PskPrnT7T/DX0aGuw9eMC5YdY9h7eEndxenrdA0SWf4DbIQrLGEgYG79Pz0W58+vBYunfbg9ac//DKdKZL/TQwkGRlYpH/vO/aA1Tmw5AUDwzsFBgYGkFOZYDZy7lzUeO75DxaNa98E/9579OKfp5ooU6Sn8X8GAU2GOzfO/T93Ygvzgxc/VjS0T08CaYZpZN+5svv819cfNbdc+8Dw/t8vBk9TU4aUhGSG/78/Mty7tJPh/7/fDDv2nVuVV9UfDg4caLL6mxUaYKCnJJx1/vKZ4w/5tOWMeP6ES8rJPNbSkvnyj+E/2/1HL7enFXXNRXEqcsgikiAkXtHTKDS1/YeHKkizPcMBpoMHGBgOODgwHIBGOChhgNLHrFnpLOnps0CJAJzgAcn3EnvIT2tqAAAAAElFTkSuQmCC',
    order: 627,
    base_experience: 178,
  },
  {
    id: 531,
    name: 'audino',
    weight: 310,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png',
    chain: [
      {
        species_name: 'audino',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABlklEQVQ4T2NkIBMw4tAHEv8PlWMMDQ1lWr169V9ktbg0MjQ0NDBdvcrAsnp1wy8kDXADsWp0UXLh33Nvz0eYhliHlIJf395uW3lq/a0GhgamBoaGfygaQ0NDmUFOSnNKK2BjZfd4+fXXLmNh7uRPv39/bds22RzqfLCtKBpBzmtoaPjX4BDKIy2q+ugdB7ugnYA4w+HH13vLNkws2d/QwOLY0PAH5BKYRrApNnI2gloaGlmzds2ZvmRC5zJJOQF3Dn7hfxvnHD3atbzfm4GB4TNUD8JGuDNdUxd9fvPtPkcM/5xIFeW13Nzsj6xdckL+///PyMjICAtpuI0MDg4OLAcOHPgTaROe+O7Zj8c77m7Yt3HhpLuvnn66lFZd679q1SrmsLAweJQg+xHs3EzvTMGbtx9EB0VaNGmoKwhu3X+0v3/2rKKGhgaWBqj/kP0IDnlYUDMwMDCne8cnMHL+lJ2x5s5GBoYz5xkYGpgYGBr+waIIIx6RNKMnFLj/MGxETiENDg3MDA4MDA0NDP+QbcJpI7FpHgBrKZ0PeV9IRAAAAABJRU5ErkJggg==',
    order: 628,
    base_experience: 390,
  },
  {
    id: 532,
    name: 'timburr',
    weight: 125,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png',
    chain: [
      {
        species_name: 'timburr',
      },
      {
        species_name: 'gurdurr',
      },
      {
        species_name: 'conkeldurr',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACP0lEQVQ4T2NkIAI0MDQwMTgwMNUfqP/LyMD4H6SFEaavoaGBCcS+evUq4+rVq/8iizc0NPxD58M0gmiwScgAZBhIU6ZfjTonG2cQC5/ElK55yZ9B4oz/Gf4zgqxP96vxmPn+8qMEdk2xO3v4Lx5hqHwPMiTKOVOJm5O/npWJRfHtx/d/Vh6c6svAwPAV7tSK6O6jWqwCVt9/PT6zWbEpIO7W/xdhqxn/pngVu3779Ul/2Z7ZPR7G0fP/MDDV7zm7+BFMI9Oq2vpb9oYyygdu7vp24/vqkPomhu0MDAwsDAwNDIoMF+LVTVju7jiz5jgDA8NPUNjAbdzS4W0lrLzV4d2bzNZ7d2UOvXz7Z5cwH489D+83h6dv73c3TJ9XDfU/ODzAGvfvd2BxdDzwZ+8SBk+Wvxnb7t7RYVBT+czw8u03Bqb/kgwv37zZl9Fe57y/YT+LY4PjH+ToYGxg+M9Yf5uRtaol/awQr4K2sXllyIqNEQHCnJoxP74xPDpxZ6nV8Yu3noLitIGh4R/cqfsbGlgcGxr+5IYlpGqqsxZkNc/WbkiMSXv46reurdFjCWbW/9vj647P29/gwOLYcOAPQiPUuec2KiV9+vTB1SH2XeSCJv4yYf6P61lYOeueP/pen9TBcK+hgYGpoYEBYSNMYFmfnsfLFywPC7vOXQeFXnuFjYCC2AeHyKIr6///Z2BkZIQkFLiNIA5MM4j9HxLk8NSErAlDI1jDfwamxkawIbD0ybhqFQNTWBgDPP2C1AEAawHxkk7LSyEAAAAASUVORK5CYII=',
    order: 630,
    base_experience: 61,
  },
  {
    id: 533,
    name: 'gurdurr',
    weight: 400,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png',
    chain: [
      {
        species_name: 'timburr',
      },
      {
        species_name: 'gurdurr',
      },
      {
        species_name: 'conkeldurr',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABcklEQVQ4T2NkIBMw4tDHyNDAAML/cJmLTSNI7D9YQ0MDE0NDA1bNqBpDQ5kZVq/+y8BgzMXA8JyLgeHZG4b//xkZGBkhBiEBuMbQVaHMq8NAmhjYvCe6nRTmZ9Ne9PhTI0PtoVYkObhWsEaYhPXUIMePX7jT3nB89dMRFOC6fOvOO4n/nJ4XW3eeQnc2WKNDgwPLgYYDfxhaXCpWmbu1q/5m/PfyL9Pv5dzv2R9ff9C4L3tJQ+iqULbVYat/wayEORUWIBw7p4aUS7GKlv/k+vrR5Nn3lQzvn+yxZWA5ebj98GuG/wyMDIyQgANrbGhoYGpoaPh3Yna0DBsba82Vr++VOVnYzI35+Vc6nLwq94j5bwtD96nDDKtCmRkg4QDRCAehocwNq1czNtTYlzrysDsFMbL/3HXjad/m+ef2wQxHdyq20GZhYGD4DZL4/5+BkRHqRHwa4Qng//8GprCwq4yrwXGLIx6xJC1ECsIhSVYyBwCvb40P+xEw5gAAAABJRU5ErkJggg==',
    order: 631,
    base_experience: 142,
  },
  {
    id: 534,
    name: 'conkeldurr',
    weight: 870,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png',
    chain: [
      {
        species_name: 'timburr',
      },
      {
        species_name: 'gurdurr',
      },
      {
        species_name: 'conkeldurr',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACNklEQVQ4T2NkwA8YGRgY/mNTApJABaEMzELaDoHvGg6sZ2Bg+MvAwIBVM0LjqlBmhrDVf2WqbPV+64hdZHjwvvJl1b4OrVWhbNoMDH9Xh60GGQIHCI0NDiwMDQf+sDXYhckayqz88uLjx5fpW1UZGBheg1X//8/IwMgIdzZcY0NDA1NDQ8M/BkdJ48QE0zOXv/5iODP1WRRnAOMhAyFVjePFa/YiO5uRoaGBiaGh4Z9qloWmgqn2Rk1Gya+sb77qGSsaMh14duLjNxUh/lcPn544lzHf7fX//18YobaCbIR7Xqw/rD6CVzYhhp9bQYSPi2H/1y+fkq/cWiD690n0a1bWhQw1B4sbGhxYGhoO/GGEOzHXU2u7+qcpPzmDf0pIilpIcf8QeMVmeNFkoskFZXvf+OIvjEetudmT9bNW3/zf0MDEGBoayrx69eq/DNnG5l2KknvXn34xv9DdyMFAWVhn6u7H3RPvbtsdr208JYiFg+Xhi7d5eROObV21KpQZFjiIuGqySBASF5j/7usPUFg+YDj9eArD0bsnGB4xHIUELgMjIyPDf7DG0FWhzKB46ujwirrCy7x0yYdfTgzVO0UDGp0mGwvyiMktuSUSf+rGW5BNYdD4BGsEu7mh4d/a/qAUFlYmS/+cNckg8cO9gWp/ONgSLz56O72gc8+jhgYGpoYGhn8gOXg8wpwAiWwGxoZGB2ZQ6MGSCoo8skaYzau1rjLCnAMK8Xp7BiYGh4a/IH8hJzkAeVfjvLfHkREAAAAASUVORK5CYII=',
    order: 632,
    base_experience: 227,
  },
  {
    id: 535,
    name: 'tympole',
    weight: 45,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png',
    chain: [
      {
        species_name: 'tympole',
      },
      {
        species_name: 'palpitoad',
      },
      {
        species_name: 'seismitoad',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABeUlEQVQ4T2NkIBMw4tEHk/uPTQ1Wjf9DQ5kZV6/+i88xGBr3NziwODYc+APSpKKiwn47JuY3Q0PDf0YGBhSbkTWC2GDJVXZ2irJc/+Z++/5ruvPBU6tBYv8ZGBiRNYM1wgSXqHjyqVi+7ed9zxgix8bJd/X79wvfuRm2MDz8N9Xx9OkXyJrBGhsYGJgaGBj+6TIwCC4udHon+leE4dP9P194xN/zsEr9Y5jR9Fm1geHcnVWhocxhUL/Dnfq/oYGJsaHhX4tlqJlnuswaIWEx2XcnTr/h0uX5evzid9PE9tVvMJwKdu7/BiZGxoZ/H47mKl+7/7r3/7MvNn/ZOE9yC/AufDvlotsxnr8lDQcufGBgYACHBdxGWGheW50a8eHzL+O3SaeFGI3Zhc+dfbpD1U7qUuShC8dgXgJZhBIdMOeC489ThT3jPYuknpLIx6xlR95jDVXkiAZpZqiv/8/IyAiPN+RAganFm+QaGBgYGyBxi5Hs8GnEm/wBICGZD1472NsAAAAASUVORK5CYII=',
    order: 633,
    base_experience: 59,
  },
  {
    id: 536,
    name: 'palpitoad',
    weight: 170,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png',
    chain: [
      {
        species_name: 'tympole',
      },
      {
        species_name: 'palpitoad',
      },
      {
        species_name: 'seismitoad',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACE0lEQVQ4T2NkwAH+NzAwMTQw/GdkYPiPTQkjsuB/BgbGRgYGxnoGhIb9Dg4sDgcO/EU3AK4RpAlZcomtudb9Xwy/a0+evI3PRpAB/7d42wgu3PqTPc76Z6wwN3vWn38/Xh/Zw1pcxfD03KpQux+hq1f/gxkOthHkHMcDB/6cCLOaqqDMkvXwEvsH4X/MAgzsHAw/eF985RNn57576VeK467jc88YG7OanD37G6xxVWgoc9jq1X9n+hqLGIh9m8Om7+grIsLz/+N35v/MpzYxMHAKbro74U2biDP/E4u9J1+CvQXz28Ip2cIWq6a6XDFr/SIXYbvsy6XZfOLqAQw/+bWPG+poRB6Ic573+tvP/tA1R7aALGJctSqUOSxs9d9lHYE2in//b/184e19VtdwBhujN/rvmFVfX9z38YHw+Zl6YiY67Bd336722XqqbX+DAwtKdDD8b2BhYGz4c9STYY2ZW3Twhce3Xj7qO/3JPMRV9d77T+9uX3xllfzm/s3/DAxMWKPjoJ3dgQeHXv4R0uN35pLgZPj27RvD65+/tyedvuAFixq4xoaGBqaGhoZ/me3egmlMHOefnX7RIqLAZ/SBlcH7dPu1ohqHhxsZDjD8wdAIEwC5/wK/gAwX1+On6elnfzNs82Rn8Nr+EyoPjm8QG9WPONJtg4MDS8OBA39hmnBqhDobZPL///8ZGBkZMRM6AEVS3+rnJcXpAAAAAElFTkSuQmCC',
    order: 634,
    base_experience: 134,
  },
  {
    id: 537,
    name: 'seismitoad',
    weight: 620,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png',
    chain: [
      {
        species_name: 'tympole',
      },
      {
        species_name: 'palpitoad',
      },
      {
        species_name: 'seismitoad',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABnElEQVQ4T2NkIBMwYtf3n5HhPwMDAyMjiMQKMDX+/88I14DMRtOOotFh/36WA46OfxgYEjgYjL+yM5xd/REhhqoTrhGmQKhlg5W0CN+qv39+c7979STqRVPy9tBV/5lXhzH+RdYK0Qh1ktvSo3YHHr0S/fWXqYeB6S8Xw/MnsXo6hh8vpdueRPcoWGPD//9MDYyM/yLWH79grqykr/T+7pcnP9gYbnML8nz//OHNTE9jMZDxDAz/GRkYIAEGsbGhgYmhoeEfw5Q9loXijEXFfHv8vzBK/Cr7YnWb4dfHzk0RLisc9v9nOeDI+AdmM1jj//8MjIyMDP+/bGQQf/ySIfr4v660H79/fAj8Xlfux7hJ/C4T8993xd5rGVatYmYICwP7FaKxoYGJsaHh36GFKXp/fvxxlxfn8H/76SfT69dPWPYxhNzr/Sa2gqE2cAOGRmTNIHZFkJySvIq0SGbXh8cMDNefQ7zzn4mhgfEfilNhHJDNYGeA/AsF4IBbvZoR5kSsGuGKGxiYtK6GMl7TXv2/oYEBbghmPJKR0AGhB7APQFRCkwAAAABJRU5ErkJggg==',
    order: 635,
    base_experience: 229,
  },
  {
    id: 538,
    name: 'throh',
    weight: 555,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png',
    chain: [
      {
        species_name: 'throh',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACJ0lEQVQ4T2NkwAb+/2dkWL2aieFa6H+GBsZ/2JQwYgg2NDAxNDQgFKPzoRpQNDo07Gc50OD4xzitg/+nmLjhw7evnn+eXn7TYf9+lgOOjn+QLYFrTJs5k3VWevpvBoYgecX5Jce+cfBICf/4wnD36cP8nzWRkxr+/2dqYEQ4G6wxdNUq5tVhYX89Zmy3/MDItPi+uLKyNCvjr3N/mNn0Hl/5rvD3Q+am/JiFmDauWsXMEBb2171/UexOAaWFG8Xf/7MQecW87onMryN8smwc395fnetnrcvAwPAfpplx1apQ5rCw1X/nNcXa26m9Wjn/TTijKDejWADP3j+7v9qzpL4VZ9Cv8lO/+JPhFgNSQDH+/8/AyMjI8L+r1EvC3UAg5g2Tsv3a1+ruElpm/09cvnhB7M2Nyws4jNtVuP6I3in2O8PAwAAOJLAf/zMwMDIiOWPazGkr7mh4hRvdWvpV4kn1TBe501oanMweLxZ1KX7YseIByGbk6GD8vy2XjdFr8s9HWxJnnHwsYaUp8Ejq1t2n8zf9cORfwK66jqE2agcDKHEwMv6Ha4T5dUOPv7uchNBso5j56qcWxa96//GbonvuamMGBoaf////Z2RkZAQHEFwjzLmzq5zFf/5g4M/p23tr88Rg1a+ffwlH1Gw+0dCwn6WhAZEIUFIOLKBAJjY0MDA1NDCAkx6yODw60NMqyObGhgbGhoaGf/8bGphWa11lBEUXujoAoCvmEdzoR2wAAAAASUVORK5CYII=',
    order: 636,
    base_experience: 163,
  },
  {
    id: 539,
    name: 'sawk',
    weight: 510,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png',
    chain: [
      {
        species_name: 'sawk',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABFklEQVQ4T2NkIBMwkqmPAafG//v3sxxgYGBwdHT8g81wDI3///8HizEyMv6HamD8z/CfgZEBzgcLo2gEaYJpeLHqqBMLCwODSJD1PpDC/wz/GZE1Y9X4fv/5KQISgtkM778xLF1xY2rMpKAcZENRbPy/ahUzY1jY35P9cy3NbKyP/f756c/vH3+ZLlz5yTSlabvO8nedV1eFrmIOWx32F0Xj/ob9LI4Njn8O9cxzt1Wz2PGN6RUDKwcHw+svPxhmLz2g3bC64dqqVauYw8LQNCKH3N7OhbM5mDnt33788evewxeXChaVRcECCuxd9MCB8mGhycXAwABy1k+iogNNM870gSsBgOMO4iSwEpgr4AZRP8kRSsMAC95sD39/J5AAAAAASUVORK5CYII=',
    order: 637,
    base_experience: 163,
  },
  {
    id: 540,
    name: 'sewaddle',
    weight: 25,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png',
    chain: [
      {
        species_name: 'sewaddle',
      },
      {
        species_name: 'swadloon',
      },
      {
        species_name: 'leavanny',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACOklEQVQ4T2NkwAL+M/xnBAuHrmZi0BZlXH319f+w1WF/kZVCFBAB/v//z8jIyPgfphRFY0NDA1NDQ8O/BAYGjmDfeiZpJTWTP3//ejL+/3/CdGr8xv8NDUyMDQ3/QJrhGv837GdhbHD8cyp7gR0vl9CiX79/P+bk4Lb58Pn1UgZGptNmU6InwgyGawT5iZGB8X+fpSWnp03VBnkRObfLt877CDLeuac2p+U6zHkNDf+ZGhoYETbCbDuftzJeRVxpwcMXT3c+F31UueOtRZgEC6vdvz8/bt57faN95rLE26Ghq5hXrw77C3YqzONn85aU/fj6R4Hf4e9MJWmN4x+/S3NuPMnGwMXBy/Dq3f331+4dMZm3LuseyGbG/Q37WRwbHP+cL1gRrSyquOTC2auphtnKjjwySlEMrx9/23aWm/3GU4Gf4oKCXA+eX51WM8kye9Wq/8yM/0FEGOPfq6Ub1ghyCQZvW7LaJmpu9FROLh79969e/Dpzj5958/lPv1VkFDmev7yxpGOWdyxEY+gqZsbVYX/P5i3z4OLkXfP7299zTLpfv2hr6Xq++fSE4fDB+ww/3rAzXP/3n6H5wQULhv1TT4L8CfEjNH52xHdoy4hqXPn3k+HHC5b7W/7LfRF9+uDFnn/PZD8zsf85nbSk5hgsSpDi8T8TYwPjvxOZs425uARl9XpDNqAnKIx4hCn4DwotaDyB2Az1DP9Xr17NJHrtGuPrq1oo6RUjra4KXcUsqi3KCAppfEkYAPncDyIr8v2BAAAAAElFTkSuQmCC',
    order: 638,
    base_experience: 62,
  },
  {
    id: 541,
    name: 'swadloon',
    weight: 73,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png',
    chain: [
      {
        species_name: 'sewaddle',
      },
      {
        species_name: 'swadloon',
      },
      {
        species_name: 'leavanny',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABKElEQVQ4T2NkIBMwkqmPAZdGxob9+5kZDh5kaGho+IPNcCwa/zMyMDD+J+QSdI0g/v////8zzly+yf3GpdO/nt7de3z16uPf0Q1C0bi/oYHFsaHhz9TEvBJzd+3uC6/fvUjJ5VZgYMj72dDQwNTQ0PAPZgBcI8gWRkaIExfOnntQQ17E7vj5i28Lyle7+/oKP9y8+cAbZFvhGmEmOhgYCMxYufLR73//eTs7uxgUZaUYmptbAhgYGDYyMDAwMzAw/AUZgOJUmOZly5YFPLpzZ9q9e3fF+MQlyno6O/uQXYShkYGBgYmBgQHkD7loKblZJraWrwpXroyDOhEccBh+RHb//v37Wao2bWI93t//d9WqVX/DwsLAzsPqR0LxRopGmP+xJgay0yoAU+pxD4VEGSkAAAAASUVORK5CYII=',
    order: 639,
    base_experience: 133,
  },
  {
    id: 542,
    name: 'leavanny',
    weight: 205,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png',
    chain: [
      {
        species_name: 'sewaddle',
      },
      {
        species_name: 'swadloon',
      },
      {
        species_name: 'leavanny',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABrElEQVQ4T2NkwA6YGBgY/kMxVhWM6KINDg4sDQcO/IGKg+RBBmAAFI2rQkOZw1av/stgwmBow2Tz78ipIxcZGBgYQ0NDmVaDxJEAXGNDQwNTQ0PDP18GXwtde5YdW34+qrx04uz0hIQEjgULFvxAdwFc4/+GBibGhoZ/e3I9jumHFVk27Ti8YHJrcy8DA8OV2NjYiHv37j09evTo4dDQUGaQ7ShO/f//P+O6VsZMaZdDrceOnxd48+rFZDV19TXXr19fsWfPHtuzZ8/ehbkMrnHVqlXMYWFhfxlSlomv9eS8x87OyqWiovJl69atPO/fv3/W0tJizMDA8IKBgQEU4v8w/NjTUizPzid/QUhEROD23TsMD+8/eOLv5xcVEBBwGGYbyL8YTmVkZAQFv1BOYmLdvy/frN4+fpix8sSJcw0NDSwNDQ2waELVCDUIpFEwVUFlgquVuTETL09CyMyZZ+BRhRS86NHz30FLi+c1I6NmpLa23Kf//690rV59ExRwUNeA1WOkHCRb4Qb+Z2BgZERLQdg0wjQwrQoNZQxdteofsk0wSXwacaR/iDAANUixD7MBDb0AAAAASUVORK5CYII=',
    order: 640,
    base_experience: 225,
  },
  {
    id: 543,
    name: 'venipede',
    weight: 53,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png',
    chain: [
      {
        species_name: 'venipede',
      },
      {
        species_name: 'whirlipede',
      },
      {
        species_name: 'scolipede',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACLUlEQVQ4T2NkQAL/GRgYGRkY/iOLgdjYxBlhiv4z/GdkZGD8/yGqQnDD7qvFfEzspxVkhVmv/Pq2Pe7S4q8NDg4sDQf2/2VgYAQbDNe4n8GBxZHhwJ8tDLHJbAas0zUE+J9cfPys7+l/hq8Z91bOh1vw/z8jIyPjf7jGqw2hbNoNq3/t6tDLV2IPmfDx4KeLxht6DDrUgqoqbq1rM7dydeNlZ+Xds3/b2oaGBiawxgaGBqYGhoZ//xk8+bZkSc25r6Acmlc2Kfwwg8nNqwzfTSbGK9x25hY8ePX6dZ/9+7dudXBwYAFrhHn+tk5K8vr/XyTLJP82V379tSNKQfOZ7vKOuQmJWUf//f19cdGi2QZQJ4MCEezP/8csCzkZXr6KdJR96ev1iSUg29OJ4ZWm9K8jZ8+9fvnkufSuzbt8P/98swVk24EDB/6g2HiTwUEkOoZ/gSk7vzefitQPhp88HJL8ggwLV648cf7EIUcGBoYfMIvggRMaGsq8evXqv8olgWIsLKwX7v/7Kqn89gvDt9tfpzw8dKaQgYHhDwMDAxMDA8M/lOgAcUJDQ9lWr179i4GBQcncyq74lyDrdyEWnnl7N268BnMiLFrgNiKZJpOWltcmLCx4hZ2Vhefp81d7Z8+efBAUBQ0NDWDb0G0EBxIDg4y0r6+ZKxc3l6WSsryMmwurv6Njw5//0IjHphFmECytskD9A7IFaigiFSM7FW6Yg4MDMyjIkVyFkfABOUPbVmLJUesAAAAASUVORK5CYII=',
    order: 641,
    base_experience: 52,
  },
  {
    id: 544,
    name: 'whirlipede',
    weight: 585,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png',
    chain: [
      {
        species_name: 'venipede',
      },
      {
        species_name: 'whirlipede',
      },
      {
        species_name: 'scolipede',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABlklEQVQ4T2NkQAMNDQ1MDQ0N/9DF0fmM2BTs37+fxcHB4R8jIyNOA1A0gjQcOXJEuba29ibIwP///zMyMjL+x2Y4WCNMwe7du/mFhYUX/fvHcJWHh2u3hobG/v///zNBNaMYANMIkvzXN326dGxw8PFzV2/KcrOxfmdj/WtlZmZ9AZvNMKfC6P8FBUX9/5m/Ffz99feHibGzTkJCxN20tDTWWbNm/UZ2MpbA4VpvZavtExwQxvL3L1OEhoaqIisr6zdPT89Jq1atYg4LC/sLMgBFY0NDA0tDQ8OfqqqqCZaWlvnPnj39r66uwZibm9ty+fLlWmSbMULV0dHxz5IlS6aws7Nnr1u37pWkpKTYp0+fVs+ZMycMp40MDAwsDAwMfxgYGBJkZGSm8PDw9FhZWdna2tqyHjx40G3BggU/oK78j9Wp3d3dvv/+/Sv58OHDgRcvXry1srISTE1NbcQXOCCD/isYGAjY6enJiYuLv+ru7n7JwMDAw8DA8JlAqIIDDGtqIaQRHNoNDQ2M9fX1oDQHMgTDMADvOqcPc4wcyAAAAABJRU5ErkJggg==',
    order: 642,
    base_experience: 126,
  },
  {
    id: 545,
    name: 'scolipede',
    weight: 2005,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png',
    chain: [
      {
        species_name: 'venipede',
      },
      {
        species_name: 'whirlipede',
      },
      {
        species_name: 'scolipede',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACD0lEQVQ4T2NkgIL///8zMjIy/sfFh4nDaEYQo6GhgamhoeFfYWGhkIiIiGlAgNVRbW3HL+iGIWsGa/z//z8TIyPjv3nz5k1TVVVN3rbrsFN7c9VRmDgDAwPj////GZBdhKKxtaN7jbGxcfDuo2cuK/D8CcstqbqBpBlkAdw7IJPAnKlTp/LcvHv7GOPf97rOzsEMz58/L0lPT++FOW/jxo28/v7+n0G2gxzJGBoayrx69eq/fn5B1j//fp8iJSmmpiCvwsXPz79fRkZm898/fxxFhIUZ37592xMWFnZw1apVzGFhYX9hToU7Ycq0aRe+fP2qL8jPz8DDwwO2kJmZ+f/r168X5ebkJMACE6wRGWzfvv20opKSyeUrV/58/Pjx748fP9hPnTo1TVdb+7CMrKw7MxdXfZif3yMMjdl5eUe5ubisbt658//cpUt/w/z9mQUEBDq+ffmyRN/A4MiX799DUxIS9sI1Ojg4sBw4cOCPmYVF2esPH2Q8nJ1ZTp88eY2Di0tES0ODa9asWWUMDAxMUlJSHM+ePfsG1wgL3YiIiHIZGZkr/Pz8crW1tTetbW3V+Hl5ubZt29aH5CVGmEZwECspKfHz8PB4SUtLCwgJCbEsXbp0uZGRkR4PDw/HoUOHtkFd9RccHeiBA+VzMTAw/GJgYPiDbAtIA0paRdPMxMDA8A8qBmLDFMM1geQAP93ckj5ke8oAAAAASUVORK5CYII=',
    order: 643,
    base_experience: 218,
  },
  {
    id: 546,
    name: 'cottonee',
    weight: 6,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png',
    chain: [
      {
        species_name: 'cottonee',
      },
      {
        species_name: 'whimsicott',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABHklEQVQ4T2NkIBMwkqmPAafG0NBQZgaG1QyrVzP8xWY4Vo3/GRgYGRkY/oM0ILORDcDQ2NDAwNTQwPAvwcUo6Mv3/9/XHD2/HSaGV2OacRrrrLOzfsc4mi348vXRpw2nXuTBxHBrbGhgYmho+GfoVCz/6/evXSzsvH/Yfrz3PX1k+j0GqBxMM4pTYSZL6oYXNbm/7b38Sp1h0uZP5QzvF3cxGKexMpyd9RurRgcHBpYDBxj+MDDIurUn8+68/vAHw6I9LC4MDLf2MjAwMDMwIEIYxcYGBgamBgaGf3F2+oaLDn0TVhBlktVX+fts4/E7O0NDGZiRowYjVHEEP0gdOHqwOhUmCLHZgcnBgYHhwIEDoASAogmkjvpJjlAaBgDckmsP+2q7SgAAAABJRU5ErkJggg==',
    order: 644,
    base_experience: 56,
  },
  {
    id: 547,
    name: 'whimsicott',
    weight: 66,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png',
    chain: [
      {
        species_name: 'cottonee',
      },
      {
        species_name: 'whimsicott',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB/ElEQVQ4T2NkwA0YGRgY/uOSBkligP0ODiyOBw78+c/AwLg6NJQpbPXqv+iKUDSuCmVgZmAIZQApTGNgYJ3FwPAbpOGMsTGrydmzYDYMwDX+b2BgYmxg+AeS+OzNoKPzvTwvieXtszruOdMY1zO8gmqAOx+sEabppL9+4NsfDGoPmU2L6n5LiGXzMDBo/bp9SOnTysJ77C53w/bs+cjAwADWDNa4KjSUGeS8eWYMPlcECjYf5mH4L//l2v/XnOr//zLIMcd+OnAnff9WVbAlDAyMjCCNoaGrmFevDvvr6Frq9ZZTaMH7d8/43XlfsH1i+83w7wfrn2vfJJkYhKUY+H99KTq+rWViQ0MDU0NDwz9GY+M01rNnZ/02tExtO8/GUxn0Zu8XG26h71d+C4oacH9m2PhVgOGimBaD0Pvbj2+dWq7MAAkwRsYGhgamBoaGf4Fm4WruLI9u7nz6omb9w/utyRoMvn/+MEw8xRGw3ZaXK+vu0+2L9j56H9/AwMDUwMDwDxaqYA8fdNcJe/Dw/d74G0/fgvxjrigmfvL+q5crzTWPv/z0rSXv+sOtDQ4MLA0HGP4gxWMDEwNDAzg6QPEZuhpsKjjlODAwCIgyaH1bzXDtF0Y8gkMsNJSZYfVquAaQs+ohQY+R9LAmOfTkBY0CaGxAZInSiC09AwDLJsQQT3BFVAAAAABJRU5ErkJggg==',
    order: 645,
    base_experience: 168,
  },
  {
    id: 548,
    name: 'petilil',
    weight: 66,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png',
    chain: [
      {
        species_name: 'petilil',
      },
      {
        species_name: 'lilligant',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACaElEQVQ4T21SXUhTYRh+z87+3Nxps7KVlubwp+mKXCkFxoZeWBESuIF0pQijayv6IfgyvIiuE+uiJEzIWf6RBcZ20JgYLHGtg7mW5ubP3CG3tbU5t3PiHJio+V0+3/vwvs8PBrseQkiAEGK2wywAhgGw2zFsxwBCAgwhZripqTwYj5cVT7vnN5XyQO3MzNJu8g6i3WAQGkky9bHmfIdiI6KTRTeSIZHiVc3Ml4HMX2bRFrHPZMLNVmt6uKq+SR7/072QXfobT/hyUsGx5lY/9D7V60UWp3Pzf6LWJDZT1uSTKmOXVJZjGZERG830vGTuJ3nrJg2PkVYrBopKIQBe/45TOcBcoDGqs/fZgJAyUUzDHk5G1rTrQ+iaF57taU6/Tl/W+NU5a7tU1zAZkAzasjSsP7cwfSHqF5Yudt47deLiQMjlUpm8Xge3EMto662oeK5Mp487pLnEaSxR+S6vnvVk7ccmlryJF/TIuJA4YAhEQkM3vs+ZEYAAy4juPAJ1seKWsW6xEAz0r9QaUcIuyhUiBqehYdnPMrF5zJ4mnHbP1Jktje4iOPuwqO3ooETZczJM4asJXMwIVZALwb95x5QrythBTdw3vemKh0WV0R+jr1dWLvPmOMoLrJTqXONLogSWVxcgSc9+khD5fR732/fVtbfvMIcKW8r8LrgaHIf+aLir1+e7zhPbdXqdMua+/1ltTvaEg6Hqbx/uTgFEeBevtHc8ivjb1PQkk2DToxaKauRP5YRmstlut5bL1Vye4nr7BiB/XQp4awJ8XGG53vIbTQB4HwD7ACFAJCkAkuRC5oPeq/Qc/g/t4xSi1+kXPwAAAABJRU5ErkJggg==',
    order: 646,
    base_experience: 56,
  },
  {
    id: 549,
    name: 'lilligant',
    weight: 163,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png',
    chain: [
      {
        species_name: 'petilil',
      },
      {
        species_name: 'lilligant',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABj0lEQVQ4T2NkIBMwkqmPAVkjk4ODA9OBAwf+QA0Dyf1nYGBgDA0NZVq9evVfZEtgGmGKwHIzZ55hTU83+d2wfz9Lg6MjxKCGBiaGhgaQQSAMtpGJgYHhn7aMttAvTqZ2Vlbmh9euXWiDma6nZyX2j41N68qZAweQXQLSCLZNSUWnkoeTq+3S5VMzp154sZ/hy6fa9y9fdtYE215y9Iq68OvXj8lH96zLa2hoYGpoaPgHcypTdHQuz9Klk0VrJy4oMxMVS2PQN2N4z8TMsKq9asuzqzelOYQEvn96/bz0yoXjx0JDQ5nhgfP//39GRkbG/00zV3eaPLtV9uDn//ffvSIEL+3f3bqwPrPGoaGB5fXq1XxXr159B3IlXKODQwPLgQMNfxgco4zLbY12cf5lEbrKzPz856tnoZtmtB+FORHmNdR4hITcPwYNDwWrIFcb5vN7dh7evv116KpVzKvDwkDRAQ99jASAZDI4EENDVzGvXg3WhAKwp5yGBiYHBnsmB4aD/0AhiC11USXJkZRsAcnfnxLwCuLlAAAAAElFTkSuQmCC',
    order: 647,
    base_experience: 168,
  },

  {
    id: 551,
    name: 'sandile',
    weight: 152,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png',
    chain: [
      {
        species_name: 'sandile',
      },
      {
        species_name: 'krokorok',
      },
      {
        species_name: 'krookodile',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACIUlEQVQ4T2NkIA0whoaGMmlra/9nZGBgYGpoaGBoaGj4z8DAAMIQ8P8/IwMjI4zP6ODgwHzgwIE/MGmQRjhwcHBgAUn+//+fkRGkCVUzWJ29vbPt/////zI6OHgo/Pv3jfHQoUP3UV09iZ2BIe9nQ0MD08aNG4UFBMQ8WVnZC////6/0+fP7YEY7O+dsTk6eCgYGhte/fv3avX//9qpJPT3qd7iUdl9+/ixof3POSQcXHwd2Zqb9nJxcDJ8/f/ywd+92CbBTTU2tNwoK8vu9fv/u2/nTJ7gD5u7pEVLWLL556fyZqJfHgxYdOB4tLSHZ/vnD+9tfv38u/faN+SBYIz8/g4m4lGYR888PkbKWAdstDOxMRbhZRS4ysTIo/HzPcP/ModO3bt/Z9PXv/+PnTx/eC9IDDlUGBoZ/hX19nP1FRWLNCzd2Sb97HMZ0evuP+46xjM42Dux3Tx8vTIwLnADSAA3Av7BQZVm16v//sDDGvwu3HvaRU1bb/PPvPwZeZiaG1w8fMOxbteSwC9OHPR//MjPdefRkXuOePY+Qo4OxYf9+5gZHxz+r1u9LY2ZhLr1/8zrfnoOHHrB/fr0uTU+J6fff/xKbLlytmXf06GeUeITEOzQOGRg4GRgYbBgYGPYzMDCAIz7X05N98vbtP0FexNAIUrB//34WR0dHeCoBGbY6LIwpbPXqv9BwASc5XAAkB8KwZIdIjlAJ0pI5VDUAl1PiMnfiBMcAAAAASUVORK5CYII=',
    order: 650,
    base_experience: 58,
  },
  {
    id: 552,
    name: 'krokorok',
    weight: 334,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png',
    chain: [
      {
        species_name: 'sandile',
      },
      {
        species_name: 'krokorok',
      },
      {
        species_name: 'krookodile',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABy0lEQVQ4T52SzUsbURTFz8uMFlt1Yym6aAldZlNiNuJXCNKG+gWKb6IbV41ZKF34F7z+DWEKtt250RlKkSSiBhKDsRupGNpMs3AECVYQwQ8wtlXnlQyTYWKzEN/qcbm/c8877xLc8xAnpyiKIEmSAYDfrlNKDUKIXa8CK80KpYKkqmUBcM4JIcR5N2Eb5Jy7otFo+G0yOY9YrOScKMvyK1EUv0cikUNLiBPGmIsxZmia1vYjn/91VCwuzMzOTgJoAHDOOW/Rdf1Y13UWDAbfpdNpMRAIXNvgRjL57ODsLH+wvdU42P+6ePKwWYwpn3e6enuu/P6e4Xg8/ikUCoU55wIh5Ma0Wpkqy/Li8mpGGh3pR3d7O9KbWXz9tosXnqdIpVYnEomVBcaYyBi7rgIBPO72D81lM7HBNyMSKTW2GYVC7sH21voXAGMAyiGVGW6HQykVVFW9ASAMDI3vNj1xu40/JRwf7X9MrS1NWWGZUFWqFSUAj/pejup1gnBxeXH6HK7695lMYtrjofWapv6tpO38R1PN5/PV/S6dhPM/9xSvt6PTMC5bc7ncBwAuy6rJ1lyAGltoW6w10e633ssBZtWYuTnOc9eJ/5n4B31vxg+QCAP/AAAAAElFTkSuQmCC',
    order: 651,
    base_experience: 123,
  },
  {
    id: 553,
    name: 'krookodile',
    weight: 963,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png',
    chain: [
      {
        species_name: 'sandile',
      },
      {
        species_name: 'krokorok',
      },
      {
        species_name: 'krookodile',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACSElEQVQ4T3WSX2hSURzHf+feq2wrbTkMY20yiSCwXnoaRbtaxAish00T1pMvWwW9JNTDHs6QYrVJ5EM1C0QnBN6HEYNVlvMPlQ8lFW4KsdjDyNXcsrk283qvJxSvzFXn7Xx/38/5nR+/L4LGgwghMDIygjLT03ROpytzHCfu8FSvSBIJIQghRP5lqvkaanVQAvx+/433b19/e3P/YUl9tmdlZib6slareOswwhhTGOOyx+PRiKI4IZfJzv3mi7CQSsKPuQSsE8bNvYoNEgIIoW1gOBxmDAaD4PP5ru1Vqcbn0um1DrW6LZfJ8J8DXtnGgQ70fXOTfRaOR7HZLMccx1dnlDo6nc7r0VBofdhuvwAUxT4av1VeEwplpbyJyeV/zT+NxPUVAGPMYIwFacY9z4NBd+yJv7e1xCvnN/Kl9tyqbKW5BZYpIPLCFmIKvJs19I5dGR1dMJvNdBWcmpqaVCgUFyfG7nzhXgQnH5/otne2KHZHCS8UhRL9dVezeKy7h1G0qT8NDg2dBIB8FfR6vVwikXjncrlc/aYzt48XS1dFCoFGIJDMZcm+ARtoNJoSECIvFos3bTbbMAoEArTFYqEBgL/HsvqkuJVM5PMijdAHCoiqXcbo9IeOgvbU6XxXp1aZXc1etlqtD+p7rD1A7Ve3Xmpi4OPi8s8YANCmI4dNS8n03YPW/oG+833GVCoVcjgccQlsWO7O9HQZjdrF2dklAChLtb+SYwaofBs4gEpGEcuydCQSESqatPOGrP4no5JMbe9WEf8AZlH4EVPXuQcAAAAASUVORK5CYII=',
    order: 652,
    base_experience: 234,
  },
  {
    id: 554,
    name: 'darumaka',
    weight: 375,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png',
    chain: [
      {
        species_name: 'darumaka',
      },
      {
        species_name: 'darmanitan',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABtklEQVQ4T2NkQAMNDQ1M9QwMDIwNDf8ZGBhAGCtgRBb9v7+BhdGx4Q9M7H9DAxOIzdjQ8A9dN1zj////GRkZGf9fzCgR+yHBKmDe0H4LbgBUDlkzio3H1nXZi9xhm/nz4x+V/4z/Dv//z/Dt58df+82m1PT8//+fiZGREW4zWCPMtkt7e9fxsokGvr/57T8nMxsjx7//DOx8fxlusbz2cgis3r5q1SrmsLCwv2DnI2tcNi29kUdYxMzGTMuJkZmF7fq1B1d+/Poh8/vHv2D3sMZ9ODWumVruK3WFs1QjVcmW+T8jw53Vj6/c4X92aMGzHZXbJ9/5BHMZho1rZpW7C19nn2iarqX+5dHXP3c3vmD+qvVnnlt2fSo0akAuBEcRUqiuYmZkDPt7Zk3HBmNPff9Pj18z3D3zg2H7Jz6v6qwIFP+haNy/v4HF0bHhz8YFhc0sjKzhbOyMf//8Y//kGdVozcDA+AfZmSgaobb/Lwx1F+pfvZM9J8JVWpLv3dPqWWefg1JTA1oiQE05/xkYGRlRkxko9eBNOYhUwsDY2NjAqHX1KuM1be3/6DbB1KHYiCtBYxMHAJSm0A+Kx1uGAAAAAElFTkSuQmCC',
    order: 653,
    base_experience: 63,
  },

  {
    id: 556,
    name: 'maractus',
    weight: 280,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png',
    chain: [
      {
        species_name: 'maractus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABjElEQVQ4T2NkIBMw4tHH2NDQAML/sKnBqrGhoYEJpuH///9MjY2NDOgGYGhcFRrKHLZ69V8GBgbGsqQkya55856BbEQ2DMRH0QjTtJGBQZx9xoTtzLKiyr++f7/47s2b3NiMiov/GxqYGKFOh2uEmThxeqsO163Xs7R0NSx/yogwvHn5avO1uz/jGhoKPyDbCte4atUq5rCwsL9VO9ZK6h45d+EnO5vYd27Wv7eOb3d+ufrwJfHC0B/9/au/wwIKrHFVKANz2GqGvy2hDIEsyvELZP4IcMoZ6bEe2L3mr9Dv7cx2nqEMT9/99PfM3bRpf4MDi2PDgT9gjQ0NDEwNDQz/+uKFtB+/eJeqbVCUo2htxPzqwQOGx/trlui7+H//9pexMzBvw12Yc5H86MDS0HDgD8P+/yzNe4sX3jx9tVdGU8WkY8LUWTDn/f/PwMjIyPAfI1T/MzAwNiY4sDcsOPCTgQGiAOQN0awGRgeHhr8wTRgakVMIKLBAfFCAEZ1yoPELthEXwJdW8SZ/AJytrA/xGHMGAAAAAElFTkSuQmCC',
    order: 656,
    base_experience: 161,
  },
  {
    id: 557,
    name: 'dwebble',
    weight: 145,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png',
    chain: [
      {
        species_name: 'dwebble',
      },
      {
        species_name: 'crustle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACCklEQVQ4T2NkwAEaHBxYGg4c+AOSLtUyslXi5KmW4OGYGHhw13aQGCO6vv8MDIyNDg7MME0duhbNDN/+VhrJSDA///XtSfzxvUoMDAy/UTTub2hgcWxoANvSz6BryWQgOIPx6x+9t8LsDP++/Xz5/fOX1J77lzaHMoQywzX+//+fkZGR8T/IFS2yJi1cSsJVfw4+YvgTrvePRVXu48oN+0zPXjl7d1VoKHPY6tV/wRobGhqYGhoa/k1uq7T+/+XHLFlZaS0+eUmGxw/vv2b+zMb/5c2Xrys/zFE7MOvZG5haRlgglDEwJJrEVczjclZhYBFg/sn8n5Xt69MfvzjYmdiv3b31pKi9Q5+BgeFdA0MDUwNDwz9GkHtXM6z+m8jA4KSTkzHFxMhe88fjrwxPWW8xSL/WYBD4xM1w9NWZp383v1AvZVj89T/Df0ZGBsb/KE4FObvdJa9eWEo4TcRVVOTD3Xd/Hu18tobtK+u0qksTT8JsQ4mOhgYGpvp6cAj9n5HSmChuKTrv359//95deGeWOr3uLHKIY8Tj/v37WRwdHf/M7+/aIC4j4v77x2+Wpw+f7MuqaXZftWoVc1hY2F9YvKMnABD/f1SUl8GyZdteMjAwcBamx2r3z1y8GZpYQNEFBpgp5z8DIyMjA1wBSBEoNTGCKQTA0AiLV2RFoDhGT5pYNeJK+MjiAB+d3LzeYqdHAAAAAElFTkSuQmCC',
    order: 657,
    base_experience: 65,
  },
  {
    id: 558,
    name: 'crustle',
    weight: 2000,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png',
    chain: [
      {
        species_name: 'dwebble',
      },
      {
        species_name: 'crustle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACjklEQVQ4T2WSXUhTYRjHn/d8bGqbazM/YmYW2odZSl/STVl0IURB0BEvupFAJ0RQwoo56UUtE4LAQHAhflSoG0TBoLrJWReFGSPLlZtZ4nbEc2pOt6V5dvbGmaZiz937f5/fc/E8PwRrhQCA/HsSQhBCSrSWresFZOc4WgnKHQ6ZEFB6yQDGzEmMY0qOMWYAIA7gogBK4xjjuJInRq6v4fZ29nB1tfToZqUZGNlzsb7Huf4fY0wpMOqtryiJESjTaLVHz19/cA4A5Id3as4kw5+n4rR8X5o09OkLxSpB/OnanqMfuVDXO6LAqMViGqSStMe3UnOQroO+6Ve7Qrpcnwly1BAL08B/RzCX/htUJA4aKjpwueXxKQCCkBVbPjIMe4CIPqlkWyZLeQvhs8cpGU5vovWsnuJnEZnZnBoLz4XZ1KWQxE4N5VuffJlEjY11bnWSupifmIymLgiLBrEQUAZJk3QzAD9UhGjTkLSfkeeD83R4mh+f6LYfeg4wj6xW8weDQXdwfGx8IP6ps0JY2JGcSYqqM/K0VxgZ1LMaSswqyt/ySxBYQRSbOzt7LcqmUUODZYimqSNjPt/Lnq7+MmWDHSZzbXFJ0l2EluC9LxaZSdGoFiMhVSS60Nza2r4MNjXVf2UYerfb7X7X3//smALequLeZGdpwimsNPwtqK6NpRuZxWhEJYjB2zZbV10CNJuvXuL5wB6/f2rQ5XrrVCQ4e2JnnvP1hE8ZUlNT2VhQsNcaCPAQDM7es9m6ryXADfdf1Y7Y7TQqL5cxvpHr9wcqRFHMNhqNzra2jhccx9HIbudoj2cfGh0dJQ6HQ17RLGHHiq+r/ibEXXaY/KfcRgUVS3iep71eLyktXXP1L4+xLLL1UJgtAAAAAElFTkSuQmCC',
    order: 658,
    base_experience: 170,
  },
  {
    id: 559,
    name: 'scraggy',
    weight: 118,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png',
    chain: [
      {
        species_name: 'scraggy',
      },
      {
        species_name: 'scrafty',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABJElEQVQ4T2NkIBMwkqmPAavG////Mx44cICZ4eBBBseGhr8MDAz/0S3A0AjSxMjICFcI5jc2MjI0NPxD1oyisaGhgakBooB58eTOuLt3b/5vmDBvAUgDkhxYP0JjQwMTxNQW6Zn9rMdDnbRlnz1/ydC1/vbWRRLuCQyNjm+QNSPbCGKDnMizakrjTncrPaszF87/mHlDmoNdVMV5canzPoeG/SwHGhz/oNqI5pzKzMzuq68YSzatnebOwMCwC7dToT4PDV3FvHp1GCgkGRJnX/rOwsyyZ3aSlu+qVf+Zw8IYweIYNsIEQ1f9Z14dxvg3ad1Ly19fv8ouiVVaxfD/PyMDUmjjTAANDf+ZGhoYwVGAHkU4bUS2GcQG2U4wARCbBMlOqwDmwH0PkuzGQwAAAABJRU5ErkJggg==',
    order: 659,
    base_experience: 70,
  },
  {
    id: 560,
    name: 'scrafty',
    weight: 300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png',
    chain: [
      {
        species_name: 'scraggy',
      },
      {
        species_name: 'scrafty',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABhElEQVQ4T2NkIBMw4tLXsH8/y9XXr/+vDgv7i00Npsb//xkbGhsZGxoa/oE0hK5axYxNM6rG//8ZGRgZ/4M0pG/b4Pv17cunS2LTz4Fsb3B0/INsM4rGhv//mRoYGf/FTGiNM0hPWPj40LFvE91DDRgYGG6j2wzX6NDQwHKgoeFPQG9/LdejZ02sahK/vz/+wPrrF9sXBS/tjAkuQUuRNSNsdGhgYTjQ8IfBKNk311N3U7Dy9//X3/H92vDpH7uUNt+m+eHx/tg1hq5iZlgd9pdh+pbMg3K/ptkZCv69ff8rs9r6F88ZelL0GBgY3oSGhjKvXr0aHMoIG2Eaq2ZPP2rGkWFlLPn76qWHrKV3WX/66Qp6ZDr6HmhoaGCChTZCY0MDEwM4CsyEHfydHwdo/uTce4+LQUtL+rO1vsgWv8DQBAYGhl9Qy/5jxGPD/wamBi9Wd4btN18wuGiYmAr9un96VcMe9ESAM+UQSonYNYL8y7CageG1NiODA8M/iBdQAdk2AgB8CqIPnWszVwAAAABJRU5ErkJggg==',
    order: 660,
    base_experience: 171,
  },
  {
    id: 561,
    name: 'sigilyph',
    weight: 140,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png',
    chain: [
      {
        species_name: 'sigilyph',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACaklEQVQ4T21SbUhTYRQ+7927me6jbFu1LEGcMewDSlYgZfdHFIojCK6RUVGUYhT7ESMwydckgn7lIHPFkrIf5hV/BFlC0o0SpBoRa0UqQnM5MrTU6ab34427TVvS+XfOe857nvM8D4IVwRKCraEQBY4DnqtSAAFd2aPm6H/FzJr6kUCItLLvn0GWUpzXed8l+TuiWe7zykNX1Vt1gFKKEEq2Lm9PZixhsUAEqfRM+cECm70v/iEimc4ewhM/JV/voxkvvK7/nNzIcRrgeXkZKmEJJgKR3EfruPHNZV2IkRXL4G3U6vSgw8UiZCuBts5zN+tScAkDQJQUVEIZIEhxXWl8Iphdrl2xGbHQFMb94jply9gXzaI0Ba/E4ja4N3QJoGkegCIElCJI47ce8T6wO7JP2kpECbQKZkYZ2j3rRHm/hyYtqxQDrMm9/tFT2cySl3iZnFNtN9qFvtyifcf1MwUVe8oXEqIkfovggcdxGIkjuWL9J82CGfXztfUHkmSpSAsbW0odJsPA+9GcAWfRcJe9sqxFwXhxbvgrE/JHUTC/RN6kZ3TK4NOrw8+8zapEqY3V3t2gt3jAqhO2/Xi31ZiVU2dcOweJqAEmsQMkrQwj8sIbOa+gGhr2j6mcIPVQAJTSxw6m7a4701MROfCdDzbkH3PuxJr51eYN0uVET++O4OiLINT4tHC3VkyzSjAQIukutDs0MfmiNRbuCXdf61f/Mp64tVcPDD+ro6fn/O7nQAgDZEmOpCSpwpK1Smp82sDGqJw7bjP+WpzONshIiXV4JtI2VWFmhCpNk6CBUCtNO0R9zzD537P+AJsjAWR5bcr/AAAAAElFTkSuQmCC',
    order: 661,
    base_experience: 172,
  },
  {
    id: 562,
    name: 'yamask',
    weight: 15,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png',
    chain: [
      {
        species_name: 'yamask',
      },
      {
        species_name: 'cofagrigus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB3klEQVQ4T2NkIB4wMjAw/IcpB3FwAbjCVaGhzGGrV/9tYGBgamBg+AfSgFUjTOH///8ZDxw4wOzo6PgH3XQMjf//NzAxMjaATIXbOJ+BxYFXSzP57bXLXekMDJcxbPy/fz8Lo6Pjn81ubgGyf/6131CQevfKy7FD6cbdcCMGpui9t+/Mj124LOl/QwMT3EaYpuVr54VzXrm9gv3MNYbfgrwMnBE+DHx8vAxcrKwMZ+/cMUmIzjq7atUqZrBGsAkNDf8mzZlkaKmufPrVwyfM62PSf3k0VTEahvmynjp66tKbb19rc3OrNsG8ArdxrZfXbJWyjJS/bGwvnzx9xnh+2x4xj8TIHwIC/ByTJk8vnjp7ed+qVQ1sYWENv+B+9LQ1FE3lFrvNoafOf05abI6JokLCpRt3WMSFBBhAof/j96/zs+asNj979uxvWKCBbQQF/4MPH3T/Xr9jIl2S2iatqiA4ccqCKfb2FswGOuqZbx8/Y/nHy2UWEZN9GuS/sLCwvxjRsbo8P45RVe5ySErxeZChe1fM9fx04qzZoaevJ/evXv0OFLeMjIz/4RpBtoauWvUPJAjSsL+hgeW1ltZ/kOlIkQ+PWwwb0TX8X7WK+cC1a4yODQ0gA4hKq3iTPwB/l88Rj0+TowAAAABJRU5ErkJggg==',
    order: 662,
    base_experience: 61,
  },
  {
    id: 563,
    name: 'cofagrigus',
    weight: 765,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png',
    chain: [
      {
        species_name: 'yamask',
      },
      {
        species_name: 'cofagrigus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB/klEQVQ4T2NkwANCQ1cxr14d+o+BgfE/ujJGHPoYGRhAamEa/jOia0bT+J+RIXQ1E8PqsL8gAx3z1huLCKldXt2g/QtkCgPENDBAaPz/n5GBEeEk47TNE0VU7PI+3znce2yWT0namf+ss0wYf6NohPgl7K9N6vz8IxeZ7lYXf2F8elVoE/svtv+vvr1lvPnxisu1hZP2ps2cyTorPR2sGWQj3AmacVtu/v365Hp5g6HB5QMn5S9t+/6XV/n/dzMf3Te83JwBebZOF1etWsUcFhb2FxQIMI+zFy8+eM3QSkrp/atnR398+ym+dc4elQPLu1xnXTgZ9/Xzb/dCWxsJsD///2cE+7Hh/3+mBkbGf3Mu7vH494e77OuPb4v+//7bdfXgUVEu3k8Ot185FbOy/PPhY/EXWNrA8ImhoYEJHjihq1Yxrw4DhyZT1dpNN5W1FFWOrVrNIK5j/HXzuhtbLy99OJGBYdqxhoYGpoaGhn9wjf9B1jMy/u8/uHPXz1//XdfMWBtyZu1sjuYdu0v+fv9s0BAYJMDAwPARZDADAwNEI8wUBgY32ZqNTQ9kFHgOZujrOIHkpp0/X3D76qeI/piOEAaG7U9AzmRAthFhwGNZBoa5nxgYGN4jBz/MRZgJADPtgaPp////TIyMjP8Ip1WQU+rr/yOnIvTkBjIEAIqU5BCJ4QRxAAAAAElFTkSuQmCC',
    order: 663,
    base_experience: 169,
  },
  {
    id: 564,
    name: 'tirtouga',
    weight: 165,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png',
    chain: [
      {
        species_name: 'tirtouga',
      },
      {
        species_name: 'carracosta',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABKklEQVQ4T2NkIBMwkqmPAavGhv8MTAwHGJgYHBj+NTAy/MNmOEEbG/YzsDQ4MvxB14yiEWQTyIb0ZQy5f1gYTP98k21cmPD4bkMDA1NDA6rNCI3/GRgZGBn+MzAwMM3cY/HAQEFUdtvZzZvvPxerWVTw6hJOG0NXMTCvDmP4y5DNYHQ1NfuoFs/nPydfLuJZ/Vr4bm/AWxWoRpBFIMMRgQPzS+QChsg0sZBlcpzeDPs/nfrRdWt61K1ShvVwg5FMQHXFKgZmhuVqlosCM2Y/e3FQo6JsoyYDA8ON0FAG5tWrGf7CFOMM1QgGBimDdAbj7/8djjfOOvDmPwMDIyPUmShORbY2Lc2Yddass79hYuiacGoESYCiABTCDQ1g54EDBBkQTAC4kiTZGgFEvGMP8nZ0EAAAAABJRU5ErkJggg==',
    order: 664,
    base_experience: 71,
  },
  {
    id: 565,
    name: 'carracosta',
    weight: 810,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png',
    chain: [
      {
        species_name: 'tirtouga',
      },
      {
        species_name: 'carracosta',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABfUlEQVQ4T2NkIBMwYtX3nwEs/p+BgYGREUxhAOwaiXAFVo0BDQoCG+b8+ZmS+014Tvm7JwRtXLWKgTksjOFvzSru0v//2E0Zmb6fbgn73j3zjDFrusnZ38gGoNjYsJ+BpcGR4U/mKqE6FfV3jU9vch/uC9MIYmA4+6ahgYGpoYHhH0wzXGNoaCjz6tWr/zLUBhh3a786oSD5nvH2Kxnm1//Pbu0Pe+cTuiqUeXXY6r8YGhtWabE1hF37VbJfJTlKVGGOwE+er8c+f+N6wb7rg5wlg2gYA8NfhwYHlgMNB/6ANMNsBNH/GRj8pNwbnkx3tXvmx8r6kYFBgIHh5RNFhhXrhVbc4+KpZJiw4wEDKKoYGf5DNDYwMDE0MPyTSbDTffL9v4ez0OtXGpJ/hB9xcqq9fct2//ZHQVYe3v8n73ft3Q1TiwgcqEl4oxBJDWo8gmx+ZszcIMX7/5nkZ0YpNd7/Bw4yMHx+9pnxrJTvX4aGBsxQJSKxoCghO8kBALL4iw/htJjEAAAAAElFTkSuQmCC',
    order: 665,
    base_experience: 173,
  },
  {
    id: 566,
    name: 'archen',
    weight: 95,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png',
    chain: [
      {
        species_name: 'archen',
      },
      {
        species_name: 'archeops',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB0klEQVQ4T2NkwAEaGhiYGhoY/uGSZ0SX+P+fgZGRkeE/VJwFpBmbARgaGRgYGI/vFUm/+Ez2uIHUm5Adzo/rGxgY/v1nYGBkZIAbyICiceZMBtb0dIbfGzdKZJ548KKGX5b7/4lPQvYbEh7fbfjPwNTAiHA6skYQG+zErD3Sq/w5LEJ/8t9gmH/jav/6UIaihv0MLA2ODH9gXkNo/M/AyADxG2fDBsMDZVZqZpcePGPwOXG05E3ev95VqxiYw8IY/mJqZGBggIVkW79cyIefP1e/esOzdUHPXR+Q4tBVDMyrsWmEaUpcKpupyPZY6uRNK3MVyeciYgzPJ1XzGq5kCDv+HTmKwE6FCcTMUVbh5XlbMT3iQ8qchbIXngr/EDvx/vN0wU/iYg/PcrQfnXfzGQPUSzA/ggMmtEOJn4P5K/vi0pev/IotjrPqC1oI/L7z4839f5MfPWeben7u9YcMDQxMDA0M/7CGKjgAQuxqGES5muMFHl/9wvLzz9rmOyYMDOBQBVuCngAYGxoYmBsaGP5MaJXR+8XANK+s+pGJe62+9t8bn5/sWX3vIy6N8BS4fz8DD/N3Nhc7r18bkJIlPK6xJTn05MsYGsrAtHo1Ig5BCgDO8rkP4qW0VgAAAABJRU5ErkJggg==',
    order: 666,
    base_experience: 71,
  },
  {
    id: 567,
    name: 'archeops',
    weight: 320,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png',
    chain: [
      {
        species_name: 'archen',
      },
      {
        species_name: 'archeops',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABV0lEQVQ4T2NkIBMwkqmPAZtGxlWhoUyir18zHjxw4F8DA8M/bIajawTx/yMrDA0NZV61evU/qEK4HFzjfwYGRkYGhv9lDCK8BvaOFhJMbP869i+9tYuB4TFeG9OMjVlnnT37O1FCLyRIRWM1689/DOdZ3hyeLvM3o3T1lw9MDvyfsg8c+MYAdTqyU5lAgnmq5qs52NhCBL4zfzdUEeVs1vz6WnXXm1mCv5juTLh7YkEoQyjzaobVf8EaGxgYmECBkKxtKWT1n+euMDOHwGeWPwwfXv1i2BjMysDx/NsJ29X3g8sZHj+DqUXy439GRgbG/w0GJuul2HmtXvC9+3Di3E/pW9qMV//xsKTc23b5soODA8uBAwf+gCxDdiosRPkYZBh+M7CBoIY4w40bt8CB09DAxNDQAI8agtEB0cTAxNCAGp9YEwCSS0DyIFtQ4hbdqSSlPrLTKgCnDHQPM28VeAAAAABJRU5ErkJggg==',
    order: 667,
    base_experience: 177,
  },
  {
    id: 568,
    name: 'trubbish',
    weight: 310,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png',
    chain: [
      {
        species_name: 'trubbish',
      },
      {
        species_name: 'garbodor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABpElEQVQ4T2NkIBMw4tL3n+E/IyMDWPo/NjUYGkNDQ5ldBF2Y0mel/wZpmJk2kxXGRjYARWNDQwNTQ0PDP5ACm8x2wSPTK38xMDB8hWoAqYXbDte4KnQVc9jqsL8Z0ZXWVqwiWq/4OMtFGVjePrp1ubP29bEdDGfPfmNgALsdrJkRZktpaqvBt6/fdL+zMHpGyJtEPv7zleEHBxsDy39Ghgt3LzpMX9x8MC1tJussqBdQnBoTXjLDSEQu7C87J/9PVqb/Xasn/ol3CGZXEFdYXtweH4XsZLBGuN+SkniXcZld4xISk9n25PLfH+/rGZ6/dWTWVHJ59+7jk46fLIzTV6+e9gXkUriN////Z2RkZPxfkNh8SktMyfTG63sMD19dYZAUVmf49uNb4et3zz78Y/x7ZuuulVcaGBqYMKIjxCfFwfTxz/S3mnKuDDy8jAxfv+ztensqkWHXLpTQxZkAGBgYxKwYGBiOMTC8AnknLS2NddasWX/goYqeKhwcGliyRLX+g6IG4v//TA0NjKAoQElBeGxsYGoAaWSAJAh0gM+peJM/AH/goRIUSzrkAAAAAElFTkSuQmCC',
    order: 668,
    base_experience: 66,
  },
  {
    id: 569,
    name: 'garbodor',
    weight: 1073,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png',
    chain: [
      {
        species_name: 'trubbish',
      },
      {
        species_name: 'garbodor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACc0lEQVQ4T32SXUhTcRjGn//ZOfvQqWnzo7HSNBVnxWygUQhDMhMJTFlERFhhpSSERl2Zp68L6SbsQorR7CIKR3VrHxdagV1klsU0/NjUwXTOps7tHLezc2LDSRL23jzw8v7+z8vz/gnWqwVQPATWemGWnYQtEu9vpeReRlkmLSwyXGLJEQ2lHrkybf3atadFkTUxJ/zvAdIBaJJzzl5TMEkVFJGHm+k3VbDbV6NOEkBITP4tEm/dyWv+UEhk5T6e+hISh1/ScqWzyfn2xVYwuQgj8xhDYShQ0CVVWncUJh1SRFQIrqgw4LVUdvN4bwZkvZBEAiKxYKkOsFLM8ZHRyFwaGgrfzKtpn84OXid8BlU7m5UwKfyytLn7Gq05Dcpzzh6eBWgWEKLMxqqxNM02VL/bZ9u1U3+igsvEaMDVyLpfWaKDbbsvZPPcTHECs90v8L7EGGiGWWaDLdKJU9pPRn6shE5OyhnnxPOCrRArmKiX6/bnaY92RiD2KQl97DeWr8ZAFqBYQLycXdP+M3/b7TMetRh2+4gjPP7EoNSmhuiUukRCw5OQDtea9/l959PT8VWjKtUeqLN6tekNpQtcqGTSz3hpGdEoNQgQCgshx8w3caq+yD23eBfLjhhoMpno/v5+AQaDYW9a/nCaKKBpNAxvMCDNq8IkVWAAIYhZFdf4YH7EwsJEb3K8gdwUT4F28HuKKlfDBVdLlyLqJQWGJ/ykR0+HqjiGYbqnPx+PBhkHKQBidXG53uCXcsdmHIOvy3R065L6ls4jPGv1DXw8XFR2MH+NCvRMDf6IZrJxjvXTbP5eOp0KLhfH6vVy1m4P/R3kHx/++HLYmrL+AAAAAElFTkSuQmCC',
    order: 669,
    base_experience: 166,
  },
  {
    id: 570,
    name: 'zorua',
    weight: 125,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png',
    chain: [
      {
        species_name: 'zorua',
      },
      {
        species_name: 'zoroark',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABS0lEQVQ4T2NkIBMwkqmPAafG////MzEwMPxnZGT8j81wDI3///8HiTEyMjL+A2lY9X8Vcxhj2F90zSgaQ1eFMq8OWw1WVNpVKtFd1v2BgYHhB1hzY9h/hgYGsGEgANfY0NDA1NDQAJbYefzEVFkJuZQPHz48PnBkb3xVbu5RsOr/DIwMjAxgp0M0NjAwgU0rZ8ieZTMj2E7DyZGBmZOB6d8fhkdvH/zsOlN7iuE9+9RdNXtXwiwAa4RxtCrkQs2UnVYVmWYyCAlJMnz59IFh8+19DNseL3nP+VksfFv1tt0w78CdGrpqFfPqsLC/zjZBSnFlsTskxKUkH7988uXqzcvF/aUNy7A7FephmGYGBgYOBgYGIQYGBlDgfEPxDnrgwEILOWTB0bFqFXNYWBgo0FDiE3sC+M/A2NDYwNgACQB4FCDHJfWTHKE0DACCwIQPjRWBmAAAAABJRU5ErkJggg==',
    order: 670,
    base_experience: 66,
  },
  {
    id: 571,
    name: 'zoroark',
    weight: 811,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png',
    chain: [
      {
        species_name: 'zorua',
      },
      {
        species_name: 'zoroark',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACDklEQVQ4T3VSTWgTURCe2Z+IBjcJxhRbK6EKgvWiRAqNUUJ7EGpjS9n1IgQsKKiHgogIUl8vHsSDgicP0hZFeVXEHBRjZFtdWqi52Bx6qJcqlkBL1Ua0bXYz8rZupYkdeDyYme/73ptvEDYJAkAgAkSk/7VgdZI4l0HXCRErokZEkriqCTYAiZiEyFwACEUAHwCsrBFsqLlFN4gEKVLm6f3munCod/s2f8KvaeGfpR+DzUc6BkQPY0xibI3YBRJxGdFwPow9S9U3NL7wqQpIigIry78hqAWhMD39suVYVxcAlD0BF5jP59VYLFbOW5n+fU1NA3NzX5fr6nern2dnYX5p0WmLJ3wfpwoPDree7BV/Fv9HT/7G5c7wufPXrZn5L/tzueeVVEtKmiyMw6Vvd+1P6QkFyzS+92Br/K8ioJgiGobDh24f7ew49Z5PZO2bmYtyH57GJa0C33cp5bNtabVYXLiVOHHmqmmaSjKZtMVTxRFeofV6MBsKbGm3LHM1uueQ/KtUooB/FSMNETlnvkv39T8cZowpjDEXCJzrsmGMOAAQzT5hZjCgRd88egwgyRDv6Qbblqz2nitJALDFYqDw1bODcy4bhuEM3bu2Y3Gh2D35dmorKipGGkMzd4Zf5cREa+z4B15XrtkyzwavULNygvU4gDQ2Our2HLiwk3R9pILozmE9aoCbLX11/g+/8tkQIqGP8AAAAABJRU5ErkJggg==',
    order: 671,
    base_experience: 179,
  },
  {
    id: 572,
    name: 'minccino',
    weight: 58,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png',
    chain: [
      {
        species_name: 'minccino',
      },
      {
        species_name: 'cinccino',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABXElEQVQ4T2NkIBMw4tTX0MDE0NDwD5c8No2MDA0MIPyPoYGByYHBgelAw4E/6AagawTx/4MU2TVbaB6qPXEdSQNcDiSGrBEuYd5qkv2fn6mchfmfF+NvFv2bF95vejPv5meoerDBqDZC/SVebzJTlJc97d87xiffeH6seVB1phBqM9xwFI0N+x1YGhwP/Jm528eGT5zz8J+fzD/+3RdQiQ+b8XTVqlDmsLDVf2FOR9H4//9/JkZGxn+bTrdv0tU09v3H9Ivh+NU1k2NMF+Tt/9/A4sjYAA8kFI379zewODo2/Olflt3moBtf+ejVLYZTT2PCWuMYVjc0OLA0IIUuVqf2bfINY+f7u+LPzz+vvrzgdauOX3spdFUo82pcTkWOqzlrs+V/vvj6Mzt7wYv//xkYGRkh0YTVjzDB////MzIyMoIVIrMJagQpaABFDUMDQwMoBWEBuNMqgcQPAAGGjA9nKkOaAAAAAElFTkSuQmCC',
    order: 672,
    base_experience: 60,
  },
  {
    id: 573,
    name: 'cinccino',
    weight: 75,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png',
    chain: [
      {
        species_name: 'minccino',
      },
      {
        species_name: 'cinccino',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACFUlEQVQ4T2NkwASMDQ0MzPUMDQyMDQ1/QNINDAxMDQwM/5CVMqLo+8/AyMDI8B+LYSBBRkYGhBxCI0xTv4NAx5t7tmGsSeynGE7l/Xm37eujSQxxVQwMr5FtRmhsYGBiaGD4x7AwUDjzw71j9Y/l1IRUZRhuc/1m2HuAxShv7ozzq1aFMoeFrf4LchGqU6FuLNsVX2z/n69HdtKFb+xa6lxv2VjDrFqnr97f0MDiCPU3XGPDqlC2WTfvefUFGH/7devLZGv1YrWjl3b/Ofy0k4XjDq/f5JmPNjc0MLA0NDCAAwykEYTBAWI6xXSzn7GaD/v1twwWLCp/X7B+Z34j+etP1qob9gzTTh8LDQ1lXr0a1alwzQxhDF6tIXGz/fUjpY7fPvp757udrE9fskw5Xno8t6GhgamhoQEcLRCnwgKGgUFu3aXcNRLSvKbff/3/z8L479/7Lz+YJ8+6vGJv177I//8ZGEFxAnIhmIKZ5NJrvbE42NKPlYXpD58Qx/83L78xcLOxsq6+eYNhyrkr6Qwlt2c5NDiwHGg48AceOOCgfnBdofCTRJC2oUSXuKoIw/en7xge3P+wZT7H81+cX39fPpd7oSF0VSjz6rDVf7FGR3OCcYCUFnsy+/8vew0XXpqmfY3hF3pqQtEICjWGUAYGkInIClf9D2UOY0QVw2pjQ4MDCwODwz8GhgNM9fUH/jJiSb8AgHDXD7lHbU0AAAAASUVORK5CYII=',
    order: 673,
    base_experience: 165,
  },
  {
    id: 574,
    name: 'gothita',
    weight: 58,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png',
    chain: [
      {
        species_name: 'gothita',
      },
      {
        species_name: 'gothorita',
      },
      {
        species_name: 'gothitelle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPklEQVQ4T2NkIBMwkqmPAafG////g+UYGcHUf3QLMDQ2NDQw1YM0NDT8gykODQ1lXr169V9kzThtXLl9ex7rrz8BUzduS9k7b/q9hoYGloaGhj8wzVg0pnElyF5udU9wKOCQFmQ4dvHW2Vuf/xRuXLLg8KpVq5jDwsLANoM1gpzX0NDwb/XK1W23ntzN+PHklKC8hua/jW/3fqu2a+e5f/fJ/cj4WGMGBob3IL8zMjJCAgCmcVrbNPsTLKfXXZV4KfT1BxOD3hdxhhSDyP9Xbl16UJRRZM3AwPAcphbuVJgAAwODmH6GSfHF/xfYY4UixS1kLVyys7JNGBgYHiIHEoofsYXe8uXLTSIjI88QjA6GBgYmBwYHps+Saoxn02eBQhEUhyALUOKSUMphXLVqFRMsJImKR0JJkZCNOPUDAHTggw961xdeAAAAAElFTkSuQmCC',
    order: 674,
    base_experience: 58,
  },
  {
    id: 575,
    name: 'gothorita',
    weight: 180,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png',
    chain: [
      {
        species_name: 'gothita',
      },
      {
        species_name: 'gothorita',
      },
      {
        species_name: 'gothitelle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABGElEQVQ4T2NkIBMwkqmPAZdGkPh/fIZi0wjWFBoaypyl/Zpx2lXR/6u0tf8zNjT8QzYIXSNBm2Ca4RobGhxYGhoO/MmLd0mUFuHIY2RgPSPK+2v7wVOv7omKcjl2L3w4nYHhwQ8Ujf8ZGBgZGRj+b+7xFTl39+cxBkY2VSbmzwwCXPwM/xmYGT59+LirZuY+dwynrgoNZQ5bvfrvtEr3Ag525qoXLz4yCP0WE/3D/Z+BnePf/48/P3SWTDxUCXMVyABsgcMfYC9vpfPX4LeU5a/Q1x8+rHvw/j3r/DU3tvz/z8DIyAgJbVLiESXgMEK1oYGB8erVUMZQBgYGkPNB3ljNwMCwevXqv/iiAz3OcUYPKU5FMZRsjQD/smIPSxVfBgAAAABJRU5ErkJggg==',
    order: 675,
    base_experience: 137,
  },
  {
    id: 576,
    name: 'gothitelle',
    weight: 440,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png',
    chain: [
      {
        species_name: 'gothita',
      },
      {
        species_name: 'gothorita',
      },
      {
        species_name: 'gothitelle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACCklEQVQ4T2NkwAL+NzQwrb56lTFs9eq/2ORBYozoEg0NDUwNDQ3/cGmAiaNo/P//PyMjI+P/w0uTlD69esHnVWB2iZGx4T8DAwMIowC4xlWrQpnDwlb/XdXmav+fiW/HszffOC7feeY+b8PFXTPTjFnTZ539jawTrnF/gwOLY8OBP7NrHJu+/uCoffXuK4OMKOctIR4mr4ja7XcbGhxYGhoO/MHmVCYGBgaQ35iXpqde+8T6Wv6/4M+3LMwCrWkNy6ch2Qay7D/CqaGhzKBQTAlRbjKQVatlZWL5m9672Y+BgWEbAwMDr6etgd6rb5+unD177yMoUOEaGxwaWBoONPyZkR1b+e7tvzYOnr8M3DK/b67bdWuDpChHAAfLn08Xbz1LPn755eWGBgYmmEaYM4XXN2cfdRSwVr/1/gnDDY4LDLyMPxk2Hrp1dsHmyyZQ54LVgjU2MDAwNUD8J1aTrHWF/48ew/ELr/9Kqd/nF+FluNQw954bAwPDp9BQBubVqxnAiQKs8f///0yMjIz/Vi5b6fvl6ZnO5HndTQzXGVb01KaVMfz7VsbLwiWX3jjrGyyekVMOOKSmTp0qISHBxxgcHPscJDlz8mRdfq7f3l8eP56V0tD/DptGkK3gVAP1B2NoaCjTaqS0+v8/AyMjIyIFYSS5xsZGRlhaBaVbe3t7JkdHR5C/UJIdAB8y2BJROIxkAAAAAElFTkSuQmCC',
    order: 676,
    base_experience: 221,
  },
  {
    id: 577,
    name: 'solosis',
    weight: 10,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png',
    chain: [
      {
        species_name: 'solosis',
      },
      {
        species_name: 'duosion',
      },
      {
        species_name: 'reuniclus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACh0lEQVQ4T2NkwAL+MzAwMjIw/AdJrQoNZQ5bvfovujJGdIEGhgamBoaGfwwMDIyx4nqii19eeoVsEEw9TCMTSOB/QwMDY0PDP0l++apVXlaRnAz/5K59/jwpbsu2WqgGkHqwS0AMkCaQDWBwIyJCqvXSjXtO0hLsQhxsDIdfvWN49+Sj1bynl4+HMjAwr2ZgADsbbKOmvKbk9eevBBh+vb2eZGhcpCEo0Pvz28+f+95+ZpRj5WCTZ/wf1XT11PL5CQkciQsW/IBrZBCSmZUmxM1izif4cOO7N+bKkuImH999FOVmYWUQEBD58fHN65ZJjL9vMNy4uhbspf//QYHHwNNmbH5TxNFe6u+nzy/4udiLRK5fb3jGL6J2Q1fj98/lG1g5/zGfZPrx9peRq+sTbnmZcveamseMqxgYmPeo619XMzVQPfzpw1L5l2+sQn9/Vbwir/5PIifv/+/bt5j355Tv8C5OevHw24+4j3//hldNm7wG7Ec9UaX8aHGxCQeePmRwsTJjYJOQ/c2up8Osbmn1//bVy8ybC4o/yxfmWp17+eSbwZs3/6esXn0fEY/KOsuncTNF6IdH/vri6sXGw8zK8O3rZ4Z7T28zCBw9zvB41r6FJb+uJ4AsamhoYGJsYGBgagBFRwMD0+QGhdvspSFKr6TFrgrxCIr//feb8933z3fVH73We9g77W65pb4uw/Hj30GxAbIRHKm5kyaxizx+9uDtvQc/Jq1doaJpzCUWHlbP2FBe/jPeyOqFtqvDsztK8iqz0tN/w0IVFvfMi5cvN2cREHgW6en5ADkpBmdkGAY5Oyvevnp1S0NDwy+YjRjJHOSH+vr6/42NjYwgmpGREZzMkAEAox0CnkU9aR4AAAAASUVORK5CYII=',
    order: 677,
    base_experience: 58,
  },
  {
    id: 578,
    name: 'duosion',
    weight: 80,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png',
    chain: [
      {
        species_name: 'solosis',
      },
      {
        species_name: 'duosion',
      },
      {
        species_name: 'reuniclus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABRUlEQVQ4T2NkIBMwkqmPAavGhgYGpnp7BqbVrxn+gwwOC2P4i24Bhsb/DQxMjA0M/wi5BEXj/gYGFscGhj9n1zMY/3/L4PdgE8Na9SiG37oRDNdx2rgqlIE5bDXD36mcDCGCuXGJRnqSXj//MjB8ZDq/zy52lzNUI8gisPPhNjYwOLA0MBz408/AYG0W7HyE29H51z8GHrbHa7a/f8G+vTV9J0MvsjcQGh0cWBoOHPjT5aCX76bwc4KA7M0/X84wsFzaLn1sXpqE155ZZz/+Z2BgZMSwsYGBqaGB4V9HiLIV43WWPLHvbKF/RJiZCh581P/66v6lBqjBML+iBM7//wyMjIwQPxS4KDjIsrNrFm+9OR1bSGNER2goA3PWawdGxwMH/oAMaGBgYGpgwIwenCkHFMrXXjswgvyNLU6pm+QIpRqQPADqTHEPpNtZmwAAAABJRU5ErkJggg==',
    order: 678,
    base_experience: 130,
  },
  {
    id: 579,
    name: 'reuniclus',
    weight: 201,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png',
    chain: [
      {
        species_name: 'solosis',
      },
      {
        species_name: 'duosion',
      },
      {
        species_name: 'reuniclus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACGUlEQVQ4T2NkIAD+MzAwMzAw/GNkYPiPrJQRn76GBgamhgaGfyA1/xkYGJE1wzU2MDAwNTAw/LvIwCDGwsAVpM3wbQZIw3UGLt/fUv++6z37sec/AwMTIwPEILjGVaEMzGGrGf5eU+JTZXb4s1R93jezW7WSeWw3viQzr/5sIcvA8B3ZVhSn/v/PwMjIyPD/4BLNtW8vvVdQ1/5mdH033/aQJU+8oF4CqQf7FeHUhgamhoaGfwwMoULLCv6d1dH5qXDjHtcv3ra1bE/VxBem3HqWsIqBgTmMgeEvisaZacas6bPO/u4RFJ9kUF+WyyEu8f3F/Scc//rK/3LyS7Hc+s1YVfzoaTtMM9hGmKeX6OtkfLl4pUd86rT/muamPDfXrP73tqOLiVlRneHOp+/5zW8fTWpgYGBpYGD4wwgLzX4l6UxNBoZptz78LPyj+eaZIBvDSqb9DAxfpGTe3PnPwc7M+i+o59G9PXCN////Z2RkZPw/N8l2va2mdMDVNx8nBHZuL2wNNl9r/Phz0N0rz+a+DVARZv/DeLd81emSVaGhzGGrV/8FORUcUr5pvlxObJ/dmH7/u5o/89Dt7TUBC4zkhOL3X3i4IWLa3pCONGOeillnP8ISDCxU4cEMkzDX4RYPszZyff/j7/GWhcfuoqcw5HhkbGhwYGZgOPAPlsxgiqFJDxR/8PSKM62CUsmBBgfmg1gMAhkIACqh1g/Z49yuAAAAAElFTkSuQmCC',
    order: 679,
    base_experience: 221,
  },
  {
    id: 580,
    name: 'ducklett',
    weight: 55,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png',
    chain: [
      {
        species_name: 'ducklett',
      },
      {
        species_name: 'swanna',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACJUlEQVQ4T2NkIALsb2hgcWxo+IOslBGXvv8M/xkb9zMyNzhuY2Zg8PqJrg5F46rQVczXtK/9b2ho+AdSeN5+2mxhnR9Wb77/nLx43quF/Qz93xkYGEB6/sM1/v//n5GRkfE/SEPDqga2hrCGXztnlW1VEFXw+rDyy/3ad0t0d+269PU/AwMjI0zj/4YGJsaGhn97jFsdb579cD2boftFAwMDy93VXpflVcQ1dFbeDovoOLJ6f4MDi2PDAbBfGWGavk8plr/8SPDGfuMrN++/e71Yl/uHyrJfmhmSz18cDvixpey7jBtXauaufTC/Mu53aGBxPNDw55JNt8t75z+7t7idZbh74j+DjQsXg9yf9wy7X/PcfX6XSdKf9xnnpfqHkhPv33/Z0MDABPIU2M1TeCuFxVy+at4Rn/T/wC1ZZokkgxkP3/3X5JPlZPjKzs/wevOrCZenbyqE2gjSw8DQ0NDABA1Jfq3JCTt0bdnEHl94x8bwn0Pmz8tXG4U4XpTvKLh0E6YJEaoNDEwMDQz/EgzMVR94Chz6JsxwS1JfXEzMRFLj+bEn3Vu8l5Y1/G9gaWBs+AvSBA4cpIgFxw8DAwMrAwMDm1ZL1BU+eSGFV4fudt6bvb3CoaGB5QBS6kFNOaGhzAyrV/9VKveRe/mM7cDfd9+//WH8n/Nny44DDFA5eKhiTXJubtxi6lwSryZvuCtTGMr5pH81KMWgAGxpFeZkvMkfAIyE5BJFshc9AAAAAElFTkSuQmCC',
    order: 680,
    base_experience: 61,
  },
  {
    id: 581,
    name: 'swanna',
    weight: 242,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png',
    chain: [
      {
        species_name: 'ducklett',
      },
      {
        species_name: 'swanna',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPklEQVQ4T2NkIBMwkqmPAafG0NBQZm1tbUZJyWeMz59L/W1oaPiHbAk2jYyrVoUyhYWt/ous8P///4yMjIz/YWLoGkF8sGRPdbE8IyeTGQsLi/yNhx/mTp8+/X1DQwMTzGZkjTBNTA0lmW1MPPzFCtLCLAJ8nAx37z/fWljR6oNVI1wwJk1yp8rrx4IsP5nPMqh955aQ4nz29NW5ivoeY6gzwRbAbfy/34GF0fHAn0s9Pu1MXz5V/GD4z8DPx86w7JkGw5OP35Nnz547Ly0tjXXWrFm/QQbANa4KDWUOW736784i/aQzV755qmmIG7MxMStOvye20cJIO6ShoeEPVD04DHBGx6o0JbmwWSLMDAyn7iM7EVeogsUbGhiYGhoY4PGGHCh4NcI0X70ayrh69WqQAfD4I6iRUFIkO60CAJ70dA9NpbStAAAAAElFTkSuQmCC',
    order: 681,
    base_experience: 166,
  },
  {
    id: 582,
    name: 'vanillite',
    weight: 57,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png',
    chain: [
      {
        species_name: 'vanillite',
      },
      {
        species_name: 'vanillish',
      },
      {
        species_name: 'vanilluxe',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACX0lEQVQ4T22SS2gTURSGz51HMjNp09I01IT6Ii5sLdVFVShYgwsfOzcZ3PhCrdCCKzdV0Cu4EdSFUTBWaikiZWYtWKy0ixStRGKE1mpjpJamDU1MYh9JZnLnyiRNaMWzufdw/p9zz7kfgk1BKSAACqoqM87pfWi5tZWWyqoKsqqSzVpUSSilCCFUFv4nKMbMHYwBAxhmuWo0Ey+AcPzcXpvk6mwRRL7dKlgOIp4niwvJJ30Ph8KmBmNgMAYDKYqPlWWVDD24fgUx6C5nEYhNZF0OqQhZTQBCKES/hGH1d+bFjzmjZ3B8PI8xZqod/X0XJp2NdYd0TgKGalQvIoKkekgnlumvqRDr2eFkUpm1d7cG3p4AAIIURWFlWSZ+3BtoanJ0a/l1TRR5i100oNGWgz+JnxCZShMd1bKZNT0z8mFyz8eZlRQKBbr5jqvP9NHA+d5dO5sfa7m0LnI5nmEoGITAXPQb5FZWdYZv4EMx6r/5fOLaGPZySPH5WHPV/fhku9XR9kkSbRwh1LDQdWY+RWD263e6vYaA255BhXzoyKVHxaDiA7ZqVHvOdHocMBrTi2LSMAy2mEf77fV0eWmh+Gq+YEHAfX75Othhzmf+RnU5N84eix51WD3B8CwccEuQ5UXgGl3g0bIwkdQhlV4ZvDcSuVh5Ycl4+dTh5ppafmAmntXeBBPDT09vW1yqabgfL+i7rbHEWJ3ACAlCI/1Jehui0cKWjv/C0tXV1uLWDWH4/XQYwC0BxNc3gCnRtYWcEj1e4Ma8YCBcRquKZHmuKpKbjZV7qWiitXFWxFs4/gtkIwonAzMGLwAAAABJRU5ErkJggg==',
    order: 682,
    base_experience: 61,
  },
  {
    id: 583,
    name: 'vanillish',
    weight: 410,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png',
    chain: [
      {
        species_name: 'vanillite',
      },
      {
        species_name: 'vanillish',
      },
      {
        species_name: 'vanilluxe',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWUlEQVQ4T2NkIBMwkqmPAZtGxv/7GZgZHBj+MTIy/MNlMLpGEP8/THEDAwNTAwN2zXCN/xkYGBnBmhqYXm5vyPj6msHz4l63hsCFu86uCg1lDlu9+i+y7XCN+/c3sDg6NvxZOqPO389ReQMPz0+G47ckp1o5+ubs37+fxdHR8Q9Wjf///2dkZGQEOVPw2LEFi9+9emVx7uT7wLr29sOrVq1iDgsLw24jyDSYn2bF+80RMJW3lQo3MLERTf4MtQnF/winNjiwODYc+DNhQpBdvPb3g+8YpRgePrvx++aVo5WZa1zmMNzb8xERDgyI6Fi1ioE5LIzhb2MGg7uVEUPety8MCm8/Mlx9/Ebs1cdvfzr75r973NDAwNTQAAllzHhsaGBiaGj4x8Dgx8vAsAnmTJhaeFRhTTn//zMwMjIy/P//n4GpsRFsCyhg4Jqw2wgNCWT/YEs9ZKdVANcMfw+/o91iAAAAAElFTkSuQmCC',
    order: 683,
    base_experience: 138,
  },
  {
    id: 584,
    name: 'vanilluxe',
    weight: 575,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png',
    chain: [
      {
        species_name: 'vanillite',
      },
      {
        species_name: 'vanillish',
      },
      {
        species_name: 'vanilluxe',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABxUlEQVQ4T2NkwAJWhYYyh67W/s/I0PAPmzxIjBFd4j8DAyMjA8N/kDgyG10dikaYwjV+fnoff739mbzj6E1cmuEa/4eGMjOuXv33oGNQFOv79wt+vPv66jgzo3H1/ZMvGxgYmBoYGFCcjdDo4MDCeODAn4MOyjWaTAzN78S/MWw4/dyj4g7DzgYHBpaGAwx/kJ0L0wii/zM0/Gc6wZp7RZCFTZOdg5Ph6E/+luiystr9DQ0sjg0NWDUy/F/FwMwYxvB3X7VnmZL0z86/rP8Zbnxhb/Qu3NHwf78DC6PjAewaV61iYA4LY/i7OYch6r8Kw1w+dlaOp/cZL0R3VRkzYIkWsFNhnt8UaizHw/y4/+gTM1Vh0c9asnw37t9eKOFQxHDx6f4GBxbHBoStYI2IILfkvLn8wtHPXy0NP7/79Z+X58r3Txzsx17vVr745x73zOiTu283NDQwNTQ0/IPY2MDA1NDA8E9KTU1kSeXnl4yM3/dycjBLvPvIpvvpE8P1r++Yn1+48D9+8vanT2Bq0VKOMWuU+xubZTu5j7po/FC3tPpt3Dzv8QJsyQ4jyWFThC31YGiEhu6/hgZwOgZ54S8kGFABAKGJug+3Vha/AAAAAElFTkSuQmCC',
    order: 684,
    base_experience: 241,
  },
  {
    id: 585,
    name: 'deerling',
    weight: 195,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png',
    chain: [
      {
        species_name: 'deerling',
      },
      {
        species_name: 'sawsbuck',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACjElEQVQ4T2P8//8/IyMj438GBgaG//sZWBgcGP4yMjKA+Iwgof//GRihfIaG2gVxBwUlefYXuU8DSTJEtK5M0nn55kbNpOxjIH5DAwNTQwPDPxj9fyYD6wKWqZMe3uSRv8T0N2ddR9I9sMamsC5rLiOpXkvFY0cWhk+rnMXA8Hv//v0sjo6Of0DyD9cwzHr1w0975SHPvd8leO9ObYpZCNbI0LZCrfDTZ/8IrTV+gmw7v6pFMHgwMDDkMDAwHGRgYLh8bxXD+Ucfna7vvuz75/W//92zphRdBmv0qZmvqvL2d4iV5h1DPZEutX/vGPIWfp+X/PnL52/NMvmtLzgZrp14VrT30EO1s295fiza0lnwiDE0dBXz6tVhfxkYbCV7850rpOSfm2oIbX175V3Ey8cvX1q6yC7e8+6PlfjZxwHvq1//qWFYVPUWpAdsI1zzKgZm11VTHHxt3po46op0cHHwMhy884Qh6fiJGIYZm040NDQ8bqiv/83AyPgf4kcIYGJgYPjHwMDg6BYT2hPg52f06/vPH79+/WQ/vGMT49FNJ/fqRRv4HFhw4AcoqpA1guONg4unztLE0snFy1mfiYVRgF9Y4tey2ZOm37rznE1VVbH86NGjn9E1gq3V0zNRv3TpzN2s6sZwPrZPtV/evXw/ZcJiKwZGRlZLS0vm48ePfwepQ7YRxgenoserGDyu3WNo5uJi4BDhZ6jUjGfYgpyK0DUy7N/vwOLoeODPrumZ29jYvln8ZWRjZvj/e6Vz8oK0/fsbWBwdG8CJAqeNVYkda5k4GSU5GBjFf7Jw7GuelJe6atUq5rAwUNRhakSEccMSGYY3z1kZbj5mUVaWZb87o/QKAwMoFiAZAgAdWAl3edpI/AAAAABJRU5ErkJggg==',
    order: 685,
    base_experience: 67,
  },
  {
    id: 586,
    name: 'sawsbuck',
    weight: 925,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png',
    chain: [
      {
        species_name: 'deerling',
      },
      {
        species_name: 'sawsbuck',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABTElEQVQ4T2NkIBMwkqmPAZdGsHhDQwNjQ0PDP2yGE2MjSM1/dM0oGh0cHFgOHDjwp4GBgWW1p+faq4yM0xm2bdvBEBrKzLB6NchmuAFYbeQN9O9b9vdf4ZN3749lHjli/Z+BgYmRgQHFySgabW1ttQ4fPnyNwdqxq5WVufTTu7d3Oy+dVwE508HBgePAgQM/YE4GaQT7QUtLi0dGSuLuq+8MTwM0/u93NRPMnrjx3rtHX8SPsfz5qPXl24+dFy5cKAwNDWVevXr1XxQbgzzsTddd5mVZF31Fw0Gbdd7WM3/KYidLnTE3/JT17OPXzsf37p1hYGBgYmBg+IfVj34iDLwGVhJFr978nz7j2MtXSCEKD2EUjSBn3Lt3j+ns2bO/YYrTjI1Zb/Hy/j9w4AAocOABhDMB7G9gYHZoYAD5BSMOQYYSkwCwpkqyNQIAl7x5D7telAkAAAAASUVORK5CYII=',
    order: 686,
    base_experience: 166,
  },
  {
    id: 587,
    name: 'emolga',
    weight: 50,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png',
    chain: [
      {
        species_name: 'emolga',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACnUlEQVQ4T3WTbUhTURjHn3PvdqcppeXEFoZZSxIM83XqXdyx1BL1Sy3qiwWZmVQDI0oqdqFPWZG0CpVKKrCX0ZfWC1PnZssNHKtEMSKzRjkIt6m1+TLvvSfuaCCRDzwcznPO7/wfeP4HwQrBsizBsiwGADH/DQL9n8MIAEWB/IYGqaezcyk7W0clJflrMOYnXK4372NgbMV/lQQASAOoDQM8/y0+oFJpahGCDoSEIYpCexEASwCw4kXQsSxlYtlIeXNr1ZaNqS+FYbOt1/3ZNDG69iHGtnBJieYrQhCSyaAgqlRRUZEQCETiPR67X9wbWhqfqIpz9sdNmuApdxgSxsyWqx3PdtO09qYgcPedzgF3FFSpmPNSmYxyDFgMRy61HSuMC7VnBi8sTTmB2HDoLB4OJ0v0J1t15eq8qlkBdw0NWh1I7B0A7kilZJLD0ZdobL9+Kkv668oHhzeSuUNJTZK8oP/IEQVuq1FGkGMRCdnjfmudQDRNJ/M8ZSBJMvHnpM9btJNWKEsLG6kFP6D4ZH79jIv0jvb5DA/q03epB8rDHP7ictnHl41DRzbppuJvm+zcvlLlwdN1invTkMHlp36SPLYt+PRGRX61dpEOzHF3MUb6KEjT2q08j48C4Bd5m9C3W939Xsvl3GFt7vT28EIIum1p3uNtihaNmqubi4BKIhFqo61ynJQFgCYAPLKKInr6x0nnCfV8ycUD0nMp8s38a5dvsfrMK01NZWV6MBRZGhy0maOKZWVajSBw9QDEeEZKovGReSrrWrNCWcNs6wrOzoPTPQLNN3pzAGA05jQRFBMXF+9ZTRCCxOWyBMXDOm3RusCMr/6754fggzVWP8y+YxhGIpfLsclk4pdbLmZmxDAMabfbuZU+gFj/A38FGK/vayoKAAAAAElFTkSuQmCC',
    order: 687,
    base_experience: 150,
  },
  {
    id: 588,
    name: 'karrablast',
    weight: 59,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png',
    chain: [
      {
        species_name: 'karrablast',
      },
      {
        species_name: 'escavalier',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABhUlEQVQ4T2NkIBMwkqmPAafG0NBQZpChq7W1/4MNb2j4h2wJNo2MIJWMDAwQDTgAskZGhoYGEAabrJ86oUbyx5M7O97IrTcxV1I90+BzBZuNIAPgNvj4uCfyyhjOY/z3h+H9X66bH2WtDh9r8EgNDV3FvHp12F+QASAXMTIwMP63LZgp+YOF1/Z0T9R299wJ79lZ2Zh5Pt/6xcjMxnb3zkOtE3tWXofYCFHPCAqE1atX/3X0DjVmNE86+OfX9wtcnJyWAv8+//3BJsL66/aRPdvm/HO3bLVz/HPn/K3T84sfM/z/zwj3YwMDA9OW5oM+oi/PFBtLstkx/Pr+c/FTnnlqhvaJzD8/c/z89ObA/tv3/BmW5n1C0QjiMDCCA5SjKK2xivUDw+POVfWzHRu2hjF+fCEk3J88bzUDw6+GhgamhoaGfyjRYTzzDOvZdJPfsNBbteo/c1gYIzgwoHHJBAt1rPGYlpbG4vLe5V/Y6rC/Dg37WUCaDjQ4ggyAhzz1kxyhNAwA8C+YDf/CD9gAAAAASUVORK5CYII=',
    order: 688,
    base_experience: 63,
  },
  {
    id: 589,
    name: 'escavalier',
    weight: 330,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png',
    chain: [
      {
        species_name: 'karrablast',
      },
      {
        species_name: 'escavalier',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACN0lEQVQ4T2NkwAIaGhqYGkDiDQ3/GBgYGBkYGP6jKwMJooKGBiaoBobQ0FXMq1eH/cWmGVXj//+MDIyM/5WN/FTuanl/ZViS/twgoEDgwoYJH0JDQ5lXr14NMgQM4BrBzmto+GfYsFxK7CfTeaYP9//8/PRyEcf35+Hbdl2zYPhy6ZWDQwPLgQMNf1A0OjQ0sBxoaPjjGFcVpSQrsvTzqwcMb9iUGDh+fWZg/nz/FBufePzaWe03YBbAbQxddZVtdZj2L+/SmaHfP7xb9eHjuz+SAjwMX5Vc/3I/O8P+/dKqifsOHCmAORmssaHhP1NDA+M/jymnvdi+vV3A/fK8KDMb+78fDy4wvRIw+ccqo8/Eemr6C04+Af31i2e8YmhoYGIMXfWfeXUY41+/qWejWTnZZ63dd9Q2V+1lvYGzn9+ZfQd+vLh+jfW3aQrzj/cvbu5p8tNjYGD4BQobRgZoSHr1HrvPws3zeFP9Tk8HP4abNhYy0p9fvmC4/ZSR4Z+G/V8WNm7m55dOVJ2dGtcOciEjzM1W7rFlvDrOnV+ZuVoZ/n6r/vL4yhGWL6/v/RfVjOJT1WcUEFdhfn9q/e4Ds8vcwBqRI9fUM6LpN6+SJgvTvxdv//+fc39l50WjwLw+djm9Qrbv777+OVaWfPQKw0pQyMJCFWuyCl21ipkhLIzhRmCuzaOjk598fMVwF2YRcsphbGhoAOF/4DhlYPgHS3qw1IKcejDTKmaiZgwNXcW0Wvvaf2SDAG7BAqVtrFBDAAAAAElFTkSuQmCC',
    order: 689,
    base_experience: 173,
  },
  {
    id: 590,
    name: 'foongus',
    weight: 10,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png',
    chain: [
      {
        species_name: 'foongus',
      },
      {
        species_name: 'amoonguss',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABtklEQVQ4T2NkIBMwkqmPAUPjKoZQ5tBVDAyrGVYxhIUx/GNgYPzPwMDAyBC6iolhddg/BgYGEB9VYwMDA1MDA0gxAjQ4NLA0HGj4gxD5zwgyDG7jfwYGRkYGhv97tBm0fhqnNe9QTXw7uVYij4FB8QdIk0b0Bt0vb+49fbKz6B3IQrjG/Q0NLI4NDX82aZmtlPCxDpvOavt/fiu71BQvb77T8gc2n2MTvXp5onYUAwPDDwaG/xCNDQ0NTA0NDf/WT/Sq/MrId/vM3BfeKnJsEUz3ni/iYuB02GhSOGm9gv18hkapbwwN/5kYGhj/MTI0NDAxNDT8Y2DYKz9jwqsHlnKbP396/XKHrLRwKMOf/wybVn4/kLd8iyPYjw37WRgaHMH+BXkL7FnjyJkiZ/8oFJdJ7DqrwvVS4e3rN8n+AXwcUuIcCoWrwj/OfyWeyrDYZDXCRrBREM2wkGvIKvVg+cmk9+rd90v+/m+Ct151dOp7pNrLsNJhGkPoKmaG1WF/keOR0ThtJssZqed/GcFOxwYQFmBNOatWgUxdzXBNW/t/fX0DyDv/GBsZGEGBAjOOekmO2LQLAELnoBDiaWOFAAAAAElFTkSuQmCC',
    order: 690,
    base_experience: 59,
  },
  {
    id: 591,
    name: 'amoonguss',
    weight: 105,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png',
    chain: [
      {
        species_name: 'foongus',
      },
      {
        species_name: 'amoonguss',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACcUlEQVQ4T22SD0iTQRjGn/v2N5ZTDMmMREYElWJoaJGZoklCZjgmgo5M0CQyLKUoqE5iaCIUU7OmGWQQTaEkkRKpRAoKN/vUspma2jBL0zR1zm1+cTNtkS/ccfdyD8+9v/clAAgAAYAoJxycwQQHpZSjlLIcWyvBAVhavgiEidwRmtteMAC5etb6Kg1N+SMsl5lPfX5OzW14LGRH7lRMZCwuzNYpJfZGkyFp3i0UAEIyXz8tUo0kBC202Pu+DJzT1bXp7+uS8lQBm/TvZyJROqHGullrU9f14KMAXKuOiK5qSPMfUqfvNWPs8+SFbL2ppNmQlRgXZmk2ms8savvjpBFz3eVvK6NPMzMCjUaE+noXUhKiU/YdfhYmnZa/+z58o+Gq72X+QWksURQ8OmLWcWSy3+rTUxXV+bxyGBqjiMRQKn5JqRP0bFaNwvfOto4uR4eXWOK/G7YQPw76Dq2z+kfQxwOOnpq2u2oDAwMQtrnDTfb8/vjk9vbWqeLauGsRwX57ukc3Y8gq52UW3fHkcnRS+kJMaaxzRbAMmAECBD1tVnLzt/iNfj5BMzapXalaLxsf2/rhZKF3PKD9Cko5ULq0CsdoNIpSU1Nd1WVlBy1v+IvTSlvMdokNVbKIxU/eudLQIb6Cv5eQBypwoOSvkLn+aby7ybKUWrN9wTp+Rd6ypVeS/sSoCKnN4aMG2YD881WPCQGrpa9vNDCmvyj/m8vL95LJlOHJ4n+hRhChnriQ2XromNjRGPBroLf44ald7GF4zm2JyXDC7baG4zJqVXxJoGRHYoXF6RzEzfBCAIzkykyvJWR4BQJCPIfbs4rV82/nLf0RQYgV6wAAAABJRU5ErkJggg==',
    order: 691,
    base_experience: 162,
  },
  {
    id: 592,
    name: 'frillish',
    weight: 330,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png',
    chain: [
      {
        species_name: 'frillish',
      },
      {
        species_name: 'jellicent',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABRElEQVQ4T2NkIBMwkqmPAavGhoYGpob6hv8MjQ0Q+YaGf+gWYGr8/5+RgZHxP4pCLGIoGsE2NTT8syoKi2Hh5D7IKcz09dPTD2LHe9feYPjPwMjAyAA3EEWjcVoa69lZs36bZQZmfP/y2ZRLgOcTMxvb+mO9qw4xNDQwITsZWSOI/d/BwYHngNCbqQx8PHEMr1+3MWy9Wx0aGsq8evVqkD8xbZw5cyZrenr67/oJbc0yCrI1V25d/64kp8CZPzs/n2Hv90lQp4K8DtYMthHmt62hpRLHuV+cuyfELsnBysbw4sunX5KvX3xTENDaVjtrUjQ0wMAugzkVzFkV2sB24MEBrWmnDygyMDB8YWBgkMl2dz/FzMylMunl+m0MZxl+w0KbegkAHBCvV0MMFGX4H8oQyqD9+jVjw4EDf5Djlno2Ept2AbXpeA8UTaMHAAAAAElFTkSuQmCC',
    order: 692,
    base_experience: 67,
  },
  {
    id: 593,
    name: 'jellicent',
    weight: 1350,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png',
    chain: [
      {
        species_name: 'frillish',
      },
      {
        species_name: 'jellicent',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAClUlEQVQ4T12Se0hTURzHf+feu2l7JNq85QJnGTbUsMQiMCwRxILAgmtBUiHZldDKQgJ7eBaCVPYAexkZJhWxC6IiZKZrZv0RmkFpOLFym4/Nkcs9WHO7u7WrxfL8d34/Pt/fj3M+CJYdjDGBMQ4tlZEgAIAOIx0ARNQBRXIYA4ExhICBFcCJHV9kXwBACCActQjq9XrS6ewhWPZBILtEpTwXyw5YpP6p8rr6vIb6s1p6FjUiN3+p6N7NPgFjAmEc+m9iOKSxplwLP/iRfs+080lze1rxPk3t8V2nj30wjT+tvHun+DXGVC7GQYSZEwpfzvrseJeDiJKt2VZRWak7c113XkaStZMzU461dEKcYXioM8HsOtVqMJiXthTEie2l+HH0dvqwKUDoT14p6y48UHIrXZWssDnssCUzA7i3XYPGBq4YAEwMw5Acx/Ei2F197f43jZp9Nvq1l3R0rvLE0pvzSGXQATzZZPsYzF2dKmG86pmkhxPaPfDCFYZFMPX2xbRCi/XCsOU7oYqn9/8iQsTeJA0x5vgJg+552EhSwQx5EjUvlVWX19TUCYIQfl2A7oLqo+7kQFmnZHxUIkFHsvj4oFamoV6FPoPV7eXT4mjy5bS1LZ9O3WGbMVfdeNTaLIJ9OZc3fUm0N1ll1tg5OnlDliJxIcXtREb5AuqyzcJB1UrS43W7BD56ZGDSe6jtefMEwoAJDIum6HYWVAlb06+GlFKgwQpmaSa8m/NBviIACsENb4b6Wzo63pfi8HeIAjAMWcRxPOyuiCqTf2oJ+v0KXzCmL0bmWYcoZT5QFGmy27kej92SIlfNjvUOcf8EWOZopGlRSxd/ZHG5OUgQrQZgWZZSq9X8X7HFYKORAKORhz++/gZKDhii6kZDzQAAAABJRU5ErkJggg==',
    order: 693,
    base_experience: 168,
  },
  {
    id: 594,
    name: 'alomomola',
    weight: 316,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png',
    chain: [
      {
        species_name: 'alomomola',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABcElEQVQ4T2NkIBMw4tDH2MDQAML/cJmLodHBwYHlwIEDfyAaGpgYGBr+MzAwgDAKwGrjTAYG1m+sxrqFv8+eg6oGqUPRjKKxQcGBo8FaV2TCiWvNTCxMznk8/3VD2QR/rT6++jsuG8EmJjgkcNxh+nxOg41f89PvP79eM/1+y8vJ6bdp07wzoaGhzKtXr/4LMwBu46rQUOaw1av/RtsEL1WUk4n6xMPOcOLS9YdfPj0PlJXVtNq5c/FUZFvhGh0cGlgOHGj4Y2EVNtXZxTyLnZ3p/5T2hU8NrdRfcnELqaxfP12IgYEBFMpg1yH7ESxgaWkp9Podw+k7zz8ouVgYMXBy8Xz58PZJ2eHDW6c3NDQwNTRAogglcGD+0JdUnS4jKR/FzMH1RuLv/6OzTm6O+///PyMjIyM8ZNGjA2xrqIqtqPaXX6KPXpx8LMfAwNnw//9rBkawUpwaYa7AiHCiEgDICw0Q/B9kAiOxKYeYdA8AqpuDDzTXqY4AAAAASUVORK5CYII=',
    order: 694,
    base_experience: 165,
  },
  {
    id: 595,
    name: 'joltik',
    weight: 6,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png',
    chain: [
      {
        species_name: 'joltik',
      },
      {
        species_name: 'galvantula',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACDUlEQVQ4T3VSTWsTURQ97820A2mt1EIjwUgMYwzZqPgRBBcttIuoVBTGZiVYBZXuanD9wFU2/gAVBakozsKAGiFaFy4kfoUiYq3WEtsxIQnalKZpZjIfMsEJST8evMW79557zrv3EGw8ZF3I2qQGbUUWQAjQVihB4mTIxnpwE8jAKAMzEREFvJsTsMejw59TIWMDyG7SAEqSxMmybLh3hcITK92Mc/Her10wgzXu9nW3cB+FbxoUZa2VlTDGKGPMPHLyrP/i9J+Xlq/P36HpcH0uo+rm8bqzmkurldPzi18+tsomjsRxBAM7TxyczfcIwIcfqkJ1PqDzhOc4mtErT1OrxQmUlDkAFIDZkOoMZd/ImbFepXgnrREiGlr9mOjjXKpB66k3o3dRetwilTQZY77whd97PbHZWuWTqpSssNdzXt/mUnsLy8J3sz7zwrKuXV1cms9300IiO122Ge1rXfLuH13t5FV6/FCVGEa8/HfpQP+OPhQXFnLPViqegRpFYE19eyv7fhCA1ibVlhIZORcnujacTCaGo9GxuGqo/ifygxuh3aGwr249TOZnfjGAOntssF4B+uuHBx5lt3dlpqaex+xGQ4OnJmkHv5xKJcbttw1iznCcT0dEUQjWerw3lcxPwhgBY+blo0OTGgV/L/0q6uy7aYDNvNiIWRYBsV0Ic0vLOQlHypbN/if+Afbb2JJyWZ6tAAAAAElFTkSuQmCC',
    order: 695,
    base_experience: 64,
  },
  {
    id: 596,
    name: 'galvantula',
    weight: 143,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png',
    chain: [
      {
        species_name: 'joltik',
      },
      {
        species_name: 'galvantula',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABv0lEQVQ4T2NkIBMw4tPX0NDAVF9f/5+RkfE/ujoUjVCFDI2NjQxaWlqMYWFhf0Ea/v8H6UXVDNeITfLOnRdinz8//2VoaPgBZGhDQ8M/mM1gjf///2dmZGT8e+3aJS9ubq68qozoMFVJPp64ionXfv79t1FTUyceajBYOYgAaQRhMGfr0lmnlGVlTA9evLCBjYP9rTYvb/LL95+erGNnM5qflPcaahtYPeP//wyMjIxgjawb5k24/uPjR+XfvLxvOXi4mYW//xT48fnLqyfKmu42ssqRWnp6Fcg2MqxatYoZFBDtTRUZgkKC05XlpRg+vP/E8Jfh37ePX75lLc8qX1m+YdmNa3fv2RYX1zwG+RceODDNjRW5kQqK8rN5ebi5791/NL+kpj1p5YKJJYICfN2HT1wwa+6YeHrVqlBmuMbQ0FDm1atXg4JfYlJ3/TVjQx3BI8dOzxDg4/2qrqZc/Or12+1nj16O7Jw16yM4oJAiFhZIbHUVecu4ObmU7tx7eFtDTf4bPx//+5TcymKQ/2DRgi3lwEIaHmewRNDY2MgIi0u8SQ4UVfsbGphfa2n9h6UilASAJb3CDMRIozC1AOt9wjuxWosYAAAAAElFTkSuQmCC',
    order: 696,
    base_experience: 165,
  },
  {
    id: 597,
    name: 'ferroseed',
    weight: 188,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png',
    chain: [
      {
        species_name: 'ferroseed',
      },
      {
        species_name: 'ferrothorn',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACGElEQVQ4T2NkIBMwIuv7//8/44EDjcwODvX/GRgYQJixsbHxvz0DA5NjQ8MfZLVwjf8ZGBgZIYqJAmCNIJsYGRn/t2UHChu5hCab27lLPL53b4qihkbiy6cP7c8d2jE7LK1kMYaN+/c3sDg6NvzZsHhKlSgne6uSmQuDkITMh28f3ghcOraT4dfv3wzvP3wzCUvNP7tq1SrmsLCwv2AbYRrXL5paLPHkac9LKZkf1p5BHMcP7vjDcuI4I5OWBtPlX98MSrOqL61aFcocFrYaorGhgYGpoYHhX0NOhJS0jNIlPmERYT5O9r8fvn75L8TIwvLrP9NK3/TCCJhtID0wPzIxMjL+27Fjh9DfL29PvX/5WJmbh+fPp++/maTFxZhevHgZFJNZtP7////MjIyMf8Ea////D9Z04sQJGX19/RNPbl7lun3nNru2qRXXt08f/n1/+/KXmr4xx7e///PFREQmwdQz/v+/n4WR0fHP5XOnkzi4eHPZOTh+vHv+wOLu7Wu/WRiYWUXFJF5Ia+rv+f7xg42GnoEaAwPDb3AsQJ3734GBgceiMNMiK7+8/tDO9fdvXLsYq6Co+c1YX/+goaNHQUdJpmpFz/StMPWwBACiYZHPysDA8M/Pz8/7z7dv97ft2XMZW4pATnKMq1atYgLFEXoyBIVhY2MDY0NDwz+YHEpaRUpFDA4ODsyioqL/V69ejWIQTCMA9x7qDVFbieQAAAAASUVORK5CYII=',
    order: 697,
    base_experience: 61,
  },
  {
    id: 598,
    name: 'ferrothorn',
    weight: 1100,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png',
    chain: [
      {
        species_name: 'ferroseed',
      },
      {
        species_name: 'ferrothorn',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABMklEQVQ4T2NkIBMw4tEHk/uPTQ1WjatWrWIOCwv7C9Jw5swZVhMTk9/omvHZyPaf4f9vRgZG4mwMDQ1lXrVqFV94XHTRzY8P/y/omH7uw8m3OxwTHX/8//+fkZERYhDcxoaGBqaGhoZ/DAwM/Ndv3Lj+4v5jsZMrDzNbRji8f8j4RDbOPe4rkhqERpAp/xv+MzE2MP6b3dhfK8Cv2CT8hZnh6N0rJ2rnV1pC/QiyCNVGkEQDQwNTAwPYVr7Oyv5jHs5m2icvnulKK84v379/P4ujo+MfWCChBA6SU8SnTZ/yUE1d8+P/v/9MXV1dH/3//5+JkZERZCgYoIcq2CkJCQkcL1++jtq+fetxBgaG68jRg0sjRlxj04TNRrjGhoYGFgYGhn/QkMYwEF8CwJuKydYIAOtgew/d+qe7AAAAAElFTkSuQmCC',
    order: 698,
    base_experience: 171,
  },
  {
    id: 599,
    name: 'klink',
    weight: 210,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png',
    chain: [
      {
        species_name: 'klink',
      },
      {
        species_name: 'klang',
      },
      {
        species_name: 'klinklang',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABhUlEQVQ4T4VSP0gCcRR+P5VoCodriBKcHT0Q5AjOsciLII5oyikSisBZvJvLpchscDihlENqsEBahCanDBPPQWhUDhvCCAf1xV134p8z3/je9733ve89AtNBAAAt8mMpDTQMRCSEEEREmyiK4PF4SK1WI7FYTGs00GomeIxoJGdONBtrOJ2IiHZCSL/RaDCqqia73e57tarc+/2+r3q97mVZ1lUul+Mcx30IgmATBGGgE2VZtvM83y8UCuuKorw4nU7IZNM9fnd/0Gy1FmiaBkVR/JFIpGRiTamj8p62N/hN14obYBHh6voMESEHAPyUVGM3m2YALEFUPBFXt3zsYeWzmQqF9n6CwZ3nfP7hEQAcANAb7jhhijseP4/StPcgm7m9TN6kcuFw+C2RSHwbnujOjrlaLBYdgUCgJ0nSBUUtH0tS+kiWs0krtyfP8ScXYA0AShRFce12+3VU4n931GsMw5x2Op27SqWijkqcRzQnm+tMvaDV5+hNjUNrBMu/nUmc9+S/aB2gD4RAbGoAAAAASUVORK5CYII=',
    order: 699,
    base_experience: 60,
  },
  {
    id: 600,
    name: 'klang',
    weight: 510,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png',
    chain: [
      {
        species_name: 'klink',
      },
      {
        species_name: 'klang',
      },
      {
        species_name: 'klinklang',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACE0lEQVQ4T2NkQABGBgaG/1AuMwMDw18om4mBgeEflA1XA2KAAFjA2NiY6+/fv2wXLlz40NfXx/npzifmhmkNX+zs7FS5ubkfbd++/SdMLVhjaGgo8+rVq/9aW1uHffv2bbKnt/ckLlYOjz8Mf0VZmJmPLVy40FlaWjr7wIEDWxgYGMAugNkI5piamqYyMjFOkhAS4/jNzsAgwM7N8PfXX4a7j+//YvzHmHvm3JlZKBobGhqYGhoa/tlZ23l9+PJuraqKDrO3ttN/Vm6Of2tPbPz85PF9YU5O7uTDhw8vQLcR7EcrKysxNkbmSa/kxJo7zP1y33//whpfmV3q5uK6+O37dxVnz569jK4RHEL///9nYmRk/CfPwCDZsHjhnbdv3/wqKSiWY2Bg+NzQ0MDR0NDwAxYJMD+CNDEyMjL+37dxd9ehc0clWViYfR8/fsIpKSG+OyIsqldDR2P/qlWrmMPCwsDRBNcIi79Nk1clnHp6SV5eWb72+o3rzzXl1Q4r8St8co73SIUZjqER5tSJEydOl5CQyNi8eTPDkiVLAhgYGDbOTJvJmj4r/TeGU2ERC5IoLy8/ISUlZX7s2DGGp0+fzj5y5EgaAwMDcmpCcSosaUlNmjTpjry8POeaNWsYXr16dXvnzp36DAwM35ENR/YjLNmxXrx4EZRSlOTk5N79/fv3+LFjxx4ipWl4GkUXI4oPAAdH1A9E3mHhAAAAAElFTkSuQmCC',
    order: 700,
    base_experience: 154,
  },
  {
    id: 601,
    name: 'klinklang',
    weight: 810,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png',
    chain: [
      {
        species_name: 'klink',
      },
      {
        species_name: 'klang',
      },
      {
        species_name: 'klinklang',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA8UlEQVQ4T2NkIBMwkqmPAZ9GmNx/bIZj1bhq1SrmsLCwvyANoatCmVeHrQazkQGGxob/DUwNjA3/kBU1NDQwNTSgiqFohNk059Rau9//v004c+c4A8/7JwUTczYdQrcZobGhgYkBZGoKg3hrQNcNX00TgddvrjEcuX7mQz2bqgZDVPVLBpgaBgZE4MBN7AzUrFLUvWbJKMDwT0SA4fi3ZwwdD85qMWSvv45sK4pTYf4LWpBXJs7N2/n/52+GJ/++lW+Jm9KF7k/c0dHup8LAzs7AULT6DtHRgRyy2EIZZBBOG0H+ASnAFod4NRJKimSnVQAvYm0PM/qtWwAAAABJRU5ErkJggg==',
    order: 701,
    base_experience: 234,
  },
  {
    id: 602,
    name: 'tynamo',
    weight: 3,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png',
    chain: [
      {
        species_name: 'tynamo',
      },
      {
        species_name: 'eelektrik',
      },
      {
        species_name: 'eelektross',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABmElEQVQ4T2NkIBMw4tIXumoV82vRa4wHHBv+MjAw/EdXh6nxPwNjQ2MDY0NDwz8kxSB1KJpRNP7//5+RkZERrCBsTWkwEwOT0IqQzjmEbfzPwMjAyPDfdFlOlp+EwlRWVmaG1Xevl5xNmNWbdiaNdZbJrN8wV8BtbPj/n6mBkfFf8qa6PitFtUKmV59+f/r/i/Xgp2fvfr54Y7o1a9690FWhzKvDVoP8zADWCBPwnp2iyS4sdM2XQZRBRkz0H4eo4J9j7x6ybbp3Y9HR6GnxDvsbWA44NvzB0Og3N92EWYj/uMkvjv9SrJzMn5j//bnN/oft8afPhzaG9dg3/G9gamCEBBrEqf//MzIwMv6Pbojm+2Yg80iJn59f8uN/huN/3zNwiwsyfL73vGh93JR+DBshmiEB47Eg3VmAnSeNlZ3N/RvDny9Mf/5cWB3WH8jAwPAbpgZhIyyooJrB3E4/Keubbz8fnXf0M7LBGKEKEwA5R/S11v/VYWHg0AN7A+QjRjwJADlZNTQ0MDXUN4DcgJHcMJ1KQoIHANtCpw+aZ+0kAAAAAElFTkSuQmCC',
    order: 702,
    base_experience: 55,
  },
  {
    id: 603,
    name: 'eelektrik',
    weight: 220,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png',
    chain: [
      {
        species_name: 'tynamo',
      },
      {
        species_name: 'eelektrik',
      },
      {
        species_name: 'eelektross',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACC0lEQVQ4T2NkIBMwousLXbWKmYFhNcPqsNV/wXINDUwODAxMBxoa/iCrBWlkdNjfwHzAsQGk8D9MEmTA62vXGNE0MIJVMDL8R7eRJWZ5aSMnC8vx2aHtW8CGNPsqeijKGai+Y9o2OW/yT5jBjJ6TUmRYOFijN6dN7wQJNm3puMnMxqg2/eH1jd9//flSpqLn+ezHN66J/g1CDAwM3x16IkUOlCx/w2jsa8wlE25znff9999LWmf5RffUGnjqay8VZGNl+PP/P8P55/cYnj55GTM7tnep5pyMPnVGlvcbkqc0M3q2xxn+kRHYn/aGkf/B59efT6hIPc4yctASFeT9xc7KxrDj+nm2/FunZlY/ZVQQY2B03yzHfY77zecEcOD4TM+w5/n1v1iT/Z8Zo7Ss2L93P/7Ivf7J8ktOiOEhB8NvPs7frFxvPzF8efWL4SDv3wn8idPL0QOHMWBJ4S59cQkXC06J7xfePma7y/WXmePl5523fn1dt4uH4zVDWP96UFiANYauCmXWFtVmbHBs+MPXFawaK6t20lJXU/DKi2cMF9++Or19Qp89w3GG7+AQ/Q+KCUaIRkTchbKtDlv9S3NClB0/P28X09efE47lLFgBkveclMv+/Z3wX1i8Ykk5oczwVAM1saGhgamhoeEfesrBSK0ghSDBq1pXGVeHrv4HSinoijBsJDbNAwAT1cnUf+p6QQAAAABJRU5ErkJggg==',
    order: 703,
    base_experience: 142,
  },
  {
    id: 604,
    name: 'eelektross',
    weight: 805,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png',
    chain: [
      {
        species_name: 'tynamo',
      },
      {
        species_name: 'eelektrik',
      },
      {
        species_name: 'eelektross',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABOElEQVQ4T2NkIBMwkqmPAafGhv//mRoYGP4zMDL+x2Y4Vo3/QcoZGaAa/jMyMGBqRtX4/z8j2IaE/xwxPhc63l45XLe9Ie8TA0wcyWoUjQ3797M0ODr+WX3ihL+guvGGE6euza5x109b9f8/cxgj419kJ6No/P+/gYmRseHf/u2mCTe/p0zf+VJh2fpM93QGBoY/DQ0NTA0NDf9gmlE0hq5axbw6LOyv/aTDkepKQlOU5YR/vn/+6kiHu17Y////GRmRAgpN43/m1WGMf32nH1/KL6kYpSzFzPD12eO1PQFGIVCNIAvBgYaqMTSUefXq1X+rG4JNGNllp7D8fvKpoW6NDwMDwy+8ToW5f9UqBmal9wzsPxUYeKzdGV4RHY/EpCacKQeUCBobGRgbGhjgIYkzOoixCaYGAOTGdg++oEqPAAAAAElFTkSuQmCC',
    order: 704,
    base_experience: 232,
  },
  {
    id: 605,
    name: 'elgyem',
    weight: 90,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png',
    chain: [
      {
        species_name: 'elgyem',
      },
      {
        species_name: 'beheeyem',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB7ElEQVQ4T2NkQAMNDQ1MWvX1jNcaG/83NDT8Q5eH8RmRJf7//8/IyMj4H5diZHG4RpBNIBsmzdtkryDGbXPnzOHpRQ0N7xgYGEBqMAyDa/z/fz8LI6Pjn3Wbt+/18vRwunnj9kl9HTUHBgaGH9g0gzU2NDAwNTQw/FuzxlaPjU0k4OPvLEMOTvbHoV52eSD5////MzMyMv7F6lSQ4OzZkeKpqctfHj99zpPx/x8TCzOzZltbT9HDh7e/Rvc33Kn79+9ncXR0/PPk2eum33/+1L5//+G4ppoC/+/fv+Vfvn5dq6qs3P///38mRkZGcEiDNSKFJtudB8/uKstLynz59oPh/ecfDLLiAgx///5lmDtlinx6QcGjVatWMYeFhf1FChyIaev3nV6rqqoexPzv129Oxl+MkhKizN+/fX2z9+DxlGB/z00Y8djQsJ+locHxT3nXwtZfXIJVP/4yfEl30eDWUlNmvP/4OcPpM+dqYsL8Whsa/jM1NDD+Q0oA/xkZGBj/L9u4R/zGhdNWl67dShSVVvnn5mS69OWbD4I5CWHzGBgY/jD8/8/IwMgIUowAsETAwMAgbGPhlPL1zZ835+8cmoukBJ4YUDRC4hSSgmCKQaENYjs6OoLiEZ6CMDRCNTCGhoYyaWtr40zoAN9o0Q+5ATtnAAAAAElFTkSuQmCC',
    order: 705,
    base_experience: 67,
  },
  {
    id: 606,
    name: 'beheeyem',
    weight: 345,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png',
    chain: [
      {
        species_name: 'elgyem',
      },
      {
        species_name: 'beheeyem',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABB0lEQVQ4T2NkIBMwkqmPAafG////MzEwMPxnZAQr+Y9uAfVs/P//PzMjI+Pfm7efZ/38+UlZT0e9+P9/kMWMKLai2Lhq1SrmsLCwv0uXbpX383O6z8PDwbhk/jrj2KTgczADYU5G0QiT3HP6yQp9DbFwJiYmhrt3n20y05PzB/mZkZHxH1aNq1b9Zw4LY/y79cC1Lkkh3lIWNhaGt58+dTiaqVeu+v+fOYyR8S9WjQ3//zM1gExNnCc629fwwacv3xiKsyYoMHxZ/bqh4T9TQwMOG8HhDg2IzjXnTMoPX2FmmBh3koEBHG24AwfmDGyhSHQ8gvy7mmE1w+qwMLi/kDVTLwEQm3YB6KxrDxKGOhIAAAAASUVORK5CYII=',
    order: 706,
    base_experience: 170,
  },
  {
    id: 607,
    name: 'litwick',
    weight: 31,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png',
    chain: [
      {
        species_name: 'litwick',
      },
      {
        species_name: 'lampent',
      },
      {
        species_name: 'chandelure',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABmElEQVQ4T2NkwAP+///PuHr1aqawsLC/6MoYcekDaWJkZPyPSx6rxv///zMxMjL+Y2BgYD52+p7xrq2LzjQ0NID4cIChcdWqVcwwp7158+no+48f/qsqy9lAdYDUg12BorGh4T9TQwPYJoar999M1FIQznvy5PVcWVmxlP///zMzMjLC/QrX2NDQwARyTsH69wLWol8nyotwxL39/oNBTZzr+Y4oIbXsAwxfYGpQbFy16j9zWBjj3+qJe63igy2P/vz29e+Xz98Y2Pl4mBceuOw2MdVhd8P+/SwNjo5/UDSGhq5iXr067G9ozFSVwHCnK4oyAuwSwuz/3n9lYmqZv91/XVfkpoaG/SwNDWgaQabAoiB20vkpGrJS2Q8fPGYQ/f9hrdwNl7j0WQzfkKMINXD2/2dpcGT8s/PiG/NHvwRO7Dx1qnRNtlUPsqGw+EDV+P8/UwMj47/axSf1f/xmndGdZGTNwMDwD+YNvPEIkvT0zGV/yiHMf2l9wyuGhgYmBrTIx4hHjOT1/z8jA45khzOtIscZtvQKAKFatg8Gq1SrAAAAAElFTkSuQmCC',
    order: 707,
    base_experience: 55,
  },
  {
    id: 608,
    name: 'lampent',
    weight: 130,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png',
    chain: [
      {
        species_name: 'litwick',
      },
      {
        species_name: 'lampent',
      },
      {
        species_name: 'chandelure',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACCklEQVQ4T2NkwAL+///P2NjIwNjQwPgPmzxIjBFdAqSJkZHxP0z8////TGCFjKiGoGhsaGhgamhoANty+MxdORtjpWeMjIx/QPyZZ86wppuY/IYZCNe4f/9/FkdHiKKHD98e/Pb92w9NDVn3I8dvpnBzMFw0NFQ/DdUE0vMfrLHh/3+mBqhT7j56M11JVjjj1au3S8XFW0q/fut+du/h08m6QSeWTcrku5aX5/UJ7HKYpkl7Xtmq8v+JERXmTPv95zeDvAD7R1aW/19EBPml1+y79WzZ8fvbXm1fVXT06LzPIAsZZ848w5qebvK7e/GZomB3494fr578+PL3H7uOjhzjp7efGQR4ORkeP399W1VJSg3i1AYmBoaGf4ywAFFjKJQuXhp9ycdeTYiB6R/DP2bWv9xMf/99+fSd+SsT65+FR+9HdMQYr4e5EOLHhv0sDQ2OfxQqjkX6KYosY2f4/YOP5R+Hn6kow9//rAynb71guPTySeTUHPcVq1b9Zw4LY/wL1QiJhr5Vx4TefPqdKiKiXL73ztdfPF9ef2Vn/Pfs7ZVTBVtXl5xtaPjPBEsU8OhADtkFux9+3XL2Zf3jV2+OnLzy8B7DrsxXoav+M68OY/yLEY9IKYgxa/LBqsu3Xs46PDnsNbJXkFMZRpJDlgwNXcW8enUYKCXBkyA+Gxkg6RWcQjE0wDQCAASJ9BCiHjxEAAAAAElFTkSuQmCC',
    order: 708,
    base_experience: 130,
  },
  {
    id: 609,
    name: 'chandelure',
    weight: 343,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png',
    chain: [
      {
        species_name: 'litwick',
      },
      {
        species_name: 'lampent',
      },
      {
        species_name: 'chandelure',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgUlEQVQ4T2NkIBMwYtPX0MDAVF/P8J+RkeE/LnMxNP5vaGBibGj4B9Lwf1UoM2PY6r/YNKNoXLUqlDksbPXfzX0MZq+f2ykmdR9a2cDQwNTA0ACyGcV2FI3//zMwgpx3d0H2nh8sr03e3BM8xCTwtdY2b8lFmKEw2+Ea9+/fz+Lo6Phnz7KeeH0DnQWvzt9meHZvZ5q+jefy9SUXf6afnfUb2clwjQ0NDUwNDQ3/1u+dqSz+j2HF98vvXpwrqswzzi4pL/39KffsrFm//zMwMDJCnYzi1KtXV7Fpa4f9OjOrulGBW7qWQ46D8cb3b2tM3HJC////z8zIyAgPKBSN+/c3sDg6Nvw5fXBOkogQ39znT19//fjjzz7PgHy/////MzIyMsIDCEVjaGgo8+rVq/9GelhZ6pvqll05d+0y49//4ou2N2czMjr+YWBgAKkHa8aaABgYGLgYGBjkbHR1Xx65fPkLAwMDSsDg00gwIeKykbGhgQGEYX7CSHq4NBK0EQDuaJUP+VLOeQAAAABJRU5ErkJggg==',
    order: 709,
    base_experience: 234,
  },
  {
    id: 610,
    name: 'axew',
    weight: 180,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png',
    chain: [
      {
        species_name: 'axew',
      },
      {
        species_name: 'fraxure',
      },
      {
        species_name: 'haxorus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB6ElEQVQ4T2NkwA4YGRgY/kOlkNlw1SBBEABL+koZc9lrSluX7N20m4GBgVeagYHtKQPDW5g8sh0oGkMdtHi0f0ss/czxtfLXR6byOx+eT99+58GJUAYG5tUMDH9xamRgYGBt9HDof/fuhyIvO+drFuf/GQ0NB37gs5Hhf0MDE2NDw792T5fNn/9/9plz82Tzq/sMdQ0NDEwNDQz/0IMCxakMDAx83WX2hwVZWPVWte2x3sXAcGx/gwPLQYYD/xoawIEFCzBwoDD8/8/AyMgIFuTfvTB8x50bLy1OHHzYu/DY/RI0m+AhDNYIc05fsqWQrZ/a6UsXnipdPvOUQYlX/tzXfz8/X3l57/et/R/STzN8vNfAwMDUwMDwD+ZUhlWrQpnDwlb/zY0ydNGU49/96P57BikhTgaGfywM156+vT5jy3VTBgaGr7CAgmtECjkOdUb+tfYuorJP3v1e9f/fL2ceRuYrq889yUUOKGSNcO9UJZpXPn3xjomXg0P496f/J83cZU2/fPozM79l922YZgwbCwIMBIRlOMuk5fkZbt1+x9Ex69T87gr7SIY/vyeU9hx79Z+BgZGRgeE/ho3GDAysZxkYmG2V+K0//2M8e+HBhw8MDAyCDAwM75ETAlanIkcBkr9QEjsABdnDD9GbFYoAAAAASUVORK5CYII=',
    order: 710,
    base_experience: 64,
  },
  {
    id: 611,
    name: 'fraxure',
    weight: 360,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png',
    chain: [
      {
        species_name: 'axew',
      },
      {
        species_name: 'fraxure',
      },
      {
        species_name: 'haxorus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABjElEQVQ4T2NkIBMwoutrYGBgamAIZVy1ioHh2rXV/xsaGP5hMxtdI4j/H1nh//8MjIyMcDG4PLJGJgYGhn8WxsbmJ86eFSlIdHWVEGLZWdG7fXtamjHr+/dK/1avXv0XZihco4ODA8uBAwf+KEixr/MKKwyM99Fk+Psg3tMqhWEHTDFMDYgP0whzAvOxo4dPqKtrmFw+f/iZg2u/LwPD4XPOZgzCnxnMJv748ePCpUuXehoaGpjAGletWsUcFhb2d/7SqQY6MhqnmR5fZ/wjycvAzSfF/OGaa7VNiUm4p7GA3r37z/1v3ry6KTQ0lBlF45LJpdY6qgpHOMV0GWR1bBk4Xy9h+PY4loE7yPKqlsDHSdeuXZuF4cf///8zMjIy/j/SxTBNznlBLItcwPOn5+ezsX8sXK8XylAI1YAZqv8ZGBgZoVEhzcAg/JSBgZOBgeEjAwPDZ5Am5IBBDhywgdA4AzNhTgKLNTYwMjQ0oCQEjJQDCumGBlBoNzAwNDSASKJSDtEpF5uNRGkGAFUhjZPhi5rkAAAAAElFTkSuQmCC',
    order: 711,
    base_experience: 144,
  },
  {
    id: 612,
    name: 'haxorus',
    weight: 1055,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png',
    chain: [
      {
        species_name: 'axew',
      },
      {
        species_name: 'fraxure',
      },
      {
        species_name: 'haxorus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABOUlEQVQ4T2NkIBMw4tb3n5GhgYGRoYHxHzY1ODT+Z2RgYPyPzzGYGkP/MzOsZvzrkH4i5Dcjr/ePp0eyz25O/8bAgGoYhsaGhv0sDQ2Of6QT3sxnZ/zFf2++VBAD1DBkF6BobGhoYGloaPhTlj8h57el5+SXF1+cX9YuZ8XAoPgDt42hq5gZVof9ZdCZoBdnxnaahymLlZ1/LWP/Xd08hg1qkx0c/rMcOMD4B2Yrko2rmBkYwv4yMEzTm9L957SDbh7bpfutDFE9P2cy3G3KcHBoYDlwoAGbRgaG/fsZWBwdGf7M6XRp0VM7VH3svNLvgiZlBwaGrcdCQ0OZV69e/ReLjWAhkAtA0cDGwGAqzsDAwcvAcPgasfEI04xsOEac4ko5jKGhDEwMDKEMyM7DGR2kJFs8aRW/MQB4GGcPbkBYowAAAABJRU5ErkJggg==',
    order: 712,
    base_experience: 243,
  },
  {
    id: 613,
    name: 'cubchoo',
    weight: 85,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png',
    chain: [
      {
        species_name: 'cubchoo',
      },
      {
        species_name: 'beartic',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACTElEQVQ4T2NkQAOrGEKZrzFo/29gaPgHkwKJhTGs/ouslBGZ85+hgYkRquFQaKjo/+/fBey3bLkNUoMsB+LDNcIkLmjYqP35yNr1+/lP2+8MP/l+MfDcvKnxNz7/xpGzyDaDNcI16TtJ/33Pfp1HVIL3ubMywy92ln+ipx8yPTp077G/7l0dhpN3Pv1nYGBkZGD4D9a438GBxfHAgT9HVR0S3n5mrtmnKdxmlBrUICkrJfv38fMPfHkrBa6JfEtIubFjIUwt1EaIKbOd/cSfnNvE3tjS8G4Gs/RZfj5+tUdvX6/mW7L988eTW/oqGBiuNjAwMDUwMPyD+3FmWhpr+qxZv0EuqKxp2q8qyuTAIyz5XUBUjvPZ29etX79/v35j377Nk5cu/QQKG7DGhoYGloaGhj87dqyV/PePZ8vzZ490ZFnTmb6y9LIcf/ifQVmMj4H5F0NfSlZK8apVq5jDwsL+MjYwNDBB44xj1cpV+1VUVS1Onz77Q0dNjKN71dUruTIsgh+EBKSDM1PFGRgYXjU0NDA1NDRAnFrPwCsirmxW9iXGWVpSRTGMk4ub5f7DVx+FXrxapfb3R/Dl3rW5WQxXl8FCFB6PhTKWnP18H/8yXLv2SyWzyKLg689WsXdvubj1tJivPXvdXLpg8ub/DAxMjAwM8NQEshGE/4NMWdXQwBbW0PBrBwOD0F8b357z9uZzalprjl1taGDTbmj4hTPJQQOK6QEDAxtDQwPHAgaGD/sbGlgcGxr+oKdplLSKkeBDQ5nDVqMmbpgaAHYY9hBaZ01xAAAAAElFTkSuQmCC',
    order: 713,
    base_experience: 61,
  },
  {
    id: 614,
    name: 'beartic',
    weight: 2600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png',
    chain: [
      {
        species_name: 'cubchoo',
      },
      {
        species_name: 'beartic',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABGElEQVQ4T2NkIBMwkqmPAafGhoYGFnsGBgbHhoY/2AzHppHx////DIyMjP9BGv7//8/IyAhWBubDAIrG/wwMICVgBa0MDM7CDAwMGQwMe6G64HIgPrJGEBus6d7FI3OY/v5KfvfoCcPOyXOmVe49lA21GW4rXGNDQwNTQ0PDPwYGBqlrZ/ZeVlRREnr76gXDhrkLGXI6Z6gyMDDcCWVgYF7NwPAX3UaG/w0NTIwQzfqz2sqP/fr9/W7T4hXpr+5knWRgAIvj8OOqVcyMYWF/j+7d5KQtK7/3xuMH2y2c/b2gquFewbAR2cRrl4+4vnz24rGje8gNdP/h1QgzBJsmvBr379/P4uDg8I+RkRHFb1jjkZTkR3ZaBQD2gmgPbbWlbAAAAABJRU5ErkJggg==',
    order: 714,
    base_experience: 177,
  },
  {
    id: 615,
    name: 'cryogonal',
    weight: 1480,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png',
    chain: [
      {
        species_name: 'cryogonal',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACCUlEQVQ4T4VSTWgTQRj9ZjeYGglqa5NWkZ4tohRBpAjdoKgEFS+z4sFD8CAe1EtF0NBMvEioqKfQQ8nBg8KuF0VTNE2TBiU1YEtNc0pEIaXgT4s0m79NZkZ2yUqaBvwuwzy+N4/35iHoMpxzFAwGxeFcjsuqygCAd66hTiCRSNg8Hk+zHVcwFmVVpe3YFqKiKKIsy/TZu8ldC/P54+xFtjz1LZ0xCJ3kf0ROuIAIYpn52ctr34uh3ujXIbfmgBLVl8uV6tWxVCjLsSIiVTaVTaKl9PZ5xNeztz+Sj6bg4GeNNtx26G84xCal66+KSyOPV94XCRCBAGEmkRAiEELYnVvXX7t2Oy5o1RJwp5PV6lVhB2JQKazDZmL1zPTPTzGMsaiqKt3i8cGAV55g0T1Pb074TroPn8jT383Y0tzDSPplGrIw0wrH4HCkYEWUVZkqePzaft0+/VFY9Y/e9nn32XeObtTKjYU3samjce2K3mcLe+NPAlZIyPIXngzNDLlc57K53IYX415RsOk6awqF+AfbQI8TViq/Fm/cu3/M+GOEECDL36OQ/1Ktrp+dS81mLp46HxkcPABaqQyLX5YLh44M99UqVf/4XRK2hEyPrVfa23EaACQA+GGEDgB1APjTtQCG8hiAIAUCFCG0rWL/rVxrQZQkCUEyCUkAo6vGWKd52dbVbqXvhv0FUdDvELTZJzcAAAAASUVORK5CYII=',
    order: 715,
    base_experience: 180,
  },
  {
    id: 616,
    name: 'shelmet',
    weight: 77,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png',
    chain: [
      {
        species_name: 'shelmet',
      },
      {
        species_name: 'accelgor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACDElEQVQ4T2NkwAH+///PCJJiZGT8j00JWBIdrFr1nzksjPEvSHzV///MYYwQNjLA0Lh//38WR0fGP5Pnb3bgYGc1SI3ymLB//34WR0fHPzg1Nvz/z9TAyPiv6PATNWdBrp1M//5LnTh+1Lkx3e/IqlWrmMPCwuA2o9j4//9/JkZGxn9168/tkNc1dH/z7R/D909v7zTYiKlCbAP5G+JnFI0Nq66yNYRp/0qZsqmVVUiqioOLk+EjI8P6ef7aQaGr/jOvDmP8B9KNoRHmh7UHb6X/Z2CcwcLGxvDi1uXYjHifJRAL/zMyQEMZZCMI/29gYGD5eeBJ5H9OXsPHpw98FWVhDmNiYxf58vdfB7+u+cdbb98e3+itfBkUTaAoYmxoaGBqaGj4N3X+Kon/Etr7X/9nkWR++2zxO0llf2ZOHsbf9y6t5hcSj+ZlZ+X/8/SBY1W8y3FQQIH9CDMFxF60ZHvlP1nVtr23H3wUEBbjNxbh+yH67n7F3Uunt7CqG//IDHN+ClYPdntDAxNDQ8M/hYJ2BRcV7TXvfv88vK4wtCu5fWEnI7+AlzAHx/fOkl4rhne7Hjc0NLA0NDT8gYUq2J9+ZZ28m7rKfzEwMPyEBhRInI/BK1U8ysr857KalIewKEGODrBmsAP272e5Ou31/9WrERGOLVTRUhJILzxhMzI0NEAMr6//D4sKEBcAl5TWDmAVLvQAAAAASUVORK5CYII=',
    order: 716,
    base_experience: 61,
  },
  {
    id: 617,
    name: 'accelgor',
    weight: 253,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png',
    chain: [
      {
        species_name: 'shelmet',
      },
      {
        species_name: 'accelgor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACXklEQVQ4T52SXUiTYRTHz3nf7fVjOoeuLcxW67u1SvIiS2lORMIbQ9j6UmSYgVl3EdFNjwXRXVeGJUlmRb2S1IXohblVFhURaDWlMqbO5ecUHU63vZ54X1SUbqLn6rk4v3P+5/z/CP/58C+OCJkHeGbHGAAgc9Pyf03pGjCPuVUeZpcBuPu40y0FA01V50sb7nwi9dkskBBxcZleAR0i8c1OlMAhCq7SQ9crd6Vd6h0NDjR97b/qOWdrlAFGxLElWAEZYxxjTOmW8tzXdsyYflQfnYt+kVA9q9XCQX9vW9FE95nCipMBIuLkyUhEiIhEANwjT3/bu0RT4XzAv/BTSBAsocnFOqNZumZIEPIXfntyM9PtS1IRRVHknU6ndOPWs5ySspIuikFkNgKqcCTKJQk8+IKh2MZULURngpRjPb4NoGNQVoirZbZ09Lmt+3fmjY3MgCZRIE1yPKh4QOABWls/PLhwOruciHhElJQdLQ4mXCm2GToDoXyTWp09MBE5pU3RaPdt0aMUk4an/UN1cxeLG3I7PusKCg54ZUYB299+d2n0GQ21kwhPBodaqoITe30h3J6qBlAJkTeNGsNDu8l42aUO6eJ7Xlqc1a4RBawVxaT0dbsrYvEpNwNjU/f7dKYjv953qzIyM3fExYVn0iaHp9CatSmXwsBNj90uyN5cvXJVucGL+npjcWXlaPXTnqJXni5/8gZzmX7r+m/3tD/aP/LmE4uR8OupedVoufPwsDJRtgQAZH+kf4muYuHqwqULE5PzWlMDDosF9zgcBDUANhtw4+PN5PV6SQ7LHxecBp9bpikVAAAAAElFTkSuQmCC',
    order: 717,
    base_experience: 173,
  },
  {
    id: 618,
    name: 'stunfisk',
    weight: 110,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png',
    chain: [
      {
        species_name: 'stunfisk',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABxElEQVQ4T2NkwAL+MzAwMjIw/EeTYmRAEgNxUACypuer19f/+fHTQDY2IoSBgeHvf4b/jIwMjGAD0TXCTb23eNlURR7+rGcvXv322bdK+vzq7a//NzQwMTY0/MPQuCo0lDls9eq/p1u7dRT+s1wWfvWF4d7n94dV5vfZQZ0FNxjFxjNpaawms2b9Pm3oEaFjb7X8Hy8nw7Xbt/xNV8zeBJOD+QtF4/9Vq5gZw8L+3l+8boaClHD6t88fGR4+fDRVKz8nB6eNME3H5m/QNdWSv3j29gVG4Q+/GDi+/ma4cP2+pu+C3hswr6D48f/+/SyMjo5/Lk2bGaqrqrzq4fePvwV+MbI+ffziy+TCVbozGA48wKqxoaGBqQESYsL35y26rqAoL/r/63eGm3cefooqSNc7z8DwEEkNanTsb2hgcWxo+LM1qSRMSVRiJRMrK8PVBw+Sgpb0z8cbOEgm8tzPrL4nwcQu+uDD2x2aSyd64o0OkCQskB7MWzBNloktk+k/M8PuFw/d3SrLdsFchC3lMPz//5+RkZHxv1tJCXezka6eyF+W2nt37re5NtYcWbVqFXNYWNhfrBrBtkI1Iydi5HQKEgcAgZHcD7YjFs0AAAAASUVORK5CYII=',
    order: 718,
    base_experience: 165,
  },
  {
    id: 619,
    name: 'mienfoo',
    weight: 200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png',
    chain: [
      {
        species_name: 'mienfoo',
      },
      {
        species_name: 'mienshao',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNUlEQVQ4T2NkIBMwkqmPAavG//8ZGA80OjA71B/4x8jI8A+b4Rga/zcwMDE2IBSDDGFkZPiPrhlF46pVDMxhYQx/GRj+My7u07f58ffnk9TSm/exaYZrRLKJ/fYRjW0yUoJOz178+3zszC/b2LzzF1etCmUOC1v9F2YzTCOIBjtn83z3pcZG4lFMTF+//Pr2gufksZsNoYVvGvfvd2BxdDzwB0Xj/gYGFscGhj/bZzLESyklLODi42b49VuAgZP1LsOzeyt+nTiqq18y5fINhFcYIKG6atUq5rCwsL+TmlKTeLneuRnpb3r+5ashz9cvn/7++qEZ5JPCZcTAsPRJQ0MDU0NDAziUiYjHBcoMDAl38YYqTPL//1BmuF8YEQGCrBmbjfCAAilEdh4hjUSlQiL8iN0cAFCEeA9sFi97AAAAAElFTkSuQmCC',
    order: 719,
    base_experience: 70,
  },
  {
    id: 620,
    name: 'mienshao',
    weight: 355,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png',
    chain: [
      {
        species_name: 'mienfoo',
      },
      {
        species_name: 'mienshao',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB7UlEQVQ4T2NkwAn+MzIwMP7HJc2IWyMDQ0NDA1NDQ8M/hoYGJgYQjQSwalwVGsp8TfQAZ8O011/+/1/FzMgY9hfdAhSN+xsaWBwbGv4w6FYoMXyXm8tw52YZA8PE0xqOXcEsvz4+vHK09QzMdrjG//8bmBgZYc7pMd255PcpVdmH7x49/bord55NBMP/b+WX9xZ2OTg0sBw40PAHrHF/gwOLY8OBP8+Oh2tu33+gkJvT2lBDScrk6w+e/z9//2FM7P35j5GJyerB2YknGUJDmRlWr/7L2NDAwNTQwADyOOOFTa4nvv3VMNNVZ2N48uQhw+NnfxjYOf4x3H3Evj+pbLUT1J8gy0BBDgJ63EeXXNr9+buw2q2nTrx8fOJs6w/+/RJo9+ZCgMsXxXt3r/C+//B4knMSQy0skMAaa1LUFTVUme9Ym3IxXbnNtuLFa/afpoZczAbeW1vfnLK8fu/RJ4YLVzlfnrvzWG/G4pevQK5EcmqQxaymcwZpdQ9mnF6rXfbj538P26hrTjXpbotvPJV8sGaLZg8DQ8VHFBv//2dgZGRkgKeSKDs+1befP3HtPM9wES3+wP4DicGjIzQ0lDlL+zXjQYYD/6CBxQByUj1IETjwQpkZGFbDEwLWlAPSADIVZgC2ZIk3reJLxwAevssRRjUhvAAAAABJRU5ErkJggg==',
    order: 720,
    base_experience: 179,
  },
  {
    id: 621,
    name: 'druddigon',
    weight: 1390,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png',
    chain: [
      {
        species_name: 'druddigon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABD0lEQVQ4T2NkIBMwkqmPAZdGxtDQUKbX2q8ZDzQc+MvAwPAf3QJsGkFi6AoxxLDbqMDAwRCmJ8/A8E+boevKOqhtKJpRNDo0NLAcaGj441Ie5q4hqbpWkJuf+8m9h/nz26dOWrVqFXNYWBjI2WCAovH///9MjIyM/2YvnbeQjZM57svnrwzXXty7M7W8R4uBgeE3VD3YG8gaYU5ha+5pOyciJKT97esXhqv3b72Y1zdLjYGB4TNDAwMTQwPDPwwbHRocWA40HPgjl2SR6i1kOouZiZnh5cvnNasXrmwNXRXKvDpsNXanwoO8gYFJ/piGxUP2BxwMm3/swxbXtEkAIJtWr14N8hNRCYCoVEi2UwHdQ1kPNac/+wAAAABJRU5ErkJggg==',
    order: 721,
    base_experience: 170,
  },
  {
    id: 622,
    name: 'golett',
    weight: 920,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png',
    chain: [
      {
        species_name: 'golett',
      },
      {
        species_name: 'golurk',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACE0lEQVQ4T2NkYGBgZGBg+L+KoY9zqdBuxY3vtt9mYGD4XV5ebcP4i9Hv08d3m6bNm3aEAQ0wrlq1ijksLOxvSl/JPDNZg8QLZ8+vntbRGxbZl7POXN0k8NjuQ8vlfgp1CMqI17389GbVpM7OVQ0NDUwg28BAqNMt2eyvRO3/pz8n7Jy6cgLDJAZRhvOidQzzXy+KbEgP1TcxKj157Pih9W0L7EHqQRrBTgXrTpMpZdCUWc1QeOIBiGtZ4Wf4nPOn3IP6nRsZghhaGd4zLGPYz3AVpAdi438GRgZGhv8uE2Ll9vx8HMTw88BehjqGywxp/G5ikuZcQjzcLxmfflO5PmHnYpgL4U4FubuhoeFfRl5e7Gfef9Gckhwvnl9/KLeV895uBu7vJ0OvaR9cvXr1X5gLwRphmlp7ely5ubnW8vJw8LILCTJ8/vSF4dGdu0+5PrMV1HZVrQldtYp5dVgYSDPYfwywkE1OzqwzsTFp/PLj7l9eLonf/36//istb89988rljWWFhQH///9nZmRkRGhkYGBgYmBg+MfAwMAf6B8yX1lL019GXpLpw+c3DH+/MTJcu3Q5be3aVbNDQ1cxr16NZCPUw/DQDfUNtWfl4gn58PjrgXffH308cf7EHowEgJ4g/v//z8DIyAiJHjwAHqpIahgbGhoYr169yqitrQ2i/69evRrkDRTDsGkkZBlYnmyNABzL1JK1uuq1AAAAAElFTkSuQmCC',
    order: 722,
    base_experience: 61,
  },
  {
    id: 623,
    name: 'golurk',
    weight: 3300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png',
    chain: [
      {
        species_name: 'golett',
      },
      {
        species_name: 'golurk',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWUlEQVQ4T2NkIBMwkqmPAavG////MzEwMPxnZGT8j8tgDI3GxsasZ8+e/Q3S0NDQwNbQ0PALm2a4xv3797M4Ojr+2bjjmMffH5/zv/368/fMqVN9E3oa96WlzWSdNSsdbBgMwDSCaJCzmJas3r780/9fYdyMLAyf371dlpMeFw1SHLpqFfPqsLC/GBr////PAPLT8rU72x68eFEpKSL0n/k/46t///6uePDw/uH6yoK1M2fOZE1Ph9gMd+qqVauYw8LC/q7delT+z/cvzlw8vCHPXj72ZGPjYPj47t3JguxEVwYGhs9QPf9RAgcUmoyMjP9AJm7deqDo5fevva8/fmGQYGPbHh8bGMXAwPABq0aQBpjN7dOWCqpISWYyMvznvXfv7o6yorSDWJ2KHuT//4OiERGPDQ0NTA0NDWDXoPgRW1ytWvWfWVT0AKODg8Nf9MRA3SRHTPoFAF+mkg+B6Qm9AAAAAElFTkSuQmCC',
    order: 723,
    base_experience: 169,
  },
  {
    id: 624,
    name: 'pawniard',
    weight: 102,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png',
    chain: [
      {
        species_name: 'pawniard',
      },
      {
        species_name: 'bisharp',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB5klEQVQ4T2NkIBMwIuv7//8/0+rVDGCxa9ca/2tpaTGGhYX9Y2Bg+I9uPlxjQ8N/poYGRpAiDAAysLGxkaGhoQEuD9a4atUq5rCwsL/L1u2y//35iwAbD8//Y3u3sTAwM4dMntybx8DA8AZqGkg92HYQg/H///8MjIyM/9dvPrCUmZM16s3L118/vHz6TFRUVPXixfMrRETEeK9cuTpxyZI5uxsaGphANjPCGEvWbpP5+e3H1tOP7+vZqGn8ffvsBfP7Ny9/Kaupsf35/YshMTEqioGBYbmxcRrr2bOzfoOdOnPmGdb0dJPfa7ceSvj05v18PiHBP5yCAszfv35lvHfpzF8ODvb/N29ev3Dy5JGE06dPXw0NDWWGBQ7M7bx1tR37rR2djLd9+vRH9t9/Fr43L/99/frpDwsr25/cnBR7BgaGM8gaGfbv38/i6Oj4p7KyMsg/MGLt/VfvGZj+Mfx4du86x5fPnxiu3rjmsmLpwr0gTatXr/6LFB0QT/d2TNJn5+Gcw/jvH5+YhJTavQf3rvDx8v4+ffpk2rx5M8/AAwctATCCQhck1tDQYsLFxVdbVpZXwcDAcB0k9v//f7g8SspBl8RlKCwesSUWcNyuXr2a6dq1a/8bGhpArkBJdhg2EpvmAYsj5hOHKVcYAAAAAElFTkSuQmCC',
    order: 724,
    base_experience: 68,
  },
  {
    id: 625,
    name: 'bisharp',
    weight: 700,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png',
    chain: [
      {
        species_name: 'pawniard',
      },
      {
        species_name: 'bisharp',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACMUlEQVQ4T4VSS2gTURS9bzJj0tBaQ0wJiaQFP6la17YK4oAI4noCblyoXZQsbRc1oU5qd42LqmAUQbSIMLGBgoifRaAr0SgEnKHVTSShTTMZMslMkzSd5MkLTEjwd1cP3j333HvOQdBVGGOEAAADQCQSQaIoong83uzuMd+k75/FcZyF4zgIBAI9AzpAjDF1dWrm4HIsWnwkCAPh4I0hj+eYI51Offov4+qbtbeG0fDlC8rPmlpw67rm5/lbF6en55zR6PxrAOiwIkEQLGQNYeXDZUVTE4pR3zds32/8+C6h/j4bdcDhBFneboVCM0cAIENWJ3ejtiAI4WeJhNOoMUmlpJwa8482K6pqKVfUFjLqVG4rl5/nw5MAQFjb1b4xmUzSLMsa92PPrzOYfuI5cbz5rbFL+ep1tCml9zxeL7O+LioLC7dHAEAnOFMc04WTD5ZiK2OnJ/yr4kZr3O1GG18+IpqmaqVSeW5x8U6U53mK5/kW4gTBEg8EmneXls+oxUrY7rDCuHPgUqG8s1fos+Gd7Wx11zCKn7+m352dYKOzs1MZAkbmhIdPX44MuTxxrVIerahqP1AINnMZOHzUvzY46LRgAFdRLoSCk1de8XyS7gnAvccvLnjdh4YZm9VnNBrnEABttdvfV/WqJJfy2aqub90MXsuaCWurZKrbZTYZygBA47dYIoR7GImnLpcLAZwHlkUGAaRSKUbTNCzLMpYkCRNhOnb8JazEYyAe/+n/F2HjB2LZb2JNAAAAAElFTkSuQmCC',
    order: 725,
    base_experience: 172,
  },
  {
    id: 626,
    name: 'bouffalant',
    weight: 946,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png',
    chain: [
      {
        species_name: 'bouffalant',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA7ElEQVQ4T2NkIBMwkqmPgeoaGf///w82lJGR8R82V2HYuGrVKubQ0NB/jIyM/0Ea9v//z3KwsfFfQ0MDigEoGkG2wDRsOPVUlpft3z9nA9mnIAOQ5cAugTnj////TCBnnTt2Mu6fqGihADer/H9Gxv+/fv9ff+PWg7ZgF9t7yJrhGkFODAsL+3tg9cqJoua2efxs3xh+/fzF8IOR58vTVx8jXE10t8LUoNiIHAC5bfNENZUV9bn52L7Ge1qfYmBg+IvTqfjis6GhgQlv4MA0N/z/z2R/4ADTaweH/6EMDPAQRjac6gmAYEok20YA2+hjDxwMIGUAAAAASUVORK5CYII=',
    order: 726,
    base_experience: 172,
  },
  {
    id: 627,
    name: 'rufflet',
    weight: 105,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png',
    chain: [
      {
        species_name: 'rufflet',
      },
      {
        species_name: 'braviary',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACBUlEQVQ4T2NkQAP///9nZGBYzcTAEPqPkZHxP7o8jM+ILAHShKwYnY+sFq4RpujmmZkiTP9/ddx9/GqyR1Dzxf0NDSyODQ1/0G2Ga9y/v4HF0bHhz7MLk9wk1ZV23jh1NUHTvnwhREMDEwNDwz/sNq5axcwYFvZXuqnSsozj3eE5x98dvvyHewfDw99LGS4tfcLQ0MDE0IDQDLZxVWgoc9jq1X+PpTraX3n4Z9Mfb0teRnY2xu2XHzBIMf98MmPSOWMGhruvGBgYmBgYGMA2gzXC/DGpKHuug6RYkoDmH4YzPzh/XLr25Pf7Vy95T555FHPixOmlDg4OLAcOHAD7F6yxoaGBqaGh4Z9vTrGGKw/rmtePLqry64tf0JUSe7d6312POfOvmjAw3DjLEBrKzLB69V+4RrCnQfEHjbe1c3Ks5eWlD87ffIN56rIHxQxvDvZBLGBgamhAciostM6cmclqYpL++/3t+bGbjz2YGxd/NP1y+j/DXwysrs8/fkr2WXH8GCw8UBLAqlWrmMPCwv4e2NRycNHO2+rnpy5sSwnxmKjD/ffPjz+/Y9yXHlj5PzSUmXH16r8oGmF+zQiwUPjIxJu2/NrPmww3nh9mYLj9goGB4dt/BgZGRgYGcDJE0QjxKgMjIyNEEjU5oopjaISFMgPDAVBAMDQwOPyrZ2gApXwUwwCzk+gPchW99AAAAABJRU5ErkJggg==',
    order: 727,
    base_experience: 70,
  },
  {
    id: 628,
    name: 'braviary',
    weight: 410,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png',
    chain: [
      {
        species_name: 'rufflet',
      },
      {
        species_name: 'braviary',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACj0lEQVQ4T2NkQAcNDUxgoYaGfxhyDAyMULH/MAaIz8TQ0IDQ8P8/I0NjIyPcAJCBSIaBNTYwMDA1MDCAbZAydZP9xsrC9OHYtocgflpaGut7qfeMqxtW/wLxfdPquTbPavwG0ghy2r8EBgaBBS7J8zlF2F15//37++rrv1MMj97mMlxeewPqPF6rhOz1zz98335/w7xextDQUObVq1f/ZUhrXtyv+CbGTOkBw7o7KgyvP/5jePv6yxf2v9971h34eL0zWyn+08tX81r7lm9iYGD4DXbqiYbaiHfMH5crqd1nOHme7ebSD4L7jGW4M+89/vEixUXsn62dsdTdew9OaFsWWILU///PwAjWuHPmtABV7r9tX+5e/X7kE59AVm/X8sycpKSDz/4IBmtzJZbG6n959uYnZ2XT8ucffrIL7d9/aBPjzLQ01vRZs34z9CzRYjh8tFeN+aPIrXXL/NZPy5yy+9zboGlzfu1kYGA/vKxf4Pvrj9+68huuZjEwnJsFjQ4l1YREzz2m1mZy2SmLjf7/z3918/SzJw3zz2zpTNV+uv3Uh/T3718zHD759O+2DRtUGRgY7oM1Tli0qTBJ+GrfrWevXpik9ks+vzxt2qf//JkWXcd/znXjZd9+7PUvVaX/bPzMb3+mF2saMTC0XwNr/P//P+es2vxKdgGxXwklNS0b52Tb/WfhPjh7052/LL8/MEf6OzBsv/z+m4aC1L9DV19rbp/T9YTx////jIyMjP/Rk5clA4Oub47lb0ExFQMBzs8v9t9WfuHv7ynr7e2yu6GhgQlmI+OBxkbm11pa/8PCwv7iMgyShBuYGhoa/iGnVRRLQQkDJKCt/ZpRS0v0/7Vr2v+1tLQYQQaDxAFI7iSfIqjz6AAAAABJRU5ErkJggg==',
    order: 728,
    base_experience: 179,
  },
  {
    id: 629,
    name: 'vullaby',
    weight: 90,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png',
    chain: [
      {
        species_name: 'vullaby',
      },
      {
        species_name: 'mandibuzz',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABTklEQVQ4T2NkIBMwYtPX0NDAdFVLi3F1WNhfXOZiaARpamho+AfSELoqlHl12GqsmlE0wjSldDbIsHNz8E/Nqbj6//9/RkZGxv/oNsM1ItnEs+DkjnPPXr5UrZo7I4hh4/H1oatWMaM7G6FxfwNLg2PDn4KpnUGyEhJr/zD8Y/jw/fvj9pgsdQYGhu/oNiPbyNLQ0PCncGq7B/tvxu0S8tIMn//+/lwbkgTS+BzZ7yBnI/sRxAb7pXJG50omPrawldu3t99ZvKuq4f9/pgZGRnCAwQBC4///jAyMjP+33d7GvnPf+eanz17FSUlKPeRkYWrpTCndTDBwGhqKtT6zfG74IaQsxc3DYf3rwZXd/nWzvRwZGP78Z2BgZIS6CjUeobaCTE9pLtP8/fUv18KO3rPYEgG2lMMYumoVE75Ugx44KAZDkt1VRqJSDinpHQBkOZIPTKW+MQAAAABJRU5ErkJggg==',
    order: 729,
    base_experience: 74,
  },
  {
    id: 630,
    name: 'mandibuzz',
    weight: 395,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png',
    chain: [
      {
        species_name: 'vullaby',
      },
      {
        species_name: 'mandibuzz',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB4ElEQVQ4T2NkwAL+MzAwHmhoYH599er/sNWr/2JTw4guCNLEyMDwHyb+//9/RkZGRjgfJo6i8f9/BkZGRob/haGWnH46OkEv3r27Ezlx7UlsmtE0NjAxMjb8O9aZNUdVUjR59Y7Dr0/ceaa56NSNtw0MDEwNDAz/MGyE2cbAwMC4qizmJjMLi+r7p88Z7j54btd+8NLhBgcHloYDB/5g0Qjxy//9DSxzV12++p+JRc1URYrh598/1eYlk9v2NzSwODY0YGpsaHBgaWg48GdudmC2uJTQlFefv/5T4Bdg+vbp+1Of9oUGDAwMbxoaGJgaGiDOhfsxNDSUeTUk6Dlts7VqjbnFigQ/s7Kvnb7b5RIDw95Vq0KZw8IQUQPWCIuCbgZxMaM2n7QfX/+++fz3fxEDEwPj5/cf9ljrqu/Uyura8L+hgYmxoQFhI0ygN05JTU7N+CznX/6NHNzsGlzMrAy/v/2cL8DHOaWhY6XI+qdP3zY0NDA1NDT8w0gAIBcYMzBIZmcFXlaWFBG+9PRl49Pfr08ofuI+nr56z0eo9/6jawTxwamkysvUgJ2Nw3LngcPbjn1geAiNBrg8NhvhkrA429/gwOLYgIhDlFBFT7Mgv9gzHGA62HDgH3KKgakDAEuWyQ9tF+BlAAAAAElFTkSuQmCC',
    order: 730,
    base_experience: 179,
  },
  {
    id: 631,
    name: 'heatmor',
    weight: 580,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png',
    chain: [
      {
        species_name: 'heatmor',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABJUlEQVQ4T2NkIBMwkqmPAYfG/4wNDgeYGw44/sFlMBaN/xkZGBj/gzT8//+fqbGxkaGhoeEfugEoGv8z/GdkZGD8X5Z7QubnS5bwiatMekEaGhoamNA1o2hsaNjP0tDg+EeOYZdzVq7lnh9M5+u1rO26w8IYvv///5+RkRHiEhBAtfH/fyZGRsZ/Rw9f6fzxRahMW0+S4c3bm7t09DTcoRrBPkDRiGzig/sP7oiLiyvfvXnu//07j+/6hkZoMTAw/EZWg2Lj/v37WRwdHf8snbu0SVFRpZaX6z/DjTs3jofGJFghuRDVRjQJtmXzlxQJCUlIPH3+eklyRuQZvH5ENxUWEOiaMAIHKa4Y9+/fz+zA4MCw+vXq/2FhYX/xxiMpyY/stAoAso56DyWZIHcAAAAASUVORK5CYII=',
    order: 731,
    base_experience: 169,
  },
  {
    id: 632,
    name: 'durant',
    weight: 330,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png',
    chain: [
      {
        species_name: 'durant',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABbklEQVQ4T2NkIBMw4tHHxMDA8A+XPDaNMLH/oaEMzKtXM/xlYGCAi8EMQtEYGhrKvHr16r////9n1NW2DL1y7cQqEJuRkfE/us3IGpGdliAuxdD78hlDMAMDwwFszoVpBGsy1rFSVtPWXCMpI2nw7w//fyaWV4zPH39acu7iztN8fKLCp0+froe5CqqxgYmBoQEUEJqTJk2rUFexiPn4UpJJSuPOtwM7HjcvXVkawsklufLcuTPdDg4OLAcOHPgDd6qDQwPLgQMNf0DO6u6Zt/v9a0YXEdlfy4py0nfb2NjJHDlyqAXqZJCe/yhO1dLSMnz24Lvsh2/3pZTVGFru3mLIsrBwOHXixIEHyJpAbBSNioqKLZycnEba2mZJvLyaX+fNK/8MUgT1F8gr8NCFaQRbLysrq8zBwRHx9u3bye/evfvEwMDADFWMkRCQowOsGRb0sNAjNuUwOTg4MB04cACUWjAiHdkQfGkVb/IHAAxVhw97OfHsAAAAAElFTkSuQmCC',
    order: 732,
    base_experience: 169,
  },
  {
    id: 633,
    name: 'deino',
    weight: 173,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png',
    chain: [
      {
        species_name: 'deino',
      },
      {
        species_name: 'zweilous',
      },
      {
        species_name: 'hydreigon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB8UlEQVQ4T2NkwAn+M0KkGP9jUwKVRJcCaYJpQGYj1GFobGBoYGpgaPgXbnNS7ff3n5/XnbV73sDwn6mBgfEfsvEYGtOMz7DOOmvyO8b5vCs7C5vH3J3axQ0N/5kaGhj+MzCAlYOdDtf4n+E/IyOSfzI8b9UyMTAlTduuosjAgOlcqEaERLDJMcO1Z6zOl0a+yP3//3/JGY4d6gcWJP5wcNjPceCA4x8GBgYQZmCEOIPxX4z9RdvvPz68EBYRaZ21VTtclqEqPijGZ/7EJS8Vo5xlmNj+sEkzsbCrzdurMTc0dBUz3Kmprtf2/2f/2b1/y8yY0gXumzkZ+SY8e/ZPjJX/WcL1pdY2P9kf7vv9+7PnysMBcSDL4BrtjWrnMrHdvbv/xDKjxYsbvMSEYzl/f/3w/xPzdcaGqLPPeTXPzz376sBJhqcMWxgYGMAamRgYGEBBLaClJTnn2jWOa5OnR//899u+hZedk+Htr2NLSnPLTujoa0f8+SyRfOPe3lswjSC/gjUrKpqLc7C+Crl+6/45I3PL2k+f2WXuXDuQpKluYvPn35dHt2/fWAdTixyPzAwMDH8ZGLTYfH05+TZvPismJ8nAKatk/fzx48ccjx49uofkOkQ8QlMFzNnYkifUYGgKxqIC5goYDUopIDZKkgMAx43Ca3MwOWcAAAAASUVORK5CYII=',
    order: 733,
    base_experience: 60,
  },
  {
    id: 634,
    name: 'zweilous',
    weight: 500,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png',
    chain: [
      {
        species_name: 'deino',
      },
      {
        species_name: 'zweilous',
      },
      {
        species_name: 'hydreigon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABV0lEQVQ4T2NkIBMw4tMXGhrKvHr16n8MDAz/0dVh1djQwMB04IAD04EDB/5ANYDUoWjG0AjS1NDAALKFwTvQKuLDhw+Xj+6/dpWhgYGJASoOkkPVCJM0Nmb1UGLOZWVg7X314n3AycPXNjo4OLAguQBFI8w5TJ5B5ke0VOUs7z9++uHkjoe6T989fYLsEhQbGxocWBoaDvyp7Q9O4mX5P1fipw7DxV+X9vRWbXD9//8/IyMj2HFwf8KdGroqlHl12Oq/jb1h9T8ZPjZwcXD/Zmb7z/L27YfAnor9G1etCmUOC1v9Fxa6cI0Ip/AJRRertXKwc2QoSkgwfP3241N7xRZ9BgaGB8jORQkchwYHlgMNB/4UFbnJfvzzv+D3v+/M//8xvVg87VBHQ0MDU0NDAzi0MUOVgYEBqgDkF/RIR4lLnCkH5Kdr17T/Q20hnACITbp40yo+QwA2e48Plh1yhQAAAABJRU5ErkJggg==',
    order: 734,
    base_experience: 147,
  },
  {
    id: 635,
    name: 'hydreigon',
    weight: 1600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png',
    chain: [
      {
        species_name: 'deino',
      },
      {
        species_name: 'zweilous',
      },
      {
        species_name: 'hydreigon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB80lEQVQ4T2NkwA4YQ0NDmVavXv0XhzwDI7pEQwMDU0MDwz+QeOiqUObVYdg1o2psYGBiaGD495+BgdElxVx375yTl1aFhjKDDAlDsx2h8T8DIwMjw38GBgYmh0aHNgZGlrIX9x7m31hwezI258I1NjQ0MDU0NPyzr/JcLsfKF8H25hvDK77/DCGHXiWoHX15yjKU+y7D6mu/YIZANP7/z8jAyPh/TnKy2Q1Wxl0WLPz8D3i4f7/m/sUq8fT6H75TV1tf/ZaYWHn5yHuQNxgZGP6jaJxp51B9Qvhfma2BJdfx38+Yz/y5ynieje9O3dV3V9XXXmqIdmC40nCA4V8DA8M/jFAFOcA8S3ublIScJ/MzTob/zz7u/Hbkb4qfLX8G/5OHX6POXmj/HxrKjPCjgwNLw4EDf7xqm3StXz05KfLvH+cTLh6Gz8xMf79++/qR7dd3oX9Xr5hMP3nubCiSRpAB/1cxMDDvjwx79oGFWYTl0+clf1iY9AQlpQ3ev3v779KDq2FXj11dCwtEsI0NDAxMIHdPlJFRfSMqUHb34ZU1y94x7GRgYODJtjbZKvaHgaH+5Bl7aIiCLUH2I1gAFtwNDQ0sDQ0Nf0D8KQwMwls9Pb9s3779J2p0IMUwKKVc0179H5bsiE6rWBQygpwBijtkOQAO3si9jUnxIwAAAABJRU5ErkJggg==',
    order: 735,
    base_experience: 270,
  },
  {
    id: 636,
    name: 'larvesta',
    weight: 288,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png',
    chain: [
      {
        species_name: 'larvesta',
      },
      {
        species_name: 'volcarona',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACjElEQVQ4T12Sa0hTYRjH/8ezTUVnulzTedmoeWFllKslaHEUi7yQFzijog+hNAwSP/QhhSavlRgGFlRkItVH3QpkZNEH8dSKQjKKtNJZGNnmnPMyydt2PLF5yXy+vBfe3/M87//5U1gNCoAQ2BCiDiNkdHHr/dp5YwkAwRCAkHZoys9h5HEzcGwE6G0DfJuTboYpM0AbAL4DqoLZYmmls3LgjqJFcdmljLlFOr89NZtBGwzgt3ZAEcKICOH8jYdSTDsqpFe8vAS+Ph7ivd75ZTq8pq7mY/vamwAc/E6gC4owjIhwnL8iMe16ZEn8JedQlCCft1OK8jHIo7fD4/bnmurGOEEARVEQGOZsGMc9WqRYgLYAfDXC8j/JtDmJSzNR/L4fyUIaSpnsbfSkO6S3vnY6DxCo3Fy2we+fu2ezvXBuiAMBFKjVVspOpTZ4PbJ6TbrHFyt3iRtNXvXFWibn12hEkbmj+zTLsnQQJAQhhGClzqDM9u1ynPwyqM3osaYeOV5kR1zS4PT9VhiaWlSmiXFpx83mgVajUSf+D6zSo0yiR5UscadvYlxb6Hy7QGmyehZj1HLb3Mzy0aaGWR2ADyyL1YqsGbTFAP7qDeRPuoqsygR3eEp6H55Zi30q9RzilC/FXU9k77u7pg5uqBoEWZa2WCx8SUVmmcse37lNPvwzY4995c9sZqrHnYyIyFeOh21TeQCGAtUsFvDr4gQtdw3IsunzHkgkoaH8657S8cJllej7/t1CtMooUawcfmO1OtadFASFwEABgUhxYj7pgH4hKpLTTnFfzw/jdyWg9zPFRO2ZjE34/O6MERgmQMi/cWx1MYDqAk3o7ecjSwIgugskXNDpHOjvD/gXfwGGe/5G0CA38AAAAABJRU5ErkJggg==',
    order: 736,
    base_experience: 72,
  },
  {
    id: 637,
    name: 'volcarona',
    weight: 460,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png',
    chain: [
      {
        species_name: 'larvesta',
      },
      {
        species_name: 'volcarona',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABH0lEQVQ4T2NkIBMwkqmPAavGhv//mRgOMDBpOTD8Z1jNwBAWxvgX3QIMjQ0NDUwNDQ3/CLkERWPoqlXMq8PC/las3+8gKCadxsjK9vThlbPLpyYFnWdgYPyPbBiKRpATGxgZ/8W1LN+s5+7nI8j/h+H182cfK+w1JRkYGL4juwZVI9SZYS3LlojzykV//XXr51UmxqCTxYnbYK6B2Yqi8f///0yMjIz/5p28vtpWUiDk5csX/398/xzlYme3AiaHV+O2vcc2S4gKGPHy8Eg9e/rksL2tld3///8ZGRkR/kQPVRD/f5Ctu+S6wzvf5VS0+x06efXSpf1LbqKHNkZ0oJsMchq2KMKeABoamCB+sWdiYDj4D1u8UjfJEUo1IHkAOryAD0BMBksAAAAASUVORK5CYII=',
    order: 737,
    base_experience: 248,
  },
  {
    id: 638,
    name: 'cobalion',
    weight: 2500,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png',
    chain: [
      {
        species_name: 'cobalion',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACbElEQVQ4T2NkQAf//zMyMDL+hwuj86ESjDAFDf//MzE0NjI0NDT8Y2BgYFx15Ezkx0+vDqV6eT0BqWloaGDSqq9nDGNk/AvigzX+//+fkRHJluU79lVZ2ju23rx+rd3dSLtq1dWrbGHa2r+Q1cJtXLxjv4rwP5nHXl6qP3v2nTqja2RqzPjq+VY3NSkfkIaYtDRJv4gEtTAnq4NwG6evXF/84snjnsbiPB0Ghv/X5t14/uIzK4eYOR8nw/enDzMdDTRmpBaUdnqHhJfxCAiauegonwbbOH/jjhP8fHzmypo6t3///vnrLyuH9rMv3/5pCfMzffv+7R8XN8+tB3duqf35/YeJV0Cg2U5DoQ6scd3hk2riEhKlPHz82h/fvf8uIiHp9OfP3/8C/FyMb998+Pb335+HP779+PLh7atbvMLCrfZqCtcZ0QNm58XrC9XUNOIYGRh+/2dkYP3z6w/DvJlTLdpLC07CYgCsB8SZeeYMa7qJye9d1+6q/v/x87qYhCSzsKjA79+/GP7yczFw3Lz9uNVaTa7m/v3/HAsXNv4CRRlY4/7//1kcGRn/HLr5OEdaRmby929fGQSFuBl+/WZg4GNnYLj38NUGUwXxwP///zMzIsfj/v37WRwdHf8s3bY3x9LecfLJ40eOf3j95qmgiAiXoam519Mnj4856ahYI3sLbGNoaCjz6tWr/ybkFGuYW1vveP78eW5TUfZmkNy8tVvPsLCxGm7Ytl113fT+e6AUBHcqPF02NDAxNDSA0un/////MzEyMv5LKy+X42Ljlv797vutqVPb30JT2394ysFI7FiSIkwTSC0AlZYVHBUbvIkAAAAASUVORK5CYII=',
    order: 738,
    base_experience: 261,
  },
  {
    id: 639,
    name: 'terrakion',
    weight: 2600,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png',
    chain: [
      {
        species_name: 'terrakion',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACYElEQVQ4T2WSS0hUYRTHz/nuJEr4CClKzdFyoTgpWUG10oyshILCu9CFCwnTkCRoYxDfohZG1CYsoYgWhtyhkJIsyQc2kFPRpKWTET6YcdJJuV3n4dwZ7z1xB2dy7Nudj/M///P4ISQ+JCKwAjARQQdAqqmRhOLiSeKc6xtTcWNARIiIFPs7VTea1td1eMWIOedsozgulCQSRBG11tZn1UUlu6u7X6uMhX8dGOh511Jx5rg89OLsFOfEOMeoM8YrmaX8B9ezb+rpeW5cw6sjAxNQWLbT53KHTN8dP2y2V3UnAAgBol4UF77t7d0TYOYvbl96qnNiXnWM/xQqjxSYmIAwNuGDoP93zxtr7XkAY3ZAlCRJEEVRa7/T+9Dr39Ywvzi7ZrEUmfbvK4KnIw5dV+cxbYUiLwfczZ7xK4/WXQ1rACJiiMhKCpuvHbxQwy3FOzTfB6ewmFWg66rKhu52THv1J2XyNCjAOQPOdYwtZdD29dzktNbpdLoys3NydYVQ0GQZXM4lPT2L2Jwr+U9EXa4d7KnvKy/npnir/f2DlcMfU577AuG0ULIflhRZWw1rlL012UT+7eBZCizIMx2H7PY+t+EabbWzk7Y0NmIE8q1t4jG4kWlWZ1kwL19RFAimeD5DUsGcd3jKbhu92G4AYbWK2vodo2um+pbuvUlHSxvCY55dijtYGlIxwoSg13K5qlsPsbHbFanfEpYTI4UTMfW9dvrxpVv2BUfbKgAEcqEp4+SnDn/SspJzrypjJpabgJxxn6auuYz7dWZ5E8P/hZuF/wpyjsA5ARjoGuwncvwXj7csJXf7NCwAAAAASUVORK5CYII=',
    order: 739,
    base_experience: 261,
  },
  {
    id: 640,
    name: 'virizion',
    weight: 2000,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png',
    chain: [
      {
        species_name: 'virizion',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABTElEQVQ4T2NkIBMwEqEPpOY/ujoMjaGhocyrV6/6x8DAyNDQ8J+xoYHx3////5kYGRn/IWvGaeP///8ZGRkZQTaBbUTig/VjaMxpm6kxuTLtJkjThg0H2zk5OWOfv34enhDjf3TVqlXMYWFhf5E1wv2RHRC395O6qoAyj/g9YwPNEAFBEYY3r5/uDAx08Vi16j9zWBgjQmMDQwNTA0PDv60OCRJKz34tesr63fxdjCffX1W1b2+eveL6/ef7mqKi+FBsNjI0NDQwNTQ0/GsNyaj15RBseuKkzXD9JyfDt1dvnz94dN1u7tz+O5CAW43iVLhGn5IKB34O/iQ1LmF1ThY2vhMndnmsW7fsIbJtmIHT0MDE0NAAC3aQv3kYGBg+h4auYl69GhIoMIA1HkNDQxlgoQfzAsEEgGxoQ0MDI8jf2FIXMUkOa6okWyMAJDeKDzr8MFoAAAAASUVORK5CYII=',
    order: 740,
    base_experience: 261,
  },

  {
    id: 643,
    name: 'reshiram',
    weight: 3300,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png',
    chain: [
      {
        species_name: 'reshiram',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB20lEQVQ4T2NkwAH+h4YynxUUZNoiJfW3oaHhH7oyRmz6/v9nYGRkZPgPk0Png8TRNYL4YA2/+CuMd8a9MMqQebn9afn2JyDNjY0NjFe16hlXhzH+RdH4n6GBiZGh4d/a5KgabT7xZm45boZnZ19vNl8y0+/MzDOsJukmv0GGGhunscI1NjQ0MIH9ssNdaPEaoSciGvyc9qf4GB6sut+txbC6DKQhoWE/x98vHzufP7m+HkkjA1NDA8M/hjQGrptP4s5etxHWkDr0899xSf3ncxh+XNRlFzrBLiia/Pv7J77bN0/aoDmVgZGRgeH/Ap+G5ewivBEH+CX/fOfgY3l16+BqHl5Ba24+AalP718d//SHPR+h8f9/RgZGxv8ODfs5uB9eOMPFwq4tqmjM8PbpzfrjU+MmG4ZXpv/48uXozq2TjzIwMPxDtfH/f0ZGRsb/UTmLt3LxCnl9fv9q2coZiYmgQEaOttDQUGbMwGFgEAxNnfSMg52b4+H9qxWHtvZ1pqXNZL0l9fy/6FWt/6tXh4ESw39kG8FxaBlayMnz7Uc9M8MfZiYuwV3bVnfthsY3PEHgTQAIp4EMZ0TRhE0jWD3ID69fazOKil79v3r16r/YkiXWtIor4SOLAwDJKrm48QCHrwAAAABJRU5ErkJggg==',
    order: 745,
    base_experience: 306,
  },
  {
    id: 644,
    name: 'zekrom',
    weight: 3450,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png',
    chain: [
      {
        species_name: 'zekrom',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABi0lEQVQ4T2NkIBMw4tP3/z8DWJ6RkeE/ujqcGv//Z2BmZGT4C9KAzIYZgFXj//8MTIyMDP8cGBxYzBiec3Yx3PwME8OpEabg82cGnf//GZb8+8sgcf8JT4Sh7pcDyDaj2LgqNJRZ1Eub1TGx4ceRA9KLORnkYth4PzAws95+p6Uno8zA8OADyN8gPyNrZGJgYPgHdQrj4ma/wxqKzNbn9nMzsJlsPpSY+dEe6l+IxoYGBqaGBoZ/DSnRMiy/PuSbOHk+4PjyN01W7ZYeJxvvz7O7v7P7tk7M3N/QsODgq6ssDdNWfwGHNIhoaGhgamho+Ncc4VYfHRrS8JORmeHFo+cMumaWDBeO72I4fuXWb1lR4elbT92pXn3gwJf/4BhCA/1JvrkKUpIVrJycAm8+f3t4/9m78xqyoicjW2dMQnEqkj7G/w0NjIwNDSB/cjMwMIgyMDA8Z2Bg+AlTAwsYuFORLf2/KpSZMWw1OOJBYH9DAwuIdmxo+IOsDlfKAYmDMCipYSQ3rDYSm+YBDJiUDz7+VA4AAAAASUVORK5CYII=',
    order: 746,
    base_experience: 306,
  },

  {
    id: 646,
    name: 'kyurem',
    weight: 3250,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png',
    chain: [
      {
        species_name: 'kyurem',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABhElEQVQ4T2NkIBMwkqmPAafG////MzIwNDIyMFxlXL2agSEsbPU/BgaG/zCLcGkEicMVwRT//8/AyMgIEcfQuGpVKHNY2Oq/q+bEqChqiHWwczK2v3rx4/PLh+9fR2cte/+fgYGRkYEB5BwEADmPkZERbOKZM1WzjYzlUy5tv8HwaNf7s4+ruByyxaZ9gdkK1wgTuP2/ge/H0i9+//4xZn0Q/mL0ZPMr9qcz3meVMeybPjMtjTV91qzfKE79/z+UmZFx9d+1a2MLFD8J979r//rwX8U//vvX34and2/Ytb+hgcWxoeEPzsCZ4eTV/Irtg2Fou4O5hoGEyLL+g4uji9bGQTXAAw3u1IaGBqaGhoZ/1VFW8mp/JbfImIo8eC7xctetiS9d/3xgr2u7feBCKEMo82qG1X9RnNrA0MDUwNDwb755sOqPT38tMq9vWAxzlqeKCvv2O3d+IgckaqhCgxqk4P//Vcxnz+5hMjGBBAY6wIhHUDytDg1lClsNcRIuQHZaBQA5kKAPQgturgAAAABJRU5ErkJggg==',
    order: 749,
    base_experience: 297,
  },

  {
    id: 649,
    name: 'genesect',
    weight: 825,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png',
    chain: [
      {
        species_name: 'genesect',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACJUlEQVQ4T2NkwASMDAwM/xsaGpgaGhr+g9hY1DCAFGGA+jRjrsZZZ79BJcAGoSuCa1wVGsoctnr13wlZCaY/Pt6waFmqueILw/zX2AwGicE17m9oYHFsaPiztKMpTlFVu/3bbz6ul68fpkXnpqz+//8/EyMj479Vq1YxM6xmYAhbHfYXYeOqVcxhYWF/GRgY2LctWHpEVFzc5PnHNxl+EREz/69axdx4LfR/QwPjP5Bt/xn+M4I1/v//n5GRkfH/mc2buf6xsk788P590Jdfv5//f355K/uHC198OnY3g9RNqVzj9fL1M5HmOXmLYBrBTrm498AqJSX50M/fvjFcvnT1zuV1vf6SMtw8v/RiLynxCVRfvfBD69HDl3s7FhVMY4QG+7/9q+ZLiMuonL107tpHDy9XzVt37l4wc3M1BNm0ffGyImZW1sduEaGrIYH1n5Fxf8N+FscGxz9rJ+8MZ2Fn6F057/hFtwgFCXUlVSN27v8dOzZM3cEnpK2f01gzCaT24IGDDA0HGv7AA6cnb8nuv3//c248sG+ClaZuuK27Zoi2pjrD5nUHDhb2JTlAwwESNkjRwVgQ3WQlIsD1pGZqycOimOYDr+6ynhPhFT0rqMSUVj8j0R49MWCknMLQQs57H1eKbNz17DFIcX/b9LIvH95srO2qvQkLD5QEABIECTQ0NIDjCgRWha5iBkU2Iu4Y4UkPa1pFNhmUWsLCwkCGoaRXAPkH9Q4gXY0mAAAAAElFTkSuQmCC',
    order: 756,
    base_experience: 270,
  },
  {
    id: 650,
    name: 'chespin',
    weight: 90,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png',
    chain: [
      {
        species_name: 'chespin',
      },
      {
        species_name: 'quilladin',
      },
      {
        species_name: 'chesnaught',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACcUlEQVQ4T4WSbUhTURzG/3d3OZ3OvVFTN5SRUKZtQ7KFfchVmN8i644wkAjBIpDAj33YkV4MgsyBqCOmwVaxmREKFiRdCdMxSVfgXKW2bG1zL1m31uZ2d+OylGZBz5dzODzPefif88NgiwjChtvtejpzjDgAKA2EDQe7Pv3byrArlpXLGGiJtkWhyrsTIElI1aHnXBLpUlsLNoNoD8pB82j9UFO3juKJHq9R4VtLQ+2IDVQ0XquWDV9+TUq0fIg6KABgshtZV0MHAduVNln4czI4NlKuarnYSKeT18NBfygWXumjHD2dgBBnM3gVNGeKy4XnxImYdLSkVm3OF3sqC3MtqULZlej3OCSoUJy3tqQMOQcD7OwYA4BhAMwgqIfk9YqTEpoL0fE0nCIOe7mJlBSAXwBU4G3pgqV+1r/sJQgCt9vtNLaxgTrg9rgPTkmDwV2+EzWCEG8/UN6Pyz0C/m2I+p/CjNnzxwOxZRkNAORi8ur2YeGBY6pGXyn1tabsWUQB9SuOu9oXvcY0gPQLgGBM0/RmdO7eOzaI3+wb7vS53rc6Ajg3zuVPH5c4139KBQ2vFitAvTwLLixnvTi/4AcmlIink7FLnlFDN2ZDKCcg3+t9OR9ZeGCNna5ade3kE6rJSpGfLv6Ag5svxVf9nyKTO4pmQSQyg+X8/U0ArNaHZcoiOlV7RO/rMprOUnEYmFjKhxLnlH6xStmWFw0JxkduaLJmRAhxEEIbOIHJZDpKM7zdxkdzafeTrl6r1WqMfKOFbReam/v7Z7a1tu5jKcoAwIYNBkOGQYz9of/rL3IYhuGQJMnRdUwAkIiF/Z8X/QIcKAekyXNNIgAAAABJRU5ErkJggg==',
    order: 757,
    base_experience: 63,
  },
  {
    id: 651,
    name: 'quilladin',
    weight: 290,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png',
    chain: [
      {
        species_name: 'chespin',
      },
      {
        species_name: 'quilladin',
      },
      {
        species_name: 'chesnaught',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACA0lEQVQ4T2NkwA8YGRgY/mNTApKAg9BVq5hXX7v2n6Gh4T9DaCgTw+rVf3GZi6wRq+lgw8LCMAyAaPz/n5GBkfF/zKpVrid2H63//e7Vuoe3BDa4pBlM1/z/NmZyXtVrdAMYYQKJS5ZosQsJXL1y+RrDkcNXGnuzvNL/8QlLlM7encSwsGv+////GcG2MDKC/czY0NDA1NDQ8C+mvU/lj5L4bYbnD+9af71z9K5haJzZn4cM385t3phyUyNFnOXy95eLd32FuQ5sCEwzQ1GZheevH02JLqqu/ySV/r0/f5zp1tXbvxm94v/8ZWE+MdHV3Y2BgeEPSDM8cEJXrWJbHRb2y33m/Kh4Q6mlWpLsPxccfMCswf+PhVNCgmHDy78MLJeOOayuaj8I8h5cY0MDA1NDA8O/XiUGtR9+XudPqwVwuTzdysDKL35z30+RNzf/sRqIPnystnvevGcMDQ1McI0ODQ0sBxoa/kQtnef+9cefHYc3HVzga6Fo8oGb/8fGvFIfXgYG/s8MDLdA4QKKB4SN+/ezNDg6/slbt24Cm5Bg/sOp/sJc4fOa5FRVsq+sX6m+vqH9FsxwcKgipQywSaFtbaJ/nz9nXzd58pOolhZ5HlFR2cdXrpzePnnyL+Tkh5LkYM6ApIn/jIzQOCOYVmGpqKGxERS//0DRdFVLixFbkgMAIRvovAEg8+kAAAAASUVORK5CYII=',
    order: 758,
    base_experience: 142,
  },
  {
    id: 652,
    name: 'chesnaught',
    weight: 900,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png',
    chain: [
      {
        species_name: 'chespin',
      },
      {
        species_name: 'quilladin',
      },
      {
        species_name: 'chesnaught',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACrElEQVQ4T2NkQAYNDSwMDfV/Q1etZlodFvYXJBW6ahWztqgoY4Oj4x+w0v//GRkYGf8zomhE4mim1QTwCHKyne6sXgUS9mnpk2bg5hbfUph+DqSZkaGhgYmhoeGfXkym+qWfHDkMq490MSxZ9rGF8eC5b4zsMm233hsl62mEczD8LX/15EHJ6rzMKQ3797PANTKoBWuUV/he//nj+x0mhr9swgqKcj++fvn/9Cvj73grWbZLH/4zLD9wuvxYWX6XQ8N+FsbQ0FDm1atX/2Vg8JGbuzv1yg8Wbl6BQ70MXAICf3tf6DJJSEsy2qvy/bnw6jvz3MvvrBi68k40NDSwwP24ok4/9w67U91jcf3PJhKsipcv3Pn/WkabgYn9P+PRg0eWZ+tJezG8u3/8b830iAoGho9gjS1RDGYihjknf3NLMny7eWDrUfNMGT42Fv3/v74x3Hn0YoPpxa0PbeNi86XFeRlW9U1pnrRkbx1Yo29zb4usinI1Aw8vw+drF+b+FRZ15hcRUeDi5mP4/PTRin8sHKLcggLOfAw/GR7de5iyMDdjLlijV/ekXj5x0aJfL580v7l1a4ekieVRhs+fuv+wsXr++PzpJzMz030VM+uQV/cfMzy4/UD5SEflPZgfWYR11VTeXr51w2D5bgfJz0/3bk9LYPabtzKGh5uzd9n9Z26OP16kMvz4vX9/R+vahoYGJpBGEP4PsnkJAwPfz46EC384RRT3Le6Jd44s0JBWUqm8dvro+tK25UEYKWfVqlXMYWFhf/NnzWnUF/pX9/HFI4YT+0+UaTp6GijJi0Xdvvf4c/PxJ9oMK6Y9hiUYZBtZspatK3nPxC6x58n9V69L1kzymZaY+Y2FKY3p94/n3x7cSjzW3X0X5MyGhoZ/ONMq9jQMStuMYG8BAPWBIajsjubAAAAAAElFTkSuQmCC',
    order: 759,
    base_experience: 239,
  },
  {
    id: 653,
    name: 'fennekin',
    weight: 94,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png',
    chain: [
      {
        species_name: 'fennekin',
      },
      {
        species_name: 'braixen',
      },
      {
        species_name: 'delphox',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABgklEQVQ4T2NkIBMwYtPXwMDA1MDA8J8BgrECDI2rVq1iDgsL+wtS3dDQwNTQ0PAPm050jSD+/zhnZ+FFe/e+BWkIZWBgXs3AADYIGYA1wmzZtGOH0cf7D6uElyy2eszCciNdXS2QYdasjwwMDGADMTTCnLRt/zaZ729+Pn63fRvDgx8fGFa//Jhwa++uhaENDWyrGxp+YWhEFpgxf5HX5zevV+5ev5LFgF/0lJ6CnMiW6dO9VzAwPIAGGtjPMD9yHTlxKuvX08cG54ODn7B2dtsycHFbiYsIfWP99zctKDp6KdRwuJPhgXPk9Gn1D48eqXQEBx9LmzU3/NOPb9MF+fhfRifE6TAwMLxpaGhgaWho+ANzHdZ4XJqTs/bJ1atLv4iL31dmYZn01dLSMzs7+8v///8ZGRkZwYEE1wgK2dDQ0H+NiYnsykZGpjG6uscZHR3/rOnqinzLxLQ7vaTkDVaN2CIZWSEyG8VGZI3QeAWF3v/9DQ0sjg0NoASAGY/kpHMADz+kD6UdywoAAAAASUVORK5CYII=',
    order: 760,
    base_experience: 61,
  },
  {
    id: 654,
    name: 'braixen',
    weight: 145,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png',
    chain: [
      {
        species_name: 'fennekin',
      },
      {
        species_name: 'braixen',
      },
      {
        species_name: 'delphox',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB8UlEQVQ4T2NkwAL+rwplZgxb/RdZ6v///4yMjIz/YWKM2DSCxIIaHGTWNRx4AmIXNBQITGiY8IGBgQGkHqwZrrGhoYGpoaHh37x5G2TlBG5lfDtTFvHrHMOUM24zr+pJ8JZGRUW5IlsC1wh3iud/9mMF/Zd5jxxSXbGT8yljhEWtg47WvOMnT2jU1tbeDA0NZV69evVfTI0MDAyrEmMbn8pw1H289foRG5vQHfeiXKf7t+/WhISFtO7fv5/F0dHxD1gjzJnL5s/XaD1y6U/ijQPTf5sZugg+fcNwc8OdJq1lTWs5Pn+Wik1M3AFTC9YIM2Xt2rUpfHz8fcevXD3B8O2Xs6y0xIOrr19Y9pSWvgKpQw5ZmI0sDQ0Nfyb3T/YUFBHd9uH+7U3fWdj8ZGRlH945c9K9duLEmzNnzmRNT0//jRIdMOsbOidLfXvwYKbdni3OX9S0OLX5OBnO37w9K+7c6fT/oaHMjKsRcYscj/A46tM0Wcz4/88djqefvV/+ZdjZ8O1ubQODA0sDw4E/WBPA/4YGJsaGhn8LFi9e/omHp+bN3btK0pzc1unZmQ0NDQ1g72BohDm3qbZWW1VDozUyOjpg1bJl9gwsLE1hYWH2UA2YKQdmErLJDQ0NbD9//uRvb29/jZ40caZV9ESNrhEAzynrDxyBdZIAAAAASUVORK5CYII=',
    order: 761,
    base_experience: 143,
  },
  {
    id: 655,
    name: 'delphox',
    weight: 390,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png',
    chain: [
      {
        species_name: 'fennekin',
      },
      {
        species_name: 'braixen',
      },
      {
        species_name: 'delphox',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACBUlEQVQ4T2NkwA4YGRgYQBgE/mFTApNElgOJ/YcJ/P/PwNjo6MDccODAH3RFWDWZ66nI/Pr25ef5Oy9egxSEhjIwa69m+N8AdQHcxoaGBpaGhoY/nUl+vHtv3t/AwMJk+e/fvy9cbMxnTGT+L6hbeHEV1Aawi7A4lb3T11m77N9/BgYmJkaG45cfM/hqsTL8uf80cvEDhn0MDAyv/jMwMII1hoaGMueH6qnwvN3/5fAT4a0nrr3Uf/f+45+/f/8xRQU5/OP485qBi/k/yy8OsQMhWZMdQXoY////z8jIyPj/3I6exo9PrmQLiYgJz9xwlWH77uN/2dk5mWa2pzAy/Xj6i42Ni+3tN7YVXsk9kf//NzDBgh0UikzLO/0klqzeZHfntfTsIHcdnt8/v/3vWXiYIc1F4r+mDCfTudP3OxZfZahscHBggfkRJQoyg6xny+uapby9d/6/IOMzxldf2N48ffP1qAAfz5nZWy63gEIYJXBmphmzps86+7so2tb5/U/m8itrDiwyDTKf9YOJr0dTR3nf13dvQhomrclZtSoUVSNycJuYWKuH+Vsp//z6Oay2Y0ZCaWmh/ZcvP75Mnz79bEMDxI8YABTKq1ev/puXl6f6j4Pj65SurmcwRSBNDQ0N/7BqBCmCJQhYdK1atepfY2MjI0gTODpwJHKwMMh0KI2R0AF3gtdu6k456AAAAABJRU5ErkJggg==',
    order: 762,
    base_experience: 240,
  },
  {
    id: 656,
    name: 'froakie',
    weight: 70,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png',
    chain: [
      {
        species_name: 'froakie',
      },
      {
        species_name: 'frogadier',
      },
      {
        species_name: 'greninja',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABaklEQVQ4T2NkIBMw4tK3atUq5tDQUAZGRsZ/DAwM/9HVYdMIEkNR+P//f0ZGRkYUMRSN/xkYGBmhmjbvWGXGLaQm4+Q6cz/Dx+nvGxoamBoaGkC2gwGqxv//mUBOu3lle68Eh2DRH0ZehnP3LvS4ukaX/ofKYWgE+SksLOzv0p5ieUMPv/vPLzxkVNCUYOAS5f+X6JeuvOPChQcwNSg2wpxy+PAWwV+fXp+5ffeakpaxJ4OKBMd9KWUrUwYGhrfIzkV2KjxQjuxadE5ZTsDw0y8uhhMnTm+KT6v0R/IaOJCwakwraZqsqSyRc+/RMwbGby+3JHspRei7l35FDl2UwAkNDWVevXr13+IkXc9vv7gXMjCycT18eNNy26GXlxsaHFgaGg78wRqqUBf8T41311aV+iXw7fMv4ccfeK7NXbLzDkwOl0aY89FTCkaiwJrkQKGndfUq4zXt14wMDAf+NTQwwCMen41EJXsA3JCWD9XIVLMAAAAASUVORK5CYII=',
    order: 763,
    base_experience: 63,
  },
  {
    id: 657,
    name: 'frogadier',
    weight: 109,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png',
    chain: [
      {
        species_name: 'froakie',
      },
      {
        species_name: 'frogadier',
      },
      {
        species_name: 'greninja',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACsUlEQVQ4T12SSUyTURDH5+tiFQoRKIIsoYoQWlKVxcJBtCgSVBJcKEE8eFFiOHDxQqzLI15IQDgoEiAm1MS4VBAUU4OAhRIIkhojYiy0AqG1bUppK923Z76vxaDvNJl5v/f/z7wh4L/zEoBeAxDcnkYiEQMpFIHtOaKdx6sFjC/6IDja9GOpmywiABoCCJExBkwQQGAybs1gn1hOKhFr6cz7xEOB4BibRpsIAQazxzujcTgaevX6LyR8FwATAFjCF1T5YtMlzt0pR1ZCOKg2rqUQ5Eu9ublPE6Oi69w4CDqnY11uMBWO22yrlDp3b4Ult0q+tisWfMEgeJ2W/rGRvmoKbBOJOHE2Wz/LHyp2Mug7FCbdk2dG8xWydjv/+GttZvE5R9DvJPz+aLNFXzk9PfCOQAgxEEJU4y1nhHWmqU9d1qg0T59RlyQFEH49eXl2MS4VdoZCsGE3Px4bk17FmOwbAJpQB7esJO8Bk7GRNytXYmdLR1qcIOvNCqfw4K+EdK7Nten2BFztkyPSW5HJhsGhV2+v8/iZXZt2K7h8VlgdeAGrEzZQZGYD02oG2uLC+JJO1aAGUG99CQW2X2qsYLmt8uRTRyFNeBg+Dn+wvx//GRtiegmPWYcLAvNETpEAHBzepKSNXw7Q6KXAmeHSC78NMf1ae6k2npv9qLb6bMyh/Epks7n18ezQnqID692s1BKv0pw89Pn5HSUAhK2ODp7m25fXhUrlMiMli12jms8o1hgCczn72VMaQ+LN2em5eAD15j+bgzEQBAHUZgCcz265oek0WwjON11Ca1kB7l4xJvk7pU4BwLC+oL6eqerp8ZM3KUUSbm7mMxH67gMojxaL9SyZbGFDcm3fPQbDpGrucg3isL2IQATcsiAWi+kymYxacISAhlA9HSCsEBH5C/4BL48uvafIP2UAAAAASUVORK5CYII=',
    order: 764,
    base_experience: 142,
  },
  {
    id: 658,
    name: 'greninja',
    weight: 400,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
    chain: [
      {
        species_name: 'froakie',
      },
      {
        species_name: 'frogadier',
      },
      {
        species_name: 'greninja',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABzUlEQVQ4T2NkwA0YGRgY/kOlkdlgIZAANgBWmMbAwHpCT4/t0qVLX9EVYWgMZWBgXs3A8JeBgUHC3sz0JNt/hqTdp0/vDQ0NZV69ejVIHNPGBgcHlmdqaoyzZs36PS8gtu34q8cms48dcF8VGsoUtno1yNn/sGqECc6vrS0yEZLuffvp88X2HROddh5/8g6nU////8+YlRDpdeXiHWc9NZVsISFBNgFuToazN2/uuXbqbr1bgtXlrq55n6Hh8h/kR3BAhIaGcgpzs038/e1TiqisMCMPH8+/bRsO/+dhYGbWNNf78ePbz+qZi5b3NTQ0MDU0NPyDB87//6uYGRnD/q5e1tZvbmlY8Obtx++/fv5i5uJgY/vw+VuRnUNS////+1kYGR3/oEQHLNQm9xRrPHr2+pCtlb7ou4/fGDhZmZ6w//lvFZBU8/h/QwMTY0MDOICQowMWyUzZ0laHf6syXLt74Jb1I4Y3824zMPQ0hIayNaxe/QtbqEI0uhjzd4lr25YtXbSlPjIy4D8j48emZcv2/2dgYGREpCSMlINIWv8ZGBkYIUnuP8N/RkYGRljyw5nkGBscHJgbDhz4A/K3trb2f1AoEkxyeBI9ihQAiG2zD/bYW9wAAAAASUVORK5CYII=',
    order: 765,
    base_experience: 239,
  },
  {
    id: 659,
    name: 'bunnelby',
    weight: 50,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png',
    chain: [
      {
        species_name: 'bunnelby',
      },
      {
        species_name: 'diggersby',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACAElEQVQ4T2NkQAWMDAwM/2FCq0JDma9pa/9vaGj4h6aOAaQQBmCaZBgYGIQZGBguIhsQtnr1X2TNMI0wTSIJQW5rbD0s7T/cenbd+I/QZvtdnLWM1xp+gWxH1oxhY05CqK5TmK3hv80PC8z0DQwPX7p8PvreriCGHRceMDQ0MDFAnQ3X2MDAwNTAwPAv3MDU9NrT01GlMRkhuoxyEmeZnrKsvXejbfu6vdVpaWmss2bN+g1yMrpTmeLcbe/xcfPKq2iLMmh85vvHo8nPdOrpw49FTYvNGBgYbsEsAGsMDQ1lXr169V8PM/1AUX7edf9+/P4lLCvEYm+vw8TPzfHn9Nk7LJX9y6MZGBiWOTg4sBw4cOAPzEYmBgaGf6ZaWhIi0uJnpcRFpX78/P2X8/0zJj5Rof+nbr1l+vH2leOZBw8OwCxBdypDWkbSKUFBAVMFUWYGBVXZ//8ZmBinTN04c9uO3RkNDQ1MsDiFOJWBgXk1A8NfQxkRezk13QMSsoIMhkYqHxRUFJj+Mvz7cO3MlYLS+hnrGxoaWBoaGv4gBw7YqU76+tIMLL/6ZVlEDDV4RRm+vvny+g8/y4eOg9uCGRgYvkMDE5yykOMRnjDi/fy85bn4TL7/+H7r79+/v/o2b9hGUOP///8ZGRkZ4ekVS5IEC2G1ERRyoUg60NMpSAoA2QjDD0gU3GAAAAAASUVORK5CYII=',
    order: 768,
    base_experience: 47,
  },
  {
    id: 660,
    name: 'diggersby',
    weight: 424,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png',
    chain: [
      {
        species_name: 'bunnelby',
      },
      {
        species_name: 'diggersby',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACH0lEQVQ4T2NkwASM/xkYGBgZGEAUTsCILLNqVShzWNjqvyCx//9BehsYGxsZGBoaGv6hmwDTCKJhNjBlMTBwTWNg+AJT3NDQwISuGaQBrmlaVVwpt6Bo8r9Xb9k0mG89eiAg/27OKcaSveuW3UPXzLhq1SrmsLCwv5Oq0xt1Dc3rnj++zfD/y0cGW6ZLDG9YZBnW3/p3s3nuSl0GBobfoaEMzKtXM4C9AnZqqCgDj21K6mYZU+eCoJx23l4H/kOeaoz/37389XfnKx7W42/fWu45cO4E1OlgF4JCkBEUgs56DhEmWmwuP2++f2Wk98vFWUXQ9BEj8+9D9wVYXz95ubNn55HQWD1lzsWX7r4CWQgLHI4D/dZXmP6rKpfNu71/etTP4+y/pKresX/6wcTFyjF1469jco8efWJk43jQdu16ZoODAwtYIz+DnOCsFrG15+7/uSB4kPm2rq14z185Qa4Xrx4xfP7xjeHD6e9vf3Oy8TJ9++3XdvXqzlWhoczIocrMwMDwd0Zm6GbGJx99Hgn8ufj54z8FyfvfmMXtVHjW3XmYumXn0Tkg2xoOHPgDj8f/oBhnZPxfl2bd9ejdv9ML1hxf7W6rKflLQohPn4vv1J9vnzOnrD6yDF0jPIT/NzAwMjYwoKSUwmAG7Xd/VX4s3HDnLizeUZIcWkr538DAwHg1NJRx9WpIMkROLNg0Iic/sGpQxGtrM/xvQHIJAGOd5ms3te7WAAAAAElFTkSuQmCC',
    order: 769,
    base_experience: 148,
  },
  {
    id: 661,
    name: 'fletchling',
    weight: 17,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png',
    chain: [
      {
        species_name: 'fletchling',
      },
      {
        species_name: 'fletchinder',
      },
      {
        species_name: 'talonflame',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABT0lEQVQ4T2NkIBMwkqmPAafGVatWMV+7du1/Q0PDP2yGY2hsaGhgunr1KuPq1av/gjSsWrWK7dq1a3/QDcBp49GjR5WfPn36Jiws7CPIgP///zMxMjLCbUfROHPmTNZdB45qrl2+m2Xa9KbDvDw851hZmZcJCvLvd3d3vwFyflhYGNglYI0g54Gc0tzcqXni6LFMR2f7wD/fvskwsbEz8AoIMPDwcD5taZludvPm0WcwtTAbQfR/kEHJ8QkH9AyN7HiYGL9t2r773z82Dh4FOem/P3/+Npw1a8rl0NBQZpD/0TVGFBSVVBsZ6P1/9fb9y2mzFq0z1lETffr0lfiNG3cXv3v34ATUlf9R/Ojm5sa9a9cuVk9Pz3/bt28H+eIzyCViYoriWlryHw8cOPAT6jLc8UgoYaBHB4jP2NDQAAowkJ9hABYGcDHqJzlCTgUAgMyKDx7ig/YAAAAASUVORK5CYII=',
    order: 770,
    base_experience: 56,
  },
  {
    id: 662,
    name: 'fletchinder',
    weight: 160,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png',
    chain: [
      {
        species_name: 'fletchling',
      },
      {
        species_name: 'fletchinder',
      },
      {
        species_name: 'talonflame',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABd0lEQVQ4T2NkwA0YoVL/sSmBSaLIhYaGMq9evfovVBCkBkMzhkYHBweWAwcO/FFhYGCXMTUVPHD69AsGBgYMzVhtNHWLkOX986r2+8ePfcfPnr3BwMDAxMDA8A/ZWXCNoaEMzKtXM/x1MmGI5RIyW8jEIfH7/fv3hocPH77W0NDA1NDQgFUj3CkuQUVPBCUUpH8+2svw/eeXnN27905F8zPYYriNDQ3/mRoaGP95FG3w4vnyevLDM0skf/x8V33n6uXV37VCXzFcW/0Lq1NBgqGhq5hXrw776yrH0CGg61nO9fcvw2M+69eXPnOGvtledhAmj2IjRCMkGpzc0+cL8HAk/Pnz7993OSeml08eeV5an7/DwaGB5cCBhj8YGh0a9rMcaHD8Y5WxMvjX9w/xf/4y/P/75f09NuZ/K86urTqJ00aYH2ChGJrVwLN6WsMXiPh/RgYGRnhCwBqPyIEAsSX0H7ImDKeipUlGSEpD2IIzVPEkeAwpAEZeoQ/eHIeaAAAAAElFTkSuQmCC',
    order: 771,
    base_experience: 134,
  },
  {
    id: 663,
    name: 'talonflame',
    weight: 245,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png',
    chain: [
      {
        species_name: 'fletchling',
      },
      {
        species_name: 'fletchinder',
      },
      {
        species_name: 'talonflame',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACCklEQVQ4T2NkwARMDAwM/7CIowgxYlMQGhrKvHr16r8wOXQ+SBxFo4OWFg+ThITwvn37HoIUf/nyhWX79u0/oQaA1P6HGQbW2MDAwNTAwPBPy6GBR/jXwa4/v76eOH7m1GKQwXaWdqmsbKzX9h7cewRdI9hP1sbWctxcTxZx8qvZ//jNOvHlzm0NEm7Onb++/3f+9v1byokzJw44ODiwHDhw4A/YqTCOqaldkJxF3Npfb+8yfL237eJfLuVvkhI8ll8+vvl94fYdxSe3bj1FdjIjQ0MDE0NDwz8pKQY5A+eOi4yfXwp8uN3/gtt04lEGLqHgj2cWM3Cz/zzPycvz7eOnj1OPHDmyvKGhgQkeOA4ODCxPDzCo8igJ+0tqWNb/+P7rGQMTv9KnJ9f28ooJ7GXh4vn77cuXjUePHr0JcimSRoj7rdUZTARV3E6zsbAwMDD+Znj3VWzGgd1LM5GiDRy6cI3///9nZGRk/O+QuXSF0Itr4V/+vWMQ+PGL4Y9hFMOj5/cWnVmYGh8auop59eowcPxCoqOhgamhoeFfU22H9rU3/Btv33qw5eM/5mMy35ne8erKTfv06fXzgyur7VEDB8kNDQ0NHD7PGv6azGL4DRNubyhUYuFmflla2vMVZgFGyoGb0dDA5HCAgUlN7RnjrFmzwIYga8KlESVpQTTU/2dgYIQnN5BGAPyo4pKaJ/c+AAAAAElFTkSuQmCC',
    order: 772,
    base_experience: 175,
  },
  {
    id: 664,
    name: 'scatterbug',
    weight: 25,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png',
    chain: [
      {
        species_name: 'scatterbug',
      },
      {
        species_name: 'spewpa',
      },
      {
        species_name: 'vivillon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACf0lEQVQ4T22TXUgUURTHz3zt7EduZmaRW/YFldaGJVaL4NhWtCJlDyOFIQWBL+ZDxL4keUn6wpcS8kWIsiBwINx6sAfN2XU3W0VLRM1NZEtNWczYRted2fmIWVpS67yde+7v/s+9538x+BsYAGgrchwAVIZhSJ7nZX2dZVkCRoDgRjlJ36xHEnLtc5yepMWicVJogoHQfC7LGkY5TnK5XDYCI+4IghD29njrU0BKxFLvuNg0JQunFrRlrB3vyoMg/DrrKqvUcKxOkqWoLMovDaQh2NHZ0ZdUvHm8KjuHIK9R2HI5bUjbPCxH0+99D1Y76F1diY3gSzdQXpOJTpNEKS+2FEM+v681CToAspwFl5+n7c0/aYkLKjYfInlpbjiyHDHvicHO0DrjB9VMh3HQ3osJ0RMMBqcxBnWTPCqRS2vftFDW9VcNg+/ANju4OG5LmLOlHJzeXgyfxl8vqIujPpM1a4uiJB7zPfwLDCENRwhTi2s9JfY5f11kMrwUNwouLT1KWjW7Im06pIozfioS+9rQGwjcSj1IstWagivuaSt96Sf1eYDCLEXYzBfVeLRm28F4wvRjagL8muwhfS3uIYAQywLBcaAkwQsV92/glg2Ns+EOxUwvVKsDlkHlXGWfVYyTxm9jMH+srPvtg5ITqbGtGkfV7pzzYxnOof7+J5POqmf2KKE92trZ1mXLyKwfLjzTnkGZr3uay6cQQjhCSE0qagAY9sc1ulN2AEM+LcynbvPtdydMmbmt3kYnAsARgLrqjnqiAwzDqPppqaK71B0KGOnmwKuGhyzbRnBchfIPuMKjkGrHfmT/YYuKH+j9ONK6sr7Wcv+rpUy/9gPAb31mDCDi6kx1AAAAAElFTkSuQmCC',
    order: 773,
    base_experience: 40,
  },
  {
    id: 665,
    name: 'spewpa',
    weight: 84,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png',
    chain: [
      {
        species_name: 'scatterbug',
      },
      {
        species_name: 'spewpa',
      },
      {
        species_name: 'vivillon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABeUlEQVQ4T2NkIBMw4tL3n4GBESr5H5saXBpB4jANyGy4GRgaGxgYmBoYGP4ty08RZ7l452vYgQNfYGLINuN06iYGho5/ygwnA+4yrAdpgDod7mwUjdsmTWJPzMvjX3vqgijTno17L+w/EP6Zk/ccz6cn4tkHzt1B1gzX+P//fyZGRsZ/BxYsmGcfH58IsuXK+rUXLgaF3N5vaZkx9/jxdxga////z8jIyAhyBsurd+/Of/jwVefd56/fzfXUOR/fufdozYljzkWxsXdWrVrFHBYW9hdkKMxGWMixLJk+66SEuqaRsLAgg+jXT/+///3IuGlZ65fi6UcUGRgY3jQ0MDA1NDD8wwicTAaGjPADR0tev34t+Hj7pj/n5817xe0jtIaDRW/ihA0HPkAt+4+q8f9/RgaIk7mt1Q35jzL9+M9QNu09Q6LjD2hUwOMUMx4bGlgaGhr+IMdZQ4MDS0PDAZDfsEcHkmLGhoYGEIZGIUIDTA3OBEAo7QMAfVGWD7eBUz4AAAAASUVORK5CYII=',
    order: 774,
    base_experience: 75,
  },
  {
    id: 666,
    name: 'vivillon',
    weight: 170,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png',
    chain: [
      {
        species_name: 'scatterbug',
      },
      {
        species_name: 'spewpa',
      },
      {
        species_name: 'vivillon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACc0lEQVQ4T2NkQAKrQkOZr61e/b+BgeEfTPh/aCjzagYGhrDVq/8iq2VE5sDYIAPCVq/+tyo0lAmmYZsKA7vnHYZfjAwM/0HqQBpBGGQLm4m1vo8QD9cBq53H38EM2etmaMf8n7P43dfPG4KOXZ7f0MDA1NDA8A9sI9SGvxsczRaxMjL6sn38rO969trzJTaOsTJczHN//v3BcOfTE8ns0w9eNDAwMIG8Ata438GBxfHAgT+LbM0ylDiYpz/68/PKJwb2h8bcx605+dQFXnwRuHV400nDRgaGbzAXgjX+D2VgZlzN8PeQp2LqO27FWdP/yzGEsv9msPC0+iP5YD/Lh4dr9irPYXABq21gYGKEOfV/QwPT9bsrtRhZ3pac/64fv5xZ+295pCuDgKoqI9uCCiaOV+uu/mEzmqQ0/dwskGaQP8E2LtS3lHayfXVOhu+u2DGWtD9/3eJY+Li5Gbj5+BheLZvwT+P1ZCYhMWWG+4+/nzhxlD0g6sr9l4wwq48mGBjw/b4w8bbdFLt/EnL/vr59859ZQJBJ+fBcBqXfWxi+/Zc//uHr5wm3H0hsDztw7QskVBsa2MIaGn4VNncW//z2pef961d/ZH0CWViePf4TcmYyy+t3b1LcNzybixTnjIz/GRgYQZG6n4FB5EFi4tlTfIJyDJo6oJRz0W3fNkPFbx8Y7n38Fhl0+NiK254q7Krb7/wChRFc42RraynuLy9st6iba3+Uk9++t6f9+GYdsUBmCeWQz7//3Z3+8GXbgQcPfqBGB9RWbMkPlxg8rYKc3OjgwHxVVPQ/Q2gow+qwsH/7HRyYHUD81atBKQWcRmEAAPTYCCG93onJAAAAAElFTkSuQmCC',
    order: 775,
    base_experience: 185,
  },
  {
    id: 667,
    name: 'litleo',
    weight: 135,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png',
    chain: [
      {
        species_name: 'litleo',
      },
      {
        species_name: 'pyroar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACP0lEQVQ4T2NkQAL/GRgYGRkY/iOLMTAwMDJgioEFYQCsYGZaGuu596dVVeRFvzP/ZfxY1L/zHTbNcI2hoQzMq1cz/O0uMU0VFeHTF+QXfO2fuaaNgYHhN06NDQ0MTA0NDP9mlzHIcIrar/zNqcx98h1f9oy6CUcbGhpYGOrr/zE0NjI0NDT8Q3Yew6pVq5jDwsL+ts1cVCApxt8/6dmbn+cfvjFk6Cq/3rB/P0uDo+MfkIb///8zMjIygsMA7NT///8zMTIy/lu1fpfB639/jyx89ujbqdx0sY2zU8T9U+e8zJi+XEGY9d//1pTohzDNMI3MjIyMf////N56//OXKqVlW7/MFH/XYMl50OUWW85ZLkm1vLt3bvXlBrs2NDQ0MIGcjKLx2ZMnrc/evKkyOXfzx06Zhxyq7HcZVn3wYFCUNWR4ff1Sek603yyYt2ChCo+r8trmG4+UlNW/8bL+03zzgOkQlyTD+8evzwhUF7ofZ2B4h2Ijw6pVzAxhYX81J88MuP7mywKGew+nMHg5FzCcuXJDWpTnwVMhfgaGtISQtJlnWGelm4CiB5oAoBoZJs30dmBhWX4gK5lPceK0ORqv3nhfv3XP0NzW8pDSu7cB7Q1V11BtZGBgYmBgAMUR1+TF674KiklPvnJ8n6KurYtPflO1X0d2wSZ2Hv6sWC/r6fv372dxdHT8g+JHT09PUXl1XTdRCYkLD29eTzCwdz+9IiFkr3R4tKW9f9jpgij/lyjRAU0NWBMzSiZASgAA94UBHnEH3+IAAAAASUVORK5CYII=',
    order: 776,
    base_experience: 74,
  },
  {
    id: 668,
    name: 'pyroar',
    weight: 815,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png',
    chain: [
      {
        species_name: 'litleo',
      },
      {
        species_name: 'pyroar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACPUlEQVQ4T2NkwA6YGRgY/jEwMDBCaQxVIAkQANFgdkNDAwiDNMEAEwMDw38oB0bDNcAFoAq0GBgYnljpKXMcu3T31f///xkZGRlR1MBsZNDT0xO7dOnSl8RQ/xJWTp7GD69f3Pz394/sml0HexkYGOoYGBjYGhoa/sBcA9ZorK9ezs3GnsPIxPGYg4PTUktdleHtq6cMWobmDP+4+Bi+fng7RUxISD+/vT2C4c2bZw0NDUyMsW5u3F/+fbv+/O2HF2x/WEytbfQZ/rJy/bt26iCDT3Tmf3f+z4wfv/1keipjwfDwxqWErJLyhQ0NDSxgG/3srXqFxPlvBHrZzNBQVWRauPrQ/3tvfv+Ld9BnMriVx3BBrvM3h4Yp2/MH91ZEpaRE/l+1ihnmR/6EUAdOfx/36hev3+Y8efiQQU7FkEFWRp3h6/s3DNcePvyiq6nL8+rtuwsZudmGyNEACzHG9saK5wJcv0VYGL6e5xE2lGBk55bZtHZmnaWlkzILC3P8ydMnDBcs23YBFncsoBCb1FYWZGqsvvbA0UunK5smmi2YUrtZWVHOZ97yfam2JjJe/AJCgTsPXAibtWDlaljEg2zksLOy22KkJ2WpICPaV1AzubamKOmlspK82K27D6acPH//JS8nk6mepmhdc9/Ki/B4hEY8FzQFfV21ahVzWFhGAAPDO96USJ3tc5ZfeQlLSuAEgS2pYkspq0JDQemXIXTVqn+gVISuEcYHB5aDgwMLiN5/4MBfRkR6BdsFAMe/2Gn8N5HaAAAAAElFTkSuQmCC',
    order: 777,
    base_experience: 177,
  },
  {
    id: 669,
    name: 'flabebe',
    weight: 1,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png',
    chain: [
      {
        species_name: 'flabebe',
      },
      {
        species_name: 'floette',
      },
      {
        species_name: 'florges',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB+0lEQVQ4T2NkwAIcGhxYDjQc+AuW+s/AwMAIJlEAIzIvq9dOdlrxocfYDMOqcdWqUOawsNV/a5c7zGdjYXtQG2q0lIHh4mMGhu0/y+Za83YlH/2MVWPoqlDm1WGr//bsVNB4ec/80r8fPKxC6g/Off7y++n/j0x3O1MPFDL8Z2BEdjLMqSAa7I8Z85qvKOgKaZ/cu/KMwhuVvZNU59WeTWf4/f8/AyMjkl/hfmxoaGBqaGj4t337NPXbDKd2/tn3fl5h95RuRt8Abv+fwpwbd+1C8TtcY+gqBubVYQx/0zYw6KoLWp759Uuw/cmP/Rf5virO+/GF8TJ/SqhTA0PDH5iT4RrPnJnJamKS/nv7kSmVggoMbWefrWEQ/K/PYKXozXDn0Z27TZuy6g82/l/GyMgI9hJcIyxkV3TNVP6ofvH2W56rrxluiV0Jd0t0EhaWOS8goOf0//+qz4yMYeD4RYnH//8bmBgZG/5l9ItvMOCyk3uevjqAtzlgq6GyndSLLdeSopfN2djg4MDScODAHxSNDQ0OLA0NB/4smpdo/+b5p907z99awMn49ZuDgbbaH0amkpKqjddggYhVY25XTNVP3leMszJ3XXBL9PwuqshntrRuZQfUhah+RE4ZXl4JEtu2LXiBL+mh2AhVCE8MDg4OLAcOgBM7RiIHAASS2A+0T7igAAAAAElFTkSuQmCC',
    order: 778,
    base_experience: 61,
  },
  {
    id: 670,
    name: 'floette',
    weight: 9,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png',
    chain: [
      {
        species_name: 'flabebe',
      },
      {
        species_name: 'floette',
      },
      {
        species_name: 'florges',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACXElEQVQ4T2NkQAP///9nZGRk/I8kzMLAwPAHXR0jssCq0FXMYavD/i6dtkXQNdAy4Oevb+qv377+Z2RkVLV//38WR0dGuAFwjatCQ5nDVq/+CzKoq2l6kpmj7tw/LD8Yfr5nYLh29bpjaWnugVWrVjGHhYWB1YA1NjQ0MDU0NPxjYMjlC2V44aBSJ1ltY6pldvrx67/SnApMTL/+2SWnxx9B0QhzXk1gg4+y5stlpw+9eGqY4CXOKcwmuPf1boYv1/9dWt2/TB/VAqiNDAyr2FrC7j+X1bzeG9+4oM28wurgaaZjdmac+r9UWRzYJK7/aeteNLWaoaGBiQHsMqhGD4bF6o4xt29oai6tmfjF7qKQwM/NHD/5GfiZxP8+Zb3OLH3q31vjv7dVEjdc+PD/PwMjIyPDf2jgnGGt8dz9QdPwypnV/zlXvHj7IoPh/U8pJjEWkWNTtydqM8SbaXkITFy9Y+JNBoYGJgaGhn+MMD/m6SyoFlZ8XW5gVnpO3nUT56Hbr3V5+Rg57Q3sVu5cc/BTZnFyyf///z+DncnICLaR8T/E/v/Ta1dtZH393I9ZVJjhzSem/0xfmH8VzQlj//Hj+ztOTi4FBgYGsEZwIgEx9u/fz+Lo6Phn3eaNqSLcSrOu7XrGcP3oNYbv/78xpPYEMDCw/GG4fetmk5aW8rWHD59s8/f3/4ySckCGzF8yP4qdldPoy/s/xixsjN9//Pj+gIGB1UpcXPCGtLTYho8fP550d3e/j6ERPU1i48OdiizZ0LCfxd6egQHkdGRvgBQzMDAwMTAw/AOFBwB0wwYaTjagoQAAAABJRU5ErkJggg==',
    order: 779,
    base_experience: 130,
  },
  {
    id: 671,
    name: 'florges',
    weight: 100,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png',
    chain: [
      {
        species_name: 'flabebe',
      },
      {
        species_name: 'floette',
      },
      {
        species_name: 'florges',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACaklEQVQ4T3VSXUiTURh+z7bv21biNmyT3KLEjcYuglLcqIuxgrxcJKyLCAxxBSJpOFYXyRnFcOVFl7F+LPphjMJIExJsYqFkDueaQytM2SKbf1vqNvdt34lvuRFaz8XhPc95H96f8yDYBkIIQgiR7fzWHQFA/o0LCkCEeHkIWXKzszO1FF9gIgSYjVQmNDU1tRgK/fyCcfM6AEEAiDt24sq1p90tracbllaWgaQ34EckCoFPQcdVexv2er18i8WSywt1Oh1dpVCU9g4NrQHApt35sKfepDkVzUiY2cBYRiIid5ouNHYQQlKFMfJCrVZbVl6+Z4DJ8lVikbr/YrO5YZHIskFqnyA6Mvi2r7PxxI4Zq6utlN/vZmp0rZjsilX6x5/dOnl7aJApkSikQoqRiiuoXx8DZ164jnut1nHK7a5hisvR648cKpXu96Xf9DRWeJYXhNTmKFpfAwp251hRih/tdeGBJ/ccQAgClG/yz3L0et15WqR9kB4NdOrcfV/DM+FLq7EllWSvUup/5H4HkV7eufb2+sddXbGtnyAIY8zDGLO1B+9WJsnI/dDnbvlEcGIlvCrTC2lWqJUyfa9fDS/Y7U1WQggPIcQWKxZWbLNdfl9Wpjxm0BthcnKYRWwm29Jmp+PxeEYmk6kAYDHfJ2cSLigIPZ7nNoPBcDMaiYHTeQPEJWK47nBAIp6A6Pc5rNFUTc/Pz/ebzea1ggGKVurocJ1Vqw8czmZz1SybSyWT6Tmapo/K5bJppVLxMpFIfKirq/v2T+f8x6dFutjq34kYY4HRaASTyZTleJ/PJ+BiLhkAeADAcu75DTbZExodfeQTAAAAAElFTkSuQmCC',
    order: 781,
    base_experience: 248,
  },
  {
    id: 672,
    name: 'skiddo',
    weight: 310,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png',
    chain: [
      {
        species_name: 'skiddo',
      },
      {
        species_name: 'gogoat',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAC4klEQVQ4T2NkYGBg+P//PxMjI+M/EBsLYGZgYPiLKv6fkbFh1Sq2hrCwX93dqyxNzVQrZGWE/545d/n5saM39Kzt9P84O5iIs7OxfXry5MXZ9ZsO7assS9jCwMDwkxFk0pY9h5UkRcRv8/MKMP369Z3h86cvDFeuPmJQU1Nj4OFmYzAwkAFb+OLFD4aVKzeuKyiICGaMi6tytLHRy3d2sXT59PHb1xmztp50djS3//Pn93NFRXm179+//L12/da0hHgf/Zs3H+ht2XJ4wdmzW+oZk9PqzunqGhoKCrB8l5YS52Rm+n347t13XxQUpFycnY1YDx469ebvP4YVvLy8fy9cvL2PiZEt9MG9h02McUlNrUysHJlMTIyvvZxN1ISFeRgWLtme3dGalvD167dX27dfWK1vIn/F1sL47Oq1Rxb+/P6DMybGJYwx1DKUk0NFSXTx4s6nkyat3GpgqOIuJyvFcOvWnYrz5y8f9PFxSfjx85fIsqUbint7Z/yZNm3mdEFB3m3gwIECjiPHziyUk5UOExIUYPj27dv1////CYuJiYjdufOQ4cSpy5fFRIQOCAqJxD56+OwtY0NDA1NDQwMoDjmvXLlxXEZGWp+R6f8fPl5eFpCBN248+XnnzhNmRsb/LMrKcgycnCwM5y6eLQPbuH//fhZHR8c/1bXT0uJiA2dyc7H/FBDkZGdiZGXYvPkow4dPHxm4ODlBCYXh4YNHK2prUyLBGletWsUcFhb2t6KiQsnSyuMMB4eY4Nu3T2+zsnDyXLt5/fb16zdYdXS0BdmY/z97//ldTXtz6XG4U6Ojy2SUlKQ6ldXk3W/evH+5vWVW1d79yxf++Pblmbe3rQsDA8MfBgYGlrS0eoFZsxrfgGwE4f8FBQ0C3NwC7hKyQndzM+LO1DVM32FiomEmyM8xydbWcjIDA8Nb5PQKC1WwZpjE////GYuKGgX7+xu+MDAw/IKKMzEwMIACEawWAGC/Kr6raDECAAAAAElFTkSuQmCC',
    order: 782,
    base_experience: 70,
  },
  {
    id: 673,
    name: 'gogoat',
    weight: 910,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png',
    chain: [
      {
        species_name: 'skiddo',
      },
      {
        species_name: 'gogoat',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACrklEQVQ4T1WSXUhTYRiA3/O/s50dp9ty4W50U5zLKRRZeLPoQqSLILCLIBd0Ibiiy/4IzIvorq4qKEKhy4KIDOpCRiBkEaFDY7HNKWfMudq07ez8ft+JIyr23b3fx/P+fM9LAAARj8epVCplxeNxIpVKmQAAp++96i8Hehz55MlvdjwwMBxFSB1VFPVtLreSJezL/86VKcfQwuwdrX9kFE88ulgZ4YNMV999liTPYIwX8/nVYQBARCRy4hhFWWcbuv4RatWhtvbAM4Nk1tLLX05FAYLNruhXC2GXiQygafJ2ofDrIcAYRQRDobDDYpe2EXbGBB6c2IL3tZ2XsFm4CvExobOQXjcQcmBkfCdJMilJ+TRAH7vbqt/fMSMIYsI0DQCCBJfTJZXLxTmPp21QVdU/pVJhAgCkwyPtgX6BYdyD5crvrqPtvilR9HRqmgo0TQNNU/MImUoutz4dDAY0lmWP53LZnA2SAIDtbL29sQQAMUNRFBiGWdU0bc7r9V6WZRkQwj81rRnmOAdTrVaeH/xqT09sHCHzBUURyXpdvs4wTK8oigUAortUKho+XzsDgECSNqo8z4/bDmlJ2nqNED6/vf33Js+zFZdLeEJRtEPXNVBVDRRFxjzvJN1uN2Qyy1EAWCW6u2OPAawbtdrWQmurb93pdF8yTXsHLGg2ZTBN01SUJs1xPGCMH5RKa3ftsYiOjq4fuq4XDUNfFMWWaYZhtup1+TPHsQMImQGOc7gNQ8/U643JnZ3yvM3sgoIg+BuNRsUOPB7/m5aWtguaJp/b3JQ+8DwfRIhMer3+WxzHTRYKmacAQO1uzr6bUCgyTpLkrKIoS5ZlJYrFtSX7LRKJzQBQCVmupzc2srGDiod0sOFw+Eg2m90XbWsio9HBaxhD2DCMT9nsyrs90PoHwEU3VvhNHQEAAAAASUVORK5CYII=',
    order: 783,
    base_experience: 186,
  },
  {
    id: 674,
    name: 'pancham',
    weight: 80,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png',
    chain: [
      {
        species_name: 'pancham',
      },
      {
        species_name: 'pangoro',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACZ0lEQVQ4T2NkQAP79+9ncXR0/IMmzMbAwPDr////jIyMjP9BcozICpA13X331Yeb6a/4r08fvM6du2x85Mhpn56ehisNDQ1MDQ0N/2AaGVetWsUUFhb2d9vRo8riP35MEP7+wUdCW5uBRVqJ4ez56wynT51uz8lNqYIZDtLIxMDA8A9k8+Tpk90jQyJ3PNu/hYHp17M/v97++vdJx5HtzsOnL25cPOfeM7HnErqNDMWO+itYRRTCImpa3t67dlGA7/0LRonnF5lPvWH58MjU37ohKeDaqlWrmEGugvsxN8i2X4qbt+Dv4m3mNQwMlw9l+Jxkf7VFl01I77ckhxDrlesvA132Xt+w34GBxfEAAzjgQE5lLQxzeCTGyCbycOUfhfzc3yrs/34d+MEsysDPyPr7M8tv1mnX38yftO1EEsyZcBvzIxzKdYWEO/afeFaYocHK/u7f34zXt4/yiPMziCzbx7BwCwMD82cGhljkGICFKn9FlPMtVlYG3t+3H70xiSv+bijEIf2HhYXzk5jClctXLq1Nyshq2r9/P4ejo+MPsI2hoaHMq1ev/uuvLdZn7xVU+OPjMwZWLn4GEVnN/1JiMr/dYmLZvn79+paHh0eNgYHhHUgTOCFAGUyMjIz/FixZXfnl6f229w+vMry5sZNBwSqWISClgOH50+cMT589bFRVVbj+8OGTbf7+/p/hCQBkEMiQlpaeaEFhIcP3r18Yf3n/8bukosoDdjY2KxERwRsyMmIbPn78eNLd3f0+cpJj/P//PwMsLaKnYWQ+3KnIgg0NDSz29vYMsIQOS2IgxbBUBjIcAKLnEBrP/4zBAAAAAElFTkSuQmCC',
    order: 784,
    base_experience: 70,
  },
  {
    id: 675,
    name: 'pangoro',
    weight: 1360,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png',
    chain: [
      {
        species_name: 'pancham',
      },
      {
        species_name: 'pangoro',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACiElEQVQ4T2NkwAH+///PyMjI+B8k3TRrkzYL8w++quSw4////2diZGD4z4iub9WqVcwgsbCwsL/z958X+PT44aFf7x/eesGhlyEj9uFPYWDgB5A8hkZkg7aduGghqKBz/PSONa+uHt9R8JtJ4KTHtL6HdxbtFYBrBDlt9eprrDc+XdK+fmrT4+Wzlr/ZcvzcZDEtw5zzR4/fe3zrSr6mjbfrm5fP2L5/+LADrHHmmTOs6SYmv0HsefsuP2bh4LxzcW1dQnDBjAfPP/48GawjatE2dfksY1ef1Kcvn519ee9WK9zGQ9ceSF67cE7/n4iSA+uvP3mf3z67Jadvon9+zbIL///9PPGfgcmJRVDsnoi69ox8P4uNjBvOPYz7/P4VHz8fn/eDB08+5c3bkFplqrhOQkXNmVdO+RfDt89sP149Y/j2+TPD2b27zZdtWHSqYdUqNsbNlx4tkBT4F3/mzJM/H9+/Y/r18+v/H88eMvNKyjDwySgyfHnz9i8b419m9v//GC6cP5c5c0rrjIaGBhbG6TvOHeL7/8728y9OhvN7tr/88/H5GSY+CcXfnFyHRHi5o36/ecXHwct37c/fv8yvnz0+u2jRjOjQ0FXMjLmN06Nl5aTquQRFmG6fPR8twfzk9dc/3MzsrCzRN27ecBOTlDzV39tREBqa0MvKyvhw2bL5kxwcGlhggcPGwMAASiXgkG1oaBCTlZXPfPXqw+LKysJ7s2cvSPz+8/esB4+f2Pd1Nh4DJRLGhob9LA0Njn9AGkBOCA2FpBrkhNDaOkFcVZXvX1hY0muYOMxGGA1Om6AUtX//fuaDBw/+q6+vByVamDjcPLxJDqYKlKoaGxsZGxoa/sHEAPIvKjB/yGZ+AAAAAElFTkSuQmCC',
    order: 785,
    base_experience: 173,
  },
  {
    id: 676,
    name: 'furfrou',
    weight: 280,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png',
    chain: [
      {
        species_name: 'furfrou',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB6ElEQVQ4T2NkwA4YGxgYQPgfDnkGRmSJ/wwMjAccHJgdDhz4y8jA8B/EB9HYNMM1/v/PwMjIiKTIMFSU4fyqNw0NjYwNDQ0gzSgGgDU2NDQwNTQ0/OtjYBDiNddNM+N47Prx+4dfdqcYPBG2/WdkYGCEa2b8//8/IyMj4/+E//s5PIrmrrM9tcTzL5sVw3EuO4YF/7imbN9eV8DAwPAX3blgG2F+2bq8ZT77xlsJK36qfb/97eN/3Zt37j+rrer/ySJgvjVeNQ1ZM4pTGRgYmDeum3Ln+Xc2geurLi/S3Dh5z5nt74vluDns91y62MJ981TL9sl5PxkggQYBDQ3/mRoaGP9d3F1mseN30oofjGzy8crHv+w48LTqmHhKyZe3z+RuHV4ud2V+62OQWkR0/P/PyMAI8nwDS9I027OSHL/VbIXPsX58eS08fF3AbTeTb6b8NzkWrF4dBvIvwsb/DQ1MjA0N/948ni798N6rzCfP3uteuPr+LS+fwIOisolNWAMHJLh//34WR0fHP4sXL0sXFmYw5+P+rbZ+y6PVv3//E580ob4qbeYZ1lnpJn9g8YmcckDs/wwMM/kZGN5wFVZIavd3JO0hKsmB3I6eQjBSFNQklLQKEfvPCEqkq1evZgoLAwcEVgAAwd/KEk0KUJIAAAAASUVORK5CYII=',
    order: 786,
    base_experience: 165,
  },
  {
    id: 677,
    name: 'espurr',
    weight: 35,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png',
    chain: [
      {
        species_name: 'espurr',
      },
      {
        species_name: 'meowstic',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABpElEQVQ4T2NkIBMwYtPX0NDApKWlxXgt9Nr/BsaGf9jUYNWIrBBkSEMDpma4RpiCjNhYsXcv70aoeAv9VXTg35iqv/RJQ0MDS0NDwx9kA5FtBLH/MzAwMLZMLL3oFeCr+/TZ7c8nP6w2bfHccbNhfwNLgyNCM7JGJgYGBpB/RGfOn3Q4wCdQ/db7Kwy7jyydeSHpTf8mhh03QYZCDQczwADmVH93e1tJMdFASw092e+633wf3H16Y0PhhdgbDJcvNzA0MDUwQPyLEjihoaHMq1ev/psc45XyiemTo4G32l0ZFcncL7++WmVbTri+alUoc1jY6r8oGletWsUcFhb2d83MNnNZLaP5+3fuU7/8+YC/Z5L3+tdPPpYXevf1zZyZxpqePus3Vo0LZk80llaQD3d1Dbg1eWdBjIAYr1WsYbMIAwPDJ+SowQjVKVOmCB+8dvDn6mmrvyw91+DCysHY+PXTl4REi+7b//83MDFCEwR6AoCHGszpIGf9//+fkZGRERRVcICRckCKwH5gZPzf8L+BqYGxAaQBRRNGqOJI73BXIMsDAFhDtA9SeVIMAAAAAElFTkSuQmCC',
    order: 787,
    base_experience: 71,
  },

  {
    id: 679,
    name: 'honedge',
    weight: 20,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png',
    chain: [
      {
        species_name: 'honedge',
      },
      {
        species_name: 'doublade',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACNklEQVQ4T2NkQAINDQ1MDQ0N/2BC////ZwwLC2NavXr1X2R1IDYjsiJGRsb/UL6YLYMx82GGs89B/AaHBhaGAwz/GhgQhoI1rgpdxRy2Ouxvd9GaVF0d8xohAXGOK8dOsP/81H6BhflpRer0SydA6v4z/GdkZIAYDtYIc2JT7ix7EX6JBhY2Xod7964yMDx+zcDFKcXw7zfz9jc/XxVNOVB1A6YW5lQQDTapTG3+HCH+Z8k/WP/8ffKb+Rsjw/cTLKzMnL//fK+ac6r7cGhoKDPIz2CNoaGrmFevDvvbEz1tupC4Robgqx3/bz/mZWQy0f/x8ubduUxfWFkefDw3feX5eRdRbIRp7E/od3j8493si9fusUiwSrJKKYlycP8U4fr15fe5tn0ZNtCAA7uOEaapPW+pMfNzjk23T16cNPtR0/RY/expYkKKQeLK8t+mzQnVecDA8AIUug0HGv6AA6eh4T9TQwPjv67SldaM///9Ke2JPNntv/bIx19vOWX1lXXZP3Kz3rp+ZWLbgZQCmFqMUAUJODAYaxjbRV4UEZJWf8552+XfM0Zf5v+sxj9/fsufcbJpLcxWeAKYmTaTNX1W+u+uwmX2v5/92/zk4j3H6TfqzoIM6w5af5qR+T9vyeogDVBqAiUUjJTTX7NO89vnz6zVE+Ovr1r1/19YGOPfzpRFyWw8vMaFEwKzYAEE1whOGVDTkNMlcmpBFkfRCEtFV69qMYLiFaYQlCSvaYf+BwUiTAwAGLcQH/4q3JIAAAAASUVORK5CYII=',
    order: 790,
    base_experience: 65,
  },
  {
    id: 680,
    name: 'doublade',
    weight: 45,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png',
    chain: [
      {
        species_name: 'honedge',
      },
      {
        species_name: 'doublade',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABZklEQVQ4T2NkIBMw4tEHk/uPTQ2Gxv//GRjDVocyrQ5b/RekIXRVKLP2Ne3/DQ0N/5ANQNH4//9/RkZGRpgNHFoMWizXGK59AWloaGhgQtYM1wgyGWRL+Wpf/28ffjPzS3Bl//767/Lvzz9X/GRm/D81adtJZM0YGguXu5qwsPEvVpAR0Pj8/fOzH1/+H/r+7Vt5Z9iWR1g1MjAwgAwBO3Nhb8J1c14xjScCXxlczq7yYuh8vb2hIZStoWH1L5g/EX78z8DIwMjwn2E/A8fUg4FbLJgEnI/+fP8hT/CBG0PJhdOhoaHMq1dDAgwEUAOHgYGRkYHhf3m8RV+6lUnhxosXvp97/tVz8frzB/FqXLVqFXNYWNjfZRO6gsW5/ha+/fVX8tasddE1l86dwBmqSC74v2jnTu44Xq1/O1k+iLib6T4mKgEgBxJIw3+o89E1Y01yIMUM/0EB3MjIyIiaYrAGDinpHQBhfJ4PJDbbpgAAAABJRU5ErkJggg==',
    order: 791,
    base_experience: 157,
  },

  {
    id: 682,
    name: 'spritzee',
    weight: 5,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png',
    chain: [
      {
        species_name: 'spritzee',
      },
      {
        species_name: 'aromatisse',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB0klEQVQ4T2NkIBMwoutbFRrKHLp69T8kif9IYv9h6jE0ohu0f78Di6PjgT8g8QYGBqYGBoZ/IDZMI4j+v4hBnFvFQ9bPcseZFYwMDBzlxqFsnWdXf1zmbOD66vkX8YJrd5b8Z2BgZGRg+A+3saGhgamhoeHf3kr31Ef+qgG3NlzlevH4FjtToMErnfvfBdhL9yVlMTDcg9mKcGoDAxNDA8QZ6/ZVHGe/w2Dx5d03hv/2HxkiDp7xY6i4ujl3kif75LztPzGcChLovZBdLnLlT6veHS6GP5xcf09JXGW7zPvz9Iyg7a4MDAwfGxoYmBoaGCCB9/9/AxMjY8O/vvX5kxk5vuYw837/K/eSgfEb45e/d4Q5/v/78pft4fV3p+eX7DODBh7In3DA2Ntfm3i48OhBoaWMZQp/eNKY/zMznPv1goH/suRUeUFphvod8+sZTn1+CwpUrNFR4mu59vvHv07vDn2Zx+4mUPT/L1P6wr1HZoHiM2z16r/IfgRb29DQwNLQ0PCnNDU04dmrJ2eXbjx+OTPI3+UX23/2uSs2bQ0NDWVejU0j2L/QeAKxcz092Sdvh4QiLLrwphyQydraq/+DQg/C1v4PimPkVEUwyeHKAwDq/sMRWJ8yPwAAAABJRU5ErkJggg==',
    order: 794,
    base_experience: 68,
  },
  {
    id: 683,
    name: 'aromatisse',
    weight: 155,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png',
    chain: [
      {
        species_name: 'spritzee',
      },
      {
        species_name: 'aromatisse',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACq0lEQVQ4T2NkQAL///9nZGRk/A8S2r+/gcXBQes/A8O1/wwMDf8ZGP4zMzIy/gHJNTQ0MDHC9ME0bVrVZ7//+ONT/f3935ENBbEPbJ9v+unbNwa/4OzTSBpXMTMyhv09d2xlJBMLq+uKuq6mmMYK9VtPbz4KCiq//vD23opv33+k7T5w2i4vr+EJXCPI+oaGhn8gky+fWXeD4ddP9a9PnzFIaOl8/8XI8EhUiE/9xPEzjp6BuQfOnDnDCta4alUoc1jY6r8g9vE9S6N/f/s+V0pZi/3EkcN/NZXFmXm5OBnOHTh8l0VBtoSVm2Gvv3/5Z8aGBgamhgYGsE0MlQxqfWIJpw1l7fnENM3+Hji+iZnpxrH/59me/WL4/5HdUyG9MTC9tCF0VSgz2Ma03eY2mtwm+caiPiEPzj3+tORE/S5JZccQSSbhvzyPHzNI6XkwixhzMex8ELfgycGIuo2tKx4zWh6z5PR+qPE01ade8M39LxdvXL+ZHRwefHT9lsW3JYQkVdj+vmY4cOzEFa+AnAfvpU/7rNrfuvLmNKc0xrQgkzSO/8ITZRXMI0r7mzaCXHD3xu5EFgbGOQunT5wSFJ2QzMjF8n7H1qP3jJzN7c4zr2R4cPa3LqO/hpLuxhv3fjEwMNz8/x8cyX9vnNt46MuXTwYmdrF8B7bPCTUy0l01c+Kko88efPohHyDhfOPtAxt4dMycOZM1LS3tLyMj47/NS9t3ykrwufXN2C5jqC0p6uZkev7Vu881jgHFcxJ19fbPv8zsAg5VhgYGEAIBUOg6zp9a1y4lyvfNPazEd9G8Jh1NOekTV6/evJCQ32XoW+/Ltblx8ze4jbDk1RAaytawevVvBgYGcJpdtWoV89zyzIy/n94+2fOWARwGIIChETntghVAEz2a+v8ANkUhvgAf0nwAAAAASUVORK5CYII=',
    order: 795,
    base_experience: 162,
  },
  {
    id: 684,
    name: 'swirlix',
    weight: 35,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png',
    chain: [
      {
        species_name: 'swirlix',
      },
      {
        species_name: 'slurpuff',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABcElEQVQ4T6WSP0gCcRTH3+9OkGyoMKQozIw22yJ0U7QmhRrOybVRiUanXxi1FIStgRAN4UFEulSCZyEVHIRQmWFREbVU0Fmcgt4LUyPFGuztn/f5vj8EWizSIgfNQIJhjgGOV2COEgEEJkEFhQIoPyX/NyICIQTQ4ejqmJ8x+czOw0AqNaF7Tb8Hn28+Njh/KkopMJRWzN/GuNWqsglCMQIDs5ZVw/KLuXMhdyI5THfy2GlaOrZELyxNo8YBVDaA4hroXaOLmp0RTw9kEim49bTJCmj8TsiuhAFYN0CpzoiIDCFEmVrP6QLG0P1wt6Q+uhwsqApJeUg62O+dPnPXxqkDqzHK0TG2GxvXqqWlgvykNWgiffliPmqwCy5EjiWErzfW8iMCSwiUkpsQNOr7vaLYvubyZbwAkK/uBJsZv3hEJFuhSXt871H7IF6J29m36zAHrJuvzPcr2PhNjdCfICJleP6ccByvlO/b2Kzlz/kESYCSD1nRts0AAAAASUVORK5CYII=',
    order: 796,
    base_experience: 68,
  },
  {
    id: 685,
    name: 'slurpuff',
    weight: 50,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png',
    chain: [
      {
        species_name: 'swirlix',
      },
      {
        species_name: 'slurpuff',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACFElEQVQ4T2NkwAIaGhiYGhoY/v3/z8DIyMjwH5saRmTB/6GhzCA+4+rVf///Z2BiZGT4B+L/b3BgYWw48AdZLVzj/4YGJsaGhn+lWx0k3H6wO7kG71x2abtX4fuPz9ntI853nJlpzGqSfhakGewCxgYGBqYGBoZ/c5w05Q1EeGKZvn3k+u/KnfnVkCFA8Nz5rd+uybzkfiW57P7/X1d8N15c+b+BgYmxgeEf2EaYX85H6U34+/BfEqOvFINGqBXv3VPSf151lL8T15C6t/Utu0fFnrMf/zMwMDIyMPyHORVEQwKhYLHkDtvf61VlRMy/8am/mLlnW+SU3MIDYAugmsBORfbwmZkzWU3S03/PXbgh0MhYb93bZ3ceuLi5GTIwMHxoaHBgaUAKIFSNZ2aympik/961blKHmbZw+cvXHxkuXHlZGp7R2LNq1SrmsLCwvzCLEKH6/z8jIyPj/1PrPaeZGspkMvy/+PftV0+mi5f/ML691eoWVs+we9UqBuawMAawZiSNkMj+dMZXZN3hr93/fzIlsDL9ZGD8cfp0dN0PM6hN8LBAcWpamjHrrFlnfzMwWFvYmHwJNBP/HSbP+WNW/pp77TPTjFnTwXIQgKIRyv8f7O/W9ZaJexH7uy+hTPff79r+6MzRUIZQ5tUMqzH9CDMJlCD6ZGQEPj158k7BQYHjgcODXwwNkKSHNclhS8j4xACPpdgPqs8jQQAAAABJRU5ErkJggg==',
    order: 797,
    base_experience: 168,
  },
  {
    id: 686,
    name: 'inkay',
    weight: 35,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png',
    chain: [
      {
        species_name: 'inkay',
      },
      {
        species_name: 'malamar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACWklEQVQ4T2NkgIL/DQ1MjA0N/2B8dBpdnhGkYFVoKHPY6tV/1/pYGMmIsiV+02F6skmbfbbf9Z/TRM/9fXj786+9gRtO7kLWzPifgYGRkYHh/3wHAwE1ef40A072zjdajD/vKXw9pHmC0ZX/Cw/DwRfvSjxWneyFWQCyjBFmyvoAEzNNCc5lAl9ZlNm9uBh+aakwsK19y8D87gnDP1Y2hgvPPmU5rDwx/X9oKDPj6tV/wU6F2coQysC85p5qr1SGl5WknYfyo90XD/5fV8/KKG+55sefd2vcF1/6ClML1ggCDQwMTD4z05hN0mf9XjjDxd9BV2jDgvknU+rnPJwLD0Cot8BOxRKKHCt6my7qGPCqnZgy6d3e9a7qyxlmvVnFEMocxrD6L0w9isZyL59snm27G8xXLBX58PLhn7urm1l+M1jduPjhev3aK/dXQS36D7MRpPk/g6WlUOTvv1PE//+3lFdSlOd4+pHx4t+/vxiZv7PdOva0cy/Dg4pVDaFsYQ2rf6E4FRbUjdb2hXIs3H3s/P//qHN9Y/5k8odRw0nm7O9vjH5yNiue/V8VyswYBg1VZCdMdfY4zc7MYSLC/e2XFt9fppcyP/5aJSuyv3z/51Fr6UG7qfueP2wApTJwiDY0MDU0NPwrNraIl+DmWSDMycnw7x8jw79/TAxM//8w8Jj+ZPjC++MAI+s/v+Tyo5///wcnGgRI0jW0fPn1o5CMsJgXKzu7vfg/xtt/////f/b4uwebGS5XMzAwfA8NZWBevZoBkgBwAGYGBgZ48ENcxsDU0MAAzggAgsT/kCHcgVsAAAAASUVORK5CYII=',
    order: 798,
    base_experience: 58,
  },
  {
    id: 687,
    name: 'malamar',
    weight: 470,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png',
    chain: [
      {
        species_name: 'inkay',
      },
      {
        species_name: 'malamar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABS0lEQVQ4T2NkIBMwkqmPAavGVatWMYMMFBUVZTzo4PCvgZHxH7oFGBr////PyMjI+B9ZYUNDA1NDQwOKZhSNDf//M4FM71+/K/bxb66Pimy/ZJ4ziN1tC9DZGbpqFfPqsLC/MANRNP7/38DEyNjwb9/OCadP3RaQN1F6J/r8r+qKWF/fyDNnzrCamJj8xtT4/z8jA8SJLPP3Xzomzidiev3F03+C/1m/afExW1vY6V4C+T0MaiuKjTNnnmFNTzf5bde+LynXQmHu60+/GL6/f30lSP+PraKh4wdkv8I1wgTXTZki/FJIddOHb/+V+bm5xR+/e321PTtIB+pEkHpwwME1wkKzrW2eqJG+lJ2Ht8eulSvX6okICWg5uzovYGBgAPkPUyPIFGxRgSuBYI3HAwcOMDs6Hvy3apUWIygRODo6/iGYAIhNgmSnVQCeaYcPKaF7EwAAAABJRU5ErkJggg==',
    order: 799,
    base_experience: 169,
  },
  {
    id: 688,
    name: 'binacle',
    weight: 310,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png',
    chain: [
      {
        species_name: 'binacle',
      },
      {
        species_name: 'barbaracle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB0ElEQVQ4T2NkIBMwoukD8f8zNDQwMVzVYmRYHfYXl7noGhkcGv6zHGhg/APSsH//fhZHR0cwGx2gaHRIYOA4sIDhhx5DiswlBgUpBoaaU////2dsbGxkbGho+IesGaQR7Dy9kp3cv07ebuK31/vK+P9fcZrim9u+/pbhoqLSN0Ea/v//z8TIyAjXzMjA0MDEwNDwL7RhldCN7S8e6QaZcGsovGJwl5Nk0NbVZHhw/+4cHV3DVJDmhoYGloaGBrDTQU5gAjnD2lhLTsc6av+Lr6zytorvGK1tXT8cuf1yh5CMShAb45+1se7WMVDNYPUwP0JCk4GB17+ib5eZvp7Fs1dvfk3Nj5BiYGB4a9G1o0rxzrlIQ5FbsWVtCy6ALANrhNkKYttP3nHu2c8/PD8ZGU456urYL3RTkF0+uc/kExv/kh8f7xfkl7XsWLVqFTM8cO6fXy/QsvpZ3RMuwUwOKbGER0kuJ0T6Nl15dv1m0ZVZpXMZGRnAAQOzBO7HVatWuX748Dnr0c3Li1t6J6xzSevg3zOrAqT4NwMDww90l4GdCoorRkZGkB/BIHTVKubVYSipBhYWcDXwBADSvHr1aqZr1679h0Y2hmL0BEBWMgcAqdzEkiJCNHIAAAAASUVORK5CYII=',
    order: 800,
    base_experience: 61,
  },
  {
    id: 689,
    name: 'barbaracle',
    weight: 960,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png',
    chain: [
      {
        species_name: 'binacle',
      },
      {
        species_name: 'barbaracle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACOklEQVQ4T2NkwAn+MzIwMIJl//9vYGxsZGBoaGj4B1MOkUEBYA3/sZnX0NDABNOMqrGhgYmhoeGfrletLvP9xz8uXF9wm4GBgeXwngalu4/eWCckTVnCwMDwm4GBgRGrRguLKiNmO4P+uw9ffbS3VmJL0b7O9eb+6fzIlBXnYbYia2Tc39DA7MBgz8DY4PgnoW7dlQdv/mo7aDMwaH9ZExNavnLpmZkzWU3S00E2Qn2P6SGmvoTWO1+VpRVDBD8w/Dt4u1t79dSy/w0NLIwNDX9QNJ4xTmMVDdY14/7OYPvz7h2XOa95rIPCJVhFOHiYk6svpm57OGFOg0MDS8MBqEaYKY+aJmTJKilP/fng/qVdZ67eKeK0c63z4+V9/ubs3fLcRhWwo0JDmRlWr/4LtvE/JIT+P2+bJyohcZ6BcbuRNIOO7pb0z+ckfn378M/UxOjHkUs39+rIcU6oKko6+P//f0ZGRkZQnIH9CYo3PgaGnKjCOpd6a2MZiRB/E01pw9joCL/AmjtP3zIYqn6Z0FBeWBgauop59eqwv4wODg0sBw40/DFyaSxVVxDqYmP9dsXLRaIwPDh+j56Jifql92Y7nIz1JN5/fFnz+9+vg1d2t55hYPgPdiU4pWg6dOt4mH3lOHnl159j29ouwJzEwMDA7B/bV/3nP3P0k9dfOy7urJrf0PCfCRqPqMkMSRPMG0gRBlGLSAANDUyhV7UYGRhWM6yGhhxENSh9MjA01Nf/Z2hsZAQlSZAoAKHk8xE/E2RvAAAAAElFTkSuQmCC',
    order: 801,
    base_experience: 175,
  },
  {
    id: 690,
    name: 'skrelp',
    weight: 73,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png',
    chain: [
      {
        species_name: 'skrelp',
      },
      {
        species_name: 'dragalge',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABv0lEQVQ4T2NkQAOhoaHMq1av/sfIwPC/oYGBieGAA1PDgQN/GRgY/iMrZUTXCOOvCg1lDlu9GqQBBkBq4ZpRNKYZM7D+l7c3OLfu4K2zDAwfCwIMFBhY2BIevPk1YcOBCx8YGBjgmsEaQU5qaGD45+bmJmYk8OQpK7/C1ebZ2wwKI0ymq0rwZNx6/LF4wtrzfWlpxqyzZp39DdKD4dSW0sz9Fib2DqfvPa4RZ2X05RfgNd97+rDntJlLdjQ0NLA0NDT8QdEYGrqKefXqsL+9G3bKsh7dt+P+00ffVGQU5PglpVfGFObk/f//n5GRkRG7H2fOnMmanp7+u2Vir5WRstrR+w8fXM3OztWBeKeBqaGh4R9ySMGD7f///0yMjIz/Jk2cONtATz/l5ZvXz0NDQw0YGBhe4dUIisPVq1f/LczL6ZMWEy589e7Tr3ffvnvOmTFjH0wOq42rVq1iDgsL+1taWmptaGh05M/vnwybN64PWr1u43rkgMEIVZipcT72lgLSyjNZ/v/lvHP5jOem41fv4HUqzBnGDAysZyGpRMxTheHt9jsMP9FTGM4khyspYvUjmmLGBgYGEIZHAbI8AGumug9pFu5HAAAAAElFTkSuQmCC',
    order: 802,
    base_experience: 64,
  },
  {
    id: 691,
    name: 'dragalge',
    weight: 815,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png',
    chain: [
      {
        species_name: 'skrelp',
      },
      {
        species_name: 'dragalge',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACQ0lEQVQ4T2NkQAOrVq1iFhUVZQQJv379+n9YWNhfmJijo+NfBgaG/yA5sAIQaGBgYKr///8/IyMjWAIGQJpAmpGEQHr+gzU2NDAwNTQw/AOx2yf0mIqLi1iysrJrf/n8+XtmYlpB38zJUXy8fAIpUfHToAYwMoaGhjKvXr36r4cGh4JtWM40ZX1DNw09PeaH9+5//P31x/lbd+6cEBcTLVTTVme/ef1Wa0pcSg3IFRCniutxVzuLn5KQltOSsnBk+MfBfXtBbVqyV2SBg5S6RtP961d+c7OzsH798fPL0h2HFM8eOPAGrNFcU0nV10rv1uf3b15+FpRrnzZ32URPfaEka+fQuYy/fvx+/egmk6gAH/OP/8yfzr//rbtly55H8MCJdTafwsjOqrBo2xEfkGGTpk1eKC8qEPf81Zs/F8+eYWB595CFmZnj7oS1e9QZGBj+gjSCQwnmaSibf0177OVgD33Zt1+Yfi9cc4b1xq17J44+e5Ny7eKdqyA9MBsZGxoaGOvr62HRwbuuM+yep528yLt3H7/PW3mH8/HbX3tmbT3i2tDQwNTQ0PAP7lREvIUyh4Wt/puWEZ+npyw88e/ffwx3X/1h+PD6eceixWsrYbGAoRFmooelUaCktOy6X5z8W3hZ//i8+/jeb9Xa7ZsdHBxYDhw48AdDI8zPwbYGATJ8DKwCWy9svWuhNvPdn39rtp25szE0lIF59WpI4GADyAGGLA8Xx6WRAeQX7devGRsOHPgbGhrKtHr1alCShKdjAJim9hLBGwE2AAAAAElFTkSuQmCC',
    order: 803,
    base_experience: 173,
  },
  {
    id: 692,
    name: 'clauncher',
    weight: 83,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png',
    chain: [
      {
        species_name: 'clauncher',
      },
      {
        species_name: 'clawitzer',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABLklEQVQ4T2NkIBMwkqmPgZBGxoaGBuaGhoa/DAwM/5EtwdD4n4GBkaGhgZFB6yojY9hqkAYw+P//PyMjIyNcM4pGkCZGVJPZezs7u/4yMk4pKyu73dDQwNTQ0PAPZBBcI0xTAwMDU0Ca/wImpsfPt7Fr75M0dt1x/sQJwwnTpl1YtWoVc1hYGNgVcI37HRxYHA8c+NPs7O6RIXtp+x8BzX+LeD2uH7hyQnr7+nWGDAwMDxgYGJgYGBhQbVwVuoo5bHXY3+zYWvMEE4WjvDJqzC/VDRken92wPiY+JgivH2FOyVp1ykPg9ZuG7w9v3kpLtCrU1DR/i+w/FKdCAw/kdFDICTMwMMgyMDAwMzAwnEW3DZtGmBg82LFpwqURJg6zHSXiYfFKKOXgTJFkawQAwWdvD4QH1aAAAAAASUVORK5CYII=',
    order: 804,
    base_experience: 66,
  },
  {
    id: 693,
    name: 'clawitzer',
    weight: 353,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png',
    chain: [
      {
        species_name: 'clauncher',
      },
      {
        species_name: 'clawitzer',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABv0lEQVQ4T2NkIBMwIuv738DAxNDA8J+RgeE/unkNDQxMDQ0M/2DiKBqRFIPE4Zr//2dgZGRENQyucdskFfb3H1mdL97/d7hr3s3P+xscWBwbDvwBuYKxgeHfhm4987+/fj8Krr7+HGwQTOLiIjNFRrZ/x67f/VYaXn1tCcj2VaGhzGGrV//9/9iSc8eGrz3z1j4vX33g9Zf/DAyMjAi3a0qeWy72jJf38xRVH+WCPYH3nVzWn9kNMmB1u2Exw59fYaG1V81hzgY79f//BiZGxoZ/mTG2G8V5/7IX/fjJ9omXw1Rm0j+xUF/28FDjT/NfvH5fljf1fveqUAbmsNUMf2F+hAZGKJsR9/U5vaFysQb8LxmO3z9/YQ//v/dG4iLLY3rezIYGHlgtcqgyMTBAgnvTulP7DZSUHG7euvr1xOU920+9+DZv8+ze7aGhocyrV6/+C1KDEh0NDftZGhoc/0zYfkOd5du33S+fvZN9d2NvsbrohTl5Dds/IcctRjyuWrWKOSwsDGSqowoDg8YdBoZNDAwMT5Ftw7ARZiKSZob///8zNjY2MjY0NMBTDU6NUAOYGhoaGNA1EEpyBJM+AH0Zwg5/UU1rAAAAAElFTkSuQmCC',
    order: 805,
    base_experience: 100,
  },
  {
    id: 694,
    name: 'helioptile',
    weight: 60,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png',
    chain: [
      {
        species_name: 'helioptile',
      },
      {
        species_name: 'heliolisk',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACgElEQVQ4T22SUUhTYRTHz7d7d12mwxhmqZThg+UsI5RlFN2l2GwVFd3bxKHmoJIEUazAXo6ULyHaQ4g+JbWIHNpLIVi4W5Aw2yg1ES1phSux5diwzLHdL+7SMaTz9PGd73fO/zvnTwwGg9blcoUAAHieZyVJiijnjeF0Olmj0Rhpb2/fnqLR7CZmk0ngOO580O9vHRkdnRMEgXE4HNFEEBE5RAwDQJLdbveEQqE2ojy4IIp2tVpdteDzGV9KkpQI9/f3M6IoKoUUaJzjOCqK4p4YqITFYhmgRHXuyYt3meCf/g4gMIh6iogyABzu7u3tMRQV6d1jY82X6+u7CCKq1pJwqdIyyUH4w73Hg5X3a2s1F/v6/mytOFnVebrCrs/Ph5lFv++6IOz9ChCIdUSeZ1GSIoNnDxVkpyYNzc57bdaRz8NK7kFDnUdfajqwECXw3vvlxM2WliFFfgykAIQA0Kf7Ia3MUDIXkhk2a3PZzoG7mJLb1jSzWlya7F5Y7LhaV3eNUqoihMgx0Ik8a0Qp0lN9xGpIjT4soKsgBz0uXzhrWbZ2lb4Kht/aqq1HAWBl/Wv/hoOgAgRlCPC8sfpZ0TadmXLJENiSCaNMyhtbTc0pAAgkTBjIusxbDeW78nYMr0SSumwZadrbKwwDE4v+idbmlsJYbUQWEePmIOs7qzpTXlGcG+rWZZTnBIIyBJYmgUZ/LXW+lhuaLbIDMeYoRSFVCsX3mJPDa8x5Ur5PbdLOfvIeNx/MbNRpNZvcH5dhev73jalJ953E1cXBjd5sEve1qlj1FUKYbx2PxswA8PO/HZVLQQCV/gdPptLT6ZpfybGSwmJd9rjH4QDFdnGpfwHGyhIilDcV5QAAAABJRU5ErkJggg==',
    order: 806,
    base_experience: 58,
  },
  {
    id: 695,
    name: 'heliolisk',
    weight: 210,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png',
    chain: [
      {
        species_name: 'helioptile',
      },
      {
        species_name: 'heliolisk',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABCElEQVQ4T2NkIBMwEtAHkv+PTQ1Ojf///2dkZGQEacKqGatGJE1MDAwM/7BpxtAI07R798Ggly+fOz99+mx+eXnRmYaGBqaGhgaQIWCAohHJJoZZs+bue//5473y4qIUZHGsGkNDQ5lXr179d157+dy3PxmTuBm+fK/pmxL47hPDTpgcVo0w50ysSl33lUU4kPX7c4bF24+mXLpyZ66DgwPLgQMH/uC1MSqvRlVLlOPY6zevRA4cv6p+8dTeW3htBJkWysDAvJqB4W9HXpLN159f5n78/idj0qJ1+1eFhjKHrV79F6uN2CL6/38GRkZGzESAMwGA/FtfXw9KBaSlHEJJmFBaxakfAFfMgQ/xOmcVAAAAAElFTkSuQmCC',
    order: 807,
    base_experience: 168,
  },
  {
    id: 696,
    name: 'tyrunt',
    weight: 260,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png',
    chain: [
      {
        species_name: 'tyrunt',
      },
      {
        species_name: 'tyrantrum',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABP0lEQVQ4T2NkIBMwkqmPAavGhoYGJklJSebnz5//b2ho+MvAwPAf3QIMjf///2dkZGREVwhShyKGohFkU0NDw79p7dMEZUQ+xz/8xP4mt7hgCdQ2FM3IGuES/RUZu4XF5F0+fnrLsPnMy/xdWxZPamhoYGloaPgDczJcI8y2meUd/EKawneYufmFmX59Ynz08e/KvKz0iFWrVjGHhYWB/AsGCI0MDUwNDA3/GBgYOJ7dvndNQkVB8cWjhwzHjhybFRIdnf7//38WRkZGTBthJp44cVZPV0/z4pfPnxg4ObkYju7b99AzIMCMgYHhFXLAYTh1//79Onx8PMGsrOz/3r179+Pz16/f9u7efXzChAnnsGoEuRtHVID9hC6HEY+gQPLx8WE2NjYGx9uBAwcYDh48+A8UTciJgLpJjpj0CwAllZAPkWj8iAAAAABJRU5ErkJggg==',
    order: 808,
    base_experience: 72,
  },
  {
    id: 697,
    name: 'tyrantrum',
    weight: 2700,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png',
    chain: [
      {
        species_name: 'tyrunt',
      },
      {
        species_name: 'tyrantrum',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACJ0lEQVQ4T41SXUhTYRh+vm2npLV2MSlXsTDNwJAhyxAh2qAV/ZHkJruJUZlUlDdeVKT5ggmpdFFeJEYig64mC6SicrDWj/3Q9DRW7KJaJFgZkyKHy+PZiU89Y86bvrvved/nef8ehv94CpGGEWVyU1kej/+VXExRFMYYU7FsPJ8IVZ2INFyAiDLtDQ2XJjKzr2/2+4Ic51iWuAjw3CUtvT9FZz8L0z2HEi+O4N7Lu7ZGmxDpi0hMVdhc59xy0lR8p2ZwpG7XVGy86czhmlKYy1wVtd3ffyQKA/Hg6BV52gn/oykAfOaF0rCtLLlW7vl4YKvjyy/IR6tbTqRetfReLCnd5pakdFocGy7wio+P/RwRB8hu1/FW1YF1/ceb3roc9VYxmfjUOv70+vmqg+3myb/GVV9T8rvoc2195LYTSQTteURc3e0a9VTVVoqFKUzo09hktGCjziAJvogwlBj2XYgFvQoUxsCU+eW4Aa0fkAE4blk998v27CwQ1/yeswgGYUNSrxjXGdnY5AfR09W6H8C3+RnVmzUCQh8gAfA+bO4cyMiQounEzN6ZCv3aHcXaZ/EwPD2ddgBht9utzb0jv1sGBpjOma2x7o7eolA8SqtTK8LCeu2DwJPBcFdgaN9iIbbEAFzJ7/fL2F5eedlafcNcZGk+3UFvAJgAzAL4oy5zmXMI0FCOCUIU0jnIMadWUi25jLhgM2jaQAC1KXyDBNIQiPs16+N/V7rc3vIzm5QAAAAASUVORK5CYII=',
    order: 809,
    base_experience: 182,
  },
  {
    id: 698,
    name: 'amaura',
    weight: 252,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png',
    chain: [
      {
        species_name: 'amaura',
      },
      {
        species_name: 'aurorus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABfUlEQVQ4T2NkIBMwoutbtSqUOfSa9n/GhoZ/+MxE0fj/PwMjIyPDf7CG/wyMDAhZiBgSgEvBNG2fVWz69+XHLz61c67D1DU0OLA0NBz4g6HxPwMDIyPIDgYGrhk5vrfkLl3geWtlcUxAQpTft2CaCwMDw3cU1zAwwB0Dsvk/w///jPUpCWd52bkM37L+YuD4dG+lq6dB4sNbHwwja+YfB6uBAoRTobbOqE7fIa8o537x5sOXFd2zVKrT/Dyl+dirs3pWGyDp+Q/XGBoayrx69eq/xgwMcuqOepe+/OfhZ+Hg+nX/8fPF569eLWJgYPgEdSHYVuRQBTtXKzSUTfjhvetiQnyiP3/+4f354+eU3cdP5aYZG7POOnv2N4ZTV4WGMoetXv23I92niIWNKU5YkPfrkdO33nBycWyfsvbwDJg8hkaYgK+xMZePixLrkxdvVF6++3R91uaz37AlBIyUg0URJMRxJQDkRAFSFRYayrR69WpQssPQhB44JCV3AC0wjw+gwQukAAAAAElFTkSuQmCC',
    order: 810,
    base_experience: 72,
  },
  {
    id: 699,
    name: 'aurorus',
    weight: 2250,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png',
    chain: [
      {
        species_name: 'amaura',
      },
      {
        species_name: 'aurorus',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACaElEQVQ4T2NkQAP//zMwMqwOZWIMW/0XXY6BgYGRgYHhP0gcxAADkIYDjQ7sjg0HfoD42yapsHvm3fnN+J/hfwMjA2MDA8M/ZIPAGkGaGBkZ/s+c6cJvxfWngOk/A+/bTz+W2eWcOIdmKwcDAwPYYLiNp1KNs77MvvdBZ6V2P//j/2LnSp53Mrtzf93x9/eGJc+ZjSq8pbwZWZiOJrbtnLhqVSgzXOP9hbYXJNh49B8xcPz9fP7THyOdv+xPf/37GJ7yesYxhusL1vdFWXNxcXi7Z8wL+v//PyPjf5DusNV/r/foBHHIKq298lv379fXzxns1K4xv3nOlqGXcu+VmynPn7kT0/bsOXKJP7FswQuQSxn/MziwMDIc+HNBRKdY5A1jz7Fm2d9/zr9m0Vn3gfGYIufRVhFmTu7T14tuMPw4iBwejKsYGJjDGBj+rmGQ9zKqltjyk+0PAzM/23/GK78YF875xvgiRprBTIkzJK1p89qZM9NY09Nn/QYHTkMDA1NDA8O/1ipzcUdNtuuim78K/tdiZ3itxPivofUGg5ubAZOWuoi9d86qQw0NDiwNDQf+gDXCouLTfl+R5QdepRyZ/7pC+dEPZsFCUR5GFqYmARYxX0aWvx2xzXtW7W9wYHGEaQTphtkKYs9qCdn19duvj8JszCFxDevljyxOrXrz4j1TQOmatDMz01hNYE6FaGxgamho+Le8L8JEkJv9IBcHK9ebV28XBpWuT1g7MfrEr2/fZ0RWrluAYSPMua35zuIs/xitBXk4hNPat8xnYGAA+YefgYHhI3q6RUmroGSHpgCeqNE1AgAcIP66DYqMOAAAAABJRU5ErkJggg==',
    order: 811,
    base_experience: 104,
  },

  {
    id: 701,
    name: 'hawlucha',
    weight: 215,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png',
    chain: [
      {
        species_name: 'hawlucha',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABs0lEQVQ4T2NkIBMwYtO3alUoc2hoKMPq1QwMIJqRkfEvujoUjf///2diYGBgYmRk/IPFQJDa/zBxuMb//xuYGBkb/oEkNi/18eLm0w/7y8S5XlLWT+z23bOrAwMTP/z//5+RkZERrBmscdWqVcxhYWF/L50/78/4/4/f+1dXgo2NbPhv3rzxkJFLZvXG4om1DQcW/MDQCHIiIyPjv4MH91qJCUtpX79w9q+SHM/cL+/PTrDxby68uj+UR9tx9Rdk58Od2tDQwNTQ0PCPoZuBO7aUwT14SfHa5wyMk4QOXH/0zOjH+sKsvff2NziwODYcAPsf4UcGBkZGBob/Z8rSOwRufit/qHyX4Sc3C4PRBQWGT+Icd+58/ujhtXLl3f8NDUyMDQ3/MKLjYkxyyV+GL3Z8/7k9/v/48/Imw4tLikLyL169/tzsuGHFA5jLsMYjyCmrK2Ic1jG8aVrO/UeMgXWPOUMFw8eGBgeWBnSnwjx+tSGUTbth9S+hJZ5a+o9+ZXE8/X1u+9RD8+BhAFWI3cb/DIwMjIjIxpa6cDqV4T8Do0OjA7PoVdH/q1evxp/kSEnvAA7xsw/8L4C0AAAAAElFTkSuQmCC',
    order: 812,
    base_experience: 175,
  },
  {
    id: 702,
    name: 'dedenne',
    weight: 22,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png',
    chain: [
      {
        species_name: 'dedenne',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB6UlEQVQ4T2NkQAP/GRgYQUKMDAz/QdR/kAAjmI0CwIpgAKIGomhVaChz2OrVf0Hs//8ZGNE1wzXCNG2JClJiuS/4wePY3K+blznpC/Bz3rb12foeXTNCY0MDE2NDw7/tISHOIr/ZQ15Ivzu+nOf8Yx8NDWm5/3wbbZI3fUbWjHDqfwZGBpBfut24TZ7yeNb/Y6368fur0qlXW0y71zLchngb4VcMjTPT0rjmynxfcerJvWeT9n9bIyPF5/XzG9PWyNP79/5naGBiZGj4Bw08ROA0NDSwNTQ0/PIoMkgQ5dMtWfzxUyRD/8YrM/29dNI3bruMHHgIP/7/z8TIyPjv1q076deu7WviEJAUkxQTZ/j/dpuvgW3DljNnzrCamJj8hlkD19jQ0MDS0NDwZ8XqpREf37yaqK2mI/Dj28uzfPxs7NzCen3a2hpL////z8zIyAiOIoQfQ0OZGUDxZsZgku9Z6GaoohJ5bHp/QGDr5r88DE9kbB1dj/yHugpFY2hoKPPq1av/OpSFZRx4euoCA5dwgyOHXPv+yesPQhIBxCsYTmWARod5rr+W+j/+l3d5v8Y9ePXiwtN5R/fPnDmTNT09He4/jFBFjyuw6bD4xZdWwXINDUwMDQ3/Q1eFMq0OWw1yGkYCBykDABXCzQ/ALsM/AAAAAElFTkSuQmCC',
    order: 813,
    base_experience: 151,
  },
  {
    id: 703,
    name: 'carbink',
    weight: 57,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png',
    chain: [
      {
        species_name: 'carbink',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACLUlEQVQ4T2NkQAMNDAxM9f8Z/jMyMvwHSf1nYGBsbGhgbGho+IeslBFNH4gP1gDWtOo/M2MY418w+/9/RkZGRrgcXOPMtDTW9FmzfrdmFntq/nlWpsLGy/lAWI1bTEb9zvanZ6IbGxu/NTQ0MMFsBmsMDQ1lXr169d9XDAw8G9PTrpuFecs8f/SEgfXcOYbvHMofbrDwpJa0562BOgTsKkaGBgYmhgaGfwx+DCp9dh3e5szcE5iNdf5+vHCIWVFAm+HM0zeLOiozGi4xMNzXzfQWvDx963sGBgZGkKdZGhoa/uR2F5YKsYsK6N/8YMPN/sOI98O9HffZtf6+lVOZk1eZtsezNXHC9x+/bhxoXjrDocGBBaQR7O6O3hYrCSmZSklByYubT25LZRaUaLYTkmfU/8yxUiUz6Kd9ZcQ0Dnbu3J0Nc98x/GdgBLkXHpLKpd5HxPj4Dv349y9C/C/rhiBJy7N7vt/0ePH1vdv3B29STs/dvtk4LY317KxZv8GBA7L6QMOBP3ZVEfUSGnINt2/d/X3+wYMqBzPDIDEpccu3N5+c2Vu90BQ5SiDR8Z+BkQES4ewurQnXPn79Isfyh/GktJa89Yenb06+f/jW5+yszW8wogMcJatCmVeHrf5rnOar8Z7n9ylODs6/omychQcali1hYGD4A4syWOJATzlgcakU+6Yff37/fbfgWCNyPONLcnD/ghRpNYSyXWtY/Rs5GeK1EcnP6HkAzgcAoITuFLO2eL0AAAAASUVORK5CYII=',
    order: 814,
    base_experience: 100,
  },
  {
    id: 704,
    name: 'goomy',
    weight: 28,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png',
    chain: [
      {
        species_name: 'goomy',
      },
      {
        species_name: 'sliggoo',
      },
      {
        species_name: 'goodra',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABlklEQVQ4T2NkIBMw4tEHk/uPTQ2Gxv8MDIxhoaFMq1ev/gvW0ODAwsDg8I+hoeEfsgEoGhsaGpgaoApCG6byXL64jv3G+r1vwRr+MzAyMDLAbYdpBNEgQW4vN6cSbmYm3Uen9khLvGVI3lgcqMHw9w87w4TNyxkaGphgNsNthNmW7ma62NzKJkbDwZdh0aGte2b8vuui8Zlx5o0J6zMcGhxYDjQc+ANyAFxjaGgoM9Rfhvu2bT0nIC/712RzL3PG868MrI+/Ppq47qAFA8O35wwMDEwMDAz/EH5E+IGzeELLpbufnqlsuLz1b8onJeann9683H78siUDA8N9TI2gAGxoYGloaPhT2VE36dbTRxw6fJJBv79/W6MsISn+8R9DTVFFxVWYl5BDFRZADIf6eydxs3Mue/f/b+2F6zdzjLhY/C/9+raycMKs56DoYmRg+I8Rj6tWrWIOCwtjdmNgYJVjYOCZw8DwEhZ/ME0ogYMrBYGcpqWlxRgWFgZKABjxiK4P7JIGBgbGBgYGlBQDU4gvreJN/gBX/ZoP5c/JLQAAAABJRU5ErkJggg==',
    order: 815,
    base_experience: 60,
  },
  {
    id: 705,
    name: 'sliggoo',
    weight: 175,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png',
    chain: [
      {
        species_name: 'goomy',
      },
      {
        species_name: 'sliggoo',
      },
      {
        species_name: 'goodra',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACK0lEQVQ4T2NkQAWMoaGhTDAhbW3t/w0NDf/Q1IC5jEiCIPZ/bIrwaQRrcnNz4+bl5q78/vPnk9+MjJKMf39/2LVjV79DgwPLgYYDf5ANANvo4ODAcuDAgT/BwcFhbz58aOHh5BTi/v793Nvvv29/4GLrPLtnzyOo6+AuAmsMDQ1lXr169V89GU7z6IyqYxKiIkyH9q5/P/fp/cqEo9wrN/nz8b4T//qCYdbZ3zBbwRobGhpYGhoa/oSHhqb19/bN/PTu/Q+7ja0cr37+myjNwvrwC8O/Vt6mFTJPGBjeMTQwMDE0MPyD2LhqFfPqsLC/IXmJVlaGpkeffn//r/f9ZSbeS0+v/pHk1/7OwniAoWezI0NDAxMDNJRhoQqKAlCwCzKkmV5lEBCUtP3J89fm839mUSEBhh8//+yrmrzY+T8DAyMjNOTh0dHQ0MAEirOa4pTdDKyMLgby8n///fvDyMXBzvTjz98HIek1mgwMDD9ggQTXuGrVKuawsLC/87pKl33/+jWSi4vz74PHjz59/82wi5+Py2fvvqP6+87euQuzAK5xf0MDi2NDw58ZVWXrX337cYdLXISLlYk58Eh5tUvsvDmH9t25ojuhbcJzDI3/GxqYGBsa/m2Kj6/7eOXmFu28zISvjIwctnFxdcfr60osGxpLGRgZUeMRFjf///9nZIRKdjMwKJYyMLxgYGD4TiitguVBNjdC4hacuBsYGJjq//9nYGRkREnsAPeF5w/USc8cAAAAAElFTkSuQmCC',
    order: 816,
    base_experience: 158,
  },
  {
    id: 706,
    name: 'goodra',
    weight: 1505,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png',
    chain: [
      {
        species_name: 'goomy',
      },
      {
        species_name: 'sliggoo',
      },
      {
        species_name: 'goodra',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABKUlEQVQ4T2NkIBMwkqmPAZdGxv//VzExHBBlbDx48F9DQ8M/dAuwaQSJ/UdTiCGGrhGu4OjumZnMTCxyFs7JbQwMDJ8ZGMCugxuIovH///+MjIyM/318wmavnJuZwiUmzrBpxbZV/pEl4f///2diZGSEOxlZI9zE5fPbb+nrKqtKigsz7N53/mJYfIkB1OlwNehOZWJgYPg3pa+87vOHv41cEowMV97fzZtdvW5y6KpQ5tVhq//C/I6iMS0tjXXWrFm/bW3tc3W0zCb9ZWdkOPBib+CtVWc3ODQ4sBxoOPAHq0YHBweWAwcO/ImLCs1n4ZBI+vHl15t715/OO3F5y1KYHFaNSCHHz8DAwMLAwPCWQYGBg+EBww+axSOyS5DjDT1B4ExyBJMwABJOaQ/l2GohAAAAAElFTkSuQmCC',
    order: 817,
    base_experience: 270,
  },
  {
    id: 707,
    name: 'klefki',
    weight: 30,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png',
    chain: [
      {
        species_name: 'klefki',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACcUlEQVQ4T32SXUhTYRzG/+85O9ucU0E2ncY2w/UxP6oZqRiEdSO5LCTEYmIoOW/KCAyhq9e8iMQg+xAbfWl1IQPBK0UND2FSNJPKETodw7HWXBsum1v7OG9sdESG9F7+eX88D8/zIPjPwxhTGGNuty+IPxJCEEKIdHVdLz5eqes9W9/cAwDvMcZCjHEkFU6CDQ0NtNlsjgOAdmp6zFJVVSF5+uyVr+NKZzUALO4GJ0FerbGxZbD2dHl7SYl2iwAl6b41MM6k0ZOjI68HASC8QwAQYKAAA6dqg+Kj8QuWAqlCrDuyj9gdHs7lCdAMQwNw3I2BgXt9/+wmxAgyGo2MyWSKNjVdrqZFghmJWMqFgltUtiwbCBeLh8N/QKHIo70/128/vN93kw8saRVjnOnfCE0GAoGKujMn4lKplJ6dXQCPZwPsaw6uaL+Gk8nkAqfLeenJ4wfDGGNBEmxubnvDiNJPqdVZgY5rxkwKUcj9Yx0sHxbIt0Ur+rrkjJUd1gn8ft9qf3+vJsEkQKqmts5is7ti9fqTpN14sVycJuZi0QhZs69S7+YsaHzmM6iV+VGOACOgBZ0vh0x3+R6FBoMhR55bYJEwkVxdqTr63e1j2LkvQIsyQSJmYMVuh7z8PRCLhF+MjY60oB0Ry43tV21iSUbW6orVv+T81arKySqtPFbWQwiJzS/Me38Hg24hxZxn2QlH0ioAcCDMOHhAU9itVuWFHE7Px2Xrp0d6/bma0kO6ifR0Kdhsy8+Hh0ytfCW81WQ3qbNSKjWF2iLtHVrI7A1ubg6/Zaf6eYfbW00EhTFGVqsVeb1exLJsYtypA98W+AvR8QyjRIVg+wAAAABJRU5ErkJggg==',
    order: 818,
    base_experience: 165,
  },
  {
    id: 708,
    name: 'phantump',
    weight: 70,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png',
    chain: [
      {
        species_name: 'phantump',
      },
      {
        species_name: 'trevenant',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB2UlEQVQ4T2NkwASMq1atYrp27dr/hoaGf1jkwUKMuCRA4qtWrWIOCwv7i00Nisb///8zMjIyMqxYMs186879LxcvXn0fKvYfXTNMI4gGSbLs2LFyuoa6csqvX78+Xrt6tS4gKHXS/v37WRwcHP4yMjLCDUDXyHjx/L4LCgqyev/+/WW4ffvOUzMLH3kGBgawc5FtR9fIUJKfuVxPXSVC01iT4eqli7MSUivT162ZF//sxYstOTlVb6Hh8h/ux/37G1gcHRv+dLYUZxgYG05XUVX709U9yWTmzCWXr109/PP5i9dpzs5B80HOdnR0/IOkESKwbOmkhQ4O9nFcXFwMF85fOsMvKPhMRkrUb/HStaZFRQ1nYCEN1wgT6OuuCjM1M10uIyPNKCIqzMjOxsqwaNHSaSlpldnQkAUHJEp0wDTPmN602cXZxefhwydHP318a83IxFAUEJTZD3MmSgJoaGhggqQUXpHlixvvWFhZ8l+8cOPYlm3bdKurinkP7j/qkpBSvBfDqQwMDEwMDAwgjeotTWlRIqIiIv///Xu2dv3eV6GhntZ8LP+qIpPLn8EsQE9ysISANSVii0dkhYz79zcwOzho/V+9moFh2rRpjPv37welmH/IKQcAMBHaD4aVXb0AAAAASUVORK5CYII=',
    order: 819,
    base_experience: 62,
  },
  {
    id: 709,
    name: 'trevenant',
    weight: 710,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png',
    chain: [
      {
        species_name: 'phantump',
      },
      {
        species_name: 'trevenant',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNElEQVQ4T2NkIBMw4tLX0NDAVF9f/5+RkfE/NjVYNe7fv5/F0dHxD0gDlP2XgYEBxQB0jSA+WEFcXKH0qUUPftxgWP8WaiNcDsRH1giTYJo7d3nz58/fklhYmD/8+vVnT1FRShkDA8N3qHqwwXCNq1atYg4LC/s7ffoiHQV5+cs/f/5k+PeHgYGRiZVh2+YtZrMX9J6GqUG3keH/f1BYMP7va5gxQUJOIv/z++//L1+5fXDK0zofhl0MX/8z/GdkZIAEFoofQ0NXMa9eHfY3I6NAQU5WbT8zC4vcrauXLecumnyqoaGBpaGhARxgODWWFbaYKKopnubi4mS4dOmMW29v225kZ2JoRI6vxpqJtZ8+f2XsnVjVRChUSUpDOFMOyL+hDAwMYavDQJGPAXBqJGQ92RoBP6d8D5eJac8AAAAASUVORK5CYII=',
    order: 820,
    base_experience: 166,
  },

  {
    id: 712,
    name: 'bergmite',
    weight: 995,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png',
    chain: [
      {
        species_name: 'bergmite',
      },
      {
        species_name: 'avalugg',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABx0lEQVQ4T2NkIBMwoutbtWoVc1hY2F+YeEPDfyYGhkaGhoaGf8hqkTWC2P9BkiDF9vYHmF6/fs0UFhb2CyLWwISsGaYRrOnixYvcbz58sHa2t98FM33PoT1aL168Y44JC7uMrBmsESbQMnWe7J3X/x4t2Hyk4vyC/HPrN+9UOfGGp1VXnCO/tzxlcUPDfpaGBsc/ID1wp/7//5+RkZHxf27Hgv2epmoO1saaDFsOXmA4cOne0dm1yTZQF8C9A9fY0NDA0tDQ8Gf6nIWGX5lZznDzijKcu3uXQY2ff4e5iXatnYn+OQynwvwDszWpe/rRv3/YrQ4/vPPNV82YK9BM6paDjaU6sq3INoJDbeKM+ariIiKr3n//Y7D7zD0GeRkxBlMlvoNRwf4OeKPj////TKKhFe1fFQzKvt85f2dWqKWKspzoMmdbm+j9+/+zODoyogYOyLS0tDTWWbNm/TYNyUtkZmOfcWLZxZKt23O4WVg4ud1dXWvPnDnDamJi8vv///+sKCkH5vmKhgaFV69eKTKzCzHP7m85yMDAwM7AwPAFGgv/////z4yR5GABhCUJw6MCJR6RFYI0h4WFMa1eveofclQjqwEA/anGEZs5An0AAAAASUVORK5CYII=',
    order: 829,
    base_experience: 61,
  },
  {
    id: 713,
    name: 'avalugg',
    weight: 5050,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png',
    chain: [
      {
        species_name: 'bergmite',
      },
      {
        species_name: 'avalugg',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB+klEQVQ4T2NkwAJCQ0OZGRhCGVavDvuLTR4kxogu0dDQwNTQ0PAPIv6fkYGB8T82zRgaQYo0fXMCBPiEGI8vbVpP0MYzZ2aympik/w7Maop79fIFHxOPrBUPL9/17VOym0NDVzGjOxts4///DUyMjBDnHT9SeUnid7uZbX+3moEC17YtQq8VGBoa/jQ0NLA0NDT8gbmA8f///4yMjIz/b1wq9H/1XSHtxWdmgVDnM86MjCLMvnnKrz++/uBzaHnlPogFDIyMjAxgPzPCbDu53y358ffEOez8vAzi/zcsM7OZ0xTRufYKs7DAJofdzjV/DCIlMyuXgw0A6QM5FYTBpixZtvH6t0/Pl368n/Gai9ut9opBhzCbjCyr2sGKf+/vHWF9+EGia/big+UNDQxMjLDg75/eryDEK3lp5v4nusmKqyNZeWTarztMY/gmKMYgfnU/w9cVTgyvWdwqZ83b1QHTCPb0jDmLfNnYWOYnxUWJzGyz1PjwRWjSUdG0V18FBK/9+fThs/bJuCvTln3YD3fq/v37WRwdHf9Mmjon5x/Df++C7FRPqCQLAwMDPBRBYiCbGhoYwKEP92NGSYnYn9+/GedMnPgS5vzQVf+ZBd+fZWJgOMsgtTz9f8MBhEHQlINIWrDoQQ40vEkOpKGxsREUWNB0iiuxQcQBBHXXFWnoWR4AAAAASUVORK5CYII=',
    order: 830,
    base_experience: 180,
  },
  {
    id: 714,
    name: 'noibat',
    weight: 80,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png',
    chain: [
      {
        species_name: 'noibat',
      },
      {
        species_name: 'noivern',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACMklEQVQ4T2NkQABGBgaG/0h8vEyQYjhoaGhgamho+IdLB0je3t6eydHR8Q9Y46pVq9jCwsJ+gdj79+9nOXjQ8V9DAwPYAJhhq1atYg4LC/sLMxSscf78xbYqqort58+dc87Ly/sJ0eDAoqUl+j8sbPXf////MzMyMv7dsWOHEBsbR8fNm9enw5166NCxU9zcPJzr5+v5mVhHiAVErjgJMqCzIUmqvGHeMwYVT76La7tuPnvxQsTT3VWcEdkJh46c2svF8cf45/t5Z7ZvvDtJVlj1mKYt85QXn7UPqio5Fb9581LJ1dlRhYGB4R5K4DAwMLDsWbXg+7ePZ15eeXT149cvTDLWxgrfVLQyJO5//PvU3dHCkYGB4TYoHBiXRdaLiAqLGN+7/fxS+o62V6tnuhX+/CEq9uzNlygGtl/SEozSf6Ul5JifMt9dFJe0MP7MmTOsJiYmvxlXJbS6Wqsb7vry+RvD/UfPpnssycsC+a2nMHTtn3//gwRVfjF8+/59twQPW3Nk1pYjDAyM4Lhm7PDJk7NU117By8bz6MXjt8GP7j0/9Fvq6xImsZ+Tf91h5hbX5ma4//E5Q/W8JXIMDAyPQxlCmVczrP4L8iMTyAAGBgZQHIlNs62s+fP3t9qXY/9nSSR+Yf30jTn96fqvRw+FLuw+uZThE1Ttf3jg/G/Yz8LY4PiH1CQHTqcNDA1M9g4MTK9FtcD+CNW+9p+hof7/6tDVTGGrEakG7EcibMCa+AEBTOlYnL5fawAAAABJRU5ErkJggg==',
    order: 831,
    base_experience: 49,
  },
  {
    id: 715,
    name: 'noivern',
    weight: 850,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png',
    chain: [
      {
        species_name: 'noibat',
      },
      {
        species_name: 'noivern',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB7UlEQVQ4T2NkwAL+/2dgZGRk+A+SQmYjK2XEog8k9n/atArBX7/esBUUzHmJTTOGxjNnZrKamKT/PrS7peDf3898Dh6dTTAxnDaGhoYyr1q16h8jI+P/Qzurt/74+uq/W9BsH5AGkNzq1av/wjQj28jEwMDwDyQxrS90rZa2SdDThxcYnr/+uLmkepsfVANcDUwj2F9+rn5Sh888yxcV/vA9I86v/t2H7/db+hZUGGgZ6wly8Szef2bHTQYGBrBamEaYSRrGFqrddbm+3N++czoKCX398vo1Y05Men8UgwbDGoYbDLNhTkY49T8DY5vn2iYe/Wtexi7fjC5dYvprZPib+dKl5wyHFyufMNfVO5C9NaiV4TXDF5CtYI0NDvtZGg44/ukKWzlbSJQt5Yvsrt/CfHws7z99Z/j0nJFR+XcUw7N3944Wr4i0+f//PyMo8MAaQ0NXMa9eHfa3IbRHi/2PzCpGjX2iOrqfxC5e+fPzxzOz7aK/VKwffrge3buteneDQwNLw4GGPyjxuGrVKuawsLC/U6ZMqfRx1mo7cvb+zpiYZI/c6Gi+yUuXgpwIDnUQQNHY0NDA1NDQ8O/EiW183Nzy/R8+fGu1tTW9hy1ZYqQcmGaYYqifwMmWUFplAClmYGAARxEoILDZCAAduNYQEs3BywAAAABJRU5ErkJggg==',
    order: 832,
    base_experience: 187,
  },
  {
    id: 716,
    name: 'xerneas',
    weight: 2150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png',
    chain: [
      {
        species_name: 'xerneas',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABQElEQVQ4T2NkIBMwkqmPAa/G/Q37WRy0Xv9nDAv7x8DA8B/ZEqwa////z8zAwPCPkZERWTFILZyPofH///+MMA23Fy/3e/ngieitxw/OJ82aeu5/QwMTY0MDyHZUp8I0HT16yo7x7ct67bc/nK7duPk6feJk80s/Xt5vaGhgakDXuGrVKuawsLC/85vaTbW8PE79ffqA4eqUmQxq5g5Pr/5655zV1XUTq437GxpYHBsa/uxOyO+S8XQqffbp1Q/Ws9c55OWVGU7cvtoQPm9aI0wNilNhzmh38FORkhTpEpORDeD88+/t87cvr156+iStfe+2W1idCjLlPwMDIyM05GIY3PM/CDC93/Jh+yJ0OYzAgSj4z8jQ0MgICz1QgDU2NjLCAgUWlzgTAMhZDA0MDA0MDaC4Q4l8rDYSmwTJTqsABm+XD0L7qqsAAAAASUVORK5CYII=',
    order: 833,
    base_experience: 306,
  },
  {
    id: 717,
    name: 'yveltal',
    weight: 2030,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png',
    chain: [
      {
        species_name: 'yveltal',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB30lEQVQ4T2NkwAL+M/xnZGRg/A+VYmRgYICx4apBglhBKEMoszaD9v8GhoZ/2BRgaJzEMIn9CsNb5lkMjd+gGpihNqIYANf4v6GBibGh4d+qmmZ15h+M1St6jrSuZtjxZUN5R/mvD383h82s3r1q1SrmsLCwvyAD4Rr3NzSwODY0/FlZXG8nzil98Mnx98/Z1Xh/M3J+lnv5+k1i9uLuBTA1KBpBflrNsPqvNYOgTUpjxWH3CD+G84ePMSyZtOvD8ksrzRgYGG4zMDQwMUD9jLDRoYHF8UDDnz6GkkCZVNF1nDYyf471r/4vIqTKyin4qT5r7cymVaGhzGGrV6M69f+qVcyMYWF/54U19/n4GhT+/P7x738e9n/fX/5k/fb15RzDmuLU//v3szA6Ov6BO/U/AwMjIySumO/OXHBfyUhTluHP71+vn75lFOXjYn1+49FLqbxkVQYGhs8wtWCnwiLcl0FKpKOpeJmsuIQrKxsrw7o9dxj0NHgZ/nz7uNt38fKIJ0+uvvv//z8jIyPjf5R4hIXaivDsNGFB/rBDN19++f3zy66OYyungSxoaGhgamiAJAicKYeBgYGFgYEBFBDg5IasCZdGxv///zOAnIOkAcRGSa/4bITJYSRwkIEAyd/HD8iH5FAAAAAASUVORK5CYII=',
    order: 834,
    base_experience: 306,
  },
  {
    id: 718,
    name: 'zygarde',
    weight: 3050,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png',
    chain: [
      {
        species_name: 'zygarde',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABQUlEQVQ4T2NkIBMwkqmPAavGVatWMSspKTHdu3fvX1hY2F9shmNo/P//PxMjI+M/mOL///8zMjIy/kfXjKIRpmnbhj1acnISQZdPXT8emRG6F90wkCFwjfv372dxdHT8c3nbhSQxHcm5YrJiDE+vPWa4sfeWtkueyzWQ85GdDdf4//9/ZkZGxr93rt1ZISslEf7h08dPYjJSfLev3ihV09Xs+f//PwsjI+MfmJMxNN6+cXuJrKxM9JMHD36wMbOwv3z67sDri6+3ehX59CLbiuHUrau2Jtg72c7/9fMnw5sXrxkeP3rC8OHJt+zg3IBp+xv2szg2OIJthWtsaGhgamho+DdhwmxxYVauCH4B3nc/GP4KvX71YFd2YeF1QqGKNeixRQm2eGScNWsWi5qa2v9bt24xCgoKYk0E1E1yxKRfAM5Amw/f6rACAAAAAElFTkSuQmCC',
    order: 835,
    base_experience: 270,
  },
  {
    id: 719,
    name: 'diancie',
    weight: 88,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png',
    chain: [
      {
        species_name: 'diancie',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABwElEQVQ4T52SzStsYRzHf78558yoS80lhrwNSZq7EOYPcO5NktUtToqtl1ssJGGjZ3cXslHUkY0F6TkrGzVXGSui4xrDxChslCQkxsuZmefRGc14mZmU3/b5fn4v3+eL8MXCdBynVAANADUlmkqTFvxskSSQA0cE5BeDk/3h/bPc4MCvUVmWIx8bvQO9hIgyIaZI3P09dGvzXWZUnswUA8Cp3qVK7unucLxBAiSEWAghzHy49ugTZ4dHfYYFo/bC/GXPwVpb9/DwDSfcggRjmhjIOUdE5AFKM7NtRWP5jryekMTA9sAioqNADG5tzle1NbTHda8gpQIqSlQfn5ML8nJXItVFLMuRA+d7QfxuzQp/u3iyLngWmzvVv0vxc95NBFWV1h6ldZfTWRdiEeNqK4B2V4V0xJ7+1Xe0NAGAuabJ8MSNnHMLIrJjv18ruWMtD4YBhlXg2eWluLrvn5Tln726rktutztmUAL0er2iabtnarappObH0pURWseb+0rkkOPb8dX+GR3ZppQKivISiKR/pADCBpTXjsPx/0aAMidIdhXC+ltjUoKpEvMRSgvSVioomsIIIegKBFDRtKS8PgN7j8APzGXo8wAAAABJRU5ErkJggg==',
    order: 839,
    base_experience: 270,
  },
  {
    id: 720,
    name: 'hoopa',
    weight: 90,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png',
    chain: [
      {
        species_name: 'hoopa',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABeklEQVQ4T2NkIBMw4tL3//9/xsbGRsaGhoZ/2NRg1fj//38mRkZGsIb///8zMzIy/kXXjKGx4f9/pgZGxn8NCQwc6u5zhSIjk58hGwQzAEUjyHmMjIz/GRgY2K/febiFh5Pd5MXHl7amWvpX0DWjajxzhpXRxOT30ZP7W6xUdaoZPnxiOPvy7UUTSzMDqE0g9SCDGeAaYSYeP35WU/v7k2Of374U4Pn97T+bpPq33dyS5n5mBldXrVrFHBYWBvYvXOP+/ftZHB0d/xydNcvgj5DC+Wvv//xm5WJiNuX4y/SV+be1VUDAMZgaZI1wJ1y7djF/xennDcySGgKfvn5nkP1666m/qbSLorrJDWR/gm2ECWzbts1QUVExc5KmZvmT8sWzH737yrw03WASC49ASUVFRfSGDRs+wAIQZwIAGdjAwMDSwMDwh4GBgW3mzJn/09PTf2ONDpjtq1evZgwLDf3HwMj4H9lfyIkAr43QwAMFPzwMcNpIbJoHABxgpw9sDNrJAAAAAElFTkSuQmCC',
    order: 841,
    base_experience: 270,
  },
  {
    id: 721,
    name: 'volcanion',
    weight: 1950,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png',
    chain: [
      {
        species_name: 'volcanion',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACr0lEQVQ4T02SbUiTURTHz93zuCmbNZ2rRByZKdPSaU4LmpUvBVYqhZsMLQqCpDT6UBYZeItchFRE5gftzRCsLTV7+WBJRllWvnxISTFFzbVQnLrHbe7t2Y1Ntzyfzr38/5z/ufeH4H8hACBFOUVrZhdm6fbu9rk9GAs+YGw+lHZU1Pr9iREAvBqPxdN4S6lUUjqdjqWTD2TnxcSXW/ncR384juhkNoiet1uMr5pu3sUYczDG7lVGzAHA7gTJ2hD+5rxTsjj5tSViB8oBLsLl0COE6foyPaiGlha9b4B3ou+QlXUsNXJL3MfodZEB4CaUxWEnesaEFpaYccq99MLwY+h2T0/bFADmLEfFmAOeCGIQnCm81Rcq5McCTVhkQSiAsaMJjtOqZ821b+oqL6DlHZHXqFUqKZVOx75VXFS7aFQ7BEywU7KW4g3b2MSocIoyMHP0p/cJCvhs8GlXjFpKpVOxTWr8YDE6NGfR7XSaFkySmEQBTDsjnskMrkJnx8+n+3tuqIlSSyGdivUaMcY0xtgFShBUp9RPbRDxhFbzX0cgLeTOWHmXxCGinbbJSVJSVZqr1RJKpUIs8j1x8eGq8E2x3DIaBW4PFwdlms16dnTIRQnXi85HxUbsmDbPayrKT/b79IgQghBCpLGhYSCQz7aFhW6cGR3Q32HMY+RgQa7l29eR/skxY83lq2W63t7eALlc7vT/Y97eUnnJ2d3dKXJpyvj4RPpAv75GLA6D/IKs0ebmjl9SqSTeZvstk8tVJv9Ej7vi3JV8guwiTbXmIQBw6uquP05LTTvCLFprXrf2NWRmb3tpYoyVherj9Z2dnXRGRobLhxwPADwR3BpNpVS2NX7f4FCXMSkpfRefHzysUOQ8P1F8Wnq/8d47H6J+Vlcu/BCvgn9VSxAA8kL+DwyjNKFZ814iAAAAAElFTkSuQmCC',
    order: 843,
    base_experience: 270,
  },
  {
    id: 722,
    name: 'rowlet',
    weight: 15,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png',
    chain: [
      {
        species_name: 'rowlet',
      },
      {
        species_name: 'dartrix',
      },
      {
        species_name: 'decidueye',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACPUlEQVQ4T2NkwAP+///PuHr1aqawsLC/6MoYkQQYV61aBVL0j4GB4T+ywv3797M4Ojr+QRYDa2xoaGBqaGgAaUABM+bPUFWVU9VwdnbejGHj////mRgZGf8lJAQIhEele3q6eS4HKdq+e7cNFwdnDx8/v+j5M+fqX7x4eqaqquoGzBKwjX5+fryFZWXRYiKiLWfPnN745tWPUobfL1QEWP6dZGFiZvjByrspLSfPH+RnRkZGsDfAGv///8+8fMmCfcwfXti9eP2aYeaxS/L2/8+rqapY7hYQFGLYdWDRghUnGBIbGhxYGhoOgP3KODMtjTV91qzfpQ4MJXpmkd2P7t/6Vr36rHZoVtablH9n3jz5wfAt+ZWIPcO2bZdDQ0OZV69eDQ5hkL2MjOBQVOddV6J7U1hK7aN9UZsmAwOD7OPDux58fvu6SisguvPq1VVs2tphv2CBBHHqmZmsjCbpv29vW1XHzc7eeJBZ/NLrT59Ffb7dkXzz8/98s/ispP//G5gYGREhD9IIwv8ZGFTYW7uyDsqra5gLqGgw/Pz1m+HXp/d/mRmYmPefvWo3vSjxcENDA0tDQwPEj8jxaJRQNMvC1SuV5ccXBk4BXgZhKSGGEwcv/35w8pz+ufUTroeGrmJevRqSiiApp6GBiaGh4Z+5eTSfsLVu5A8W9m9K8mKq/FwMtw9uOn/+zPqeKwz//zMyQKMCoRGs+z8jJKywADRNaBohmh0aDjAzMBxkcLC3B5twddq0/7AoQDYSADPN7g/5yGrnAAAAAElFTkSuQmCC',
    order: 844,
    base_experience: 64,
  },
  {
    id: 723,
    name: 'dartrix',
    weight: 160,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png',
    chain: [
      {
        species_name: 'rowlet',
      },
      {
        species_name: 'dartrix',
      },
      {
        species_name: 'decidueye',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACu0lEQVQ4T31SbUiTURQ+d5tzC9EIUTOFaBpC/rAfminZ+yKV+EFRbCja/Mg2LMFCxPVhu40wyzQkjHyno2EftBk2Q0XUpkvEWB+KCkWi2Ew0LZ3T1dzHjVdd+Kvz495zeJ7nnPtcDiKEIIQQga3YqjlsSQjxbMe8HPZG7KFWq4NFIlE0TdN9CCH3doLBYAgNCgpSOxyORoqiWgkhHISQZ0PIgkKhYLqzu8N0v7ouGQBoAOADQNfV64rSXGn+vYmvE7VpaWmlRqORR9O0C3mT2iqVZG5y+MW370vp8UcovQ8XCS+W3dibc+pwRmz8sQclChXb8I1YDFy9HtwbE40Y82iMXUwK1EBkVqB/bApt+WwO711c0x7nu3zn3zfb7gyBDGOKh3Gf659HjMV8jPXr2qdPK0KCQlRffi79QU4HPzDiAGenZx2ml61vP84sZTByiRUIQYAQQV6zbJeXfQNan7B9Uo7bDQ5CiM264g4O8OP9eNdny83NCwEAO8aYgzHe/BwACHtUkCxZsC4UuinZK96eiES/2YkkD4dDZojvrciecwmOgBOWS4+78rf4CM3Pz4t0+mcTjg/dTsfqctw1/eCw4mHTQNIOV+IyVwBjbt/GyrzMm9U5sZaBT2axYRxaKAp4yGQyFa+urlamlitjYNQ8WZF9qGB/TKq6J+roXOLvhVBne+3UInWhgY4SVTVrGu6q1dpyjDEP1dTUHBwfH7dqNJpJAPCtz4uz+XMFbWebTBJpevruaOHYk9j4TMouSng9u7Jccl4qnWJ9ej1uPH3IbD6zZu5t6e9+ble1joQDwK/2suzbAiFPkazSpgJAZ4NM5iNnGCdi1Uqlkl1YGBwczOofGd11pUhul8lkbQzDLOYU5hadzDhdN2uxXC4pLq7X6XRciUSyuQD/CRYnxEKETAeD5HK53cv9C4AEOakm3RpwAAAAAElFTkSuQmCC',
    order: 845,
    base_experience: 147,
  },
  {
    id: 724,
    name: 'decidueye',
    weight: 366,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png',
    chain: [
      {
        species_name: 'rowlet',
      },
      {
        species_name: 'dartrix',
      },
      {
        species_name: 'decidueye',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABa0lEQVQ4T2NkIBMw4tLX0MDA1NDA8H/Vqv9MoaEM/xgZGf8jq8WqcVVoKHPY6tV/kRX+//+fEVkzThvDjWWV/7HJPLOvaXP+/eHdtcLo4HsNDQ1MDQ0N/0AGomiEOu9fU1xAzL/PD6c+4NRcphWe8on374fezKCgV8i2wjWGhjIwr17N8Ndfj8HcSNv0CA8rD8vDV5/vT9pxxo+BgeEKsm0oNoaGhjKvXr36b0d2nzbD53unmP4wMz7/+Pj891frzsw4zZCPUyNMYmbxTA0WFnazyxLym8Rfntn049cbFcbMMo0GVeFPWJ0Ksh5ZorQw0f4bs2wxNx//fxUr45Y0F4fTq1atYg4LCwOHNkaopqWlsc6aNet3uo164rPHN6PZnzLsWvOHYSIDA8NPqHpwfGKLDpDY/2R3SyFBMQmWTzYe798LCv5bDbUJFre44hGsGV9qxJkA/jMwMDYyMDA2MDCAIxwd4NRIKO0DAGr3lg9UxNS5AAAAAElFTkSuQmCC',
    order: 846,
    base_experience: 239,
  },
  {
    id: 725,
    name: 'litten',
    weight: 43,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png',
    chain: [
      {
        species_name: 'litten',
      },
      {
        species_name: 'torracat',
      },
      {
        species_name: 'incineroar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACX0lEQVQ4T2NkgIL/DP8ZGRkY/880TmNNPzvrdzaDs/CnWOYfixfv+srAwMDIwMDwH6YWRIMEGGCaQGyfPPuiwGeavHcEXtu0f10bybCc4Q1Wjf8bGpgYGxr+7XCvcPkl9M+bl53Tl5OTTfn2t6e3v178VZpxYc7G/Q4NLI4HGv4i28rY0NDA1NDQ8K/TOonXR1rzCtM/Rrmnfz8wnHh8e7+aYrBr2OowkAYMwPifgYGRkYHhf6ipuoe1uOUqHkk13pXn1h3ZffbMTnFlq1lhKuySv37/d/345dv1FadObYU5G+RHsMfjTKQMOWSdVbSFlbWfPz76l5FdWv3J8zP2f5m4JzIw/rtw4e6DE9devwYFFDiQwIGDDmZk9zyx1bGWPnjxwOesGZVWDAwMVxoYGJgaGBj+wdSCNYaGhjKvXr0a7JcstwjZXz9/btFS0lTj4ZG4ljY5zximGBoeIO4/uB9dVbUMNGXESr78+n5m3tGTszzUtVJUVSwnCnL9a/3w5tbPdUcfbnjy68llqCGgcGFg8FHXCxHl5+/l52Y/zs7MkN65Z8/HWLtYTT4RRROOv89LmL4+Uv7y9Rf3hx8/1jz//LrwwJ07T8AavVV1NLm4eD+tvnj8KcxZHlpqNrqSf6VPX/smceD5x1WZVuZGP//+9Xz9+f3uzdcub0QJnFWhocxhq1czVvp6xHOysrRpSEqIHbtxv3zC3r1daAEIcSooxKA0ONQyXewTRTg5s99/+n7z5YcPZasvXnyaZmzMKsXL+5/hwIF/oNBFjw5YYubiZeDl/Mzw+S0sMNATOQC0qfcR1EbHoQAAAABJRU5ErkJggg==',
    order: 847,
    base_experience: 64,
  },
  {
    id: 726,
    name: 'torracat',
    weight: 250,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png',
    chain: [
      {
        species_name: 'litten',
      },
      {
        species_name: 'torracat',
      },
      {
        species_name: 'incineroar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABUUlEQVQ4T2NkIBMwkqmPAafG//8ZGBkZGf4zMIDVgGgUgEXjf8b/DIwg1XDFSIbANaNoDF21ilk7NPR/AyPjv41zXU1evP+n/Y+Z9WBm4Y4HDQ0MTA0NDP9gOuEa////z8jIyAi25UgSA+8rC58pX9/cZL5x+3Zl63yGx8jyIDVgjQ3//zOBbJm8/37Ag28s7cxvHjznZfpg9e7jP6Y7z949/nT9wMaD6xeWMTAw/IH5mZHh/39GBkbG/32hoZzfkjqnv3r/QZONjdeMXUyUgef5ZYZ73/kZLq1ffubkxnZTqDPBgQV36syZZ1jT001+T2FgEL7csnTZP3ltcYa7N3d/YOfTubRi9Xw1c/Mtm2elf0PYiDUiG5gYGBpAMqDA4GVgYPhMMDqQQ6+hoYGpoaHhX2joKubVq8P+ImvGkQBgXgCFMogNCW0iNBJOiGSnVQA3w4MPqaAI1gAAAABJRU5ErkJggg==',
    order: 848,
    base_experience: 147,
  },
  {
    id: 727,
    name: 'incineroar',
    weight: 830,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png',
    chain: [
      {
        species_name: 'litten',
      },
      {
        species_name: 'torracat',
      },
      {
        species_name: 'incineroar',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAChUlEQVQ4T3WSX0hTcRTHz2/3qi01EVNK02r9ZUvMwiEKshkUSlE93Is9iPmPelEyE6OofoaR5cswKEIxlax1Z0Qvhdm4E1LUxBIbpqmbyrJ5DbfpNrre7camVwzpPB3O4XPO+X1/XwT/CYxBhjH419oIAMRALtUDhU3BMAxB07Sv/nxGnIVM8Dw2GJYDgNIMiDaALwcgbBMoQXo1HLTGQPr199C2cXJ76Z6jdief+A/Isiyp1WoF06OinH67onkxPt0zMdg/1NF8M2+WORX1echavPjL64h0R7SugyzWkFpsEnprQc1lmPvn5bthdKAXeiY5KPSV3UlTxYdNWom39MPhgcAFErj++NfNLYMoq+C4zb7Cdxq7US6YQvZH9+lPlhkvBACGoQiaNviDoLTteTbkrFROvOPCEwQ75yLT/vT63KPtRPG9uVcAPfcBYHhtmRgEJUEqbzQ1bk07V+IWBCFx6QcJCzaxos+CMmNdgIAo+vS09hlFUYTBYPAhjEUZxijwX7HX2sam5VExcpngEbl5h/+jeZE4pvR4FeoU+Sj7gXtTdfEAADgBQIawKMowQv7qF5bbO3bG1fx2ev1fp13CkssTSnAz40rVMi+EbzsyZp4Cfmi8oqdTp9NoMBk8tbC+O3vX4VSjwwtgtS3wJ8KmQ+dmJkYeuCPuFqRG1jmnLPtSYg7BGL+F0ldndWgwuwqWN448QdF7L3PfhvuqYvXpIeRLo+rSQi4C4OF0ue6WwpGflzxboyplG0QRyxDCq6qW1HWdbfJELXf9VCdvV4ZSqVf5TMktVF1rEvf9i8vUonNsdBASRREhhIIG1pXnJ11pOGMDoH0MAwRNi36A1Z6kvAT/BRi1JHLqHWCiAAAAAElFTkSuQmCC',
    order: 849,
    base_experience: 239,
  },
  {
    id: 728,
    name: 'popplio',
    weight: 75,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png',
    chain: [
      {
        species_name: 'popplio',
      },
      {
        species_name: 'brionne',
      },
      {
        species_name: 'primarina',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABRklEQVQ4T2NkIBMwkqmPAZdGRmPjNBYlpff/Vq9e/Reb4dg0gsT+wxQ3NDQwNTQ0/EPXjK4RpomFgcE6Q4Lj6OUXPxgOYtOMovH///+MjIyM/xuaOlfLiLKGXL33g+Hq6e2Buw4c3uDg4MBy4MCBPzCbkTUyMzAwgPyju2pByzlbQy6Wu0//f5s6/+j95auVzBkYer4yMDQwMTBAnA3XmGZszDrr7NnfIV52Df++HWLuqHY3/fjh5cVFu9XV9FV+n00pW9cyc2Yaa3r6rN8oGhsaGJgaGhj+NaSaGly9w86cnSq6SE6GW+vi5Rcbv/78WhtTdPwyTA2KRhAnNDSUGRT8DQ0OHOf2/Sl3ceLkFBNhnReRs+3W/v0OLI6O2P0I9jc0BEHRAY+S/6tCmRnDUOMTZ8oBGaCldZUxDE0DtlAlKfWRnVYB7QeBD2zUj34AAAAASUVORK5CYII=',
    order: 850,
    base_experience: 64,
  },
  {
    id: 729,
    name: 'brionne',
    weight: 175,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png',
    chain: [
      {
        species_name: 'popplio',
      },
      {
        species_name: 'brionne',
      },
      {
        species_name: 'primarina',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACEUlEQVQ4T2NkwA2YHBwcmA4ccPjHwNDwD10ZIw59IPH/SHJMDAwMKJrhGkNDQ5m1X79m1BIV/R+2evVfBw8Lhc/PfwefvXh2GwMDw3UGBgZmBgaGvzDDcNnIYGzmv8TZ3SGajfndrpaGZvf///8zMjKClYNdAtdo5RVmZ8L7W2riyvWrGRkY/sZGhd+Nj7VQunLx0b6Cin5nqE1wL4A1ZoU68Kx4J+pRI/xBxMXos7lexZOsM3utpQ4cfXxy844fhw8eOxcYGsrAvHo1Hqee2x2eyyXAwqlhunSBiHryPXNVVu7/Wy7Zb2M4dggUDqtXrwb7E+7Ubdty2b28Jv+8dTkhiIH5f8j1zjOfNQON0+4/+MLw9t7D/VGTzjo1NDQwNTRAogau8f//UGZGxtV/rx8JW8cpybdkz95XAm7W0nOlZP8/6++7dry04cVcBoZb22G2IjSuCmVmDFv998Y6r0P/v/3hZlGT4Hr5lU3D2oiDYcHkCx2JNUcWMDAw3IRa9h+ucdWqUOawsNV/t/RaWqkpC29j/83AzyzHeeLh5Q9/ePhY1fRC1dQZGSd8gDkXJR7373dgcXQ88GfmZNdQTUHmeruYHTpbO8z9eSQE2u0TzpkxMLz+wvCfgZGBkQFhI2rSkwsr8uR+1Lf9+okzi90la/qf+e049/4YA8OTyxhORdIIj+SGBgamhgaUNAqXAwA50s8PiBtszgAAAABJRU5ErkJggg==',
    order: 851,
    base_experience: 147,
  },
  {
    id: 730,
    name: 'primarina',
    weight: 440,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png',
    chain: [
      {
        species_name: 'popplio',
      },
      {
        species_name: 'brionne',
      },
      {
        species_name: 'primarina',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABz0lEQVQ4T2NkIBMwouv7z8DAuDo0lCl09ep/jAwM/3GZi6IRpAlZ8cyZaax79rz/t3r16n8NDQyMDQ0M/2AGwTXCNJ3vDxB4++CYHDun6WPbjq3vCdr4v6GBibGh4d/sBPMuHgHR0gNnTl0VtElZyMXFsa+uru5ss5+eeu2mSzcZGBhAlv0HEWAGAwMDU0mM77wvL25HS1mHs7AwMTFwc/MwfP7+/cum2ppDqjb615ceuVjS0NDA1NDQAPI/QmNppNtdjr9fFBglDf9qWzoz373/4OeTG+fZ390+y7DiBZsaw70LtxkYGJgZGBj+gv3Y0MDABPW4Wldz225RKVnpW7fv/Lh57Sq34K8XDALcTAy3Hr0w23z61unQ0FDm1atXQzRCNEOc0DZpnujZ4yeEdy2fZRkQEVn04/2r0j8P9tadu8mQ/JCB4TrISwwMDGCnwkFDQwNLQ0PDn6KCysy/3z6WXD26ZZVPaumBRzcur2Ti4IvumdCzdVXoKuaw1WEIG5H0M6alpQlzcQnxHP727mmQvLIdDz8f34/fP26UFxZe////PyMjIyM4VIkGME0gDbg0MjY0NIDw/1WrVjFdu3YNpO4fKAwwUg7R1kIVAgC7McEP4hlfiwAAAABJRU5ErkJggg==',
    order: 852,
    base_experience: 239,
  },
  {
    id: 731,
    name: 'pikipek',
    weight: 12,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png',
    chain: [
      {
        species_name: 'pikipek',
      },
      {
        species_name: 'trumbeak',
      },
      {
        species_name: 'toucannon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAClUlEQVQ4T3WSX0hTcRTHz+/eOzdnc3fT5cLUNVOm9mCYGqW2EdVjIWyoQSFoBWnQS1iS+2GERRSUUin+6SFfNnxwKqVQW621qKSgf5KKZmqRzj+7Opfee3/hn6kRnZfDOb/zOYfz+x4EG4YIWQ0QAsAYI6vVShBCa1kAQgAhBCsxWuOW/XrBpmZACKEQQiLGQGEMYuhtGViH7pbE7uWp8IlzDQODja2tCZLp6bmTZWU+Z0uLzFRcHLxTDpHanzBvsYMQmkjVl+guaOTSAhqWgrMBxXS8+cZOuUrdTBNBs6BUWsfPG2R+bVqbtwWONcGnqRAIHRXbPSqG2RdkIsA/MAFiVAEcuHQZ/H5/f2JSYkpz8eEmYZJLK+3wZq7sSDBQCIPYftb4UKsix4eC+sXZbwGa97ohr/MxvS0ufqbv3euhsftXd/s5pqq0+8mV+owMycrEwl3ZMUVpmn6lTKIY5kThOxtNb4lUwZ6CQpKkT0DdD+75JJ32KE6RcLq0q6PBaTQyKPRrjdUVtdLRhbKALlaQqZUULY1ArEoJv7zPyJSzB4UhBr7Oi6a6j+9dNrOZRjabjbZYLILN4chRLFFNkWo2bnB0JHy49y2JcLQLBA0SmcogGWN3/KjJyU4GjOfWpAZwOp2MyWTiG2qqM8c9r7omg1NqjVZHszzAVvkcIB8HHk5eXvv0UZ0NgLbAJjkAQDwEsF8dp00+qNefGV0iWZ+j1TfzaZL12zeT2/b8ZW4nwAtsNDLY5eLX5TAD0HYAAdLT2aqwYJ+UoJjKN19QZXZqTirLukcCnOOi+8NRDEBhAHEDNJtpu90umAyG/JRYVaVMWLTdcvVeP3UkryiGRtf8PO++3eM5AcvNV8/5L/vfzf6T/wMGuAW+HQPMWQAAAABJRU5ErkJggg==',
    order: 853,
    base_experience: 53,
  },
  {
    id: 732,
    name: 'trumbeak',
    weight: 148,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png',
    chain: [
      {
        species_name: 'pikipek',
      },
      {
        species_name: 'trumbeak',
      },
      {
        species_name: 'toucannon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABqElEQVQ4T2NkwAFWrVrFHHrt2n/GhoZ/2JQwoguuYljFHMbQycTAcPY3SO7///+MjIyM/9HVwTX+X7WKmTEs7O+FOevNGN78q7z143KytphRw9vTHxfYzY8997/hPxNjAyPcdoTG/6uYGRnD/j4/ttTs2zeBQxxc/5/9fc4q0xJ8TGoWQ+ObhoYGpgYkZ8M1gvwUFhb2t7W1W0fMzPGyGNMvBt4Td9OdqmNnweSQnYvw4///jAwQvzBlLD4w+fPbr75LC7w1GRgYvjI0NDAxoAUSSuA0NOxnaWhw/FO7eJ/+168/G/syPAMQtvxnZGBABBKqxv3/WRocGf80bb+cx8TCUn1p7/5ocUU59m9fvx2fWxT2jgHhKgYUjTPPnGFNNzH53bD1QpG0um7v149vGB5cOHV5QrKvAQMDwz8GBoStWDU2brvQISMsVP75LwPDo8sXrvel+2lBnQxSD45TVKf+/8/UwMj4r2n90Zg3t69LCSkqqXz7/PV4V5LvIgYGhr9Q9Zga8aUUnCkHWaKh4T/TVa3VjNrXrv3X0tJiBMUvURpxJXxkcQD6mrcPuA5QcAAAAABJRU5ErkJggg==',
    order: 854,
    base_experience: 124,
  },
  {
    id: 733,
    name: 'toucannon',
    weight: 260,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png',
    chain: [
      {
        species_name: 'pikipek',
      },
      {
        species_name: 'trumbeak',
      },
      {
        species_name: 'toucannon',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACo0lEQVQ4T11SbUhTURh+j/fuwzljrhRNM80wyEwDDRrJnBQUhK3Qm1iiEFhQEJFBRqxbGEFF/Ugr/eEPI8Q7UQs2BD8mwtBpH/PbkDnnphtsapo623bviTu8kr1/Xp5znue8vM95EGzX61rLJbsbu9UnIsv1vX8az59c52Qy6SRFqfwC59+OBGDtN1j3KKOyFAoxLHiILbdPJuroXc5890I9VVzMEHo9xe4SYswQCFGsy1pfn5gSVwnIvwGihKjPnTGD2svZKgDAAMAP4PtOIZPJRGo0mlCLsfteeuqBV3HYuhW7VyE1DiRMaLXHswEgxAtpmkZ9oI7oozU8BmTCmNQgFBoa/fnAviF5Hu0zweHElNXyBrlm4EPuD4wxCu+D0O6J4QuEMAMgdnYNdRelhfKcNjCcPqu6EF7jySQGmuZK3rSnEGww51MV1Rp+RxC+bGqKys0rGEkKeNOGBvylpRWqZp5QWf9V1HAjJ6itaXokEUt0HBso1FeXdSIGY4JCiDVNT+colfHDc4Pf/U5L8Byj9If6zXY7tN11bzuyv+D++x55tLzui66sdsecYZvtTCByX1dH79hGsli06Y+PjV3xeX/NjE/dadVVGAqfNV9kgahxjI7mjbfU2BDDMARFUWybxZKVevCI9ZtjDVzrm0CyOCiJlIoWXB7w+FaAFJGw7HFeMdLXmWKGIcKGCXuaHa6Pvwn5NcbswAUZcSi0FeD6pxYguLQ4aDZP3pzV68Z4kZ6i2LBQAJB8K6OoKr9HJlGwh5LEM54VTj0/720xPqRKeF4+bSJ3/pE/oGk6gqZp7ulbQ+bYorcRpKR8eWL2WWpmesMqx47oH189JbgrREfIajhSdXWM3Oldiz92NK3I7XMbk2ISlHNL3pjq21T7/0H/C0dkPcrKd3cyAAAAAElFTkSuQmCC',
    order: 855,
    base_experience: 218,
  },
  {
    id: 734,
    name: 'yungoos',
    weight: 60,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png',
    chain: [
      {
        species_name: 'yungoos',
      },
      {
        species_name: 'gumshoos',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB5ElEQVQ4T2NkQAMNDQ1MV7W0GFeHhf1Fl0PmMyJz/v//z8jIyPgfJrZq1SrmsLCwfwwMDHAxmBxcI0xTMYODyM9FpQq/vj+5OCs9/TdIYdrMmawwNoZGkBMbGhr+nV21e9+ajz942lN9zd7NXqN378nlOyaNjd/+MzAwMiLZDLYR6qS/N54+Vf9z8caNt/cezmP4w/RM9OOnwA0XngfdDHI0XhjrtoqBgQHub7BGmDNzb99mT5q68qSki4U+s6gow92fHxeIsHDyzb/w5FprVmAt1sD5//8/EyMj479je45tUZCR8b529PAhXjOdLUIv37P8XrHpotacvm37GxpYHBsa/oAMgAfOmTNnWE1MTH6fPXKkn19ApOD4pXN9KoqKmzkX7Iz/JMm3066haAWGRphT7///z3F31er1Qtw87qr2tow8PDwMR9dsaLYJDaz7//8/CyMjI9g2uI0wjf///+daunhph7GRQS7Dv/97Xty9o83EzXXC3s09CD2O4U7dv38/i6Oj4x/L8vm6VRJ/958vTHHVsYg1Z3fRNrvy611+eVfXZ2TNKCkH5IRtDZP47jTk8eUxMDzpKyzkZO/v589mYHiBnvxQkxxSJKM7Da9GmL8bGhoYQakIFOoNDA0gDGKjAABy+N8PPNZRRgAAAABJRU5ErkJggg==',
    order: 856,
    base_experience: 51,
  },
  {
    id: 735,
    name: 'gumshoos',
    weight: 142,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png',
    chain: [
      {
        species_name: 'yungoos',
      },
      {
        species_name: 'gumshoos',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB/klEQVQ4T2NkwAEaGhiY6usZ/jMyMvzHpoQRm+CqVaHMYWGr/yLJgdShGADXCLJBq4GBkSE0lCFs9eq/F0IZzH5JaVfknniecPLku08g+YYGhn8ww8AaGxgamBoYGuCCVzp84h7/4lj4+daVQ5+X3PBJZmD4DFL3n4GBkRFqMyOMMyeVoZlrNsP+zwwMZ++sbn9t/O02649Th68lTL2tfTuXgb3VSIFxQeKDHwwMDGBng228yMAgtrs5/fHfb//YxNtnH/nT020pbGfIeGfbGia+hhlTWXLtXf/9/LgtddaFQpj/wRqn5idOPGWv63KLlUFL9N1HhrhH/xmMr39guP/9y98rFtLMuxVZGYyuPWfQmXwyOPTtuXWrQkOZGRsaQtlON6zmframJ1eSkSnl3o8vf7Rv3uLoVvfh+6Klxd11btfTk8zvf8v/YZZ1vftyt0D7TL90Bobf8FD1s1bn/ZWZ4LLjwaU/HWqeEVFOvn5///zmaV8+d9Os79f67EUU9Q6+f7+eoXzyE5AroaHKwNTAgAjq84f3rr596+opdTNnri8Pz3tZ+8SYo8c3IgH8/8/YcMCRucHxwJ+ZuQzefH8Z3kdOYzi2uZah7M0fh02J7QduICcMjJSDHFf///9nYmRkhMUvSurBmuT+/4d4AZROsSQ/sKuxasSV8JHFAVsW12YNNcBLAAAAAElFTkSuQmCC',
    order: 857,
    base_experience: 146,
  },
  {
    id: 736,
    name: 'grubbin',
    weight: 44,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png',
    chain: [
      {
        species_name: 'grubbin',
      },
      {
        species_name: 'charjabug',
      },
      {
        species_name: 'vikavolt',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABcElEQVQ4T2NkIBMwkqmPAavG/w0NTKu1tBjDwsL+7t/fwOJwkOEfY0PDP2RLMDQ2NDQwNUAV/T8zk5XRJP03SAOyOIiPonHVqlDmsLDVf+dMrPG49PSrwqSu/hldHdVVAhyMl9IKWrasWrWKGeQKDI0NDQ1sDQ0NvzZunB3E/u3ZUpFPa5e8FolP/PKbzTc0Inc7Lo1MDAwMYH/YChj4T5movExDRYzrzKXnT6wzN4QzMDAcg7rwP7KNICf/j3G3lVyyk+1fVeA77/gEh7lCPL+/Pbv9mGv2oa9FU5bt6f//n4GRkZEBoTE0NJR59erVf92d7R0//2WrFLu6e3PbpoWTRPnYGJ4fXswwacPzo3N2fKxgYLh3hIGBgZmBgeEvcuCAbbWzM1M8dOgb75QKHWUhGVXhr/fOs6f2bVljbGz87uzZs+AQxggcZD8QShi44pFhf0MDE4O9PQPDwUYGx4YDoEDDnwAI2YTLqcTqYwAA5ICSDwtHwwoAAAAASUVORK5CYII=',
    order: 859,
    base_experience: 60,
  },
  {
    id: 737,
    name: 'charjabug',
    weight: 105,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png',
    chain: [
      {
        species_name: 'grubbin',
      },
      {
        species_name: 'charjabug',
      },
      {
        species_name: 'vikavolt',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABP0lEQVQ4T2NkIBMwkqmPAUNjQ0MDEwODPZOW1uv/IEOvXRNlZGA4+K+hoeEfsiUoGv///8/IyMgI1oAO0OXgGkE2gUydPX+l17t3n6xe/uV7/vHdS0Z9GT5lbl7uXcnxodthakCGwjXCTKwpaVY0sTfdKiAuq/nz+zeGv1/fHt+w43jErEmNj5BthWtctWoVc1hY2N+amk51dy+HsyLCwpxfv35lun371pPI8FA9BgaG91htbNi/n6XB0fHPwlW7bQT4eA4/fPTo968vn1h/M7P9f/LqteLU1pKHDQ3/mRoaGMGBhBw4IDY4YMobumcJ8Qul8olJM9y5cy2ht75oYWhoKPPq1av/wgINZ6j2LNrVqKki/8PbSr0dW2hjxCO6ImTn4YxHJAnGhob9zFpaDv/DwhjhziNGI8GUSHZaBQDND5MPKkQZBwAAAABJRU5ErkJggg==',
    order: 860,
    base_experience: 140,
  },
  {
    id: 738,
    name: 'vikavolt',
    weight: 450,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png',
    chain: [
      {
        species_name: 'grubbin',
      },
      {
        species_name: 'charjabug',
      },
      {
        species_name: 'vikavolt',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWElEQVQ4T2NkIBMw4tL3//9/RkZGxv+45HFqBGkAaWZgYAAZ8A/dAJwap05dxZOdHfYFZgC67Sga////zwQyfe/eC9IMfz/H/GdiXcDC+D/IwdlyOkwOZjNcI8xPZ86cYX3x4vN8BgaGPwwMTH8ZGX8d8fZ2nb9//34WR0fHPzg1MjAwsJw9e/WKgpys+revPxg+vH6/RNdUPRaqAWQROMDgNoauCmVeHbb6L0M+g96lzItnZfnkGB7+ust45N4J5t+tgsqFe6PvrVq1ijksLOwvisaGhgamhoYGUOgJL1q0+44oj5zAxfcXGY6/Osege1PbsWVB7IHQ0FXMq1ejaYT5MdQhi0fXwW3B3/+MBr++/v/PysKs8vLzw/qZU3OasGpE9wMDAwOzZzQDNw93msDqWbMeEROPjP///wfFOs5Ug+JHLEmLERSADQ2NjFC/oyjBm+TwpX8AnxWRD7mvuJ8AAAAASUVORK5CYII=',
    order: 861,
    base_experience: 225,
  },
  {
    id: 739,
    name: 'crabrawler',
    weight: 70,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png',
    chain: [
      {
        species_name: 'crabrawler',
      },
      {
        species_name: 'crabominable',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABr0lEQVQ4T2NkwAL+///PxLCagbHxWuP/+vp6RgYGhv+MjIz/kJWCBFEASBO6IpCC//9Behn/wxSjaNy/fz+Lo6PjnxtHb/v/+fXX8uGzp9PVFBWmv3v/aYm5t+EyZEPhGmGCOxbvV+Hj59nw49tPThYOxtOCfHz3bt9+8iIo3XNSQ0MDU0NDA9jJcI0wwdbZE8RtJMx28HHy6L5+/bHaLdK2E69TV61axRwWFvbXZVGW5hTjgmuc/JwMrG9+P5AyUNJiYGD4/v8/AyMjIwOmH2Ge70zq5PWNC9ghIy1t9ejV7j4d68BibAGGEjhnzpxhNTEx+d1XO0vb1c7xyucf76eqayhXCasKf8IXquD4mjRpG7sCF1e7mYlOobikMMPWnXt7feJcSmCGYkQHzI/ze1cVCXHL9rJxMHzX1JLhfPTk4Ry7IJtUmDy2eATbCJKY0rjmpriQvBoT+x8GVQUJhuMXDoSllyWuhsUzSnQgJ5/2stkNPFz8GsfP3zqmLC0m++rzs5UzFzecwRqP2NIsshjeJAdT+L/hP9NqLQbGa9cOMNozMDAcZDj4D5ZiYGoATVjJD7Ul/PcAAAAASUVORK5CYII=',
    order: 863,
    base_experience: 68,
  },
  {
    id: 740,
    name: 'crabominable',
    weight: 1800,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png',
    chain: [
      {
        species_name: 'crabrawler',
      },
      {
        species_name: 'crabominable',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACGElEQVQ4T2NkQAL///9nZGRk/I8sBmJjE2eEKWpoaGBqaGj4t2L2bs07D16UeztbGEuICR6S1BHJxqYZrnHVqv/MYWGMfxfP3GFkbWxw9s//PwzPnr5j4OFmjTZx1Vz2//9/JkZGxn8wi5A0rmIOCwv7u3bOXnlVdeU7R+9fYFyw9MDZXB9XSUEhLj/vaMcLq1ZB1IA0wzVCnQM2tbO5uZKHQ6Xt1vUPIXO27rv19eXqy+j+RtHY0NDA0tDQ8GdG7wx9SVHt0yI8fDLWQfqvQDaFhob+Qw44ZI0g9v9Dqw6JnrvxZZWVma6DoNgPK1Uj1eNQl6GENljj/4b/TIwNjP/2rD2s9O7dtxMsLFyiDjYGDDdu3zlk5WVov3vd6Y0fPn5YGJroug7mTyQb/zMyMDD+72qYMkVdwTqbhfPOH3VFaxZWZpb9Xz5/sfv248tEUw+94v/7/7MwOjL+wYiOyW0bZ6kqaqc+e/H4p6ujDouYqBDzjff3GQ6fPBqUkxy/fv/+/SyOjo5wjWD/MTAwMLdUrLjPwSEi++fvL4bIQNP/v/7+YyxaN+HA5vZ2FwYGBlBUgNXCbQwNXcW8enXY35jQDm9+XoEtv3//uqykoKD7+vXrBb0zklMgmhqYGBgawIkAJTpgcRUXWm3Gx/v7iYqcUWvL8vq8NzdvfnZwaGA5cKDhD0bKQU+zMD4ogTcyNjI2QG2CiQMAKPXrD6EM6GEAAAAASUVORK5CYII=',
    order: 864,
    base_experience: 167,
  },

  {
    id: 742,
    name: 'cutiefly',
    weight: 2,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png',
    chain: [
      {
        species_name: 'cutiefly',
      },
      {
        species_name: 'ribombee',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABsklEQVQ4T2NkIBMw4tHH2tDQ8LehoeEfNjUoGhsaGphACidMmKv+5duntJqqwuJVq1Yxh4WF/UXXjKIRpqipfaIxw9//TU8ePY+aNavz4////xkZGRn/I2uGa/z//z8TIyPjvy07j+p8/fA+gZWV1fH77587+Ph4d/t6Oh6AycM0o9g4depUHhZO4WgBNnYNaTmFgkt3bxfzsjB/+vTj69Hs1LjrMK+ANIM1wpzS3T1b8e3bZ0a/2dlfS7KxH2T7+NHyEhvzSzFGJsu25uplyP6F2Qii/5eVdfKqayrkJieGt02JSaviO3tr024Pc0Xh/wx/Jkzo3B4aGsq8evVqcEDBnQozbd26bfYnDi0rf378+Es2SQ0HBkm1l3On91tA/Qa2AEUjWOL/f0YGRsb/aZFqu/99lbb9+/LFeXn/lGOK8grb46OD92D4ERZS+xsYWBwbGP4sbRdOuP6Yt+3CtNfb9by1Vwl6ZnAc2jl19+bNZ79hDVWoIBMDA8M/d3uNXoYvDB9Vvt1YOPU6w0Nk2zCdCtEJ9wfM9IaGBpaGhoY/WBMAWpKCa25oYGBqaGDASK8A1UHADwvmgLgAAAAASUVORK5CYII=',
    order: 869,
    base_experience: 61,
  },
  {
    id: 743,
    name: 'ribombee',
    weight: 5,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png',
    chain: [
      {
        species_name: 'cutiefly',
      },
      {
        species_name: 'ribombee',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWUlEQVQ4T2NkIBMwkqmPAUNjQ0MDU0NDw7////8zMjIy/mdgYGAMDQ1lWr169V9kS7Da+J+BgZGRgeH///8MjIyMDCDNGABZI4j9nyHKRolh2ZF7tkGJIYcff3nNcHr1wYQED9MFC3acxrAR5rzpGQEK/wQ4N71++7zv8gvuXlWOP0+UFfim/mFhrb388YvjtGmb7sDUQmxsaGBiaGj4x1DoIz2HlXObFDOf3te/zAycbMwMolz/GM6+erMyi+V2MkPPpa8M/xkYGRgZ/sOdCjPJloFBMiQhaIOCmKjZh+8/fn/48GhT/uL9UQwMDL/gFoBCDNndq0JDmcNWr/5rzMDAqulmc/bn77/qq/ff8mZgeLsnLc2Yddass79h6jFCFaaAz9gxj/fPH0v+i4fjr4Fsg1gCD2Hs0YEZDSiaQLbiTDkgP1+9epVx9erV/5BtwulUYpMg2WkVAGc0ig9l2u5lAAAAAElFTkSuQmCC',
    order: 870,
    base_experience: 162,
  },
  {
    id: 744,
    name: 'rockruff',
    weight: 92,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png',
    chain: [
      {
        species_name: 'rockruff',
      },
      {
        species_name: 'lycanroc',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACmklEQVQ4T22SXUhTYRjHn/OxzeNsM50zvzpuKkgamIIgJChl07zpZl0oUoiGhWDhhVFi72V0lZGVF2WfFK0PS8tI0mXGtFJW2hz4BY5t6nTf082znRPnmJXVc/G88Of9vc/D+/9jAAAcAKbTanFTTg6HEGJ57a/COADAhKv8ARzftlVrQ2WzUcwo0mKo2O9RZEKli40MM8HOnqt9A4MIkaUIhXlgC4y+VV+ZV8sETDcl8ocfFVCerYgDAxeCI+skuM32xqZ7/R3CBIRIQCgigL3nj72NlUrKekZG++lkOlEppeIxiXiXxx/AQ4HgnRSlQgI4qJbdLqfebv18/9k4EsC7TUevY15/gxgDWIyOso5Zlpqr0rMfOULeoZobuvI3Z2umKAKnlz0+6DJOdL0enq7dXPWMpqo+IeZBEiuCxysBW+qC/0SFPKHXPG95os6N7yB3UoORFef6vDya6lxa64Oud4cFsPi0Jv8DLbuY7/anqme8XjVLzRTsTq6emrNamR3EJ0MslIFSGjMgIS17pt1tpmv9tzHgAAO+b9oiOkXTBxMLVRlF2ent5gX7ZDgUafcZbaxLClPtY6ZxAGB+/yoHGAKEIWzTQ01xQVKhiraF3CvGSy+H9m3z6+egLTsEU69UV8gcwWDaXlrZkKNKaZyz2GDCbL4MBNV97rnhPUKAIwTC4wI4iErIUqQPv2o9fgFjgsjhcIA6IxM8Pj/Mzs4ASRDs6noor+3F2IRWqyV0Ol2EjxLGR6nuQG7i/iz1U5vTObnh8xTJZfJMkTiKcXs99nBw4ytFifwt3V/qUEkJifT68J+Rw1s0eSddayHDYmDDy/rdcVm7Uw/huGh02bWaLiPIbx0j06MIAEcA7D9Z/U/Af0lb2/HCD4sRGR98O9C7AAAAAElFTkSuQmCC',
    order: 872,
    base_experience: 56,
  },

  {
    id: 747,
    name: 'mareanie',
    weight: 80,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png',
    chain: [
      {
        species_name: 'mareanie',
      },
      {
        species_name: 'toxapex',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABWklEQVQ4T2NkIBMw4tDH2NDQAML/cJmLTSNI7D9IQ0MDA1NDAwNWzegawZqiPc35/rFwSi3ffOAGVDPIILBhMICiscHBgaXhwIE/Qa4O6f//MxSu33PAkoGB4T0256JoNDY2Zj179uzvBD+7en5+zsofPxiPvX79I27dgQNPGhgYmBoYEM6GaQQ7UYGBgcPQzX6jsLCgm6QYH8PNh28Z/v/99e3H58/Zmw+cWBAaGsq8evXqvyAXwG1cFRrKHLZ69d/uhIgoDn62pZ9+Mf0wkhXgeP70y/WkqXNMGBgYvkHVg/0K19jQ0MAECv4bnUm8z3/8eSjIKS0oI/6T4fSJr1We02e2729oYHFsaPiDNXD+NzQwMTY0/Jtg72vKwvZb5vnlXyytL/atZ2BgAGmARxOKjTCTYDajhSSKJqwaQYIg/4q+fg32huOBA6DAQIlDnBqJSb640ipBvQAD64EPPtZWfAAAAABJRU5ErkJggg==',
    order: 879,
    base_experience: 61,
  },
  {
    id: 748,
    name: 'toxapex',
    weight: 145,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png',
    chain: [
      {
        species_name: 'mareanie',
      },
      {
        species_name: 'toxapex',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABz0lEQVQ4T2NkwA4YGRgY/kOlkNlw1SBBdABWGBnpJ87+5w/jgtXbXjAwMGBoRtcIV5Dj77Lz8+8/vxZuO+CLzWYUjf8ZGBgZIU5kvNhbf/bNp88HnRv7Cv83NDAxNjT8Q3YaisYzM2eymqSn/77a0RCmrC268vGbD58eXfmm59zb+nBVaChz2OrVf2Ga4Rr////PyMjI+P/ZzHquBy+/LePV5rUWZuQUeX3r63T9ioas/6tWMTOGhWFqhNn2cHpH6tsf30JlrSW07l59xCT4iffZg1/vvdxLe141NDQwNUCdjLBxfwMLo2PDn5fzJyw9cueuv6qFBMfqbec/RGjqswjwcHlJJxUfQ7YVrBFmUkNyslC6jebla3+eSB289OifooIgU4CEEcOr129z1QvqpsBcBdID1ggLtf0NZTLPv7y+zqLEzP3129/famqS/35f/cnx4vH73ohp80owbITY6sDS0HDgj6kIQ/eKVeUlSiY6DA9uPmNIy5r1afdpTjUGhisvGRgYmBgYGMDRghwdUEEd2UiHPxNDvRS/bT/8QnD25q/rGRhuzQllCGVezYAlOvClS2KSHNgV/xsaGBm0rjIyXNP+z9jQABJDSTUgAQA6KNAP5HUp7QAAAABJRU5ErkJggg==',
    order: 880,
    base_experience: 173,
  },
  {
    id: 749,
    name: 'mudbray',
    weight: 1100,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png',
    chain: [
      {
        species_name: 'mudbray',
      },
      {
        species_name: 'mudsdale',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABS0lEQVQ4T2NkIBMwkqmPAafGVatWMYeGhv5jZGT8j81wgjb+//+fEZtmnBrnbN4fwMfBdDfM1f7y////mRgZGf8h24yuEcQHOY1l0dHLL7k42Q6EGKkH7///n8WRkfEPTo379/9ncXRk/JNbs0LZNdr2OgMDA+vbO1c0E33db+zfv5/F0dERrhluI8wvM1fN5Ne18N3AxiPo8OvPXwamv593WkhKejEwMPxD9i9c45kzZ1hNTEx+bz57qUxXXb7zxVdmBsZn5/4zKdgwHjt5oTnfw6gO2ckYNjIwFAjMXOG94/kndlnGb994f/xj/t5+6oo5w4rCBw0NDUwNDQ3gQEIJHJhERmCG2Iz1Mz5PmLZdTpD7PXt8fNSlhv//mRqQQhYjOhoa/jM1NKAGPSgxhIWF/cUXHWA5qM3/Gxr+M9bXMzCgxyGGU0lJtwBPKosPWqZVPAAAAABJRU5ErkJggg==',
    order: 881,
    base_experience: 77,
  },
  {
    id: 750,
    name: 'mudsdale',
    weight: 9200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png',
    chain: [
      {
        species_name: 'mudbray',
      },
      {
        species_name: 'mudsdale',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAB/0lEQVQ4T2NkIBMwkqmPgToa////z9jIwMDI0NjIUF9f/x+ba8A2MTL+h9sI0sTIyIhVMU4DYJoW7VzEzcrtwH//08/fVV6qHxgYGP6BzGdgYAAZ+JeBgYGZgYGBiYGB4Tfj////mRgZGf+tOnS+VFhcouLr95/Mz588/6uqrvCGn5f3HwcbE8OPH38ZLpy88lnPWEPu5u0Hc2KcDWsYG1atYmsIC/s1dcuxEg190+73T2//42b6wySurMMgJMjI8PnDP4Z3n38xMPz9xyAqysWwcfsRk8ow27MwP3JtPHRxnbialvu9u88YeFl+/pJWVmT8/u0b06Nrtxn+8or8l1WUZbl78SLDgdWbXBfNa9gD1rj/xpMJrBxS+XcuHTvKKiQuKqehogYKpidXrv1nZOH4//PPL6ZHl67MF1VUjWfj47yS6KCuz7ju6E4xYWG9x5wyEmyHd50qlpAS2czAxLrr64vnjMw/f8gpWVgz3r9162mSs5bqzC3nD6vrGxhvmrYgjXH/mTMiN++86b5//634v5+fp3Q3ZGxjYGDgYmBg+Fbdt2KylKxqzrM7t88uPDfR1vaTkRK/ooLVP2YWuB/hUQULZZBASXc397Pzd6TOLZv57gYDw1vk+GRk+P8f5B1YIIFSASjOGBsaGkAYFI9w0NDQwMTAYM/EwHDwHwBIPcwSj1pOlgAAAABJRU5ErkJggg==',
    order: 882,
    base_experience: 175,
  },
  {
    id: 751,
    name: 'dewpider',
    weight: 40,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png',
    chain: [
      {
        species_name: 'dewpider',
      },
      {
        species_name: 'araquanid',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABxElEQVQ4T2NkIBMwYtHHuCp0FVPY6rB/IPqa9rX/DQ0N/9DVoWj8z/CfkZGB8T+6ov///zMyMqKKwzWuCl3FHLY67G937GQnFlZ2g8J5aX2T0mcE/WNg0CqYmdGC08b9DftZHBsc//Tm9E0WFhXNeXb75QERFT6Ht08/vaqcXSLFwMDwF9lFcBsbGhrYGhoafnXl9lT9ZPzcqqqixXD50kWGJ2eerlp4YWF4g0MDC8MBhn8NDBD/gjU2NDQwIQWA6YG1B5dpaimr7N6762ZMTlJGsIvnx7V7tp+HOhek5z8jzONZbomyuiqui1+9vi+pbqQhxCnyS+TJu9u3Pt0U3KMqqpH17M2D1SdubqhYdmTrPYiTGf4zMjAw/s/3yxeXFlIP+//1e+FXns8vXrO8tbx28cZ1dxm3r+IS8szPPz7rPHxh++6dV3e+A7kU5kew9SCnZMelqn399dvm5bv3c9nZWG5qyChVd8zo3sPAwPARxamwYA4NDWVevXr13+nd08W+fPzSsWLzinkeDh52IiIiXIW1hTUNDftZGhoc/8IsQE0AWCIaV4rESHKgwAIHNyip/P8Pdj4jxEcoKQpbWiUq2QMAHQ/CD8rTCK4AAAAASUVORK5CYII=',
    order: 883,
    base_experience: 54,
  },
  {
    id: 752,
    name: 'araquanid',
    weight: 820,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png',
    chain: [
      {
        species_name: 'dewpider',
      },
      {
        species_name: 'araquanid',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACyElEQVQ4T12SbUhTYRiGnzPnZKautWzi0iCdn2GgmZlYx18DhaDVWZiYlnPq1NIMQcF4M8p+CP6I0JbLqbnEIeK0b2RDZqYiSzOXms3p1AqWNp0fc3riHJDE59cL933xvDxcGPwfDABIbwBeOEAEyQ6aGVqfnkMRBAskkS6E0M6eLlBlamiIgKPsVXF8C/OY4BxzeeVRR4Oyercsk8ncFQqFi+rtAoAjxNQj5BKV3SnyDBPWcLgcUDWoS6BDW/sQF5dP+4fXK9UPLBSA4zhTr9e76I0EQiwNQs7MtGtXTwX6tvQuLmycj0vqjggUeDxPKTIJiYzLVvv8Y8W72joA2CCBxHa/Ckq/yJdmro9hw9RfwM4vOV58r4ylffMW8vvef5PzY8NO2A5Dv6nHMvBruMI4ZmymwaqM6pivDMug2d3BsPCPrF0JCfZM4QQ5mms72daskwyeeUmdYhaInDsO3rjlMygn2zNp8Mb96sGVuKBY5+zcJteP76FamMmXyPQjosJUw+t1g6W9XhHyrKCl34vFjp6YHBpA3VUXsCIQJzi6Ug3sqGBYGp+CiTZt42DDi7sEkd4YDAG41bkAzZ2q7KZbrdE+7IN5Hz5pUp/ola2YtBxVcnLEFbbZuWmbaSKrS3a7N1ku5/80jinW1+xcAYc/b/X3iE8/gA95brt7F6sKRSQiGdh1TdMo6cdzqhJTzgKAE+l0TJSU5JLHJmbbWUzhiz5dqZS4ZF/k+X0JrzNerIaPvwmCcMPET2s6RwPcJN+Tb24SbW2sSInEhQB2SkOjQhe3Nnybf0waEgACVwpyK0fnp0qgo8dGCUMdxwsAVnEdYuqTEGUGpQYV0IbEyGTuwwrF1um8nNytvyvLRrW6ld5IhQghxn4XEQCDzggCA41mOzoz7cz2n2XpiPaVlOpTIO3pXoH3vek8UiQ6RDocwnGDYYBi/gFCsC3o2JdBvQAAAABJRU5ErkJggg==',
    order: 884,
    base_experience: 159,
  },
  {
    id: 753,
    name: 'fomantis',
    weight: 15,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png',
    chain: [
      {
        species_name: 'fomantis',
      },
      {
        species_name: 'lurantis',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACrUlEQVQ4T2NkYGBgOLegyJnj/2cpjq8c5oIvzq85IBWq+/E/r8xVYanb3REec1IWbmnK+7xZ6DvDP6enopKdQeFNCxlBGk9sarER//O18en7X3v5Pj0TvfbT8NMffkbzp1zsdfHu6lePH721VYPhhcnzz39WOCV0pvz/z8DI+L+hgYmxoeHftC3TBPUfX6r/xvTMW0hUWeXSSbWXwubn9ilz87uIf2ERPfT47dGggtkODAwMfxpAekA27t/fwOLo2PDnf2go22nTB0IXWLRbmP8ZJH9hZGT4/OTGYp3+h90BDC53GBiKvq8KDWUOW736L1gjCPxftYqZMSzsL4g9e+qyQ3+5FWz3X3x1dWW/vzEDA+NPkHgDAwNTAwPDPxAbrhHK/n97GwP71rtr3fec/lL+7O2zvHNbK8+CFDooMAj8k7Ob8+rVq6obN27cQtbIEBq6inn16jCQif9tEtfuuDc/OO0ZA8Oj0L7/nF8OJC/6/+tRyPPn750uXjy7H66xoeE/U0MD4z+ntC0FOrICpixMjME33/05wvDr8/bvT69oC7E/Snx869DFk2evGKA4FWrbX4bgIyYNFp/3C/Hx8Oy6x8zA8mgjw9tHx04/fnB4GgOr5o0HD66fAHkLxakMDf+ZGBoY/+mrM6yRUfYL+PjqOPPPv5wMIhJa37Zv38HHwMDwNzQ0lHk1cqiuWhXKHBa2+u+UtkTz2/eetLrYmr5cs+WUxsLV1x7Z2ShJffj0vvvSpatrMDTCQhUkwcfytFdPS9eej48vbMqc5cnsbIyzVZVlMxeuOlYCiz4Up6alGbPOmnX2t5WVaaqDmYrP3kMnavl4eTx2H7zc1V4RN1dCXSk7MbHhB4YfYc6tyI/MkhTieZ5fP/uAra0mh7mCySchGZaQqvb5C2E2AgCWiyqhjRc8agAAAABJRU5ErkJggg==',
    order: 886,
    base_experience: 50,
  },
  {
    id: 754,
    name: 'lurantis',
    weight: 185,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png',
    chain: [
      {
        species_name: 'fomantis',
      },
      {
        species_name: 'lurantis',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACtUlEQVQ4T2WSbUhTYRTHz713my/T0s2J2SqTajpTcyslpXXTUjcI+uBVezH3aR+0IgyDgugWFOKHCAqCUUIvzOaF+lKQQjndJMwmaqYXm2LpdMR0b+l027037mKK9IcHzvOc55yH53f+CACgAMCexfG0TovFDQBgUKuFRrs9zMcEQWB5eXkcSZJoW9vDUufywsyj9vZ5hE9GdexkFcwFSmB28C6/7SIIjCIIoGprGQAQmExvxl0u11JLS1MZn0dOlVfr6WBQ24BChiY3U4MFgy/N7x0dT73jFv6C6vzFOoUkveFwbmGZqfsdTX8fpVYc9AOkGq9o/MCgzSax4Ei9thCQX16Y/DoDZpS5fycYTroeL2zKV5UIBgFb5QZ6WVoYl/Rxij6EaEo1mhVMdC8H4QJn5NsTVX8iC95gqPIzg0qdMimUz0wDU1fP/AgEUOg0h9/ukovE7mUz/8cEVb5KORxml4AemQMAhtASMsVv1y2BCJEvJ6fu2H9QWbxCT6wPLLqDaHKixO3z05twNij9C4iuLlFxd3/NtNXqqEoRvxJLJZk3/asjSSxX2Bfw9UQLcRwXWCyWCAAuMBAysZGifPx5+7UbjwWj3zzZIqxGLN+dY52dvWL0e/bsDYdsfCG/OFynyyhSKHy2Mbo1C+OCtyUJ3kmHX5YoiUsRR0LNQ+k7O1pfP79cUaE7IBJxLoQfMEVRTHnl6fLQ+lqzzbe2+kyZceGcKgtYpw8mJhZgwONtvPrF9oIkASVJYKNzjL2o1+vjHdNzw85wBIi0VKlCGp++jWVY8c8lra7/Uw9nMAgRozECJIkASXIxOFHbFRQUyBOSpf0eFGOmrIuXAHxrAPN9vTguOBFlsKkNqjFA+4qOHhcyEeXk2NCTmPVqKYq33RZtGccmXQC1Wi2027NZgP+L+A5/AdfWJDoiWHf/AAAAAElFTkSuQmCC',
    order: 887,
    base_experience: 168,
  },
  {
    id: 755,
    name: 'morelull',
    weight: 15,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png',
    chain: [
      {
        species_name: 'morelull',
      },
      {
        species_name: 'shiinotic',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACmUlEQVQ4T2NkQAMNDQ1MDQ0N/3CI/2dgYABhBkaoAkbLUEuO46uPfwfxA10CS//8+3Nl877N251kfAK1y/5um5y3/SdMLUgzo4ODA8uBAwf+eNgEOMjqc054+OZGpaKa4tpfn36vZ+BiYPj3mc174ZS1AioMtqJazmxMm/bufQmyEGyjnrSejORLHQ3LesUd9+8++Pbt83fW3z9/HRGW5Xf5w/5lAzs7E9eXl//1Ly/4bHWZYe89kHfAGkMCg1pVvH9VMf0Sfcf1WE2I35Dx//aNO/8z3xd4x8rF+l9Mh030+/8PLQsnbqn9//8/IyMj43+wRr9IP3Fx9V8djJ8FfD49+C/0Q/IV45tTfxkZfv/9LiIqunjDrrc19c8Of2W86fCrwfHAH3jgeDp4ynw+wGp5leGOsI65UCf3P34+Tmlmhk/Mn55rRZxpFBNQYmJg5FY/tvF1+fbJd34y/If60c/ZT5yBkyHw598vKuIc8mlsfMy8hrmvGG4//PXr38+3i3g5vjLdu/6mann1q5cNDQxMDQ0M/0BOBeH/Hh6ugV/vMLnqxvMGyxtxihmZazEcurLr77u77+ZKSf86unvF91UHFjz4EboqlHl12Oq/YD+GhoYys4p841s2feuHrCWsJvoWJrvYuXgELp/7f7nXZ48eSE3LQR3ZGvsrj0FskK2wBICSULpPWC8WkOeP2b329/yHOeztYUd+Hmbh/S3+8MH/R6w/PsV2hp8/hKyRcdX/UKYwxtV/U5a57ZbQEXO5u+fjD5Z73Bw8ygwMrz88X80kxvCcj/nrzjkZZ7ah2AhLp4ETnT14hdgrWFgZhb69/v313euvE3Y1HV0JcxZ2p/5nYGRghCRkZNDwv4GJ4cABJoaDB/6BQhUAcqsXpcL2+N8AAAAASUVORK5CYII=',
    order: 889,
    base_experience: 57,
  },
  {
    id: 756,
    name: 'shiinotic',
    weight: 115,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png',
    chain: [
      {
        species_name: 'morelull',
      },
      {
        species_name: 'shiinotic',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABs0lEQVQ4T2NkwAL+///PyLB6NRNIavVqBoaw1WF/0ZUxYtNIjBiGRpBtBxoX8AsLCZqwfP/x5dfNtywG87KP4LXx////TIyMjP+uz90xS0NSJvX5g/sMH/7/ffln2zNNva1Z7xsaGpgaGhr+gQxBsRGm8VDN9AUKssLxN5/9YPj65eO0gN7c7IaG/0wNDYxgTSga/69axcwYFvb3Sc/G5rc/PpTuf3Pp138B3uP+PDpa3Nx8LeKZbjNXha5ihgUUso0g9v9dSR2rP9lJ/laTVvJ89P3zaaYv3/8JX3hlzNP1UlqboeHXf4b/jIwMjP8xNDIwMHDv3Lp/u6a2pu2N81f/vrh+1flaVd5D6/qZr3wb079hOBXmcTEdHfEK79xbTOxcvBa8bIxs335MNqqPz4N5BUMjSKChYT9LQ4Pjn7Twotna2kYp/G/eMjw6ciS37tzqKfsdGlgcDzT8waqRITSUmWH1alAq0UyIKLj2lYnpxOplfZZIAfkfu0YGBobQ0FDm1atX/3VyCnRi+fT11a4zu64gGQhPB1iTHEwzxPmISEdOPTjTKkiztrb2f1hKQU9yAIWowg9YKka9AAAAAElFTkSuQmCC',
    order: 890,
    base_experience: 142,
  },
  {
    id: 757,
    name: 'salandit',
    weight: 48,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png',
    chain: [
      {
        species_name: 'salandit',
      },
      {
        species_name: 'salazzle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAByElEQVQ4T2NkIBMw4tK3KnQVc6j2tf+MDQ3/sKlB1wji//+/ahUzY1jYX5CG/w0NTIwNDf///2dgYGRk+A8zBMNGmKZjRbWG/7h4vtm0lN9EshFsMIiPptGBg4HhwI8VTvHKBm72l35/+3RNt6nAFKQuMypKYPqyZe+hev6DNa5aFcocFrb6b2NXzRTJ3w/0TWW8NHik+ESY/gkyPLm06uhpFlbxn99Y2qurO+Y1NDSwNDQ0/AFrDF0Vyrw6bPXf/JbqYLP/txeJSFtw8SkY/X33+SUz54PDDFd+/jh96ad6+Jza0vsNDQ1MDQ0N/+BOhZk0szjNhkVAso9RRMP0/+f3b1nfn9139QlzSefiWY9gauB+XBUayhy2evXfzuhMCwNts+P3/79cJP+PLfQfM/O/W9/f7DFll/c/+eKWf/GUrk2rVq1iDgsL+wu2EWZ9aWmVkeRbBmfhb217VF1zD/75w8h7bOYkDz69as17An8v9EzoOIDh1P///zMyMjLC40lUm0FFmM+S88bx45dh0YGsBiU6QKbZMzAwOTAw/IOlGFACOMDAwHSQgeEfKFBwJgCYBMiQq1evMq5evRqcgtABzrRKKO0DAIWMxw/kSisVAAAAAElFTkSuQmCC',
    order: 891,
    base_experience: 64,
  },
  {
    id: 758,
    name: 'salazzle',
    weight: 222,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png',
    chain: [
      {
        species_name: 'salandit',
      },
      {
        species_name: 'salazzle',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACb0lEQVQ4T2NkQAWMDAwM/+FCoQzMDKsZ/oL4DQwMTA0MDP9gciCFYPCfgYGREUQ5MLCsPGXbJJHL6fr/0z+B17sZ7/9/t7sg7B3DtVUMocxhDKvBBsE1zkxLY02fNet3d3RJjCGTwGJ2toMMP7/8/CH0xZDjIPO/I4WbJttC7QC7CqYR5kTWNS6R99nZuL76bptrxsDA8HGNV1qXCDNz6Z7N671bGF5sg9mKrpFhmW/6jU/fvj9Q57i0nOMJl8TJfyzH1eW1Dx68eCmz4/HRGQ0ODiwNBw78wXBqQVhJpTPTlzbz39cZPt/8y7BPUfPZp7+sosXbTiszMJx+zMDQwMTA0PAPJXB2xcZy3V58vtGIgTmNV1uQ9yW36O/bIvKsb/du7qn5ebMUZhs8cJCDeneCxR4JKV7n49d1/0i+ecX4SegK86Vbt+M7r39dhBz6jLBoWOssYbrpezyno/GrDlXB75YXn3/6xfr0NcNbAV228/cZb5/6xpUT8HXm0/47v66C9ex3cGBxPHDgz1EFlbnfFQKTJghxzYmSmuT0646pErPcA4brD0MYfn/8/Efw50cWxo9PtlTe2+f7v6GBCeLHmVJcxzer3H3xiFNiF+/OHjURuxLmW2xv7yq93xDx6qvG55ti1pflOBm4BBkY1v/YKbfrNMNjsMYFbbbWkrz/F904wnbwxotbq3UMFGW2bOVZuf3O9k+n7W1vCsgIqq35/fYpL//T3XceMzRO2PHgATxU0dIsnLu5xjKfUfSv29NX7zemt96ehRRACC3/Gf4zrg5lZLqm7cDI0HDgH3KiBqlatSqUOSxsNSih/wcAmNEPHzeh5J8AAAAASUVORK5CYII=',
    order: 892,
    base_experience: 168,
  },
  {
    id: 759,
    name: 'stufful',
    weight: 68,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png',
    chain: [
      {
        species_name: 'stufful',
      },
      {
        species_name: 'bewear',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABSklEQVQ4T2NkIBMw4tDH+P9/AyMjY8N/BgYGEMYAGBr////PBFLMyMj4H8JuZGBkbPiHrhNFI0ghIyMjhqKGhgamhgZUzXCNME0vXrzgZnx7u4Txzy/739+/HpC28OtmYGD4/r+hgYkRSTNc46pVq5jDwsL+nju6v1xeUaWDkZmF4f/Xtwwf7x2vU3JJbUZ3DVjj//8NTDB/3D67fxs3t5Dn+08/PsqI8fJ/unnwmKx7pg1IGbKTwRqRBQ5vmL7oPT937Psf//9YsP9n+XTj8mbTrF4/iAWgMGMEhzLcqQ0NDSwNDQ1/cssSLHTU9DbziYiIMDx98vLfvZth0b0LD8G8AgtdZI3gkPu/KpT53gtt/28sbBpfmFgvW2aUbv7PwMDIiBafGPGIHvTooYlhI3IEg5wlKirK6ODg8BfmJ7wJgJRkiyutEjQDAEXumQ+GlPkTAAAAAElFTkSuQmCC',
    order: 894,
    base_experience: 68,
  },
];
export default POKEMON;
