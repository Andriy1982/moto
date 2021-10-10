import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
//app
import {partnerActions, partnerSelectors} from '@app/bus/partner';
import {uiSelectors} from '@app/bus/ui';
import {useState} from 'react';
import {appActions, appSelectors} from '@app/bus/app';

const LIMIT = 20;

export const useData = () => {
  const dispatch = useDispatch();

  const [isRefresh, setIsRefresh] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [filterCity, setFilterCity] = useState<string>();

  const isInit = useSelector(partnerSelectors.getInit);
  const isLoading = useSelector(uiSelectors.getLoading('partner_list'));
  const partners = useSelector(partnerSelectors.getItems);
  const skip = useSelector(partnerSelectors.getSkip);
  const count = useSelector(partnerSelectors.getCount);

  const cities = useSelector(appSelectors.getCities);
  const categories = useSelector(appSelectors.getCategories);

  const fetchCities = useCallback(() => {
    dispatch(appActions.fetchCitiesAsync());
  }, []);

  useEffect(() => {
    fetchCities();
  }, []);

  const onReset = useCallback(() => {
    setIsRefresh(true);

    const filters: {
      city?: string;
      categories?: string[];
    } = {};
    if (filterCategory.length > 0) {
      filters.categories = filterCategory;
    }
    if (filterCity) {
      filters.city = filterCity;
    }
    dispatch(
      partnerActions.fetchItemsAsync({
        skip: 0,
        limit: LIMIT,
        ...filters,
      }),
    );
  }, [filterCategory, filterCity]);

  const onMore = useCallback(() => {
    const filters: {
      city?: string;
      categories?: string[];
    } = {};
    if (filterCategory.length > 0) {
      filters.categories = filterCategory;
    }
    if (filterCity) {
      filters.city = filterCity;
    }

    if (count > skip) {
      dispatch(
        partnerActions.fetchItemsAsync({
          skip: skip + LIMIT,
          limit: LIMIT,
        }),
      );
    }
  }, [skip, count, filterCategory, filterCity]);

  useEffect(() => {
    onReset();
  }, [onReset]);

  useEffect(() => {
    if (!isLoading) {
      setIsRefresh(false);
    }
  }, [isLoading]);

  return {
    isInit,
    partners,
    isLoading,
    isRefresh,
    cities,
    categories,
    filterCity,
    filterCategory,
    setFilterCategory,
    setFilterCity,
    onReset,
    onMore,
  };
};
