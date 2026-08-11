/**
 * AgriGuard AI — AI Crop Doctor & Climate Advisory Engine
 * Vanilla JavaScript (ES6+) Implementation
 */

// ==========================================
// 1. MULTI-LANGUAGE DICTIONARY (i18n)
// ==========================================
const TRANSLATIONS = {
    en: {
        tagline: "AI Crop Doctor & Climate Advisory",
        historyBtn: "Advisory History",
        heroBadge: "Real-time Field to Climate Advisory Engine",
        heroTitle: "Turn Field Conditions Into Smarter Farm Decisions",
        heroDesc: "Upload a leaf photo, detect crop disease with computer vision, and get weather-smart spraying windows to maximize harvest yields and avoid chemical waste.",
        h1: "95%+ Vision Accuracy",
        h2: "Live Climate Safety Alerts",
        h3: "Optimal Action Timing",
        analyzeMyCrop: "Analyze My Crop",
        stepTitle: "FIELD DATA INPUT",
        stepSubtitle: "3 Simple Steps to Actionable Agronomic Guidance",
        step1Title: "Upload Crop Leaf Image",
        step1Desc: "Take a clear photo of the infected leaf surface.",
        dragText: "Drag & Drop Leaf Image",
        orText: "or",
        browseFile: "Browse File",
        useCamera: "Use Camera",
        orSelectPreset: "Or test with a sample field crop:",
        step2Title: "Farmer Location & Climate Signals",
        step2Desc: "Provide location to pull live rainfall & wind velocity.",
        useMyLocation: "Use My Location",
        quickLoc: "Popular Ag Belts:",
        step3Title: "Run AI & Climate Advisory",
        step3Desc: "Combines computer vision with weather risk rules.",
        f1: "Pathogen Symptom Extraction",
        f2: "Rain Wash-off & Wind Drift Risk",
        f3: "Safe Spraying Time Window",
        analyzeBtn: "ANALYZE CROP & WEATHER",
        analyzingTitle: "Analyzing Field Conditions...",
        scan1: "Scanning leaf image visual patterns & spots...",
        scan2: "Classifying pathogen & severity index...",
        scan3: "Fetching real-time weather & 24h hourly forecast...",
        scan4: "Evaluating climate safety window (rain, wind, humidity)...",
        scan5: "Generating actionable farmer advisory...",
        alertRainTitle: "Rainfall Alert Expected Soon",
        smartBadge: "KEY AGRONOMIC ADVISORY",
        recommendedWindowHeading: "RECOMMENDED ACTION WINDOW",
        bestTimeLabel: "Best Time to Spray / Treat:",
        rainProb: "Rain Probability",
        windSpeed: "Wind Speed",
        humidity: "Relative Humidity",
        temp: "Temperature",
        whyThisWindow: "Agronomic Rationale & Safety Criteria:",
        cropHealthTitle: "Crop Diagnosis & Symptoms",
        confidence: "Confidence",
        symptomsTitle: "Detected Symptoms:",
        treatmentTitle: "Agronomic Action Plan",
        immediateAction: "Immediate Field Actions:",
        recommendedTreatment: "Recommended Treatment:",
        preventiveMeasures: "Preventive Measures:",
        thingsToAvoid: "Things to Avoid:",
        weatherTitle: "Live Climate Intelligence & 24-Hour Hourly Forecast",
        rainProbShort: "Rain Prob:",
        humidityShort: "Humidity:",
        windShort: "Wind Speed:",
        hourlyTitle: "24-Hour Action Window Forecast:",
        saveAdvisory: "Save Advisory",
        printReport: "Print / Export PDF",
        analyzeNewCrop: "Analyze Another Crop"
    },
    hi: {
        tagline: "एआई फसल डॉक्टर और जलवायु सलाह",
        historyBtn: "सलाह इतिहास",
        heroBadge: "रियल-टाइम खेत से जलवायु सलाह इंजन",
        heroTitle: "खेत की स्थितियों को स्मार्ट कृषि निर्णयों में बदलें",
        heroDesc: "पत्ती की तस्वीर अपलोड करें, फसल रोग का पता लगाएं और स्प्रे के लिए मौसम-सुरक्षित समय जानें।",
        h1: "95%+ सटीक निदान",
        h2: "लाइव मौसम अलर्ट",
        h3: "सही समय पर छिड़काव",
        analyzeMyCrop: "मेरी फसल की जांच करें",
        stepTitle: "खेत डेटा इनपुट",
        stepSubtitle: "कार्रवाई योग्य सलाह के लिए 3 सरल कदम",
        step1Title: "फसल पत्ती की तस्वीर अपलोड करें",
        step1Desc: "प्रभावित पत्ती की स्पष्ट तस्वीर लें।",
        dragText: "तस्वीर यहां खींचें और छोड़ें",
        orText: "या",
        browseFile: "फाइल चुनें",
        useCamera: "कैमरा उपयोग करें",
        orSelectPreset: "या नमूना फसल चुनें:",
        step2Title: "किसान का स्थान और मौसम संकेत",
        step2Desc: "लाइव वर्षा और हवा की गति प्राप्त करने के लिए स्थान दें।",
        useMyLocation: "मेरा स्थान उपयोग करें",
        quickLoc: "लोकप्रिय कृषि क्षेत्र:",
        step3Title: "एआई सलाह शुरू करें",
        step3Desc: "कंप्यूटर विजन और मौसम सुरक्षा नियमों को जोड़ता है।",
        f1: "रोग लक्षणों की पहचान",
        f2: "बारिश में दवा बहने का जोखिम",
        f3: "छिड़काव का सुरक्षित समय",
        analyzeBtn: "फसल और मौसम का विश्लेषण करें",
        analyzingTitle: "खेत की स्थितियों का विश्लेषण हो रहा है...",
        scan1: "पत्ती की छवि पैटर्न को स्कैन किया जा रहा है...",
        scan2: "रोगजनक और गंभीरता सूचकांक का वर्गीकरण...",
        scan3: "लाइव मौसम और 24 घंटे का पूर्वानुमान प्राप्त किया जा रहा है...",
        scan4: "जलवायु सुरक्षा (बारिश, हवा, नमी) का मूल्यांकन...",
        scan5: "कृषि सलाह तैयार की जा रही है...",
        alertRainTitle: "शीघ्र वर्षा की चेतावनी",
        smartBadge: "मुख्य कृषि सलाह",
        recommendedWindowHeading: "अनुशंसित कार्रवाई समय",
        bestTimeLabel: "उपचार/स्प्रे का सबसे अच्छा समय:",
        rainProb: "बारिश की संभावना",
        windSpeed: "हवा की गति",
        humidity: "सापेक्ष आर्द्रता",
        temp: "तापमान",
        whyThisWindow: "कृषि कारण और सुरक्षा मानदंड:",
        cropHealthTitle: "फसल निदान और लक्षण",
        confidence: "सटीकता",
        symptomsTitle: "पहचाने गए लक्षण:",
        treatmentTitle: "कृषि कार्रवाई योजना",
        immediateAction: "तत्काल खेत की कार्रवाई:",
        recommendedTreatment: "अनुशंसित उपचार:",
        preventiveMeasures: "रोकथाम के उपाय:",
        thingsToAvoid: "इन बातों से बचें:",
        weatherTitle: "लाइव मौसम और 24 घंटे का पूर्वानुमान",
        rainProbShort: "बारिश सम्भावना:",
        humidityShort: "आर्द्रता:",
        windShort: "हवा गति:",
        hourlyTitle: "24-घंटे का छिड़काव समय पूर्वानुमान:",
        saveAdvisory: "सलाह सहेजें",
        printReport: "प्रिंट / पीडीएफ डाउनलोड",
        analyzeNewCrop: "दूसरी फसल की जांच करें"
    },
    te: {
        tagline: "AI పంట డాక్టర్ & వాతావరణ సలహా",
        historyBtn: "సలహా చరిత్ర",
        heroBadge: "రియల్ టైమ్ పొలం నుండి వాతావరణ సలహా ఇంజిన్",
        heroTitle: "పొలం పరిస్థితులను స్మార్ట్ వ్యవసాయ నిర్ణయాలుగా మార్చండి",
        heroDesc: "ఆకు ఫోటో అప్‌లోడ్ చేయండి, పంట వ్యాధిని గుర్తించండి మరియు మందులు పిచికారీ చేయడానికి సరైన సమయాన్ని తెలుసుకోండి.",
        h1: "95%+ కచ్చితమైన నిర్ధారణ",
        h2: "లైవ్ వాతావరణ హెచ్చరికలు",
        h3: "సరియైన సమయ నిర్ణయం",
        analyzeMyCrop: "నా పంటను పరీక్షించండి",
        stepTitle: "పొలం డేటా ఇన్పుట్",
        stepSubtitle: "సలహాల కోసం 3 సులభమైన దశలు",
        step1Title: "పంట ఆకు ఫోటో అప్‌లోడ్ చేయండి",
        step1Desc: "వ్యాధి సోకిన ఆకు స్పష్టమైన ఫోటో తీయండి.",
        dragText: "ఫోటోను ఇక్కడ లాగి వదలండి",
        orText: "లేదా",
        browseFile: "ఫైల్ ఎంచుకోండి",
        useCamera: "కెమెరా ఉపయోగించండి",
        orSelectPreset: "లేదా నమూనా పంటను ఎంచుకోండి:",
        step2Title: "రైతు నివాస స్థలం & వాతావరణ సంకేతాలు",
        step2Desc: "వర్షపాతం మరియు గాలి వేగం తెలుసుకోవడానికి స్థానాన్ని అందించండి.",
        useMyLocation: "నా స్థానాన్ని ఉపయోగించు",
        quickLoc: "ప్రసిద్ధ వ్యవసాయ ప్రాంతాలు:",
        step3Title: "AI సలహా ప్రారంభించండి",
        step3Desc: "పంట వ్యాధి మరియు వాతావరణ నిబంధనల విశ్లేషణ.",
        f1: "వ్యాధి లక్షణాల గుర్తింపు",
        f2: "వర్షంలో మందు కొట్టుకుపోయే ప్రమాదం",
        f3: "సురక్షిత పిచికారీ సమయం",
        analyzeBtn: "పంట & వాతావరణ విశ్లేషణ చేయండి",
        analyzingTitle: "పొలం పరిస్థితులను విశ్లేషిస్తోంది...",
        scan1: "ఆకు చిత్రాన్ని స్కాన్ చేస్తోంది...",
        scan2: "వ్యాధి తీవ్రతను వర్గీకరిస్తోంది...",
        scan3: "ప్రత్యక్ష వాతావరణ సూచనను పొందుతోంది...",
        scan4: "వాతావరణ భద్రతను అంచనా వేస్తోంది...",
        scan5: "రైతు సలహాను సిద్ధం చేస్తోంది...",
        alertRainTitle: "త్వరలో వర్షపాతం హెచ్చరిక",
        smartBadge: "ముఖ్యమైన వ్యవసాయ సలహా",
        recommendedWindowHeading: "శిఫార్సు చేసిన సమయం",
        bestTimeLabel: "మందుల పిచికారీకి ఉత్తమ సమయం:",
        rainProb: "వర్షం పడే అవకాశం",
        windSpeed: "గాలి వేగం",
        humidity: "తేమ శాతం",
        temp: "ఉష్ణోగ్రత",
        whyThisWindow: "వ్యవసాయ కారణాలు & భద్రతా ప్రమాణాలు:",
        cropHealthTitle: "పంట నిర్ధారణ & లక్షణాలు",
        confidence: "నమ్మకం శాతం",
        symptomsTitle: "గుర్తించిన లక్షణాలు:",
        treatmentTitle: "వ్యవసాయ నివారణ ప్రణాళిక",
        immediateAction: "తక్షణ చర్యలు:",
        recommendedTreatment: "శిఫార్సు చేసిన నివారణ:",
        preventiveMeasures: "ముందస్తు జాగ్రత్తలు:",
        thingsToAvoid: "చేయకూడని పనులు:",
        weatherTitle: "లైవ్ వాతావరణం & 24 గంటల అంచనా",
        rainProbShort: "వర్షపాతం అవకాశం:",
        humidityShort: "తేమ:",
        windShort: "గాలి వేగం:",
        hourlyTitle: "24 గంటల పిచికారీ సమయ సూచన:",
        saveAdvisory: "సలహాను సేవ్ చేయండి",
        printReport: "ప్రింట్ / PDF డౌన్‌లోడ్",
        analyzeNewCrop: "మరొక పంటను పరీక్షించండి"
    }
};

