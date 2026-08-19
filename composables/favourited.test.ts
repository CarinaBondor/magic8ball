import { beforeEach, describe, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useFavouriteStore } from "../store/useFavouriteStore";

describe("useFavouriteStore", () => {
    beforeEach(() => {
        localStorage.clear();
        setActivePinia(createPinia());
    });

    it("filters out invalid entries loaded from localStorage", () => {
        localStorage.setItem(
            "favourites",
            JSON.stringify(["ZgFtPfa2LBd", { id: "1", advice: "Be kind" }]),
        );

        const store = useFavouriteStore();
        store.getFavsFromLocalStorage();

        expect(store.favouritedAdvices).toEqual([{ id: "1", advice: "Be kind" }]);
    });
});
