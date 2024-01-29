import { baseApi } from "../../api/baseApi";

type TQueryObj = {
  searchTerm: string;
  minPrice: number;
  maxPrice: number;
};

const createSearchQuery = (queryObj: TQueryObj) => {
  const keys = Object.keys(queryObj);
  if (keys.length > 0) {
    let queryAttach = "";
    for (const [key, value] of Object.entries(queryObj)) {
      // add valuable query field
      if (typeof value !== "undefined") {
        queryAttach += `&${key}=${value}`;
      }
    }
    return `?${queryAttach}`;
  } else {
    return "";
  }
};

const gadgetManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGadgets: builder.query({
      query: (query) => {
        console.log(createSearchQuery(query));
        return {
          url: `/gadgets${createSearchQuery(query)}`,
          // url: `/gadgets`,
          method: "GET",
        };
      },
      providesTags: (query) => [{ type: "gadgets", id: query.searchTerm }],
    }),
    updateGadgets: builder.mutation({
      query: ({ updateGadgetsValue, gadgetsId }) => {
        console.log(updateGadgetsValue, gadgetsId);
        return {
          url: `/gadgets/${gadgetsId}`,
          method: "PATCH",
          body: updateGadgetsValue,
        };
      },
      invalidatesTags: ["gadgets"],
    }),
  }),
});

export const { useGetAllGadgetsQuery, useUpdateGadgetsMutation } =
  gadgetManagmentApi;
