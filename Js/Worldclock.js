var timeInfo = {
    template: "#timeInfo",
    props: ["propData"],
    data() {
      return {
        comData: this.propData
      };
    }
  };
  var app = new Vue({
    el: "#app",
    data: {
      country: [
        {
          city: "NEW YORK",
          timeZone: "America/New_York",
          time: null,
          date: null
        },
        {
          city: "LONDON",
          timeZone: "Europe/London",
          time: null,
          date: null
        },
        {
          city: "BANGKOK",
          timeZone: "Asia/Bangkok",
          time: null,
          date: null
        },
        {
          city: "TAIWAN",
          timeZone: "Asia/Taipei",
          time: null,
          date: null
        },
        {
          city: "SYDNEY",
          timeZone: "Australia/Sydney",
          time: null,
          date: null
        }
      ]
    },
    components: {
      "time-info": timeInfo
    },
    created() {
      this.updateTime();
    },
    methods: {
      getData() {
        var vm = this;
        var setting = {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour12: false,
          minute: "numeric",
          hour: "numeric"
        };
        var data = vm.country.forEach(function (element) {
          var option = { timeZone: element.timeZone, ...setting };
          var arr = new Date().toLocaleDateString("en-GB", option).split(" ");
          var currentDay = arr.slice(0, 3);
          currentDay.splice(1, 0, " ");
          currentDay.splice(3, 0, ".");
          element.date = currentDay.join("").replace(/\,/g, "");
          element.time = arr.slice(3).join("");
        });
      },
      updateTime() {
        var vm = this;
        setInterval(() => vm.getData(), 1000);
      }
    }
  });
  