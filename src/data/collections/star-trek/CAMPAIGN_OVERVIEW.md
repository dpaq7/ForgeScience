# Star Trek Campaign Setting Overview
**Last Updated: 2024-12-20T12:46:08-05:00**

## Campaign Information
- **ID**: star-trek
- **Name**: Star Trek
- **Description**: Explore the final frontier in this science fiction setting based on Star Trek.
- **Default Language**: Universal Translator

## Character Options

### Ancestries
1. **Vulcan**
   - Logical and disciplined species known for emotional control
2. **Klingon**
   - Warrior culture focused on honor and combat
3. **Bajoran**
   - Spiritual and resilient people
4. **Cardassian**
   - Sophisticated and militaristic society
5. **Ferengi**
   - Commerce-driven culture with complex social rules
6. **Trill**
   - Symbiotic species with access to past host memories
7. **Andorian**
   - Passionate and militant species
8. **Human**
   - Adaptable and diverse species

### Classes
1. **Starfleet Officer**
   - *Heroic Resource*: Command Points
   - *Subclass*: Specialization
   - *Primary Characteristic*: Presence
   - *Key Feature*: Starfleet Training

2. **Vigilante**
   - *Heroic Resource*: Determination
   - *Subclass*: Methodology
   - *Primary Characteristics*: Might, Intuition
   - *Key Feature*: Combat Instincts

3. **Smuggler**
   - *Heroic Resource*: Luck
   - *Subclass*: Specialty
   - *Primary Characteristics*: Agility, Intuition
   - *Key Feature*: Quick Reflexes

4. **Trader**
   - *Heroic Resource*: Profit
   - *Subclass*: Business Model
   - *Primary Characteristics*: Presence, Reason
   - *Key Feature*: Master Negotiator

5. **Diplomat**
   - *Heroic Resource*: Influence
   - *Subclass*: Diplomatic Corps
   - *Primary Characteristics*: Presence, Reason
   - *Key Feature*: Cultural Expertise

### Careers
1. **Command Officer**
   - Leader and tactical decision-maker
   - Skills: Interpersonal, Intrigue
   - Bonus: Presence

2. **Science Officer**
   - Scientific analysis and research specialist
   - Skills: Science, Medicine, Technology
   - Bonus: Reason

3. **Communications Officer**
   - Expert in linguistics and cultural interpretation
   - Skills: Interpersonal, Lore
   - Special: Additional Language Choice

4. **Pilot**
   - Skilled in vessel navigation and flight
   - Skills: Technology, Exploration

5. **Engineer**
   - Technical systems specialist
   - Skills: Technology focused

6. **Security Officer**
   - Ship and crew protection specialist
   - Combat and security focused

7. **Medical Officer**
   - Health and medical care specialist
   - Skills: Medicine focused

8. **Diplomat**
   - Negotiation and cultural relations expert
   - Skills: Interpersonal focused

### Kits
1. **Engineering Kit** (Caster)
   - Technical repairs and diagnostics
   - Features: Emergency Repair, System Diagnostic

2. **Science Kit** (Caster)
   - Scientific analysis and research
   - Features: Scientific Analysis, Field Research

3. **Security Kit** (Martial)
   - Defense and surveillance
   - Features: Defensive Protocols, Security Monitoring

4. **Tactical Kit** (Martial)
   - Combat and strategic operations
   - Features: Combat Systems, Tactical Analysis

5. **Diplomat Kit** (Caster)
   - Cultural and diplomatic tools
   - Features: Universal Translation, Negotiation Support

6. **Vigilante Kit** (Martial)
   - Covert operations equipment
   - Features: Stealth Systems, Independent Operation

### Skills
1. **Starship Operations**
   - *Type*: Technology
   - Knowledge of starship systems and operations

2. **Federation Law**
   - *Type*: Lore
   - Understanding of Federation regulations and procedures

3. **Xenobiology**
   - *Type*: Science
   - Study of alien life forms and their biology

4. **Warp Theory**
   - *Type*: Technology
   - Understanding of warp drive technology and physics

