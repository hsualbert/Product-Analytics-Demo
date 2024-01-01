# Product-Analytics-Demo

Link to the [Github Page](https://hsualbert.github.io/Product-Analytics-Demo/)


### Description
This application displays a single product and it's sales data. On the left side, the product overview can be seen. On the main view, a chart and table with the sales data can be viewed. The chart has 4 data series and each data series can be toggled by clicking on the data series label on the bottom of the chart. The table displays the sales data and the following columns can be sorted: Retail Sales, Wholesale Sales, Units Sold, Retailer Margin

### Package Used 
1. React Typescript
2. React Redux
3. React bootstrap
4. HighCharts
5. eslint/prettier


### Ways to Improve and Limitation

1. The mock data given is structured like an array but with only 1 entry. This to me indicates that the API should return a list of products with sales data. Currently, there's no way to select a different product. A listview with all the available products from the data with the ability to select a product that takes the app to the product analytics page would be appropriate.
   
3. Improvement on chart. The chart with 4 data series can be hard to read. A component that manages the data series to display might clean up the look. Also, better color schemes and better labels (Datapoint, x-axis, y-axis, title) on the chart would be ideal.
   
5. Improvment on the table. In the interest of time, I decided to just use React Bootstrap's table component and implement a very simple sort. With a more robust table package, a more complex sort can be implemented as well as pagination. 

