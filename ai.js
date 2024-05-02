// Define symptom-disease mapping
const symptomMap = {
    "headache": ["Migraine", "Tension headache"],
    "fever": ["Influenza", "Common cold", "COVID-19"],
    "cough": ["Bronchitis", "Pneumonia"],
    "fatigue": ["Chronic fatigue syndrome", "Anemia"],
    "nausea": ["Gastroenteritis", "Food poisoning"],
    "vomiting": ["Gastroenteritis", "Food poisoning"],
    "diarrhea": ["Gastroenteritis", "Irritable bowel syndrome"],
    "abdominal pain": ["Appendicitis", "Gastritis"],
    "chest pain": ["Heart attack", "Angina"],
    "shortness of breath": ["Asthma", "Chronic obstructive pulmonary disease (COPD)"],
    "dizziness": ["Vertigo", "Dehydration"],
    "back pain": ["Sciatica", "Muscle strain"],
    "joint pain": ["Osteoarthritis", "Rheumatoid arthritis"],
    "muscle pain": ["Fibromyalgia", "Muscle strain"],
    "throat pain": ["Strep throat", "Tonsillitis"],
    "runny nose": ["Allergic rhinitis", "Common cold"],
    "sore throat": ["Strep throat", "Common cold"],
    "fatigue": ["Chronic fatigue syndrome", "Anemia"],
    "weakness": ["Anemia", "Myasthenia gravis"],
    "insomnia": ["Insomnia", "Sleep apnea"],
    "loss of appetite": ["Depression", "Anorexia nervosa"],
    "weight loss": ["Hyperthyroidism", "Cancer"],
    "weight gain": ["Hypothyroidism", "Cushing's syndrome"],
    "fever and rash": ["Measles", "Chickenpox"],
    "swelling": ["Edema", "Lymphedema"],
    "swollen lymph nodes": ["Infection", "Lymphoma"],
    "itching": ["Eczema", "Allergic reaction"],
    "rash": ["Contact dermatitis", "Psoriasis"],
    "redness": ["Sunburn", "Contact dermatitis"],
    "depression": ["Major depressive disorder", "Bipolar disorder"],
    "anxiety": ["Generalized anxiety disorder", "Panic disorder"],
    "panic attacks": ["Panic disorder", "Agoraphobia"],
    "hallucinations": ["Schizophrenia", "Drug abuse"],
    "memory loss": ["Alzheimer's disease", "Dementia"],
    "confusion": ["Delirium", "UTI (Urinary Tract Infection)"],
    "seizures": ["Epilepsy", "Febrile seizure"],
    "numbness": ["Peripheral neuropathy", "Multiple sclerosis"],
    "tingling sensation": ["Peripheral neuropathy", "Carpal tunnel syndrome"],
    "visual disturbances": ["Migraine aura", "Glaucoma"],
    "hearing loss": ["Sensorineural hearing loss", "Conductive hearing loss"],
    "ringing in ears": ["Tinnitus", "Meniere's disease"],
    "difficulty swallowing": ["Dysphagia", "GERD (Gastroesophageal reflux disease)"],
    "heartburn": ["GERD", "Peptic ulcer disease"],
    "bloody stool": ["Hemorrhoids", "Colon cancer"],
    "blood in urine": ["Urinary tract infection", "Kidney stones"],
    "frequent urination": ["Urinary tract infection", "Diabetes"],
    "painful urination": ["Urinary tract infection", "Kidney stones"],
    "fatigue": ["Chronic fatigue syndrome", "Anemia"],
    "memory loss": ["Alzheimer's disease", "Dementia"],
    "confusion": ["Delirium", "UTI (Urinary Tract Infection)"],
    "seizures": ["Epilepsy", "Febrile seizure"],
    "numbness": ["Peripheral neuropathy", "Multiple sclerosis"],
    "tingling sensation": ["Peripheral neuropathy", "Carpal tunnel syndrome"],
    "visual disturbances": ["Migraine aura", "Glaucoma"],
    "hearing loss": ["Sensorineural hearing loss", "Conductive hearing loss"],
    "ringing in ears": ["Tinnitus", "Meniere's disease"],
    "difficulty swallowing": ["Dysphagia", "GERD (Gastroesophageal reflux disease)"],
    "heartburn": ["GERD", "Peptic ulcer disease"],
    "bloody stool": ["Hemorrhoids", "Colon cancer"],
    "blood in urine": ["Urinary tract infection", "Kidney stones"],
    "frequent urination": ["Urinary tract infection", "Diabetes"],
    "painful urination": ["Urinary tract infection", "Kidney stones"]
    // Add more symptoms and corresponding diseases here
};

