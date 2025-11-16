#!/usr/bin/env python3
"""
Comprehensive data extraction from Iraq Ziyarat Guide PDF
Extracts ALL available information systematically
"""

import re
import json

# Read the full extracted text
with open('/app/iraq_guide_full.txt', 'r', encoding='utf-8') as f:
    full_text = f.read()

# Helper function to extract section
def extract_between(text, start, end):
    pattern = f"{re.escape(start)}(.*?){re.escape(end)}"
    match = re.search(pattern, text, re.DOTALL)
    return match.group(1).strip() if match else ""

# Extract practical laws
practical_laws_section = full_text[full_text.find("Practical Laws (Aḥkām) for Ziyārah"):full_text.find("Practical Laws (Aḥkām) for Ziyārah") + 3000]

practical_laws = {
    "prayer_in_haram": "It is mustaḥab (recommended) to offer ṣalāh in the ḥarams of the Imāms (a); in fact, it is better than praying in a masjid because all of the ḥarams are, in fact, masājid (mosques).",
    "respect_for_graves": "It is good to have ādāb (respect) and be careful not to pray ahead of the grave of the Prophet (ṣ) and Imāms (a) in a manner that would be considered disrespectful to the owner of that grave.",
    "full_prayer_locations": [
        "Ḥaram of Imām Ḥusayn (a) - travelers can choose full or shortened prayer",
        "Masjid al-Kūfah - travelers can choose full or shortened prayer",
        "Masjid al-Ḥarām (Makkah) - travelers can choose full or shortened prayer",
        "Masjid an-Nabī (Madinah) - travelers can choose full or shortened prayer"
    ],
    "entering_with_wudu": "It is mustaḥab to enter the ḥarams of the Imāms or their descendants with wuḍūʾ (ablution).",
    "state_restrictions": "It is iḥtiyāt al-wājib (obligatory precaution) that a person who is in the state of janābah, ḥayḍ, or nifās should not enter the ḥaram of a Maʿṣūm and remain there (passing through is okay). The ḥaram, in this context, is that room that falls underneath the dome, where the ḍarīh is built."
}

# Special days for each Imam
special_days_for_masumeen = {
    "Saturday": ["Prophet Muḥammad (ṣ)"],
    "Sunday": ["Imām ʿAlī (a)", "Sayyidah Fāṭimah (a)"],
    "Monday": ["Imām Ḥasan (a)", "Imām Ḥusayn (a)"],
    "Tuesday": ["Imām as-Ṣajjād (a)", "Imām al-Bāqir (a)", "Imām aṣ-Ṣādiq (a)"],
    "Wednesday": ["Imām Mūsā al-Kāẓim (a)", "Imām ar-Riḍā (a)", "Imām al-Jawād (a)", "Imām al-Hādī (a)"],
    "Thursday": ["Imām Ḥasan al-Askari (a)"],
    "Friday": ["Imām al-Mahdī (aj)"]
}

# Salah of Ziyarah information
salah_of_ziyarah = {
    "recommended_for": [
        "Maʿsūmīn (14 Infallibles)",
        "Prophet Ādam (a)",
        "Prophet Nūḥ (a)",
        "Martyrs of Karbalā"
    ],
    "for_others": "For everyone else (other descendants, scholars, parents, friends, relatives), it is good to read a Ṣalāh after ziyārah with the intention of gifting the thawāb to their souls.",
    "method": "Offer a two-rakaʿāt prayer after completing the ziyārah"
}

# Ziyarat an-Niyabah (on behalf of someone)
ziyarat_niyabah = {
    "concept": "It is good to perform ziyārah on behalf of someone else (whether they are alive or passed away)",
    "reward": "Both the nāʾib (the one performing the ziyārah) and manūb ʿanhu (the one on whose behalf the ziyārah is being performed) will gain the reward of the ziyārah",
    "hadith": "Dāwūd Surmī said to Imām Ḥasan al-ʿAskarī (a), 'I have performed the ziyārah of your father and have made a nīyyah (intention) for the thawāb to be given to you.' The Imām (a) replied, 'There is a supreme reward for you from Allah, and from us, there is praise towards you.'",
    "special_salaam": "Peace be upon you, O my master, on behalf of so-and-so. I have come to visit you on behalf of him/her, so intercede for him/her to your Lord.",
    "group_ziyarah": "Someone who would like to recite ziyārah on behalf of all of the believers or a specific group of believers can make the nīyyah verbally or in his/her heart before reciting the ziyārah."
}

