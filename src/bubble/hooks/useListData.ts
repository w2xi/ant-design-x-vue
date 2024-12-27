import { computed, Ref } from 'vue';
import type { BubbleDataType, BubbleListProps } from '../interface';
import type { BubbleProps } from '../interface';

export type UnRef<T extends Ref<any>> = T extends Ref<infer R> ? R : never;

export type ListItemType = UnRef<ReturnType<typeof useListData>>[number];

export default function useListData(
  items: BubbleListProps['items'],
  roles?: BubbleListProps['roles'],
) {
  const getRoleBubbleProps = (bubble: BubbleDataType): Partial<BubbleProps> => {
    if (typeof roles === 'function') {
      return roles(bubble);
    }

    if (roles) {
      return roles[bubble.role!] || {};
    }

    return {};
  }

  const listData = computed(() =>
    (items || []).map((bubbleData, i) => {
      const mergedKey = bubbleData.key ?? `preset_${i}`;

      return {
        ...getRoleBubbleProps(bubbleData),
        ...bubbleData,
        key: mergedKey,
      };
    }));

  return listData as Ref<any>;
}
