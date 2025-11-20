export interface Step {
  id: string;
  header: string;
  description?: string;
  selector: string;
  popperPlacement?: "right" | "left" | "bottom" | "top";
}

export interface IProductTour {
  slug: string;
  steps: Array<Step>;
}

export const productTour: IProductTour = {
  slug: "test-tour",
  steps: [
    {
      id: "red",
      header: "Шаг 1",
      description: "Тестовый шаг 1",
      selector: "#red",
      popperPlacement: "bottom",
    },
    {
      id: "green",
      header: "Шаг 2 (popperPlacement: right)",
      description:
        "Тестовый шаг 2. C очень длинным описанием. C Очень длинным. С ОЧЕНЬ. ОЧЕНЬ ДЛИННЫМ. Очень-очень-очень-очень. Cколько ж можно, сколько ж можно, сколько ж можно, сколько ж можно",
      selector: "#green",
      popperPlacement: "left",
      //   mobilePopperPlacement: 'left',
    },
    {
      id: "yellow",
      header: "Шаг 3",
      selector: "#yellow",
      popperPlacement: "top",
    },
    {
      id: "blue",
      header: "Шаг 4 (со скроллом)",
      description: "Тестовый шаг 4",
      selector: "#blue",
    },
  ],
};
