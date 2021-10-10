import FilterButton from '@app/component/Buttons/FilterButton/FilterButton';
import {InputCheckBox} from '@app/component/InputCheckBox/InputCheckBox';
import {ModalComponent} from '@app/component/ModalComponent/ModalComponent';
import React, {useMemo, useState} from 'react';
import {
  Sidebar,
  FilterList,
  FlexMore,
  Additional,
  DownArrow,
  TextInput,
  MobileSidebar,
  FilterButtons,
  MoreFilter,
} from './PartnersSidebar.style';
import {useData} from '@app/pages/PartnersPage/useData';
// @ts-ignore
import {Media} from 'react-breakpoints';

interface ActiveValues {
  city?: boolean;
  category?: boolean;
}

export const PartnersSidebar: React.FC = () => {
  const {cities, categories, filterCategory, filterCity, setFilterCategory, setFilterCity} =
    useData();
  const [isActive, setActive] = useState({city: false, category: false});
  const [isModal, setModal] = useState({city: false, category: false});

  const [cityInputFilter, setCityInputFilter] = useState<string>('');

  const searchedCities = useMemo(() => {
    return [...cities].filter((city) => city.toLowerCase().includes(cityInputFilter.toLowerCase()));
  }, [cities, cityInputFilter]);

  const toggleActive = (value: ActiveValues) => {
    setActive({...isActive, ...value});
  };
  const toggleModal = (value: ActiveValues) => {
    setModal({...isModal, ...value});
  };

  const getCategoryFilter = (filter: string) => {
    const filterCopy = [...filterCategory];
    if (filterCategory.includes(filter)) {
      filterCopy.splice(filterCategory.indexOf(filter), 1);
    } else {
      filterCopy.push(filter);
    }
    setFilterCategory(filterCopy);
  };
  const getCityFilter = (filter: string) => {
    if (filterCity === filter) {
      setFilterCity('');
    } else setFilterCity(filter);
  };

  const filterSlice = (arr: string[]) => {
    let mainFilters: string[] = arr;
    let moreFilters: string[] = [];
    if (arr.length > 5) {
      mainFilters = arr.slice(0, 5);
      moreFilters = arr.slice(5, arr.length);
      return [mainFilters, moreFilters];
    }
    return [mainFilters, moreFilters];
  };
  const [mainCategories, moreCategories] = filterSlice(categories);
  const [mainCities, moreCities] = filterSlice(searchedCities);
  return (
    <div>
      <Media>
        {({breakpoints, currentBreakpoint}: any) =>
          breakpoints[currentBreakpoint] < breakpoints.md ? (
            <MobileSidebar>
              <FilterButtons>
                <FilterButton
                  text="Категории"
                  color="primary"
                  size={15}
                  icon="list"
                  onClick={() => toggleModal({category: true})}
                />
                <FilterButton
                  text="Москва"
                  color="primary"
                  size={15}
                  icon="place"
                  onClick={() => toggleModal({city: true})}
                />
              </FilterButtons>
              <ModalComponent
                isActive={isModal.category}
                toggleActive={() => toggleModal({category: false})}>
                <h2>Категория</h2>
                <FilterList>
                  {categories.map((category, i) => (
                    <InputCheckBox
                      key={i}
                      value={category}
                      getFilter={getCategoryFilter}
                      checked={filterCategory.includes(category)}
                    />
                  ))}
                </FilterList>
              </ModalComponent>
              <ModalComponent
                isActive={isModal.city}
                toggleActive={() => toggleModal({city: false})}>
                <h2>Город</h2>
                <TextInput
                  type="text"
                  placeholder="Москва"
                  value={cityInputFilter}
                  onChange={(e) => setCityInputFilter(e.currentTarget.value)}
                />
                <FilterList>
                  {searchedCities.map((city, i) => (
                    <InputCheckBox
                      key={i}
                      value={city}
                      getFilter={getCityFilter}
                      checked={filterCity === city}
                    />
                  ))}
                </FilterList>
              </ModalComponent>
            </MobileSidebar>
          ) : (
            <Sidebar>
              <div>
                <h2>Категория</h2>
                <FilterList>
                  {mainCategories.map((category, i) => (
                    <InputCheckBox
                      key={i}
                      value={category}
                      getFilter={getCategoryFilter}
                      checked={filterCategory.includes(category)}
                    />
                  ))}
                </FilterList>
                {!!moreCategories.length && (
                  <>
                    <FlexMore onClick={() => toggleActive({category: !isActive.category})}>
                      <Additional>Все категории</Additional>
                      <DownArrow isActive={isActive.category} />
                    </FlexMore>
                    <MoreFilter isActive={isActive.category}>
                      {moreCategories.map((category, i) => (
                        <InputCheckBox
                          key={i}
                          value={category}
                          getFilter={getCategoryFilter}
                          checked={filterCategory.includes(category)}
                        />
                      ))}
                    </MoreFilter>
                  </>
                )}
              </div>
              <div>
                <h2>Город</h2>
                <TextInput
                  type="text"
                  placeholder="Москва"
                  value={cityInputFilter}
                  onChange={(e) => setCityInputFilter(e.currentTarget.value)}
                />
                <FilterList>
                  {mainCities.map((city, i) => (
                    <InputCheckBox
                      key={i}
                      value={city}
                      getFilter={getCityFilter}
                      checked={filterCity === city}
                    />
                  ))}
                </FilterList>
                {!!moreCities.length && (
                  <>
                    <FlexMore onClick={() => toggleActive({city: !isActive.city})}>
                      <Additional>Все города</Additional>
                      <DownArrow isActive={isActive.city} />
                    </FlexMore>
                    <MoreFilter isActive={isActive.city}>
                      {moreCities.map((city, i) => (
                        <InputCheckBox
                          key={i}
                          value={city}
                          getFilter={getCategoryFilter}
                          checked={filterCity === city}
                        />
                      ))}
                    </MoreFilter>
                  </>
                )}
              </div>
            </Sidebar>
          )
        }
      </Media>
    </div>
  );
};
