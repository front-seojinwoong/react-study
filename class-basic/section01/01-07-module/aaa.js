import 딸기, {apple, grape} from './bbb.js';

console.log('딸기', 딸기);
console.log('사과', apple);
console.log('포도', grape);

import * as 과일뭉치 from './bbb.js';

console.log('과일뭉치: ', 과일뭉치);
console.log('과일뭉치.사과: ', 과일뭉치.apple);
console.log('과일뭉치.default: ', 과일뭉치.default);
console.log('과일뭉치,포도: ', 과일뭉치.grape);