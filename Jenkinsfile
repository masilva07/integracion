pipeline {
  agent any
  tools {
    nodejs '18'
  }
  options {
    timeout(time: 2, unit: 'MINUTES')
  }
  stages {
    stage('Installa dependencies') {
      steps {
        bat 'npm i'
      }
    }
    stage('build docker') {
      steps {
        bat 'docker-compose build'
      }
    }
    stage('build docker') {
      steps {
        bat 'docker-compose up'
      }
    }
  }
}
