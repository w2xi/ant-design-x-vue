import type { AvatarProps } from 'ant-design-vue';
import type { CSSProperties, HTMLAttributes, VNode } from 'vue';

export interface TypingOption {
  /**
   * @default 1
   */
  step?: number;
  /**
   * @default 50
   */
  interval?: number;
  /**
   * @default null
   */
  suffix?: VNode;
}

type SemanticType = 'avatar' | 'content' | 'header' | 'footer';

export interface BubbleProps extends /* @vue-ignore */ Omit<HTMLAttributes, 'content'> {
  prefixCls?: string;
  rootClassName?: string;
  styles?: Partial<Record<SemanticType, CSSProperties>>;
  classNames?: Partial<Record<SemanticType, string>>;
  avatar?: AvatarProps | VNode;
  placement?: 'start' | 'end';
  loading?: boolean;
  typing?: boolean | TypingOption;
  content?: VNode | object | string;
  messageRender?: (content: string) => VNode;
  loadingRender?: () => VNode;
  variant?: 'filled' | 'borderless' | 'outlined' | 'shadow';
  shape?: 'round' | 'corner';
  onTypingComplete?: VoidFunction;
  header?: VNode;
  footer?: VNode;
}

export interface BubbleRef {
  nativeElement: HTMLElement;
}

export interface BubbleContextProps {
  onUpdate?: VoidFunction;
}

export interface BubbleListRef {
  nativeElement: HTMLDivElement;
  scrollTo: (info: {
    offset?: number;
    key?: string | number;
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
  }) => void;
}

export type BubbleDataType = BubbleProps & {
  key?: string | number;
  role?: string;
};

export type RoleType = Partial<Omit<BubbleProps, 'content'>>;

export type RolesType = Record<string, RoleType> | ((bubbleDataP: BubbleDataType) => RoleType);

export interface BubbleListProps extends /* @vue-ignore */ HTMLAttributes {
  prefixCls?: string;
  rootClassName?: string;
  items?: BubbleDataType[];
  autoScroll?: boolean;
  roles?: RolesType;
}