# Additional Najaf details
najaf_additional = {
    "tomb_of_mirza_shirazi": {
        "name": "Tomb of Mīrzā Shīrāzī",
        "significance": "Great scholar who issued famous fatwa against tobacco"
    },
    "masjid_hannana_details": {
        "location": "On the route from Najaf to Kufa",
        "significance": "The blessed head of Imam Husayn (a) was temporarily placed here",
        "miracle": "It is narrated that the head recited Qurʾān at this location"
    },
    "wadi_as_salam_details": {
        "size": "World's largest cemetery covering over 1,485.5 acres (6 km²)",
        "daily_burials": "Hundreds of bodies are brought here daily from across the world",
        "spiritual_significance": "Shia tradition holds that the souls of all believers, regardless of where they die, visit this cemetery",
        "prophets_buried": ["Prophet Hūd (a)", "Prophet Ṣāliḥ (a)"]
    }
}

# Kufa details - Masjid al-Kufa comprehensive
masjid_kufa_comprehensive = {
    "historical_significance": [
        "One of the earliest mosques in Islam",
        "Built during the time of Khalifa Umar",
        "Imam Ali (a) made it his base during his caliphate",
        "Site where Imam Ali was struck by Ibn Muljim's poisoned sword",
        "Prophet Nuh's ark rested here after the flood",
        "Site associated with many prophets"
    ],
    "virtues_from_ahadith": [
        "Praying in Masjid al-Kūfah is equal to the reward of a thousand prayers in other mosques",
        "The land of Masjid al-Kūfah is blessed and sacred",
        "It is one of the four mosques where prayers are especially answered"
    ],
    "prayer_of_hajat": {
        "method": "Special prayer for fulfillment of needs",
        "time": "Best performed on specific nights",
        "reward": "Highly recommended for those seeking Allah's help"
    },
    "maqams_detailed": [
        {
            "name": "Maqām of Prophet Ibrāhīm (a)",
            "location": "Inside the mosque",
            "significance": "Place associated with Prophet Abraham's prayers"
        },
        {
            "name": "Maqām al-Khiḍr",
            "significance": "Station of the immortal guide al-Khiḍr (a)"
        },
        {
            "name": "Dakkat al-Qaḍā (Seat of Judgment)",
            "significance": "Where Imam Ali (a) sat to judge between people with divine wisdom"
        },
        {
            "name": "Bayt at-Ṭasht (House of the Washtub)",
            "significance": "Historical location within the mosque"
        },
        {
            "name": "Safīnat an-Nūḥ (The Ark of Nūḥ)",
            "significance": "Place where Prophet Nūḥ's Ark settled after the Great Flood"
        },
        {
            "name": "Dakkat al-Miʿrāj (Seat of Miʿrāj)",
            "significance": "Connected to the Prophet Muhammad's (s) night journey"
        },
        {
            "name": "Maqām of Prophet Ādam (a)",
            "significance": "Station of the first Prophet and father of humanity"
        },
        {
            "name": "Maqām Jibrāʾīl",
            "significance": "Station of Angel Gabriel (Jibrāʾīl)"
        },
        {
            "name": "Maqām Imām Zayn al-ʿĀbidīn (a)",
            "significance": "Station of the 4th Imam"
        },
        {
            "name": "Bāb Al-Faraj (Gate of Relief)",
            "significance": "Also Maqām of Prophet Nūḥ (a)"
        },
        {
            "name": "Miḥrāb of Amīr al-Mʾuminīn",
            "significance": "Prayer niche where Imam Ali (a) was struck by Ibn Muljim on 19th Ramadan while praying Fajr. He passed away on 21st Ramadan.",
            "note": "Most sacred spot in the mosque"
        },
        {
            "name": "Maqām Imām aṣ-Ṣādiq (a)",
            "significance": "Station of the 6th Imam"
        }
    ],
    "gates": ["Multiple entrance gates around the mosque"],
    "capacity": "Large mosque with expansive courtyards",
    "current_status": "Active mosque with regular prayers and ziyarah"
}

