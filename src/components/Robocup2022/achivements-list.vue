<template>
  <div style="width: 100%; background-color: #1cc3b2" class="text-center py-5">
    <h1>Our Achivements</h1>
    <v-row>
      <v-col
        v-for="achive in achivement"
        :key="achive.id"
        lg="4"
        md="6"
        sm="12"
      >
        <h1 class="achivement-year">
          {{ achive.year }}
        </h1>
        <ul v-for="achivements in achive.achivements" :key="achivements.id">
          <li class="achivement-list text-start px-5">{{ achivements.achivements }}</li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      achivement: [
        {
          id: 1,
          year: "2017",
          achivements: [
            { achivements: "1. 3rd Place on Regional KRSBI" },
            { achivements: "2. Best Robot Design on Regional KRSBI" },
            { achivements: "3. Best Robot Design on National KRSBI" },
            { achivements: "4. Best Innovation on National KRSBI" },
          ],
        },
        {
          id: 2,
          year: "2018",
          achivements: [
            { achivements: "1. 1st Place on Regional KRSBI" },
            { achivements: "2. Best Strategy on Regional KRSBI" },
            { achivements: "3. 2nd Place on National KRSBI" },
            { achivements: "4. 1st Place Passing Challenge on FIRA RoboWorldCup" },
            {
              achivements:
                "5. 3rd Place Obstacle Avoidance Challenge on FIRA RoboWorldCup",
            },
            {
              achivements:
                "6. 3rd Place Localization Challenge on FIRA RoboWorldCup",
            },
          ],
        },
        {
          id: 3,
          year: "2019",
          achivements:[
            {achivements: "1. 1st Place on Regional KRSBI"},
            {achivements: "2. Best Design on Regional KRSBI"},
            {achivements: "3. 1st Place on National KRSBI"},
            {achivements: "4. 5th Place on Middle Size League on Robocup"},
            {achivements: "5. 2nd Place Obstacle Avoidance on FIRA RoboWorldCup"},
            {achivements: "6. 2nd Place Localization Challenge on FIRA RoboWorldCup"},
          ]
        },
        {
          id: 4,
          year: "2020",
          achivements: [
            { achivements: "1. 1st Place on Regional KRSBI" },
            { achivements: "2. Best Design on Regional KRSBI" },
            { achivements: "3. 1st Place on Regional KRSBI" },
            { achivements: "4. Best Design on National KRSBI" },
          ],
        },
        {
          id: 5,
          year: "2021",
          achivements: [
            { achivements: "1. 2nd Place on Regional KRSBI" },
            { achivements: "2. 2nd Place on National KRSBI" },
            { achivements: "3. Best Design on National KRSBI" },
            { achivements: "4. 6th Place Technical Challenge on Robocup" },
            { achivements: "5. 7th Place Scientific Challenge on Robocup" },
            {
              achivements: "6. 2nd Place Video Challenge on Robocup Asia Pacific",
            },
            {
              achivements:
                "7. 4th Place Scientific Challenge on Robocup Asia Pacific",
            },
          ],
        },
        {
          id: 6,
          year: "2022",
          achivements:[
            {achivements: "Coming Soon...."},
          ]
        },
      ],
    };
  },
};
</script>

<style>
.achivement-year {
  color: #120D31;
  /* display: inline-block; */
  font-size: 24px;
  position: relative;
  margin-bottom: 15px;
  /* width: 1000px; */
  /* padding-left: 115px; */
}
.achivement-list {
  color: #120D31;
}
ul{
  list-style: none;
}
ul li{
  margin-top: 10px;
}
h1{
  font-size: 6vw;
}
</style>