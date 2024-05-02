import React from 'react';
import { updateSelectedLanguage } from '../../state/tableFilters/tableFilters.slice.js';
import { useDispatch, useSelector } from 'react-redux';

function AppDevsFilterForm() {
  let languages = useSelector((state) => state.tableFilter.availableLanguages);
  let selectedLang = useSelector((state) => state.tableFilter.selectedLanguage);
  const dispatch = useDispatch();
  return (
    <>
      <ul className={'mb-3 flex justify-center gap-3'}>
        {languages.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => {
                dispatch(updateSelectedLanguage(item.name));
              }}
              className={`${
                selectedLang.toLowerCase() === item?.name?.toLowerCase()
                  ? 'h-8 w-28 items-center rounded-3xl border-2 border-amber bg-amber font-medium'
                  : 'link-style'
              } uppercase`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AppDevsFilterForm;
