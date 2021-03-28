import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ques } from '../question';
import { Questionaire } from '../questionaire';
import { QuestionsService } from "../questions.service";
import  Questionaires  from "../questionaires.json";
import  Questionss  from "./questions.json";
import Answers from "./answers.json"
import Conv from "../conv.json"
import { Questions } from '../questions';
import New from './new.json';

@Component({
  selector: 'app-question-homepage',
  templateUrl: './question-homepage.component.html',
  styleUrls: ['./question-homepage.component.css']
})
export class QuestionHomepageComponent implements OnInit {
  qess:{}[] = Questionss;
  newQues :any ; 
 
  //xyz: any = Answers;
  newAns : any;
  newAns1= [] ;
  section:any;
  parameter:any;
  level:any;
  questions:any;
  response:any;

  anss:{ section:{
             parameter:{
                questionLevel:{
                      questionNo:string;
                     questionDescription;
                     response:{option:string;points:number}[],}[],}[],}[],
                    }[]= Answers;

  new:{ sections:{section:string;
       parameters:{parameter:string;
       level:{ questionLevel:number;
       questions:{ questionNo:string;
            questionDescription;
            response:{option:string;points:number}[],}[],}[],}[],}[],
           }[]= New;
  currentSection=0;
  currentParameter=0;
  currentLevel=0;
  currentNew=0;


  conv: {section:string,parameter:string,questionLevel:string,questionNo:string,questionDescription,response:{option:string,points:number}[],}[]= Conv;
  currentConv :any;
   

   questionaires :{Section:string,Parameter:string,
                                        QL1 : {
                                                QNo: number,
                                                QDesc:string,
                                                Response:string,
                                                points:number}[],}[]=Questionaires;

  // questions: Ques[] = [];
  // currentQues = 0;
  // answerSlctd = false;
  // correctAnswers = 0;
  // incorrectAnswers = 0;

  // img: any;
  // userId: any;


  // onAnswer(option: boolean){
  //   //this.currentQues++;
  //   //this.answerSelected = true;

  //   this.answerSlctd = true;
  //   setTimeout(()=>{
  //     this.currentQues++
  //     this.answerSlctd = false; 
  //   },1000);

  //   if(option){
  //     this.correctAnswers++;
  //   }else{
  //     this.incorrectAnswers++;
  //   }
  // }

  
  
  currentQuestion =0;
  answerSelected = false;
  totalPoints :any;
  btnDisabled = true;
  fileHide =true;
  commentHide = true;
  options:string;
  points:any;
  
  onOpt(option: string){
   // if(points == 1){
     if(option == yes){
     //console.log(this.totalPoints +=  points,"if points");
     this.totalPoints= points;
      this.btnDisabled = false;
      this.fileHide = false;
      this.commentHide= false; 
      this.currentParameter += this.currentParameter +7;
      this.currentQuestion++;
    }
  }
 
  // nextQuestionClick(){
  //   this.answerSelected = true; 
    
  //   setTimeout(()=>{
      
  //     this.currentQuestion++
  //     this.answerSelected = false; 
     
  //   },1000);
  //   this.btnDisabled = true;
  //     this.fileHide = true;
  //     this.commentHide= true;
  
  // }

  /*
   q: Questionaire[] = [];
  currentQuestion =0;
  answerSelected = false;
  totalPoints = 0;
  btnDisabled = true;
  fileHide =true;
  commentHide = true;


  onAns(points: number){
    if(points !== null){
     //console.log(this.totalPoints +=  points,"if points");
     this.totalPoints= points;
      this.btnDisabled = false;
      this.fileHide = false;
      this.commentHide= false; 
        
    }
  }

  nextQuestionClick(){
    this.answerSelected = true; 
   
    setTimeout(()=>{
      this.currentQuestion++
      this.answerSelected = false; 
     
    },1000);
    this.btnDisabled = true;
      this.fileHide = true;
      this.commentHide= true;
     
      
  }
  */

 


 

  constructor(private router: Router, private questionsService: QuestionsService) { }

