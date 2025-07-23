# List to store the study plans
study_plans = []

def main():
    while True:
        print("\nWelcome to the Study Planner!")
        print("1. Create a new study plan")
        print("2. View existing study plans")
        print("3. Exit")

        choice = input("Please enter your choice (1, 2, or 3): ").strip()

        if choice == '1':
            create_study_plan()
        elif choice == '2':
            view_study_plans()
        elif choice == '3':
            print("Goodbye!")
            break
        else:
            print("❌ Invalid choice. Please try again.")

def create_study_plan():
    print("\n📘 Creating a new study plan...")
    
    while True:
        subject = input("What subject are you studying? (Algebra 2, Chemistry, or World History): ").strip().lower()
        if subject in ["algebra 2", "chemistry", "world history"]:
            break
        else:
            print("❌ Invalid subject. Please enter a valid one.")

    time = input("⏰ How long are you going to study for? ")
    date = input("📅 What date are you going to study? (e.g., 2025-07-24): ")

    plan = {
        "subject": subject.title(),
        "time": time,
        "date": date
    }
    study_plans.append(plan)
    print("✅ Study plan created successfully!")

def view_study_plans():
    print("\n📋 Viewing existing study plans...")
    if not study_plans:
        print("⚠️ No study plans created yet.")
    else:
        print(f"\nYou have created {len(study_plans)} study plan(s):\n")
        for i, plan in enumerate(study_plans, start=1):
            print(f"{i}. Subject: {plan['subject']}, Time: {plan['time']}, Date: {plan['date']}")

# Run the main loop
if __name__ == "__main__":
    main()
