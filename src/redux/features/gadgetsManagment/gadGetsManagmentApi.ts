import { baseApi } from "../../api/baseApi";

const gadgetManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGadgets: builder.query({
      query: () => ({
        url: "/gadgets",
        method: "GET",
      }),
      providesTags: ["gadgets"],
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
