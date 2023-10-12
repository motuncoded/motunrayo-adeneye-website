import { annotate } from "https://unpkg.com/rough-notation?module";

const n1 = document.querySelector("#user");

const a1 = annotate(n1, { type: "box", color: "purple" });

a1.show();
