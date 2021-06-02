import OneOne from "../components/One/1";
import OneTwo from "../components/One/2";

import TwoOne from "../components/Two/1";
import TwoTwo from "../components/Two/2";

import ThreeOne from "../components/Three/1";

import FourOne from "../components/Four/1";
import FourTwo from "../components/Four/2";
import FourThree from "../components/Four/3";
import FiveOne from "../components/Five/1";
import FiveTwo from "../components/Five/2";
import FiveThree from "../components/Five/3";

const model = [
  {
    component: OneOne,
    code: 'ONE',
    children: [
      {
        component: OneTwo,
        code: "ONE_TWO"
      }
    ]
  },
  {
    component: TwoOne,
    code: 'TWO',
    children: [
      {
        component: TwoTwo,
        code: "TWO_TWO"
      }
    ]
  },
  {
    component: ThreeOne,
    code: 'THREE',
  },

  {
    component: FourOne,
    code: 'FOUR',
    children: [
      {
        component: FourTwo,
        code: "FOUR_TWO",
        children: [
          {
            component: FourThree,
            code: "FOUR_TWO_THREE"
          }
        ]
      }
    ]
  },

  {
    component: FiveOne,
    code: "FIVE",
    children: [
      {
        component: FiveTwo,
        code: "FIVE_TWO"
      },
      {
        component: FiveThree,
        code: "FIVE_THREE"
      }
    ]
  }
]

export default model;