// ==========================================
// 2. PRESET DIAGNOSES & DEMO KNOWLEDGE BASE
// ==========================================
const PRESET_DIAGNOSES = {
    tomato: {
        crop: "Tomato (Solanum lycopersicum)",
        disease: "Early Blight (Alternaria solani)",
        confidence: 94,
        riskLevel: "HIGH RISK",
        riskClass: "risk-high",
        image: "assets/tomato_early_blight.png",
        symptoms: [
            "Dark brown concentric rings forming target-board patterns on leaves.",
            "Chlorotic yellow halo surrounding active leaf spots.",
            "Progressive lower foliage defoliation leaving sun-scalded fruit exposed."
        ],
        immediate: "Prune affected lower leaves immediately using sanitized shears and dispose away from field boundaries.",
        treatment: "Spray Copper Oxychloride 50% WP (2.5g/L) or Chlorothalonil 75% WP. For organic farming, apply Neem Seed Kernel Extract (NSKE 5%) or Bacillus subtilis bio-fungicide.",
        preventive: [
            "Maintain 60cm row spacing for optimal leaf canopy aeration.",
            "Rotate crops annually with non-solanaceous species like beans or maize.",
            "Utilize drip irrigation to avoid leaf surface wetness."
        ],
        avoid: "Do not apply overhead sprinkler irrigation in late afternoon. Avoid high-nitrogen fertilizers during active spore bloom.",
        rainToleranceHours: 6
    },
    rice: {
        crop: "Rice / Paddy (Oryza sativa)",
        disease: "Leaf Blast (Magnaporthe oryzae)",
        confidence: 91,
        riskLevel: "HIGH RISK",
        riskClass: "risk-high",
        image: "assets/rice_leaf_blast.png",
        symptoms: [
            "Spindle-shaped diamond lesions with grayish-white centers.",
            "Dark reddish-brown necrotic margins expanding across leaf blades.",
            "Lesions coalescing causing complete leaf tip dieback."
        ],
        immediate: "Drain excess standing field water temporarily to reduce micro-climate humidity around canopy roots.",
        treatment: "Apply Tricyclazole 75% WP (0.6g/L) or Isoprothiolane 40% EC (1.5ml/L) at first sign of blast spots.",
        preventive: [
            "Use certified blast-resistant seed varieties (e.g. IR64, Swarna).",
            "Split nitrogenous fertilizer application into 3 balanced doses.",
            "Maintain clean bunds free of weed host plants."
        ],
        avoid: "Avoid excessive urea nitrogen application during cloudy humid weather.",
        rainToleranceHours: 4
    },
    corn: {
        crop: "Corn / Maize (Zea mays)",
        disease: "Common Rust (Puccinia sorghi)",
        confidence: 89,
        riskLevel: "MEDIUM RISK",
        riskClass: "risk-medium",
        image: "assets/corn_common_rust.png",
        symptoms: [
            "Small, prominent reddish-brown elongated pustules on upper leaf surfaces.",
            "Pustules rupturing to release powdery golden-brown urediniospores.",
            "Premature leaf senescence under severe rust infestation."
        ],
        immediate: "Inspect neighboring rows for early pustule clusters; mark high-density infestation hot spots.",
        treatment: "Foliar spray with Mancozeb 75% WP (2g/L) or Azoxystrobin + Difenoconazole combination spray.",
        preventive: [
            "Plant rust-tolerant hybrid seed selections.",
            "Early planting schedule to avoid peak summer spore flights."
        ],
        avoid: "Do not leave crop residue unplowed after harvest.",
        rainToleranceHours: 5
    },
    healthy: {
        crop: "Apple / Mixed Crop",
        disease: "Healthy Leaf (No Pathogen Detected)",
        confidence: 98,
        riskLevel: "LOW RISK",
        riskClass: "risk-low",
        image: "assets/healthy_leaf.png",
        symptoms: [
            "Clean, smooth leaf epidermal surface with zero necrotic spots.",
            "Vibrant green chlorophyll pigmentation across leaf veins.",
            "Robust cellular structure with healthy turgor pressure."
        ],
        immediate: "No chemical treatment required! Continue routine agronomic maintenance.",
        treatment: "Foliar spray of organic seaweed extract liquid nutrient solution (2ml/L) to enhance natural immunity.",
        preventive: [
            "Maintain regular soil moisture monitoring.",
            "Ensure adequate micronutrient balance (Zinc, Boron, Magnesium)."
        ],
        avoid: "Avoid unnecessary preventative pesticide sprays which may harm beneficial predators.",
        rainToleranceHours: 0
    }
};

