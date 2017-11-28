/* eslint no-undef:0 */
import reducers  from '../../reducers';
import * as types from '../../constants/ActionTypes';


describe('films reducers', () => {

  it('fetchFilmsSuccess should return initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      "films": {
        "movies": [],
        "totalResults": 0
      },
      "query": [],
      "routing": {"locationBeforeTransitions": null},
      "search": ["title"],
      "sort": ["release date"]
    })
  });

  it('changeQuery should return initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      "films": {
        "movies": [],
        "totalResults": 0
      },
      "query": [],
      "routing": {"locationBeforeTransitions": null},
      "search": ["title"],
      "sort": ["release date"]
    });
  });

  it(`changeSearchBy should handle ${types.SEARCH_BY}`, () => {
    expect(
      reducers({
        "films": {
          "movies": [],
          "totalResults": 0
        },
        "query": [],
        "routing": {"locationBeforeTransitions": null},
        "search": ["title"],
        "sort": ["release date"]
      },
        {type: types.SEARCH_BY, sortValue: 'director'})
    ).toEqual({
      "films": {
        "movies": [],
        "totalResults": 0
      },
      "query": [],
      "routing": {"locationBeforeTransitions": null},
      "search": ["director"],
      "sort": ["release date"]
    });
  });

});