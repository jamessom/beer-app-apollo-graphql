/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BeersPreviewQuery
// ====================================================

export interface BeersPreviewQuery_beers {
  __typename: "Beer";
  id: string;
  name: string;
}

export interface BeersPreviewQuery {
  /**
   * Request a beers collection.
   * You need to specify the page and the pageSize of `BeersInput`
   */
  beers: BeersPreviewQuery_beers[];
}

export interface BeersPreviewQueryVariables {
  page: number;
}
