export default () => [
  {
    title: "采购需求管理",
    children: [
      {
        title: "采购需求查询",
        path: "/requirement",
      },
    ],
  },
  {
    title: "管理基础数据",
    children: [
      {
        title: "品类物料库",
        children: [
          {
            title: "品类框架",
            path: "/info/material/category",
          },
        ],
      },
      {
        title: "模版库",
        path: "/info/template",
      },
    ],
  },
];
