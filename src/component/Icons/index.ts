import React from 'react';

import {TIconProps} from './type';

//icons
import {PhoneIcon} from './Phone';
import {EyeIcon} from './Eye';
import {EyeSlashIcon} from './EyeSlash';
import {GpIcon} from './Gp';
import {VkIcon} from './Vk';
import {FbIcon} from './Fb';
import {UserIcon} from './User';
import {EmailIcon} from './Email';
import {PlaceIcon} from './Place';
import {EventIcon} from './Event';
import {SosIcon} from './Sos';
import {PartnerIcon} from './Partner';
import {PhotoIcon} from './Photo';
import {BackIcon} from './Back';
import {QuestionCircleIcon} from './QuestionCircle';
import {FbCircleIcon} from './FbCircle';
import {MotorcycleIcon} from './Motorcycle';
import {PlusCircleIcon} from './PlusCircle';
import {TelegramIcon} from './Telegram';
import {WatsAppIcon} from './WatsApp';
import {ChevronRightIcon} from './ChevronRight';
import {CaretIcon} from './Caret';
import {CloseIcon} from './Close';
import {LinkIcon} from './Link';
import {SendIcon} from './Send';
import {ListIcon} from './List';
import {PlusCircle2Icon} from './PlusCircle2';
import {DateIcon} from './Date';
import {TimeIcon} from './Time';
import {ImageIcon} from './Image';
import {SnowmobileIcon} from './Snowmobile';
import {AtvIcon} from './Atv';
import {InstagramIcon} from './Instagram';
import {NextIcon} from './Next';
import {ChatIcon} from './Chat';

const IconNames = [
  'phone',
  'eye',
  'eye-slash',
  'google',
  'vk',
  'fb',
  'user',
  'email',
  'place',
  'event',
  'sos',
  'partner',
  'photo',
  'back',
  'question-circle',
  'fb-circle',
  'moto',
  'plus-circle',
  'telegram',
  'wats-app',
  'chevron-right',
  'caret',
  'close',
  'link',
  'send',
  'list',
  'plus-circle-2',
  'date',
  'time',
  'image',
  'snowmobile',
  'atv',
  'instagram',
  'next',
  'chat',
] as const;

export type TIconNames = typeof IconNames[number];

export const Icons: Map<TIconNames, React.FC<TIconProps>> = new Map([
  ['phone', PhoneIcon],
  ['eye', EyeIcon],
  ['eye-slash', EyeSlashIcon],
  ['google', GpIcon],
  ['fb', FbIcon],
  ['vk', VkIcon],
  ['user', UserIcon],
  ['email', EmailIcon],
  ['place', PlaceIcon],
  ['event', EventIcon],
  ['sos', SosIcon],
  ['partner', PartnerIcon],
  ['photo', PhotoIcon],
  ['back', BackIcon],
  ['question-circle', QuestionCircleIcon],
  ['fb-circle', FbCircleIcon],
  ['moto', MotorcycleIcon],
  ['plus-circle', PlusCircleIcon],
  ['telegram', TelegramIcon],
  ['wats-app', WatsAppIcon],
  ['chevron-right', ChevronRightIcon],
  ['caret', CaretIcon],
  ['close', CloseIcon],
  ['link', LinkIcon],
  ['send', SendIcon],
  ['list', ListIcon],
  ['plus-circle-2', PlusCircle2Icon],
  ['date', DateIcon],
  ['time', TimeIcon],
  ['image', ImageIcon],
  ['snowmobile', SnowmobileIcon],
  ['atv', AtvIcon],
  ['instagram', InstagramIcon],
  ['next', NextIcon],
  ['chat', ChatIcon],
]);