// Function to check symptoms
function checkSymptoms() {
    const symptomsInput = document.getElementById("symptoms").value.trim().toLowerCase().split(',');
    const resultDiv = document.getElementById("result");

    let diagnosis = [];
    let prescriptions = [];

    // Loop through each symptom entered by the user
    symptomsInput.forEach(symptom => {
        // Check if the symptom exists in the symptom-disease mapping
        if (symptomMap.hasOwnProperty(symptom)) {
            // Add diseases corresponding to the symptom to diagnosis
            diagnosis = [...diagnosis, ...symptomMap[symptom]];
            // Add prescriptions for the diseases
            symptomMap[symptom].forEach(disease => {
                // Example prescriptions
                prescriptions.push(getPrescription(disease));
            });
        }
    });

    // Display the result
    if (diagnosis.length > 0) {
        resultDiv.innerHTML = `<strong>Diagnosis:</strong> ${[...new Set(diagnosis)].join(', ')}<br><strong>Prescription:</strong> ${prescriptions.join(', ')}`;
    } else {
        resultDiv.innerHTML = "No diseases found for the entered symptoms.";
    }
}

// Function to get prescription based on disease
// Function to get prescription based on disease
function getPrescription(disease) {
    switch (disease) {
        case "Migraine":
            return "Take pain relievers such as ibuprofen or acetaminophen, rest in a quiet, dark room, apply cold compresses to the forehead, practice relaxation techniques.";
        case "Tension headache":
            return "Apply heat or ice packs to your head or neck, practice relaxation techniques such as deep breathing or meditation, try over-the-counter pain relievers like ibuprofen or aspirin.";
        case "Influenza":
            return "Get plenty of rest, drink fluids such as water, broth, or electrolyte solutions, take antiviral medications if prescribed by your doctor, use over-the-counter pain relievers and fever reducers, such as acetaminophen or ibuprofen.";
        case "Common cold":
            return "Stay hydrated by drinking plenty of fluids, get plenty of rest, use saline nasal sprays or drops to relieve nasal congestion, try over-the-counter cold medications to alleviate symptoms such as coughing, sneezing, and congestion.";
        case "COVID-19":
            return "Isolate yourself from others to prevent the spread of the virus, get plenty of rest, stay hydrated by drinking water and electrolyte-rich fluids, monitor your symptoms closely, seek medical attention if you experience severe symptoms such as difficulty breathing or persistent chest pain.";
        case "Bronchitis":
            return "Drink plenty of fluids to stay hydrated, get plenty of rest, use cough suppressants or expectorants to relieve cough symptoms, use a humidifier or take steamy showers to help loosen mucus in the airways, consider using over-the-counter pain relievers such as ibuprofen or acetaminophen to alleviate fever and relieve discomfort.";
        case "Pneumonia":
            return "Take prescribed antibiotics exactly as directed by your doctor, get plenty of rest, stay hydrated by drinking fluids, use over-the-counter pain relievers such as ibuprofen or acetaminophen to reduce fever and relieve discomfort, use a humidifier to ease breathing.";
        case "Chronic fatigue syndrome":
            return "Develop a consistent sleep schedule, engage in regular physical activity within your limits, manage stress through relaxation techniques such as yoga or meditation, maintain a balanced diet rich in fruits, vegetables, and whole grains, consider cognitive behavioral therapy or counseling.";
        case "Anemia":
            return "Increase your intake of iron-rich foods such as lean meats, poultry, fish, beans, lentils, tofu, spinach, and fortified cereals, consider taking iron supplements as prescribed by your doctor, consume foods high in vitamin C to enhance iron absorption, get plenty of rest, manage fatigue through pacing activities and conserving energy.";
        case "Gastroenteritis":
            return "Stay hydrated by drinking clear fluids such as water, broth, or electrolyte solutions, gradually reintroduce bland, easy-to-digest foods such as bananas, rice, applesauce, and toast (BRAT diet), avoid caffeine, alcohol, dairy products, fatty foods, and spicy foods, consider over-the-counter medications to alleviate symptoms such as diarrhea or vomiting, seek medical attention if you experience severe dehydration or symptoms persist for more than a few days.";
        case "Food poisoning":
            return "Stay hydrated by drinking clear fluids such as water, broth, or electrolyte solutions, gradually reintroduce bland, easy-to-digest foods such as bananas, rice, applesauce, and toast (BRAT diet), avoid caffeine, alcohol, dairy products, fatty foods, and spicy foods, consider over-the-counter medications to alleviate symptoms such as diarrhea or vomiting, seek medical attention if you experience severe dehydration, bloody stools, or symptoms persist for more than a few days.";
        case "Appendicitis":
            return "Seek immediate medical attention as appendicitis requires surgical intervention, avoid eating or drinking anything to prevent worsening of symptoms, apply a cold compress to the abdomen to relieve pain, do not apply heat.";
        case "Gastritis":
            return "Avoid spicy, acidic, or fatty foods that may exacerbate symptoms, eat small, frequent meals to prevent stomach irritation, consider over-the-counter antacids or acid reducers to alleviate symptoms, avoid alcohol and caffeine, which can irritate the stomach lining.";
        case "Heart attack":
            return "Seek emergency medical help immediately, chew and swallow aspirin (if not allergic) to help prevent blood clot formation, rest in a comfortable position, loosen tight clothing, do not drive yourself to the hospital, if symptoms worsen, perform CPR if trained.";
        case "Angina":
            return "Take prescribed medications such as nitroglycerin as directed by your doctor, rest in a comfortable position, avoid strenuous activities that may trigger symptoms, practice relaxation techniques to reduce stress, maintain a healthy lifestyle with regular exercise and a heart-healthy diet.";
        case "Asthma":
            return "Use prescribed inhalers or nebulizers as directed by your doctor, avoid triggers such as allergens or irritants, use a peak flow meter to monitor lung function, seek medical attention if symptoms worsen or do not improve with medication.";
        case "Chronic obstructive pulmonary disease (COPD)":
            return "Take prescribed medications such as bronchodilators or corticosteroids as directed by your doctor, quit smoking and avoid exposure to secondhand smoke, participate in pulmonary rehabilitation programs, practice breathing exercises to improve lung function.";
        case "Vertigo":
            return "Avoid sudden head movements that may trigger symptoms, rest in a comfortable position until symptoms subside, avoid driving or operating heavy machinery until symptoms resolve, consider vestibular rehabilitation therapy.";
        case "Dehydration":
            return "Drink plenty of fluids such as water, sports drinks, or oral rehydration solutions, avoid caffeinated or alcoholic beverages, rest in a cool environment, consider seeking medical attention if dehydration is severe or if you are unable to keep fluids down.";
        case "Sciatica":
            return "Apply ice packs to the affected area to reduce inflammation and numb pain, take over-the-counter pain relievers such as ibuprofen or acetaminophen, perform gentle stretches and exercises to improve flexibility and strengthen muscles, consider physical therapy.";
        case "Muscle strain":
            return "Apply ice packs to the affected area for the first 48 hours to reduce swelling and numb pain, apply heat packs or take warm baths after the first 48 hours to relax muscles, take over-the-counter pain relievers such as ibuprofen or acetaminophen, rest the affected muscle but avoid prolonged inactivity.";
        case "Osteoarthritis":
            return "Stay physically active with low-impact exercises such as swimming or cycling, apply heat or cold packs to the affected joints to reduce pain and inflammation, take over-the-counter pain relievers such as acetaminophen or NSAIDs, consider physical therapy or occupational therapy.";
        case "Rheumatoid arthritis":
            return "Take prescribed medications such as disease-modifying antirheumatic drugs (DMARDs) or biologics as directed by your doctor, participate in regular exercise programs to improve joint flexibility and strength, apply heat or cold packs to the affected joints to reduce pain and inflammation, consider physical or occupational therapy.";
        case "Fibromyalgia":
            return "Participate in regular low-impact exercises such as walking or swimming to improve symptoms, practice relaxation techniques such as deep breathing or meditation to reduce stress, establish a regular sleep schedule and practice good sleep hygiene, consider medications to manage pain and improve sleep quality.";
        case "Strep throat":
            return "Take prescribed antibiotics such as penicillin or amoxicillin as directed by your doctor, get plenty of rest, drink warm liquids such as tea or broth to soothe the throat, use over-the-counter pain relievers such as acetaminophen or ibuprofen to alleviate pain and fever, gargle with warm salt water.";
        case "Tonsillitis":
            return "Take prescribed antibiotics if bacterial infection is present, get plenty of rest, drink warm liquids such as tea or broth to soothe the throat, use over-the-counter pain relievers such as acetaminophen or ibuprofen to alleviate pain and fever, gargle with warm salt water.";
        case "Allergic rhinitis":
            return "Avoid allergens such as pollen, dust, or pet dander whenever possible, use over-the-counter or prescription antihistamines to alleviate symptoms such as sneezing, itching, and nasal congestion, consider nasal corticosteroid sprays for long-term symptom management, use saline nasal rinses to flush out allergens.";
        case "Eczema":
            return "Keep skin moisturized with emollients or moisturizing creams, avoid irritants such as harsh soaps or detergents, use over-the-counter or prescription corticosteroid creams to reduce inflammation and itching, apply wet compresses to affected areas to relieve itching, avoid scratching to prevent skin damage and infection.";
        case "Contact dermatitis":
            return "Identify and avoid contact with the allergen or irritant that triggers symptoms, wash affected skin with mild soap and water to remove any residue, apply over-the-counter hydrocortisone cream to reduce inflammation and itching, use cool compresses to soothe irritated skin, consider oral antihistamines for severe itching.";
        case "Psoriasis":
            return "Use over-the-counter or prescription topical treatments such as corticosteroids or coal tar preparations to reduce inflammation and slow skin cell growth, expose affected skin to natural sunlight in moderation, practice good skin hygiene to prevent infections, consider systemic medications or biologics for severe or resistant cases.";
        case "Sunburn":
            return "Take cool baths or showers to soothe burned skin, apply moisturizing lotions or gels containing aloe vera or soy to hydrate and cool the skin, take over-the-counter pain relievers such as ibuprofen or acetaminophen to reduce pain and inflammation, drink plenty of water to stay hydrated.";
        case "Delirium":
            return "Identify and address any underlying medical conditions that may be causing delirium, ensure a safe environment free from hazards, provide reassurance and emotional support, maintain a consistent daily routine, optimize sensory stimulation by providing glasses, hearing aids, or other assistive devices.";
        case "Urinary tract infection":
            return "Take prescribed antibiotics as directed by your doctor, drink plenty of fluids to flush out bacteria, avoid irritants such as caffeine, alcohol, and spicy foods, use over-the-counter pain relievers such as ibuprofen or acetaminophen to alleviate pain and discomfort, practice good hygiene.";
        case "Kidney stones":
            return "Stay hydrated by drinking plenty of water to help flush out kidney stones, take prescribed medications such as alpha blockers or pain relievers as directed by your doctor, avoid foods high in oxalate such as spinach, nuts, and chocolate, avoid activities that may worsen symptoms such as vigorous exercise or dehydration.";
        case "Insomnia":
            return "Establish a consistent sleep schedule and bedtime routine, create a comfortable sleep environment that is dark, quiet, and cool, limit caffeine and alcohol intake, avoid electronic devices before bedtime, practice relaxation techniques such as deep breathing or progressive muscle relaxation.";
        case "Sleep apnea":
            return "Use continuous positive airway pressure (CPAP) therapy as prescribed by your doctor, maintain a healthy weight through diet and exercise, avoid alcohol and sedatives that can relax throat muscles and worsen symptoms, sleep on your side rather than your back, consider oral appliances or surgery for severe cases.";
        case "Depression":
            return "Participate in therapy such as cognitive behavioral therapy (CBT) or interpersonal therapy (IPT), take prescribed antidepressant medications as directed by your doctor, engage in regular physical activity and exercise, maintain a healthy diet rich in fruits, vegetables, and whole grains, seek support from friends, family, or support groups.";
        case "Anorexia nervosa":
            return "Participate in therapy such as cognitive behavioral therapy (CBT) or family-based treatment (FBT), work with a dietitian to establish a meal plan and restore healthy eating habits, address underlying psychological issues such as low self-esteem or perfectionism, monitor physical health and address any medical complications.";
        case "Hyperthyroidism":
            return "Take prescribed antithyroid medications or undergo radioactive iodine therapy as directed by your doctor, avoid foods high in iodine such as seaweed or iodized salt, manage symptoms such as rapid heartbeat or tremors with beta-blockers or other medications, monitor thyroid function regularly.";
        case "Cancer":
            return "Undergo recommended treatments such as surgery, chemotherapy, radiation therapy, or targeted therapy as prescribed by your oncologist, manage symptoms such as pain, nausea, or fatigue with medications or supportive care, maintain a healthy lifestyle with regular exercise and a balanced diet, seek emotional support from friends, family, or support groups.";
        case "Hypothyroidism":
            return "Take prescribed thyroid hormone replacement medications such as levothyroxine as directed by your doctor, maintain a healthy weight through diet and exercise, monitor thyroid function regularly, manage symptoms such as fatigue, dry skin, or weight gain with appropriate medications.";
        case "Cushing's syndrome":
            return "Undergo treatment to address the underlying cause of Cushing's syndrome, such as surgery, radiation therapy, or medications to suppress cortisol production, manage symptoms such as high blood pressure or diabetes with appropriate medications, monitor bone health and address osteoporosis risk.";
        case "Measles":
            return "Stay isolated to prevent the spread of the virus, get plenty of rest, stay hydrated, take over-the-counter medications such as acetaminophen to reduce fever and relieve symptoms, avoid contact with others, especially pregnant women, infants, and people with weakened immune systems.";
        case "Chickenpox":
            return "Stay isolated to prevent the spread of the virus, get plenty of rest, stay hydrated, take over-the-counter medications such as acetaminophen to reduce fever and relieve itching, avoid scratching to prevent skin infections, use calamine lotion or oatmeal baths to soothe itching.";
        case "Edema":
            return "Elevate the affected limb to reduce swelling, avoid standing or sitting for long periods, wear compression stockings or sleeves to improve circulation, engage in regular physical activity to promote lymphatic drainage, limit salt intake to prevent fluid retention.";
        case "Lymphedema":
            return "Engage in gentle exercises such as walking or swimming to promote lymphatic drainage, wear compression garments or bandages to reduce swelling, practice meticulous skin care to prevent infections, elevate the affected limb to reduce swelling, consider manual lymphatic drainage therapy.";
        case "Infection":
            return "Take prescribed antibiotics or antiviral medications as directed by your doctor, get plenty of rest, stay hydrated by drinking fluids, practice good hygiene to prevent the spread of infection, avoid close contact with others until symptoms improve.";
        case "Lymphoma":
            return "Undergo recommended treatments such as chemotherapy, radiation therapy, immunotherapy, or targeted therapy as prescribed by your oncologist, participate in clinical trials if eligible, manage symptoms such as fatigue, pain, or nausea with medications or supportive care, seek emotional support from friends, family, or support groups.";
        case "Schizophrenia":
            return "Participate in therapy such as cognitive behavioral therapy (CBT), family therapy, or supportive therapy, take prescribed antipsychotic medications as directed by your doctor, establish a daily routine and adhere to treatment plans, avoid alcohol and drugs that can worsen symptoms, seek support from friends, family, or support groups.";
        case "Drug abuse":
            return "Participate in therapy such as cognitive behavioral therapy (CBT), motivational interviewing, or contingency management, consider medication-assisted treatment with medications such as methadone or buprenorphine, engage in support groups such as Narcotics Anonymous or SMART Recovery, avoid triggers and high-risk situations.";
        case "Alzheimer's disease":
            return "Participate in therapy such as cognitive stimulation therapy (CST) or reminiscence therapy, take prescribed medications such as cholinesterase inhibitors or memantine as directed by your doctor, maintain a structured daily routine, engage in regular physical activity and mental stimulation, ensure a safe environment to prevent accidents or injuries.";
        case "Dementia":
            return "Participate in therapy such as cognitive rehabilitation or reality orientation therapy, ensure a safe environment free from hazards, establish a daily routine and provide cues for activities, engage in regular physical activity and mental stimulation, provide emotional support and reassurance.";
        case "Febrile seizure":
            return "Place your child on their side on a flat surface to prevent choking, loosen any tight clothing, do not put anything in your child's mouth, monitor their breathing and pulse, stay with your child until the seizure ends, seek medical attention if the seizure lasts longer than five minutes or if it's your child's first seizure.";
        case "Peripheral neuropathy":
            return "Manage underlying conditions such as diabetes or vitamin deficiencies, take prescribed medications to alleviate pain and neuropathic symptoms, practice good foot care to prevent injuries and infections, engage in gentle exercises such as walking or swimming to improve circulation and nerve function, consider alternative therapies such as acupuncture or transcutaneous electrical nerve stimulation (TENS).";
        case "Multiple sclerosis":
            return "Take disease-modifying medications as prescribed by your doctor to slow disease progression and manage symptoms, participate in physical therapy to improve mobility and strength, manage symptoms such as spasticity or neuropathic pain with medications or other treatments, consider complementary therapies such as yoga or tai chi.";
        case "Carpal tunnel syndrome":
            return "Take frequent breaks from repetitive tasks that may exacerbate symptoms, wear wrist splints to keep wrists in a neutral position and reduce pressure on the median nerve, perform stretching exercises to improve flexibility and reduce compression on the nerve, consider corticosteroid injections or surgery for severe or persistent symptoms.";
        case "Migraine aura":
            return "Take prescribed medications such as triptans or ergotamines at the onset of symptoms, rest in a quiet, dark room, apply cold packs to the forehead or neck to alleviate pain, practice relaxation techniques such as deep breathing or meditation.";
        case "Glaucoma":
            return "Take prescribed eye drops to reduce intraocular pressure as directed by your doctor, avoid activities that increase intraocular pressure such as heavy lifting or bending over, attend regular eye exams to monitor disease progression, consider laser therapy or surgery if medications are ineffective.";
        case "Sensorineural hearing loss":
            return "Use hearing aids or cochlear implants to improve hearing, communicate in well-lit environments with minimal background noise, consider assistive devices such as amplified telephones or captioned televisions, participate in auditory training or speechreading classes to improve communication skills.";
        case "Conductive hearing loss":
            return "Undergo treatments such as earwax removal, medication for ear infections, or surgical procedures to repair damaged middle ear structures, consider hearing aids or bone conduction devices to improve hearing, communicate in well-lit environments with minimal background noise, participate in auditory training or speechreading classes to improve communication skills.";
        case "Tinnitus":
            return "Manage underlying conditions such as hearing loss or temporomandibular joint (TMJ) disorders, use masking devices such as white noise machines or hearing aids to reduce tinnitus perception, practice relaxation techniques such as deep breathing or meditation to reduce stress and anxiety associated with tinnitus, avoid loud noises and ototoxic medications that may worsen symptoms.";
        case "Meniere's disease":
            return "Follow a low-sodium diet to reduce fluid retention and minimize symptoms, take prescribed medications such as diuretics or vestibular suppressants as directed by your doctor, practice vestibular rehabilitation exercises to improve balance and reduce dizziness, avoid triggers such as caffeine, alcohol, and stress.";
        case "Dysphagia":
            return "Modify food texture and consistency to make swallowing easier, take smaller bites and chew food thoroughly, sit upright while eating and remain upright for at least 30 minutes after meals, consider swallowing therapy with a speech-language pathologist, avoid foods that are difficult to swallow or may cause choking.";
        case "GERD (Gastroesophageal reflux disease)":
            return "Avoid trigger foods such as spicy, acidic, or fatty foods that may exacerbate symptoms, eat smaller, more frequent meals to prevent overeating and minimize reflux, avoid lying down or bending over after meals, elevate the head of the bed to reduce nighttime reflux, consider over-the-counter medications such as antacids or proton pump inhibitors.";
        case "Peptic ulcer disease":
            return "Take prescribed antibiotics to eradicate H. pylori bacteria if present, avoid NSAIDs and other medications that may irritate the stomach lining, eat small, frequent meals to reduce gastric acid secretion, avoid spicy, acidic, or fatty foods that may exacerbate symptoms, consider medications such as proton pump inhibitors or H2 blockers to reduce gastric acid production.";
        case "Hemorrhoids":
            return "Use over-the-counter creams or suppositories containing hydrocortisone or witch hazel to reduce itching and swelling, take over-the-counter pain relievers such as acetaminophen or ibuprofen to alleviate pain, soak in warm baths to soothe the affected area, maintain good hygiene to prevent infections.";
        case "Colon cancer":
            return "Undergo recommended treatments such as surgery, chemotherapy, radiation therapy, or targeted therapy as prescribed by your oncologist, participate in clinical trials if eligible, manage symptoms such as pain, nausea, or fatigue with medications or supportive care, maintain a healthy lifestyle with regular exercise and a balanced diet, seek emotional support from friends, family, or support groups.";
        case "Insomnia":
            return "Establish a consistent sleep schedule and bedtime routine, create a comfortable sleep environment that is dark, quiet, and cool, limit caffeine and alcohol intake, avoid electronic devices before bedtime, practice relaxation techniques such as deep breathing or progressive muscle relaxation.";
        case "Sleep apnea":
            return "Use continuous positive airway pressure (CPAP) therapy as prescribed by your doctor, maintain a healthy weight through diet and exercise, avoid alcohol and sedatives that can relax throat muscles and worsen symptoms, sleep on your side rather than your back, consider oral appliances or surgery for severe cases.";
        case "Depression":
            return "Participate in therapy such as cognitive behavioral therapy (CBT) or interpersonal therapy (IPT), take prescribed antidepressant medications as directed by your doctor, engage in regular physical activity and exercise, maintain a healthy diet rich in fruits, vegetables, and whole grains, seek support from friends, family, or support groups.";
        case "Anorexia nervosa":
            return "Participate in therapy such as cognitive behavioral therapy (CBT) or family-based treatment (FBT), work with a dietitian to establish a meal plan and restore healthy eating habits, address underlying psychological issues such as low self-esteem or perfectionism, monitor physical health and address any medical complications.";
        case "Hyperthyroidism":
            return "Take prescribed antithyroid medications or undergo radioactive iodine therapy as directed by your doctor, avoid foods high in iodine such as seaweed or iodized salt, manage symptoms such as rapid heartbeat or tremors with beta-blockers or other medications, monitor thyroid function regularly.";
        case "Cancer":
            return "Undergo recommended treatments such as surgery, chemotherapy, radiation therapy, or targeted therapy as prescribed by your oncologist, manage symptoms such as pain, nausea, or fatigue with medications or supportive care, maintain a healthy lifestyle with regular exercise and a balanced diet, seek emotional support from friends, family, or support groups.";
        case "Hypothyroidism":
            return "Take prescribed thyroid hormone replacement medications such as levothyroxine as directed by your doctor, maintain a healthy weight through diet and exercise, monitor thyroid function regularly, manage symptoms such as fatigue, dry skin, or weight gain with appropriate medications.";
        case "Cushing's syndrome":
            return "Undergo treatment to address the underlying cause of Cushing's syndrome, such as surgery, radiation therapy, or medications to suppress cortisol production, manage symptoms such as high blood pressure or diabetes with appropriate medications, monitor bone health and address osteoporosis risk.";
        case "Measles":
            return "Stay isolated to prevent the spread of the virus, get plenty of rest, stay hydrated, take over-the-counter medications such as acetaminophen to reduce fever and relieve symptoms, avoid contact with others, especially pregnant women, infants, and people with weakened immune systems.";
        case "Chickenpox":
            return "Stay isolated to prevent the spread of the virus, get plenty of rest, stay hydrated, take over-the-counter medications such as acetaminophen to reduce fever and relieve itching, avoid scratching to prevent skin infections, use calamine lotion or oatmeal baths to soothe itching.";
        case "Edema":
            return "Elevate the affected limb to reduce swelling, avoid standing or sitting for long periods, wear compression stockings or sleeves to improve circulation, engage in regular physical activity to promote lymphatic drainage, limit salt intake to prevent fluid retention.";
        case "Lymphedema":
            return "Engage in gentle exercises such as walking or swimming to promote lymphatic drainage, wear compression garments or bandages to reduce swelling, practice meticulous skin care to prevent infections, elevate the affected limb to reduce swelling, consider manual lymphatic drainage therapy.";
        case "Infection":
            return "Take prescribed antibiotics or antiviral medications as directed by your doctor, get plenty of rest, stay hydrated by drinking fluids, practice good hygiene to prevent the spread of infection, avoid close contact with others until symptoms improve.";
        case "Lymphoma":
            return "Undergo recommended treatments such as chemotherapy, radiation therapy, immunotherapy, or targeted therapy as prescribed by your oncologist, participate in clinical trials if eligible, manage symptoms such as fatigue, pain, or nausea with medications or supportive care, seek emotional support from friends, family, or support groups.";
        case "Schizophrenia":
            return "Participate in therapy such as cognitive behavioral therapy (CBT), family therapy, or supportive therapy, take prescribed antipsychotic medications as directed by your doctor, establish a daily routine and adhere to treatment plans, avoid alcohol and drugs that can worsen symptoms, seek support from friends, family, or support groups.";
        case "Drug abuse":
            return "Participate in therapy such as cognitive behavioral therapy (CBT), motivational interviewing, or contingency management, consider medication-assisted treatment with medications such as methadone or buprenorphine, engage in support groups such as Narcotics Anonymous or SMART Recovery, avoid triggers and high-risk situations.";
        case "Alzheimer's disease":
            return "Participate in therapy such as cognitive stimulation therapy (CST) or reminiscence therapy, take prescribed medications such as cholinesterase inhibitors or memantine as directed by your doctor, maintain a structured daily routine, engage in regular physical activity and mental stimulation, ensure a safe environment to prevent accidents or injuries.";
        case "Dementia":
            return "Participate in therapy such as cognitive rehabilitation or reality orientation therapy, ensure a safe environment free from hazards, establish a daily routine and provide cues for activities, engage in regular physical activity and mental stimulation.";
    }
}
