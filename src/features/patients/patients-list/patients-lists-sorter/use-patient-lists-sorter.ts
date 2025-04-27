import {
  PATIENT_SORT_COLUMNS,
  PATIENT_SORT_ORDERS,
} from "../patients-list.constants";

export const usePatientListsSorter = () => {
  const sortingOptions = Object.keys(PATIENT_SORT_COLUMNS).flatMap((column) => {
    return Object.keys(PATIENT_SORT_ORDERS).map((order) => {
      const optionValue = `${column}-${order}`;
      const columnLabel = column.charAt(0).toUpperCase() + column.slice(1);
      const orderLabel =
        order === PATIENT_SORT_ORDERS.asc
          ? "Ascending Order"
          : "Descending Order";
      return {
        value: optionValue,
        label: `${columnLabel} - ${orderLabel}`,
      };
    });
  });

  return {
    sortingOptions,
  };
};
