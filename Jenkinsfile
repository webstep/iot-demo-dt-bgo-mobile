pipeline {
  agent {
    node {
      label 'npm install'
    }
    
  }
  stages {
    stage('npm install') {
      steps {
        sh 'npm install'
      }
    }
    stage('ng build') {
      steps {
        sh '/usr/local/bin/ng build'
      }
    }
  }
}