5. **Diplomatic Protocol**
   - *Type*: Interpersonal
   - Knowledge of interspecies diplomatic procedures

### Domains
1. **Science**
   - Scientific research and analysis
2. **Engineering**
   - Technical systems and maintenance
3. **Medical**
   - Healthcare and biological sciences
4. **Tactical**
   - Combat and strategic operations
5. **Command**
   - Leadership and coordination

### Complications
1. **Prime Directive**
   - *Benefit*: Enhanced understanding of cultural dynamics
   - *Drawback*: Must make Will saves when decisions could affect pre-warp civilizations

2. **Borg Implants**
   - *Benefit*: Enhanced technological capabilities
   - *Drawback*: Must resist lingering Collective influence

3. **Telepathic Trauma**
   - *Benefit*: Advantage on detecting telepathic presences
   - *Drawback*: Disadvantage on saves against telepathic abilities

4. **Temporal Incursion**
   - *Benefit*: Insight into possible futures
   - *Drawback*: Occasional temporal displacement confusion

5. **Mysterious Alien Heritage**
   - *Benefit*: Access to latent alien powers
   - *Drawback*: Risk of temporary physical transformation

6. **Quantum Duplication**
   - *Benefit*: Can glimpse alternate reality actions
   - *Drawback*: Risk of phase shifts between realities

7. **Holodeck Addiction**
   - *Benefit*: Excellence in holographic environments
   - *Drawback*: Must make Will saves to leave simulations

8. **Exotic Xenobiological Condition**
   - *Benefit*: Occasional beneficial mutations
   - *Drawback*: Requires regular medical monitoring

9. **Section 31 Operative**
   - *Benefit*: Access to classified resources
   - *Drawback*: Must maintain cover at all costs

10. **Artificial Consciousness Transfer**
    - *Benefit*: Direct computer system interface
    - *Drawback*: Vulnerable to electronic interference

## Implementation Notes
- All content follows TypeScript interfaces and models
- Features use FeatureLogic for consistent creation
- Combat values balanced between martial and caster types
- Integration with core game systems verified through tests

## Future Content Plans
- [ ] Add subclasses for each class
- [ ] Expand species-specific features
- [ ] Add more career-specific complications
- [ ] Develop additional kits for specialized roles
- [ ] Create faction-specific content

## Change History

### 2024-12-20T12:46:08-05:00
- Updated complications list with six new options
- Added detailed benefits and drawbacks for all complications
- Standardized complication format

### 2024-12-20T11:50:42-05:00
- Initial creation of campaign overview document
- Documented all existing content types and implementations
- Added future content plans section

### 2024-12-20T10:58:02-05:00
- Completed kit integration tests
- Verified all kit implementations
- Updated kit registry with new content

## Document Maintenance

### Synchronization Rules
1. **Code Changes**
   - Update this document whenever modifying game files
   - Include timestamp of changes
   - Document impact on other systems

2. **Required Updates**
   - New content additions
   - Content modifications
   - Content removals
   - Implementation changes
   - Test results

3. **Update Format**
   ```markdown
   ### YYYY-MM-DDThh:mm:ss-05:00
   - [Category] Description of change
   - [Files Affected] List of modified files
   - [Impact] Any system-wide effects
   ```

4. **Categories**
   - Content: New or modified game content
   - Implementation: Changes to code structure
   - Test: New or updated tests
   - Documentation: Changes to this or related documents

### Related Files
- `careers.ts`: Career definitions and features
- `classes.ts`: Class implementations
- `kits.ts`: Equipment and tool definitions
- `ancestries.ts`: Species and racial features
- `complications.ts`: Character complications
- `domains.ts`: Skill and ability domains
- `campaign-setting.ts`: Main setting configuration

*This document serves as the central reference for the Star Trek campaign setting. All code changes should be reflected here to maintain consistency between documentation and implementation.*

---
*This overview will be updated as new content is added or modified. Last test verification: 2024-12-20T10:58:02-05:00*
