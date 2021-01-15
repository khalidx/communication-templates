const { readFileSync, writeFileSync } = require('fs')

writeFileSync('index.html', `
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" crossorigin="anonymous">
  </head>
  <body>

    <div id="app">
      <form class="pure-form pure-form-stacked" @submit.prevent="generate">
        
        <button @click="sample">Use Sample Data</button>

        <label>Project Title</label><input type="text" placeholder="Onboarding" v-model="project.meta.ProjectTitle">
        <label>Status Update Date</label><input type="text" placeholder="Friday, Jan 15 2021" v-model="project.meta.StatusUpdateDate">

        <label>Metric One Amount</label><input type="text" placeholder="12" v-model="project.meta.MetricOneAmount">
        <label>Metric One Text</label><input type="text" placeholder="tasks remaining" v-model="project.meta.MetricOneText">
        <label>Metric Two Amount</label><input type="text" placeholder="25%" v-model="project.meta.MetricTwoAmount">
        <label>Metric Two Text</label><input type="text" placeholder="of vendors reviewed" v-model="project.meta.MetricTwoText">
        <label>Metric Three Amount</label><input type="text" placeholder="33" v-model="project.meta.MetricThreeAmount">
        <label>Metric Three Text</label><input type="text" placeholder="blocked vendors" v-model="project.meta.MetricThreeText">

        <label>Announcement One Title</label><input type="text" placeholder="RACI Created" v-model="project.meta.AnnouncementOneTitle">
        <label>Announcement One Text</label><input type="text" placeholder="The first responsibility matrix has been signed off." v-model="project.meta.AnnouncementOneText">
        <label>Announcement Two Title</label><input type="text" placeholder="Project Dashboard Created" v-model="project.meta.AnnouncementTwoTitle">
        <label>Announcement Two Text</label><input type="text" placeholder="Tasks have been organized into a sortable table with up-to-date information." v-model="project.meta.AnnouncementTwoText">
        <label>Announcement Three Title</label><input type="text" placeholder="All regions onboarded" v-model="project.meta.AnnouncementThreeTitle">
        <label>Announcement Three Text</label><input type="text" placeholder="The regions are ready to accept new work." v-model="project.meta.AnnouncementThreeText">

        <label>Superstar One Name</label><input type="text" placeholder="John Doe" v-model="project.meta.SuperstarsOnStageOneName">
        <label>Superstar One Email</label><input type="email" placeholder="john.doe@example.com" v-model="project.meta.SuperstarsOnStageOneEmail">
        <label>Superstar Two Name</label><input type="text" placeholder="John Doe" v-model="project.meta.SuperstarsOnStageTwoName">
        <label>Superstar Two Email</label><input type="email" placeholder="john.doe@example.com" v-model="project.meta.SuperstarsOnStageTwoEmail">
        <label>Superstar Three Name</label><input type="text" placeholder="John Doe" v-model="project.meta.SuperstarsOnStageThreeName">
        <label>Superstar Three Email</label><input type="email" placeholder="john.doe@example.com" v-model="project.meta.SuperstarsOnStageThreeEmail">
        <label>Superstar Four Name</label><input type="text" placeholder="John Doe" v-model="project.meta.SuperstarsOnStageFourName">
        <label>Superstar Four Email</label><input type="email" placeholder="john.doe@example.com" v-model="project.meta.SuperstarsOnStageFourEmail">

        <label>Project Documents Link</label><input type="text" v-model="project.links.ProjectDocumentsLink">
        <label>Project Timeline Link</label><input type="text" v-model="project.links.ProjectTimelineLink">
        <label>All Tasks Link</label><input type="text" v-model="project.links.AllTasksLink">
        <label>Teams And Responsibilities Link</label><input type="text" v-model="project.links.TeamsAndResponsibilitiesLink">
        <label>Budget Link</label><input type="text" v-model="project.links.BudgetLink">
        <label>Submit A Task Or Change Email Link</label><input type="text" v-model="project.links.SubmitATaskOrChangeEmailLink">
        <label>Training Link</label><input type="text" v-model="project.links.TrainingLink">
        <label>All Announcements Link</label><input type="text" v-model="project.links.AllAnnouncementsLink">

        <label>Company Name</label><input type="text" placeholder="Awesome Corporation" v-model="project.company.CompanyName">
        <label>Company Logo URL</label><input type="text" placeholder="" v-model="project.company.CompanyLogo">
        <label>Company Copyright</label><input type="text" placeholder="Awesome Corporation, 2021" v-model="project.company.CompanyCopyright">

        <input type="submit" value="Submit">
      </form>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.1.0/mustache.min.js" integrity="sha512-HYiNpwSxYuji84SQbCU5m9kHEsRqwWypXgJMBtbRSumlx1iBB6QaxgEBZHSHEGM+fKyCX/3Kb5V5jeVXm0OglQ==" crossorigin="anonymous"></script>
    <script id="template-project-status-update" type="x-tmpl-mustache">
      ${readFileSync('templates/project-status-update.html', 'utf-8')}
    </script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          project: {
            meta: {
              ProjectTitle: "",
              StatusUpdateDate: "",
              MetricOneAmount: "",
              MetricOneText: "",
              MetricTwoAmount: "",
              MetricTwoText: "",
              MetricThreeAmount: "",
              MetricThreeText: "",
              AnnouncementOneTitle: "",
              AnnouncementOneText: "",
              AnnouncementTwoTitle: "",
              AnnouncementTwoText: "",
              AnnouncementThreeTitle: "",
              AnnouncementThreeText: "",
              SuperstarsOnStageOneName: "",
              SuperstarsOnStageOneEmail: "",
              SuperstarsOnStageTwoName: "",
              SuperstarsOnStageTwoEmail: "",
              SuperstarsOnStageThreeName: "",
              SuperstarsOnStageThreeEmail: "",
              SuperstarsOnStageFourName: "",
              SuperstarsOnStageFourEmail: "",
            },
            links: {
              ProjectDocumentsLink: "",
              ProjectTimelineLink: "",
              AllTasksLink: "",
              TeamsAndResponsibilitiesLink: "",
              BudgetLink: "",
              SubmitATaskOrChangeEmailLink: "",
              TrainingLink: "",
              AllAnnouncementsLink: "",
            },
            company: {
              CompanyName: "",
              CompanyLogo: "",
              CompanyCopyright: ""
            }
          }
        },
        methods: {
          sample: function () {
            this.project = {
              meta: {
                ProjectTitle: "Onboarding",
                StatusUpdateDate: "Friday, Jan 15 2021",
                MetricOneAmount: "12",
                MetricOneText: "tasks remaining",
                MetricTwoAmount: "25%",
                MetricTwoText: "of vendors reviewed",
                MetricThreeAmount: "33",
                MetricThreeText: "blocked vendors",
                AnnouncementOneTitle: "RACI Created",
                AnnouncementOneText: "The first responsibility matrix has been signed off.",
                AnnouncementTwoTitle: "Project Dashboard Created",
                AnnouncementTwoText: "Tasks have been organized into a sortable table with up-to-date information.",
                AnnouncementThreeTitle: "All regions onboarded",
                AnnouncementThreeText: "The regions are ready to accept new work.",
                SuperstarsOnStageOneName: "John Doe",
                SuperstarsOnStageOneEmail: "john.doe@example.com",
                SuperstarsOnStageTwoName: "John Doe",
                SuperstarsOnStageTwoEmail: "john.doe@example.com",
                SuperstarsOnStageThreeName: "John Doe",
                SuperstarsOnStageThreeEmail: "john.doe@example.com",
                SuperstarsOnStageFourName: "John Doe",
                SuperstarsOnStageFourEmail: "john.doe@example.com",
              },
              links: {
                ProjectDocumentsLink: "",
                ProjectTimelineLink: "",
                AllTasksLink: "",
                TeamsAndResponsibilitiesLink: "",
                BudgetLink: "",
                SubmitATaskOrChangeEmailLink: "",
                TrainingLink: "",
                AllAnnouncementsLink: "",
              },
              company: {
                CompanyName: "Awesome Corporation",
                CompanyLogo: "https://placeholderlogo.com/img/placeholder-logo-3.png",
                CompanyCopyright: "Awesome Corporation, 2021"
              }
            }
          },
          generate: function () {

            var template = document.getElementById('template-project-status-update').innerHTML;
            var rendered = Mustache.render(template, this.project);
            
            var a = document.createElement('a');
            a.href = URL.createObjectURL(new Blob([rendered], { type: 'text/html' }));
            a.download = 'project-status-update.html';
            a.textContent = 'Download file!';
            document.body.appendChild(a);
          }
        }
      })
    </script>
  </body>
  </html>
`)
