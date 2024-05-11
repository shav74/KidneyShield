from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
from fastapi.middleware.cors import CORSMiddleware
import numpy as np

# ckdu models and scaler
classifier = pickle.load(open('ckdu_clas.sav','rb'))
scaler = pickle.load(open('scaler.pkl', 'rb'))

# diabetes model
diabetes_model = pickle.load(open('diabetes_model.sav','rb'))

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],  # Add any other HTTP methods you want to allow
    allow_headers=["*"],
)

class model_input(BaseModel):
    Occupation: int
    SourceofWater: int
    Age: int
    Gender: int
    MOH: int
    BMI: float
    bCKD: bool
    bDM: bool
    bHNT: bool
    bHDL: bool
    bRenalCalculi: bool
    bMalaria: bool
    bDengue: bool
    bLepto: bool
    bSnakeBite: bool
    bCKDu: bool
    bUTI: bool
    bCancer: bool
    bBA: bool
    bCKDFamily: bool
    bDMFamily: bool
    bHTNFamily: bool
    bCKDUFamily: bool
    BP_systolic: float
    BP_diastolic: float
    
class model_input_diabetes(BaseModel):
    
    Pregnancies : int
    Glucose : int
    BloodPressure : int
    SkinThickness : int
    Insulin : int
    BMI : float
    DiabetesPedigreeFunction :  float
    Age : int


@app.post('/ckdu')

def ckdu_pred(input_parameters : model_input):
    
    input_data = input_parameters.json()
    
    # converting into a dict
    input_dictionary = json.loads(input_data)
    
    _Occupation = input_dictionary['Occupation']
    _SourceofWater = input_dictionary['SourceofWater']
    _Age = input_dictionary['Age']
    _Gender = input_dictionary['Gender']
    _MOH = input_dictionary['MOH']
    _BMI = input_dictionary['BMI']
    _bCKD = input_dictionary['bCKD']
    _bDM = input_dictionary['bDM']
    _bHNT = input_dictionary['bHNT']
    _bHDL = input_dictionary['bHDL']
    _bRenalCalculi = input_dictionary['bRenalCalculi']
    _bMalaria = input_dictionary['bMalaria']
    _bDengue = input_dictionary['bDengue']
    _bLepto = input_dictionary['bLepto']
    _bSnakeBite = input_dictionary['bSnakeBite']
    _bCKDu = input_dictionary['bCKDu']
    _bUTI = input_dictionary['bUTI']
    _bCancer = input_dictionary['bCancer']
    _bBA = input_dictionary['bBA']
    _bCKDFamily = input_dictionary['bCKDFamily']
    _bDMFamily = input_dictionary['bDMFamily']
    _bHTNFamily = input_dictionary['bHTNFamily']
    _bCKDUFamily = input_dictionary['bCKDUFamily']
    _BP_systolic = input_dictionary['BP_systolic']
    _BP_diastolic = input_dictionary['BP_diastolic']
    
    new_instance = [_Occupation, _SourceofWater, _Age, _Gender, _MOH, _BMI, _bCKD, _bDM, _bHNT, _bHDL, _bRenalCalculi, _bMalaria, _bDengue, _bLepto, _bSnakeBite, _bCKDu, _bUTI, _bCancer, _bBA, _bCKDFamily, _bDMFamily, _bHTNFamily, _bCKDUFamily, _BP_systolic, _BP_diastolic]
    # Convert the instance to a numpy array
    new_instance = np.array(new_instance).reshape(1, -1)
    
    # Standardize the new instance
    new_instance_standardized = scaler.transform(new_instance)
    ckdu_probability = classifier.predict_proba(new_instance_standardized)[0, 1]
    return ckdu_probability
    
    
@app.post('/diabetes')
def diabetes_pred(input_parameters : model_input_diabetes):
    
    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)
    
    preg = input_dictionary['Pregnancies']
    glu = input_dictionary['Glucose']
    bp = input_dictionary['BloodPressure']
    skin = input_dictionary['SkinThickness']
    insulin = input_dictionary['Insulin']
    bmi = input_dictionary['BMI']
    dpf = input_dictionary['DiabetesPedigreeFunction']
    age = input_dictionary['Age']


    input_list = [preg, glu, bp, skin, insulin, bmi, dpf, age]
    
    prediction = diabetes_model.predict([input_list])
    
    if prediction[0] == 0:
        return 0
    
    else:
        return 1
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


































