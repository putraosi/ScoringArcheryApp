import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {colors, FlatListProps} from '../../utils';

interface ListProps {
  style?: object;
  ref?: any;
  data: any;
  renderItem(data: FlatListProps): any;
  renderEmpty?(): any;
  refreshing?: boolean;
  horizontal?: boolean;
  loading?: boolean;
  numColumns?: number;
  onRefresh?(): void;
  onLoadMore?(): void;
}

const List = ({
  style,
  ref,
  data,
  renderItem,
  renderEmpty,
  refreshing,
  horizontal = false,
  loading,
  numColumns = 1,
  onRefresh,
  onLoadMore,
}: ListProps) => {
  const renderLoader = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    ) : null;
  };

  return (
    <FlatList
      ref={ref}
      style={style}
      keyExtractor={(item, index) => 'key' + index}
      data={data}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshing={refreshing}
      horizontal={horizontal}
      numColumns={numColumns}
      onRefresh={onRefresh}
      renderItem={renderItem}
      ListFooterComponent={renderLoader}
      ListEmptyComponent={renderEmpty}
      onEndReached={onLoadMore}
      onEndReachedThreshold={2}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  loader: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