  ngOnInit(): void {
    //this.questions = this.questionsService.getQues();
    // console.log(this.qess);

    //this.q = this.questionsService.getq();
    

   // this.currentConv = this.conv[0]["section"]
      // console.log(this.currentConv)

    //console.log(this.xyz[0]["section"], "xyx");
    // this.newAns = this.xyz;


    // console.log(this.newAns,"Ye chu chalan")

    // console.log(this.xyz[0].section[0],"main object");
   
  
   /* 
    this.xyz.forEach(element => {
        console.log(element.section[0].testEnvironment[0].parameter[0].testEnvironmentAvailability[0].questionLevel[0].one, "njjn");
        console.log(element.section[0].testEnvironment[0].parameter[0].testEnvironmentAvailability[0].questionLevel[0].two, "ttt");
       this.newAns1= element.section[0].testEnvironment[0].parameter[0].testEnvironmentAvailability[0].questionLevel[0].one;
       this.response =element.section[0].testEnvironment[0].parameter[0].testEnvironmentAvailability[0].questionLevel[0].one[0].response;
       //console.log(this.newAns, "ll")
       console.log(element, "ele")
    });
      console.log(this.newAns1, "nn");
      this.newAns1;
      console.log(this.xyz["testEnvironment"], "sm")
   // this.section = this.xyz
      
   this.section=this.conv[0].section
       console.log(this.section,"yug")
*/
/*
    console.log(this.anss[0].section[0], "section");
    this.section = this.anss[0].section[0]

    console.log(this.section.testEnvironment[0].parameter[0], "parameter");
    this.parameter= this.section.testEnvironment[0].parameter[0]

    this.level = this.parameter.testEnvironmentAvailability[0].questionLevel[0]
    console.log(this.level, "level")
*/


    this.section=this.new["sections"];
     console.log(this.section, "sssss");

     this.parameter=this.section[0].parameters;
     console.log(this.parameter, "ppppppp");
     
     this.level = this.parameter[0].level;
     console.log(this.level, "lllll");

     
      

     this.questions = this.level[0].questions;
     console.log(this.questions, "qqqqq")

     this.response = this.questions[0].response;
     console.log(this.response, "rrrr");

    

    // this.newAns1.forEach(function(message , index){
    //   // console.log(message["section"][0],index, "messsage wala");
    //   // this.newAns1 = message["section"][0];
    //    console.log(message,"mmm")
    //   });

     
//  console.log(this.newAns1) 
    // this.questionaires.forEach(element => {
    //     console.log(element.QL1[0].Response);

    // });

    // console.log(this.qess[0].section);
     //console.log(this.qess[0].section[0]["testEnvironment"], "hugy");
      //this.newQues.push(this.qess[0].section[0]["testEnvironment"]);
     // console.log(this.newQues, "oiyu");
      


/*
    this.questionsService.qnProgress = 0;
    this.questionsService.getQuestions().subscribe(
      (data:any)=>{
        this.questionsService.qns = data; 
      }
    );

    this.questionsService.getAnswers().subscribe(
      (data:any) =>{
        this.questionsService.correctAnswerCount = 0;
        this.questionsService.qns.forEach((e,i)=>{
          if(e.answer == data[i])
          this.questionsService.correctAnswerCount++;
          e.correct = data[i];
        })
      }
    );
  }

  

  Answer(qID,choice){
    this.questionsService.qns[this.questionsService.qnProgress].answer = choice;
    this.questionsService.qnProgress++;
    if (this.questionsService.qnProgress == 5){
      clearInterval;
      this.router.navigate(['/result'])
    }

  }
*/
  }



  optn(points: number){
    if(points!==null){
      console.log(points)
    }
  }

















  // onFileChange(event){
  //   this.img = event.target.files[0];
  // }

  // upload() {
  //   let formData: FormData = new FormData();
  //   formData.append('userId', this.userId);
  //   formData.append('img', this.img);
  //   console.log(formData.get('img'));

  //   this.questionsService.upload(FormData).subscribe(data =>{
  //     alert(JSON.stringify(data));
  //   })
    
  // }

}