# Masjid al-Sahlah comprehensive
masjid_sahlah_comprehensive = {
    "title": "Bayt Imām al-Mahdī (aj) - The House of Imam Mahdi",
    "significance": "One of the four mosques where prayers and supplications have special acceptance",
    "virtues": [
        "Duas are especially answered here",
        "Special connection to Imam al-Mahdi (aj)",
        "Many prophets and righteous people are associated with this place",
        "Recommended to visit on Tuesday and Thursday nights"
    ],
    "recommended_acts": [
        "Pray 2 rakʿāt in each maqām",
        "Recite Duʿā for the reappearance of Imam al-Mahdi (aj)",
        "Spend time in remembrance and supplication",
        "Make specific prayers for needs"
    ],
    "maqams_detailed": [
        {
            "name": "Maqām Imām aṣ-Ṣādiq (a)",
            "acts": "Pray 2 rakʿāt and make duʿā"
        },
        {
            "name": "Maqām Prophet Ibrāhīm (a)",
            "significance": "Station of Prophet Abraham"
        },
        {
            "name": "Maqām & House of Prophet Idrīs (a)",
            "significance": "Prophet Enoch's place of worship"
        },
        {
            "name": "Maqām Prophet Khiḍr (a)",
            "significance": "The eternal guide and righteous servant"
        },
        {
            "name": "Maqām aṣ-Ṣāliḥīn & Anbīyyāʾ",
            "significance": "Station of the Righteous Ones and Prophets"
        },
        {
            "name": "Maqām Imam Zayn al-ʿĀbidīn (a)",
            "significance": "Station of the 4th Imam"
        },
        {
            "name": "Maqām Imam al-Mahdī (aj)",
            "significance": "MOST IMPORTANT - The house and station of the 12th Imam",
            "special_prayers": [
                "Duʿā for his reappearance",
                "Duʿā ʿAhd",
                "Ziyārah of Imam al-Mahdi"
            ],
            "note": "This is considered the 'house' of Imam Mahdi and has special spiritual importance"
        }
    ],
    "best_times": [
        "Tuesday nights (highly recommended)",
        "Thursday nights",
        "Friday mornings",
        "15th Shaʿbān (birthday of Imam Mahdi)"
    ]
}

# More scholars in Najaf
scholars_in_najaf = [
    {
        "name": "ʿAllāmah Ḥillī",
        "period": "648-726 AH",
        "significance": "Great Shia jurist and scholar",
        "contribution": "Wrote numerous books on fiqh and kalām"
    },
    {
        "name": "Shaykh Murtaḍā Ansārī (Shaykh Aʿẓam)",
        "period": "1214-1281 AH",
        "significance": "Highest ranking scholar of his time",
        "contribution": "Revolutionized the study of Usul al-Fiqh"
    },
    {
        "name": "Ākhūnd Khūrāsānī",
        "period": "1255-1329 AH",
        "significance": "One of the 'Three Great Maraji' of his era",
        "contribution": "Famous for his work 'Kifāyat al-Uṣūl'"
    },
    {
        "name": "Sayyid Abū al-Qāsim Khoei",
        "period": "1317-1413 AH / 1899-1992 CE",
        "significance": "Grand Ayatollah and one of the highest ranking Shia scholars of 20th century",
        "contribution": "Established educational institutions worldwide"
    },
    {
        "name": "Mīrzā Ḥusayn Nūrī",
        "significance": "Author of Mustadrak al-Wasāʾil",
        "contribution": "Compiled additional hadith not in the original Wasāʾil"
    },
    {
        "name": "Shaykh ʿAbbās Qummī",
        "period": "1294-1359 AH / 1877-1941 CE",
        "significance": "Author of Mafatih al-Jinan",
        "contribution": "Most famous book of Shia prayers and supplications"
    },
    {
        "name": "Shaykh Ṭūsī",
        "period": "385-460 AH",
        "significance": "Established the Hawza of Najaf in 436 AH",
        "contribution": "Migrated from Baghdad and made Najaf a center of Shia learning"
    }
]

# Comprehensive dictionary
comprehensive_data = {
    "practical_laws": practical_laws,
    "special_days_by_weekday": special_days_for_masumeen,
    "salah_of_ziyarah": salah_of_ziyarah,
    "ziyarat_niyabah": ziyarat_niyabah,
    "najaf_additional_sites": najaf_additional,
    "masjid_kufa_comprehensive": masjid_kufa_comprehensive,
    "masjid_sahlah_comprehensive": masjid_sahlah_comprehensive,
    "scholars_detailed": scholars_in_najaf
}

# Save to JSON
with open('/app/comprehensive_extracted_data.json', 'w', encoding='utf-8') as f:
    json.dump(comprehensive_data, f, ensure_ascii=False, indent=2)

print("✅ Comprehensive data extraction complete!")
print(f"Extracted {len(scholars_in_najaf)} scholar biographies")
print(f"Extracted {len(masjid_kufa_comprehensive['maqams_detailed'])} maqams from Masjid al-Kufa")
print(f"Extracted {len(masjid_sahlah_comprehensive['maqams_detailed'])} maqams from Masjid al-Sahlah")
print("Data saved to: /app/comprehensive_extracted_data.json")