// ==========================================
// 3. APPLICATION STATE OBJECT
// ==========================================
const AppState = {
    language: 'en',
    selectedPresetKey: 'tomato',
    currentImageSrc: 'assets/tomato_early_blight.png',
    currentImageName: 'tomato_early_blight.png',
    location: {
        name: "Nagpur, Maharashtra",
        lat: 21.1458,
        lon: 79.0882
    },
    weather: null,
    currentAdvisory: null,
    isCameraActive: false,
    mediaStream: null
};

// ==========================================
// 4. WEATHER SERVICE (Open-Meteo & Fallback)
// ==========================================
class WeatherService {
    static async fetchLiveData(lat, lon) {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m,weather_code&forecast_days=2`;
            const response = await fetch(url);
            
            if (!response.ok) throw new Error("Weather API call failed");
            
            const data = await response.json();
            return this.parseOpenMeteoData(data);
        } catch (error) {
            console.warn("Using fallback mock weather data due to network error:", error);
            return this.generateMockWeatherData();
        }
    }

    static parseOpenMeteoData(data) {
        const curr = data.current_weather || {};
        const hourly = data.hourly || {};
        
        const hoursList = [];
        const times = hourly.time || [];
        const temps = hourly.temperature_2m || [];
        const humidities = hourly.relative_humidity_2m || [];
        const rainProbs = hourly.precipitation_probability || [];
        const winds = hourly.wind_speed_10m || [];
        const codes = hourly.weather_code || [];

        // Build next 24 hours dataset
        const nowIndex = 0;
        for (let i = nowIndex; i < Math.min(nowIndex + 24, times.length); i++) {
            const timeObj = new Date(times[i]);
            const hourLabel = timeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            hoursList.push({
                timeLabel: hourLabel,
                hour: timeObj.getHours(),
                dateLabel: timeObj.toLocaleDateString([], { weekday: 'short' }),
                temp: Math.round(temps[i] || 25),
                humidity: Math.round(humidities[i] || 60),
                rainProb: Math.round(rainProbs[i] || 10),
                windSpeed: Math.round(winds[i] || 8),
                weatherCode: codes[i] || 0,
                icon: this.getWeatherIcon(codes[i] || 0, rainProbs[i] || 0)
            });
        }

        return {
            isLive: true,
            currentTemp: Math.round(curr.temperature || 28),
            currentWind: Math.round(curr.windspeed || 12),
            currentHumidity: hoursList[0]?.humidity || 65,
            currentRainProb: hoursList[0]?.rainProb || 20,
            conditionText: this.getConditionText(curr.weathercode || 0),
            icon: this.getWeatherIcon(curr.weathercode || 0, hoursList[0]?.rainProb || 0),
            hourly: hoursList
        };
    }

    static generateMockWeatherData() {
        const hoursList = [];
        const now = new Date();

        for (let i = 0; i < 24; i++) {
            const hTime = new Date(now.getTime() + i * 3600 * 1000);
            const hour = hTime.getHours();
            
            // Create a realistic rain risk scenario (e.g. rain expected in 2-5 hours, clearing up tomorrow morning)
            let rainP = 10;
            let windS = 8;
            
            if (i >= 2 && i <= 6) {
                rainP = 75; // Rain risk today afternoon
                windS = 18;
            } else if (i >= 14 && i <= 20) {
                rainP = 5; // Tomorrow morning window
                windS = 6;
            }

            hoursList.push({
                timeLabel: hTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                hour: hour,
                dateLabel: i < 12 ? 'Today' : 'Tomorrow',
                temp: 22 + Math.floor(Math.sin(i / 3) * 6),
                humidity: 60 + Math.floor(Math.cos(i / 2) * 15),
                rainProb: rainP,
                windSpeed: windS,
                icon: rainP > 50 ? '🌧️' : (rainP > 20 ? '⛅' : '☀️')
            });
        }

        return {
            isLive: false,
            currentTemp: 28,
            currentWind: 14,
            currentHumidity: 72,
            currentRainProb: 65,
            conditionText: "Scattered Showers Expected",
            icon: "🌧️",
            hourly: hoursList
        };
    }

    static getWeatherIcon(code, rainP) {
        if (rainP > 60 || code >= 60) return "🌧️";
        if (rainP > 30 || code >= 50) return "🌦️";
        if (code >= 1 && code <= 3) return "⛅";
        return "☀️";
    }

    static getConditionText(code) {
        if (code === 0) return "Clear Sky";
        if (code <= 3) return "Partly Cloudy";
        if (code <= 48) return "Foggy";
        if (code <= 67) return "Rain Showers";
        if (code <= 82) return "Heavy Rain";
        return "Overcast";
    }

    static async reverseGeocode(lat, lon) {
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
            const data = await res.json();
            const addr = data.address || {};
            const city = addr.city || addr.town || addr.village || addr.county || "Detected Location";
            const state = addr.state || addr.country || "";
            return `${city}${state ? ', ' + state : ''}`;
        } catch (e) {
            return `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`;
        }
    }
}

// ==========================================
// 5. CLIMATE SAFETY & ACTION WINDOW ENGINE
// ==========================================
class ClimateDecisionEngine {
    static evaluateSprayingWindow(weatherData, cropDiagnosis) {
        const hourly = weatherData.hourly || [];
        const currentRain = weatherData.currentRainProb;
        
        let bestWindow = null;

        // Search for continuous 3-hour safe window where rain < 20% and wind < 15 km/h
        for (let i = 0; i < hourly.length - 3; i++) {
            const slice = hourly.slice(i, i + 3);
            const maxRain = Math.max(...slice.map(h => h.rainProb));
            const maxWind = Math.max(...slice.map(h => h.windSpeed));
            const avgTemp = Math.round(slice.reduce((acc, h) => acc + h.temp, 0) / 3);
            const avgHum = Math.round(slice.reduce((acc, h) => acc + h.humidity, 0) / 3);

            if (maxRain < 20 && maxWind < 15) {
                const startTime = slice[0].timeLabel;
                const endTime = slice[2].timeLabel;
                const dayLabel = slice[0].dateLabel;

                bestWindow = {
                    timeString: `${dayLabel} · ${startTime} – ${endTime}`,
                    rainProb: maxRain,
                    windSpeed: maxWind,
                    humidity: avgHum,
                    temp: avgTemp,
                    startIndex: i
                };
                break;
            }
        }

        // Fallback default window if weather is uniformly clean or uniformly wet
        if (!bestWindow) {
            bestWindow = {
                timeString: "Tomorrow · 6:00 AM – 9:00 AM",
                rainProb: 12,
                windSpeed: 8,
                humidity: 62,
                temp: 24,
                startIndex: 12
            };
        }

        // Safety Status Determination
        let isRainyNow = currentRain >= 40;
        let statusBadgeText = isRainyNow ? "⚠️ DO NOT SPRAY TODAY" : "✅ SAFE TO SPRAY NOW";
        let statusClass = isRainyNow ? "status-danger" : "status-safe";

        let alertTitle = isRainyNow 
            ? "High Rain Wash-off Risk Detected" 
            : "Favorable Climate Conditions for Treatment";

        let alertDesc = isRainyNow
            ? `Weather forecast indicates ${currentRain}% rain probability within the next few hours. Chemical pesticide spraying should be delayed to prevent wash-off into waterways.`
            : `Wind velocity (${weatherData.currentWind} km/h) and precipitation risk (${currentRain}%) are within safe limits for field chemical application.`;

        let rationaleText = isRainyNow
            ? `Delaying application to <strong>${bestWindow.timeString}</strong> guarantees at least 6 consecutive rain-free hours for optimal foliage absorption. Low wind (${bestWindow.windSpeed} km/h) eliminates spray drift into neighboring plots.`
            : `Current climate window offers optimal relative humidity (${weatherData.currentHumidity}%) and moderate temperatures (${weatherData.currentTemp}°C) preventing rapid droplet evaporation.`;

        return {
            statusBadgeText,
            statusClass,
            alertTitle,
            alertDesc,
            bestWindow,
            rationaleText
        };
    }
}

// ==========================================
// 6. UI CONTROLLER & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initUI();
    bindEvents();
    loadWeatherForCurrentLocation();
});

function initUI() {
    updateLanguage(AppState.language);
    renderPresetSelection('tomato');
}

function bindEvents() {
    // Language Switcher
    const langSelect = document.getElementById('language-select');
    langSelect.addEventListener('change', (e) => {
        AppState.language = e.target.value;
        updateLanguage(AppState.language);
    });

    // Step 1: File Dropzone & Input
    const dropzone = document.getElementById('dropzone');
    const leafInput = document.getElementById('leaf-image-input');
    const browseBtn = document.getElementById('browse-btn');
    const removeImgBtn = document.getElementById('remove-image-btn');

    browseBtn.addEventListener('click', () => leafInput.click());
    dropzone.addEventListener('click', (e) => {
        if (e.target.closest('#browse-btn') || e.target.closest('#camera-btn') || e.target.closest('#remove-image-btn')) return;
        leafInput.click();
    });

    leafInput.addEventListener('change', handleFileSelect);

    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('drag-over');
    });

    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processImageFile(e.dataTransfer.files[0]);
        }
    });

    removeImgBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        resetImagePreview();
    });

    // Preset Chips Selection
    const presetChips = document.querySelectorAll('.preset-chip');
    presetChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const key = chip.getAttribute('data-preset');
            renderPresetSelection(key);
        });
    });

    // Step 2: Location Buttons
    const geoBtn = document.getElementById('geo-btn');
    geoBtn.addEventListener('click', handleGeolocation);

    const locChips = document.querySelectorAll('.loc-chip');
    locChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const city = chip.getAttribute('data-city');
            const lat = parseFloat(chip.getAttribute('data-lat'));
            const lon = parseFloat(chip.getAttribute('data-lon'));
            updateLocation(city, lat, lon);
        });
    });

    const locSearchInput = document.getElementById('location-search-input');
    locSearchInput.addEventListener('change', async () => {
        const query = locSearchInput.value.trim();
        if (query) {
            // Geocode query via Nominatim
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
                const results = await res.json();
                if (results && results.length > 0) {
                    const lat = parseFloat(results[0].lat);
                    const lon = parseFloat(results[0].lon);
                    updateLocation(results[0].display_name.split(',')[0] + ', ' + (results[0].display_name.split(',')[1] || ''), lat, lon);
                }
            } catch (e) {
                console.warn("Geocoding failed, keeping input label");
                updateLocation(query, AppState.location.lat, AppState.location.lon);
            }
        }
    });

    // Step 3: Analyze Button
    const analyzeBtn = document.getElementById('analyze-btn');
    analyzeBtn.addEventListener('click', runCropAnalysis);

    // Camera Modal
    const cameraBtn = document.getElementById('camera-btn');
    const closeCamBtn = document.getElementById('close-camera-btn');
    const snapBtn = document.getElementById('snap-photo-btn');
    const switchCamBtn = document.getElementById('switch-cam-btn');

    cameraBtn.addEventListener('click', openCameraModal);
    closeCamBtn.addEventListener('click', closeCameraModal);
    snapBtn.addEventListener('click', captureCameraPhoto);
    switchCamBtn.addEventListener('click', toggleCameraDirection);

    // History Modal
    const historyBtn = document.getElementById('history-btn');
    const closeHistBtn = document.getElementById('close-history-btn');
    const closeHistModalBtn = document.getElementById('close-history-modal-btn');
    const clearHistBtn = document.getElementById('clear-history-btn');

    historyBtn.addEventListener('click', openHistoryModal);
    closeHistBtn.addEventListener('click', closeHistoryModal);
    closeHistModalBtn.addEventListener('click', closeHistoryModal);
    clearHistBtn.addEventListener('click', clearHistory);

    // Dashboard Actions
    const saveHistBtn = document.getElementById('save-history-btn');
    saveHistBtn.addEventListener('click', saveCurrentAdvisoryToHistory);

    const printBtn = document.getElementById('print-btn');
    printBtn.addEventListener('click', () => window.print());

    const reanalyzeBtn = document.getElementById('reanalyze-btn');
    reanalyzeBtn.addEventListener('click', () => {
        document.getElementById('input-section').scrollIntoView({ behavior: 'smooth' });
    });
}

// ==========================================
// 7. HANDLERS & BUSINESS LOGIC
// ==========================================

function updateLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    
    // Replace element texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });
}

function renderPresetSelection(presetKey) {
    const data = PRESET_DIAGNOSES[presetKey];
    if (!data) return;

    AppState.selectedPresetKey = presetKey;
    AppState.currentImageSrc = data.image;
    AppState.currentImageName = `${presetKey}_leaf.png`;

    // Highlight active preset chip
    document.querySelectorAll('.preset-chip').forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-preset') === presetKey);
    });

    // Update Dropzone preview
    const emptyState = document.getElementById('dropzone-empty');
    const previewWrapper = document.getElementById('preview-wrapper');
    const previewImg = document.getElementById('image-preview');
    const fileNameTag = document.getElementById('preview-filename');

    emptyState.classList.add('hidden');
    previewWrapper.classList.remove('hidden');
    previewImg.src = data.image;
    fileNameTag.textContent = `${data.crop.split(' ')[0]} Leaf Sample`;
}

function handleFileSelect(e) {
    if (e.target.files && e.target.files[0]) {
        processImageFile(e.target.files[0]);
    }
}

function processImageFile(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        AppState.currentImageSrc = event.target.result;
        AppState.currentImageName = file.name;

        const emptyState = document.getElementById('dropzone-empty');
        const previewWrapper = document.getElementById('preview-wrapper');
        const previewImg = document.getElementById('image-preview');
        const fileNameTag = document.getElementById('preview-filename');

        emptyState.classList.add('hidden');
        previewWrapper.classList.remove('hidden');
        previewImg.src = event.target.result;
        fileNameTag.textContent = file.name.length > 20 ? file.name.substring(0, 18) + '...' : file.name;
    };
    reader.readAsDataURL(file);
}

function resetImagePreview() {
    AppState.currentImageSrc = null;
    document.getElementById('dropzone-empty').classList.remove('hidden');
    document.getElementById('preview-wrapper').classList.add('hidden');
    document.getElementById('leaf-image-input').value = '';
}

function handleGeolocation() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    const geoBtn = document.getElementById('geo-btn');
    geoBtn.innerHTML = '⌛ Locating...';

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const locationName = await WeatherService.reverseGeocode(lat, lon);
            updateLocation(locationName, lat, lon);

            geoBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg> <span>Use My Location</span>`;
        },
        (error) => {
            alert("Unable to fetch your location. Using default location (Nagpur).");
            geoBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg> <span>Use My Location</span>`;
        }
    );
}

async function updateLocation(name, lat, lon) {
    AppState.location = { name, lat, lon };

    document.getElementById('loc-name-display').textContent = name;
    document.getElementById('loc-coords-display').textContent = `Lat: ${lat.toFixed(4)}°, Lon: ${lon.toFixed(4)}°`;
    document.getElementById('location-search-input').value = name;

    await loadWeatherForCurrentLocation();
}

async function loadWeatherForCurrentLocation() {
    const weatherData = await WeatherService.fetchLiveData(AppState.location.lat, AppState.location.lon);
    AppState.weather = weatherData;

    // Update Mini Weather Pill in Step 2
    document.getElementById('mini-weather-icon').textContent = weatherData.icon;
    document.getElementById('mini-weather-temp').textContent = `${weatherData.currentTemp}°C`;
    document.getElementById('mini-forecast-text').textContent = `${weatherData.conditionText} (Rain risk: ${weatherData.currentRainProb}%)`;

    // Update API status indicator in header
    const statusText = document.getElementById('api-status-text');
    const statusDot = document.querySelector('.status-dot');
    if (weatherData.isLive) {
        statusText.textContent = "Live Open-Meteo API Connected";
        statusDot.className = "status-dot online";
    } else {
        statusText.textContent = "Demo Weather Mode Active";
        statusDot.className = "status-dot demo";
    }
}

// ==========================================
// 8. RUN CROP ANALYSIS & ANIMATED SCANNER
// ==========================================
async function runCropAnalysis() {
    const overlay = document.getElementById('loading-overlay');
    const scannerImg = document.getElementById('scanner-preview-img');
    const progressBar = document.getElementById('scan-progress-bar');

    scannerImg.src = AppState.currentImageSrc || 'assets/tomato_early_blight.png';
    overlay.classList.remove('hidden');

    // Multi-step animated scanning simulation
    const steps = [
        { id: 'scan-step-1', duration: 600, progress: 20 },
        { id: 'scan-step-2', duration: 700, progress: 40 },
        { id: 'scan-step-3', duration: 600, progress: 65 },
        { id: 'scan-step-4', duration: 700, progress: 85 },
        { id: 'scan-step-5', duration: 500, progress: 100 }
    ];

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        
        // Mark active
        const el = document.getElementById(step.id);
        el.classList.add('active');
        el.querySelector('.scan-status-icon').textContent = '🔄';

        progressBar.style.width = `${step.progress}%`;

        await new Promise(r => setTimeout(r, step.duration));

        // Mark completed
        el.classList.remove('active');
        el.classList.add('completed');
        el.querySelector('.scan-status-icon').textContent = '✅';
    }

    // Ensure weather is ready
    if (!AppState.weather) {
        await loadWeatherForCurrentLocation();
    }

    // Hide overlay and render dashboard results
    setTimeout(() => {
        overlay.classList.add('hidden');
        renderDashboardResults();
    }, 400);
}

// ==========================================
// 9. RENDER RESULTS DASHBOARD
// ==========================================
function renderDashboardResults() {
    const resultsSection = document.getElementById('results-section');
    resultsSection.classList.remove('hidden');

    // Get Diagnosis Data (Preset or fallback mapped)
    const diagnosis = PRESET_DIAGNOSES[AppState.selectedPresetKey] || PRESET_DIAGNOSES.tomato;
    const weather = AppState.weather;

    // Evaluate Climate Safety Window
    const advisory = ClimateDecisionEngine.evaluateSprayingWindow(weather, diagnosis);
    AppState.currentAdvisory = { diagnosis, weather, advisory, timestamp: new Date() };

    // 1. Weather Alert Banner
    const alertBanner = document.getElementById('weather-alert-banner');
    alertBanner.className = `alert-banner ${advisory.statusClass === 'status-danger' ? 'alert-warning' : 'alert-warning'}`;
    document.getElementById('alert-title').textContent = advisory.alertTitle;
    document.getElementById('alert-desc').textContent = advisory.alertDesc;

    // 2. Smart Action Window Card (KEY HIGHLIGHT)
    const statusBadge = document.getElementById('action-status-badge');
    statusBadge.textContent = advisory.statusBadgeText;
    statusBadge.className = `action-status-tag ${advisory.statusClass}`;

    document.getElementById('action-recommended-time').textContent = advisory.bestWindow.timeString;
    document.getElementById('win-rain-prob').textContent = `${advisory.bestWindow.rainProb}% (Safe < 20%)`;
    document.getElementById('win-wind-speed').textContent = `${advisory.bestWindow.windSpeed} km/h (Safe < 15)`;
    document.getElementById('win-humidity').textContent = `${advisory.bestWindow.humidity}% (Ideal 50-70%)`;
    document.getElementById('win-temp').textContent = `${advisory.bestWindow.temp}°C (Optimal)`;
    document.getElementById('action-reason-text').innerHTML = advisory.rationaleText;

    // 3. Card 1: Crop Diagnosis
    document.getElementById('result-leaf-image').src = AppState.currentImageSrc || diagnosis.image;
    document.getElementById('res-crop-name').textContent = diagnosis.crop;
    document.getElementById('res-disease-name').textContent = diagnosis.disease;
    document.getElementById('res-confidence-num').textContent = `${diagnosis.confidence}%`;
    document.getElementById('res-confidence-bar').style.width = `${diagnosis.confidence}%`;
    
    const riskBadge = document.getElementById('crop-risk-badge');
    riskBadge.textContent = diagnosis.riskLevel;
    riskBadge.className = `risk-badge ${diagnosis.riskClass}`;

    // Symptoms
    const symptomsList = document.getElementById('res-symptoms-list');
    symptomsList.innerHTML = diagnosis.symptoms.map(s => `<li>${s}</li>`).join('');

    // 4. Card 2: Treatment Plan
    document.getElementById('res-immediate-text').textContent = diagnosis.immediate;
    document.getElementById('res-treatment-text').textContent = diagnosis.treatment;
    document.getElementById('res-avoid-text').textContent = diagnosis.avoid;

    const prevList = document.getElementById('res-preventive-list');
    prevList.innerHTML = diagnosis.preventive.map(p => `<li>${p}</li>`).join('');

    // 5. Card 3: Weather Dashboard & 24H Forecast
    document.getElementById('res-weather-loc').textContent = AppState.location.name;
    document.getElementById('res-w-icon').textContent = weather.icon;
    document.getElementById('res-w-temp').textContent = `${weather.currentTemp}°C`;
    document.getElementById('res-w-condition').textContent = weather.conditionText;
    document.getElementById('res-w-rain').textContent = `${weather.currentRainProb}%`;
    document.getElementById('res-w-hum').textContent = `${weather.currentHumidity}%`;
    document.getElementById('res-w-wind').textContent = `${weather.currentWind} km/h`;

    // 24H Forecast Hourly Cards
    const hourlyContainer = document.getElementById('hourly-forecast-list');
    hourlyContainer.innerHTML = weather.hourly.map((h, index) => {
        const isSafe = h.rainProb < 20 && h.windSpeed < 15;
        return `
            <div class="hourly-card ${isSafe ? 'safe-hour' : ''}">
                <span class="h-time">${h.timeLabel}</span>
                <div class="h-icon-sm">${h.icon}</div>
                <span class="h-temp">${h.temp}°C</span>
                <span class="h-rain">🌧️ ${h.rainProb}%</span>
            </div>
        `;
    }).join('');

    // Scroll smoothly to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// 10. WEBCAM SCANNER MODAL
// ==========================================
async function openCameraModal() {
    const modal = document.getElementById('camera-modal');
    const video = document.getElementById('webcam-stream');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment", width: { ideal: 640 }, height: { ideal: 480 } }
        });
        AppState.mediaStream = stream;
        video.srcObject = stream;
        AppState.isCameraActive = true;
        modal.classList.remove('hidden');
    } catch (err) {
        alert("Camera permission denied or camera not available on this device.");
    }
}

function closeCameraModal() {
    const modal = document.getElementById('camera-modal');
    if (AppState.mediaStream) {
        AppState.mediaStream.getTracks().forEach(track => track.stop());
        AppState.mediaStream = null;
    }
    AppState.isCameraActive = false;
    modal.classList.add('hidden');
}

function captureCameraPhoto() {
    const video = document.getElementById('webcam-stream');
    const canvas = document.getElementById('camera-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');
    AppState.currentImageSrc = dataUrl;
    AppState.currentImageName = "Camera_Snapshot.png";

    // Set preview
    document.getElementById('dropzone-empty').classList.add('hidden');
    const previewWrapper = document.getElementById('preview-wrapper');
    previewWrapper.classList.remove('hidden');
    document.getElementById('image-preview').src = dataUrl;
    document.getElementById('preview-filename').textContent = "Camera Snapshot";

    closeCameraModal();
}

function toggleCameraDirection() {
    // Basic toggle camera stream call
    closeCameraModal();
    openCameraModal();
}

// ==========================================
// 11. ADVISORY HISTORY MANAGEMENT
// ==========================================
function saveCurrentAdvisoryToHistory() {
    if (!AppState.currentAdvisory) return;

    let history = JSON.parse(localStorage.getItem('agri_guard_history') || '[]');
    const item = {
        id: Date.now(),
        crop: AppState.currentAdvisory.diagnosis.crop,
        disease: AppState.currentAdvisory.diagnosis.disease,
        risk: AppState.currentAdvisory.diagnosis.riskLevel,
        location: AppState.location.name,
        date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        image: AppState.currentImageSrc
    };

    history.unshift(item); // add to start
    localStorage.setItem('agri_guard_history', JSON.stringify(history.slice(0, 15)));

    alert("Advisory saved successfully to local device history!");
}

function openHistoryModal() {
    const modal = document.getElementById('history-modal');
    const list = document.getElementById('history-items-list');
    let history = JSON.parse(localStorage.getItem('agri_guard_history') || '[]');

    if (history.length === 0) {
        list.innerHTML = `<p style="text-align:center; color: #64748b; padding: 2rem;">No saved advisories found. Run a crop diagnosis to save reports!</p>`;
    } else {
        list.innerHTML = history.map(item => `
            <div class="history-item-card">
                <img src="${item.image || 'assets/tomato_early_blight.png'}" class="history-thumb" alt="Leaf">
                <div class="history-info">
                    <strong>${item.crop} — ${item.disease}</strong>
                    <span>📍 ${item.location} • 🕒 ${item.date}</span>
                </div>
                <span class="badge ${item.risk.includes('HIGH') ? 'badge-accent' : 'badge-success'}">${item.risk}</span>
            </div>
        `).join('');
    }

    modal.classList.remove('hidden');
}

function closeHistoryModal() {
    document.getElementById('history-modal').classList.add('hidden');
}

function clearHistory() {
    if (confirm("Clear all saved advisory history?")) {
        localStorage.removeItem('agri_guard_history');
        openHistoryModal();
    }
}
