import { defineStore } from "pinia";
import type { Card } from "../../types/types";
import { getArmSchema } from "../../data/10-arms";

export const useArmsStore = defineStore("arms", {
  state: () => ({
    Nextid: 1,
    armsCards: {} as Record<number, Card>,
  }),
  actions: {
    addArmPage() {
      const id = this.Nextid++;

      const armCard: Card = {
        title: `arm-${id}`,
        schema: getArmSchema(`ARM-${id}`),
      };

      this.armsCards[id] = armCard;

      return armCard;
    },
    removeArm(id: number) {
      if (id in this.armsCards) {
        delete this.armsCards[id];
      }
    },
    getArmTitle(id: number) {
      if (id in this.armsCards) {
        return this.armsCards[id].title;
      }
    },
    getArms() {
      return this.armsCards;
    },
  },
});
