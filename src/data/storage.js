const KEY = "apihub-apis";

export const getStoredApis = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveApi = (api) => {
  const old = getStoredApis();
  const updated = [...old, api];
  localStorage.setItem(KEY, JSON.stringify(updated));
};
