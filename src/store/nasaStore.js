import create from 'zustand';

const useNasaStore = create(set => ({
    data: null,
    isLoading: false,
    fetchData: (url) => {
        set({ isLoading: true });
        fetch(url)
            .then(response => response.json())
            .then(data => {
                set({ data, isLoading: false });
            });
    },
}));

export default useNasaStore;
